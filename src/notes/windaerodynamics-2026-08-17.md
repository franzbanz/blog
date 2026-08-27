---
course: Wind Turbine Aerodynamics
type: 5a - Steady Momentum Model
by: Galih Bangga
date: 2026-08-17 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

- Usually assumed to be 1-dimensional
- Wake rotation can be included or excluded
- Introducing the definition of induced velocity and induction factors

![](/src/bilder/windaerodynamics_image_7.png)
<figcaption>Energy conservation and energy extraction - see Slides 6, 7</figcaption>

## Blade Element Momentum Method

When wake rotation is considered, the rotational speed of the flow in the wake increases from $\omega$ to $\omega + \omega_w$ - The wake rotational velocity varies throughout the span (higher towards the tip)

### Turbulent Wake State Correction

- induction factor larger 0.5 causes momentum theory to break down
- this condition is called *turbulent wake state*
- therefore, different empirical relations for $C_T$ and $a$ are needed (**Glauert**, **Spera**, **Buhl**)

### Tip Loss Correction

defined in the form of axial induction, circulation or aerodynamic coefficient

Combination of Momentum Theory and Blade element Theory: Blade Element Momentum Theory: **BEM**

BEM procedure can be found on **slide 20**

### Double Multiple Stream Tube Model DMS

- Similar to BEM, but for VAWT
- Differentiates the induction factor between the first upwind half and the second downwind half
- VAWT can be represented by a pair of actuator discs at each level of rotor
- Can be improved with correction models such as DMS CAM, DMS WE, DMS DS
- See **slide 23**
