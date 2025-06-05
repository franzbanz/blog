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

<!-- Seite 2 Zusammenfassung -->

## Das Differenzenverfahren

1. Schritt: Diskretisierung des Räumlichen Rechengebiets
2. Schritt: Auswahö und Einsetzen der Differenzenquotienten
3. Schritt: Sortieren der Differenzengleichungen
4. Lösen des Gleichungssystems

## Differenzenverfahren auf randangepassten Gittern

Differenzialoperator kann jetzt nicht mehr durch etwas einfacheres wie eine Sekantensteigung ersetzt werden.

**Trick**: Transformation des Gebiets auf Referenzgebiet: Abbildung des gekrümmten Elements (physikalisch) auf ein *logisches Gebiet*, in dem wir es wieder mit einem Rechteck zu tun haben.

<!-- AFolie 7 Zeichnungen -->

Dann lösen und wieder auf das physikalische Rechengebiet zurücktransformieren

*Beispiel Ab Folie 9* (angenommen xi und eta sind bekannt)

<!-- Tafelaufschrieb von Foto 1 d x/d xi nennt man die *Metrik* -->

## Finite Elemente Verfahren für elliptische Gleichungen

1. Schritt: Multiplikation mit einer Testfunktion und Integration
2. Schritt in 2D: Partielle Integration

Dies sind die Funktionenräume für Existenzsätze von schwachen
Lösungen von partiellen Differenzialgleichungen. Die schwache Formulierung
ist also nicht so sehr viel anderes als eine Verallgemeinerung der üblichen
Formulierung als Differenzialgleichung für Lösungen, welche nicht genügend
oft differenzierbar sind. Meist werden die Differenzialgleichungen aus inte-
gralen physikalischen Gesetzen abgeleitet – unter der Voraussetzung, dass
die Lösung entsprechend oft stetig differenzierbar ist. Wir werden dies noch-
mal bei den Stoßwellen in der Gasdynamik behandeln.
Das Galerkin-Verfahren besteht darin, dass die unendliche Basis
von H1 durch eine endlich dimensionale Basis ersetzt wird, z.B. den Hut-
funktionen. In der schwachen Formulierung ist es auch kein Problem, dass
die Hutfunktionen an einzelnen Punkten noch nicht mal stetig differenzierbar
sind. Wir haben dies hier mit Funktionen einer Veränderlichen ausgeführt.
Dies lässt sich dann auf Funktionen mehrerer Variablen analog übertragen.

## Basisfunktionen und lokale Steifigkeits- und Massenmatrix

Einsetzen des Ansatzes in die schwacher Formulierung und Wahl der
Basisfunktionen als Testfunktionen ergibt das Galerkin-Verfahren. Der
Einfachheit halber nehmen wir an, dass alle Basisfunktionen Null auf dem Rand
sind – homogene Dirichlet-Randwerte

<!-- Folie 18 -->
