---
course: Analytische und Numerische Methoden
type: Numerik
by: Andrea Beck
date: 2025-07-10 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Berechnung des Numerischen Flusses

<!-- Folie 41 -->
*Sollten sie schonmal gehört haben:* "Flussvekotr-Splitting-Form"\
Weitere Möglichkeit den Fluss aufzischreiben ist die "Flussdifferenz-Splitting Form" (Diese Form ist nur so zur Info)

## Wie klein muss der Zeitschritt sein?

<!-- Formel von Folie 44 hier abschreiben -->

Information darf in einem Zeitschritt nur durch eine Gitterzelle laufen.\
Dies war die Schrittweitenbedingung bei dem Upwind-Differenzen-Verfahren (CFL-Bedingung), welches die Stabilität garantiert. Hier ist es eine Konsistenzbedingung\
Das Einflussgebiet des numerischen Vefahrens muss das der exakten Lösung überdecken
<!-- Skizze Folie 44 hier abmalen -->
Konsistenzbedingung

## Lösung des Riemannproblems für die Lineare Wellengleichung

Beispiel 11.4 in den Vorlesungsfolien

<!-- Beispiel Bildung des Expansionsfächers abmalen und schreiben Folie 51 -->

Wo kommt noch die fehlende Information her?

1. **Integrale Erhaltung** - Im Stoßfall ergibt sich die Rankine-Hugoniot Bedingung aus der integralen Erhaltung. Die integrale Erhaltung bestimmt die Stoßgeschwindigkeit
2. **Entropiebedingung** - Die Entropiebedingung bestimmt, dass es im Verdünnungs- fall die stetige Lösung genommen wird und kein Verdünnungs- stoß auftritt.

## Systeme von Erhaltungsgleichungen (z.B. Navier-Stokes)

Quasilineare Form der Funktion kann aufgestellt werden, Problem ist aber, dass diese Gleichung nicht mehr entkoppelt werden kann. Beim LInearen System würde als nächstes mit Hauptachsentransformation entkoppelt werden. Funktionert jetzt nicht, weil Eigenwerte nicht mehr konstant, sondern Funktionen der Lösung $u$ sind. (*Folie 57*)

## Das Godunov-Verfahren

***Keine Rechenaufgabe zu Kapitel 11.2.4 in der Klausur***

## Verfahren 2. Ordnung
<!-- nur kurz in der Vorlesung am Ende besprochen, vielleicht kurz aus dem Skript zusammenfassen -->

***Bis Folie 79 gekommen, der rest nicht in der Klausur***
