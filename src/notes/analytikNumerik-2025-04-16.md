---
course: Analytische und Numerische Methoden
type: Vorlesung
by: Bernhard Weigand, Andrea Beck
date: 2025-04-16 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Einleitung der Differentialgleichungen

## Normalformen

### Hyperbolische Typ: $B^2 - 4 A C > 0$

$$\frac{\partial^2 u}{\partial \xi \partial \eta} = H_1(\xi, \eta, u, \frac{\partial u}{\partial \xi}, \frac{\partial u}{\partial \eta})$$

$$\frac{\partial^2 u}{\partial \alpha^2} - \frac{\partial^2 u}{\partial \beta^2} = H_2(\alpha, \beta, u, \frac{\partial u}{\partial \alpha}, \frac{\partial u}{\partial \beta}); \quad \alpha = \xi + \eta; \beta = \xi - \eta$$

### Parabolischer Typ: $B^2 - 4 A C = 0$

Eine reelle Charakteristik, siehe 2.42 Skript

### Eliptischer Typ: $B^2 - 4 A C < 0$

zwei komplex konjugierte Charakteristiken, siehe 2.46 Skript

### Beispiel

![beispiel](/src/bilder/analytische_methoden_skizze_3.jpeg)
<figcaption>Beispiel zur Berechnung der Normalform</figcaption>

$c_1$ und $c_2$ sind konstant und können frei gewählt werden, daher kann man sie mit $\xi$ und $\eta$ austauschen

$\alpha$ und $\beta$ nötig, weil $\xi$ und $\eta$ komplex konjugiert sind $\rightarrow$ Es müssen Randbedingungen an der ganzen Oberfläche des Gebiets definiert werden, kann nicht mit den komplex konjugierten Koordinaten gemacht werden - Wechsel zu reellen Koordinaten

## Klassifizierung von Systemen von linearen partiellen DGLs erster Ordnung

Systeme von partiellen Differenzialgleichungen lassen sich in verschiedene Typen einteilen (2.77 Skript)

- Elliptisch
- Hyperbolisch
- Parabolisch

Charakterisierung über die Eigenwertgleichung

$$(A - \lambda B) t = 0$$

$$...$$


### Beispiele

Siehe 2.62 im Skript

## Einschub - Dimensionsanalyse

Einheiten / Dimensionen sind von Menschen eingeführt und vorgeschrieben\
Für jedes gegebene Problem spielt nur eine Dimensionslose Größe eine Rolle\
Beispiele:

- Beine eines Elefanten / einer Maus haben im Querschnitt gleiche wirkende Spannungen
- Herzschlag eines Kolibris / eines Wals haben die gleiche dimensionslose Frequenz

Für viele Probleme spielen charakteristische Länge, charakteristische Zeit, ... die größte Rolle\
Viele Probleme werden dimensionslos einfacher

Weiter mit der Dimensionsanalyse in der nächsten Vorlesung
