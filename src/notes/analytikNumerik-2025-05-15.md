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

- Ersetze die Ableitungen durch Differenzen-Quotienten an diskreten Punkten
- Erhalte ein System von Differenzengleichungen, das gelöst werden muss
- Für den Fall eines zeitabhängigen Problems
- Im Fall der Linienmethode ein Anfangswert problem für ein System von Differenzialgleichungen in der Zeit

Das Differenzen-Verfahren haben wir hier auf einem kartesischen Gitter ausgeführt. Das ist das große Problem bei dieser Klasse von Verfahren. Es kann auf allgemeinere Geometrien erweitert werden, aber es muss eine umkehrbare Transformation auf ein kartesisches Gitter vorliegen.

## Finite Elemente Verfahren

Im Gegensatz zu den Finiten Differenzenverfahren: approximiere Lösung als Polynom eines bestimmten Grades oder einer Überlagerung mehrerer Polynome oder $cos$ / $sin$ Reihe - gesucht sind die Koeffizienten dieses Polynoms

**Idee**: Approximation der Lösung durch stückweise Polynome, z.B. Hutfunktionen\
Differenzialgleichungen $\rightarrow$ System von algebraischen Gleichungen für die Freiheitsgrade

**Ablauf**

1. Diskretisierung des Rechengebiets und Auswahl von *lokalen* Basisfunktionen
2. Auswahl der Methode der gewichteten Residuen
3. Einsetzen der Ansatzfunktion
4. Aufstellen und Lösen des Gleichungssystems

**Resultat**: Freiheitsgrade und Näherungsfunktion


$$u_h(\underline{x}) = \sum_{i=1}^N \hat{u}\_i \varphi_i(\underline{x})$$

*$u_h$ ist Ansatzfunktion (Linearkombination von Freiheitsgraden mal Basisfunktion)*\
*$\hat{u}\_i$ sind die Freiheitsgrade*\
*$\varphi_i(\underline{x})$ sind die Basisfunktionen*

## Kollokation

Forderung: $u$ und $u_h$ sollen an bestimmten Punkten gleich sein

$$R_h(x_j, \hat{\underline{u}}) = 0 \quad \text{für} \quad j = 1, ..., N$$

## Methode der kleinsten Quadrate

Residuum ist Integral zwischen $u$ und $u_h$

$$\int_\Omega(R_h(x;\underline{\hat{u}}))^2 dx \overset{!}{=} min$$

## Galerkin - Verfahren

Finde das Residuum so, dass folgendes erfüllt ist: (Skalarprodukt für Funktionen)

$$\int_\Omega R_h(x;\underline{\hat{u}}) \varPhi_j(x) dx = 0, \quad j=1, ..., N$$

Ist dieser Ausdruck gleich 0, sind die beiden Funktionen orthogonal zueinander (*Sie haben nichts miteinander zu tun, haben keinen Anteil aneinander*)

Man kann so ausschließen, dass das Residuum Anteile von phi (Testfunktion) enthält
