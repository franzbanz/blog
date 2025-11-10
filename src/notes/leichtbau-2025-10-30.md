---
course: Leichtbau 1
type: Vorlesung
by: Maged Sorour
date: 2025-10-30 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Geometrische Kenngrößen von Strukturkomponenten

Allgemein gilt für die Spannung:

$$
\text{Spannung} = \frac{\text{Schnittkraftgröße}}{\text{geometrischer Kennwert}}\cdot \text{Verteilungsgesetz}
$$

Spannungen können Normalspannungen oder Schubspannungen sein


![](/src/bilder/leichtbau_image_3.png)
<figcaption>Bezogen auf ein x-y-Hauptachsensystem, Vorzeichen können sich also abhängig von der Orientierung ändern</figcaption>

## Biegehauptgleichungen (Bernoulli, Balkentheorie, ETB)

- $x-y-z$: Rechts Koordinatensystem
- $z$ ist Balkenachse
  - $F$ pos. (in $z$ - Richtung) $\rightarrow \sigma$ postitiv Zug
  - $M_x$ positiv ergibt im pos. $y$-Bereich $\sigma$ positiv
  - $M_y$ positiv ergibt im pos. $x$-Bereich $\sigma$ negativ

Gesucht ist die längs- (normal) -spannungsverteilung im Längsquerschnitt: $\sigma_z(x,y) = ?$

- Annahmen
  1. Kleine Verformungen im elastischen Bereich $\rightarrow$ linearer Bereich im Spannung/Dehnung Diagramm mit $\sigma = \xi \cdot E$
  2. Querschnittsgestalt bleibt erhalten $\rightarrow$ ein Kreis bleibt ein Kreis, wird nicht zu Ellipse verformt,...
  3. Querschnitte bleiben eben: Die Ebenen auf Balkenachse senkrecht stehende Querschnitte bleiben nach Belastung eben und senkrecht auf Balkenachse

Der Querschnitt führt eine Drehung um eine Neutralachse (Keine Verwölbung)
Kinematik: Drehen des Querschnittes erzwingt eine lineare Dehnungsverteilung
$\varepsilon \rightarrow \sigma \text{ist linear verteilt}$

## Linearer Ansatz für $\sigma_z(x,y)$

$$
\sigma_z(x,y) = a+by+cx \quad (1)
$$

Unbekannte a, b, c müssen bestimmt werden\
Scnittlasten sind Resultierende der Spannungsverteilung im Querschnitt\
Lösen mit Summe aller Momente, Summe aller Kräfte

$$
F = \int_A \sigma_z(x,y) {dA} \quad (2)
$$

$$
M_x = \int_A \sigma_z(x,y) \cdot y {dA} \quad (3)
$$

$$
M_y = - \int_A \sigma_z(x,y) \cdot x {dA} \quad (4)
$$

(1) in (2)

$$
F = a\int_A dA + b\int_A y {dA} + c\int_A x {dA} \quad (5)
$$

(1) in (3)

$$
M_x = a \int_A y {dA} + b \int_A y^2 {dA} + c \int_A x \cdot y {dA} \quad (6)
$$

(1) in (4)

$$
M_z =  - a \int_A x {dA} - b \int_A x \cdot y {dA} - c \int x^2 {dA} \quad (7)
$$

- $S_x$ - Statisches Moment um die x-Achse
- $S_y$ - Statisches Moment um die y-Achse
- $J_x, J_y, J_{xy}$ - Flächenträgheitsmoment

$$
F = a \cdot A + b \cdot S_x + c \cdot S_y
$$

$$
M_x = a \cdot S_x + b \cdot J_x + c \cdot J_{xy}
$$

$$
M_y = -a \cdot S_y - b \cdot J_{xy} - c \cdot J_y
$$

