---
course: System Design 1
type: Chapter 8
by: Bastian Luettig
date: 2025-07-08 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Platform Management: Actor
## Requirements

The platform management actor is suitable for the redundant computer, if it gurantees that the redundant computer ($M_{\text{rfcc}}$) correctly controls the actuators in all valid operating scenarios. This is achieved if:

- synchrony: all correct single computers send actuator commands time synchronous
- afreement: all correct single computers compute simmilar commands in each cycle
- integrity: in all correct operating scenarios, the actual actuator position follows the command, in all not correct operating scenarios, the actual actuator position should be passive, e.g. floating

**PLAMA:ACTOR** ensures actuator consensus\

## Fundamentals
### Challenges and concepts

Actuators may have components that exist individually for each commanding computing lane (**Singe Actuator Components**). e.g. position sensors, current sensors, solenoids

An actuator will have components that are common to all commandung computing lanes (**Common Actuator Components**). e.g. direct drive valve, mode valve, control piston

**See previous lecture for more details on Fundamentals and Tasks**

## Software Architecture

There are four main software tasks:

- Computation of drift-correction and pseudo-discretes
- Cross-single-computer-monitoring for actual actuator commands (e.g. commanding currents)
- Handling of failure indications set by models
- Ensuring consistency among $s_\text{off}$ for the actuator components

**Drift Correction and Pseudo-Discretes**: A similar concept to PLAMA:LAW: the actuator control algorithm is itself a control law, that may contain a BIBO-instable parts and pseudo-discretes, that PLAMA:ACTOR must compensate for.

**Cross-Single-Computer-Monitoring**: After PLAMA:Actor ensured computer-replica-determinism, the redundant system can now check for individual lane faults: each lane should command the same value. If it does not, it is faulty. Here we see the command as sent by the software, not the actual electrical command that we measure using sensors

**Handling of Failure Indications set by Models**: Whenever the actual movement diverges too much from the model: PLAMA:ACTOR suspects an actuator failure.

**Consistency / Resource Manager**: The resource manager will passivate an actuator if it does not meet the required minimum components (i.e. one common component *off* or too many single components *off*)

## Actor Control Law and Digital Twins
