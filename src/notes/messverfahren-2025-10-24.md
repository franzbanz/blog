---
course: Messverfahren des Wärmetransports
type: Wärmestrahlung, Wärmeleitung
by: Rico Poser
date: 2025-10-24 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Nomenklatur

$h, [\frac{W}{m^2K}]$ - Wärmeübergangskoeffizient\
$k, [\frac{W}{mK}]$ - Wärmeleitfähigkeit\
$T, [K]$ - Temperatur\
$\Theta, [K]$ - Temperatur\
$\dot{Q}, [W]$ - Wärmestrom\
$\dot{q}, []$ - spez. Wärmestrom, gibt es auch in längenspezifisch, flächenspezifisch, volumenspezifisch

## Grundlagen des Wärmetransports

- Wärmestrahlung
- Wärmeleitung
- Wärmeübertragung durch Konvektion

### Wärmestrahlung

- Benötigt kein Medium
- Emissionsgrad $\varepsilon$,Reflektionsgrad $\rho$, Absorptionsgrad $\alpha$, (irgendwas) $\tau$
    * $\varepsilon = \alpha$
    * Schwarzer / grauer / selektiver Strahler
- Wichtige Strahlungsgesetze
    * Placksches Strahlungsgesetz
    * Stefan-Boltzmann-Gesetz
    * Wiensches Verschiebungsgesetz

#### Placksches Strahlungsgesetz

$$
M_\lambda(\lambda, T) = \frac{c_1}{\lambda^5}\frac{1}{exp(\frac{c_2}{\lambda T})-1}
$$

- $M_\lambda$ - Spektrale spezifische Ausstrahlung
- $c_1 = 2 \pi h_p c^2 = 3,74177153(17) \cdot 10^{16}Wm^2$
- $c_2 = \frac{k_p c}{k_B} = 1,4387770(13) \cdot 10^{-2}mK$

#### Näherungslösungen

Für kleine Werte von $\lambda T$\
$\rightarrow exp(\frac{c_2}{\lambda T}) - 1 \approx exp(\frac{c_2}{\lambda T})$

Ergibt sich das **Wiensche Strahlungsgesetz**
$$
M_{\lambda}(\lambda, T) \approx \frac{c_1}{\lambda^5} \frac{1}{exp(\frac{c_2}{\lambda T})}
$$
Für große $\lambda T$ und kleine x ergibt sich folgendes: $exp(x) \approx 1+x$\
Für $\lambda T \rightarrow \infty$ ergibt sich das **Rayleigh-Jeans-Gesetz**
$$
M_\lambda(\lambda, T) \approx \frac{c_1 T}{c_2 \lambda^4}
$$

#### Stefan-Boltzmann-Gesetz

\\ hier vielleicht ein \align ?

$$
M(T) = \int_0^\infty M_\lambda(\lambda, T) d\lambda
$$
$$
M(T) = \sigma_{SB}T^4
$$
$$
\sigma_{SB} = \frac{2 \pi^5 k_B^4}{15 h_p^3 c^2} = 5,670373(21) \cdot 10^{-8} \frac{W}{m^2K^4}
$$

// Beispiel von Vorlesungsfoto

#### Wiensches Verschiebungsgesetz

Aus erster Ableitung des Planckschen Strahlungsgesetzes

$\rightarrow \lambda_{max} = \frac{b}{T}$\
mit $b = \frac{c_2}{\xi} = 2,8977721 \cdot 10^{-3} mK$ - Wiensche Verschiebungskonstante\
$\xi = 5[1-exp(-\xi)] \approx 4,96511$

### Wärmeleitung

Benötigt ein Medium

**Mikroskopische** vs **Makroskopische** Betrachtung

- Makroskopische Betrachtung
    * Fourierscher Erfahrungssatz
    * Fouriersche Wärmeleitungsgleichung
- Mikroskopische Betrachtung
    * Wiedemann-Franz-Gesetz

#### Wiedemann-Franz-Gesetz 1853

Es gibt einen Zusammenhang zwischen Wärmeleitfähigkeit und Elektischer Leitfähigkeit

$$
\frac{k}{\sigma} = L T
$$

$k$ - Wärmeleitfähigkeit\
$\sigma$ - elektrische Leitfähigkeit
$L$ - Lorenzzahl (Proportionalitätsfaktor)

Experimente zeigten, dass für fast alle reinen Metalle $L = 2,4 \cdot 10^{-8} \frac{W\Omega}{K^2} \pm 10 \%$ ungefär gleich groß ist\
Um 1900 Drude-Modell, um $L$ zu beschreiben:
$$
L = \frac{3}{2}(\frac{k_B}{e})^2 = 1,11 \cdot 10^{-8} \frac{W \Omega}{K^2}
$$
um 1933 erweiterung des Modells zur Drude-Sommerfeld-Theorie
$$
L = \frac{\pi^2}{3}(\frac{k_B}{e})^2 = 2,44 \cdot 10^{-8} \frac{W \Omega}{K^2}
$$
Smith-Palmer-Korrelation
$$
k = L \sigma T + c
$$
$L \sigma T$ - Beitrag der freien Elektronen\
$c$ - Beitrag der Schwingungen des Atom-Gitters

### Fourierscher Erfahrungssatz 1822

(Eigentlich ein Vektorpfeil über dem $\dot{q})
$$
\dot{q}_A = - k \nabla T
$$
Vereinfachungen: nur 1D Betrachtung
$$
\dot{q}_A = -k \frac{dT}{dx}
$$
$$
\dot{Q} = -k A \frac{\Delta T}{\Delta x}
$$

