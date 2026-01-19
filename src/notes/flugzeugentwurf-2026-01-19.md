---
course: Flugzeugentwurf
type: Leitwerkauslegung
by: Andreas Strohmayer
date: 2026-01-19 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Primärsteuerung

Steuerflächen: reduziertes Scharniermoment (**Folie 82**)

- Plain flap
- Overhanging balance
- Beveled trailing edge
- Sealed internal balance
- Balancing tab
- Frise aileron
- External airfoil balance
- Horn balance

### Potenzielle Prüfungsfragen

- Wie sind die Volumenkoeffizienten für Höhen und Seitenleitwerk definiert?
- Nennen Sie die Größenordnung des Volumenkoeffizienten für Höhen- und Seitenleitwerk für ein TL-Verkehrsflugzeug.
- Wozu dienen ‚Dorsal Fins‘?
- Wozu dienen ‚Ventral Fins‘?
- Wie können Ruderkräfte reduziert werden?

## Antriebsintegration

### Arten der Vortriebserzeugung

- Kolbenmotor mit Propeller
    - Braucht Sauerstoff und kann daher weniger hoch fliegen
    - Ist Geschwindigkeit begrenzt (ca. $Ma 0,6$)
    - Leistung konstant über Geschwindigkeit
- Propellerturbine
    - Ebenfalls geschwindigkeit begrenzt auf ca. $Ma 0,65$
    - Leistung konstant über Geschwindigkeit
- Turbofan
    - Schub konstant über Geschwindigkeit
    - Verbrauch proportional zum abgerufenen Schub
- Turbojet
    - Schub konstant über Geschwindigkeit
    - Verbrauch proportional zum abgerufenen Schub

$$
P \cdot \eta_A = F \cdot v
$$

mit Schub $F$; Wellen-Leistung $P$; Fluggeschwindigkeit $v$; Vortriebswirkungsgrad $\eta_A$

### Typische Auswahlkriterien

- Operationelle Anforderungen
- installiertes Gewicht
- Verbrauch
- Dimension und installationsanforderungen
- Anschaffungskosten
- Lärm / Vibrationen
- Wartungszyklen (*Mean Time Between Overhaul* MTBO)
- Technologiestufe (z.B. *Full Authority Digital Engine Control* FADEC)
- Verfügbarkeit

### Installationsaspekte

- Einleitung der Schublasten in die Flugzeugstruktur
- Interferenzen mit Flügel, Rumpf und Leitwerk
- Momentenhaushalt
    - Nickmomentenänderung
    - Giermoment bei Triebwerksausfall
    - Position des Schwerpunks
    - Gewichtsentlastung des Tragflügels
- Bodenfreiheit
- Zugänglichkeit und Inspizierbarkeit
- Lärm / Vibration
- hoher Druckrückgewinn / Geringe aerodynamische  Einlaufverluste (z.B. durch Einstellwinkel)
- Rotor Burst
- Ansaugen von Fremdkörpern

Gute Skizze zur Positionierung der Triebwerke auf **Folie 98**\
**Ist auch in Prüfung relevant!**

Weitere Idee: Verteilte Antriebe für sehr minimales Seitenleitwerk, kann ausgeglichen werden weil Elektromotoren besseres Ansprechverhalten haben als konventionelle Flugzeugmotoren

#### Potenzielle Prüfungsfragen

- Was sind typische Kriterien für die Antriebsauswahl?
- Welche Aspekte sind bei der Installation des gewählten Antriebs zu beachten?
- Welche Argumente sprechen für eine Anordnung von Triebwerken weiter außen bzw. innen am Tragflügel?
- Worin liegt ein wesentlicher Vorteil elektrischer Antriebe für die Antriebsintegration?

## Fahrwerksintegration

- Spornanordnung
    - Leicht, billig
    - Dreipunktlandung bei hohem $\alpha$
    - **Aber**: Brems- und Seitenlast vor dem Schwerpunkt (instabil)
    - Pilotensicht beim Rollen nicht so gut
    - Großer Wiederstand beim Start
- Buganordnung
    - Brems und Seitenkraft hinter Schwerpunkt (stabil)
    - Geringer Wiederstand beim Start
    - Gute Pilotensicht beim Rollen
    - **Aber**: Hohe Bugfahrwerkslast, Gewicht, Wiederstand
- Tandemanordnung
    - Strukturell günstigste Lastaufteilung
    - **Aber**: Stützräder erforderlich
    - Genaue Landelagen erforderlich
    - Rotation beim Start kaum möglich

