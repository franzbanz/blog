---
course: Strukturdynamik
type: Kapitel 9
by: Malte Krack
date: 2025-06-24 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Wie viele Freiheitsgrade brauche ich, um die Dynamik eines Flugzeuges zu beschreiben?

Physiker: Ich beginne mit dem zählen, sobald über die Stringtheorie Konsens herrscht\
Ingenieur: Es hat so viele Freiheitsgrade, wie ich ihm gebe (durch ein geeignetes Modell)

# Das diskretisierte Kontinuum

Wie kann man (zumindest näherungsweise) die Dynamik komplizierter Kontinua beschreiben?\
Wenn exakte Lösung der partiellen DGL nicht verfügbar:

Part. DGL - Gleichung **1**:

$$\rho A \ddot{u} - (EAu') = p(x,t) \quad x \in \]0,l\[$$

Näherungsansatz - Gleichung **2**:

$$u(x, t) = \sum_{j=1}^n \Psi_j(x) \cdot q_j(t)$$

$\Psi_j(x)$ = gewählte Ansatzfunktionen\
$q_j(t)$ zugehörige Koeffizienten (gesucht)

![graph](/src/bilder/strukturdynamik_skizze_29.jpeg)
<figcaption>Mitschrieb Seite 1</figcaption>

## Wahl der Ansatzfunktion

Anforderungen:

- jeweils kinematische Zwänge erfüllen
- Integrale müssen ausführbar sein
- $\Psi_j$ hier mindestens stetig

Zwei prinzipielle Ideen: Globale und Lokale Ansätze

![graph](/src/bilder/strukturdynamik_skizze_30.jpeg)
<figcaption>Mitschrieb Seite 2</figcaption>

FEM Wiederholung ab hier im Vorlesungsmitschrieb auf Ilias
