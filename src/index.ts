import { Point } from "@influxdata/influxdb-client";
import mqtt from "mqtt";
import { metrics } from "./metrics";
import { influxDb } from "./influx";
import type { Bundle } from "./types";

import { mqtt as mqttCfg } from "./env";

// deye-mqtt sends measurements in separate messages
// we want to bundle them into an influxdb point with multiple fields

const mqttClient = mqtt.connect(mqttCfg.url, {
  username: mqttCfg.user,
  password: mqttCfg.pass,
});

const topics = ["deye/#"];

mqttClient.on("connect", () => {
  console.log("connected to inverter");
  for (const topic of topics) {
    mqttClient.subscribe(topic, (err) => {
      if (!err) {
        console.log(`subscribed to ${topic}`);
      }
    });
  }
});

const bundleTimeoutMs = 1000;

let bundle: Bundle;

mqttClient.on("message", (topic, message, packet) => {
  console.log(`message in ${topic}: ${message.toString()}`);

  const messageTs = new Date();
  if (
    !bundle ||
    messageTs.getTime() - bundle.timestamp.getTime() > bundleTimeoutMs
  ) {
    // initialize a new bundle when necessary
    bundle = { timestamp: messageTs, entries: [] };
    setTimeout(async () => {
      // save new bundle to influx after our specified timeout
      await saveBundle(bundle);
    }, bundleTimeoutMs);
  }

  bundle.entries.push({ topic, message: message.toString(), packet });
});

const saveBundle = async (bundle: Bundle) => {
  const influxPoint = new Point("Deye").timestamp(bundle.timestamp);
  for (const bundleEntry of bundle.entries) {
    const { topic, message } = metrics.parse(bundleEntry);
    switch (typeof message) {
      case "string": {
        influxPoint.stringField(topic, message);
        break;
      }
      case "number": {
        influxPoint.floatField(topic, message);
        break;
      }
      default: {
        console.warn(`unknown message of type ${typeof message}`);
      }
    }
  }
  influxDb.writePoint(influxPoint);
};

const gracefulShutdown = async () => {
  await mqttClient.endAsync();
  await influxDb.close();
  console.log("closed connections");
  process.exit();
};

process.on("beforeExit", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
