---
course: Flugzeugaerodynamik 2
type: Vorlesung
by: Thorsten Lutz
date: 2026-05-21 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Urechnung zwischen Profilschnitt und Normalschnitt (Wiederholung)

Koordinatentransformation ergibt:

$$ U_{\infty n} \approx U_\infty cos(\beta) $$

$$ Ma_{\infty n} \approx Ma_\infty cos(\beta) $$

$$ a_n \approx \frac{a}{cos(\beta)} $$

$$ \delta_n = \frac{\delta}{cos(\beta)} $$

Beim Vergleich eines gepfeilten Flügels mit einem ungepfeilten Ausgangsflügel sind vier Fälle zu unterscheiden, zwei Pro Koordinatensystem... (Siehe **Folie 133** unten)

### Aerodynamik des gepfeilten Flügels berechnen

1. Geometrieanströmung auf den Normalschnitt umrechnen (Geometrie, $U_{\infty n}, Ma_{\infty n}, \alpha_n $)
2. Auswahl des 2D Berechnungsverfahren, jenachdem ob $Ma_{\infty n} < \text{oder} > 1$
   - Skeletttheorie (Aero I)
   - Ähnlichkeitsregeln (Aero I)
   - Überschallmethode (Aero II)
3. Berechnung der Strömungsbeiwerte im Normalschnitt (Index $n$)
4. Umrechnung der Beiwerte im Normalschnitt zurück auf den Profilschnitt

![](/src/bilder/flugzeugaerodynamik2_image_12.png)
<figcaption>Beispiel: Ermittlung relevanter Auslegungsparameter eines Blended Wing Body (BWB)</figcaption>

![](/src/bilder/flugzeugaerodynamik2_image_13.png)


Der Profilentwurf wird mit 2D-Berechnungsverfahren für $Ma_{\infty n}, C_{a n} \text{und} \delta_n$ durchgeführt. Die resultierende Profilkontur wird anschließend auf den Profilschnitt A-A umgerechnet

Anwendungsbeispiele für die vier oben genannten Berechnungsschritte in Vorlesung ab **Folie 147**

![](/src/bilder/flugzeugaerodynamik2_image_14.png)
<figcaption></figcaption>
