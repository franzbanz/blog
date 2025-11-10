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

![](/src/bilder/messverfahren_image_12.png)
<figcaption>$T_{aw}$ schwierig zu bestimmen, weil immer wieder kleine Elemente erneut adiabat gesetzt werden müssen und dann die Rechnung für das neue Element neu durchgeführt werden muss</figcaption>

$T_{aw}$ entspricht der *Recovery Temperatur* $T_r$\
$T_t = T + \frac{u^2}{2 c_p}$\
$T_t = T(1 + \frac{\kappa - 1}{2} Ma^2)$\
$T_r = T + r \frac{u^2}{2 c_p}$\
$T_r = T (1+r \frac{\kappa - 1}{2} Ma^2)$

$r$ entspricht dem *Recovery Faktor*

![](/src/bilder/messverfahren_image_13.png)

![](/src/bilder/messverfahren_image_14.png)
<figcaption>$\rightarrow$ Die Adiabate Wandtemperatur ist eine geeignete Referenztemperatur</figcaption>

In der Praxis wird häufig etwas anderes gemacht:

### Bulk-Temperatur

- Massenstrom-gemittelte Temperatur eines Strömungsquerschnitts
- Gilt Formal am Umfang des Querschnitts

$$T_b = \frac{\int_A \rho u c_p T_f dA}{\int_A \rho u c_p dA}$$

![](/src/bilder/messverfahren_image_15.png)
<figcaption>Experimentell würde immer nur jeweils ein Thermoelement gleichzeitig verwendet werden, um so wenig interferenz wie möglich zu erzeugen (Ändderung der Strömung hinter dem Element)</figcaption>

### Centerline-Temperatur

- Lokale Temperatur im Flächenschwerpunkt eines Strömungsquerschnitts
- Messungen können auch mit zwei Thermo Elementen durchgeführt werden, um sicherzustellen, dass die Messungen korrekt sind

![](/src/bilder/messverfahren_image_16.png)

## Beispiele

![](/src/bilder/messverfahren_image_17.png)

![](/src/bilder/messverfahren_image_18.png)
<figcaption>$T_{ref} in der Nähe der Wand</figcaption>

![](/src/bilder/messverfahren_image_19.png)

