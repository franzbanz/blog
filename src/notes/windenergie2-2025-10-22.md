---
course: Windenergie 2 
type: Wind measurement with Lidar
by: Po Wen Cheng
date: 2025-10-22 # (YYYY-MM-DD)
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

![](/src/bilder/windenergie2_image_6.png)
<figcaption>The optical doppler effect</figcaption>

- Wind speed is almost 0 compared to speed of light, measurements are very difficult
- Final measurement is a volumetric averare of the area the Laser is focused on. With the anenometer, you only get a point measurement
- Solution: Coherent Doppler Lidars

## Coherent Doppler Lidars

Concept of mixing a local oscillator beam with the received signal. The mixed signal contains the sum and the difference frequencies of the two components.

Main elements:

- CW and/or pulsed laser
- receive/transmit telescope
- detectors
- electronic system for data aquisition, processing, evaluation, display, storage, etc...

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
    * Worse time resolution than Continous Wave Lidar

| Category                     | Continuous Wave Lidar (CW)                                                                 | Pulsed Wave Lidar (PW)                                                                                 |
|-----------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Operation                   | Sends a continuous beam of laser light.                                                     | Sends pulses of light. Uses time of flight (range gating) to measure at different distances.            |
| Measurement distance        | Uses beam focusing to measure at a particular distance. Can only measure one distance at a time. | Uses time of flight (range gating) to measure at several distances simultaneously.                      |
| Measurement volume          | Increases with the measurement distance.                                                    | Constant and proportional to the pulse duration.                                                         |
| Min. measurement distance   | Can be short.                                                                                | Twice the length of the measurement volume.                                                              |
| Max. measurement distance   | Limited to several hundred meters, depending on the optical telescope width.                | Depends on pulse energy, up to several tens of kilometers.                                               |
| Integration time            | Short.                                                                                       | Needs integration of multiple pulses.                                                                    |

## Signal Quality

- Quantified using the Carrier to Noise Ratio (CNR)
- ~ 5 km is a good range
- CNR can be used to filter the Lidar Data, but it results in a lot of data loss
- Other filter methods keep more of the good data

## Wind Field Reconstruction

- Use at least three Lidars measuring the same point at the same time, reconstruct the wind direction from this
- When using only one Lidar measuring three times, there is an ambiguity between wind shear and wind direction

