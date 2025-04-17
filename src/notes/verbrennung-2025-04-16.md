---
course: Einführung in die Verbrennung
type: Vorlesung
by: Andreas Huber, Torsten Methling, Holger Huck, Nils Jakobs
date: 2025-04-16 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Phänomene

## Kurzfragen

- Was versteht man unter der Elementerhaltung?
- Was erhöht die Rußemission eines Verbrennersystems?
- Eines der Phänomene in der Verbrennungstechnik heußt Quenchen, was bedeutet dies?

## Charakterisierung Verbrennung

Verbrennungsprozess ist abhängig von:

- Temperatur
- Druck
- Brennstroff
- Oxidator
- Mischungsverhältnis
  - mager: Oxidatorüberschuss
  - fett: Brennstoffüberschuss
  - stöchiemetrisch: vollständige Verbrennung (kein Überschuss)

### stöchiemetrische Verbrennung

formaler Ansatz Elementerhaltung in Folien\
(' = Edukt-Seite, '' = Produkt-Seite)\
$\nu$ - Stöchiemetriekoeffizient

$$CH_4 + O_2 \rightarrow CO_2 + H_2O$$

Annahme: 1 $CH_4$\
Rechts $C$ nur in $CO_2: 1 CO_2$\
Rechts $H$ nur in $H_2O: 2 H_2O$ ($4H$ aus $CH_4$)\
Damit $C$ und $H$ "Versorgt", es bleibt $O$:\
$O$ rechts abzählen: $(2 + 2) O = 4 O \rightarrow 2 O_2$

Gleiche Berechnung für Verbrennung mit Sauerstoff

### Luftzahl / Äquivalenzverhältnis

Wie viel Luft wird mit wie viel Brennstoff gemischt?

$$(\frac{Stoffmenge des Oxidators}{Stoffmenge des Brennstoffs}) / (\frac{Stoffmenge des Oxidators}{Stoffmenge des Brennstoffs})_{stöch} = \frac{1}{\varphi}$$

$\varphi$ = Äquivalenzverhältnis

### Flammen in technischen Anwendungen

Lamiare Flammen

- leise
- stationär
- Kerzen / Gasherd (Teilweise Vormischung)

Turbulente Flamme

- Mehr Leistung
- Mehr lärm (Hauptbeitrag zum Flugzeuglärm in der Brennkammer)
- Diesel (Selbstzündung, teilweise Vormischung bei Einspritzung)

Nicht-vorgemischte Flamme

- Sicher
- Mehr Rußbildung
- Mehr Stickoxide (prominentes $NO$)
- Gasheizung (geringe Schadstoffe, hohe Effizienz)

Vorgemischte Flamme

- Weniger Schadstoffe
- Gefahr Flammenrückschlag
- Otto-Motor (keine Selbstzündung, weniger Leistung, dafür geringere Schadstoffe)

<!-- ## Ziele der technischen Verbrennung

- Wärmefreisetzung
- Geringe Schadstoffbildung
- Sicherheit
- Geringe Lärmemissionen -->

## Wärmefreisetzung

Umwandlung von chemische Bindungsenergie in Wärme\
Abgastemperatur $T_1$ abhängig von z.B.:

- Wandwärmeverluste oder Strahlungsverluste (vor allem Ruß)
- Abgaszumischung durch z.B. Mischluft oder Abgasrückführung

![wärmefreisetzung](/src/bilder/verbrennung_skizze_1.jpeg)
<figcaption>Wärmefreisetzung über Abgastemperatur, $Q_g$ entspricht der in der Brennkammer freigesetzten Wärme</figcaption>

### Schadstoff Ruß

Ruß Partikel sind feste Kohlenwasserstoffe (hoher $C$-Anteil), die in Flammen aus der Gasphase gebildet werden können, sie entstehen in fetten Verbrennungszonen und werden in mageren Verbrennungszonen abgebaut (Rußoxidation)

Folgen:

- Strahlung
- Schadstoffe
- Ultra Fein Partikel

### Schadstoff Stickoxide

$NO_x$ sind die Gesamtheit aller Stickstoff-Sauerstoff-Verbindungen (Hauptsächlich $NO$ und $NO_2$ bei Verbrennung). Bildlung bei hohen Temperaturen und in fetten Verbrennungszonen

Folgen:

- Atemwegserkrankung
- Saurer Regen
- Ozonabbau

### Schadstoff unverbrannter Kohlenwasserstoffe

Unverbrannte Kohlenwasserstoffe (unburnt Hydrocarbons UHC) und CO können über die Verbrennung ins Abgas gelangen. Entstehen durch fette Verbrennung, lokales Flammenlöschen

Folgen:

- unvollständige Verbrennung
- CO und einige UHC sind toxisch

## Zünden

Brennstoff / Oxidator Verhältnis innerhalb von Zündgrenzen (z.B. Methan minimal 5 Vol-%, Maximal 60 Vol-% in Luft)\
Genügend Zündenergie\
Erreichen der Zündverzugszeit (z.B. Methan im Bereich von $\mu s - ms$)

## Löschen

Brennstoff / Oxidator Verhältnis außerhalb der Löschgrenzen\
Abheben der Flamme falls Anströmgeschwindigkeit größer als Flammengeschwindigkeit\
Quenching der Flamme falls mehr Wärme abgeführt als produziert wird

## Thermoakustik

Wechselwirkungen zwischen Schwingungsenergie (des Fluids) und der Wärmeenergie zu akustischen Druckschwingungen

![akustische schwingungen](/src/bilder/verbrennung_skizze_2.jpeg)
<figcaption>Entstehung und erhaltung akustischer Schwingungen - Feedback loop</figcaption>

Folge ist die Schädigung oder Zerstörung von Verbrennungsmaschinen