---
course: Flugzeugaerodynamik
type: Vorlesung
by: Thorsten Lutz
date: 2025-11-20 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Wann fliegt ein Nurflügler stabil?

![](/src/bilder/flugzeugaerodynamik_image_14.png)
<figcaption>Skript Folie 96</figcaption>

### Druck und Neutralpunkt

Druckpunkt $A$ ist **Kraftangriffspunkt** für aerodynamische Kräfte\
Moment am angestellten Profil bezogen auf Druckpunkt ist $c_m = 0$\
Moment bzw. Momentengradient hängt vom Momentenbezugspunkt ab

Neutralpunkt ist der Punkt, in dem das Moment bei variablem Auftriebsbeiwert konstant bleibt.

*Der Hebelarm des Gesamtmomentes $M = M_A + M_{A=0}$ endet im Druckpunkt*

Lage $x_A$ des Druckpunkts: (Auswendig wissen!)

$$
\frac{x_A}{t} = -\frac{c_m}{c_a}
$$

- relativ zum Momentenbezugspunkt von $c_m$
- gilt für beliebige Körper und Mach-Zahlen ohne oder mit Reibung
- $x_A$ wandert im Allgemeinen mit $C_a$
- $x_A$ geht für c_a = 0 gegen $\pm \infty$, sofern $M_{A=0} \neq 0$

Lage $x_N$ des Neutralpunkts: (Auswendig wissen!)

$$
\frac{x_N}{t} = -\frac{dc_m}{dc_a}
$$

- relativ zum Momentenbezugspunkt von $c_m$
- gilt für beliebige Körper und Mach-Zahlen ohne oder mit Reibung
- $x_N$ wandert im linearen Bereich der Momentenkurve nicht

Druck- und Neutralpunkt fallen zusammen, falls $c\_{m\_{A=0}} = 0$ ist

Zusammenhang zwischen Druck- und Neutralpunkt auf **Folie 102**

### Bedingungen für stabilen, stationären Flug

Liegt der Schwerpunkt vor dem Neutralpunkt, ist das Flugverhalten statisch stabil\
Liegt der Schwerpunkt im dem Neutralpunkt, ist das Flugverhalten indifferent\
Liegt der Schwerpunkt hinter dem Neutralpunkt, ist das Flugverhalten statisch instabil

**Stabilitätsmaß**: Vorlage Schwerpunkt vor Neutralpunkt

### Druckpunktfestigkeit

Lage des Neutralpunktes nach der Skelett-Theorie: $\frac{x_N}{t} = \frac{1}{4} = const.$

- ist unabhängig von $\alpha$
- gilt für Profilskelette im *unterschall*
- bei Tragflügeln ist die Lage von N abhängig vom Flügelgrundriss

Bedingung für Druckpunktfestigkeit: $\frac{x_A}{t} = -\frac{c_m}{c_a} = const.$

- druckpunktfeste Profile weisen ein verschwindendes Nullmoment auf
- bei beliebig gewölbten Profilen kann durch Überlagerung eines geeigneten S-Schlages Druckpunktfestigkeit erziehlt werden
- bei symmetrischen Profilen ist $A_1 = A_2 = 0$. symmetrische Profile sind daher stets druckpunktfest
- bei druckpunktfesten Profilen fallen Druck- und Neutralpunkt zusammen und es gilt $\frac{x_A}{t} = \frac{x_N}{t} = \frac{1}{4}$

![](/src/bilder/flugzeugaerodynamik_image_15.png)
<figcaption>Mitschrieb Seite 1</figcaption>

![](/src/bilder/flugzeugaerodynamik_image_16.png)
<figcaption>Mitschrieb Seite 2</figcaption>

![](/src/bilder/flugzeugaerodynamik_image_17.png)
<figcaption>Mitschrieb Seite 3</figcaption>

