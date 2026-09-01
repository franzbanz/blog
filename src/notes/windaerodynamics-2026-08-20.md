---
course: Wind Turbine Aerodynamics
type: 7 - Fundamentals of Acoustics
by: Cordula Hornung
date: 2026-08-20 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

### Why is WTN noise important?

- Turbines are built in areas with lower wind speed - larger rotors are needed
- Maximum rpm and tip speed ratio are capped - turbines are becoming larger but not louder
- New turbines are closer to urban areas
- High capacity factor is needed
- New regulations need to be met

## Basics of sound

Speed in solid materials:

$$
c_0 = \sqrt{\frac{G}{\rho}}
$$

Speed in general fluids

$$
c_0 = \sqrt{\frac{K}{\rho}}
$$

Speed in air

$$
c_0 = \sqrt{\kappa R T}
$$

$G$: shear modulus\
$K$: bulk modulus of elasticity\
$\kappa$: heat capacity ratio

### The decible scale

Human hearing ranges over many orders of magnitude: $2\cdot10^{-5} \frac{N}{m^2}$ to $2\cdot10^2 \frac{N}{m^2}$\
Usage of a logarithmic scale:
$0 \text{dB}$ to $120 \text{dB}$

Sound pressure level: property at an observer location

$$
L_p = 10 log(\frac{p^2_{rms}}{p_0^2}) = 20 log (\frac{p_{rms}}{p_0})
$$

Sound power level: property of the source of the sound

$$
L_W = 10 log(\frac{p}{p_{ref}})
$$

- Sound intensity is energy transmitted per unit time and unit area (or: power per unit area)
- Acoustic impedance is resistance against sound propagation

### How can spectral content be described?

- Sound is made up of superimposed time continous pressure fluctuations of different frequencies
- often, it is described with spectra
- spectra are obtained from the time continous signal by applying a fourier transform
- doubling the frequency changes the pitch by one octave (approximately)
- doubeling the distance decreases the sound pressure level by 6 dB

### Directivity

|Monopole|Dipole|Quadrupole|
|--|--|--|
|isotropic sound waves are propagating from the source location - mass source|more specific propagation direction - momentum source|composed of two dipoles - volume sources|
|moving volume|--|free turbulence|

![](/src/bilder/windaerodynamics_image_9.png)
<figcaption>Noise emission, propagation and imission</figcaption>

- noise can be evaluated using different parameters:
  - sound pressure level spectrum
  - overall sound pressure level: sum of the SPL over all frequencies
  - A-weighted sound pressure level
  - equivalent sound pressure level: average sound pressure level over a certain time frame

### Far Field vs. Near Field

**Geometric**: contribution of different parts of the source at the observer are independent from the location of the observer ($r >> R$)

**Phase difference**: pressure and particle velocity have the same phase in the far field, whereas they have a phase difference of $90\degree$ in the vicinity of the source

**Compact Source**: dimension of the source is smaller than the corresponding wave length

**Non-Compact Source**: dimension of the source is equal or greater than the corresponding wave length
