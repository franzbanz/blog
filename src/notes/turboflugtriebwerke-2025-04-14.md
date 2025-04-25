---
course: Turboflugtriebwerke
type: Vorlesung
by: Stephan Staudacher
date: 2025-04-14 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Ähnlichkeiten bei durchströmten Komponenten

$$\frac{m_2 \sqrt{RT_{t2}}}{A_2 P_{t2}} = f(x, Ma_2), [-] = \frac{\dot{m_2} \sqrt{RT_{t2}}}{P_{t2}, [m^2]}$$

![Einlauf](/src/bilder/turboflugtriebwerke_skizze_1.jpeg)
<figcaption>Triebwerkeinlauf Druckverhältnis $\Pi$</figcaption>

Aus der Messung:\
$p_{t0} = p_0$\
$p_{t2/t0} = p_0$\
$\frac{\dot{m_2} \sqrt{RT_{t2}}}{P_{t2}, [m^2]}$\

![Druckverhältnis Messung 1](/src/bilder/turboflugtriebwerke_skizze_2.jpeg)
<figcaption>Druckverhältnis Messung am Testaufbau im Maßstab 1:5</figcaption>

Problem, das Original mithilfe des Kennfelds mit Maßstab 1:5 betreiben zu dürfen, weil das Kennfeld noch dimensionsbehaftet ist $[m^2]$\
Daher: Übertragung auf Kennfeld ohne Dimension

$$\downarrow$$

![Druckverhältnis Messung 2](/src/bilder/turboflugtriebwerke_skizze_3.jpeg)
<figcaption>Übertragung auf dimensionsloses Kennfeld</figcaption>

### Ähnlichkeiten bei durchströmten Komponenten - Strömungskanäle

![Strömungskanal mit konstantem Querschnitt](/src/bilder/turboflugtriebwerke_bild_1.png)
<figcaption>Strömungskanal mit konstantem Querschnitt</figcaption>

Es wird angenommen, dass in den Strömungskanälen technische Arbeit weder zu- noch abgeführt wird. Darüber hinaus wird angenommen, dass keine Wärme zu- oder abgeführt wird, es gilt somit: $T_{t1} = T_{t2}$\
Wandreibungsspannung wird unter Annahme einer vollausgebildeten Strömung mit Hilfe des Rohreibungskoeffizienten $\lambda$ beschrieben:

$$\tau_w = \frac{\lambda}{8} \rho w_1^2$$

Zahlenwert für $\lambda$ kann aus **Moody-Diagramm** abgelesen werden.

![Moody-Diagramm](/src/bilder/turboflugtriebwerke_bild_2.png)
<figcaption>Moody-Diagramm, $10^5$ ist eine typische Reynolds Zahl</figcaption>

### Ähnlichkeiten bei durchströmten Komponenten - Düsen

Düsensysteme werden unterschieden nach

- dem Querschnittsverlauf
  - konvergent
  - konvergenz-divergent
- der verstellbarkeit
  - feste geometrie
  - variable geometrie

Heute verwendete Triebwerke (Zivil, Unterschall) sind Zweistrom-Turboluftstrahl-Triebwerke mit fester Geometrie. Unterschied:

- Düsen für jeden Strom (**seperate jets**)
- Düse für beide Ströme (**mixed flow**)

![Konvergente Düse](/src/bilder/turboflugtriebwerke_skizze_4.jpeg)
<figcaption>Konvergente Düse</figcaption>

Warum bricht die Kurve vor $\Pi_krit$ ab? Wegen einem Reynoldszahl-Effekt der konvergenten Düse\
Bei einer Konvergent-Divergenten Düse sieht der Verlauf anders aus:

![Konvergent-Divergente Düse](/src/bilder/turboflugtriebwerke_skizze_4.jpeg)
<figcaption>Konvergent-Divergente Düse</figcaption>
