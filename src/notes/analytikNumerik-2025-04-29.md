---
course: Analytische und Numerische Methoden
type: Numerik
by: Andrea Beck
date: 2025-04-29 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Fixpunkt Iteration - Skalarer Fall

### Wann konvergiert die Fixpunktiteration

Banachscher Fixpunktsatz: Es muss eine Kontraktion vorliegen. Der Abstand der aufeinanderfolgenden Iterierten wird immer kleiner, wenn $|G'(u)| < 1$ gilt.

G ist stetig differenzierbar, die Bedingung muss nur für die u gelten, die tazächlich in der Iteration auftreten.

![mitschrieb1](/src/bilder/analytische_methoden_skizze_10.jpeg)
<figcaption>Mitschrieb Seite 1</figcaption>

![mitschrieb2](/src/bilder/analytische_methoden_skizze_11.jpeg)
<figcaption>Mitschrieb Seite 2</figcaption>

## Fixpunkiteration für Systeme

Startwert: $\underline{u}^{(0)}$

Iterationsvorschrift: $\underline{u}^{(k+1)} = \underline{G}(\underline{u}^{(k)}), \qquad \text{für} k = 0, 1, \dots$

Stop entsprechend einem Abbruchkriterium

## Newton Verfahren - skalarer Fall

Lösung von $\qquad F(u) = 0$

Gleichung der Tangente $\qquad F(u) = F(u^{(k)})+F'(u^{(k)})(u-u^{(k)})$

Iterationsvorschrift: Nullstelle der Tangente $\qquad u^{(k+1)} = u^{(k)} - \frac{F(u^{(k)})}{F'(u^{(k)})}$

## Abbruchkriterien

Wann höre ich mit dem Iterationsprozess auf?\
Darstellungsgenauigkeit meiner Zahlen (Floating Point Error)\

- Genauigkeit des Ergebnisses erreicht $\qquad ||\underline{F}(\underline{u}^{(k+1)})|| \le \varepsilon$
- Genauigkeit der Iteration erreicht $\qquad ||\underline{u}^{(k+1)} - \underline{u}^{(k)}|| \le \varepsilon$

$||\cdot|| = \text{Maximum oder quadr. Mittel,...}$

Genauigkeit der Iteration kann unter umständen auch in einem lokalen Minimum "hängen bleiben", wird in der Praxis wegen dem geringen Rechenaufwand dennoch häufig verwendet, weil die Lösung nicht mehr in das Gleichungssystem eingesetzt werden müssen

Beispiel 4.5 Folie 41

## Verfahren mit Einschließung - skalarer Fall Bisektionsverfahren

Für eine einzelne Gleichung kann man leicht Verfahren konstruieren, mit denen man eine Nullstelle einschließt. Man benötigt dazu zwei Startwerte, die Intervallgrenzen: Das einfachste Verfahren ist das **Bisektions-Verfahren**.

## Iterative Lösungen von linearen Gleichungssystemen

Beispiel aus älterer Vorlesung - Numerische Berechnung von **Couette Flow**

Die klassische Interatinosverfahren sind:

- Jacobi-Verfahren
- Gauß-Seidel-Verfahren
- SOR-Verfahren (Successive Overrelaxation)

## Lösung von Eigenwertproblemen

Bei der Lösung des Eigenwertproblem der reellen quadratischen Matrix $A$ sucht man einen Skalar $\lambda$ und einen Vektor $u$ ungleich Null mit der Eigenschaft:

$$A u = \lambda u$$

Mit der Vektoriteration oder dem von Mises Verfahren findet man den betragsgrößten Eigenwert und den zugehörigen Eigenvektor.

**Gute Aufschriebe aus der Übung über Fourier und Dimensionsanalyse in einen extra Post**
