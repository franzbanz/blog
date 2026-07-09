---
course: Optische Strömungsmesstechnik
type: Teil 12
by: Markus Leitner
date: 2026-07-08 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Anwendung der Particle Tracking Velocimetry (PTV)

### Prozessschritte der PTV

1. Einbringung von Partikeln in die Strömung und Beleuchtung der Strömung
2. Aufnahme von Bildsequenzen mit mindestens drei zeitlich synchronisierten Kameras
3. Erfassung und Verfolgung der Partikel in der Strömung

Algorithmus *von H.G. Maas uns B. Lüthi* benötigt die äußere und innere Orientierung der Kameras relativ zum Objektraum - Eine Kalibrierung des Messaufbaus ist notwendig zur Gewinnung der Orientierungsparameter

Am ILA wird noch ein *Image Averaging* Schritt in der Bildverarbeitung dem Algorithmus vorgeschaltet

![](/src/bilder/stroemungsmesstechnik_image_12.png)
<figcaption>Image Averaging Methode</figcaption>

### Untersuchung einer Verdichterkaskade am Flachbettwasserkanal mit Hilfe der PTV

Erste Abschätzung der Kameraposition wird mit Kalibrierplatte iterativ angepasst, bis Position und Orientierung genau bekannt sind

- Die Bahnlinien bestehten aus individuellen Geschwindigkeitsvektoren
- Die Farbe der Geschwindigkeitsvektoren entspricht der relativen kinetischen Energie
- In der Kaskade nimmt die Kinetische Energie ab, weil der Druck bei den Schaufelblättern erhöht ist

### Untersuchung einer Turbinenstufe am Ringgitterwasserkanal mit Hilfe der PTV

- Schlechtere Optische Zugänglichkeit für Kameras und Beleuchtung
- Aber: 3D Effekte können berücksichtigt werden

Beim Versuchsaufbau des ILA wurde das Leitrat untersucht

Sekundärströmungen im Turbinenleitrad können detailliert betrachtet werden
