---
course: Optische Strömungsmesstechnik
type: Teil 5
by: Markus Leitner
date: 2026-05-13 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Das Physikalische Prinzip der Laser-Doppler-Velocimetry LDV

Auch: *Laser-Doppler Anemometrie*

// Diagramm von **Folie 4**

### Physikalische Grundlagen des Lasers

- Quelle von besonders parallelem, intensivem und monochromatischem Licht
- Basiert auf dem Prinzip der Lichtverstärkung durch eine stimulierte Strahlungsemission
- LASER = **L**ight **A**mplification by **S**timulated **E**mission of **R**adiatium
- Licht-Emissions- und Absorbtions-Erscheinungen sind über folgendes erklärbar
  - Energiezustände eines Atoms nach dem Bohrschen Atommodell
  - Quantenmechanische Betrachtung (Licht als Quant / Photon)

### Prinzipieller Aufbau eines Lasers

// Skizze von **Folie 12** ([Von Tatoute - Eigenes Werk, CC BY-SA 3.0](https://commons.wikimedia.org/w/index.php?curid=577575))

Gasentladungsröhre

Laserlicht wird über Spiegel und Planspiegel in das Laseraktive Material zurückgeschickt, Abstand zwischen Spiegeln muss ein vielfaches der Halben Wellenlänge des Laserlichts sein, um eine stehende Welle zu erhalten (Kohärenz)

### Doppler-Effekt

Die empfangene Frequenz ist abhängig von der Relativvewegung zwischen Sender und Empfänger\
Die Frequenzverschiebung $\Delta f$ ist eine Funktion der Bewegungsgeschwindigkeit

Bei der LDV sind Streuteilchen im Fluid zugleich Sender und Empfänger von licht

1. Das Streuteilchen wirkt als bewegter Empfänger in Bezug auf die vom Laser abgestrahlte Welle
2. Das Streuteilchen wirkt als bewegter Sender des Streulichts, welches vom stationären Empfänger detektiert wird

Diagramm zum Versuchsaufbau auf **Folie 19**

Erster Dopplereffekt: Bewegter Empfänger (Partikel) sieht eine andere Frequenz als der ruhende Sender:

$$
f_P = f_0 \left( 1-\frac{\overrightarrow{v} \cdot \overrightarrow{e}_S}{c} \right)
$$

Zweiter Dopplereffekt: Ruhender Empfänger sieht eine andere Frequenz als der bewegte Sender (Partikel)

$$
f_E = \frac{f_P}{\left( 1-\frac{\overrightarrow{v} \cdot \overrightarrow{e}_S}{c} \right)}
$$

//Mitschrieb 1

- Frequenz des Laserlichts mit einer Wellenlänge von 500nm: $F_0 = 6\cdot10^{14}$ Hz
- Lichtgeschwindigkeit $c$ ist eine Konstante
- Der Winkel $\Theta_B$ ist durch den Versuchsaufbau vorgegeben
- Frequenzänderunge $\Delta f_E$ ist der Geschwindigkeitskomponente senkrecht zur Laserachse direkt proportional
- Die Größenordnung der Frequenzänderung ist gegenüber der Frequenz des Laserlichts extrem klein
- Um sie messbar zu machen, wendet man das Überlagerungsprinzip elektromagnetischer Wellen an

$$
v_{\perp} = f_D \frac{\lambda_0}{2 sin\frac{\Theta}{2}}
$$