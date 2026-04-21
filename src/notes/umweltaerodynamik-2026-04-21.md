---
course: Umweltaerodynamik
type: Vorlesung
by: Bernd Peters
date: 2026-04-21 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Ekman-Spirale

Beobachtung: *Eisberge driften nicht in Windrichtung*

Vorstellung des Wassers in Schichten, die oberste bewegt sich einfach mit der Windgeschwindigkeit mit\
Die nächste Schicht wird von der oberen Schicht mitgerissen, jedoch langsamer, weil sie von den unteren Schichten abgebremst wird
Jede Schicht wird daher einer anderen Coreoliskraft ausgesetzt. Der Eisberg bewegt sich in eine Richtung gemittelt aus den Richtungen aller Wasserschichten

// Hier Ekman Spirale Bild

Je näher am Boden desto langsamer ist die Strömung desto geringer ist die v (?) Komponente

### Planetarische Grenzschichten

- Laminare viskose Grenzschicht: Tritt nur bei Glatten Oberflächen und geringen Windgeschwindigkeiten auf
- Prandtl-Schicht: Windrichtung bleibt mit der Höhe *in etwa* konstant
- Ekman-Schicht: Turbulente Reibung nimmt mit zunehmender Höhe ab, Bedeutung der Corioliskraft nimmt zu, charakteristische Rechtsdrehung des Windes mit der Höhe

Die atmosphärische Grenzschicht ist immer turbulent

### Mathematische Beschreibung der vertikalen Änderung der mittleren Windgeschwindigkeit

- Potenzgesetz nach Hellmann

$$
u_z = u_{ref} (\frac{z}{z_{ref}})^{\alpha}
$$

Auf offenem Gelände wird in niederer Höhe schon die volle Geschwindigkeit erreicht als in der Stadt, dies spiegelt sich im Faktor $\alpha$ wieder

- Logarithmisches Windgesetz mit prandtlscher Mischungswegformel (Siehe **Folie 6**)

$$
\tau = \rho l^2 (\frac{\partial u}{\partial z})^2
$$

Annahme, dass in der Prandtl-Schicht keine vertikalen Windrichtungsänderungen auftreten und die Schubspannung $\tau$ konstant ist, liefert:

$$
u(z) = \frac{u_*}{k} \cdot ln(\frac{z}{z_0})
$$

$z_0$ ist die Integrationskonstante / Rauhigkeitshöhe\
$k$ ist die Karman-Konstante

**Beispiel** für eine Messreihe ab **Folie 8**

Im Modell muss die Grenzschichtdicke für Ähnlichkeit dem Maßstab entsprechend sein. Um dies zu erreichen muss auch der Rauhigkeitsparameter dem Maßstab entsprechend sein\
Es kann also aus dem Rauhigkeitsparameter des Modells mit dem logarithmischen Windgesetzt auch die Skalierung des Modells berechnet werden

## Vertikale Stabilität in der Atmosphäre

- Troposphäre
  - Fast alle Wettervorgänge finden hier statt
  - 10-15km hoch
  - 0,65 K / 100 m
- Tropopause
  - Annäherend konstante Temperatur über die Höhe
  - Bis ca. 20km
- Stratosphäre
  - Inversion des Temperaturgradienten durch Erwärmung des Ozons
  - Verhindert weiteres Aufsteigen der Luftmassen
- Mesosphäre
- Thermosphäre
- Exosphäre