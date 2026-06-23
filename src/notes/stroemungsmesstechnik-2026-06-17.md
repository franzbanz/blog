---
course: Optische Strömungsmesstechnik
type: Teil 9
by: Markus Leitner
date: 2026-06-17 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

#### Wiederholung letzte Stunde: Prinzipieller Aufbau und grrundlegendes Messprinzip der Particle Image Velocimetry

// Bild Folie 4

- Aufnahme zweier kurz aufeinander golgender Partikelbilder
- Korrelation der Bilder
- Besitmmung des Geschwindigkeitsfeldes anhand der Partikelverschiebung von einem zum nächsten Bild
- Lokaler Geschwindigkeitsvektor $\Overrightarrow{v} = \frac{\Delta s}{\Delta t}$
- Wird über cross correlation herausgefunden

## Anwendung der Particle Image Velocimetry

![](/src/bilder/stroemungsmesstechnik_image_10.png)
<figcaption>Fehlereinflüsse durch das Messergebnis</figcaption>

- Auffinden fehlerhafter Vektoren anhand geeigneter Kriterien
  - Signal-Rausch-Verhältnis
  - Abweichung vom lokalen Mittelwert
  - Obergrenze für den Geschwindigkeitsbetrag
- Schließen der Lücken durch interpolation
