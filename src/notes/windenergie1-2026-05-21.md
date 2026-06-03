---
course: Windenergie 1
type: Aerodynamik 2
by: Christian Molter
date: 2026-05-21 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Auftrieb (zwei Arten)

- statischer Auftrieb
  - wirkt immer entgegengerichtet zum Erdschwerefeld
  - Entsteht durch die Verdrängung durch ein leichteres Medium
  - z.B. Luftschiff, Uboot, ...
- Dynamischer Auftrieb
  - Kann in jede Richtung wirken
  - Entsteht durch Bewegung der Luft
  - z.B. Tragflügel, Segel, ...

## Profilaerodynamik

Es gibt drei physikalische Grundgleichungen mit denen sich dynamischer Auftrieb in Simulationen und Brerechnung sehr genau bestimmen lässt:

- Massenerhaltung (Kontinuitätsgleichung)
- Energieerhaltung (z.B. Bernoulli Gleichung)
- Impulserhaltung

Auftrieb $A$

$$A = c_a(\alpha_A) \cdot \frac{\rho}{2} \cdot c^2 \cdot (t \cdot b)$$

Wiederstand $W$

$$W = c_W(\alpha_A) \cdot \frac{\rho}{2} \cdot c^2 \cdot (t \cdot b)$$

**Achtung**: $c_a$ gilt für den Profilschnitt, $c_A$ gilt für den gesamten Tragflügel\
$c_a$ über $c_w$ nennt man auch die **Lilienthalpolare**

- Windenergie braucht Profildaten von -180° bis +180°
- Vermessung notwendig für Pitch-Regelung, Not stopp, Sturmlastfälle
- Flugzeugprofile werden nur zwischen ca. -25° bis +25°vermessen (Ausnahme: Hubschrauberrotor)

![polare](/src/bilder/windenergie_bild_6.png)
<figcaption>Da wo die Ursprungstangente die Kurve schneidet, ist das ideale Cl zu Cd Verhältnis</figcaption>

### Was ist die Grenzschicht?

- Direkt auf der Profilkontur muss die Strömungsgeschwindigkeit null sein (Haftbedingung)
- Weiter weg von der Kontur ändert sich die Strömungsgeschwindigkeit in Normalenrichtung nicht mehr
- Der Bereich dazwischen wird Grenzschicht genannt

Es gibt zwei Arten von Grenzschicht:

- Laminare Grenzschicht
  - Weniger Reibungswiederstand
  - Löst sich schneller von der Kontur ab
- Turbulente Grenzschicht
  - Mehr Reibungswiederstand
  - Löst sich später von der Kontur ab

## Rotoraerodynamik

Definition Schnelllaufzahl

$$\frac{\Omega \cdot R}{v_1} = \lambda$$

### Rotorauslegung nach Betz

Ziel: optimale lokale Abbremsung

Ansatz am Blattelement:
Leistung aus Blattelementtheorie = max. Leistung (Betz)

Annahmen:

1. Schnellläufer $\lambda > 4$ (Rotation des Nachlaufs vernachlässigbar)
2. Kein Widerstand im Auslegungspunkt
3. Keine Umströmung der Blattspitze

Vorgabe:

- Entwurfschnelllaufzahl $\lambda_A$
- Entwurfswert des Auftriebsbeiwertes $c_a$
- Entwurfswert des Anstellwinkels $\alpha_A$
- (Anzahl der Blätter $z$)

Ergebnis:

- Profiltiefenverlauf $t(r)$
- Verlauf der Profilverwindung $\alpha_{\text{Bau}}(r/R)$

### Rotorauslegung nach Schmitz

Berücksichtigt im Gegensatz zu Betz die Drallkomponente in Umfangsrichtung\
Die Umfangskomponente ist weit vor dem Rotor noch null und hinter ihm $v_{\text{Umfang}}$. Sie entsteht während des Strömens über die Blatttiefe.

## Rotorauslegung

- Maximaler Wirkungsgrad nach elementarer Theorie (Betz) $59%$
- Elektrischer Wirkungsgrad üblicher Anlagen $c_{\text{p,max,real}} \approx 43\% - 48\%$
- Enercon E66 mit einem E4-Blatt $c_{\text{p,max,real}} = 52\%$
