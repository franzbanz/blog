---
course: Optische Strömungsmesstechnik
type: Teil 6
by: Markus Leitner
date: 2026-05-20 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

### LDV nach der Zweistrahlmethode

Versuchsaufbau auf **Folie 4**

Messgenauigkeit ist von der Frequenz $f$ des Lasers und des Winkels abhängig, welche beide sehr genau bestimmt werden können

Intensität $I$ des Streulichts eines sphärischen Teilchens als Funktion des Raumwinkels\
Miesche Theorie: Das Streulicht ist nach vorne am intensivsten, nach hinten am schwächsten\
Empfänger muss im Versuch also richtig ausgerichtet sein, um das Streulicht messen zu können

// Skizze von **Folie 6**

Es gibt auch LDV nach der Zweistrahlmethode in Rückstreuung (Siehe **Folie 7**), hier ist jedoch ein stärkerer Laser nötig

Messvolumen $V$ des Zweistrahl-LDVs ist ein Ellipsoid

$$
V = \frac{\pi}{3} \frac{d^3}{sin(\theta)}
$$

Halbachsen

$$
a = \frac{d}{2 cos(\frac{\theta}{2})}
$$
$$
b = \frac{d}{2}
$$
$$
c = \frac{d}{2 sin(\frac{\theta}{2})}
$$

// Mitschrieb 1

Interferenzstreifenmethode um die Teilchengeschwindigkeit herzuleiten liefert den gleichen Zusammenhang wie die Herleitung über den Dopplereffekt

$$
v_{\perp} = f_D \frac{\lambda_0}{2 sin\frac{\theta}{2}}
$$

Das Dopplersignal des Empfängers ist unterschiedliche, je nachdem, wo die Spur des Streuteilchens durch das Messvolumen führt

1. Streuteilchen durchquert die Laserstrahlen im Zentrum - optimaler Doppler-Burst
2. Streuteilchen durchquert die Laserstrahlen außerhalb des Zentrums - Doppler-Burst mit geringer Modulationstiefe
3. Streuteilchen durchquert die Laserstrahlen außerhalb des Messvolumens - kein Doppler-Burst

### Signalwandlung und Auswertung

- Signalempfang über einen Sekundärelektronenvervielfacher (Photomultiplier)
- Bestimmung der Frequenz über:
  - Counter Prozessor (Zählt die Nulldurchgänge, geht nur bei geringem Rauschen)
  - Frequenz-Tracker (Spannungsgesteuerter Oszillator läuft mit und versucht parallele Frequenz zu erzeugen, geht nur bei kontinuierlichem Signal mit geringem Rauschen)
  - Schnelle Fourier-Transformation (Zeitsignal wird ins Frequenzsignal übertragen, leichtes Rauschen im Frequenzbereich, weil Teilchengeschwindigkeit nicht konstant)

### Richtungsbestimmung bei der LDV

Bragg Zelle um einen der beiden Laserstrahlen auf eine andere Frequenz zu bringen (Shiftfrequenz + Dopplerfrequenz)\
Die Interferenzstreifen bewegen sich mit bekannter Geschwindigkeit\
Die resultierende Signal-Frequenz ergibt sich aus der Shift-Frequenz und der Doppler-Frequenz

- Die Geschwindigkeit ist positiv falls $f > f_s$
- Die Geschwindigkeit ist negativ falls $f < f_s$
- Die Geschwindigkeit ist null falls $f = f_s$

Diagramm zur Messkette der eindimensionalen Laser Doppler Velocimetry auf **Folie 20**

### Mehrdimensionale Messsysteme der LDV

- Laser mit mehreren nutzbaren Wellenlängen inkl. Farbtrenner
- Entsprechend Strahlteiler, Bragg-Zellen
- Entsprechen Sende- und Empfangsoptiken
- Entsprechend Photomultiplier mit Farbfiltern
- Entsprechend Signalprozessoren
- PC

### Bewertung der LDV

+ berührungs- und Rückwirkungsfrei
+ lineare Proportionalität zwischen Messgröße und Strömungsgeschwindigkeit
+ keine Kalibrierung notwendig und hohe Genauigkeit der Messung
+ hohe räumliche und zeitliche Auflösung
+ Dreidimensionale Messungen sind möglich

- optische Transparenz des Fluids und der Behälterwände ist notwendig
- streuteilchen im Fluid sind erforderlich
- großer apparativer Aufwand
- Es lassen sich nur stationäre oder periodische Geschwindigkeitsfenster erfassen (lokale Messtechnik)
- Brechung an Grenzflächen und Behälterwänden muss berücksichtigt werden
