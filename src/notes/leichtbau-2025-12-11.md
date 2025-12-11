---
course: Leichtbau 1
type: Vorlesung
by: Maged Sorour
date: 2025-12-11 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Werkstofffragen

Folgende Konzepte werden noch in der nächsten Übung wiederholt

![](/src/bilder/leichtbau_image_12.png)
<figcaption>Vergleich zweier Werkstoffe</figcaption>

Zur Bestimmung von $\eta_G$ (Querschnittsbeiwert) wird folgendermaßen vorgegangen:

1. Mit dem Werkstoff geringerer Festigkeit (Index 1) wird eine Vordimensionierung durchgeführt ($M$ = äußere Belastung, das Biegemoment) **Gleichung 4-44**
$$
\beta_1 = \sqrt[3]{\,1 - \frac{6 \cdot M}{b \cdot H^2 \cdot \sigma_1}\,}
$$
2. Es wird $\beta_2$ berechnet:
Gl 4-45
$$
\beta_2 = \sqrt[3]{\,1 - \left( 1 - \beta_1^3 \right)\frac{\sigma_1}{\sigma_2}\,}
$$
3. Es wird $\eta_G$ ermittelt und der Gewichtsvergleich durchgeführt.

## Gestaltfragen

Die Größe des Trägheitsmoments ist kein Maß für die Güte des Biegeträgers. Durch Verrippungen kann das Trägheitsmoment erhöht, das Widerstandsmoment aber verringert werden.

![](/src/bilder/leichtbau_image_13.png)
<figcaption>Spannungsverlauf bei verschiedenen Formen</figcaption>

## Besondere Probleme

Schlanke Biegeträger können durch *kippen* versagen

In **Gleichung 4-50** ist $\beta$ ein Beiwert zur Bestimmung der Kipplast, der abhängig von der Krafteinleitung und der Einspannung ist.
Sein Wert liegt zwischen 1 und 2.56 **Abbildung 4.13**
Wenn Kippen dimensionierend wird, muss mit breiteren Flanschen konstruiert werden.

![](/src/bilder/leichtbau_image_14.png)
<figcaption>Auswirkung der mittragenden Breite</figcaption>

## Allgemeine Regeln

1. Querkräfte müssen im Schubmittelpunkt eingeleitet werden. Anderenfalls muss Torsion überlagert werden.
2. Wenn rein statisch bemessen wird, kann Plastifizierung zugelassen werden.
3. Druck und Biegung darf nicht linear überlagert werden.
4. Bei Leichtbauträgern müssen Stege nach Stabilitätskriterien ausgelegt oder als Zugfelder ausgebildet werden.
5. Alle Formeln gelten nur für $\frac{l}{h} > 3$

