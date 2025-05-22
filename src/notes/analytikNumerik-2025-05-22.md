---
course: Analytische und Numerische Methoden
type: Numerik
by: Andrea Beck
date: 2025-05-22 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Die nichtlineare Wärmeleitungsgleichung

<!-- Folie 17, 18 -->

### Ansatz 1: Einfache Linearisierung

damit hat man wie im linearen Fall ein lineares Gleichunngssystem erzeugt, das jetzt in jeder Iteration geößt werden muss.\
Im Falle der Konvergenz wird das nichtlineare System durch die Grenzfunktion erfüllt

Start der Iteration

<!-- Folie 18 -->

### Anssatz 2: Fixpunktiteration - nichtlineares SOR-Verfahren

<!-- Folie 19 -->

### Ansatz 3: Newton-Verfahren

<!-- Folie 21 -->

# Finite-Elemente-Verfahren

Wärmeleitungsgleichung

<!-- Folie 25 -->

## Galerkin-Verfahren

Herleitung der *schwachen Form* - lösung soll normal auf dem Testraum stehen, sie soll das gleiche Integral wie die Ursprungsfunktion haben, nicht exakt identisch sein (Siehe Foto mitschrieb von Folie 25)

- Multiplikation der DGL mit einer Testfunktion $v(x)$
- Integration über das Rechengebiet
- Partielle Integration

<!-- Folie 26 mathematisch ist schwache Form identisch zu starker Form-->

## Approximation

Man betrachtet jetzt nicht den gesamten Lösungsraum, sondern gibt eine Häherungslösung als Linearkombination von einer **endlichen Anzahl** von Basisfunktionen vor:

<!-- Folie 27 -->

Die Näherungsfunktion wird in die schwache Formulierung eingesetzt\
Wir haben wegen der homogenen Dirichlet-Randbedungen angenommen, dass...

**Galerkin Ansatz**: Testfunktion gleich der Basisfunktionen wählen

Linienmethods: Aufteilen in Räumliche und Zeitliche Anteile

<!-- Folie 31 - 35 -->

Einfache Zeitdiskretisierungen: **Explizites Euler-Cauchy-Verfahren**

Im Unterschied zu den Differenzen-Verfahren benötigen FR-Verfahren somit auch bei expliziter Zeitapproximation die Lösung eines Gleichunssystems. Eine Zeitschrittweitenbeschänlung zur Sicherung der Stabilität tritt hier ebenso auf

Bei parabolischen Problemen muss der Zeitschritt proportional zum Quadrat der Raumschrittweite gewählt werden. Insofern werden hier meist implizite Verfahren eingesetzt. Das einfachste Verfahren ergibt sich hier aus dem **impliziten Euler-Verfahren**, auch **voll-implizites Verfahren** genannt

Die hier vorgestellten impliziten Verfahren: voll-implizit, Crank-Nicolson und BDF Formeln sind bedingungslos stabil, während explizite Verfahren nur bedingt stabil sind. Die Zeitschrittweite ist proportional des Quadrats des Raumschrittes und hängt ab von dem kleinsten Eigenwert von

$$- \underline{\underline{M}}^{-1} \underline{\underline{K}}$$

## Finite-Elemente

Basisfunktionen sind nur lokal aktiv. Der einfachste Fall sind die Hut-Funktionen oder Dreiecksfunktionen (Überall definiert, aber haben nur bei $x_i$ einen Wert ungleich 0) - Bewirkt dass Einträge in der Stefigkeitsmatrix $\underline{\underline{K}}$ größtenteils $0$ sind

### Approximation höherer Ordnung

<!-- Folie 43 -->

## Randbedungungen

Bislang hatten wir nur homogene Dirichlet-Randbedungungen gefordert

Allgemeine Dirichlet-Randbedungungen

<!-- Folie 44 -->

1. Starke Approximation der Randwerte

Idee: Die Randwerte werden in der Näherungsfunktion direkt vorgeschrieben\
Dazu modifizieren wir die Approximation folgendermaßen:

2. Schwache Approximation der Randwerte

Idee: Die Randwerte gehen nur in die schwache Formulierung ein - auch die Randwerte werden nur näherungsweise approximiert\
Annsatzfunktionen mit zwei zusätzlichen Basisfunktionen und Testfunktionen:

Dies funktioniert auch mit Neumann-Randbedingungen

<!-- Folie 48 -->
