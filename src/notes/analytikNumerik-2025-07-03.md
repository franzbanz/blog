---
course: Analytische und Numerische Methoden
type: Numerik
by: Andrea Beck
date: 2025-07-03 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Finites Volumen Verfahren

### Diskretisierung

Überführung des kontinuierlichen Problems in ein diskretes

- Überführung der Differentialgleichungen in approximative, algebraische Gleichungen
- Reduktion der Freiheitsgrade

Welche Physikalischen Größen werden in die Diskretisierung eigentlich mitgenommen?

### Idee des Finite Volumen Verfahrens

**Folie 7** unten Gleichung Erklärung:\
Die zeitliche Änderung des Integrals von $u$ in meinem kontroll volumen ist gleich den normal ausströmenden Flüssen von $u$

### Godunov's Idee

Numerischer Fluss: Was ist der gültige Fluss, der durch die eingeführte Diskretisierung entsteht und den physikalischen Fluss möglichst genau approximiert?

- **Idee Teil 1**: Die Lösung innerhalb einer Zelle ist konstant und gleich ihrem Mittelwert
- Damit liegt an jedem Rand zwischen 2 Gitterzellen ein Anfangswertproblem mit stückweise konstanten Anfangswerten vor:
  - Dies ist sog. Riemannproblem
- **Idee Teil 2**: Der numerische Fluss g ist der physikalische Fluss ausgewertet an der Lösung des Riemannproblem

Für hyperbolische Probleme: Exakte Lösungen des Riemannproblems berechenbar

- Lösungsidee: Berücksichtigung der Ausbreitungsrichtung von Information entlang von Charakteristiken
- Beispiel nächste Vorlesung: Eulergleichungen der Gasdynamik
- Godunov’s Idee: Exakte Lösung der zugrundeliegenden Transportgleichung für das AWP

Der Kern des FV-Verfahrens, die Flussberechnung, ist physikalisch sinnvoll: Wellenausbreitung wird berücksichtigt

### Lineare Advektion

**Konvervatives Verfahren**: Das Verfahren ändert nichts an der Erhaltung\
**Folie 13**: Der Mittelwert der Anfangslösung und der Lösung nach vielen Durchläufen bleibt gleich - "So schlecht das Verfahren auch ist, es erhält den Mittelwert in Masse, Impuls, Energie, ..." Geht auch besser mit feinerem Gitter etc.\
Gewisse Eigenschaften können fest in das Verfahren eingebaut werden - Finites Volumenverfahren erhält den Mittelwert
