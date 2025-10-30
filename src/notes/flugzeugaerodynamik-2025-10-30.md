---
course: Flugzeugaerodynamik
type: Vorlesung
by: Thorsten Lutz
date: 2025-10-30 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Laminarprofile und Laminardelle


![](/src/bilder/flugzeugaerodynamik_image_10.png)
<figcaption>Skriptergänzung</figcaption>

## Grenzen der Laminarhaltung

- Natural Laminar FLow (NLF): Passive Laminarhaltung durch reine Formgebung
- (LFC): Aktive Laminarhaltung mittels Grenzschichtabsaugung - macht nur bei sehr glatter Oberfläche Sinn, sonst direkt laminar-turbulenter Umschlag
- (HLFC) Hybridtechnologie (Formgebung + Absaugung)

Mal anschauen: [Webseite vom European Transsonic Wind Tunnel](https://www.etw.de/)

## TELEFONA Projekt

Flügel geradlinig ausgelegt, um Druckgradient entlang der Flügelvorderkante möglichst gering zu halten\
Sehr starke Beschleunigung zur Laminarerhaltung nötig

## Wie liest und interpretiert man Profilpolare?

// Formeln von Folie 55 abschreiben
- Dimensionsloser Auftriebsbeiwert: $c_a = \frac{A}{\frac{p_\infty}{2} U_\infty^2 F}$
- Wiederstandsbeiwert: $c_w = \frac{W}{\frac{p_\infty}{2} U_\infty^2 F}$
- Momentenbeiwert: $c_m = \frac{M}{\frac{p_\infty}{2} U_\infty^2 F t}$
- Reynoldszahl: $Re = \frac{U_\infty \cdot t}{v}$
- Mach-Zahl: $Ma = \frac{u_\infty}{a_\infty}$

kleine Indizes $a, w, m$: 2D (Profil), Schnitt eines Flügels\
große Indizes $A, W, M$: mittlere Beiwerte eines Flügels, einer Konfiguration


![](/src/bilder/flugzeugaerodynamik_image_11.png)
<figcaption>Der Umschlag wandert auf der Oberseite mit zunehmendem $\alpha$ stromauf, auf der Unterseite Stromab.\
Die Turbulente Ablösung folgt nach.</figcaption>

Verdrängungseffekt der Grenzschicht: Wenn Grenzschichtdicke auf der Oberseite dicker als auf der Unterseite ist: $\rightarrow$ dann kleinere effektive Wölbung, Anstellung

$C_{a, max}$ wird erreicht, wenn Ablösung im Bereich des Dickemaximums angekommen ist (in etwa)

## EInfluss der Profildicke

- Bsp. NACA 2410
  - 2% Profilwölbung
  - 40% Wölbungsrüclöage
  - 10% Profildicke

Symmetrisches Jankowski Profils bei $\alpha = 0°$

![](/src/bilder/flugzeugaerodynamik_image_12.png)
<figcaption>Einfluss der Profildicke auf Druckbeiwert $c_p$</figcaption>

