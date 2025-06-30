---
course: Einführung in die Verbrennung
type: Vorlesung
by: Andreas Huber, Torsten Methling, Holger Huck, Nils Jakobs
date: 2025-06-26 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

### Reaktionskoeffizient $k$

- Bisher: k als bekannt / konstant angenommen
- Jetzt: $k = k(T)$
- Empirischer Befund:
  - k hängt stark und nichtlinear von T ab
  - Nimmt zu wenn T steigt
  - Arrheniusgleichung

## Temperaturabhängigkeit von $k$

$$k = A exp(-\frac{E_A}{R_m T})$$

$A$: Frequenzfaktor (=Anzahl von Zusammenstöße pro Zeiteinheit)\
$E_A$: Aktivierungsenergie

$E_A$ entspricht einer Energieschwelle, die beim Ablauf der Reaktion zu überwinden ist\
Maximaler Wert: Wert der beteiligten Bindungsenergien

Werden neue Bindungen gebildet, kann sich die Aktivierungsenergie bis auf 0 vermindern\
Vorwärts und Rückwärtsreaktionen haben verschiedene $E_A$

Physikalische Interpretation:

- $E_A$ Aktivierungsenergie
- $A$ Frequenzfaktor
- Bimolekulare Reaktion: $A$ gibt an, wie häufig zwei Teilchen zusammenstoßen
- $exp(-\frac{E_A}{R_m T})$ ist der Bruchteil der Teilchen, der die zur Reaktion notwendigen Energie besitzt "Boltzmannfaktor"
- Tatsächliche k-Werte kleiner: Orientierung der Moleküle
- **A groß bei A groß, T hoch, $E_A$ niedrig**

Aus Messungen ableitbar: Schwache Temperaturabhängigkeit des präexponentiellen Faktors $A$ - Erweiterung:

$$k = A' T^b exp(-\frac{E'_A}{R_m T})$$

## Druckabhängigkeit von $k$

- In der Regel gilt Arrhenius-Ansatz $k = k(T)$
- Zusätzlich gibt es druckabhängige Reaktionsgeschwindigkeitskoeffizienten $k(T,p)$

**Lindemann Modell der Druckabhängigkeit:**

- Modellvorstellung
  - Zerfallsreaktion kann nur stattfinden, wenn das Molekül einen angeregten Zwischenzustand mit hoher Energie erreicht
  - Diese Energie wird zugeführt durch Stoß mit einem anderen Teilchen
