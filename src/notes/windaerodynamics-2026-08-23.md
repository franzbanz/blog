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
- for a given logal mach number, $\frac{St_p}{St_{peak}} = 1$ is reached at higher frequencies$

level is lower on the pressure side\
peak frequency is higher on the pressure side

### The Empirical BPM Model

|pros|cons|
|--|--|
|simple implementation|model does not take into account the airfoil shape (derived for NACA0012)|
|very few input quantities required ($\alpha, \delta^*, Re$)|model contains explicit angle of attack ranges|
|very fast when using XFOIL boundary layer data|model typically overpreducts high frequencies|
|shape of spectra and peak region predicted reasonably well|--|

NEXT UP: *The TNO model for trailing edge noise prediction*
