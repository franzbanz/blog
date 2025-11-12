---
course: Windenergie 2 
type: Wake 2
by: Po Wen Cheng
date: 2025-11-12 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Questions at the beginning

- What happens to the wind field behind the wind turbine?
    - The velocity decreases
    - The turbulence intensity increases
- What happens to the wind turbine in the wake of other wind turbines?
    - Power production increases
    - Fatigue load increases
- Higher turbulence intensity
    - Leads to faster recovery of the wake deficit
- Highly stable atmospheric boundary layer
    - Leads to slower recovery of the wake deficit
- Which of the wind farm is likely to be experiencing a stable ABL (atmospheric boundary layer)?
    - The one with shorter wake effects
- Wich is the shape of the wake behind a wind turbine measured at the distance of 7D?
    - No double gaussian shape in the far wake
    - Double gaussian shape in the near wake, right behind the turbine
- Which parameters have large influence on the wake recovery?
    1. Thrust coefficient
    2. Turbulence intensity
    3. Temperature profile
- Where can we find the highest turbulence intensity in the near wake?
    - Toward the edge of the wake / edge of the rotor

## Wake models

- Empirical models
    - Estimate the variation of the ake-center velocity deficit
- Kinematic models
    - Simple assumptions from first principles: energy conservation, impulse conservation
- Field wake models
    - Derived based on governing equations of flow, Navier-Stokes

### Empirical model

The correlation of the velocity deficit in a far wake can be appoximated with:

$$ \frac{\Delta v}{v_{hub}} = A \cdot (\frac{R}{x})^n $$

Empirical data can be fitted to this equation

### Kinematic wake models

- Jensen wake model (simple, but still used most of the time)
    - It is a one dimensional kinematic wake model, based on a linear expanding wake, that incoporates the rotor diameter and the thrust coefficient as parameters
    - Assume uniform inflow and uniform wake deficit
    - Wake expansion is linear with distance
- Larsen wake model
    - Kinematic model based on the Prandtl turbulent boundary layer equation
    - Assumes incompressible, stationary, acissymmetric flow
    - Describes rotationally symmetric wake
- Frandsen wake model
    - Three regimes:
        - turbines are exposed to multiple-wake-flow and an analytical analytical link between the expansion of the multiple-wake and the asymptotic flow speed deficit is derived
        - wakes from neighboring rows merge and the wakes can only expand vertically upward
        - wind farm is infinitely large and flow is in balance with the boundary layer
- Bastankhah and Porté-Agel wake model (currently most used model)
    - Applies mass and momentum conservation while neglecting the viscosity and pressure terms in equations
    - Velocity deficit is characterized by a gaussian shape

### Field wake models

Based on time- or space averaged Navier-Stokes equations. They can solve the implicit equation to find the magnitude of the velocity over the entire flow field

- Ainslie eddy viscosity wake model
    - Simplifictaion: rotationally symmetric
- Numerical wake models
    - Very difficult to model interaction between atmospheric boundary layer, thermal effect, atmospheric stability
    - Useful to help understand wake physics (wake revovery, mixing)

### Dynamic wake meandering model

A more enhanced model than the wake induced turbulence models is the dynamic wake meandering model. Here the three following effects are considered:

1. Velocity deficit: reduced wind speed due to extraction of kinetic energy
2. Meandering: deficit profile moves in space
3. Added turbulence: blade and hub create vortices that add turbulence

