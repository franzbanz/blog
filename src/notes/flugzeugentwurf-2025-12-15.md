---
course: Flugzeugentwurf
type: Vorentwurf Auslegung der Hauptkomponenten
by: Andreas Strohmayer
date: 2025-12-15 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

### Schlankheitsgrad des Rumpfes

Ist definiert als $\lambda = \frac{t_f}{d_f}$, hat Einfluss auf

- parasitären Wiederstand des Rumpfes
- verfügbaren Leitwerkshebelarm
- Biegebelastung des Rumpfes
- $\lambda_{typical} \approx 8-12$

## Tragflügelauslegung

Geometrischen Parameter der Tragflügelgeometrie:

- Fläche $S$ („wing area“)
- Spannweite $b$ („wing span“)
- Streckung $\Lambda$ („aspect ratio“)
- Pfeilung $\varphi$ („wing sweep“)
- Zuspitzung $\lambda$ („taper ratio“)
- Verwindung $\varepsilon$ („wing twist“)
- Profil(e) („airfoil(s)“)
- Relative Profildicke $\frac{d}{l}$ bzw. $\frac{t}{c}$ („thickness ratio“)
- Einstellwinkel („angle of incidence“)
- V-Stellung $v$
  - $v > 0$ („dihedral“)  
  - $v < 0$ („anhedral“)

Bei der Auslegung zu berücksichtigen:

- Hochauftrieb
- Gleitverhältnis und Mach-Effekte
- Überziehverhalten
- Kraftstoffvolumen
- Fahrwerksintegration (bei Tiefdecker)
- Flügelmasse
- Herstellungskosten

Gute Grafik des Flügelaufbaus auf **Folie 33 und 36** im Skript

*Flügelbezugsfläche* geht bis zur Rumpfmittellinie, im Gegensatz zur *Bespühlten Oberfläche*, die nur bis zur Flügelanbindung geht\
Flügelbezugsfläche soll die Fläche sein, die einen Beitrag zum Auftrieb des Flügels leistet\
Bei einer größeren Definition der Bezugsflügelfläche wird der Auftriebsbeiwert kleiner\
Zum Vergleich mehrer Flugzeuge muss darauf geachtet werden, dass die Bezugsflächen etc. gleich definiert sind

### Bezugsflügeltiefe und Neutralpunkt

Im Neutralpunkt (*aerodynamic center*, a.c.) des Tragflügels ist das Nickmoment unabhängig vom Anstellwinkel

- Der Neutralpunkt liegt im Unterschallbereich ca. auf Höhe des $\frac{1}{4}$-Punkts der Bezugsflügeltiefe $l \mu$
- Die Bezugsflügeltiefe $l \mu$ (‚Mean Aerodynamic Chord‘, MAC) ist die Tiefe eines unverwundenen und ungepfeilten Rechteckflügels, der in Auftrieb und Nickmoment dem tatsächlichen Flügel entspricht

Geometrisches Verfahren zur Bestimmung der Bezugsflügeltiefe und des Neutralpunktes im Skript auf **Folie 39**\
Bei komplexeren Flügelgeometrien kann auch mit einem einfachen Trapezflügel approximiert werden

### Streckung 

- $2 \pi$ ist der theoretisch ideale Auftriebsgradient
- Mit zunehmender Streckung vergrößern sich bei gleicher Flügelfläche die Spannweite und die Flügelmasse
- Das verfügbare Kraftstoffvolumen ist proportional zu $\frac{1}{\sqrt{\Lambda}}$
- Mit der Streckung ändert sich der induzierte Widerstand $c_{wi} = \frac{c_A^2}{\pi \Lambda e}$ (wird kleiner mit größerer Streckung)

### Relative Profildicke

Ein große relative Dicke ist günstig für

- Tragflügelsteifigkeit und -masse
- Tankvolumen
- Hochauftrieb im Niedergeschwindigkeitsbereich

Im Hochgeschwindigkeitsbereich erreichen Tragflügel mit großer relativer Dicke schnell die kritische Machzahl (siehe Grafik auf **Folie 47**)


