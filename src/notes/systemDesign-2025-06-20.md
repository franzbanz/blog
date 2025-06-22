---
course: System Design 1
type: Chapter 6
by: Bastian Luettig
date: 2025-06-20 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Consolidation Management

![graph](/src/bilder/systemDesign_image_19.png)
<figcaption>See Chapter 6, slide 46, Bastian Luettig, based on Systementwurf (2022) by Reinhard Reichel, Institute of Aircraft Systems (ILS), University of Stuttgart: System Design I </figcaption>

1. in the first block (above broadcast), there is the individual single computer-internal data
2. all single computers perform a broadcast of the individual information and now each single computer lane has the information from each other computer lane (be aware: a lane might not tell the truth)
3. each computer lane creates a voting / reference value $y_{\text{ref}}$, performs monitoring between the individual values and creates a monitoring failure indication
4. each computer lane $o$ creates fail state information
5. each computer lane $o$ creates not avail state information
6. each computer lane $o$ checks, if the yref-value was obtained from sufficiently valid sensors

Simmilar diagram for discrete sensors is available on slide 55 onward, chapter 6

In case of correct sensors, discrete sensors have $A_\in$ when and analog sensors have $A_\Delta$ after data acquisition by drivers

## Resource Management

Based on the failure categories set by the consolidation management, the resource manager will passivate sensors

- Input Consensus is required to fulfill output consensus among redundant computers
- Sensor types are categorized into simple and complex (bus-based)
- Single sensors follow discrepancy models (analog: $A_\Delta$ and discrete: $A_\in$)
- Input Consolidation Management handles availability and failure detection at the individual computing lane
- Cross-Sensor Consolidation ensures correctness by comparing multiple single sensors
- If at least two sensors are valid, valid-voting is performed; otherwise, avail-voting. If no sensors are available, a default value is returned
- Faulty sensors are passivated if their values deviate too far from the reference value
- The PLAMA sensor ensures $A_\Delta$ for analog sensors and $A_=$ for discrete sensors
