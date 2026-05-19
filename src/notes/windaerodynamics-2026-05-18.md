---
course: Wind Turbine Aerodynamics
type: Lecture
by: Pascal Weihing
date: 2026-05-18 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Airfoil Aerodynamics and Their Relevance at Turbine Manufacturers

Wind turbinrd are becoming ever larger because with larger rotor area, momre energy can be harvested from the wind and at greater hub heights above the ground, there is more wind.

With larger wind turbines, the cost of energy can be reduced

**Levelized cost of Energy (LCOE)** is a metric to assess the cost of electricity generation and the total power-plant-level impact from technology design changes, should be as low as possible

$$
LCOE = \frac{CapEx \cdot FCR + OpEx}{AEP / 1000}
$$

- $CapEx$: capital expenditures [$ / kW]
- $FCR$: fixed charge ratio [%]
- $OpEx$: operational expenditure [$ / kW / year]
- $AEP$: annual energy production per year [MWh / MW / year]

## Flow around the Airfoil

### How can aerodynamics help to decrease the LCOE?

- By lowering the $CapEX$ of the turbine, which makes the components cheaper
  - Reducing the weight of the blade
  - Finding ways to simplify the blade geometry and maintaining the same aerodynamic properties
- By saving costs during logistics and installation
  - Risk assessment and potimization of blade transportation
  - Guidelines to define limiting wind speeds for listing blades or the generator
  - Prevention of vortex induced tower vibrations during the building process
- By lowering the $OpEx$ of the turbine, making it more durable and easier to maintain
  - Reduce leading edge erosion
  - Design components that last the entire lifetime of the turbine
- By boosting $AEP$, increasing the power output
  - High performance airfoils 
  - Precise knowledge of the aerodynamic optimum and the limits to define high yield operation modes
  - Blade optimizations with add-ons (vortex generators, spoilers, trailing edge serrations)

### Basic Definitions

- suction side / pressure side instead of upper and lower side
- trailing edge: most downstream position on the airfoil
- leading edge: point of the largest distance from the trailing edge point
- chord: connechting line between leading edge and trailing edge points
- thickness distribution: defined by the diameters of the circles fitting into the airfoil contour
- maximum thickness: diameter of the largest of these circles
- leading edge radius: radius of the smallest circle fitting the leading edge
- relative thickness: maximum thickness divided by the length of the chord
- chamber line: connecting line of all mid points of the circles
- chamber: maximum distance of the chamber line to the chord

### How to Measure Lift in a Wind Tunnel

- Integration of the pressure distribution on the airfoil
  - Lift component is normal to the airfoil
  - Sectionwise information on lift
  - Needs instrumentation on the wing
  - Local flow phenomena can be detected (separation, transition)
- Pressure integration along the wind tunnel walls
  - No instrumentation required on the wing
  - Lift of the entire model measured
  - Correction fot limited integration length needed (Wind tunnel section too short)
- Force balance on the model mounting
  - Measurement of forces and moments possible
  - Measurement by strain gauges
  - Typically used for full configurations airplanes, cars, helicopters, ...

### How to Measure Drag in a Wind Tunnel

- Integration of the pressure distriution on the airfoil
  - Pressure drag only
  - Pressure drag component is parallel to the inflow
  - Good approximation of total drag in stalled operation and for flatback airfoil
- Wake rake measurement measures velocity deficit in the wake
- State-of-the-art airfoil measurement for total drag (pressure + friction)
  - integration of velocity deficit downstream of the airfoil
  - Cannot be used in massive separation or together with acoustic tests
- Force balance on the model mounting
  - Takes total drag of the model into account
  - Measured by strain gauges
  - May be less accurate for small drag values in case of airfoil only measurements

## Flow Separation

![](/src/bilder/windaerodynamics_image_1.png)
<figcaption>Flow separation mechanisms in the boundary layer</figcaption>
