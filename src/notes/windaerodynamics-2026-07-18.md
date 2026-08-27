---
course: Wind Turbine Aerodynamics
type: 3 - Blade Add-ons
by: Pascal Weihing
date: 2026-07-18 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Balde design requirements

From blade root to blade tip:

- Needs to be pitchable (circular blade connection)
- Great stiffness (high thickness)
- Tolerance to soiling (good performance also in tripped conditions)
- High aerodynamic efficiency (high lift or low drag)

Further requirements (not aerodynamic)

- Chord is limited (transport restrictions on the trailer)
  - High relative thickness
  - Target axial induction demands high lift
- Not everything that is aerodynamically good can be produced at reasonable cost
  - Simplification of geometry while maintaining aero-performance

### Airfoild across the blade length

Airfoils in the **inner blade** region are dominated by structural properties - high rel. thickness, drag is aerodynamically less important than lift\
**Flatback** airfoils can reduce the risk of flow separation: At the base of the trailing edge a negative pressure remains, less adverse pressure gradient needed from the point of maximum thickness to the trailing edge. The remaining negative pressure at the trailing edge is recovered in the airfoils wake

Reynodls number increases in the **inner to mid blade region**:

- Structural properties are still important
- Airfoils with 25% - 30% rel. thickness are used with and without flatback
- Roughness performance not crucial
- The more outward, the more aerodynamic efficiency becomes important

Reynolds number reaches maximum in the **mid blade region** because of having a large chord and high velocity

- 25% - 28% rel. thickness
- Cant use flat back airfoils because of significant mach-number (would be too loud)
- Aerodynamic efficiency becomes more important
- Tolerance to soiling also important: : reduction of suction side thickness - less adverse pressure gradient
- Compensation of lower lift by rear loading

Reynolds number decreases to about 3 to 5 m at the **outer blade region**

- Airfoils with 20% - 15% rel. thickness
- Structural properties less important
- Maximum lift less important
- High aerodynamic efficiency very important
- Minimum sensitivity against surface pollution

## Blade add-ons

| Add-On | Where | Why |
|--------|-------|-----|
| Boundary layer fence | Inboard | Prevent root-prone separation pockets from contaminating outer regions of the blade |
| Gurney flap | Root region, extension of the trailing edge towards pressure side | Augment sectional lift by increasing effective airfoil camber |
| Spoilers | Inboard, pressure side, 50%-70% chord | Increase lift and torque contribution from inboard blade section |
| Trailing edge serrations | 70%-100% of rotor radius, extension of trailing edge | Attenuate trailing edge noise, outward motion towards serration edge, inward motion towards serration root - trailing vortices induce more drag, increase lift |
| Vortex Generators | Inner thrird of the rotor | Prevent airfoil flow separation, reduce unsteady loads and increase AEP, higher velocities near the airfoil, lower velocities higher up |
| Winglets | Outboard (tip) | Reduce tip vortex induced drag and increase energy output by potentially 1%-2% |

![](/src/bilder/windaerodynamics_image_2.png)
<figcaption>Airfoil with and without spoiler</figcaption>
