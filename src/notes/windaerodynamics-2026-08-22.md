---
course: Wind Turbine Aerodynamics
type: 9 - Noise Emission 2
by: Cordula Hornung
date: 2026-08-22 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Design of Noise Optimal Modes

noise reduced operation modes have

- usually reduced speed at maximum power
- often reduced maximum power output
- other power curves (less yield)

pitch curve has to be chosen in a way that stall is avoided, slope of curves also depend on the controller characteristics. at rated power, pitch has to be increased for increasing wind speeds to keep power constant.

### Steps for Design

1. determine target sound power level
2. estimation of required rpm with *Hagg model*: $SPL = 50 log(V_{tip})+10 log D-4$ if the sound power level of another mode of the same turbine is already known: $\Delta SPL = 50 log(\frac{V_{tip, 1}}{V_{tip, 2}}$
3. choose rated power and estimate contribution of secondary noise sources
4. if neccessary: adjust rated power and / or rpm
5. detailed design for maximum AEP (long lambda-opt region) by considering boundary conditions of controller
6. verify assumptions by detailed noise simulation

## Emission Measurements

measurements are done in accordence with IEC 61400:

- turbine is assumed point source
- A-weighting is applied
- ...

|emission measurement|immission measurement|
|--|--|
|good reproducability|direct assessment of noise impact at dwellings|
|relatively independent of the season of the year|directivity, shielding or other propagation effects considered imlicitly|
|signal to noise ratio mostly good|--|
|result directly comparable with the values from the manufacturer|--|
|--|--|
|reference point features TE noise|signal to noise ratio often bad|
|no consideration of directivity|no transfers between different wind farms possible - more effort|

Conditions for successfull measurements: no rain, no background noise, volatile wind: 0,8-1,3 times the wind speed at 85% rated power has to be measured

### Measured Values

- sound pressure level
- wind turbine power
- rpm
- pitch
- temperature
- air pressure
