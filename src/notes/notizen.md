---
course: Organisation
type: Notizen
by: Franzo Banzo
date: 2025-04-24 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: false
---

## ILS

- ContainerDetector should inherit PortDetector
- Testcases um OCR zu verifizieren und Rest der Pipeline solider zu machen / optimieren
- Reduce hardcoded templates

- AWS bug: test5, test6, and test7 detect no text at all. However, test8 runs perfectly.

- Spezifikation was supported wird
  - Mit Hilfe von Testcases
  - Grenzen innerhalb von Functions / Hardware
  - .md / .pwpt
- (kurz reinschauen in testcases automatisch generieren)

- Testcases
  - Pytest
    - interface / integration
    - Testdatensatz mit jeweils Screenshot und Ground Truth
    - Von Anfang an mit .OAAM Datei, auch wenn sie für die Test noch ncht benötigt werden
    - Und auch mit .Layout Datei
  - Erstmal nur tokenization testcases implementieren
  - Groundtruth fürs erste nur Anzahl der gefundenen Fehler
  - Eines Tages Requirement-based log mapping

- In Gitlab Requirements digitalisieren

- Update auf XGEE **0.3.17**, danach dann auf **0.4**:
  - paket xgee updaten
  - example application neuen stand der editoren holen

- **Präsentation für Diehl Aerospace**:
  - Coole Fälle - capabilities zeigen
  - "Best of" aus der Bachelorarbeit

## Coole Dinge

- logseq (coole note software) testen
- Manjaro testen
- Endeavor OS testen

## Kurse

- Entwicklungsprozesse für Luftfahrt - Matthias Lehmann
