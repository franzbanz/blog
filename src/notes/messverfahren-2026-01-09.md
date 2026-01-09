---
course: Messverfahren des Wärmetransports
type: Wärmestrommessung - instationäre Methode
by: Rico Poser
date: 2026-01-09 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---


## Wärmeleitung in halbunendlicher Wand / transiente TLC Methode


![](/src/bilder/messverfahren_image_26.png)
<figcaption>Mitschrieb aus letzter Vorlesung (gekürzt)</figcaption>

Mitschrieb aus letzter Vorlesung geht bereits bis ansatz der Lösung der gewöhnlichen DGL 2. Ordnung mit undbekannten Koeffizienten A und B

## Zeitabhängiger Wärmestrom an der Oberfläche

![](/src/bilder/messverfahren_image_27.png)
<figcaption>Mitschrieb seite 1</figcaption>

Integralgleichung aus Differentialgleichung - schwierig zu lösen

$$
\Psi_w (t) = \frac{h}{\sqrt{k \rho c} \sqrt{\pi}} \int_0^t{\frac{\Psi_{aw}(\tau) - \Psi_w(\tau)}{\sqrt{t-\tau} d \tau}}
$$

Es ist besser nicht direkt aus dem Laplace Raum zu überführen

![](/src/bilder/messverfahren_image_28.png)
<figcaption>Mitschrieb Seite 2</figcaption>

Annahmen, die getroffen werden müssen, damit die hergeleitete Lösung angewendet werden kann:

Konstante Stoffgrößen, keine Querwärmeleitung, isothermer Anfangszustand, konstante Temperatur im unendlichen, Wärmestrom mithilfe *Newton's Law Of Cooling*, Betrachtung der Wandoberfläche (unendlich dünn), Wärmeübergangskoeffizient ist konstant und idealer Temperatursprung

## Duhamel Superpositionsprinzip

Zeitabhängige Randbedingungen

$$
u(x,t) = \int_{\tau = 0}^t{U(x,t-\tau) F'(\tau) d \tau} + \sum_{j=1}^N{U(x,t-\tau_j)[F(\tau_j^+) - F(\tau_j^-)]}
$$

$U(x,t)$ ist eine *Antwort* auf $G(x) \cdot 1(t)$ - Lösung für einen Sprung

$u(x,t)$ ist eine *Antwort* auf $G(x) \cdot F(t)$ - Lösung für einen zeitlichen Verlauf

Duhamel gibt uns Lösung von $u$ auf Basis von $U$
