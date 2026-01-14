---
course: Leichtbau 1
type: Vorlesung
by: Maged Sorour
date: 2026-01-08 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

### Exzentrische Krafteinleitung

Durch einen Versatz der Kraftwirkungslinie vom Flächenschwerpunkt oder vom elastischen Schwerpunkt entsteht ein zusätzliches Biegemoment, das vor allem bei dynamischer Belastung zu Prblemen führen kann

## Biegeelemente

Werden unterteilt in:

- Ebene Biegeträger
- Gekrümmte Biegeträger
- Platten und Membrane (Flächige Biegeträger)

Neben der maximal zulässigen Spannung des Werkstoffes sind die wichtigsten Kenngrößen zur Gestaltung biegebelasteter Strukturen

$E$ - Elastizitätsmodul\
$J$ - Trägheitsmoment\
$W$ - Wiederstandsmoment\

Für einen ersten Vergleich kann die Biegesteifigkeit $EJ$ herangezogen werden

![](/src/bilder/leichtbau_image_15.png)
<figcaption>Einschub - Wiederstandsmoment</figcaption>

Die Frage des Werkstoffs ist nicht mehr so leicht zu beantworten wie bei den [Zugelementen](https://franzkoehler.com/src/notes/leichtbau-2025-12-04/) - Sie ist von der konstruktiven Gestaltung abhängig.

### Beispiel

![](/src/bilder/leichtbau_image_16.png)
<figcaption>Lösung der Werkstofffrage</figcaption>

**Gestaltfragen** und **Besondere Probleme** sind schon in [vorheriger Vorlesung](https://franzkoehler.com/src/notes/leichtbau-2025-12-11/) behandelt worden.

## Ebene Biegeträger

Transformation von Schwerpunkt- in Hauptachsensystem:

$$y_H = y_S \cdot cos(\varphi) + z_S \cdot sin(\varphi)$$

$$z_H = z_S \cdot cos(\varphi) - y_S \cdot sin(\varphi)$$

![](/src/bilder/leichtbau_image_17.png)
<figcaption>Spannungsverlauf in einem L-Träger</figcaption>

## Gekrümmte Biegeträger

Es treten drei Effekte auf

- Spannungsüberhöhung am inneren Rand
- Abminderung des WIederstandsmoments durch Ausweichen der Flansche
- Es sntstehen zusätzliche sekundäre Spannungen $\sigma_{tr}$ senkrecht zur Biegespannung

![](/src/bilder/leichtbau_image_18.png)
<figcaption>Ergänzung zur Biegeträger Skizze 4.17 im Skript</figcaption>

