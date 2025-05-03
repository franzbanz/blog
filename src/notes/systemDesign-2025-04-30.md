---
course: System Design 1
type: Vorlesung
by: Bastian Luettig
date: 2025-04-30 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Markov Analysis

First, we need a method to assess a systems state based on its components states.
We found this method earlier: state-transfer-functions and evaluation functions.
Bonus: we can evaluate sensors, computers and actuators independently.
Given the example system with 3 sensors, 3 computer lanes and 2 actuators:
<!-- Slide 46 -->

<!-- diagram slide 47 -->
<!-- Why do the probabilities not multiply alonog a diagram path? - See Picture of Blackboard -->

<!-- Markov Tree rule of thumbs (important!) -->

## Redundant Platoform Development

### Finding redundancy degree

<!-- Slide 51 -->

Step 1:
Develop platform architecture based on signal requirements fromYRD
Result: Simplex platform architecture
2 Step 2:
Develop platform architecture based on state requirements fromYRD
Result: Redundant platform architecture

### step 1

<!-- Grapth slide 53 -->

Integrity:
Quadruplex Computer, remember valid states from earlier this chapter.
States to analyze: byzantine fault in quadruplex, byzantine fault in triplex, double fault in
quadruplex.
Other states are not minimal cut sets.

- no byzantine faults will lead to out-of-control in quadruplex mode; R-YDD-6
- byzantine faults in triplex (after one passive loss) may occur; R-YDD-7
- double faults lead to out-of-control; R-YDD-8
- the overall out-of-control probability is < 4 · 10−10

<!-- slide 57  red box, after that the calculation from the picture-->

## Redundant Computer / Result

<!-- slide 59 -->

## Redundant Sensors

<!-- slide 60 -->

We exclude the first case by strictly fail-passive behavior. (∑
d P (Zfo,mod,rs(d)) = 0)
The other cases have to meet the assigned requirements. Let’s start with the angle-of-attack
sensor (α).

<!-- slide. 61 -->

<!-- slide 63: << means about one order of magnitide greater -->

### Flight stick

dominant failure stems from the computers the stick sensor is connected to - this will not suffice

## Redundant Actuators / Elevators

We try to tackle the out-of-control case by digital twins (analytical redundancy).
Each law needs at least one elevator actuator. Passive failure of direct law is the most stringent
requirement.

## Development results

<!-- slide 77 graph more complex: e.g. sensor / computer lane interaction-->

- With that, we found an initial redundant platform architecture.
- We used rules of thumb and ignored more complex connection / interactions
- Next step: we have to validate the developed architecture

# Platform Validation

<!-- slide 79 -->

- direkct law
- alternate law
- normal law

## conclusion

State-Transfer-Functions for modules
Redundant Computer Behavior
Redundant Sensor Behavior
Redundant Actor Behavior
Simplified Markov-based Safety Assessment
Actual Redundant Platform Development
Redundant Platform Validation