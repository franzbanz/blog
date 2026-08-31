---
course: Wind Turbine Aerodynamics
type: 8 - Noise Emission 1
by: Pascal Weihing
date: 2026-08-21 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Secondary Noise

Sources can be any moving parts, mostly generator and gearbox, but there are many other sources: inverter, transformer, pitch/yaw drives, cooling fans, application of parking brakes, ...

Transmission through the air directly or through the structure of the turbine

Reduction by:

- increase manufacturer precision
- polish surfaces
- proper maintenance
- isolation of the emitting surfaces
- isolation of the exciting parts
- detuning or damping eigenfrequencies
- counter forces

### Gearbox

- consists of several planetary / spur gears
- meshing of gears cause small shocks
- transmission errors because of form of teeth, distortion due to tooth loading, ...

amplitude of noise depends on number of gears, rotor speed / torque, ...

### Generator

- consists of stator and rotor
- inconsistent magnetic field  / inconsistent forces when rotating because of imperfect manufacturing
- excitation of harmonics of joints and structures

noise depends on shape and arrangement of poles, number of poles, rotational speed / torque

## Aerodynamic Noise

Sources are mainly the blades, for example inflow turbulence, blade tower interaction, blade tips, blunt trailing edges, stall, separation, holes, intrusions and slits, laminar boundary layer, turbulent trailing edge flow, ...

### Trailing Edge Noise (most important)

- *turbulent-boundary-layer-trailing-edge-interaction* noise
- major noise source in audible range
- influenced by airfoil shape, reynolds numer, surface roughness
- comes mostly from outer 40% of the blade
- scales with $Ma^5$
- quadrupole
- not produced in laminar boundary layers

### Noise Polar

- flat increase for small to mediumlift coefficients
- steep increase for medium to high lift coefficients
- slope of curve depends on airfoil characteristics
- noise increases towards positive (increased loading on BL of suction side) and negative lift (increased loading on BL of pressure side)
- after point of maximum lift, the noise increases further (stall noise + TE noise)

![](/src/bilder/windaerodynamics_image_10.png)
<figcaption>noise polar</figcaption>

### Directivity

If the leading edge of the blade points towards the observer, the noise increases. (can be heard as a *swishing* sound) spectra are in general given by averaging over multiple rotations, averaging out the directivity.

### Stall

stall ist flow around the airfoil with very high, threre dimensional boundary layer separation over significant parts of the airfoil, which is assosiated with vortices being shed into the wake. Stall comes with decrease in lift and increase in drag.

broadband noise, lower frequencies than TE noise but higher noise level

Two mechanisms:

1. wall pressure fluctuations from turbulence produce noise similar to TE noise
2. pressure fluctuations due to vortex shedding are radiated by the whole chord - dipole noise

### Laminar Boundary Layer Instability Noise

- self excited feedback loop, sound generation at TE, sound waves travel upstream and amplify instability
- tonal noise (whistling)
- number of tones at distinct frequencies
- non-linear BL instabilities which interactr with blade surface
- requirement: laminar BL - can be avoided
- especially for low RE where laminar flow regions extend down to the TE

### Blunt TE noise

- thick airfoils with blunt trailing edges induce vortex shedding
- alternating vortices produce high surface pressure fluctuations close to TE - tonal noise emission

### Summary TE Noise

- tonal noise from laminar boundary layer is to be avoided by ensuring turbulent boundary layer at the TE
- pitch regulation + proper operation mode design
- avoid stall during all operating conditions (individual pitch control)
- choose blunt trailing edge shape to produce less noise
- laminar regions as large as possible, transition on predetermined location, pressure recovery
- avoid over-induction: only more noise, not more power
- use trailing edge serrations: gradual end of airfoil, braking of turbulent structures, scatter of acoustic energy
  - choose correct length, triangle angle, flap angle
  - place at outer part of the blade
- active boundary layer suction - not used in today's turbines

### LE Noise

- interactions of blades with atmosperic turbulence
- contribution to broadband noise up to 1000 Hz
- far field acoustic pressure is proportional to the integral length scale and the square of turbulence intensity

inflow turbulence depends on inflow velocity, local surface roughness, temperature gradient, induction by rotors upstram

inflow noise and frequency depends on size of *turbulent eddy*: higher frequency the smaller the eddy

## Additional Noise Mechanisms

- tip noise
  - high frequency
  - depends on tip vortex strength
  - higher noise emission by flat tips
- vortex generators in outer rotor regions
- surface imperfections / holes / slits
- thickness noise
- blade - tower interactions
