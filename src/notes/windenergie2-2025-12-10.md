---
course: Windenergie 2 
type: Reliability and Maintenance 2
by: Po Wen Cheng
date: 2025-12-10 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Questions at the beginning

- What is the main source of the wind turbine noise?
    - Aerodynamic noise
- Sound pressure level corresponds to
    - Immission
- What is a typical sound power level of a multi megawatt wind turbine?
    - Around 106 dB
- Which availability gurantee is financially more attractive for the wind farm operator
    - Energy based availability
- Which part of the area is the reliability of the component at time t?
    - The area below the graph and on the right side of the time
    - As time goes on, the reliability approaches zero
- Which is the MTBF (mean time between failure) of a gearbox if it failed four times in ten years of operation?
    - 21900 hrs
- Which distribution is commonly used for modeling of probability of failure of wind turbine components?
    - Weibull distribution
    - Exponential distribution also, since it only is a special case of the Weibull distribution with shape parameter 1
    - **Not** Normal distribution, it is symmetrical, which does not correspond at all to time to failure distribution
    - **Not** Gumbel distribution, it is only used to model extreme conditions
- Which failure probability distribution has a constant failure rate?
    - Exponential distribution, it means that failures only happen randomly
- How does a typical failure rate (lambda) over the time (t) look like?
    - Bathtub curve

Very good summary of reliability / failure rate / ... on **slide 25**

## System Reliability

Now that we can calculate reliabilities of single components, what is the probability of the whole windturbine to be offline?

Formulas to calculate the reliability

$$
R(t) + F(t) = 1
$$
$$
F(t) = \int_{0}^{t} f(x)\, dx
$$
$$
\lambda = \frac{1}{\eta} = \frac{1}{MTBF}
$$

- $R$ - Reliability probability  
- $F$ - Failure probability  
- $\lambda$ - Failure rate (1/h)  
- $MTBF$ - Mean Time Between Failures  
- $t$ - Time or any other relevant factor  

This simplified approach applies only when the failure rate is constant (true for the exponential distribution).

### Serial Systems

A system in which all components must be operating simultaniously for the system to be successful. The failure of a single component will cause the whole system to fail\
The word serial has nothing to do with the physical arrangement of components

### Parallel Systems

A system in which the success of any one component is equivalent to the success of the entire system. All components must fail before the parallel system fails.\
This structure functions must have the value 1 when the indicator variable of any one component is 1 and have the value 0 only when all the indicator variables are 0.\
System reliability is significantly improved!

## Monte Carlo Simulation for System Reliability

Used by simulation programs to estimate\
*Simulate millions of coin flips to estimate probability*

- availability
- number of expected failures
- reliability
- production capacity
- costs

## Failure Mode Analysis FMEA

First step of a system reliability study to improve the reliability

- Used to review the components, assemblies, subsystems to identify critical failure modes, their causes and effects#
- Mainly a qualitative analysis
- Experience is very important in FMEA

Next lecture: Reliability and Maintenance Part 3

