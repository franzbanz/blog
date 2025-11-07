---
course: Messverfahren des Wärmetransports
type: Referenztemperaturen
by: Rico Poser
date: 2025-11-07 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Drei übliche $T_{ref}$

- Adiabate Wandtemperatur
- Bulk-Temperatur
- Conterline-Temperatur

### Adiabate Wandtemperatur

- **lokale** Wandtemperatur für **lokal** angenommene adiabate Wand

// Skizze 1

$T_{aw}$ schwierig zu bestimmen, weil immer wieder kleine Elemente erneut adiabat gesetzt werden müssen und dann die Rechnung für das neue Element neu durchgeführt werden muss

$T_{aw}$ entspricht der *Recovery Temperatur* $T_r$\
$T_t = T + \frac{u^2}{2 c_p}$\
$T_t = T(1 + \frac{\kappa - 1}{2} Ma^2)$\
$T_r = T + r \frac{u^2}{2 c_p}$\
$T_r = T (1+r \frac{\kappa - 1}{2} Ma^2)$

$r$ entspricht dem *Recovery Faktor*

// Skizze 2

// Tabelle 3

$\rightarrow$ Die Adiabate Wandtemperatur ist eine geeignete Referenztemperatur

In der Praxis wird häufig etwas anderes gemacht:

### Bulk-Temperatur

- Massenstrom-gemittelte Temperatur eines Strömungsquerschnitts
- Gilt Formal am Umfang des Querschnitts

$$T_b = \frac{\int_A \rho u c_p T_f dA}{\int_A \rho u c_p dA}$$

//skizze 4

Experimentell würde immer nur jeweils ein Thermoelement gleichzeitig verwendet werden, um so wenig interferenz wie möglich zu erzeugen (Ändderung der Strömung hinter dem Element)

### Centerline-Temperatur

- Lokale Temperatur im Flächenschwerpunkt eines Strömungsquerschnitts
- Messungen können auch mit zwei Thermo Elementen durchgeführt werden, um sicherzustellen, dass die Messungen korrekt sind

// Skizze 5
//Skizze 6

## Beispiele

// Skizze 7
// Skizze 8
// Skizze 9

## Vorgriff auf nächstes Thema: Ähnlichkeit bei Modellversuchen

![](/src/bilder/messverfahren_image_9.png)
<figcaption>Alle Dimensionslöse Größen bleiben gleich: "Vollständige Modellähnlichkeit"</figcaption>

