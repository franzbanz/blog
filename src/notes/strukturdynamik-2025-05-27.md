---
course: Strukturdynamik
type: Kapitel 7
by: Malte Krack
date: 2025-05-27 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Eigendynamik unbequemer MFS

Modale Vorgehensweise schließt bestimmte Phänomene wie *nicht modale Dämpfung*, *Zirkulatorische- und Kreiselkräfte* aus.\
Um unbequeme Systeme berechnen zu können müssen auch diese Phänomene beschrieben werden

## Lineare, zeitinvariante, mechanische Systeme DGL

$$\underleftarrow{\underline{M}} \ddot{\underline{q}} + (\underline{\underline{D}} + \underline{\underline{G}}) \dot{\underline{q}} + (\underline{\underline{K}} + \underline{\underline{N}}) \underline{q} = \underline{0}, \quad \underline{q} \in \mathbb{R}^{n \times 1}, \quad n: \text{Anzahl FHG}$$

Koeffizientenmatrizen reell, $\underline{q} = \underline{0}$ ist Ruhelage

### Ansatz

![messaufbau](/src/bilder/strukturdynamik_skizze_22.jpeg)
<figcaption>Mitschrieb Seite 1</figcaption>

Beachte: $\lambda^2 = -\tilde{\lambda}$ für konservative Systeme - *aus verallgemeintertem Eigenproblem*

### Allgemeine Lösung: Superposition

![messaufbau](/src/bilder/strukturdynamik_skizze_23.jpeg)
<figcaption>Mitschrieb Seite 2</figcaption>

## Nicht - modale Dämpfung

Nächster Schritt: Behandlung der unterschiedlichen Terme

- Wo entstehen sie (physikalische Ursachen)?
- Wie wirken sie sich aus?

![messaufbau](/src/bilder/strukturdynamik_skizze_24.jpeg)
<figcaption>Mitschrieb Seite 3</figcaption>

Beispiel für nicht-modal gedämpfte Schwingerkette in Vorlesungsfolien

**Beispiel eines rotierenden Systems sowie eines Tragflügels in den Vorlesungsaufzeichnungen**