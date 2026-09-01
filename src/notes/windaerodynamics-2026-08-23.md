---
course: Wind Turbine Aerodynamics
type: 10 - Predicting Noise
by: Pascal Weihing
date: 2026-08-23 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

![](/src/bilder/windaerodynamics_image_11.png)
<figcaption>model hierarchy to predict aeroacoustic noise</figcaption>

## BPM model for trailing edge noise prediction

Total sound pressure level is modeled by contributions from the **suchtion $s$** and **pressure $p$** sides and the effect of the **angle of attack $\alpha$**

$$
L_{p, TBLTE} = 10log_{10}\left(10^{L_{p, \alpha} / 10}+10^{L_{p, s} / 10} + 10^{L_{p, p} / 10} \right)
$$

How do the contributions of the suction and pressure sides differ in the spectrum?

- when airfoil creates lift, $\delta^*_p$ is typically smaller than $\delta^*_s$
- level scales with $10 log_{10} \delta^*$
- for a given logal mach number, $\frac{St_p}{St_{peak}} = 1$ is reached at higher frequencies

level is lower on the pressure side\
peak frequency is higher on the pressure side

### The Empirical BPM Model

|pros|cons|
|--|--|
|simple implementation|model does not take into account the airfoil shape (derived for NACA0012)|
|very few input quantities required ($\alpha, \delta^*, Re$)|model contains explicit angle of attack ranges|
|very fast when using XFOIL boundary layer data|model typically overpreducts high frequencies|
|shape of spectra and peak region predicted reasonably well|--|

## The TNO model for trailing edge noise prediction

- wall-bounded turbulence is anisotropic ($\approx u_1^2:u_2^2:u_3^2 = 4:2:3$)
- pressure gradient or streamline curvature increases the effect of anisotropy
- only wall-normal component $u_2^2$ relevant for TE noise
- linear eddy viscosity turbulence models assume isotropic turbulence ($u_1^2=u_2^2=u_3^2= \frac{2}{3}k_T$)

|pros|cons|
|--|--|
|derived from physics|turbulence statistics are needed as input - flow simulation based on RANS required|
|depends on turbulence statistics|trailing edge serrations cannot be taken into account, since farfield model is derived for flow perpendicular to edge|
|works independent of airfoil shape|--|
|applicable to angles of attack close to flow separation|--|
|computationally relatively cheap|--|

### The Moving Axis Spectrum

- takes into account change of the turbulence spectrum of propagating in streamwise direction
- change of propagation velocity of the different eddy sizes during propagation
- original TNO model uses gaussian function
- "the higher the wave number, the less this approach matters"

### Hornung Model for the Moving Axis Space

- new model should consider the decay in wavenumber space
- combination of two time scales as basis for new model + further small modifications:
  - timescale of the turbulent eddies
  - onsager-scale: describes decay of turbulence structures

Validation example in last lecture video
