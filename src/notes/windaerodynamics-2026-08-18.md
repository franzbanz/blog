---
course: Wind Turbine Aerodynamics
type: 5b - Unsteady Momentum Model
by: Galih Bangga
date: 2026-08-18 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Unsteady BEM

1. unsteady inflow, unsteady excitation: $u, v, w = f(x, y, z, t)$
2. apply corrections to standard BEM theory
3. get correted output: $a, a' = f(x, y, z, t)$

### Dynamic Wake

- unsteady flow phenomena in the inflow affecting the rotor loads:
  - gusts
  - yaw misalignment
  - control actions, e.g. pitching, yawing
- wake reacts delayed to inflow changes
- BEM ist steady, but unsteadyness can be added
- dynamic inflow model can predict the delay for the wake

Approach to calculate the induced velocity on **slide 11**

### Yaw Misalignment

- incoming flow is not aligned with rotor axis
- wake is not aligned with free wind direction
- azimuthal variation of induced velocities:
  - induced velicity is larger when wind turbine blade points downstream because it is deeper in the turbine wake
  - induced velocity is smaller when wind turbine blade points upstream
- upstream blade sees higher wind velocities leading to higher loads
