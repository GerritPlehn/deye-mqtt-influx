# Deye MQTT to InfluxDB

Designed as a small shim between [deye-inverter-mqtt](https://github.com/kbialek/deye-inverter-mqtt/) and [InfluxDB](https://www.influxdata.com/).

Provide links to your MQTT relay (like Mosquitto) and your InfluxDB, the rest is done for you.

Currently only supports the micro and settings metric groups, in addition to the availability and logger status topic. Refer to the [deye-inverter-mqtt](https://github.com/kbialek/deye-inverter-mqtt/) README.

## How to use

To install dependencies:

```bash
bun install
```

Copy `.env.example` to `.env` and adjust the variables as necessary. Alternatively provide the listed environment variables as you seem fit.

To run:

```bash
bun start
```

This project was created using bun. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
