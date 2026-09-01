---
course: Wind Turbine Aerodynamics
type: 11 - Noise Immission
by: Cordula Hornung
date: 2026-08-24 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Propagation

- With distance the sound pressure level redues due to spherical spreading
- doubling the distance corresponds to a loss of 6 dB

$$
\Delta = 20 log_{10}(\frac{r2}{r1})
$$

### Atmospheric attenuation

- sound is attenuated by viscosity - converts sound energy into heat
- higher frequencies are damped significantly
- damping at lower frequencies almost negligable
- depends on humidity and temperature of air

### Refraction

- bending of sound waves due to changes in propagation speed
- sound rays bend towards region with lower propagation speed
- depends on wind speed and temperature

### Physics and Methods

- Many methods possible (linearized eouler equations, particle methods, raymethods, ...)
- all of those method are not applicable to wind farms, because they are too compuational expensive
- Solution: ISO 9613-2: attenuation of sound propagation outdoor
  - step 1: equivalent continous sound pressure level for each octave band
  - step 2: calculation of overall sound pressure level
  - step 3: consideration of influence of meterological effects on long term average

## Regulations and Standards

- reference value (TA Lärm 6.1)
  - classification according to table
  - mixed areas possible
- impacted area / irrelevance criteria (TA Lärm 2.2)
  - area in which a turbine is significant for an immission point
  - difference between ferderal states and even regional authorities
- 1 dB criteria (TA Lärm 3.2.1)
  - in case of existing noise sources the reference value can be increased by 1 dB
- uncertainties are added to $L_{WA}: \sigma:{ges} = \sqrt{\sigma_R^2+\sigma_P^2+\sigma_{Prog}^2}$
  - $\sigma_R$: standard deviation of measurements
  - $\sigma_P$: standard deviation due to serial scattering
  - $\sigma_{Prog}$: standard deviation of the propagation mode

### Interimprocedure

the interimprocedure describes the german handling of the ISO 9613-2 for wind turbines

- wind turbines have to be considered as one omnidirectional point source
- ground reflection terms are assumed to be invalid, because of large height of turbine

## Wind Park Optimization

**Needed**: planned and existing wind park coordinates, relevant immission points, additional sound sources. Sound power levels for a range of modes. Reference values for sound immission. Maps and areal pictures.

Potential future possibilities (require change of legal regulations in germany)

- directivity of turbine
- directivity of propagation (wind direction depending)
- real time noise control by considering changes in emission and propagation depending on atmospheric conditions
