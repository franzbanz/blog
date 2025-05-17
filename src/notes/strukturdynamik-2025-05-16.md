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

<!-- Bewegungsgleichung: mitschrieb  -->


Modale Vorgehensweise einleiten mit Koordinatentransformation (umkehrbar, da $\varphi$ linear unabhängig)

$$\underline{q}(t) = \sum_{j=1}^m \underline{\varPhi}\_j \eta_j(t) = [\varPhi_1, ..., \varPhi_\m][\eta_1, ..., \eta_\m]^T = \underline{\underline{\Phi}} \underline{\eta}(t)$$

$\eta_j(t)$ sind modale Koordinaten (Zeitfunktion zunächst unbekannt)

<!-- mitschrieb 2 -->

Behauptung: $\underline{\underline{\mu}}, \underline{\underline{\kappa}}$ sind diagonal\
Beweis in Vorlesungsmitschrieb

Orthogonalitätsbeziehungen ($i \neq j$)

$$\underline{\varPhi}\_j^T \underline{\underline{M}} \underline{\varPhi}\_i = 0$$

$$\underline{\varPhi}\_j^T \underline{\underline{K}} \underline{\varPhi}\_i = 0$$

Für distinkte Eigenfrequenzen $0 <= \omega_1 < \omega_2 < \dots < \omega_n$ sind Eigenvektoren orthogonal bezüglich $\underline{\underline{M}}, \underline{\underline{K}}$

Bei mehrfachen Eigenvektoren lässt sich Orthogonalität stets einfordern

$\underline{\underline{\kappa}}, \underline{\underline{\mu}}$ sind diagonal, Gl. **(B)** ist bezüglich linker Seite entkoppelt

Eigenvektoren $\varphi_i$ sind zunächst beliebig skalierbar\
Übliche Varianten der Normierung:

<!-- mitschrieb 3 -->

Für $\Epsilon_i = 0$, d.h. $\underline{e} = \underline{0}$ sind die Gleichungen entkoppelt (trotz möglicher Anregung)

Für $\underline{e} \neq \underline{0}$ sind die Gleichungen gekoppelt.

$\Epsilon_i(\eta_1, \dots, \eta_n, \dot{\eta}\_1, \dots, \dot{\eta}\_n)$ allgemein gekoppelt

$\underline{\underline{G}}, \underline{\underline{N}}$ bewirken stets Kopplung - *siehe später in der Veranstaltung*

Wie muss $\underline{\underline{D}}$ aufgebaut sein, damit die Gleichungen weiterhin entkoppelt sind?

$$\underline{\underline{M}} \underline{\ddot{q}} + \underline{\underline{D}} \underline{\dot{q}} + \underline{\underline{K}} \underline{q} = \underline{f}(t)$$

$$\rightarrow \underline{\underline{\mu}} \underline{\ddot{\eta}} + \underline{\underline{\Phi^T}} \underline{\underline{D}} \underline{\underline{\Phi}} \underline{\dot{\eta}} + \underline{\underline{K}} \underline{\eta} = \underline{\underline{\Phi^T}} \underline{f}$$

<!-- mitschrieb 4 -->

**Modale Koordinaten sind verallgemeinerte Koordinaten mit der besonderen Eigenschaft, dass Massen- und Steifigkeitsmatrizen diagonal sind**\
Somit sind die modalen Koordinaten hinsichtlich der Trägheitskräfte und der elastischen Kräfte voneinander entkoppelt.\