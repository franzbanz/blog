---
course: Windenergie 3
type: Wind Modeling
by: Po Wen Cheng
date: 2026-04-16 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

the understanding of the wind or the correct wind field modeling is of great importance for:

- the dimensioning of wind turbines
- the forecast of the power of wind turbines
- the determination ofs tructural loads

time scale / Spacial scale diagram on **Slide 9**

Weather fronts and daily changes:\
timewise almost stationary, affect the wind turbines globally\
Sufficient with stationary, deterministic models

Gust, turbulence:\
In time transient, local influence on the wind turbine
transient, partly stochastic, partly deterministic modeling in time and space

### Deterministic wind models

*Deterministic* means *pre-determined*, the deterministic wind field is clearly defined with, e.g.

- mewn wind speed and direction
- wind profile over the height, tower shadow, inflow angle, etc.
- deterministic wind gusts

easiest deterministic wind field is simple, constant model, certain direction, certain speed (Was used in 70s, up to the 90s)\

more detailed is the wind profile in the atmospheric boundary layer, which takes fluctuating loads through changes in the wind conditions during one rotor rotation into account

- logarithmic wind shear profile
- power law wind shear profile
- $v_2 = v_1 \left( \frac{z_2}{z_1} \right) ^\alpha$

### Stochastic wind model

- turbulence description
  - for one point in space (temporal structure, i.e. variation in time)
  - for many points in space (temporal and spacial structure, variation in time and space)
  - in time domain - frequency domain
- Partial gust, *Rotational sampling*
  - depends on observer

Short-term statistics

- mean wind speed $v$, i.e. in general the 10 min. average
- turbulence intensity $I_t$, ratio of the standard deviation $\sigma$ of the wind speed $v$ to the mean wind speed $V$
- power spectrum
- coherence function, integral length scale paramter
- wind direction, wind shear, ...

$$
I_t = \frac{\sigma(v(t))}{V}
$$

- Von-Karman Spectrum
  - theoreticak derivation from turbulence in wind tunnel, still usefull for wind energy applications
- Kaimal Sprectrum
  - empirically modified spectrum, using many measurements
  - use of exponential coherence model required
- Mann Spectrum
  - takes into account the influence of the vertical shear on the turbulence

#### Software for Wind Field Generation

More information on **slide 33**

Input

- radius of the grid
- number of radial segments and their relative y-coordinates
- number of time steps and time step size
- number of frequencies required to calculate the coherence matrix

Output

- three (u, v, d) wind files (binary) with auto power density spectrum variance equal to 1, which are combined into a 3d wind field
- flex5 the scales the turbulence in x, y, and z directions and adds to the wind field a wind shear $\alpha$ defined in the program

### rotational sampling effect on the wind spectrum

while the wind turbine blade *slices* a gust bubble, different parts of the blade experience different wind speeds for different time periods, especially if the bubble is smaller than the turbine radius\
