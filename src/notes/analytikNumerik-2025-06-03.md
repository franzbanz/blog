---
course: Analytische und Numerische Methoden
type: Analytik
by: Bernhard Weigand
date: 2025-06-03 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Nichtlineare Probleme

## Stationäre Wärmeleitung in einer Platte mit temperaturabhängiger Wärmeleitfähigkeit

$$\frac{\partial}{\partial x} (\lambda(T) \frac{\partial T}{\partial x}) + \frac{\partial}{\partial y} (\lambda(T) \frac{\partial T}{\partial y}) = 0$$

$$\Omega = \int_0^T \frac{\lambda(T)}{\lambda_0} d\tilde{T}$$

$$\frac{\partial T}{\partial x} = \frac{d T}{d \Omega} \frac{\partial \Omega}{\partial x} ; \quad \frac{\partial T}{\partial y} = \frac{d T}{d \Omega} \frac{\partial \Omega}{\partial y}$$

$$\frac{\partial \Omega}{\partial T} = \frac{\lambda(T)}{\lambda_0} \rightarrow \quad \frac{d T}{d \Omega} = \frac{\lambda_0}{\lambda(T)}$$

![mitschrieb1](/src/bilder/analytische_methoden_skizze_34.jpeg)
<figcaption>Mitschrieb Seite 1</figcaption>

![mitschrieb2](/src/bilder/analytische_methoden_skizze_35.jpeg)
<figcaption>Mitschrieb Seite 2</figcaption>