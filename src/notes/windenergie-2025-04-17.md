---
course: Windenergie 1
type: Vorlesung
by: Po Wen Cheng
date: 2025-04-17 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Windenergienutzung

## Globale Winde

Druck Gradientenkraft

- solare Erwärmunh
- langwellige abstrahlung
- druckuntersciede, ausgleichsbewegung

Corioliskraft

- ablenkung senkrecht zur bewegungsrichtung
- (nordhalbkugel: tiefdruckgebiete rotieren gegen die uhr)

- geostrophischer Wind
- globale Windströmungen (Zirkulationen, Hadley, Ferrel, Polar)

Zusätzliche Zentrifugalkraft aus Bewegung um Tiefdruckgebiete

## Geostropischer Wind

- Luftströmung in großer Höhe unbeeinflusst von Bodenreibung
- Gleichgewicht zwischen Gradientenkraft und Corioliskraft

<!-- Grafik von Folie 10 hier -->

## Lokale Winde

Einflüsse aus Temperaturdifferenzen und Bodenreibung

- lokale Windströmungen z.B. See-Land-Briese, Berg-Tal-Briese
- Beispiel Seewind (tagsüber)

## Atmosphärische Grenzschicht

## Wind in Bodennähe: Windprofil

Annahme eines konstanten Energieaustausches\
Turbulente Grenzschichttheorie nach Prandtl

- Logarithmisches Höhenprofil
- Rauigkeitslänge $z_0$ als Reibungsparameter

Korrekturterm wg. Einfluss der atmosphärischen Temparaturschichtungen (stabil, neutral, labil)

## Logarithmisches Windprofil bezogen auf Referenzhöhe $z_1$

$$v_2 = v_1 \frac{ln(z_2/z_0)}{ln(z_1/z_0)}$$

$v_1$ Windgeschwindigkeit in Höhe $z_1$\
$z_0$ Rauhigkeitslänge

Eigentlich kommt noch ein Korrekturterm für die Stabilität dazu, hier weggelassen weil die Stabilität sehr abhängig vom Standort ist. Neutrale Bedingungen können in der Praxis als Mittelmaß gewählt werden - reicht für normale Anwendungen and Standorten ohne besonders ausgeprägter Luftschichtung.

## Powerlaw Windprofil bezogen auf Referenzhöhe $z_1$

$$v_2 = v_1 (z_2/z_1)^\alpha$$

$\alpha$ Rauhigkeitsexponent

Dieser Ausdruck kommt aus der Grenzschichttheorie und ist experimentell festgelegt, nicht bewiesen, aber funktioniert (curvefitting).

## Europäischer Windatlas

- Datenbank des europäischen Eindklimas
- Zur Bestimmung von Winddaten an Orten an denen es keine Messdaten gibt
- Handbuch für "Ressource Assessment" Potenzialstudien
- Grundlage für zuverkässiges Site Assessment (Standortbeurteilung)

Methode für die horizontale und vertikale Extrapolation von meteorologischen Daten und Abschätzungen der Windressourcen\
Hauptannahme: Geostopischer Wind ist über große Entfernungen konstant (Erfundener Wind in einer Höhe in der die Effekte der Erdoberfläche keine Rolle mehr spielen)

# Windmessung

Verhindern dass verschiedene Windenergieanlagen sich nicht gegenseitig negativ beeinflussen

- Leistungskurvenbestimmung
- Standortkalibrierung
- Mechanische Lastmessungen zur Anlagenzertifizierung

<!-- Folie 22 Formeln -->

Messgrößen:

- Windgeschwindigkeit
- Druck
- Lufttemperatur
- Windrichtung

<!-- Folie 26 -->

### Schalenkreuz oder Löffelanemometer

Vorteile

- klassische form der windgeschwindigkeitsmessung
- gute proportionalität zwischen windgeschwindigkeit und drehzahl
- ...

### Ultraschallanemometer

Vorteile

- Keine Verschleißteile
- Hohe Abtastrate zw. 1 Hz und 100 Hz
- Beheizbar $\rightarrow$ gegen Vereisung

## Gegenüberstellung Messmast - Fernerkundung

<!-- Folie 31 -->

Mal nachlesen: Windmessungen aus dem Helikopter möglich??

<!-- Folie 40 noch wichtig -->

Leistungskurve einer WEA verifizieren