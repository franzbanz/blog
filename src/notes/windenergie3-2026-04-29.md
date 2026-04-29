---
course: Windenergie 3
type: Rotor Aerodynamics
by: Po Wen Cheng
date: 2026-04-29 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Blade Design According to Betz and Schmitz (Repetition)

Diagram on **Slide 6**

To extract the maximum amount of Energy from the Wind, the Velocity infront of the rotor has to be 2/3 and 1/3 far behind the rotor. Tangential velocity $\Omega_r$ is much bigger than the wind velocity.\
*Tip Speed Ratio* is the ratio between these two velocities, can be as high as 10 on modern wind turbines - *Tangential speed is ten times higher than wind speed*\
Together, these two velocity form the inflow velocity $C$

Schmitz: $\frac{\alpha_3}{\alpha_1} = \frac{1}{3}$\
Betz: $\frac{v_3}{v_1} = \frac{1}{3}$

\\ Skizze 1, also see **Slide 8**

At the outer part of the rotor, you dont need to consider the tangential induction, because Dominating velocity component at the tips is $\Omega_r$

## Blade Element Momentum Method (BEM)

- When designing the blades according to Betz, the induction is assumed a priori (optimal induction $a 0 \frac{1}{3}$)
- In many operating conditions this assumption does not apply! The deceleration of the wind (actually induced speed) must then be determined iteratively. So we are looking for the induction factor $a$
- **Standard Method**: Blade element pulse method

### Iteration Steps

1. Initial guess: $a_0 = \frac{1}{3}$
2. $\alpha_2 = arctan(\frac{a-\alpha_i}{\frac{r}{R}\lambda_A})$
3. Angle of attack: $\alpha_{AoA} = \alpha_2-\alpha_{Bau}$
4. Airfoil coefficients from polars: $c_{L_{(\alpha_{AoA})}}$ und $c_{D_{(\alpha_{AoA})}}$
5. $\alpha_{i+1}$ calculate:

$$
\alpha_{i+1} = \frac{(1-a_i)^2+(\lambda \cdot \frac{r}{R})^2}{2 \cdot \pi \cdot r \cdot 4 \cdot (1- a_i)} \cdot t \cdot z \cdot [c_A \cdot cos(\alpha_2) + c_W \cdot sin(\alpha_2)]
$$

### Extensions and Correction Models

- Assumptions BEM
  - Steam tube theory: no interaction in the radial direction, which happens in the real world because of centrifugal forces
  - Stationary Flow: no inertia and time-dependent effects, which does not apply to real wind
  - No tangential change: no consideration of the blade position

- Correction Models
  - Influence of the finite number of blades
  - Three dimensional effects (tip loss factor)
  - Wake inertia (Dynamic Wake)
  - Skewed inflow correction (yawed or tilted flow)
  - Unsteady airfoil aerodynamics (Dynamic stall)
