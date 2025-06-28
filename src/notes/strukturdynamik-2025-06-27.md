---
course: Strukturdynamik
type: Kapitel 10
by: Malte Krack
date: 2025-06-27 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Finite Elemente Methode - Diskretisierung

1. Unterteilung in $N_e$ Elemente und $N_n$ Knoten (Vernetzen)

![graph](/src/bilder/strukturdynamik_skizze_31.jpeg)
<figcaption>Elemente müssem Geometrie komplett abdecken, ohne sich zu überlappen</figcaption>

2. Bestimmung der Koeffizientenmatrizen für jedes Element: $\underline{\underline{m}}^(e), \underline{\underline{k}}^(e), \underline{f}^(e)$ für jedes Element '$e$' **isoliert**. Festlegen der Ansatzfunktionen je Element (*Elementtyp Wählen*)

![graph](/src/bilder/strukturdynamik_skizze_32.jpeg)
<figcaption>Mitschrieb Seite 1</figcaption>

$$\underline{\underline{M}} = \sum_e \underline{\underline{L}}\_e^T \underline{\underline{m}}^{(e)} \underline{\underline{L}}_e$$

3. Zusammenbau des Gleichungssystems (Assembly)

Kinematische Verträglichkeit: Dank Interpolationseigenschaft einfach gemeinsame Knoten-FHG an Elementrändern fordern $\hat{=}$ Globalen Ansatz stetig machen (Vereinigung der lokalen Ansätze)

Beispiel:

![graph](/src/bilder/strukturdynamik_skizze_33.jpeg)
<figcaption>Beispiel</figcaption>

## Herleitung über virtuelle Arbeit

![graph](/src/bilder/strukturdynamik_skizze_34.jpeg)
<figcaption>Mitschrieb Seite 2</figcaption>

Ökonomischere Berechnung:

$$\underline{\underline{L}}_e \rightarrow \underline{l}_e$$

![graph](/src/bilder/strukturdynamik_skizze_35.jpeg)
<figcaption>Gleiches Besipiel von oben</figcaption>

Eigenschaften von $\underline{\underline{M}}, \underline{\underline{K}}$:

- Dünn besetzt
- Bandstruktur (bei geeigneter Sortierung)
