---
course: Messverfahren des Wärmetransports
type: Temperaturmessung 0D, 1D
by: Rico Poser
date: 2025-11-21 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

*Letztes Mal: Etwas von den Wiederstandsthermometern angefangen, noch nacharbeiten*

## Wiederstandsthermometer (RTDs)

- Elektrischer Stromkreis durch das zu messende Medium
- Diagramm der verschiedenen Bauformen von Platin-Wiederstandsthermometern auf **Folie 63**

Genauigkeitsklassen für RTDs

| Klasse | Gültigkeitsbereich (°C) – Drahtgewickelte Widerstände | Gültigkeitsbereich (°C) – Schichtwiderstände | Grenzabweichung (°C) |
|--------|--------------------------------------------------------|-----------------------------------------------|------------------------|
| AA     | $-50 \text{ bis } +250$                                | $0 \text{ bis } +150$                         | $\pm(0.1 + 0.0017\|t\|)$ |
| A      | $-100 \text{ bis } +450$                               | $-30 \text{ bis } +300$                       | $\pm(0.15 + 0.002\|t\|)$ |
| B      | $-196 \text{ bis } +600$                               | $-50 \text{ bis } +500$                       | $\pm(0.3 + 0.005\|t\|)$  |
| C      | $-196 \text{ bis } +600$                               | $-50 \text{ bis } +600$                       | $\pm(0.6 + 0.01\|t\|)$   |

*Hinweis:* $|t| = \text{Betrag der Temperatur in °C ohne Vorzeichen.}$

**Metall wiederstandsthermometer**: Kennlinie hängt sehr stark vom Material ab

- Keine logarithmische Darstellung im Diagramm
- Einer der genausten Temperatursensoren (Weil sehr reiner Stoff verwendet wird, sehr vorhersehbar und reproduzierbar)

**Halbleiter-Wiederstandsthermometer** (Thermistoren): Materialien können frei kombiniert werden

- Logarithmische Darstellung im Diagramm, Wiederstand steigt bei bestimmten Temperaturen plötzlich stark an, kann als Schalter angewendet werden
- Jeder Thermistor mit eigener Kennlinie

## Grundschaltungen für RTDs (Diagramme Folie 65)

Nur linker Teil der Diagramme wird als Sensor gekauft, der rechte Teil ist das eigene Messgerät

- 2-Draht-Schaltung
    - Drei bekannte Temperatur unabhängige Wiederstände und eine Messbrücke zur Messung des Potentialunterschieds ermöglichen die sehr genaue Bestimmung des letzten Mess - Wiederstandes

- 4-Draht-Schaltung
    - Wiederstände um eigenwiederstände der Messleitungen anzuzeigen
    - Kompensation der Eigenwiederstände über zwei zusätzliche Drähte
    - Mehr Anschlüsse nötig, aber dafür viel genauer

## Hitzdraht-Anemometrie

Zur punktuellen Messung von zeitlichen Geschwindigkeits. und Temperaturfluktuationen in turbulenten Strömungen (1D, 2D, 3D)

- Drei sehr dünne, orthogonal ausgerichtete Drähte werden erwärmt, bei einer Umströmung mit einem kühleren Medium werden sie je nach Ausrichtung unterschiedlich stark gekühlt, daran lässt sich die Strömungsrichtung erkennen
- Nur für Modellbereich gedacht
- Sehr aufwändig, wird nur für spezielle Turbulente, hochfrequente Messungen in Wandnähe genutzt

![](/src/bilder/messverfahren_image_22.png)
<figcaption><a href="https://commons.wikimedia.org/wiki/File:Hd_sonde.jpg">Original Datei</a></figcaption>

- Draht wird gegenüber der Strömung elektrisch aufgeheizt
- Konvektive Kühlung der SOnde $\rightarrow$ Wiederstandsänderung

### Energiebilanz für stationäre Strömungen

$$
R_w I_w^2 = (T_w - T_a) \Phi_{\text{conv}}(u)
$$

$w \equiv$ wire, also den Draht (sehr dünn, hat kein Temperaturprofil)\
$T_w \equiv$ beheizter Draht, 
$a \equiv$ ambient, also die Umgebung
$T_a \equiv$ unbeheizter Draht

### Energiebilanz für instationäre Strömung

$$
m_w c_w \frac{dT_w}{dt} = R_w I_w^2 - (T_w - T_a) \Phi_{\text{conv}}(u)
$$

### Überhitzungsverhältnis

$$
a_w \stackrel{def}{=} \frac{R_w - R_a}{R_a}
$$

In Praxis: $a_w \approx 0,05 ... 1$ für Luft

$$
R_w = R_0 [1 + \alpha (T_w - T_0=)]
$$

$$
R_a = R_0 [1 + \alpha (T_a - T_0=)]
$$

$$
\frac{T_w-T_a}{T_a} = a_w \frac{1 + \alpha (T_a - T_0)}{\alpha T_a}
$$

### Verharen / Betriebsarten

- **CCA**: constant current anemometry
    - Konstanter elektrischer Strom, einfachstes Prinzip
    - Schlechteste Frequenzauflösung
    - Draht altert durch Temperaturschwankungen schnell
    - $M_w^{CCA} = (1 + \overline{a\_w}) \frac{d^2}{4} \frac{\rho_w c_w}{k_a} \frac{1}{Nu_a}$
        - $M_w^{CCA} \equiv$ (Zeitkonstante)
        - $\overline{a\_w} \approx 0,8$ ist empfohlen
- **CTA**: constant temperature anemometry
    - Sehr schnelle *Regelung* und Umsetzung im Messgerät (Aufwändig)
        - Draht ist im Mittel auf konstanter Temperatur
        - Kompensation der Thermischen Trägheit
        - **Weiter Frequenzbereich**
    - $M_w^{CTA} = \frac{M_w^{CCA}}{1 + 2 G \overline{a\_w} \frac{\overline{R\_w}}{\overline{R\_w} + R_1} \frac{R_2}{R_2 + R_3}}$
        - $G \approx 1000$ elektrischer Verstärkungsfaktor
        - $\overline{a\_w} \approx 0,8$
- **CVA**: constant voltage anemometry
    - Konstante Spannung
    - Nicht sehr weit verbreitet
    - $M_w^{CVA} = \frac{M_w^{CCA}}{1 + 2 \overline{a\_w}}$
        - $\overline{a\_w} \approx 0,8$
$\rightarrow$ Unterschiedliche Behandlung der thermischen Trägheit

## Thermoelemente

**Thermoelektrische Effekte**: *Thermodiffusionsstrom* fließt in einem Material, wenn die Ladungen in einem Draht sich bei der Erwärmung einmalig verschieben um in ein neues Potential zu kommen\
Siehe Skizze und Erklärung im **Skript auf Seite 72**

