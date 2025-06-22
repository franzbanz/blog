---
course: Turboflugtriebwerke
type: Stationäres Betriebsverhalten
by: Stephan Staudacher
date: 2025-06-02 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Stationäres Betriebsverhalten: Zweiwellen-Einstrom-Turboluftstrahltriebwerk

Das Öffnen eines Abblaseventils hilft bei der Einhaltung ds Abstandes zur Stabilitätsgrenze

![messaufbau](/src/bilder/turboflugtriebwerke_skizze_23.jpeg)
<figcaption>Abblasung kann zum Beispiel hinter dem Verdichter in den Nebenstrom hinein passieren</figcaption>

Durch das Abblasen in den Nebenstrom passieren jedoch Drosselverluste und Mischungsverluste

## Stationäres Betriebsverhalten: Zweiwellen-Zweistrom-Turboluftstrahltriebwerk ohne Strahlmischung und ohne Booster

### Schritt 1: Nebenstromverhältnis

Vereinfachend wird angenommen, dass der innere und der äußere Teil des Fans in einem stationären Betriebspunkt das gleiche Druckverhältnis und gleichen polytropen Wirkungsgrad aufweisen. Das ist eine starke Vereinfachung, da der äußere Teil des Fans aufgrund der höheren Umfangsgeschwindigkeiten bei gleicher aerodynamischer Belastung ein höheres Druckverhältnis liefert

![messaufbau](/src/bilder/turboflugtriebwerke_skizze_24.jpeg)
<figcaption></figcaption>

Wird angenommen, dass der Fan innen und außen das gleiche Druckverhältnis bei gleichem Wirkungsgrad liefert, so folgt:

$$\mu = \frac{\dot{m}\_{13}}{\dot{m}\_{24}} = \frac{\dot{m}\_{13} \cdot \sqrt{RT_{t13}}}{p_{t13}} \cdot \frac{p_{t24}}{\dot{m}\_{24} \cdot \sqrt{RT_{t24}}}$$

Der Massenstromparameter in Ebene 13 (Nebenstrom) liegt aufgrund der kritisch durchströmten äußeren Schubdüse fest... - **Folie 162**

### Schritt 2: Betriebslinie des äußeren Fans

$$\frac{p_{t19}}{p_0} = (1 + \frac{\kappa - 1}{2} Ma^2_0)^{\frac{\kappa}{\kappa - 1}} \cdot \frac{p_{t12}}{p_{t0}} \cdot \frac{p_{13}}{p_{t12}} \cdot \frac{p_{t19}}{p_{t13}}$$

Im Kennfeld des äußeren Fans ergibt sich bei unterkritisch durchströmter Düse eine Arbeitslinie bei niedrigeren Durchsätzen (höher und flacher)

![messaufbau](/src/bilder/turboflugtriebwerke_skizze_25.jpeg)
<figcaption>Betriebslinie zwischen den Betriebspunkten C und D: In beiden Punkten Düse des Nebenstroms nicht kritisch durchströmt.</figcaption>

Dies bedeutet, dass der Massenstromparameter mit sinkendem Düsendruckverhältnis kleiner wird

### Schritt 3: Betriebslinie im Kennfeld des inneren Fans

*Das ist einfach*, wurde in der Vorlesung übersprungen

### Schritt 4: Betriebslinie im gemeinsamen Fan Kennfeld

***Zwei Wellen Zwei Strom Triebwerke kommen in der Klausur nicht dran, sind zu komplex für die kurzen Klausuraufgaben***
***Im Fragenteil aber schon: Wichtige Punkte:***

- Warum ist das Nebenstromverhältnis nicht konstant und sinkt mit steigendem Belastungsfall - Folie 161
- Warum ist die Betriebslinie im äußeren Fan eine Funktion der Machzahl? - Folien 167, 168
  - Dazu gehört Überlegung Tafel Bild 3
- Betriebslinie vom inneren Fan und / oder Booster kann in der Klausur auch im Rechenteil sehr gut drankommen

*Nächste Stunde fällt aus, aber danach als nächstes: Instationäres Betriebsverhalten, Regelung und Schubberechnung*
