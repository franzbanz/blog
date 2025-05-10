---
course: System Design 1
type: Guest lecture
by: Björn Annighöfer
date: 2025-05-07 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

Is the previously developed architecture according to regulations and is it safe enough, is it's safety level neccessary?

## Safety Assessment Process

<!-- V-Design-Graph -->
**AHFA**: Aircraft functional hazard assessment - Enumerate all failure conditions of the aircraft independent of the technical realization and judge their severity\
**PASA**: Preliminary aircraft safety assessment - Map functions to systems and elaborate interdependance and common resources\
**SFHA**: System functional hazard assessment\
**PSSA**: Preliminary system safety assessment\
**CCA**: Common cause analysis

**Goal**: safety requirements for my system, equipment and hardware

### Activities of safety verification

**SSA**: System Safety Assessment
**ASA**: Aircraft Safety Assessment
**CCA**: Common Cause Analysis

**Goal**: Provide evidence that the actual implementation is as safe as required (get the aircraft certified)

Diagram on **slide 13**

## Practical Safety Assessment Walkthrough for Elevator Control System

Aircraft Type

- The aircraft class and the certification scope define the regulation to refer to

CS-25 boundary conditions

- Unsafe-situation and immideate actions requirement must be indicated to the crew
- No single-point-failure

### AFHA

- Schematic table that shall enumerate all failure conditions and their safety effect for functions on aircraft level
- The perspectuve of an AFHA shall be independent of its realization (i.e. systems)
- Unsure what generic functions and failures an aircraft could exhibit? - Try **ED-279 [6]**

### FHA

Functions

- Provide aerodynamic performance
- Control flight path / navigation
- Maintain structural integrity
- Provide emergency functions
- $\dots$

Failure modes

- Total loss
  More than intended
- Inability to stop
- Inadvertent
- Late
- Erroneous (OOC)
- $\dots$

Flight phases

- Pre-flight
- Taxi
- Take-off
- Cruise
- Descent
- Approach
- $\dots$

Remark: Those are only suggestions and shall be modified and defined as needed

<!-- slide 23 table (not all of it, just one row) -->

### PASA

- A set of tools to identify safety bottlenecks on functional level
- Interdependence Analysis reveals systems contributing to A/C failure conditions
- Common Resource Analysis shows failure modes by common electrics, hydraulics, …
- Combined Functional Failure Effects Analysis Analyzes A/C effect of system (component) failure combinations for each FC

**Goal**: Find a safe mapping of aircraft functions to systems (repeat if insufficient)

### SFHA

- Enumerate system failure effects and link to aircraft failure conditions
- Judge failure effect and derive severity on A/C level
- Classification results in boundary probability and DAL as defined in Step 0
- (Is carried out for each system individually, i.e., definition of systems and allocation of A/C functions has to happen in advance)

<!-- One or two rows from table on slide 31 -->

### PSSA

**Goal**: Ensure that the planned system will fulfill the safety requirements

- Use safety assessment methods (probability judging)
- Re-iterate if not! (a re-iteration in design is much cheaper then during integration)
- You did that already with Markov Analysis → we will not repeat Markov here

### SSA

Failure Effect system equipment sometimes is defined by the manufacturer\
Otherwise experiments have to be made

Start at the lowest level of individual electrical components\
End at the equipment top-level

### FMEA

- Table-based method
- Systematic propagation of failure modes to failure effects
- Several FMEA might be necessary from part to equipment level
- On the way up, failure modes with identical failure effects can be summarized
