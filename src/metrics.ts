import { z } from "zod";

const mqttNumber = z.coerce.number();

export const metrics = z.discriminatedUnion("topic", [
	z.object({
		topic: z.literal("deye/status"),
		message: z.enum(["online", "offline"]),
	}),
	z.object({
		topic: z.literal("deye/logger_status"),
		message: z.enum(["online", "offline"]),
	}),
	z.object({
		topic: z.literal("deye/day_energy"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/total_energy"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/ac/l1/voltage"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/ac/l1/current"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/ac/l1/power"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/ac/freq"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/uptime"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv1/voltage"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv1/current"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv1/power"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv1/day_energy"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv1/total_energy"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv2/voltage"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv2/current"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv2/power"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv2/day_energy"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv2/total_energy"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv3/voltage"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv3/current"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv3/power"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv3/day_energy"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv3/total_energy"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv4/voltage"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv4/current"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv4/power"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv4/day_energy"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/pv4/total_energy"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/dc/total_power"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/operating_power"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/ac/active_power"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/radiator_temp"),
		message: mqttNumber,
	}),
	z.object({
		topic: z.literal("deye/settings/active_power_regulation"),
		message: mqttNumber,
	}),
]);
