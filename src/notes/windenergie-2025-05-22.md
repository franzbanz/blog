---
course: Windenergie 1
type: Windenergienutzung 1
by: Christian Molter
date: 2025-05-22 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Literatur

![buch1](/src/bilder/windenergie_bild_7.png)
<figcaption>978-3-322-99446-2 *Kapitel 2, 6, 7*</figcaption>

![buch2](/src/bilder/windenergie_bild_8.png)
<figcaption>978-3-662-53154-9 *Kapitel 3, 4, 5*</figcaption>

## Typologien

**Prinzip der Wiederstandsnutzung**: Fläche die quer zum Wind steht wird angeströmt Wiederstandskraft wird in Drehbewegung / Leistung gesandelt\
Beispiel hierfür ist das Schalenkreizanemometer (Folie 10)

### Auftriebsläufer: Horizontalachenanlagen

$$W = c_W \cdot \frac{\rho}{2} \cdot f \cdot v^2 \quad \rightarrow \quad P = \frac{\rho}{2} \cdot f \cdot v^3 \cdot c_p$$

*Formel zu finden auf Folie 9*

Beispiel am Schalenkreuzanemometer

- unterschiedlicher Wiederstand der Schalen bewirkt Rotation
- Scheinbare Windgeschwindigkeit auf Antriebsseite des Rotors

$$c = v - \Omega \cdot r = v - u = \text{windgeschw.} - \text{umfangsgeschw.}$$

- Nur eine kleine Antriebskraft wird erzeugt
- maximaler aerodynamischer Wirkungsgrad ca. $8 \%$

Lee - Ausgerichtete Anlagen: Selbsterzeugtes Moment um die Anlage wieder in Windrichtung zu drehen - selbstjustierende Windenergieanlagen

### Auftriebsläufer: Vertikalachanlagen

- Keine Windnachführung nötig
- Gewichtsverteilung ist günstiger, weil nicht der größte Teil der Masse oben gelegen ist - Maschinenteile sind unten gelegen

Aber:

- Profil bewegt sich mit der Windgeschwindigkeit mit - geringere Effizienz, der Leistungsbeiwert $c_p$ einer Horizontalen Anlage kann nie erreicht werden
- Varieierende Anströmung durch Rotation - mehr dynamik, Schwingung und mehr Ermüdung
- Dennoch kann Wirkungsgrad von ca. $0,4$ erreicht werden

## Leisungsbegrenzung und Leistungsregelung

Begrenzung von Leistung und Belastungen auf zulässige Betriebsbereiche - Stabiles Erreichen der Nennleitung der Anlage

![bild1](/src/bilder/windenergie_skizze_6.jpeg)
<figcaption>Veränderung des Leistungsbeiwerts $c_p$ durch Änderung der Schnelllaufzahl $\lambda$</figcaption>

### Auftriebs- und Wiederstandsbeiwert bei unterschiedlichen Anstellwinkeln

Stallregelung funktionierte bei größeren Anlagen nicht mehr gut aufgrund von Stallinduzierten Schwingungen und hohen Wiederstandsbeiwerten bei hohen Anstellwinkeln\
Außerdem kann übermäßig hoher Rotorschub auftreten

Stall und Ablösung ist so komplex, dass die Nennleistung nicht sehr genau geregelt werden kann - es geht Leistung verloren

Mit active pitch control kann eine sauberere Leistungsregelung erreicht werden. Auch der maximale Rotorschub wird stark reduziert - besser für die Belastung der Anlage

***Könnte ja mal in Klausur drankommen***

Folie 32 Unterste Grafik: *Wie könnte hier die Drehzahlkurvve aussehen?*

## Modellgesetze und Ähnlichkeitsregeln

***kommt immer in Prüfung***

Was passiert wenn wir eine Windenergieanlage hochskalieren

Annahmen:

- Gleiches Anlagenkonzept, identische Schnellaufzahlen
- Skalieren aller Abmessungen
- Keine Reynoldseffekte
- Nur stationäre Lasten

- Mit der Drehzahl?
- Leistung
- Drehmoment
- Masse
- ...

![bild2](/src/bilder/windenergie_skizze_7.jpeg)
<figcaption>Modellgesetze und Ähnlichkeitsregeln Beispiele</figcaption>

*weitere notiz vom prof.: über "catch the wind" startup nachlesen*