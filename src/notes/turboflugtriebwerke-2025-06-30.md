---
course: Turboflugtriebwerke
type: Starten von Triebwerken
by: Stephan Staudacher
date: 2025-06-30 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Air Turbine Starter

Angebracht am Geräteträger, treibt zu Beginn den Verdichter an, andere Geräte sind meist entkuppelt\
Nicht sehr effizienter Prozess in der APU, Groundcard macht Sinn, wenn Flieger längere Standzeiten hat

Was liefert die APU an das Flugzeug?

- Strom - Avionik
- Druckluft für Klimaanlage
- Bei Start Ventile zu Klimaanlage schließen, dafür zum Air Turbine Starter
- Triebwerke eins nach dem anderen starten (cross engine start)
- APU nicht mehr nötig sobald Triebwerke laufen

![flammengeschw](/src/bilder/turboflugtriebwerke_skizze_28.jpeg)
<figcaption>Der Triebwerksstart erfordert einen Überschuss an Drehmoment an der jeweiligen Welle</figcaption>

Erforderliches Drehmoment (*Zu Diagramm Folie 220*):

- Lagerverluste ($\propto N^2, f(T_{\text{öl}})$), dominieren bei niedrigen $N$
- Aerodynamische Verluste ($\propto N^2$), dominieren den größten Teil des Starts

![flammengeschw](/src/bilder/turboflugtriebwerke_skizze_29.jpeg)
<figcaption>Entscheidende Frage: *Woher findet man die Zünddrehzahl*</figcaption>

- Thermodynamischer Zyklus der $P_{\text{Turbine}}$ in einer Sinnhaften Größe sicherstellt

![flammengeschw](/src/bilder/turboflugtriebwerke_skizze_30.jpeg)
<figcaption>$T_{t4}$ muss groß genug sein</figcaption>

- $\dot{m}_{\text{Br}}$ muss groß genug sein
- $\eta_{\text{BK}}$ ?
  - Zerstäubung (ausreichend $\dot{m}$ und $T_{t3}$ nötig)
  - Verdampfung
  - Mischung
  - Reaktion

***Grafik auf Folie 220 sollten sie verstehen und erklären können***

Anwendung der Dimensionsanalyse ab hier in den Vorlesungsfolien