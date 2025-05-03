---
course: System Design 1
type: Chapter 3
by: Bastian Luettig
date: 2025-04-23 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Platform Architecture

- How to find the required degree of redundancy for computers, sensors and actuators
- How to operate redundant computers
- How to validate the redundant architecture#

## When does a failed computer get out of control

### Redundant computer: Module State Passive

The redundant computer is passive, if all single computer lanes are passive\
With a passive failure within duplex operation, both lanes need to passivate. If one lane remains not passive, the redundant computer cannot be passive

### Redundant computer: Module State out-of-control

The redundant computer is out of control, if the single computer lanes states are within:

![out-of-control](/src/bilder/systemDesign_image_7.jpeg)
<figcaption>module state out-of-control</figcaption>

States (for each line in the above set)\
(1) due to byzantine faults in quadruplex configuration; **unacceptable**\
(2) due to special byzantine faults in triplex configuration\
(3) due to double faults in quadruplex configuration\
(4) due to double faults in triplex configuration

For quadruplex operation, we do not accept fault propagation with a single fault

1. Catastrophic events due to a single failure are unacceptable
2. Quadruplex systems can be designed, so that they work after any first failure
3. Probability for such events would be too high (unacceptable)


For bare triplex operation, we cannot outrule this by design

## Redundant Computer: conclusion

1. A reundant computer can either be correct, passive or out-of-control
2. the state depends on the single computer's state
3. we can design a quadruplex system that can mitigate every first failure
4. we cannot design a (pure) triplex system to do the same
5. the redundant computer can make the law command worse, not better
6.  the redundant computer is only passive if all single computer lanes are passive
7.  the redundant computer with state $z_{mod, rf}$ produces commands $z_{rf, d}$ using $z_{law, d}$

## Redundant Sensors: Simplification

The physical state does not fail, wit will always be correct. A signal after being acquired by a sensor (or the sensor itself) can fail

ss - single sensor
rs - redundant sensor

### Voting / Monitoring for Sensors

If a computer performs voting / monitoring for sensors with strictly fail / passive behavior, the redundant sensor state will only hae the states correct and fail passive $z_{mod, rs, d} \in \{c, f_p\}$

Signal lifecycle:

1. single computers acquire sensor signals
2. single computers build an internal status based on sensor state and internal passivation $s_{off}$
3. singe computers exchange the information (cross-lane)
4. each single computer lane computes a voting value from the revised sensor values
5. each single computer lane sets a new state depending on the individual sensor value and the voting value (monitoring)

But: a sensor will also fail, if the connected single computer lane fails

<!-- Foto aus vorlesung -->

<!-- slide 30 abschreiben -->

- A redundant sensor can either be correct, passive, or out-of-control
- we operate sensors strictly fail-passice, hence we can outrule out-of-control
- the state depends on the single sensor states and the single computer lanes
- we do not have byzantine faults in the sensors, as each sensor only communicates with one lane
- the signal state is correct before the sensor (physics to not fail)
- the sensor can make this worse
- the redundant sensors with state $z_{mod, rs}$ produce signals $z_{rs, d}$

## Redundant Actuators: Simplex Actuator

<!-- slide 32 -->

If single actuator and redundant computer are fine, the actuator performs the command.
If either single actuator or redundant is passive, the actuator behaves passive.
In all other cases (actuator out-of-control and computer correct; computer ooc): actuator fails
out of control.

# Safety Assessment

<!-- slide 40 / 45 table -->
<!-- slide 46 -->

For the reliability problems, we need to perform an analysis to find all states that lead to a
passive fault of a certain degradation. We have to do this for each degradation.
For the integrity problems, we have to conduct analytical assessments to find a maximum
probability with respect to potential failure modes discussed earlier

