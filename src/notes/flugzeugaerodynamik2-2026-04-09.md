---
course: Flugzeugaerodynamik 2
type: Ähnlichkeitsregeln
by: Thorsten Lutz
date: 2026-04-09 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

**Mitschriebe zum Teil in den Vorlesungsfolien, ist in diesen Fällen hier markiert**

## Prandtlsche Traglinientheorie

Zirkulationsverteilung im Nachlauf ist unendlich und verläuft parallel zur Strömungsrichtung\
Ansatz: Berechne die Induktion auf den gebundenen Wirbel der die Kraft bewirkt: funktioniert nur, wenn der Flügel ungepfeilt ist

### Prandtl Theorie nicht anwendbar:

![](/src/bilder/flugzeugaerodynamik2_image_1.png)
<figcaption>Prandtl-Theorie ist bei gepfeilten Profilen nicht mehr anwendbar</figcaption>

**Folie Abb. 6.21**

## Erweiterte Traglinientheorie

![](/src/bilder/flugzeugaerodynamik2_image_2.png)
<figcaption>Einfluss von Slats, bzw. Flaps auf die Profilpolare</figcaption>

### Modellierung der Tragflügelumströmung

**Siehe Folie Abb. 6.24**

Gefeilter Flügel hat einen Einbruch von $c_a$ an der Flügelwurzel

### Das Verfahren von Weissinger

Möglichst Nahe zum Multhopp Verfahren\
Die Integralgleichung in dimensionslosen Koordinaten hat Ähnlichleiten zu Prandtl:

$$
\alpha_g(\eta) = f(\eta) \cdot \gamma(\eta) + \frac{1}{2 \pi} \oint
$$

Mit $\oint$ als Cauchy-Integral wie in **Gleichung 6.145**\
Unterschied ist der Vorfaktor $\frac{1}{2 \pi}$, weil bei Prandtl nur die Induktion vom Nachlauf berücksichtigt ist, nicht zusätzlich auch noch die Induktion des gebundenen Wirbels auf eine weiter hinten liegende Kontrollpunktlinie. Außerdem steckt ein Teil der Induktion in einem weiteren Integral (**Siehe Gleichung 6.145**)

Verkürzte Form ist **Gleichung 6.148**

$$
\alpha_g(\eta) = 2 [\tau(\eta) + \alpha_i(\eta)]
$$

- Erweiterte Traglinientheorie sagt ein harmloseres Abreißverhalten vor, die Prandtltheorie ein kritischeres
- Erweiterte Traglinientheorie sagt einen geringeren Auftriebsbeiwert voraus als die Prandtltheorie, vorallem bei kleineren Streckungen
