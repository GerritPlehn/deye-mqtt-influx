import { InfluxDB } from "@influxdata/influxdb-client";

import { influx } from "./env";

const { url, token, org, bucket } = influx;

// create a write API, expecting point timestamps in nanoseconds (can be also 's', 'ms', 'us')
export const influxDb = new InfluxDB({ url, token }).getWriteApi(
	org,
	bucket,
	"ns",
);
