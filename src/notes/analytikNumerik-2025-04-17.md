---
course: Analytische und Numerische Methoden
type: Vorlesung
by: Bernhard Weigand, Andrea Beck
date: 2025-04-17 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## DImensionsanalyse

### Buckinham - Theorem (Pi - Theorem)

$$f(p_1, p_2, p_3, ..., p_n)$$

p stellen physikalische größen dar, Zahlenwert und Einheit, z.B.

$$a \rightarrow m s^{-2}$$

| Basisgröße  | Dimension | SI-Einheit     |
|-------------|-----------|----------------|
| Länge       | $L$       | m - Meter      |
| Masse       | $M$       | kg - Kilogramm |
| Tempp       | $\gamma$  | K - Kelvin     |
| Zeit        | $\tau$    | s - Sekunde    |
| Stoffmenge  | $\eta$    | mol - Mol      |
| Stromstärke | $I$       | A - Ampere     |
| Lichtstärke | $S$       | cl - Coudela   |


**Basisgrößen System** (Menschgemacht und damit Willkürlich)


| Basisgröße  | Dimension |  SI-Einheit    |
|-------------|-----------|----------------|
| Beschleunig.|  $a$      | $L \tau^{-2}$  |
| Dichte      |  $\rho$   | M L^{-3}       |
| Druck       | $p$       | P a = M L^{-1} \tau^{-2} |
| ...         | ...       | ...            |

**Physikalische Größen**

$[p_j] = \prod_{i=1}^m (x_i)^{a i j}$\
$[]$: Domension von $p_j$\
$p_j$: physikalische Größe\
$x_i$: Basisgrößen
Beispiel:

$$[u] = [p_1] = L \tau^{-1}; \quad x_1 = L; \quad a_{11} = 1; \quad x_2 = \tau \quad a_{21} = -1$$

Das Theorem gibt uns einen Zusammenhang zwischen der Anzahl der physikalischen größen $n$ und der Anzahl der unabhängigen dimensionslosen Größen $d$, die im Problem auftreten. Es ist:

$$d = n - r$$

d = anzahl der dimensionslosen größen\
n = Anzahl der physikalischen größen\
r = Rang der dimensionsmatrix

### Beispiel

Aerodynamischer Wiederstand einer Kugel, die einer gleichmäßigen Anströmung ausgesetzt wird\
Kugeldurchmesser $D$\
Anströmgeschwindigkeit $U$\
Wiederstand $W$\
Dynamische Viskosität $\eta$\
Dichte des Fluids $\varrho$\

$$W = fn(U, D, \eta, \rho)$$

![beispiel](/src/bilder/analytische_methoden_skizze_2.jpeg)
<figcaption>Beispiel aerodynamischer Wiederstand einer Kugel</figcaption>

$\eta$ und $\varrho$ sind die einzigen Größen in der Tabelle die noch einen Eintrag in der Zeit $\tau$ haben $\rightarrow$ kann für das Problem keine Rolle spielen, weil sie nicht mit einer anderen Größe dimensionslos gemacht werden können

$$\frac{W}{\varrho u^2 D^2} \stackrel{!}{=} f(\frac{u D \varrho}{\eta})$$

## Dimensionslose Größen und deren Physikalische Bedeutung

Pi- Theorem

phsikalischer zusammenhang kässt sich immer als funktion physikalischer größen oder als zusammenhang dimensionsloser größen beschreiben

physikalische größe einheit setzt sich immer aus basisgrößen zusammen - dimension einer physikalischen größen ist die multiplikation aller basisgrößen zusammen (mit einem exponenten)

dimensionslose größe lässt sich über multiplikation von basisgrößen darstellen (mit exponenten)

### Beispiele ab 3.29 im Skript