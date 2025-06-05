---
course: Windenergie 1
type: Strukturdynamik 1
by: Po Wen Cheng
date: 2025-06-05 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Motivation: Warum Dynamische Berechnungen?

- Warum reichen statische Berechnungen nicht aus?
- Rotorblatt als *linear und *starrer Balken*, einseitig fest eingespannt

<!-- Folie 7 -->

Aerodynamische Kräfte, Gewichtskräfte als statische Streckenlast
(keine Funktion der Zeit)
• Schnittlasten bestimmen mit Kräfte- und Momentengleichgewicht
• Statische Berechnungen sind brauchbar für grobe Abschätzungen aber
nicht für Strukturauslegung

<!-- Folie 8 -->

Rotorblatt als flexibler Balken, einseitig festeingespannt
• Aerodynamische Kräfte, Gewichtskräfte als dynamische Streckenlast
(eine Funktion der Zeit)
• Schnittlasten bestimmen mit der Lösung der
Bewegungsdifferentialgleichung
• Dynamische Berechnungen sind notwendig für Strukturauslegung,
berücksichtigt die dynamische Amplifikation
• Die Strukturdeformation kann bestimmt werden

## Koordinatensysteme

Verwendung von drei Koordinatensystemen um die Belastungsgrößen darzustellen

1. KS im Rotorblattquerschnitt
2. KS im Rotormittelpunkt (Nabe)
3. KS im Turmfuß

KS basiert auf Konvention. Unterschiedliche Programme verwenden unterschiedliche KS - Daher immer überprüfen

Raumfeste KS vs. drehendes KS (Gierwinkel, Azimuthwinkel, Pitchwinkel)

### Typische Auslegungslasten für Windenergieanlagen

Schwenk- und Schlagmoment in
Rotorblatt Blattkoordinatensystem
(edgewise und flapwise bending
moment)
• Drehmoment, In-Plane und Out-of-
Plane Biegemomente in
Nabenkoordinatensystem
• Schubkraft, Nick-, Roll- und
Giermoment in
Turmkopfkoordinatensystem (thrust
force, fore-aft and side to side bending
moment, yaw moment)

## Anregung durch atmosphärische Turbulenz

- Kurzzeitige, lokale Änderung des Windrichtungs- und Windgeschwindigkeitsvektors
- Thermische und mechanische (Rauhigkeits-) Einflüsse
  - Zeitliche und räumliche Turbulenzstrukturen

## Dynamische Anregungen: Einteilung von Belastungen

<!-- Folie 18 -->

Lasten können konstant und zeitlich
veränderlich sein je nach
Koordinatensystem. Die Schwerkraft
von Turm ist konstant. Die
Schwerkraft von einem Blatt (bei
konstanter Drehzahl) verursacht aber
periodische Lasten für das Rotorblatt
• Die dynamische Belastungen werden
durch die Regelung und den Betrieb
der Windenergieanlage beeinflusst,
e.g. das Pitchen von Rotorblatt,
Windnachführung von dem Gondel,
Drehmoment Regelung,
Notabschaltung etc.

Externlasten

- Luftkräfte bei gleichförmiger, stationärer Rotoranströmung
- Periodisch wechselnde Luftkräfte
- Stochastische Luftkräfte durch Wirbelturbulenz
- Stochaastische Wellenkräfte auf Gründungsstruktur

Internlasten

- Massenkräfte
  - Gewichtskräfte
  - Zentrifugalkräfte
  - Kreiselkräfte
  - Massenumwucht

### Bewegungsgleichung elastischer Strukturen

$$M \ddot{q} + B \dot{q} + K q = F(t)$$

<!-- Folie 21 -->

### Stationäre Lasten aus Wind- und Massenkräften

- Eigengewicht
- Stationäre Luftkräfte aus mittlerer Windgeschwindigkeit (Abhängigkeit der Lasten von der Windgeschwindigkeit hängen vom Anlagenkonzept *Pitch* / *Stall* ab)

### Periodosche und transiente Lasten aus Massenkräften

- Massenkräfte durch Eigengewicht
- Transiente Lasten bei Manövern

<!-- Folie 27 -->

## Transformation der Rotorblattlasten auf die Gondel

<!-- Folie 28 -->

- Blattwurzelbiegemomente infolge von
  - Eigengewicht, Transformation in ein Rollmoment
  - Fliehkräfte, Transformation in ein Rollmoment

<!-- Folie 32 - Transformation von Lasten vom rotierenden ins feststehende System: Bsp. Massenumwucht -->

### Superposition von Blatt-Lasten, Bsp. Höhenprofil

<!-- Folie 34 3-Blatt-Rotor vs 2-Blatt-Rotor -->
