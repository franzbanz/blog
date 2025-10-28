---
course: Flugzeugaerodynamik
type: Vorlesung
by: Thorsten Lutz
date: 2025-10-28 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## 1.2.3 Überschallströmung ($Ma_\text{lokal} > 1$)


![](/src/bilder/flugzeugaerodynamik_image_6.png)
<figcaption>Abhängigkeitsbereiche von Überschallströmungen</figcaption>


![](/src/bilder/flugzeugaerodynamik_image_7.png)
<figcaption>Concorde, Reiseflugmachzahl $Ma_\infty = 2,02$</figcaption>

Wurzelprofil 3% Profildicke\
Flügelspitze 2,15%\
Vorderkante scharfkantig, keine Wölbung

Wirbel streichen entlang der Flügeloberseite, es folge höhere Geschwindigkeit, kleinerer Druck auf der Oberseite und eine nichtlineare Auftriebserhöhung mit dem Anstellwinkel

|                       | Einfluss auf gesamtes Profil | Einfluss nur im Klappenbereich |
|-----------------------|:----------------------------:|:------------------------------:|
| Inkompressibel        |               x              |                                |
| Unterschall           |               x              |                                |
| Transschall ($Ma < 1$)|               x              |                                |
| Überschall            |                              |                x               |

## Hyperschallströmungen ($Ma_\infty \geq 5$)

Extreme Temperaturerhöhungen an der Grenzschicht\
Dichte- und Druckänderungen sind im Vergleich sehr klein


![](/src/bilder/flugzeugaerodynamik_image_8.png)
<figcaption>Potentialtheoretische Geschwindigkeitsverteilung und daraus erechnete potentialtheoretische Druckbeiwertsverteilung</figcaption>

Mit steigendem Anstellwinktel steigt $\frac{U}{U_\infty}$ auf der Flügeloberseite und fällt auf der Flügelunterseite, die beiden Kurven im Diagramm bewegen sich also auseinander.\
Der Staupunkt wandert dann auf dem Flügelprofil in Flussrichtung

### Besitzt ein Airbus laminare Laufstrecken?

- Geschwindigkeitsverteilung
- Grenzschichteigenschaften

**Antwort**: aktuell sind alle Airbus Transportflugzeuge turbulent umströmt, es kann aber mit aktiven Maßnahmen eine laminare Strömung aufrecht erhalten werden, bisher aber nicht in den Tragflügeln.

## Ausbilden einer Grenzschicht

Haftbedingung an der Profiloberfläche: $u = 0$\
Am Grenzschichtrand wird Außengeschwindigkeit erreicht\
Je größer die Reynoldszahl, desto dünner ist die Grenzschicht

### Die Dicke der Grenzschicht

- Segelflugzeug ca. $2 - 10 mm$
- Airbus ca. $10 cm$, Rumpf / Heck ca. $2 m$
- Luftschiffheck ca. $2 m$
- Bodengrenzschicht ca. $100 - 200 m$

## Wiederholung laminare / turbulente Grenzschicht


![](/src/bilder/flugzeugaerodynamik_image_9.png)
<figcaption>Unterschiede zwischen laminarer und turbulenter Grenzschicht</figcaption>

### Laminar-turbulenter Übergang

Die Umschlagslage ist abhängig von:

- Der Reynoldszahl $Re = \frac{U_\infty t}{v}$ - Wird die Zahl erhöht, bewegt sich der Umschlag Stromaufwärts
- Der Geschwindigkeitsverteilung am Aussenrand der Grenzschicht und damit von der Form des Profils und vom Anstellwinkel - Geschwindigkeitsabfall, Umschlag Stromaufwärts
- Art und Niveau der Strömungen (Druck- oder Geschwindigkeitsfluktuationen) in der Anströmung - Turbulenzgrad $Tu$
- Der Oberflächengüte des Profils (Rauhigkeit) - $Tu$ erhöht führt zu umschlag stromaufwärts
- Beispiel: Laminarwindkanäle mit $Tu \approx 0,02 \%$ - liefert Flug repräsentative Umschlagslage
- Steigt die Rauhigkeit, geht der Umschlag stromaufwärts

Reynoldszahlen

- Segelflugzeug: $0,5 - 3 Mio$
- A340: $40 Mio$
- Luftschiff: $200 Mio$

