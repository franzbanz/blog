---
course: Leichtbau 1
type: Vorlesung
by: Maged Sorour
date: 2026-01-08 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Biegeelemente

Belastung eines Rechteckträgers mit einem Biegemoment $M$ führt zu Spannungsverteilung, die in der Neutralfaser ihren Nulldurchgang hat, größere Spannung auf der Innenseite.

![](/src/bilder/leichtbau_image_19.png)
<figcaption>Ergänzung zu Skript Abbildung 4.20</figcaption>

### Plastische Biegung

Spannung wird im plastischen Bereich des Werkstoffs geringer, weil dort auch das E-Modul geringer wird.

E-Modul ist (im elastischen Bereich) definiert als

$$ E = \frac{\sigma}{\varepsilon} $$

Srkantenmodul ist (im plastischen Bereich) definiert als

$$ E_s = \frac{\sigma}{\varepsilon} $$

Tangentenmodul ist definiert als

$$ E_t = \frac{d\sigma}{d\varepsilon} $$

![](/src/bilder/leichtbau_image_20.png)
<figcaption>Elastischer und Plastischer Bereich und Auswirkung auf Spannungsverteilung</figcaption>

### Wo darf plastische Biegung eingesetzt werden?

- Bei Biegeelementen die nicht ermüdungskritisch sind
- Bei Lastfällen, die auf die Ermüdung keinen Einfluss haben
- Örtliche Instabilität oder Kippen darf nicht kritisch sein
- Werkstoff muss Fließvermögen besitzen, meistens gegeben, aber nicht bei CFK
- Verformungen müssen unterkritisch sein

### Vereinfachtes Verfahren nach Cozzone

- Dehungsverlauf ist auch bei Plastifizierung linear (Querschnitte bleiben eben)
- Spannungen entsprechen der Spannungs-Dehnungs-Beziehunh und sind für Zug und Druck gleich
- Maximal zulässige Dehnung ist bestimmend $\varepsilon = A$
- Werkstoff muss plastifizierbar sein (CFK!)


