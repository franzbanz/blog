---
course: System Design 1
type: Chapter 4, 5
by: Bastian Luettig
date: 2025-05-14 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

*Exam: is the designed redundancy for a computer system enough? - check integrity reliability redundancy degrees and if they are sufficient*

# Platform Management (PLAMA) : Architecture

The platfoem management handles all aspects of the system that redundancy affects. That includes:

- combine single sensors to redundant sensors
- make single computers behave as redundant computers
- implement the API for the law (simplex minded)
- handle actuator redundancy including digital twin
- passivate and re-integrate modules in the platform
- execute the platform

## PLAMA structure details

![architecture](/src/bilder/systemDesign_image_14.jpeg)
<figcaption>This runs on every lane</figcaption>

**Law**: these boxes contains specific control functions that do not know about redundancy.\
**PLAMA**: this box contains all functionality that enables redundant execution and handles redundant modules.\
**Drivers**: this box contains hardware-specific drivers.\
**OS**: this box contains a real-time operating system.\
**CONMA**: The consolidation management handles data for the redundant system, i.e., condenses vectors and matrices to scalars and vectors\
**SUPMA**: The supervisor management decides what to do, i.e., makes operational decisions\
**Databases**: Databases contain the data acquired within the system, there are three types:

- indi - individual data, no gurantee for similarity
- rbc - data after reliable broadcast was performed, gurantees rbc-properties
- css - data after consensus mechanisms were performed, gurantees identity within correct computer lanes

## PLAMA specialization

We can now define specialized areas for sensors, laws, computers and actors.

- Laws for core and sensor are mostly not needed
- Laws for actor are typically control functions and digital twins

Each PLAMA controls the specific area of the redundant platform. Both specialization aspects are combined to form the platform architecture (chap. 4 slide 12)

## Functions

SUPMA consists of two main parts:

- Resource Management (RESMA): sets the resource status i.e. if a sensor or a function has to be turned off or re-integrated
- Operation Management (OPMA): sets the next job i.e. if the system has to execute a cold-start or normal operation scheduling table
- Peripheral communication: performed by drivers, each value read from the peripherals will be stored in $db_{indi}$ (Any unconsolidated / faulty command to actors is potentially catastrophic, hence each outgoing command will come from $db_{css}$)
- CONMA: consists of many sub-functions like time synchronization, broadcast, voting / monitoring... Goal is to equalize the data and ensure reliable broadcast and consensus properties
- Failure indications: Each software component can indicate a failure and send it to $db_{indi}$

*Slide 16 will be handed out for the exam, does not need to be learned by hard*

## Databases: Properties

The databases play a vital role, each of them ensures other properties (ageement / consensus) Each database exists in each single computer, i-e- in a quadruplex system four times.\
Agreements:

![architecture](/src/bilder/systemDesign_image_15.jpeg)
<figcaption>Different types of agreement</figcaption>

**exact agreement**: three identical values and one different value\
**delta agreement**: values are simmilar within a certain limit\
**Epsilno agreement**: values are identical most times, except in very short periods\
**non-agreement**: values have no guranteed properties

## Software Architecture: Services

Services are small software functions that can be parameterized and are executed from the job table.\
The job table is a list of acrions to perform along with a start time and a stop time. A scheduler or a dispatcher executes the job table. There may be multpile job tables within a software load.\
A software module is a container for multiple services that groups services that the job table typically contains together.

### Fundamental States and Status

- $z_{fail}$: the component has failed
- $z_{\lnot avail}$: the component is not available
- $s_{off}$: the module will be ignored for the moment
- $s_{iso}$: the module will be ignored fot the rest of the mission

#### Special states

Valid state $z_{valid}$. It tells the platform if a certain information is to be used within the platform

$$z_{valid} = \lnot(z_{\lnot avail} \vee s_{off})$$

*the signal is valid (i.e. can be used) if it is available and not passivated*

# Platform Management: Core

## Requirements

What are the requirements?

The platform management core is suitable for the redundant computer, if it gurantees that the computer performs correctly in all valid operating scenarios ($b_n \in B_{rfcc}$)

What does *performs correctly* mean?

- synchrony: all correct sinfle computers are time synchronous
- agreement: all correct single computers show simmilar results in each cycle
- integrity: all correct single computers show actual results from computing $\tau_{law}$ and $Z_{law}^*$

Platform Management core ensures core consensus of the redundant computer **R-SRD-1**

### conclusion

- By fulfilling the Core-Consensus requirement, we tackle most higher level requiremends from **YDD**
- For failure detection against inconsistent failures in triplex configuration, additional design measures have to be taken
- For double faults, we need to ensure that failure detection is guaranteed within the allocated time. In our case: max. 3 $s$

## Time Synchronization

Without synchronization, we cannot gurantee that:

- each lane reads out the sensor at the same time (potentially hogh difference in value)
- each lane computes results at the same time (potentially comparison against old value)
- each lane commands actuators at the same time (potentially force fights)
- the computer fulfils core consesus condition 0
