---
course: Windenergie 2 
type: Reliability and Maintenance 1
by: Po Wen Cheng
date: 2025-12-03 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Questions at the Beginning

- If the short circuit apparent power of a medium voltage grid is 1000 MW, what is the maximum power that can be injected by a wind park?
    - 20 MW (2 %)
- Of the (wind) power output decreases and the demand stays the same
    - The grid frequency will decrease
- Which is the least stringent grid code (with respecct to LVRT)
    - The ones which dont need the turbines to stay online when the voltage drops below a certain percentage of normal output
    - The ones higher up on the voltage / short-cicuit period graph
- Which generator type would use a circuit breaker with lower rated current?
    - Asynchronous generator, has jump in short circuit current (the higher the current, the more robust the circuit breaker has to be)
    - Synchronous generator does **not** have this jump in short cicuit current
- Which generator type would be able to provide the most reactive power (VAr)?
    - Synchronous generator
    - Double-fed asynchronous generator can provide a little reactive power
- What is the typical voltage level of wind turbine generators?
    - 690 V (low voltage)
    - Moving to higher voltage would allow for a more compact system inside the wind turbine

## Reliability, Availability and Maintainability (RAM)

In germany, turbines tend to be of a more reliable kind (ENERCON), because there are no large investors owning thousands of turbines, which would enable them to use failure statistics to their advantage.\
With only a small number of turbines, it makes sense to have more reliable turbines and have ENERCON's insurance to minimise risk.

### What is Reliability

1. The ability of an apparatus, machine, or system to consistently perform its intended or required function or mission, on demand and without degradation or failure.
2. In manufacturing: The probability of failure-free performance over an item's useful life, or a specified timeframe, under specified environmental and duty-cycle conditions. Often expressed as mean time between failures (MTBF) or reliability coefficient. Also called quality over time.
3. Consistency and validity of test results determined through statistical methods after repeated trials.

### What is Availability

Probability that the system is in a functional condition at the time $t$ during a defined time span (under correct maintenance and operation)

$$
\text{Availability} = (1 - (\frac{\text{unavailable hours}}{\text{total period (hrs)}})) \cdot 100
$$

A much better measurement is the *Energy Based Availability*\
Can detect poorly scheduled maintenance, performance issues when turbine is running\
However, it needs more data and is harder to be calculated accurately

$$
\text{Availability} = (\frac{\text{energy produced}}{\text{potential energy production}}) \cdot 100
$$

*Inherent Availablity* is the probability, that a system will operate satisfactorily. It excludes preventive maintenance, logistics and administrative delays.

IEEE definitions of *RAM* can be found on **slide 16** of this lecture on Ilias

## Bath Tub Curve



## Weibull Distribution



