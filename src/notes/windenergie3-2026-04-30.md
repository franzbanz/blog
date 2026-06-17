---
course: Windenergie 3
type: Rotor Aerodynamics 2
by: Po Wen Cheng
date: 2026-04-30 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Design Areas of the Rotor Blade

 Approaches of aerodynamic design of wind turbine rotors

 - design by analysis - working forward
   - use an existing design or make a best guess at the start
   - tweak it to match desired performance
 - inverse design - working backwards
   - requires some knowledge of desireable aerodynamic characteristics
   - Example HAWT Code: PROPID

A rotor blade design must:

- be efficient in power production
  - power coefficient or glide ratio should be maximum
  - induction factor should be optimal ($a = 1/3$)
- produce reasonable loadings
  - thrust coefficient or induction factor should be minimal
  - blade root bending moments should be low
- be low in aerodynamic noise
  - surface should be smooth
  - the blade tip should be shaped
- be robust under all operating conditions
  - tolerant to manufacturing imperfections and surface roughness
  - insensitive to changing operating conditions

### Design Regions of the Rotor Blade

- inner third of the blade: structural design dominant (very large thickness required)
- outer third of the blade: aerodynamic design dominant (thin, aerodynamically efficient airfoils)
- middle third of the blade: compromise between structure and aerodynamics

## Airfoil Theory and Application

Lift results from pressure distribution on the airfoil surface

- profile leading edge: stagnation point with local pressure coefficient $c_p = 1$
- suction side: negative pressure due to increased speed with $c_{p suction} < 0$
- pressure side: positive pressure to trailing edge with $c_{p pressure} >> c_{p suction}$

pressure coefficient:

$$
c_p = \frac{p - p_\infty}{1/2 \cdot \rho_{\infty}^2}
$$

airfoil drag is composed of pressure drag and boundary layer friction

- laminar boundary layer: low friction, high tendency to flow separation
- turbulent boundary layer: greater frictional drag, large reynolds number stabilizes the flow, lower tendency to flow separation

To ensure robustness / stability of the flow, we want to induce a transition from laminar to turbulent boundary layer at the middle of the airfoil

## Curve Shaping / Characteristic Curve Adjustment

reconsiling best performance with load

- modeling of $c_p - \lambda$ and $c_t - \lambda$ characteristic curves by specific adjustments of the blade geometry to produce aerodynamic properties in a targeted manner
- betz and schmitz blade design only takes ideal operating conditions and optimal power production into account - only a starting point for the blade design
- primary objective is the lowest possible LCOE (**Levelized Cost Of Energy**)

- Blade design results in 3 geometric parameters of the blade:
  - chord distribution
  - structural angle
  - airfoil selection
- Airfoil thickness and structural angle can be coupled
- possible transfer to design parameters:
  - design tip speed rario
  - induction factor
  - design angle of attack
  - airfoil

