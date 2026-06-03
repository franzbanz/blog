---
course: Optische Strömungsmesstechnik
type: Teil 7
by: Markus Leitner
date: 2026-06-03 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Anwendung der Laser-Doppler-Velocimetry

Letzte Vorlesung war über Aufbau und Funktion von LDV, diese Vorlesung über speziellere Anwendungen

### Anordnung dreidimensionaler Zweistrahl-LDV-Systeme

Genauste Messungen erfordern eine senkrechte Anordnung der drei optischen Achsen. Der Geschwindigkeitsvektor kann auch durch Transformation ermittelt werden, wenn die LDV Systeme nicht senkrecht ausgerichtet sind, dann jedoch in diesen Achsen mit geringerer Präzidsion

### Besonderheiten der LDV in Flüssigkeiten

Strahlengang verändert sich beim Eintritt in die Flüssigkeit nach dem Brechungsgesetz:

$$
sin(\theta / 2) = \eta_F sin(\theta^* / 2)
$$

![](/src/bilder/stroemungsmesstechnik_image_8.png)
<figcaption>Veränderung des Strahlengangs beim Eintritt in die Flüssigkeit bei senkrechter Anordnung der optischen Achse</figcaption>

Bei **verändertem Schnittwinkel und Wellenlänge** ändert sich der Interferenzstreifenabstand $\Delta x$ **nicht**. Schnittwinkel- und Wellenlängenänderungen gleichen sich genau aus

Es findet nur eine Verschiebung des Messvolumens um $\Delta F$ bzw. $\Delta F + \Delta G$ statt (**Folie 9, 10**)

Bei nicht senkrechter Anordnung der optischen Achse kommt es zu einer fehlerhaften Überlagerung der Laserstrahlen (Siehe **Folie 12**) und dadurch zu ungleichmäßigem Interferenzmuster und Form des Messvolumens - Messung kann nicht durchgeführt werden


![](/src/bilder/stroemungsmesstechnik_image_9.png)
<figcaption>Strahlverbreiterung beim Eintritt in die Flüssigkeit bei senkrechter Anordnung der optischen Achse</figcaption>

### Anwendung eines 3D LDV-Systems zur Untersuchung der Strömung in statischen Mischelementen

- Es existieren unterschiedliche Möglichkeiten ein 3D-LDV-System aufzubauen
- Der Einsatz der LDV in Flüssigkeiten hat Auswirkungen auf die Messung. Es ändert sich z.B. in der Flüssigkeit der Strahlengang und die Position und Größe des Messvolumens
- Der sich zeitlich ändernde Geschwindigkeitsvektor in einem Punkt des Geschwindigkeitsfeldes wird direkt gemessen
- Um ein ganzes Geschwindigkeitsfeld zu erfassen, müssen die Öaserstrahlenpaare natürlich für jeden zu erfassenden Messpunkt stets neu positioniert werden
- Beis stationärer Strömung kann das komplette Geschwindigkeitsfeld miz der 3D-LDV erfasst werden
