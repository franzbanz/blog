---
course: Messverfahren des Wärmetransports
type: Temperaturmessung 0D/1D
by: Rico Poser
date: 2025-11-28 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

**Seebeck-Effekt**: In einem Stromkreis aus zwei verschiedenen Materialien bei einer Temperaturdifferenz zwischen den Kontaktstellen entsteht eine elektrische Spannung.

**Peltier-Effekt**: Gegenüber dem Seebeck-Effekt umgekehrte Verhältnisse, elektrischer Strom bewirkt einen Wärmetransport.

**Thomson-Effekt**: Kontinuierlicher Peltier-Effekt. häufig aber so schwach, dass er vernachlässigt werden kann

![](/src/bilder/messverfahren_image_23.png)
<figcaption>(Sehr kleine aber messbare) Spannung kann durch den Seebeck-Effekt gemessen werden</figcaption>

![](/src/bilder/messverfahren_image_24.png)
<figcaption>Quelle [PPH05] im Skript / in den Folien soll sehr gut zur Erklärung der Thermospannungen sein</figcaption>

## Mantel-Thermoelemente - Messspitzentypen

- Geerdet
    - Eigenen sich für die Messung von ruhenden und fließenden Medien wie Gase oder Flüssigkeiten
    - Eignen sich auch für korrosive Umgebung und hihe Drücke
- Offenliegend
    - Eignen sich für ruhende oder strömende nicht-korrisive Gase, wenn schnelle Ansprechzeit gefordert ist
- Nicht geerdet
    - Eignen sich für Messungen in korrosiven Umgebungen
    - Thermoelement ist vom Mantel durch Magnesiumoxid isoliert

**Folie 78** bis **Folie 83** für Diagramme der Thermoelement Messung (RTD-Kompensation)

Problem: Materialübergänge von Messaufbau zu Messgerät verfälscht das Ergebnis, also entweder gleiches Material wie im Messgerät verwenden
oder die Temperatur beider Messgerätanbindungen muss gleich sein - ist so bei teuren Messgeräten

Alternative: *Elektronische Kompensation*

Isothermer Bereich mit besonders gut leitfähiger Wand mit zusätzlicher Temperaturmessung im Bereich mit vier-draht-rtd (komplett anderes Messprinzip)\
Messgerät kann gemessene Spannung in der Vergleichsstelle bei bekannter Temperatur herausrechnen

## Messungen an Oberflächen

Infrarot Kameras im Bereich von 3-5 $\mu m$ und 8 bis 14 $\mu m$, um atmosphärische Effekte auf bestimmte Infrarot Wellenlängen zu minimieren

