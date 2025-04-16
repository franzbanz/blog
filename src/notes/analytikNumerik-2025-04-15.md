---
course: Analytische und Numerische Methoden
type: Vorlesung
by: Bernhard Weigand, Andrea Beck
date: 2025-04-15 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Freiwillige Zusatzaufgaben

Jeweils 10 Punkte\
Vierergruppen

**Semesteraufgaben Analytik** (Gegen mitte des Semesters)

- Gleicher Ablauf wie in bisherigen Semestern

**Semesteraufgaben Numerik** (Im Verlauf des Semesters)

- Erster Teil
  - Aus dem Bereich Programmieren
  - Theoretische Teile
- Zweiter Teil
  - Zwei Testate zu Beginn der Übungen
  - Angekündigt
  - Multiple choice
  - 5 bis 10 min

# Einführung

Analytische Methoden Sinnvoll um Richtigkeit der Numerischen Lösungen zu überprüfen / abzuschätzen\
Partielle DGL werden durch höchste Ableitung beschrieben (Erster Ordnung / Zweiter Ordnung / ...)\
Lineare DGLs: Jeder Term hat die gesuchte Funktion nur einmal\
Nicht-lineare DGLs: gesuchte funktion taucht im Term mehrmals auf\
Nicht Lineare DGLs: Prinzip der Superposition kann **nicht** ausgenutzt werden - Lösung muss alle Randbedingungen auf einmal erfüllen und kann nicht durch das Zusammensetzen einfacherer Sub-Probleme gefunden werden.\

# Einteilung der Differentialgleichungen

(Eine Differenzialgleichung ist also linear, wenn die Koeffizienten nur von den unabhängigen Variablen abhängen. Die Gleichung ist im anderen Fall nichtlinear. Hängen die Koeffizienten vor den höchsten Ableitungen nicht von den höchsten Ableitungen der gesuchten Funktion ab, so nennt man die Gleichung auch quasilinear.)

$$\delta c \frac{\partial T}{\partial t} = \lambda \frac{\partial^2 T}{\partial x^2}$$

- lineare, partielle DGL
- zweiter Ordnung
- $\tilde{T} = c T$

$$\delta c(T) \frac{\partial T}{\partial t} = \lambda \frac{\partial^2 T}{\partial x^2}$$

- nichtlineare, partielle DGL
- zweiter Ordnung

## Klassifizierung für lineare partielle DGLs 2. Ordnung

Die allgemeinste Form einer in den abhängigen Variablen linearen partiellen Differenzialgleichung zweiter Ordnung

$$A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial u}{\partial y^2} + D \frac{\partial u}{\partial x} + E \frac{\partial u}{\partial y} + F u = G$$

Kann durch Koordinatentransformation auf eine Normalform gebracht werden, es wird zwischen drei Fällen unterschieden

- Parabolische (Charakteristiken bilden zwei reelle Scharen)
- Hyperbolische (eine Schar von Charakteristiken)
- Elliptische DGL (Charakteristiken sind konjugiert komplex)

Vereinfacht sich die Gleichung durch die Nutzung anderer Koordinaten?\

![neue koordniaten](/src/bilder/analytische_methoden_skizze_1.jpeg)
<figcaption>Je nach Art des Problems können andere Koordinaten zur Vereinfachung genutzt werden</figcaption>

$$A^* \frac{\partial^2 u}{\partial \xi^2} + B^* \frac{\partial^2 u}{\partial \xi \partial \eta} + C^* \frac{\partial u}{\partial \eta^2} + D^* \frac{\partial u}{\partial \xi} + E^* \frac{\partial u}{\partial \eta} + F^* u = G^*$$

mit (Skript 2.17 bis 2.23)

$$A^* = A(\frac{\partial \xi}{\partial x})^2 + B\frac{\partial \xi}{\partial x}\frac{\partial \xi}{\partial y} + C(\frac{\partial \xi}{\partial y})^2$$

$$B^* = ...$$

$$C^* = ...$$

$$...$$

### Charakteristische Gleichungen

$$\frac{dx}{dy} = (B + \sqrt{(B^2 - 4 A C)}) / (2A)$$

$$\frac{dy}{dx} = (B - \sqrt{(B^2 - 4 A C)}) / (2A)$$

### Charakteristiken

$$\xi = \varphi_1(x,y)$$

$$\eta = \varphi_2(x,y)$$
