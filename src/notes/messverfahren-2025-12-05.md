---
course: Messverfahren des Wärmetransports
type: Temperaturmessung 2D
by: Rico Poser
date: 2025-12-05 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: true
---

## Kameraklassifizierung nach Abtastverfahren

// Skizzen von Folie 102 abzeichnen

## Mikribolometer

Auf basis eines Wiederstandsthermometers - Wiederstand hängt von Temperatur eines Metallplättchens ab\
Wird für günstige / mittlere Infrarotkameras benutzt, robust, einfach

Empfindlichkeitsbereiche üblicher Detektor-Materialien (in Quanten-basierten Infrarot Kameras)\
HgCdTe wird sehr häufig benutzt, muss aber sehr niedrig gekühlt werden

### Detektor Kühlverfahren

// Skizze von Folie 105
- Kühlflüssigkeit
- Stapel von Petier-Elementen
- Kleine Sterling Motoren (Weil sie können beliebige Wärmequellen benutzen)

Wellenlängenbereich 1 - 14 $\mu m$

## Temperaturanzeigende Farbbeschichtungen

- Thermalfarben (TP)
    - Irreversibel: Kann nur die maximaltemperatur messen
    - Sind in sehr großem Temperaturbereich anwendbar
    - Regenbogen-Methode um die Genauigkeit zu erhöhen:
        - Mehere Farben gleichzeitig
        - Die überlappenden Farbbereiche erzeugen ein sehr schmales Temperaturband
        - Genauer als die einzelnen Farben
- Temperatursensitive Farben (TSP)
    - *Im-dunkel-leucht-Farben*
    - Emission ist immer im Gegensatz zum absorbierten Licht in Richtung größerer Wellenlängen verschoben
    - Nur Licht von einer bestimmten Wellenlänge (meistens blau) wird absorbiert
    - Quelle [LS05] darüber ist sehr umfangreich
    - Fluoreszenz passiert sofort nach der Absorbtion, Phosphoreszenz mit längerer Verzögerung
    - (Sauerstoff) Quenching kann durch Sauerstoffmoleküle in der Farbe passieren, welche die Farbe dunkler werden lassen (Kann durch Beschichtung verhindert werden und ist reversibel)
- Thermochromatische Flüssigkristalle (TLC)
    - Optisch aktive Mischungen organischer Chemikalien
    - Abhängigkeiten: Temperatur, Schubspannungen, Druck, elektrische Felder, magnetische Felder
    - Schubspannungs- und Druckeffektunterdrückung mit mikroverkapselten TLCs
    - Hysterese: Kurve des Erwärmens und des Abkühlens nicht zwingend gleich
    - Weitere Sensitivität: Sprektren, Alterung, Schichtdicke, Winkel

### Digitalisierung

Farbspektrometer anstelle vom menschlichen Auge oder einer Kamera für sichtbares Licht um Wellenlänge der Farbe feststellen zu können\
Neue Idee: Nur mit einer bestimmten Wellenlänge beleuchten, lEDs werden über PWM gedimmt, kann dann mit normaler Kamera gefilmt werden\
Auswertung erfolgt mit künstlichen neuronalen Netzen: Eingang sind Reflexionsgradmessungen bei mehreren 22verschiedenen Wellenlängen
