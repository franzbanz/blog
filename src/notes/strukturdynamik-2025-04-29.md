---
course: Strukturdynamik
type: Kapitel 4
by: Malte Krack
date: 2025-04-29 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Frage: Wie bewegt sich das Triebwerk nach einem Pumpstoß?

![modell](/src/bilder/strukturdynamik_skizze_9.jpeg)
<figcaption>Wir betrachten dieses mechanische Modell</figcaption>

Zwei Freiheitsgrade:

- Drehbeweglichkeit der Schubstange
- Drehung der Gondel um B

Die Bewegungsgleichungen können durch Freischneiden und Aufstellen von Impuls- und Drallsätzen gewonnen werden\
Impus- und Drallsatz werden für **jeden** freigeschnittenen Körper aufgestellt\
Anschließend müssen die kinematische Verträglichkeit und das Gleichgewicht (actio = reactio) an Koppelstellen beachtet werden

Die Gesamte Methode ist als **Vorgehen nach Newton und Euler** bekannt\
(Hier nur für ebene Mehrkörpersysteme)

![beispiel](/src/bilder/strukturdynamik_skizze_10.jpeg)
<figcaption>Einfaches Beispiel Folie 84</figcaption>

Beispiel Rechnung im Vorlesungsaufschrieb

![rechnung](/src/bilder/strukturdynamik_skizze_11.jpeg)
<figcaption>Rx, Ry tauchen ohne zeitliche Ableitungen auf, diese sind also leichter zu eleminieren um nur mit zwei gleichungen mit zwei unbekannten und ihren zeitlichen ableitungen weiter zu arbeiten</figcaption>

Die Wahl der Beschreibungsvariablen ist zu einem gewissen Grad Beliebig

Die Konfiguration eines Mehrkörpersystems lösst sich durch Koordinaten (Verschiebungen und Verdrehungen) beschreiben\
Aufgrund von Lagern können nicht alle Koordninaten voneinander unabhängig verändert werden, es bestehen kinematoscje Zwänge\
Ein Satz von Koordinaten, welche die Konfiguration eindeutig beschreiben, und voneinander unabhängig verändert weden können (ohne dabei die Zwangsbedingungen zu verletzen), bezeichnet man als verallgemeinerte Koordinaten

Die Anzahl verallgemeinerter Koordinaten entspricht der Anzahl vorhandener Freiheitsgrade

Abzählregel nur mit Elementen mit Masse, Masselose Elemente können ignoriert werden

Anzahl der Freiheitsgrade $n$

$$n = 3K - \sum_i v_i$$