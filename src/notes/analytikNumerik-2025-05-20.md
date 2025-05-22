---
course: Analytische und Numerische Methoden
type: Numerik
by: Andrea Beck
date: 2025-05-20 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Das Finite Elemente Verfahren

1. Diskretisierung des Rechengebiets und Auswahl von *lokalen* Basisfunktionen <!-- Folie 35 -->
2. Auswahl der Methode der gewichteten Residuen <!-- Folie 38 -->
3. Einsetzen der Ansatzfunktion <!-- Folie 38 Galerking: Testfunktion gleich Ansatzfunktion -->
4. Aufstellen und Lösen des Gleichungssystems

<!-- Folie 40: Steifigkeitsmatrix hängt vom Produkt der beiden Ableitungen ab -->

### Fazit

- Komplizierter als finite differenzen
- Das Finite-Elemente-Verfahren ist von Seiten der Konstruktion deutlich
komplizierter als ein Differenzen-Verfahren. Die grundlegende Idee ist
die Approximation der Lösung durch einfache Funktionen. Diese
schreibt man als Linearkombination von Basisfunktionen. Benutzt
werden hier Basisfunktionen, welche nur in einer Gitterzelle und den
direkten Nachbarn von Null verschieden sind. Dies führt auf schwach
besetzte Gleichungssysteme, die sehr effizient iterativ gelöst werden
können. Neben der Basis muss auch ausgewählt werden, nach welchem
Kriterium die Freiheitsgrade bestimmt werden. Wir betrachten hier
ausschließlich das Galerkin-Verfahren. Das diskrete Problem setzt sich
aus algebraischen Gleichungen zusammen, in der verschiedene
Matrizen auftauchen: Masse-Matrix, Steifigkeitsmatrix, … . Diese
lassen sich für jede Gitterzelle bestimmen und dann zur gesamten
Matrix zusammen führen, was man als Assemblierung bezeichnet.
Wer noch etwas mehr über die Idee des Finite-Elemente-Verfahrens
wissen möchte, der sollte in [1], Seite 144-165, für RWPs von gewöhn-
lichen Differenzialgleichungen nachlesen.

## Linienmethode

<!-- Folie 43 Formel oben -->

Wir führen jetzt eine Zeitapproximation und eine Raumapproximation
wie diese in den beiden letzten Unterkapiteln behandelt wurden ein.
In zwei Raumdimensionen lautet diese Gleichung

<!-- Folie 43 Formel unten -->
<!-- Folie 46 *wenn a positiv ist, nimm den koeffizienten, wenn a negativ ist, nimm den anderen koeffizienten* -->

Fassen wir dies zusammen, haben wir die Raumapproximation der
Konvektion-Diffusionsgleichung. An jedem Gitterpunkt xi,yj gilt die
gewöhnliche Differenzialgleichung in der Zeit

Dies gilt für jeden inneren Gitterpunkt
An den Rändern müssen die physikalisch sinnvollen Randbedingungen
vorgegeben werden. Dies kann entweder gleich in die Gleichung oben
für die Rand nahen Gitterpunkte (Dirichletbedingungen) eingesetzt werden
oder als zusätzliche Gleichungen (Neumann Randbedingungen)
vorgegeben werden.
<!-- Folie 47 -->

<!-- Folie 49 -->

## Numerische Lösung von parabolischen Differenzialgleichungen

Lineare Wärmeleitungsgleichung

<!-- Folie 4 gleichung -->

Lineare Wärmeleitungsgleichung in einer Raumdimension

<!-- Folie 4 gleichung unten -->

Wegen der Übersichtlichkeit und der Einfachheit starten wir
hier mit den Differenzen-Verfahren für das räumlich
eindimensionale Problem.

### Explizites Verfahren mit zentralen Differenzen

### Implizittes Verfahren mit zentralen Differenzen

### Implizites Verfahren 2. Ordnung in Raum und Zeit - Crank-Nicholsen-Verfahren

Stabilität, Konsistenz und Konvergenz?
Stabilitätsuntersuchung: von Neumann – diskrete Fourieranalyse
Konsistenz: Einsetzen der exakten Lösung und der
Gebrauch von Taylorentwicklungen führt auf den lokalen
Diskretisierungsfehler

<!-- Vieilleicht lieber den Überblick ab Folie 9 aufschreiben...? -->

### Das Mehrdimensionale Problem

### Die nichtlineare Wärmeleitungsgleichung

... Dies ist ein System von nichtlinearen Gleichungen. **Wie löst man diese?**

Als nichtlineares Gleichungssystem: Iterativ\
Welche Möglichkeiten gibt es, um eine Iterationsvorschrift zu erhalten?

#### Ansatz 1: Einfache Linearisierung

*Einfach nur eine Fixpunktiteration*

#### Ansatz 2: Fixpunktiteration - nichtlineares SOR - Verfahren

#### Ansatz 3; Newton - Verfahren

<!-- In der nächsten Vorlesung -->