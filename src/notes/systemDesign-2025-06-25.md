---
course: System Design 1
type: Chapter 7, 8
by: Bastian Luettig
date: 2025-06-25 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Platform Management: Law

## Requirements

### Examples: no Inherent Computer Replica Determinism

Other applications do not feature this inherently:

- A340 Flight Control System: features load factor control and master-status
- Airbus Autopilot: stores target altitude in each computer

**Forced Computer Replica Determinism**

If an application does not inherently achieve computer replica determinism, the management
software can force it to do so by e.g. forcing internal states or implementing drift compensation

#### Example: Discrete Decisions

We ensured using PLAMA:SENSOR, that all discrete sensors exhibit identical values. But: what
about pseudo discretes?

### Conclusion: Computer Replica Determinism

Certain effects may violate computer replica determinism

- drift
- counters
- discrete secisions

### Forced Computer Replica Determinism

Whenever an applications unses one of the above, PLAMA:LAW has to force the applications into computer replica determinism by drift-compensation, internal state overriding or by making discrete decisions identical

## Consolidation Management

### Components

- Zsfu: evaluates highest possible mode (with respect to platform status) and valid indication for commands
- Tlaw: actual control law, creates commands
- dbcss: contains information from PLAMA:SENSOR and PLAMA:ACTOR: redundant signal values, valid indication, status of actor components
- FRBC: provides Reliable BroadCast for pseudo discretes
- FBC, FVoting, FDrift provide drift and counter compensation
- FMonitor provides cross-computer-lane monitoring
- Fopma decides which degradation to perform

Replicas execute computer-replica-deterministic, if for identical input values, they produce identical output values (refers to both, values and order of values)

![graph](/src/bilder/systemDesign_image_20.jpeg)
<figcaption>Examples: Visually</figcaption>

## Supervisor Management

Find the degredation model the law should actually perform\
The aircraft must not execute normal or alternate law when it is on-ground, because the load factor control is unavailable

## State transfer function

The state transfer function has two distinct tasks:
(1) evaluate the highest possible degradation mode zmode.sfu, depending on available sensors,
actors and computers; and
(2) evaluate the valid information for each command, depending on the actual degradation
mod e smode.law.

![graph](/src/bilder/systemDesign_image_21.jpeg)
<figcaption>Each $sf_o$ has dedicated sensors, coil and mode valve solenoids; just not displayed for better overview. All switches are actually closed (i.e., contacted)</figcaption>

Which simplification can we perform?

- if the redundant computer evaluates the state transfer function, it is not failed
- PLAMA:SENSOR evaluates the sensor data
- each state $z_{\text{mod, x}}$ is replaced by $s_{\text{off, x}}$

## Signal Transfer Function $\tau\_{\text{law}}$

PLAMA:LAW ensures Core Consensus - even for cases that differ from the fundamental Computer-Replica_Determinsim definition\
If an applications uses pseudo-discretes or not BIBO-stable functions, PLAMA:LAW forces the application to pruduce $A_\Delta / A_=$

The state transfer function $Z_\text{sfu}$ and $\varepsilon \_\text{sfu}$ allow the application to detect its maximum execution mode and $F_\text{opma}$ computes the actual execution mode

# Platform Management: Actor

## Requirements

The platform management actor is suitable for the redundant computer, if it guarantees that the redundant computer ($M_{rfcc}$) correctly controls the actuators in all valid operating scenarios

What does ”performs correctly” mean? The redundant computer correctly commands actors in all valid operating scenarios, if it shows:

1. synchrony
2. agreement
3. integrity

- PLAMA:ACTOR ensures actuator consensus
- PLAMA:ACTOR ensures $P(\mathbb{Z}_\text{fo, ra}) < 1,5 \cdot 10^{-10}$

## Fundamentals

### Actuators: Challenges and Concepts

**Single Actuator Components**\
Actuators may have components that exist individually for each commanding computing lane.

- coils that drive a direct drive valve
- sensors for currents or positions
- solenoids

**Common Actuator Components**\
An actuator will have components that are common to all commanding computing lanes.

- direct drive valve
- mode valve
- control piston

### Hydraulic Actuator

**Parts**

- Coils that computers control with switches to passivate the outputs and sensors
- Solenoids that computers control with switches
- sensors on each common actuator component

**Operation**

- Lanes command a current to the coils
- coils generate an electromagnetic field that pushes the direct drive valve
- the lanes power the solenoids that hold the switch on the mode-valve
- this then commands hydraulic fluid (left and below mode valve in drawing) to actuate the control piston
- the control piston moves the mechanical shaft (right of mode valve in drawing) to move the control surface

## Tasks

- Faulty Sensors
  - The system consists of five redundant sensors
  - Each redundant sensor exists as quadruplex sensor with 1:1 strapping and follows F/O-F/O-F/P operation
  - Use PLAMA:SENSOR to find defectuve single sensors and have a correct redundant sensor value

**Next Week: AI Guest Lecture**