---
course: Optische Strömungsmesstechnik
type: Teil 11
by: Markus Leitner
date: 2026-06-24 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Methodik der Particle Tracking Velocimetry

Lagrangesche Betrachtung im Gegensatz zur Eulerschen Betrachtungsweise: Einzelne Partikel werden betrachtet

### Einführung

- Eulersche Beschreibung (Ortsfeste Betrachtung)
  - die Änderung der Strömungsgrößen an einer festen Stelle des Raumes, während die einzelnen Teilchen vorbeiziehen, wird betrachtet
  - Messmethoden: PIV, LDV
- Lagrangesche Beschreibung (Massen- oder Telchenfeste Betrachtung)
  - das einzelne Teilchen wird in seiner zeitlichen Bewegung im Raum verfolgt
  - Messmethoden: PTV

**PTV**: Niedrige Teilchenbilddichte, nur vereinzelte Partikel auf dem Bild, verfolgen einzelner Teilchen nötig\
**PIV**: Mittlere bis hohe Teilchenbilddichte, mittlerer Abstand zwischen zwei Partikelbildern ist ungefär so groß wie der Partikeldurchmesser, Einsatz von Korrelationsalgorithmen\
**LSV**: Hohe Teilchenbilddichte, Oartikelbilder überlappen sich, Verfolgen eines Fleckenmusters

Unterschiede zur PIV: Es ist keine Laserquelle für Lichtschnitt nötig, es können LEDs verwendet werden, außerdem werden mehrere Kameras benötigt

#### Einschub: Photogrammetrie

![](/src/bilder/stroemungsmesstechnik_image_11.png)
<figcaption>Möglicher Versuchsaufbau der Photogrammetrie</figcaption>

1. Seeding der Strömung mit Tracer-Partikeln
2. Aufnahme der beleuchteten Tracer-Partikel mit mehreren synchronisierten Kameras
3. Erfassung der Partikelposition im Raum über photogrammetrische Verfahren
4. Verfolgung der Partikel im Messvolumen
5. Dreidimensionale Bahnlinien und Geschwindigkeitsvektoren

### Methodik

// Skizze 2

Rotationsmatrix $R$ beschreibt Blickrichtung der Kamera (Senkrecht zur Bildebene)\

Anhand geometrischer Zusammenhänge aus der Kalibrierung werden aus den 2D-Bildkoordinaten die 3D-Objektkoordinaten mit den Kollinearitätsgleichungen berechnet:\
(Siehe **Folie 20**)

$$
x' = x_p - c \cdot \frac{r_{11}(X_P - X_O) + r_{12}(Y_P - Y_O) + r_{13}(Z_P - Z_O)}{r_{31}(X_P - X_O) + r_{32}(Y_P - Y_O) + r_{33}(Z_P - Z_O)}
$$

$$
y' = y_p - c \cdot \frac{r_{21}(X_P - X_O) + r_{22}(Y_P - Y_O) + r_{23}(Z_P - Z_O)}{r_{31}(X_P - X_O) + r_{32}(Y_P - Y_O) + r_{33}(Z_P - Z_O)}
$$

- Die Verfolgung von Partikeln erfolgt durch eine logische Verknüpfung detektierter Partikel zwischen zeitlich aufeinanderfolgenden Messbildern zu Bahnlinien
- Basiert auf dem Grundsatz, dass die Verschiebung eines Partikels von einem zum nächsten Bild begrenzt ist
  - Begrenzung der Geschwindigkeit
  - Begrenzung der Beschleunigung
- Der lokale Geschwindigkeitsvektor ergibt sich aus der lokalen Partikelverschiebung und der Bildfrequenz
