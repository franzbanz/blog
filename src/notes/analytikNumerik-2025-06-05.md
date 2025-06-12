---
course: Analytische und Numerische Methoden
type: Numerik
by: Andrea Beck
date: 2025-06-05 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

**Testate**

Alle Hilfsmittel sind erlaubt (*Aber nicht überstrapazieren*)

Erstes Testat am **18.6.**

# Numerische Lösung von elliptischen Differenzialgleichungen

## Das Differenzenverfahren

1. Schritt: Diskretisierung des Räumlichen Rechengebiets
2. Schritt: Auswahö und Einsetzen der Differenzenquotienten
3. Schritt: Sortieren der Differenzengleichungen
4. Lösen des Gleichungssystems

## Differenzenverfahren auf randangepassten Gittern

Differenzialoperator kann jetzt nicht mehr durch etwas einfacheres wie eine Sekantensteigung ersetzt werden.

**Trick**: Transformation des Gebiets auf Referenzgebiet: Abbildung des gekrümmten Elements (physikalisch) auf ein *logisches Gebiet*, in dem wir es wieder mit einem Rechteck zu tun haben.

![mitschrieb1](/src/bilder/analytische_methoden_skizze_36.jpeg)
<figcaption>Gegenoperation mit $T^{⁻1}$ möglich</figcaption>

Dann lösen und wieder auf das physikalische Rechengebiet zurücktransformieren

*Beispiel Ab Folie 9* (angenommen xi und eta sind bekannt)

![mitschrieb1](/src/bilder/analytische_methoden_skizze_37.jpeg)
<figcaption>$\frac{d x}{d x_i}$ nennt man die *Metrik*</figcaption>

## Finite Elemente Verfahren für elliptische Gleichungen

1. Schritt: Multiplikation mit einer Testfunktion und Integration
2. Schritt in 2D: Partielle Integration

Das Galerkin-Verfahren: Unendliche Basis von $H^1$ durch eine endlich dimensionale Basis ersetzen, z.B. Hutfunktionen.
In schwacher Formulierung kein Problem, dass die Hutfunktionen an einzelnen Punkten nicht stetig differenzierbar sind.

## Basisfunktionen und lokale Steifigkeits- und Massenmatrix

Einsetzen des Ansatzes in die schwacher Formulierung und Wahl der
Basisfunktionen als Testfunktionen ergibt das Galerkin-Verfahren. Vereinfachung: Alle Basisfunktionen Null auf dem Rand - **homogene Dirichlet-Randwerte**

$$\int_\Omega \nabla u (\underline{x}) \cdot \nabla \varphi (\underline{x}) d \Omega = - \int_\Omega f(\underline{x}) \varphi(\underline{x}) d\Omega$$
