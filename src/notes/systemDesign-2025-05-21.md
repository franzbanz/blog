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

3 failure classes for the computing lanes

1. $z_{\text{cls,} \lnot \text{avail}}$: indications that show a lane as offline / not available / power off
2. $z_{\text{cls, fail}}$: indications that show a lane as faulty
3. $z_{\text{cls, long}}$: indications that may show a lane aus faulty - but we want to confirm that very long

Failure indications:

1. lane did not synchronize
2. lane synchronized with wrong data
3. lane had wrong information - thrown by plama core / one-step
4. lane had wron information - thrown by plama actor / one-step
5. lane had wrong information - thrown by plama law / one-step
6. supma(platform) could not correctly attribute the failure and guessed this lane

Each service can throw its own failure indication. They are condensed into three classes. The classes are stored in

$$\text{db}_{\text{indi}}$$

as they have $A_\neq$\
A descision based on these classes with $A_\neq$ would lead to loss of computer replica determinism

## Module: Two-Step

The Module $M_{\text{two-step}}$ has four specific tasks:

- confirmation of certain values
- implementing reliable broadcast
- combination of certain values
- voting of certain values to gain consensus data

- individual failure indications thrown by any Service: $z_{\text{fail}}$
- failure management condenses the individual indications into one of 3 failure classes $z_{\text{cls,fail}} \quad z_{\text{cls,} \lnot \text{avail}} \quad z_{\text{cls,long}}$
- $F_{\text{confirm}}$ implements that not every single event leads to a reaction
- $F_{\text{RBC}}$ distributes the confirmed failure classes and ensures each correct lane has the same matrices
- $F_{\text{combine}}$ condenses the confirmed classes into failure categories
- $F_{\text{CSS}}$ votes specific signal data and creates $db_{\text{css}}$ data.
