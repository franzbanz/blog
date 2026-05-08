---
course: Umweltaerodynamik
type: Vorlesung
by: Bernd Peters
date: 2026-04-28 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Vertikale Stabilität der Atmosphäre

Die trockenadiabatische Temperaturänderung, die ein Luftpaket beim Auf- bzw. Absteigen erfährt beträgt ca. **1K / 100m** (Herleitung siehe **Folie 38**)

1. Neutrale Schichtung
   - Vertikale Temperaturänderung der Atmosphöre entspricht der trockenadiabatischen Temperaturänderung
   - Ein Luftpaket, das im Ausgangsniveau die gleiche Dichte und Temperatur wie seine Umgebung in gleicher Höhe hat, hat also auch  nach einer entsprechenden Hebung (Senkung) die gleiche Dichte und Temperatur wie seine Umgebung
2. Instabile Schichtung / labile Schichtung
   - Temperaturänderung der Atmosphäre ist *größer* als die trockenadiabatische Temperaturänderung
   - Thermisch bedingte (selbstständige) Aufwärtsbewegung der Luftpakete
3. Stabile Schichtung
   - Temperaturänderung der Atmosphäre ist *kleiner* als die trockenadiabatische Temperaturänderung
   - Luftpaket kehrt wieder in seine Ausgangslage zurück
   - Turbulenz wird gedämpft

![](/src/bilder/umweltaerodynamik_image_2.png)
<figcaption>Trockenadiabatische Temperaturänderung eines auf- bzw. absteigenden Luftpakets, *nach Peter Hupfer, Wilhelm Kuttler*</figcaption>

Im Winter in Stuttgart zum Beispiel: Feinstaubwarnungen, weil stabile Schichtung, wenig Austausch in der Atmosphäre, Schadstoffe bleiben am Boden

Nachts eher stabile Schichtung - höhere Geschwindigkeiten in der Höhe\
Tagsüber eher instabile Schichtung - höhere Geschwindigkeiten am Boden

## Entwicklung einer Thermikblase bis zur Ablsösung

Unterschiedliche Albedo Werte am Boden (Zum Beispiel Asphalt, Wald) - Es bilden sich Thermikblasen (Manchmal als Flimmern über dem Asphalt zu sehen)

Erzwungene Anhebung durch Wind: Kann zur Ablösung einer Thermikblase am Hang führen

Aufsteigende Luft führt zur Wolkenbildung über Regionen mit niedrigen Albedowerten, Wie zum Beispiel in Städten. Im Umland bleibt es eher trocken

## Potenzielle Temperatur

Temperatur von Luft kann in verschiedenen Höhen nicht gut verglichen werden (Weil sie Höhenabhängig ist)

Auf einer Karte der Temperatur wären also nicht nur die meterologischen, Wetterbedingten Änderungen, sondern auch die Höhen zu sehen.

Bei der Potenziellen Temperatur $\Theta$ handelt es sich also um die Temperatur, die ein Luftteilchen annimmt, wenn es trockenadiabatisch auf das Nieveau von 1000 hPa gebracht wird

$$
\Theta = T \cdot (\frac{1000}{p})^{\frac{\kappa-1}{\kappa}}
$$

$$
\Theta = T + (\frac{g}{c_p}) \cdot z
$$

Der Gradient der potenziellen Temperatur $\gamma = -(\frac{dT}{dz})$ kann dazu verwendet werden, die Stabilität der atmosphärischen Schichtung zu beurteilen\
**Kann auch in machen Quellen mit anderem Vorzeichen definiert werden**

## Richardson-Zahl

- Weiterer Stabilitätsindex für die atmosphärische Schichtung
- Verhältnis zwischen dem vertikalen Gradient der potenziellen Temperatur und dem Quadrat der vertikalen Windscherung dar
- Kann als Verhältnis zwischen der thermischen und der mechanischen atmosphärischen Turbulenz gedeutet werden

$$
Ri = \frac{g \cdot\frac{d \Theta}{dz}}{\Theta \cdot (\frac{du}{dz})^2}
$$

$Ri < 0 \rightarrow$  labile Verhältnisse mit starker thermischer Turbulenz\
$Ri = 0 \rightarrow$ neutrale Schichtung, also rein mechanische Turbulenz\
$Ri > 0 \rightarrow$ stabile Schichtung, turbulenter Austausch wird unterdrückt

Ab einem kritischen Wert von $Ri = 0,25$ oder größer wird der turbulente Austausch völlig unterdrückt - überhaupt keine vertikale Turbulenz mehr (Passiert aber nur sehr selten)
