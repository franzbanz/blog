---
course: Einführung in die Verbrennung
type: Vorlesung
by: Andreas Huber, Torsten Methling, Holger Huck, Nils Jakobs
date: 2025-05-07 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Thermodynamik

## Grundlagen Thermodynamik

Wiederholungen:

- 1.-/2. Hauptsatz, Innere Energie, Enthalpie, Wärmekapazität
- Thermodynamisches System:
  - Eine Region im Raum - Bilanzraum - die von der Umgebung durch Begrenzungsflächen - Systemgrenzen - abgegrenzt wird
- Die Systemgrenzen sind frei wählbar, unterscheidbar aufgrund
  - Lage (ortsfest / beweglich)
  - Durchlässigkeit (Masse / Energie)
- Einteilung des Systems in
  - Offenes System: durchlässig für Masse und Energie
  - Geschlossenes System: kein Massenaustausch, durchlässig für Energie
  - Abgeschlossene System: kein Austausch von Energie und Masse
- System wird durch Zustandsgrößen charakterisiert
  - Zusammenhänge zwischen Zustandsgrößen: Zustandsfunktionen
  - isotherm (Temperatur konstant)
  - isobar (Druck konstant)
  - isochor (Volumen konstant)
  - adiabat (kein Wärmefluss)
- Zustandsänderungen umkehrbar: reversibel (eher theoretisch)
- Zustandsänderungen nicht umkehrbar: nicht reversibel

### Ideales Gasgesetz

$$p V = n R_m T$$

$$p V = m R T$$

$$p = \rho R T$$

## 1. Hauptsatz der Thermodynamik

Jedes thermodynamische System besitzt eine Zustandsgröße Energie, die für ein abgeschlossenes System konstant ist\
Energie kann weder erzeugt noch vernichtet werden, sie kann sich umwandeln oder austauschen

### Wärmekapazität

beschreibt Temperaturänderung eines Systems bei Zuführung einer Wärmemenge $\delta Q = CdT$

- Bei konstantem Volumen: $dU = \delta Q = C_v D T$
- Bei konstantem Druck: $dH = \delta Q = C_p D T$

### Kalorische Zustandgleichung

- Spezifische Wärmekapazitäten sind temperaturabhängig
- Verbrennung:
  - Große T-Änderung
  - Thermisch perfekt (nur T-abhängig)
- Anwendung
  - Tabelliert als Funktion der Temperatur
  - Polynomfit

### Heizwert

- Wärmemenge, die bei Standardbedingungen frei wird $\rightarrow$ Reaktionsprodukt Wasser (gasförmig)
- Umgekehrtes Vorzeichen zur Reaktionsenthalpie: Reaktionen mit Wärmefreisetzung haben negative Reaktionsenthalpie

### Brennwert

- Wärmemenge, die bei Standardbedingungen frei wird $\rightarrow$ Reaktionsprodukt Wasser (flüssig)
- Um die Verdampfungsenthalpie von Wasser größer als der Heißwert: Brennwert = Heizwert + Kondensationswärme

### Satz von Hess

*Die Standartreaktionsenthalpie einer Rekation ist gleich der Summe der Standardbildungsenthalpien einer Reaktionsfolge, in die die gesuchte Reaktion formal zerlegt werden kann.*

![wärmefreisetzung](/src/bilder/verbrennung_skizze_3.jpeg)
<figcaption>Formale Zerlegung einer Reaktionsgleichung</figcaption>

### Adiabatische Flammentemperatur

![wärmefreisetzung](/src/bilder/verbrennung_skizze_4.jpeg)
<figcaption>Modellvorstellung: Wärme bleibt im System erhalten und wird als Temperaturänderung sichtbar</figcaption>

- Enthalpieänderung bei Reaktion: $dH = dU + p d V + V d p = \delta Q - V d p$
  - d: Änderung der Zustandsgröße - wegunabhängig
  - $\delta$: Änderung der Prozessgröße - wegabhängig
- Näherungen für praktische Anwendungen
  - Reaktion läuft vollständig ab
  - Nur wenige stabile Reaktionsprodukte
    - typisch: Nur CO$\_2$, H$\_2$O
    - Keine Dissoziation der Verbrennungsprodukte
- Abschätzung der maximalen Temperatur

Berechnung über Ansatz Enthalpieerhaltung: Enthalpie-Differenz von Produkten (reagierter Zustand 2 und @ adiabater Flammentemp. $T_{ad}$) und Edukten (Zustand 1 und @ Ausgangstemp. $T_1$)

## 2. Hauptsatz der Thermodynamil

*Jedes thermodynamische System besitzt eine Zustandsgröße Entropie $S$. Entropie kann im Inneren eines Systems nur erzeugt, nie aber vernichtet werden*

- Reversible Zustandsänderungen: Entropieänderung wird berechnet, indem man die mit der Umgebung reversibel ausgetauschte Wärme $Q_{rev}$ durch die absolute Temperratur $T$ an der Stelle des Wärmetauschers teilt

Zahlreiche physikalisch-chemische Prozesse verletzen nicht den 1. Hauptsatz (Energieerhaltung), finden aber trotzdem nie statt

- Bsp. zwei Körper um thermischen Kontakt nehmen gemeinsame Temperatur an
- nicht: 1 Körper erwärmt sich, 1 Körper kühlt ab
- Folgerung: Aussagen über Richtung von thermodynamischen Prozessen werden gebraucht
- Zustandsänderung:
  - Reversible Zustandsänderung
  - Irreversible Zustandsänderung

### Thermodynamisches Gleichgewicht

- Mechanisches Gleichgewicht
  - Temperatur in A und B gleich ($T_A = T_B = T_{AB}$)
  - Es findet Druckausgleich statt
  - Es gilt die Ideale Gasgleichung und Gesamtdruck = Summe der Partialdrücke
- Thermisches Gleichgewicht
  - Summe der inneren Energien ist Konstant $dU = 0$
  - Ideale Gasgleichung
- Chemisches Gleichgewicht (neu in dieser Vorlesung)
  - Es findet Reaktionen statt, bis makroskopisch kein Umsatz mehr zu beobachten ist $\rightarrow$ chemisches Gleichgewicht
  - Zusätzlich auch mechanisches und thermosches Gleichgewicht $\rightarrow$ thermodynamisches Gleichgewicht

### Berechnung

Verschiedene Gleichgewichtskonstanten $K_{\text{"index"}}$:\
Jede Gleichgewichtskonstante gehört zu einer Reaktion

- $K_p$ ... Verhältnis der Partialdrücke $p$ (normiert mit Standarddruck $p_0$)
- $K_x$ ... Verhältnis der Molenbrüche $x$
- $K_c$ ... Verhältnis der Konzentrationen $c$

Gleichgewichtskonstanten können ineinander umgerechnet werden

### Prinzib des kleinsten Zwangs

*Wird auf ein im Gleichgewichtszustand befindliches System durch Änderungen der äußeren Bedingungen ein Zwang ausgeübt, so verschiebt sich die Lage des Gleichgewichts so, dass die Wirkung der Änderung verkleinert wird.*

## Fragen

Der zweite Hauptsatz der Thermodynamik beschreibt vereinfacht ausgedrückt...\
...die Prozessrichtungen thermodynamischer Prozesse

Ordnen Sie den Zustandsgrößen-Änderungen eine der Bezeichnungen isobar, isentrop, isotherm oder isochor zu:\
Entropie $S$ = const. isentrop\
Volumen $V$ = const. isochor\
Druck $p$ = const. isobar\
Temperatur $T$ = const isotherm
