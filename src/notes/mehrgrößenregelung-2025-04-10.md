---
course: Mehrgrößenregelung
type: Vorlesung
by: Torbjorn Cunis
date: 2025-04-10 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Organisation

Übung freitags 14:00-15:30\
Vorwissen:

- Lineare Algebra
- Komplexe Zahlen
- Lineare Differentialgleichungen

Prüfung:

- Abfragen des Vorlesungsstoffs
- Wissen (Zusammenhänge, Theoreme, Normalformen)
- Anwendung (Umformungen, Eigenschaften, Auslegung einfacher Regler)
- Transfer
- **Probeklausur** ca. Mitte Juni

## Grundlagen
### Zustandsraumdarstellung / -modell (ZRD)

Beispiel für ein Eingrößensystem: Gefesselter Wagen\
<!-- Skizze aus Vorlesung hier FEHLT -->
**Impulssatz**:
$$m \ddot{y} = f - d \dot{y} - k y$$
bzw.
$$\ddot{y} + \frac{d}{m} \dot{y} +\frac{k}{m} y = \frac{1}{m} f$$
Neue Variablen: $x_1 = y, x_2 = \dot{y}, u = f$\
$$\dot{x_1} = x_2$$
$$\dot{x_2} = -\frac{k}{m} x_1 - \frac{d}{m} x_2 + \frac{1}{m} u$$
Matrizen- bzw. Vektorschreibweise x = $(x_1, x_2)$
<!-- Aus Mitschrieb übertragen FEHLT -->

Beispiel für ein Mehrgrößensystem: Torsionsschwinger
<!-- Skizze azs Mitschrieb FEHLT -->
**Drallsatz**:
$$I \ddot{\phi_1} = c(u_1 - \phi_1) + c(\phi_2 - \phi_1)$$
$$I \ddot{\phi_2} = c(\phi_1 - \phi_2) + c(\phi_3 - \phi_2)$$
$$I \phi_3 = c(\phi_2 - \phi_3) + c(u_2 - \phi_3)$$
Neue Variablen: $x_1 = \phi_1, x_2 = \dot{\phi_1}, x_3 = \phi_2, x_4 = \dot{\phi_2}, x_5 = \phi_3, x_6 = \dot{\phi_3}$\
Ausgänge: $y_1 = \phi_1, y_2 = \phi_3, a = 2 \frac{c}{I}$
<!-- Matrixschreibweise siehe Mitschrieb FEHLT -->

### Konzepte der Zustandsraumdarstellung

Allgemeine Form:
$$\dot{x} = A x + B u, x(0) = x_0$$
$$y = c x + D u$$
Begriffe:\
$x \epsilon \mathbb{R}^n$ - Zustand(svektor), $n \epsilon \mathbb{N}$\
$u \epsilon \mathbb{R}^n$ - Eingang(svektor), $m \epsilon \mathbb{N}$\
$y \epsilon \mathbb{R}^n$ - Ausgang(svektor), $r \epsilon \mathbb{N}$\
$y \epsilon \mathbb{R}^{n\times n}$ - Systemmatrix\
$B \epsilon \mathbb{R}^{n\times m}$ - Eingangs- / Steuermatrix\
$C \epsilon \mathbb{R}^{r\times n}$ - Beobachtungs- / Ausgangsmatrix\
$D \epsilon \mathbb{R}^{r\times m}$ - Durchgangsmatrix

Definition: System ist sprungfähig, g.d.w. $D \neq 0$\
$A, B, D, D$ sind **Konstant** - lineares, zeitinvariantes System\
Trajektorie: zeitlicher Verlauf $x:R_{\geqq 0} -> \mathbb{R}^n$ als Lösung des Anfangswertproblems durch $A, B, C, D x_0 \epsilon \mathbb{R}^n, u(-)$ gegeben

### Ausblick

- Stabilität: für alle $||x(t)|| <= b -> 0$ für $||x_0|| -> 0$
- Asymptotische Stabilität: $\lim{t->\inf}{||x(t)|| = 0}$ für alle $x_0 \epsilon \mathbb{R}^n$
- Zustand ist uneindeutig