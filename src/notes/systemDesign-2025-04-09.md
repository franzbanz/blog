---
course: System Design 1
type: Vorlesung
by: Bastian Luettig
date: 2025-04-09 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Goals

System Design 1: Lecture

- allocate safety requirements to a system
- develop a suitable system architecture using the **all-service strategy**
- develop a suitable platform management software for the architecture

System Design 2: Lab course

- actually program redundancy mechanisms
- demspntrate deep understanding of the all active architecture
- show properties of this architecture

# Why is system development so complex?

![number of aviation related fatalities](/src/bilder/systemDesign_image_1.png)
<figcaption>Number of aviation related fatalities have drastically decreased</figcaption>

- high system redundancy and safety
- New Cockpit design

## What does the system do?

Pilot uses stick deflection to control vertical acceleration (load factor control)

- stick centered, stationary level flight $\phi = 0, a_z = 0$
- stick pulled, rotates nose upwards $\phi > 0, a_z > 0$
- stick pushed, rotates nose downwards $\phi < 0, a_z < 0$

![simplex system](/src/bilder/systemDesign_image_2.png)
<figcaption>Simplex system without redundant lanes etc...</figcaption>

System development for load factor control and protections, e.g. stall protection limits $\alpha$\
more complex applications (laws) that require capable controllers / computers

## Safety

- probable: $10^{-3}h^{-1}$
- remote: $10^{-5}h^{-1}$
- extremly remote: $10^{-7}h^{-1}$
- extremly improbable: $10^{-9}h^{-1}$

![functional degredation](/src/bilder/systemDesign_image_3.png)
<figcaption>Functional degredation with multiple failures</figcaption>

Degradation: Systems could degrade in function when losing certain sensors\
systems can  operate in different modes\
the modes depend on the system's state\
the failure of modes might have different safety-criticality

Trimmable horizontal stabilizers in emergencies can be used to manually control elevation in large airliners

$P(lossOfNormalLaw) = 10^{-4}$\
$P(lossOfNormalLaw, alternateLaw) = 10^{-7}$\
$P(lossOfNormalLaw, alternateLaw, directLaw) = 10^{-9}$

Simplex architecture oftentimes cannot meet the reliability figures required for high safety
Other options:

- Having multiple independant channels - problems arise if sensor values are slightly different
- Having multiple computers communicate and detemine the correct operation

Redundant systems challenges

- monitoring
- computer.replica-determinsim
- input and output consensus
- byzantine faults

## separation of application and platform

separating the flight control application law (IFR) and redundant computing platform (ILS)

![functional degredation](/src/bilder/systemDesign_image_4.png)
<figcaption>The flight control application (law): IFR\
The redundant computing platform: ILS</figcaption>

law: The flight control application needs to know $\phi$ only, the distributed, redundant system
architecture is transparent to the law\
platform: The actual function of the law is unknown to the platform management. The control function is
transparent to the platform 

# Writing a Systems Requirement Document (1)

## Fundamentals

- Signal $u$ / $y$: designates the value of the signal
- State $z$: designates the state of a signal
- Status $s$: designates the functional status of a component, Platform management computes this value
- Signal transfer value $T$: function the canges the input signals to output signals depending on the mode
- State transfer function $Z$: function that changes the input states and platform states $z_{pf}$ to output states
- Evaluation function $\varepsilon$: function that returns the maximum available degredation a system can perform based on the input states
