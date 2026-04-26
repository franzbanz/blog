---
course: Windenergie 3
type: Design Methodology
by: Po Wen Cheng
date: 2026-04-09 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: false
---

## What is Design?

- *A plan or drawing produced to show the **look** and **function** or workings of a building, germent, or other object befor it is made.*
- *The **art** or **action** of conceiving of and producing a plan or drawing of something before it is made*

New designs: bladeless wind turbines, diffuser augmented wind turbine, reciprocating airfoils,...

- There is not much wind to be harvested at the ground level
- There is no way to beat Betz law by using diffusor (the effective rotor area is the area of the diffusor)
- Vibration is the main source of fatigue for wind turbines (or any structure)

## The Structured Design Process

1. Market research
   - Which is the market that we want to sell to? (geography, technical requirements, customer basis,...)
   - How big is the market?
   - Who are the most important players?
   - What are the underlying economics of the market?
   - What is the margin of profit of the customer?
2. Product requirements / specifications
   - External and operating conditions (IEC wind class, turbulence intensity, water depth, corrosion,...)
   - Main turbine parameters
3. Conceptual design
   - First estimate of the key dimensions of the wind turbine
   - Build up a wind turbine model for the dynamic simulation to determine the system loads
   - First aerodynamic design of rotor blade to determine the power curve
   - First drawing of the main components
   - Task: FMEA (Failure Mode and Effects Analysis)
4. Preliminary design
5. Detailed design
6. Product check and validation
   - Factory tests
   - Reliability tests
   - Vibration / climate chamber tests
   - Component fitting tests
   - ...

## Design Criteria and Requirements

### Noise

- Has mechanical and aerodynamic causes
- Relevant for onshore especially in connection with discomfort
- Underwater noise can affect marine mammals, especially during the installation phase
- A high tip speed ratio could be an option for offshore wind turbines, such as 2-blade rotors, if noise not relevant

$$
\text{Tip speed: } \omega \cdot R
$$

Noise is proportional to tip speed increase to the 5th power\
Current tip speeds approx. 70-80 m/s, anything above that would induce compressible air flow

**Because of this, larger turbines have slower angluar rotation (same tip speed), but more torque**

### Capacity Factor

$$
\text{specific power} = \frac{\text{Rated Power}}{\text{Rotor Area}}
$$

High capacity factor - steadier power output to the grid and more efficient use of the electrical infrastructure

The cost optimum depends on the accuracy of the cost modeling. In this case, the const optimum is a function of the mean wind speed and the specific power

*If you have many fish per square meter, you don't need a big net to meet demand*\
*If you have less fish per square meter, you need a much bigger net (increase the rotor diameter)*
With increasing rotor diameters, the cost of operation etc. rises, so there is an optimum in between

For low wind speed sites, the cost optimum is at a lower specific power

For high wind speed sites, the optimum moves to higher specific power

### External Conditions

- AEP-Target for a given regime (e.g. IEC Wind class, turbulence class, extreme wind speed)
- Grid requirements on power quality and faults response (higher harmonics, flicker, Fault-Ride-Trough etc...)
- Operating conditions
- Lighning, fire, birds protection

### Operation Capabilities

Large fluctuations of the power output requires interventions from the grid opreator to balance the demand and supply

### Cost

- Cost of energy: LCOE
- Cost shall consider the wind turbine cost: Balance of plant, installation, decommissioning
- Trade.off between the component cost and the total system cost
- LCOE of renewable energies is driven by the CapEx, while OpEx is significantly lower than fossil fuel power plants (because of the fuel costs)

## Design Options

### Vertical Axis vs Horizontal Axis

- Aerodynamics of HAWT are much simpler than of VAWT, easier to predict, less fluctuating loads
- Synergies: offshore and onshore wind turbines are basically the same, which makes a different design (VAWT) much more expensive to research, produce, ...

### Two Blades vs Three Blades

- Two blades have higher tip speeds and thus louder noise - so only viable for offshore
- Good thing: Two blades can be installed both at the same time with the nacelle. Cheaper to build
- Again: Synergies: Different designs for offshore and onshore are more expensive, because everything has to be developed twice
