---
course: System Design 1
type: Chapter 5
by: Bastian Luettig
date: 2025-05-21 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Module: One-Step

- $M_{\text{one-step}}$ contains all redundant computer data consolidation tasks that require a broadcast (one-step data exchange)
- Workflow:
    1. Each single computer transmits data ($y_{\text{css}}$) that should be identical to each neighbour and that produces $\underline{y}_{\text{bc}}$
    2. The single computers build a reference value within $F_{\text{voting}}$
    3. The single computers compare each recieved datum against the reference value ...
    4. ... and set a failure indication if the single computer detected an unacceptable deviation

Example for one-step Services on slide 24\
Note: $F_{\text{voting}}$ will use only non-passivated lanes. $F_{\text{monitor}}$ on the other hand will check every value

![example1](/src/bilder/systemDesign_image_16.png)
<figcaption>Voting example - Discrete Values</figcaption>

![example2](/src/bilder/systemDesign_image_17.png)
<figcaption>Voting example - Analogue Values</figcaption>

### Conclusion

- The Module One-Step provides functions for single-step data exchange
- This is needed when we have analogue data with $A_\Delta$ or if we observer data that should already be identical
- The lanes exchange data via broadcast, compute (vote) a reference value and monitor the broadcast values against the reference value
- Any deviation for $A_=$ data leads to a failure indication and...
- ... any deviation outside the monitoring limit for $A_\Delta$ information leads to a failure indication

## Module: Failure Management

The $F_{\text{failma}}$ collects failure indications into failure classes\
This is important because:

- Within the system, we might have thousands of different failure indications, because each software component may throw one
- The responsible for a component might not know what to do with the indication, i.e. how to handle it
- The system responsible can combine the indications into classes
- Indications within the same class have the same effect

Failma significantly reduces the number of failure handling we have to develop

We will distinguish 3 failure classes for the computing lanes

1. $z_{\text{cls,} \lnot \text{avail}}$: indications that show a lane as offline / not available / power off
2. $z_{\text{cls, fail}}$: indications that show a 
3. $z_{\text{cls, long}}$: