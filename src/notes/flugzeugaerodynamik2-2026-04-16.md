---
course: Flugzeugaerodynamik 2
type: Wirbelleiterverfahren
by: Thorsten Lutz
date: 2026-04-16 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

Beispielhafte Lösungen der Erweiterten Tragllinientheorie auf **Folie 42**:\
Pfeilung verringert im Unterschall den Auftriebsbeiwert\
Abreißerhalten bei Rückgepfeilten Flügeln kritisch, bei vorgepfeilten Flügeln gut

1. Eine Pfeilung $|\beta| \neq 0$ reduziert den mittleren Auftriebsbeiwert $c_A$
2. Eine Vorpfeilung $\beta < 0$ führt zu einer relativen $c_a$-Überhöhung im Bereich der Flügelwurzel und zu einer Reduktion im Außenbereich
3. Eine Rückpfeilung $\beta > 0$ führt zu einem $c_a$-Einbruch im Bereich der Flügelwurzel und zu einer Überhöhung im Außenbereich

// Skizzen zum Effekt von Grenzschichtzäunen (In der Aufzeichnung ab ca. 25. Minute)

## Das Wirbelleiterverfahren

Vorteile:

- Beachtung des Einflusses der Profilwölbung und Berechnung des resultierenden Nickmoments möglich
- Nachlauf und Nachlaufaufrollung kann diskretisiert werden
- Beliebige Flugzeugkonfigurationen mit zugehörigem Nachlauf können modelliert werden

Wirbelsegmente auf $t/4$-Linie, Hinter jedem Punkt ist die Zirkulationsstärke Konstant (*Hufeisenwirbel*, siehe Skizze)

// Skizze Folie 50 rechts abzeichnen (Wirbel die nach hinten gehen liegen eigentlich aufeinander, nur für die Zeichnung mit Lücke) Kompensieren sich gegenseitig, nur die Wirbelstärke (Differenz) bleibt

$A$ - Linker Eckpunkt des Hufeisenwirbels\
$B$ - Rechter Eckpunkt des Hufeisenwirbels

$\Gamma_1, \Gamma_2, ...$ zunächst unbekannt\
Verlauf ist aber symmetrisch, es muss also nur jede zweite Unbekannte bestimmt werden

Wie werden die Unbekannten bestimmt? Pistolesi Prinzip: Kontrollpunkte Ansetzen, an denen die kinematische Randbedingung erfüllt wird, Diese Punkte werden an der $3/4$-Linie angesetzt (Entsprechend der Anzahl der unbekannten Zirkulationsstärken, Im Beispiel also nur drei)

Gebundene / Tragende Wirbel: Die Wirbelsegmente, die den Auftrieb des Tragflügels produzieren

Verbindungslinien zwischen $A$ zur Hinterkante: Verbindende Wirbel

Alles ab der Hinterkante: Freie Wirbel

Wirbel haben Index $j$, Pistolesi-Punkte haben Index $i$

Beispiel Rechnung eines Rechteckflügels in nächster Vorlesung


