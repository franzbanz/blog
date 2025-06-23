---
course: Turboflugtriebwerke
type: Instationäres Betriebsverhalten
by: Stephan Staudacher
date: 2025-06-23 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Eigenschaften des instationären Betriebs

- Auffüll- und Entleerungsvorgänge führen zu einem Unterschied zwischen ein- und austretenden Massenströmen in den Komponenten (Größenodnung ms)
- Wärmeaufnahme oder Abgabe der Bauteile, d.h. zugeführte und abgeführte Energie bei den einzelnen Komponenten ist unterschiedlich (Größenodnung 100s)
- Trägheit des Rotors macht für eine Drehzahländerung ein Beschleunigungs- oder Verzögerungsmoment erforderlich

![messaufbau](/src/bilder/turboflugtriebwerke_skizze_26.jpeg)
<figcaption>(A), (B) stationäre Betriebspunkte\
(C) instationärer Betriebspunkt</figcaption>

$\dot{m}\_{Br}$ = Brennstoffmassenstrom\
$N$ = Drehzahl\
$_T$ = Turbine

![messaufbau](/src/bilder/turboflugtriebwerke_skizze_27.jpeg)
<figcaption>Gerade AB Linie: stationäre BetriebsLinie, gebogene Linie: instationäre BetriebsLinie, steilere gebogene Linie: instationäre BetriebsLinie bei schnellerer Beschleunigung</figcaption>

Prozess dauert lange, weil neues $T_{t4}$ immer langsamer angenährt wird. Lösung: Brennstroffmassenstrom $\dot{m}\_Br$ noch weiter erhöhen (overfueling) bis gewünschte Drehzahl erreicht ist. Der Preis ist ein noch geringerer Abstand zur Stabilitätsgrenze

### DIe Beschleunigung eines Triebwerks wird über Zeitschritte und quasistationäre Zustände errechnet

Wird zu einem Zeitpunkt während der Beschleunigung angenommen, dass das Triebwerk in diesem Zeitpunk einen quasistationären Zustand einnimmt, so kann die zu erwartendee Beschleunigung fpr einen nächsten Zeitschritt bis zum nächsten quasistationären...

$$P_B = M_b \omega = \Theta \dot{\omega} \omega = \Theta 2 \pi \frac{dN}{dt} 2 \pi N = \Theta 4 \pi^2 N \frac{dN}{dt}$$

$$P_B = \Theta 4 \pi^2 N \frac{dN}{dt} ; \quad \frac{dN}{dt} = \frac{P_B}{\Theta 4 \pi^2 N} ; \quad \Delta N = \frac{P_B}{4 \pi^2 N \Theta} \Delta t$$

## Stabilitätssteogernde Maßnahmen

- Reduktion des Brennstofüberschusses in der frühen Beschleunigungsphase
- Abblasung im Hochdruckverdichter...
- Erniedrigung der Betriebslinie durch Abblasung
- Frühes Öffnen des Abblasventils im transienten Fall (Verzögerung) zur Verbesserung der Stabilität

Nächstes Mal: **Starten von Turboluftstrahltriebwerken**
