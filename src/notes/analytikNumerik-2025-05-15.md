---
course: Analytische und Numerische Methoden
type: Numerik
by: Andrea Beck
date: 2025-05-15 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Differenzenverfahren

Beispiel zu finden in Vorlesungsfolien und Skript

### Fazit

Das Differenzen-Verfahren ist von der Idee sehr einfach. Man
ersetzt die Ableitungen durch Differenzen-Quotienten an diskreten
Punkten und erhält ein System von Differenzengleichungen, das
gelöst werden muss. Für den Fall eines zeitabhängigen Problems
ergibt dies in unserem Fall der Linienmethode ein Anfangswert-
problem für ein System von Differenzialgleichungen in der Zeit.
Das Differenzen-Verfahren haben wir hier auf einem kartesischen
Gitter ausgeführt. Das ist das große Problem bei dieser Klasse von
Verfahren. Es kann auf allgemeinere Geometrien erweitert werden,
aber es muss eine umkehrbare Transformation auf ein kartesisches
Gitter vorliegen.
Wer noch etwas mehr über die Idee des Differenzen-Verfahrens
wissen möchte, der sollte Seite in [1], Seite 119-127, für RWPs von
gewöhnlichen und Seite 233-286 für partielle Differenzial-
gleichungen nachlesen

## Finite Elemente Verfahren

Im Gegensatz zu den Finiten Differenzenverfahren: approximiere Lösung als Polynom eines bestimmten Grades oder einer Überlagerung mehrerer Polynome oder cos/sin Reihe - gesucht sind die Koeffizienten dieses Polynoms

<!-- Folie 34 -->

u_h ist linearkombination von freiheitsgraden mal basisfunktion

$$u_h(\underline{x}) = \sum_{i=1}^N \dach{u}\_i \varphi_i(\underline{x})$$

<!-- Folie 31 -->

### Bestimmung der Freiheitsgrade

Gleichung im Residuum
Einsetzen der Ansatzfunktion
<!-- Folie 32 -->
<!-- skizze von Tafel Benötigt ist ein Maß für wie gut die Approximation ist: Das Residuum einer Gleichung-->

### Kollokation

Forderung: $u$ und $u_h$ sollen an bestimmten Punkten gleich sein

$$R_h(x_j, \dach{\underline{u}}) = 0 \quad \text{für} \quad j = 1, ..., N$$

### Methode der kleinsten Quadrate

<!-- Folie 33 -->
Residuum ist Integral zwischen $u$ und $u_h$

### Galerkin - Verfahren

Finde das Residuum so, dass folgendes erfüllt ist:
<!-- Gleichung unten Folie 33 "Definition des Skalarproduktes für Funktionen" -->
Ist dieser Ausdruck gleich 0, sind die beiden Funktionen orthogonal zueinander (*Sie haben nichts miteinander zu tun, haben keinen Anteil aneinander*)

Man kann ausschließen, dass das Residuum Anteile von phi (Testfunktion) enthält
