---
course: System Design 1
type: Chapter 6
by: Bastian Luettig
date: 2025-06-04 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Platform Management: Sensor

## Requirements

$B_{\text{v,rs.rfcc}}$ - At least two computers and two attached sensors are part of the system, which means they are not passivated

Platform management sensor is suitable for the reundant computer, if it gurantees that the redundant computer correctly acquires the sensor data in all valid operating scenarios. It *performs correctly*, if:

- synchrony: all correct single computers acquire the sensor data time synchronous
- agreement: all correct single computers acquire similar data in each cycle
- integrity: all correct single computers acquire actual sensor data or a default value if no sensor values were acquired

## Sensor Types

Simple Sensors (e.g. simple PT100 temperature sensor)

- transforms the physics signal into current, voltage, frequency
- single computer performs the actual measuring and conversion
- cross-strapping almost impossible

Complex Sensors (e.g. Honeywell Air Data Computer with ARINC429 output)

- transforms the physics signal to the suitable signal, sensor performs the conversion
- sensor communicates voa messages with single computers
- cross-strapping possible

We have to expect disagreement among correct sensors:

- due to imprecise trigger of redundant sensors
- due to imprecise sampling from redundant computers

Hence: correct redundant discrete single sensors do not have $A_=$, but instead have $A_\in$

## Bus Sensors: ARINC 429

- Parity Bit: 1 if number of HIGH bits is odd
- Label: type and information for payload
- Payload: any signal data
- SSM: two bits that indicate the status information:
  - 0/0: failure warning
  - 0/1: no computed data
  - 1/0: functional test
  - 1/1: normal operation

## Bus Sensors: ARINC 664 / AFDX

- Consists of an Ethernet frame with up to 1518 bytes, including
- 47 byte overhead (MAC source, destination, IP and UDH header, message type, sequence number)
- AFDX payload:
  - Functional Status Sets
  - Date Sets (float, integer, boolean, boolean-field, opaque data)
- the system designer defines Virtual Links between AFDX communication modules; they represent cables that would exist in a classic implementation, each has one sender and at least one receiver

## Bus Sensors: Messages / Properties

1. signals are packed into messages (frames)
2. a complex sensor may transmit different messages
3. the sensor transmits messages cyclic
4. each message has a checksum, e.g., parity bit, or CRC; to detect some transmission errors
5. a signal may have a payload code, e.g., SSM, FS; this gives an indication for the sensor state:
   - 1/1: sensor is in normal operation, the system should use the signal
   - 1/0: sensor is in test mode, the sensor just started up and signals should not be used or monitored
   - 1/0: sensor is in bootup mode, sensor just powered-on, signals should not be used or monitored
   - 0/0: sensor considers itself as failed, signals should not be used, sensor not to be trusted
6. Data of redundant complex sensors have:
   - Analog data: $A_\Delta$
   - Discrete data: $A_\in$

For all messages from a sensor, check if

1. a new message has arrived
2. the arrived message matches the checksum
3. the payload status is useable
4. the payload is within the expected limits
5. the signals are correct