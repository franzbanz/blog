---
course: Windenergie 3
type: Fatigue 2
by: Po Wen Cheng
date: 2026-05-21 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Questions at the beginning

- a stress ratio of $-\infty$ means...?
  - the stress is alternating between compression, *not* tension
- the goodmann diagramm is symmetrical fo fibre reinforced plastics
  - no, because fibre reinforced materials can take a lot of tensile stress, but no compression
- name the eqivalent stress models that you know
  - von mises (can be used in most situations, but some materials need a different model)
- the damage equivalent load is independent of the material properties
  - *not* true, because there is a material constant in the formula for the DEL
- if the wind turbine blade is designed for 20 years and the calculated cumulated damage is $0.5$, ...?
  - theoretically, the blade would have *40* years of lifetime
  - (damage is only half of what the blade can sustain)
  - but often, 1 is not conservative enough, depending on the consequences of failure
- which representation of the cycle counting result conserves the most information from the original load time series?
  - markov matrix (conserves mean value of stresses, number of cycles for the different stress ranges and the not paired stress cycles)
- 

## Damage Equivalent Load

counting procedure (classification)

- Rainflow classification
  - two paramter counting methof, records load amplitude and mean value (or alternatively as markov matric)
- Reservoir method
  - one parameter counting method, only records amplitudes

Disatvantage of all counting methods

In general, all the cycle counting methods reduce the information content from the time series. For examaple, the information about the chronological sequence of the load cycles is lost

### Rainflow Classification

Mostly used today\
Rainflow counting identifies the closed cycles in a stress-strain curve

![](/src/bilder/windenergie3_image_2.png)
<figcaption>Rainflow analysis for tensile peaks</figcaption>

![](/src/bilder/windenergie3_image_3.png)
<figcaption>Rainflow analysis for compressive valleys</figcaption>

*Both images by Franz Faschinger - [Own work, CC0](https://commons.wikimedia.org/w/index.php?curid=87942215)*

### One Parameter Reservoir Counting Method

- The stress time curve of a load cycle is graphically filled with water. The difference between the water level and the lowest point corresponds to to highest amplitude $\Delta \sigma_1$
- The full load cycle associated with this range is determined by discharging the water th the lowest point
- The remaining filled aread are gradually emptied and the load ranges are determined

Example for this on **Slide 35**

- The result of cycle counting can be represented as a Markov matrix
- It represents the half stress cycle as from the *starting stress* to the *finishing stress*
- The Rainflow matrix can be calculated from the Markov matrix
  - Half cycles that are symmetrical to the main diagonal are adding up to a full cycle
  - Not closed half cycles are represented in the Markov matrix but not in the Rainflow matric
