---
course: Windenergie 3
type: Dynamics 1
by: Po Wen Cheng
date: 2026-05-06 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Questions at the beginning

- How can you determine the polars of the airfoil?
  - wind tunnel testing
  - computational fluid dynamics
  - panel code method
- How can you reduce the loading on the rotor?
  - decrease induction factor
- Explain Campbell Diagramm

## Introduction

why dynamics are important

Time based graphs not good for finding out the causes of vibrations (the specific frequencies)\
fft to transform from time domain to frequency domain.\
eigenfrequencies are visible in frequency domain

Change in the lift of the blade due to the structural displacement of the blade (parallel to the direction of wind) and structural deformations (especially angluar deformation / torsion) of the rotor blade profiles die to vibrations of the rotor blades and the tower nacelle system

## Vibrations and Resonance Behavior, Aerodynamic Damping

- simplest model for vibrations in the logitudinal or transverse direction
- point mass of rotor, nacelleand vibrating tower mass (only part of the total tower mass contributes to the vibration)
- translational stiffness can be  determined by the bending stiffness of the tower

What happens if the tower moves into the wind? The relative velocity is increased which results in a higher thrust\
If the tower moves back, the relative velocity in decreased, which reduces the aerodynamic forces\
This acts as the main dampaning force

## Design Criteria for Dynamic Systems

- In the three-blade rotor, the 1$\Omega$ excitation (rotor speed) and the 3$\Omega$ excitation (blade passing frewuency) are of major importance
- $\omega_0$ annot be in the range of either the 1$\Omega$ or the 3$\Omega$ excitation

Three basic design principles

- $\omega_0 < \Omega$: First eigenfrequency below rotational speed "soft-soft"
- $1\Omega < \omega_0 < 3\Omega$: 1st eigenfrequency above rotational speed, but below blade passing frequency 3$\Omega$ "soft-stiff"
- $3\Omega < \omega_0$: 1st eigenfrequency above blade passing frequency 3$\Omega$, "stiff-stiff"
