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



