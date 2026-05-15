---
course: Windenergie 3
type: Fatigue 1
by: Po Wen Cheng
date: 2026-05-13 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Questions at the beginning

- Which forces contribute to the lead-lag (edgewise) motion of the blade?
  - coriolis forces
  - inertial forces
  - stiffness forces
  - drag (not a lot)
- The first natural frequency of the larger offshore wind turbine (and rotor diameter)
  - will decrease
- Where do you see an excitation problem for the system, mark it on the Campbell diagramm
  - Where the natural frequencies cross the excitation frequencies
- How many degrees of freedom a OpenFast model contains approximately?
  - 25
- If the maximum stress is 2 times the minimum stress and both of them are tension stresses (*pulling stresses*), the stress ratio will be
  - 2
  - stress ratio is defined as $R = \frac{\sigma_{\text{lower}}}{\sigma_{\text{upper}}}$
- For materials such as fibre reinforced plastic
  - higher fatigue life can be achieved with tensions stresses
- during a storn the wind turbine suffers large amplitude loads, which materials will suffer more damage relative to the normal loading conditions
  - blade (m=10)
- At which site the wind turbine blades will have a longer lifetime
  - blade damage equivalent load *DEL* = 150 (Less means less damage)
  - *Given the same number of cycles, same site, same materials, ... Which load will produce the same damage*

## Basics of Fatigue

![](/src/bilder/windenergie3_image_1.png)
<figcaption>Converting real analogue signal into usable stress cycles for linear damage accumulation</figcaption>

If you are below a certain stress intensity, there is no crack growth. Above, the crack will grow linearly\
(See *Paris-Erdogan Crack Growth Law* on **Slide 9**)

$$
\int_{a_i}^{a_f}\frac{da}{\left( F(a) \cdot \sqrt{a} \right)^m} = C \cdot \Delta \sigma ^m \cdot \pi^{\frac{m}{2}} \cdot N
$$

$N$ is the number of cycles for the crack to grow from an initial size $a_i$ to a final size $a_f$

### Stress Ratio R

- S-N curve depends on the stress ratio (mean stress level)
- The dependency of the mean stress varies from material to material, steel material is less sensitive than fibre reinforced composite material or concrete material
- Compression stress more favourable than tension stress

### Experimental S-N Curve

- S-N curves are determined from experimental tests from samples
- Test is carried out for a statistical significant number to determine the probability destribution and characterisitc values (median, P95, etc.)
- Test is carried out for different mean stresses
- Fatigue characterization of materials is very time consuming and expensive

### Linear Damage Accumulation Hypothesis

- Partial damage from different stress ranges can be added linearly
- Sequence of the load cycles has no influence on the fatigue damage (in reality the micromechanical changes of the material depends on the loading sequence)

$$
D = \sum _i \frac{n_i(\Delta \sigma _i)}{N_i(\Delta \sigma _i)}
$$

- $n_i$: actual number of stress cycles
- $N_i$: number of allowable stress cycles
