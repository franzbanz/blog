---
course: Flugzeugaerodynamik 2
type: Vorlesung
by: Thorsten Lutz
date: 2026-05-07 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Der Gepfeilte Flügel

// skizze 1

1. Reduktion des Druckwiederstands (insbesondere im Überschall relevant), Erhöhung $A/W$
2. Verschiebung des transsonischen Wiederstandsanstiegs zu höheren Flugmachzahlen $Ma_{\infty}$
3. Jones: Auch im Überschall ist bei der Flügelumströmung eine Unterschallcharakteristik möglich

$U_{\infty t}$ ruft keine Störgeschwindigkeit hervor\
$\rightarrow$ hat keinen Einfluss auf Druck\
$U_{\infty n}$ bestimmt Druckverteilung (bei unendlich gestrecktem Profil aus 2D Rechnung)\
$U_{\infty n}$ entscheidet über Wahl der Berechnungsmethode

- Bei $Ma_{\infty n} < 1$: Unterschalltheorie
- Bei $Ma_{\infty n} > 1$: Überschalltheorie

Flugmachzahl kann also bei gepfeilten Flügeln weiter erhöht werden, ohne Verdichtungsstöße hervorzurufen

//Skizze 2

Kein Staupunkt mehr bei gepfeiltem Flügel, weil dort ja $Ma_t$ wirkt, es bildet sich also stattdessen eine *Anlegelinie*\
An der Vorderkante verläuft die Stromlinie tangential zur Vorderkante\
Nach hinten hin wird $U_{\infty t}$ im Gegensatz zu $U_{\infty n}$ *größer*, wodurch die Strömung weiter nach außen gezogen wird

Hilfreiche **Folie 119**

Entlang Anliegelinie entwickelt sich eine Grenzschicht\
$\rightarrow$ laminar-turbulenter Umschlag\
$\rightarrow$ macht Strömung am Flügel turbulent

//Skizze 3

## Prinzip der Unabhängigkeit

Die Umströmung des normalschnittes eines unendlich gestrecktem Pfeilflügels mit $Ma_{\infty n}, \alpha_n$ ist relevant für:

- den Charakter der Umströmung (subsonischer, supersonischer Charakter)
- die Auswahl des Berechnungsverfahrens
- die vom Flügel hervorgerufenen Störgeschwindigkeiten
- die Druckverteilung
- das Auftreten von Verdichtungsstößen

Die Tangentialgeschwindigkeit $U_{\infty t}$ muss berücksichtigt werden:

- bei der Ermittlung der Stromlinien
- ber der Bestimmung der kritischen Machzahl nach der hier verwendeten Definition ($Ma_{\infty}^*$)
- bei der Berechnung von Reibungseffekten

Das Prinzip der Unabhängigkeit ist exakt gültig für:

- reibungsfreie Strömungen (potentialgleichung, linearisierte Potentialgleichung, Eulergleichung)
- laminare, inkompressible Strömungen (inkompressible Navier-Stokes-Gleichungen)
- die Ausbildung der Grenzschicht ensprechend den Prandtlschen Grenzschichtgleichungen

Es ist *streng nicht* gültig, wenn:

- laminare, kompressible Grenzschichten da $\mu, \rho = f(T)$ und damit auch von $U_{\infty t}$ sind (Relevante Größen, wie Zähigkeit, sind zum Beispiel auch abhängig von der Temperatur)
- turbulente Grenzschichten (inkompressibel, kompressibel), weil Turbulenz (*aufgelößte LES DNS*) inherent dreidimensional ist
