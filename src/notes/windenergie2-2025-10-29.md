---
course: Windenergie 2 
type: Extreme Wind Statistics
by: Po Wen Cheng
date: 2025-10-29 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Questions

- Which kind of lidar can measure several distances at the same time? - pulsed lidar
- Which velocity component of the wind can the lidar measure? - line of sight wind speed
- What is the sign of high quality lidar measurement? - high carrier to noise ratio
- Which Type of lidar scan you would use for a power curve validation? - VAD scan
- What is the minimum number of line of sight velocities neccessary to reconstruct the 3 domensional wind speed vektor? - 3, but more in practice
- Mean value and median are the same - no
- How to optain Cumulative Distribution Function from Probability Density Function? - through integration
- Do you know what skewness and kurtosis of a distribution function means?
  - skewness: is the distribution symmetrical or not - 0 is perfectly symmetrical
  - kurtosis: is the how much value is distributed towards the middle or to the tails - gaussian distributian has kurtosis of 3. Higher that 3 means larger tail than gaussian distribution, extremes are more likely to happen
- Where in the hurricane can you find the maximum wind speed? - on the wall of the hurricane, intense updrafts
- If an extreme wind speed of 30 m/s has a probability of occurance of 0.01% every year and the extreme wind speed has occured in the last four years? - The chance that it will occur next year is 0.01% *(assume the events are independent of each other)*

## Why consider extreme values?

Extreme value analyis does not describe the usual behaviour of a stochastic phenomena, but the unusual and rarely observerd events, uses are:

- wind speed in wind energy
- wave height in ocean engineering
- floods in hydraulics engineering
- earthquakes in structural engineering
- ...

## Return period

$$
p_e = P(X > x) = \frac{1}{T}
$$
$$
p_{ne} = P(X \leq x) = 1 - \frac{1}{T}
$$

Return period of 100 years: Event occurs once on average in the period of 100 years. $p_e = 0.01$\
Problem: only verly small amount of data for extreme events - harder to predict\
solution: If the maximum values are not available for years but in different resolutions the formula must be adjusted accordingly

![](/src/bilder/windenergie2_image_2.png)
<figcaption>Return periods corresponding to the available data records</figcaption>

**Fisher-Tippett theorem**: The maximum of a sample of independent and identically distributed random variables after proper renormalization converges to the Generalized Extreme Value (GEV) distribution.

$$
F(x) = exp(-[1+\xi(\frac{x-\mu}{\sigma})]^{\frac{-1}{\xi}})
$$

We use the Gumbal Distribution, where the shape parameter $\xi \rightarrow 0$


![](/src/bilder/windenergie2_image_8.png)
<figcaption>Example Values</figcaption>

1. Measure extreme values over time, e.g. the last 12 years
2. Rank the values from 1 to 12
3. Calculate the empirical non exceedable probability for all values
4. Calculate the reduces variable (trick) - Gumbel distribution predicts a linear function for the reduced variables
5. Determine the distribution parameters graphically (slide 16)
6. Use the graph to extrapolate extreme values for longer time periods

## Method of Moments

Distributions can be caracterized by a number of parameters which are called moments. Statistical moments capture the key qualities of a distribution in numerical form:

- Mean (measure of central tendency, location)
- Variance (measure of dispersion or scatter)
- Skewness (measure of symmetry of asymmetry)
- Kurtosis (measure of peakedness and tail-heaviness)

## Maximum likelihood estimation

Find the probability density function among all probability density functions that the model prescribes, which is most likely to have produced the observed data

## Method of least squares

Try to find a function $y = m \cdot x + b$ that fits the data points best, meaning minimizing the sum of squared vertical deviations $d_i$

Notiz an mich selbst: Monte Carlo Method lecture anschauen\
Book recommendation: black swan

