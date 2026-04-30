---
course: Softwaretechnik
type: Einführung
by: Roland Weil
date: 2026-04-30 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: false
---

Inhalt dieser Vorlesung: **Folie 31 bis 70**

## Problem bei der Prozeduralen Programmierung

- Jeder hat Zugriff uf globale Variablen
- Nebeneffekte von Änderungen kaum zu überblicken
- Daher: Daten kapseln (Information hiding) - Implementierung komplexer Datenstrukturen soll in einem Modul verborgen werden

## Kohäsion und Kopplung

Kohäsion beschreibt, wie eng die in einer Routine verwendeten Anweisungen miteinander verbunden sind, Maß für den *inneren Zusammenhang der Anweisungen in einer Routine*

Kopplung bezeichnet die *Stärke der Verbindung zwischen zwei Routinen*

Ziel: Starke Kohäsion, lose Kopplung

## Objektorientiertes Programmieren

- Menschen sind mit dem Denken in Objekten vertraut
- Programmierer möchten Code schreiben den man verstehen und nachvollziehen kann

- Ein Objekt modelliert ein Ding oder Phänomen der realen Welt oder des Denkens und ist durch seinen Zusatand, seine Idendität und sein Verhalten charakterisiert
- Besitzt Zustand
- Reagiert mit definiertem Verhalten auf die Umgebung
- Kann ein oder mehrere andere Objekte kennen

- Eine Klasse beschreibt eine Menge von Objekten mit gemeinsamen Eigenschaften und ähnlichem Verhalten
- Definiert für eine Menge von Objekten mit gemeinsamer Struktur (Attribute), Verhalten (Operationen) und Beziehungen
- Eine Klasse enthält eine vollständige Beschreibung von
  - den einzelnen Datenelementen (attributen) eines Objekts
  - den Operationen, die da Objekt ausführen kann
  - der Art, wie die Attribute und Methoden angesprochen werden können

### Attribute

Sichtbarkeit

- **public** Sichtbar für alle anderen Klassen
- **protected** Sichtbar innerhalb der Klasse und in deren Unterklassen
- **provate** Sichtbar nur innerhalb der Klasse

Ohne explizite Angabe der Sichtbarkeit ist ein Attribut grundsätzlich innerhalb des gesamten pakets sichtbar (public)

### Konstruktor

Spezielle methodenähnliche Klassenstrukturen, die den Namen ihrer Klasse tragen und beim erzeugen von Objekten der Klasse über das Schlüsselwort *new* aufgerufen werden

### Klassenattribute

- Werden mit *static* gekennzeichnet
- Werte sind für alle Objekte einer Klasse gleich (*statisch*)
