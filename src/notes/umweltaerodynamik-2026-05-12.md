---
course: Umweltaerodynamik
type: Vorlesung
by: Bernd Peters
date: 2026-05-12 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Zähigkeitsspannungen / Laminare Schubspannungen

- Zwischen 2 sehr langen parallelen ebenen Platten (Abstand $h$, Plattenfläche jeweils $A$) befindet sich das zu untersuchende Fluid
- Durch die Kraft $F$ bewegt sich die obere Platte mit einer konstanten Geschwindigkeit $U$
- Aufgrund von Adhäsion haftet das Fluid an beiden Platten
- Zwischen den Platten bildet sich eine Schichtenströmung mit linearem Verlauf der Strömungsgeschwindigkeit aus: $u(y) = U \cdot \frac{y}{h}$
- Experimentell lässt sich zeigen, dass die zur Bewegung der oberen Platte erforderliche Kraft $F \propto A \cdot \frac{U}{h}$ ist
- Für die Schubspannung $\tau = \frac{F}{A}$ gitlzt $\tau \propto \frac{U}{h}$
- Für $\frac{U}{h}$ kann im allgemeinen Fall auch $\frac{du}{dy}$ gesetzt werden $\rightarrow \tau \propto \frac{du}{dy}$
- Proportionalitätsfaktor $\mu$ (Zähigkeit / dynamische Viskosität) zwischen $\tau$ und $\frac{du}{dy}$ hängt von der Natur der Flüssigkeit ab

Somit erhält man für die laminare Schubspannung

$$
\tau_{xy} = \mu \cdot \frac{du}{dy}
$$

bzw. für den allgemeinen Fall ($v \neq 0$):

$$
\tau_{xy} = \mu \cdot \left(\frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}\right)
$$

### Inkonsistenz in den Folien

Hochachse ist bei Grenzschichten eigentlich immer die y-Achse, weil meistens 2D-Betrachtung, aber in der Vorlesung ist immer die z-Achse die Hochachse, außer bei ***Turbulente scheinbare Schubspannung* Folie 58, 59, 60**

## Taylor Hypothese

- Turbulenzelemente werden mit der mittleren Grundströmung $\overline{u}$ in Windrichtung / in Windkanallängsachse transportiert und behalten dabei ihre Gestalt im wesentlichen bei
- Da die räumliche Struktur der Turbulenz erhalten bleibt, tritt die Turbulenz miz einer Zeitverschiebung $\Delta t$ im Abstand $\Delta x$ in Strömungsrichtung unverändert auf

## Turbulenzballen

Die Korrelationslänge $L$ kann man *als ein Maß für die Größe momentan einheitlich bewegter Massen, sogenannter **Turbulenzballen**, deuten*

Beim Wind entsprechen diese Turbulenzballen dann den räumlichen Ausdehnungen einer Böe

- $L_{ux}$ entspricht der Ausdehnung der Ballen ind Windirchtung
- $L_{uy}$ entspricht der Ausdehnung der Ballen quer zur Windrichtung
- $L_{uz}$ entspricht der Ausehnung der Ballen vertikal zur Windrichtung
