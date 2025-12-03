---
course: Windenergie 2 
type: Grid Connection
by: Po Wen Cheng
date: 2025-11-26 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Questions at the beginning

- The low frequency sound and infra-sound is mainly related to
    - Pressure change due to blade tower interaction (Frequency is around three times RPM)
- The hearing threshhold corresponds to a sound pressure of
    - 20 microPascal
- Which part of the turbine is related to the tonality in the sound?
    - Gearbox
- What can a wind tubrine designer do to reduce the sound emission?
    - Winglet
    - Different Airfoil
    - Reduce tip speed - but also has lower power
    - Trailing edge serration
- What is the maximum exposure time to wind turbine shadow
    - 30 minutes per day
    - 30 hours per year
- If a sinfle wind turbine causes a sound power level of 60dB(A), how many dB(A) would 8 wind turbines produce?
    - 69dB(A), 3dB for every doubeling of the source

## Grid Characteristics

Voltage Levels

- Extra high voltage $\geq$ 220 kV
- High voltage $\geq$ 60 kV
- Medium voltage $\geq$ 3 kV
- Low voltage

Uniform frequency of 50 Hz

Responsibility of supplier\
Nationwide balancing of supply and demand\
Non-stop supply with constant frequency and voltage\
Minimise losses

Substations to connect offshore wind farms to the grid, if they are too far away

### How to circuit feedback?

| Parameter                        | Reason                                           |
|----------------------------------|--------------------------------------------------|
| a) Reactive power                | asynchronous generator (no problem with a double fed ASG) |
| b) Voltage increase and decrease | power production/consumption                     |
| c) Flicker, voltage fluctuation  | - Switching operations<br> - Tower shadow<br> - Wind shear<br> - Gust |
| d) Harmonic (higher frequency)   | inverter system (frequency converter)            |
| e) Voltage peak / drop           | switching operations                             |
| f) Frequency, frequency fluctuation | power/consumption                             |

## Grid Connection of Power Suppliers

Grid connection capacity at the access point (short circuit capability)\
Thermal capacity of cables, everhead lines and transformers

Grid compatibility, voltage fluctuations, flicker and harmonic current

Grid protection, behaviour due to errors in the grid or turbine\
Disconnection from the grid or further opertation of the turbine

Turbine generates low voltage (690 V) which has to be stepped up to medium voltage to be combined with other turbines and stepped up again to high voltage to be compatible with the grid\
Cables dont have to be so thick and are much cheaper (because current can be lower) (Cables in offshore wind farms are about 7% of the cost)

AC generates unwanted amounts of reactive power for long distances, but is used inside the turbines\
DC transmission cables are now used to transport power from offshore turbine to land, where AC is used again:

- Low losses
- thinner cables and a higher capacity
- more expensive equipment (huge HVDC transformers)

In Germany the maximal nominal load in the medium-voltage power grid is 2% of the short-circuit power\
On the high voltage system it is partially possible to connect up to 20% of the short-circuit power.

