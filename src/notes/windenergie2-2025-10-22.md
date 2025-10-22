---
course: Windenergie 2 
type: Wind measurement with Lidar
by: Po Wen Cheng
date: 2025-10-20 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Questions at the beginning

- Which atmospheric stability condition causes the largest wind shear? - stable condition
- Which wind turbine class would be more suitable for an offshore site? - IEC Class 1C
- Rank the flow models according to the physics included in the model (from high to low)
    * Meso scale numerical weather prediciton model
    * Computational fluid dynamic model
    * WAsP model
    * Statistical model
    * (Google Graph AI based weather prediction model)
- When carrying out MCP, the referrence and target wind measurement should (most important first)
    * Have a high correlation coefficient
    * Cover all seasons
    * Have the same measurement height (less important)
    * Have the same elevation (less important)

## Doppler Lidar

Used to estimate wind speed, can not be done with other types of Lidar\
Aerosols (small particles in the air, pollutants, salt, dust,...) are assumed to move with the wind speed

- Laser source shoots a pulse in the air, which will hit the aerosols
- Returning (backscattered) light is frequency shifted because of the line-of-sight speed of the aerosols
- You dont get the full velocity information of the particle in three dimensions, only one speed in line-of-sight is measured

// Skizze von Folie 5

- Wind speed is almost 0 compared to speed of light, measurements are very difficult
- Final measurement is a volumetric averare of the area the Laser is focused on. With the anenometer, you only get a point measurement

## Coherent Doppler Lidars

// Folie 6,7 nochmal lesen und zusammenfassen

- Continous Wave Lidar
    * Probe volume increases with the distance of the focal point - larger area that has to be averaged
    * Focus needs to be adjusted for measurements in different distances
    * If you average too much, turbulences dont get picket up as easily
    * Quality of measurement decreases with higher distance
    * Time resolution ~ 50 Hz
- Pulsed Lidar
    * Does not use the focused area of the laser, but the time of flight to probe the same volume no matter the distance
    * Probe volume length is constant over measurement distance
    * Time resolution ~ 1 Hz
    * Worse time resolution than Continous Wave Lidars

// Folie 14 zusammenfassen (Wichtig für Klausur)

## Signal Quality

- Quantified using the Carrier to Noise Ratio (CNR)
- ~ 5 km is a good range
- CNR can be used to filter the Lidar Data, but it results in a lot of data loss
- Other filter methods keep more of the good data

## Wind Field Reconstruction

- Use at least three Lidars measuring the same point at the same time, reconstruct the wind direction from this
- When using only one Lidar measuring three times, there is an ambiguity between wind shear and wind direction

