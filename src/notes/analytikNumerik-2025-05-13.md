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

![mitschrieb1](/src/bilder/analytische_methoden_skizze_22.jpeg)
<figcaption>Könnte zum Beispiel die Temeraturverteilung im Erdboden darstellen</figcaption>

Modell ist beschreibbar mit eindimensionaler instationärer Wärmeleitungsgleichung
wegen $\theta$ nicht lineare DGL

## Störungsrechnung

Lösungsmethode für nicht partielle gewöhnliche differentialgleichungen (nochmal im Skript nachlesen ob das so richtig ist)

![mitschrieb1](/src/bilder/analytische_methoden_skizze_23.jpeg)
<figcaption>Funktion in Störsequenz von beliebig vielen Funktionen und einem Störparameter umwandelt</figcaption>

### Reguläre Störungsrechnung

Singuläre Störungsrechung wird nicht in dieser Vorlesung betrachtet

Störungsansatz einsetzen - man erhält eine reihe die im gesamten feld konvergiert - die gleichung ist linearisiert

![mitschrieb1](/src/bilder/analytische_methoden_skizze_24.jpeg)
<figcaption>Lösung des nichtlinearen Problems eingetauscht gegen Sequenz von Lösungen von linearen Problemen</figcaption>

## Beispiel: Strömung und Wärmeübergang über eine längsangeströmte Platte

![mitschrieb1](/src/bilder/analytische_methoden_skizze_25.jpeg)
<figcaption>Stark nicht lineares Problem - Grenzschichtströmungsgleichungen sind stark miteinander verkoppelt und sind nicht linear</figcaption>

### Blasiussche Gleichung

$$f''' + \frac{1}{2} f f'' = 0$$

$$f'(0) = 0 ; \qquad f(0) = 0 ; \qquad f'(\eta \rightarrow \inf) = 1$$
