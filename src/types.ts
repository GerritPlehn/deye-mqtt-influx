import type { IPublishPacket } from "mqtt";

export type Bundle = {
	timestamp: Date;
	entries: { topic: string; message: string; packet: IPublishPacket }[];
};
