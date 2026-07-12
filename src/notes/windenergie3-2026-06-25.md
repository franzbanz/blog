---
course: Windenergie 3
type: Validation
by: Po Wen Cheng
date: 2026-06-25 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

*Validation is the procedure to show that the numerical models used to design the turbine can accurately describe the actual behaviour with respect to the power performance and loads*

The validation is done by comparing the results from the simulation to those obtained from field measurements on a prototype

- Design loads describe loads that a wind turbine will encounter during its operational life. These loads will dictate the design of the wind turbine
- Therefore, to show that a wind turbine is able to withstand such loads, a verified computer model is used to show that the turbine can cope with events that it can encounter during its life time.

## Power Curve Measurement

Aspects adressed by the power curve measurement guideline:

1. Wind speed measurement at the metmast
2. Location and height of metmast
3. Influence of the topographical factors (complex terrain versus flat terrain)
4. Influence of the obstacles (wind sectors with forest, building, etc.)
5. Anemometer (calibration, specifications)
6. Correction for air density (winter, summer, altitude)
7. Data analysis and measurement accuracy

Corrections for terrain, air density, measured wind speed are needed

What data to collect?

- wind speed and direction
- air pressure and temperature
- electrical power
- turbine status signal

## Load Measurement

Required instances that need to be recordedd during a measurement campaign:

- Normal power production
- Power production plus occurrence of (simulated) fault
- Parked, idling conditions (low wind speed)
- Start up
- Normal shutdown (slowly, for maintenance)
- Emergency shutdown (Pitch to 90° in a few seconds)
- Grid failure (power can no longer be exported out of the wind turbine, no torque, wind turbine is going to speed up)
- Overspeed activation of the protection system (detect overspeed and react using the backup system, batteries, hydraulics, etc.)

## Measurement Campaign for Validation

Standard multi-megawatt turbines are already equipped to measure the required SCADA data for validation. Some additional signals such as the wind turbine status can be helpful to identify its operating states such as Parked and Startup

## Model Validation

Once the neccessary data is gathered the analysis can begin. The procedure for the validation of the model is not a straight forward process. Examples to represent individual data for comparison in IEC 61400-13:

1. Validation of turbine dynamics / excitation frequencies
2. Comparison of the statistical properties
3. Comparison of load quantities in form of time series
4. Validation of characteristic curves
