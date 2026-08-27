---
course: Wind Turbine Aerodynamics
type: 4b - Rotor Wake
by: Galih Bangga
date: 2026-08-16 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Near Wake

- rotates in opposite direction from turbine blades (conservation of angular momentum)
- strength of rotation decreases with downstream distance
- sped-up region in center 

![](/src/bilder/windaerodynamics_image_6.png)
<figcaption>Wake velocitiy defecit and velocity profiles in the near wake</figcaption>

Increased wandering / jittering with vortex age

Two dominating vortices in the near wake:

- Tip vortex (stronger, more persistent)
  - periodic helicoidal structure
- Hub vortex (weaker)

Loading depends on the number of blades, the thrust coefficient and the tip speed ratio.
**The higher the loading, the shorter the near wake**

![](/src/bilder/windaerodynamics_image_5.png)
<figcaption><a href="https://iopscience.iop.org/article/10.1088/1742-6596/753/3/032047">Source: Kim, Yusik & Schwarz, Eva & Bangga, Galih & Weihing, Pascal & Lutz, Thorsten. (2016). Effects of ambient turbulence on the near wake of a wind turbine. Journal of Physics: Conference Series. 753. 10.1088/1742-6596/753/3/032047.</a></figcaption>

## Far wake

- Axissymmetric gaussian velocity deficit distribution $\Delta u$
- Size of the wake increases with distance: $D_X = D+2kX$

Wake velocity according to the **Jensen model**: Top-hat distribution for the velocity deficit - simplicity

$$
\frac{\Delta u}{u_0} = \frac{1-\sqrt{1-C_T}}{(1+\frac{k_w x}{R})^2}
$$

Other models include

- **Frandsen model**
- **Bastankhah and Porte-Agel model** (non-linear)
