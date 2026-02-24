import * as z from "zod";

const envShape = z.object({
	INFLUX_URL: z.string().min(1),
	INFLUX_TOKEN: z.string().min(1),
	INFLUX_ORG: z.string().default("default"),
	INFLUX_BUCKET: z.string().default("deye"),
	MQTT_URL: z.string().min(1),
	MQTT_USER: z.string().min(1),
	MQTT_PASS: z.string().min(1),
});

const env = envShape.parse(process.env);

export const influx = {
	url: env.INFLUX_URL,
	token: env.INFLUX_TOKEN,
	org: env.INFLUX_ORG,
	bucket: env.INFLUX_BUCKET,
};

export const mqtt = {
	url: env.MQTT_URL,
	user: env.MQTT_USER,
	pass: env.MQTT_PASS,
};

export { env };
