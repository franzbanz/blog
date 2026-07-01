---
course: Windenergie 3
type: TODO Dynamics 2
by: Po Wen Cheng
date: 2026-05-07 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Questions at the beginning

- Order these natural frequencies of a wind turbine from lowest to the highest (slowest to fastest)
  1. first fore-aft naatural frequency of the tower
  2. first edgewise natural frequency of the blade
  3. first flaptwise natural frequency of the blade
  4. first torsional frequency of the tower
- The aerodyynamic damping of the wind turbine does what with increased velocity?
  - it increases until rated wind speed is reached. When the turbine starts pitching at higher speeds, it levels out and stays constant / decreases a little bit
- If thr rotational frequency of the turbine is 0.1 Hz to 0.2 Hz, a soft-stiff design would have a first natural frequency of
  - 0.25, between the rotor frequency and 3P
- Where do you see an excitation problem for the system, mark it on the Campbell diagram.
  - (See slides of [**previous lecture**](https://franzkoehler.com/src/notes/windenergie3-2026-05-06/))
  - (See [here](https://lightningchart.com/blog/campbell-diagram-in-c-sharp/))
- The transformation matrix in a modal reduction consists of
  - eigenvectors

## Dynamic Simulation for Wind Turbines

- covers the entire wind turbine
- is carried aout with special simulation software
- should be simulated for all relevant loadcases
- is needed for every system configuration

### Modal Analysis

1. Model the wind turbine using geometrical and structural data
2. Perform modal analysis with FE program
3. Determine the eigenfrequencies and eigenmodes (eigen vectors)
4. Eigen vectors and eigenfrequencies are used together with the turbine geometry and airfoil data etc. for the load simulation

This allows the equation of motion to be decoupled

## Simulation Tools

- full CFD-FEM FSI methods
  - very good for understanding phenomena that cannot be easily captured with simple simulation tools
  - for example: damping plates
- state-of-the-art aeros-servo-hydro-elastic coupled analysis
  - openFAST, which will be used in the excercise
  - not very good at complex extreme phenomena, like for example a tornardo
  - industry standards: Bladed, SIMPACK, Flex5
- coupled / decoupled, reduced nonlinear coupled methods / frequency domain methods
  - pre-design optimization

Example: FAST

- 6 degree of freedom in foundation
- 3 in each rotor blade
- 4 in tower
- more in nacelle, rotor, generator and drive train
- 24-28 degrees of freedom in total

## Model Reduction Technique

*Can I reduce the number of degrees of freedom?*

= capturing the vibrational behavior of structures with many degrees of freedom, if only first eigenfrequencies are of interest

Goal: Transform matrix with relevant information from the initial equation

How: **Modal Reduction** (Just one type of **Model** Reduction!)

*Lets only take the first 10 eigenmodes into account*

- In commonly used tools for the simulation of wind turbines, modal reduction is used to calculate the system dynamics
- Initial consideration: Calculation of eigenmodes and frequencies of conservative systems relatively unproblematic
- Determine conservative auxillary system with symmetric matrices for the calculation of natural frequencies and vectors $\varphi$ of the entire system
- Use the first few eigenmodes

Very fast dynamic simulations of wind turbines possible!

## Simplified Blade Model

1. the blade is made of rigid bodies
2. the hinge spring represents the flexibility of the blade
3. the hinge is located at an offset position
4. the degrees of freedom are uncoupled
5. the aerodynamic forces are not considered here
