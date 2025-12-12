---
course: Messverfahren des Wärmetransports
type: Temperaturmessung 2D
by: Rico Poser
date: 2025-12-12 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

### Faser-Bragg-Gitter

Skizze auf **Folie 132**

Effektiv ein nicht metallisches Thermoelement, kann sowohl in der Mitte, als auch am Ende eines lichtleiters eingebaut werden, das weiterlaufende Licht kann außerdem für andere Messungen weiterverwendet werden.

### Vergleich temperaturanzeigende Farbbeschichtungen

|                    | **TP**                 | **TSP**                 | **TLC**                |
|--------------------|------------------------|--------------------------|-------------------------|
| **Range**          | $+48..+1250^\circ\mathrm{C}$  | $-150..+200^\circ\mathrm{C}$ | $-30..+120^\circ\mathrm{C}$ |
| **Bandwidth**      | large                  | medium                   | small                   |
| **Response Time**  | slow (minutes)         | fast (0.x seconds)       | fast (0.x seconds)      |
| **Transient Capability** | no               | (yes)                    | yes                     |
| **Sensitivity**    | low                    | medium                   | medium                  |
| **Calibration Accuracy** | low              | medium                   | high                    |
| **Optical Access** | only for evaluation    | required                 | required                |
| **Degradation**    | low (months)           | high (hours, days)       | medium (weeks)          |
| **Experimental Effort** | low               | high                     | medium                  |
| **Evaluation Effort** | medium              | high                     | low                     |

## Wärmeübergangsmessung

Messung der Effekte des Energietransports über:

- Stationäre Verfahren
    - dauert in der Regel lange ($\approx h$)
    - *leichter* auswertbar (Energiebilanzen)
    - begranzte Genauigkeit durch starken Einfluss der Umgebung
- Instationäre Verfahren
    - in der Regel schnell ($\approx \text{min}$)
    - *schwerer* auswertbar (Differentialgleichungen)
    - begrenzter Einfluss der Umgebung
    - **erhöhte Genauigkeit erreichbar**

### Stationäre Verfahren

[CGL 99] $\rightarrow$ Energiezuführung bzw. -abführung

![](/src/bilder/messverfahren_image_25.png)
<figcaption>Beispielhafter Versuchsaufbau und Mitschrieb</figcaption>

Heizfolie aus Stahl oder anderer Legierung, um Wiederstand möglichst nicht temperaturabhängig zu machen (anders als bei reinmetallen)

