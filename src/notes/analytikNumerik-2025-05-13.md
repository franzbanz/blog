---
course: Analytische und Numerische Methoden
type: Analytik
by: Bernhard Weigand
date: 2025-05-13 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Lösung von nichtlinearen Problemen

## Instationäre Wärmeleitung in einem halb-unendlichen Körper mit einer temperaturabhängigen Wärmeleitfähigkeit

<!-- skizze 1 Könnte zum beispiel die temeraturverteilung im Erdboden darstellen -->
modell ist beschreibbar mit eindimensionaler instationärer wärmeleitungsgleichung
wegen teta nicht lineare dgl

## Störungsrechnung

Lösungsmethode für nicht partielle gewöhnliche differentialgleichungen (nochmal im Skript nachlesen ob das so richtig ist)

Function in störsequenz von beliebig vielen funktionen und einem störparameter umwandelt

<!-- mitschrieb 2 -->

### Reguläre Störungsrechnung

Singuläre Störungsrechung wird nicht in dieser Vorlesung betrachtet

Störungsansatz einsetzen - man erhält eine reihe die im gesamten feld konvergiert - die gleichung ist linearisiert

<!-- mitschrieb 3 Lösung des nichtlinearen Problems eingetauscht gegen Sequenz von Lösungen von linearen Problemen -->

## Beispiel: Strömung und Wärmeübergang über eine längsangeströmte Platte

<!-- skizze 4 -->

Stark nicht lineares Problem - Grenzschichtströmungsgleichungen sind stark miteinander verkoppelt und sind nicht linear

### Blasiussche Gleichung

$$f''' + \frac{1}{2} f f'' = 0$$

$$f'(0) = 0 ; \qquad f(0) = 0 ; \qquad f'(\eta \rightarrow \inf) = 1$$
