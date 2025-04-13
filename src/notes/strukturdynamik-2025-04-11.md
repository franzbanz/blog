---
course: Strukturdynamik
type: Vorlesung
by: Malte Krack
date: 2025-04-11 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---
## Eigendynamik von Ein-Freiheitsgradsystemen

<!-- Bild von Flügel Setup Folie 32 -->
Modellbildung (Modell ist in Klausur gegeben)
<!-- Bild von Modell Setup Folie 33 -->
$$M_a = c_m \frac{\rhov^2}{2} h^2 b$$
Drallsatz für $p$ raumfest:
$$J^{(p)} \ddot{\varphi} = \sum M^{(p)}$$
$$= M_a - k \varphi + m g a cos(\varphi)$$
$$J^{(p)} \ddot{\varphi} = -k\varphi + m g a cos(\varphi) + \frac{\deltav^2}{2} h^2 b w' \varphi$$
...

Mit $J^{(p)}$ = Flächenträgheitsmoment um Punkt p
Mit $M_R(\varphi)$ = Rückführendes Moment

## Ruhelagen

Es gilt $\varphi = \varphi_0 = const \rightarrow \dot{\varphi} = 0 = \ddot{\varphi}$
$\rightarrow M_R(\varphi_0) != 0 \rightarrow k^* \varphi_0 = m g a cos(\varphi_0)$
<!-- Skizze aus Mitschrieb -->

### Stabilität der Ruhelage $\varphi_0$

Kleine Auslenkungen $\Delta\varphi = \varphi - \varphi_0$ bleiben klein $\delta\varphi \rightarrow 0$

Ruhelage $\varphi_0$\
stabil für: $\frac{M_R}{d\varphi}<0$,   $E_p$ hat Minimum\
instabil für $\frac{M_R}{d\varphi}>0$,  $E_p$ hat Maximum\
Für $\frac{M_R}{d\varphi}=0$: Keine Aussage nach linearer Theorie möglich

Potentielle Energie $E_p = - \int M_R d \phi$
<!-- Skizze aus Mitschrieb -->

## Wie schwingt es?

Annahme: kleine Auslenkungen $\Delta\varphi = \varphi - \varphi_0$ um stabile Ruhelage $\varphi_0$\
Taylor-Entwicklung: $M_R(\Delta\varphi) ~= M_R(\varphi_0) + \frac{dM_R}{d\varphi} * \Delta\varphi + \Phi(\Delta\varphi^2)$\
$M_R(\varphi_0) = 0, \Phi(\Delta\varphi^2) = 0, \frac{dM_R}{d\varphi} = -k, k = 0$

### Linearsierte Bewegungsgleichung

$$J^{(p)} \ddot{\varphi} = -k\Delta\varphi, \Delta\dot{\varphi} = \dot{\varphi}, \Delta\ddot{\varphi} = \ddot{\varphi}$$
$$\rightarrow J^{(p)} \Delta\ddot{\varphi} + k\Delta\varphi = 0$$
Entspricht einem Feder-Masse-System

Differentialgleichung gilt für alle Ein-Freiheitsgrad-Systeme (EFS) - Standardform für EFS, frei, ungedämpft:
$$\ddot{q} + \omega^2 q = 0$$
