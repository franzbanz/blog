---
course: Windenergie 3
type: Offshore 2
by: Po Wen Cheng
date: 2026-06-18 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Substructure Concepts

- Monopile is used in most cases
- If the seabed conditions dont allow it, or the water depth is too great, Jacket can be used (rarely)
- Tripods are not used any more, it has no advantages over the monopile concept
- Gravity based structure can only be used in shallow water and with small wind tubrines
- Suction bucket is more environmentally friendly, because it can be removed again without much lasting disturbance
- Future designs could utilize the floating platform concept

## Hydrodynamic Loads

- Bottom-fixed substructure
  - Morison's equation
  - Hydrodynamically transparent structure (i.e. size of the structure << wave length)
  - *The wave does not notice the structure*
- Floating substructure
  - Mosison's equation to capture the viscous forces
  - No longer hydrodynamically transparent (structure too large)
  - Panel codes using potential flow theory to calculate the hydrodynamic and hydrostatic matrices
  - Floating structure assumed to be rigid

## Morrison Equation

See **Slide 13**

- Hydrodynamic damping due to viscous drag force is only calculated for very flexible structures
- Added mass can be formulated as an additional term in the mass matrrix, which is considered in both rigid and flexible structures
- Application in different cases on **Slide 16**

## Hydrodynamic Loads on Larger Structures

Methods of achieving stability

- Hydrostatic forces
  - Semi-Sub (Floating Jacket)
- Ballast (mass)
  - Spar
- Tension moorings
  - Tension Leg Platform TLP - has the least motion (very good)

Typically, a combination of these three will be used with one being most dominant

Hydrodynamic loads on larger substructures can not be ignored (Diffraction starts playing a role)

- Wave excitation forces: the platform is restrained from oscillating and there are waves: Froude-Kriloff force + diffraction force
- Radiation forces: assume still water, platform is forced to oscillate with wave excitation rfequencies: added mass + radiation damping

## Dynamics of Floating Offshore Wind Turbines

- Rotational degrees of freedom are
  - Pitch (tower fore aft movement) (critical)
  - Roll
  - Yaw (critical)
- Translational degrees of freedom are
  - Surge (in direction of waves) (critical)
  - Sway (along the wavefronts)
  - Heave (upwards along the structure)

Non-linear viscous forces are important for slim structures / elements (e.g. tripod, jacket) and for extreme waves especially in shallow waters. For larger structures / elements (e.g. monopiles) or small waves, linear inertia forces dominate
