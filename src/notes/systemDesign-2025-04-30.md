---
course: System Design 1
type: Chapter 4
by: Bastian Luettig
date: 2025-04-30 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Markov Analysis

Assess a systems state based on its components states

![example](/src/bilder/systemDesign_image_8.jpeg)
<figcaption>Example system with 3 sensors, 3 computer lanes and 2 actuators</figcaption>

## Markov Tree *You should know this for the exam*

![markov](/src/bilder/systemDesign_image_9.jpeg)
<figcaption>Any mixed failures result in more than 2 failures, i.e. P (λ3) << P (λ2), hence we simplify by ignoring those cases</figcaption>

![probabilities](/src/bilder/systemDesign_image_11.jpeg)
<figcaption>Why do the probabilities not multiply alonog a diagram path?</figcaption>

In general, we assume a strictly-fail-passive operated component $ (i.e. sensors and computers) with redundancy degree $r$:

$$P(\mathbb{Z}_{\text{fp,mod,k}}) = r \cdot (\lambda T)^{r-1}$$

For other components $K$ (that support simplex operation) in redundancy degree $r$:

$$P(\mathbb{Z}_{\text{fp,mod,k}}) = (\lambda T)^{r}$$

## Redundant Platoform Development

### Finding redundancy degree

Sensors and Computers

- **Integrity**: we need a redundancy degree $r = 2$ to ensure best fault detection; hence: avoid $f_O$
- **Reliability**: we need a redundancy degree $r \ge 2$ to ensure $P(\mathbb{Z}_{\text{fp,mod,k}})$ meets the requirement

Actuators

- **Integrity**: we want a redundancy degree $r = 1$ to suffice to avoid $f_O$
- **Reliability**: we need a redundancy degree $r \ge 1$ to ensure $P(\mathbb{Z}_{\text{fp,mod,k}})$ meets the requirement

Analytical Redundancy for Actuators

- To ensure integrity with $r = 1$, analytical redundancy is implemented in the form of a digital twin that the computer executes during runtime.

**Step 1**:\
Develop platform architecture based on signal requirements fromYRD
Result: Simplex platform architecture\
**Step 2**:\
Develop platform architecture based on state requirements fromYRD
Result: Redundant platform architecture

## System Design: Redundant Computers

Integrity:
Quadruplex Computer, remember valid states from earlier this chapter.
States to analyze: byzantine fault in quadruplex, byzantine fault in triplex, double fault in
quadruplex.
Other states are not minimal cut sets.

- no byzantine faults will lead to out-of-control in quadruplex mode **R-YDD-6**
- byzantine faults in triplex (after one passive loss) may occur **R-YDD-7**
- double faults lead to out-of-control **R-YDD-8**
- the overall out-of-control probability is $< 4 \cdot 10^{-10}$

## System Design: Redundant Sensors

Computers read sensor data, hence sensors have to connect to computers. This is generally referred to as ”**strapping**”. Within this lecture, we have 1:1 strapping and cross-strapping.

1:1 Strapping: Each sensor connects to a single computer, i.e. has only one connection\
Cross strapping: Each sensot connects to each of the single computers, i.e. it has four connections in case of quadruplex redundant computers

### Flight stick

- The stick sensor connects only to a single computer lane.
- This means the sensor fails whenever a computer lane fails.
- The lanes fails with 1 · 10−4 h−1 and thus dominates the sensor failure.
- This will not suffice! (P (Zfp,mod,rf ) = 3 · 10−8)
- Why? Rules of thumb apply to cross-strapped components.
- At least 4 sensors (same reliability as for redundant computer)

## Redundant Actuators / Elevators

We try to tackle the out-of-control case by digital twins (analytical redundancy).
Each law needs at least one elevator actuator. Passive failure of direct law is the most stringent
requirement.

## Development results

![architecture](/src/bilder/systemDesign_image_10.jpeg)
<figcaption>preliminary platform architecture</figcaption>

- We found an initial redundant platform architecture.
- We used rules of thumb and ignored more complex connection / interactions
- Next step: validate the developed architecture

# Platform Validation

We did not consider:

- combined computer lane and sensor failures
- the failure budget must account for all passive failures
- how to meet the out-of-control budget for actuators

- validation: loss of direkct law
- validation: loss of alternate law
- validation: loss of normal law

## conclusion

- State-Transfer-Functions for modules
- Redundant Computer Behavior
- Redundant Sensor Behavior
- Redundant Actor Behavior
- Simplified Markov-based Safety Assessment
- Actual Redundant Platform Development
- Redundant Platform Validation