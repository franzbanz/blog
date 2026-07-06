---
course: Windenergie 3
type: Offshore 1
by: Po Wen Cheng
date: 2026-06-11 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

Aerodynamics are almost not affected by the waves on offshore wind turbines\
The dynamics of the support structure is strongly affected by the wind turbine aerodynamics and controls the soil structure interaction\
Water depth is generally not constant and depends on the tide and the scour

## Statistics Sea State

Wind is transferring its momentum through the water surface, creating wind induced waves (frequency range from 10 minutes to up to one hour)

After measuring the sea surface over time with a buoy, you can use fourier transform to plot the wave energy over the frequency.\
The peak of this frequency spectrum is where most of the wave energy is concentrated

**$H_s$**\
Significant Wave Height: Important parameter for the statistical distribution of ocean waves\
Defined as *mean wave height (trough to crest) of the highest third of the waves ($H_{1/3}$)*\
$H_s$ = 4 times standard deviation of the wave surface elevation

**$T_z$**\
Mean Zero Upcrossing Period

How to characterize the distribution of wave heights?

- Long term statistics
- Frequency of occurence of each sea state (1 or 3hrs) with certain combination of $H_s$ and $T_z$
- Frequency per 1000 sea state
- Analogue to the wind speed histogram

For a sea state duration of 3 hours the maximum individual wave height $H_{max}$ can ce calculated as $H_{max} = 1.86 \cdot H_s$

Probability distribution function for maximum of wave elevation for given significant wave height follows Rayleigh distribution

$m_0 = \left( \frac{H_s}{4} \right)^2$ is the variance of wave surfae elevation

See longer explanation on **Slide 33**

#### Fetch

Area, over which the wind can blow undisturbed\
The longer the fetch, the longer the wind can blow without being restricted by obstacles, the more it can tranfer energy from the wind to the wave

## Wave Kinematics

- Deterministic wave models
  - Usually only used for extreme load cases
  - Non-linear waves, characterized by wave height, wave period, wave length
  - described using regular wave theory
- Stochastic wave models
  - Random sea surface, superposition of linear regular waves
  - stochastic wave characterized by significant wave height, wave peak period, mean zero upcrossing period, types of wave spectrums

### Deep Water vs Shallow Water PParticle Motion

- For deep water waves the orbit of the water particle is circular and decreases with the water depth, but remains circular
- For shallow water waves the orbit of the water particle is elliptical and becomes more elliptical as it reaches the sea bottom

## Wave Theory

Velocities and acceleration of water particles of individual wavesare determined by means of different *wave theories*, which are derived from the *Potential Theory*

- Linear (airy) Theory
- Stokes
- Stream Functions / Cnoidal Theory

The **dispersion relation** describes the connection between the wave number $k$ (or wave length $L$) and circular frequency $\omega$ (Or wave period $T$)

$$
\omega^2 = g \cdot k \cdot tanh(k \cdot d)
$$

- Valid for linear and nonlinear wave theories
- can only be solved iteratively, initial value can be the deep water assumption $\omega^2 = g \cdot k$

### Linear Wave Theory

Only applies to very small waves and does not predict kinematics for points above the mean water level. The theory needs to be *stretched* to cover such points. Empirical corrections are e.g. *Wheeler Stretching*:

See **Slide 16** for nice diagram

### Stokes 2nd Order Wave

Free surface elevation from linear wave theory is corrected by superposition of second-order-effects

- Steeper wave crests, flatter wave troughs
- Water particles do not move circularly

Nice diagram about regions of validity for different wave theories on **Slide 23**  

More on this in the [next lecture](https://franzkoehler.com/src/notes/windenergie3-2026-06-18/)
