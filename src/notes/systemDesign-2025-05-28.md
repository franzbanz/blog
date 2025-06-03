---
course: System Design 1
type: Chapter 5
by: Bastian Luettig
date: 2025-05-28 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Supervisor Management SUPMA(core)

SUPMA is responsible for

- deciding which modules to passivate (RESMA)
- creation of new status vector
- setting the new status active at the end of the cycle
- setting the next job to execute

### Passivation

passivated modules will not influence

- constructive core tasts: xsynchro, RBC, CSS, Voting
- constructive sensor tasks: voting
- constructive law tasks: xdrift, RBC
- constructive actor tasks: actor model comparison
- controlling any actor (other lanes open the outputs of the passive lane)

but they will still take part in the monitorin, which is essential for the re-integration of the module

When will the Resource Manager re-integrate a module?

- a module is set $s_{\text{off}} = true$ but $s_{\text{iso}} = false$ (it was off due to power outage / late start ...)
- the module behaved correctly during monitoring for multiple cycles
- the correct lanes decide unanimously to re-integrate the module

#### Strategy 1: Self-Categorization

A single computer that blames itself as being not available (it will be passivated) or as being failed (it will be passivated and isolated)

#### Strategy 2: Majority / Quadruplex and Triplex

If two or more single computers blame one computer as being not available (it will be passivated) or failed (it will be passivated and isolated)

#### Strategy 3: Majority / Duplex

If one single computer blames another computer as being not available (both will be passivated) or failed (both will be passivated and isolated)

Examples of this are on slides 71-83

## Resource Management Platform

Above all SUPMA blocks, we haev the Supervisor Management (platform). It performs platform wide descisions\
It has the information about all failure categories and status entries from all other SUOMA domains: core, sensor, actor

- Resolve discrepancies
- Help determine the failed module in ambiguous cases
  - Is one lane responsible for most failure categories?

### Failure Category Tally

Count each failure category created by and for a module - this gives us an estimate of which module is most likly to be faulty
reasoning:

- If a module is faulty, it can generate arbitrary failure indications - even for correct modules
- If a module is faulty, other modules can generate failure indications
- If a module performs asymmetric communication, not each correct module creates a suitable failure indication
- If a module is faulty, it is more likely to show more than one fault

![procedure](/src/bilder/systemDesign_image_18.jpeg)
<figcaption>Procedure</figcaption>

## Operation Manager

Operations Manager decides, which job-table to execute\
job-table is a list of services, each entry has the following attributes:

- service name (i.e. function pointer to the service)
- start time
- duration (worst case)

The scheduler or dispatcher performs the job execution
