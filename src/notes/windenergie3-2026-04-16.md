---
course: Windenergie 3
type: Chapter 2: Wind Field Modeling
by: Po Wen Cheng
date: 2026-04-16 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: false
---

## Questions at the beginning

What is the main source of noise from a wind turbine?
- Aerodynamic noise (e.g. from blade tips, tip vortices, trailing edge, leading edge)

Ideally the onshore and offshore wind turbine should have
- Offshore (higher wind speeds, less turbulence)
    - Rotor diameter: lower
    - Generator power: higher
- Onshore (high wind shear, need higher towers)
    - Rotor diameter: higher
    - Generator power: lower

What is the most common generator design concept for wind turbines?
- Doubly Fed Induction Generator (additional circuit which is connected to a converter from AC to DC because of the variable speed wind turbine. Adapt speed of the wind turbine to have optimal tip speed)
- **Not** Permanent Magnet Generator, which is less common, but has a higher efficiency than DFIG
- **Not** Induction Generator, which is not used much today

Compared to horizontal axis wind turbines, vertical axis wind turbine has
- Lower center of gravity
- Higher fluctuating inflow velocity
- Lower sound pressure level because of lower tip speed ratio

What are the lead casas we should consider when designing a wind turbine?
- Turbulence
- Extreme wind speed
- 50 year wind high
- Lightning protection#

Rank the wind field model in terms of complexity:
1. Extreme Operating Gust Model (easiest, its deterministic)
2. Kaimal Spectral Model (How much energy is in the wind field and how is it distributed among different frequencies)
3. Mann Model (Based on spectral tensor, not just one power spectrum, but many)

Where is the spectral gap?
- Time scale at which there is not much energy concentrated, about 10 mins to 1 hr
- Macro-meterological scale more relevant for the weather, seasons, etc...
- Micro-meterological scale relevant for this lecture, most relevant for turbulence, hence wind turbine fatigue

Typical exponent for power wind shear model
- Onshore wind: ??
- Offshore wind: ??
- Onshore with forest: 0.4

The mean wind speed is 10 m/s, the turbulence intensity is 10%, the characteristic turbulence intensity is
- Cannot be determined, because $\sigma$ is not given (Standardabweichung)

Which is the wind speed seen by a fixed observer?
- ??

## Deterministic Wind Models

Means *pre-determined* - Wind field is clearly defined with, e.g.

- Mean wind speed and direction
- Wind profile over the height, tower shadow, inflow angle, etc.
- Deterministic wind gusts
- "Mexican Hat" not a realistic gust form, but if wind turbine can survive it, it can survive any real gust forms

## Stochastic Wind Models

Turbulence description

- For one point in space (temporal structure, i.e. variation in time)
- For many points in space (temporal and spacial structure, variation in time and space)
- In time domain - frequency domain

Characteristic turbulence intensity for load simulations = mean turbulence + one standard deviation (more conservative)

### Common spectral models

- Von Kaman Spectrum
    - Derivation from turbulence in wind tunnel, still usefull for wind energy applications
- Kaimal Spectrum
    - Empirical basis
    - Use of exponential coherence model required
    - Most widely used today
- Mann Spectrum
    - It takes into account the influence of the vertical shear on the turbulence

## Partial Gust, *Rotational Sampling*

Skipped in this lecture