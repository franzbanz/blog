---
course: Turboflugtriebwerke
type: Düsen
by: Stephan Staudacher
date: 2025-04-07 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Klausur

- Dauer: 2H
- Geteilt Turboflugtriebwerke / Einführung in die Verbrennung
- Alle Materialien werden Anfang der Prüfung ausgeteilt, Taschenrechner erlaubt bei Rechenteil
- Formelsammlung wird ausgeteilt
- 1H: Zwei Rechenaufgaben je 15 min, Fragenteil 30 min
- Prüfungstermin eher am Ende der Prüfungsphase

## Weiteres

![1](/src/bilder/turboflugtriebwerke_buch_1.png)
<figcaption>Empfehlung: Dimensional analysis for engineers ITLR</figcaption>

![2](/src/bilder/turboflugtriebwerke_buch_2.png)
<figcaption>Vorlage für diese Vorlesung: Turbomachinery 1 / 2 (Cambridge University)</figcaption>

![3](/src/bilder/turboflugtriebwerke_buch_3.png)
<figcaption>Anschließende Vorlesungen: Gas Turbine Performance 1 / 2</figcaption>

![4](/src/bilder/turboflugtriebwerke_buch_4.png)
<figcaption>Übung mit Musterlösung in Ilias (Freiwillig)</figcaption>

Nach Abschluss der Veranstaltung:

- Begrenzung von Komponentenprüfständen verstehen
- Einfluss dieser Befrenzungen auf die Auswahl von Dimensionierung quantifizieren
- Abstimmung zwischen Schub des Triebwerks und Wiederstand des Flugzeuges erklären
- Von stationären Betriebspunkt des Triebwerks auf einen anderen Betriebspunkt zu nähern
- Beschleunigung / Verzögerung von Triebweken näherungsweise berechnen
- Probleme beim Starten eines Triebwekes kennen

## Bücher

- Münzberg H.H. Flugantriebe Springer Verlag (Nicht empfohlen, eher zum nachschlagen)
- Cumbstry N. Heyes A. Jet Propulsion Cambridge University Press
- Saravanamuttoo H. Rogers G. F. C. Gas Turbine Theory Prentice Hall (Empfohlen)
- Urlaub A. Flugtriebweke Grundlagen - Systeme - Komponenten Springer Verlag (Ein bisschen Empfohlen)

## Beschreibung des Betriebsverhaltens wesentlicher Komponenten

### Unterschalleinlauf

<!-- Bild Folie 23 FEHLT -->
1 - Engster Querschnitt
Großer Nasenradius ist toleranter gegenüber wechselhafter Anströmungsrichtungen
Diffusor nach Engstem Querschnitt zum verzögern der Anströmung auf ~Ma0.5
Wie entwickelt sich der Druckverlust im Einlauf?
Ähnlich Düse / Diffusor / Rohr - Druckverlust im Rohr an der Wand
<!-- Siehe Foto von Tafel FEHLT -->
Bodenstandfall - Starke Krümmung der Stromlinien, langer Wandkontakt führen zu Druckverlust
Reiseflug - Geringere Krümmung, geringerer Wandkontakt
Schnellflug - Staupunkt ist weiter nach innen gewandert
<!-- Grafik Folie 27 FEHLT -->
$P_{t12/2}$ liegt im Einlass direkt vor dem Fan
$P_{t0}$ liegt vor dem Einlass
Enn der Fan mehr fördert, steigt die Machzahl im Strömungskanel im Einlass und der Druckverlust steigt
Kleineres $Ma_0$ - größerer Druckverlust

$$W = 1/2 \delta v^2 A C_w$$
$$W = 1/2 \frac{P}{RT} v^2 A C_w$$
$$\frac{W}{p A} = 1/2 \frac{v^2}{\kappa RT} C_w \kappa \frac{\kappa}{2} Ma^2 C_w$$
$$\phi = \frac{m\sqrt{RT_t}}{A \phi_t}  [-]=f(Ma)$$
