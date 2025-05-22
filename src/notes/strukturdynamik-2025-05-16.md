---
course: Strukturdynamik
type: Kapitel 6
by: Malte Krack
date: 2025-05-16 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

# Modale Vorgehensweise für bequeme Mehr-Freiheitsgrad-Systeme (MFS)

- Kann man mithilfe der Eigenmodel ein MFS auf voneinander unabhängige EFS zurückführen
- Sind Eigenmoden auch zu Beschreibung gedämpfter und erzwungener Schwinungen nützlifh?

![messaufbau](/src/bilder/strukturdynamik_skizze_18.jpeg)
<figcaption>Bewegungsgleichung</figcaption>

![messaufbau](/src/bilder/strukturdynamik_skizze_19.jpeg)
<figcaption>Behauptung: $\underline{\underline{\mu}}, \underline{\underline{\kappa}}$ sind diagonal</figcaption>

$$\underline{\underline{\mu}}\_{ij} = [\mu\_{ij}] \qquad \underline{\underline{\kappa}}\_{ij} = [\kappa\_{ij}]$$

Beweis in Vorlesungsmitschrieb

Orthogonalitätsbeziehungen ($i \neq j$)

$$\underline{\varPhi}\_j^T \underline{\underline{M}} \underline{\varPhi}\_i = 0$$

$$\underline{\varPhi}\_j^T \underline{\underline{K}} \underline{\varPhi}\_i = 0$$

Für distinkte Eigenfrequenzen $0 <= \omega_1 < \omega_2 < \dots < \omega_n$ sind Eigenvektoren orthogonal bezüglich $\underline{\underline{M}}, \underline{\underline{K}}$

Bei mehrfachen Eigenvektoren lässt sich Orthogonalität stets einfordern

$\underline{\underline{\kappa}}, \underline{\underline{\mu}}$ sind diagonal, Gl. **(B)** ist bezüglich linker Seite entkoppelt

Eigenvektoren $\varphi_i$ sind zunächst beliebig skalierbar\
Übliche Varianten der Normierung:

![messaufbau](/src/bilder/strukturdynamik_skizze_20.jpeg)
<figcaption>Herleitung der Bewegungsgleichung in modalen Koordinaten</figcaption>

Für $\varepsilon_i = 0$, d.h. $\underline{e} = \underline{0}$ sind die Gleichungen entkoppelt (trotz möglicher Anregung)

Für $\underline{e} \neq \underline{0}$ sind die Gleichungen gekoppelt.

$\varepsilon_i(\eta_1, \dots, \eta_n, \dot{\eta}\_1, \dots, \dot{\eta}\_n)$ allgemein gekoppelt

$\underline{\underline{G}}, \underline{\underline{N}}$ bewirken stets Kopplung - *siehe später in der Veranstaltung*

Wie muss $\underline{\underline{D}}$ aufgebaut sein, damit die Gleichungen weiterhin entkoppelt sind?

$$\underline{\underline{M}} \underline{\ddot{q}} + \underline{\underline{D}} \underline{\dot{q}} + \underline{\underline{K}} \underline{q} = \underline{f}(t)$$

$$\rightarrow \underline{\underline{\mu}} \underline{\ddot{\eta}} + \underline{\underline{\Phi^T}} \underline{\underline{D}} \underline{\underline{\Phi}} \underline{\dot{\eta}} + \underline{\underline{\kappa}} \underline{\eta} = \underline{\underline{\Phi^T}} \underline{f}$$

Für den Fall schwacher Dämpfung haben die Nebendiagonalelemente nur Einfluss von niederer Ordnung - Die Annahme Modaler Dämpfung ist daher angemessen

![messaufbau](/src/bilder/strukturdynamik_skizze_21.jpeg)
<figcaption>Modale Koordinaten sind verallgemeinerte Koordinaten mit der besonderen Eigenschaft, dass Massen- und Steifigkeitsmatrizen diagonal sind</figcaption>

Somit sind die modalen Koordinaten hinsichtlich der Trägheitskräfte und der elastischen Kräfte voneinander entkoppelt.

Ein wichtiger Sonderfall ist die Proportionaldämpfung auch bekannt unter Rayleigh-Dämpfung oder Bequemlichkeitshypothese - kommt in der echten Welt jedoch nicht wirklich vor - *halten sie sich davon fern*

## Anmerkungen zur Dämpfung

- Die Physik strukturmechanischer Dämpfung gehört zu den am wenigsten gut verstandenen Phänomenen des Ingenieurwesens
- Leichte Dämpfung
  - Sind die Dämpfungskräfte klein verglichen mit elastischen und Trägheitskräften, sprechen wir von leichter Dämpfung
  - Bei leichter Dämpfung hat nicht-modale Dämpfung nur Einfluss von höchstens zweiter Ordnung
  - Die weit verbreitete Annahme modaler Dämpfung lässt sich dann rechtfertigen
  - Bei der experimentellen Modalanalyse werden neben Eigenfrequenzen und Eigenformen standartmäßig modale Dämpfungsgrade ermittelt
- Sind die Dämpfungskräfte dagegen groß, (*z.B. in Gegenwart von Dämpfern oder starker Einwirkung von Gleitreibung*) lässt sich die Annahme modaler Dämpfung nicht rechtfertigen
- Selbst leichte Dämpfung geht in erster Ordnung ein in
  - die Verstärkung der Schwingung nahe Resonanzen und
  - die Stabilität von Systemen mit Neigung zur Selbsterregung

Eigenmoden eignen sich besonders gut zur Beschreibung der Eigenschwingungen, denn die Zeitfunktion dieser Moden enthält nur eine einzige Frequenz. Das entspricht grade dem Verhaöten n voneinander unabhängigen EFS.

## Signatur des strukturdynamischen Verhaltens

- Eigenfrequenz: Wie *schnell* schwingt es? Wo sind Resonanzen zu erwarten?
- Dämpfungsgrad: Wie schnell klingen Eigenschwingungen ab? Wie gut sind mögliche Resonanzen gedämpft?
- Eigenform: Wie schwingt es räumlich? Wie ist die Schwingungsenergie im System verteilt?
