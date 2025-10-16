---
course: Domain-Specific Modeling and Analysis
type: Vorlesung
by: Björn Annighöfer, Andreas Waldvogel
date: 2025-10-16 # (YYYY-MM-DD)
tags: notes
layout: note
includesMath: false
---

## Organization

- Project: maybe start after the second hands-on (20.11.25)
    - Groups of max. two people
    - 50% of mark
    - Short oral exam for other 50%
    - Three parts:
        - Modeling: create own dsm, purely discrete states
        - Transformation: execute state machine and store execution history in model
        - Visualization: diagram view of state machine
- Oral Exam:
    - questions to project work and general lecture content
- Hands on: set up Eclipse and or Python IDE, see Email from ILS

## Intro

A domain-specific problem: IMA configuration: A distributed computing platform for the aircraft systems sharing computer resources among system functions safety.\
Challenge: millions of parameters needed putting modules into operation depending on the module type and position.

ILS is working on how to connect different domain specific models and enable collaborative engineering tasks, where the finished product are the verified parameters.

Goals: efficiency, automation, visualization, ambiguity reduction

## Object-oriented thinking

- Model-based: models are used offline to specify, investigate, simulate or improve systems, architecture and behaviour
- Model-driven: models are used online to derive implementations, tests or behaviour - Model is essential for end product

## Object-oriented programming

- Object
    - real world object representation
    - used like variable, contains more information
- Class
    - blueprint for creating objects
- Instantiation
    - creation of objects from class definitions
- Member variable
    - variables that belong to object
    - can be basic data types or objects
- Method
    - functions that work only for the object type
    - affect member variables like local variables
- Inheritance
    - often objects have similar properties
    - inheritance allows extended reuse of class definitions
    - a class can inherit all members of a super class
- Interfaces and Abstract Classes
    - class definitions that can not be instantiated
    - interface has no implementation
    - abstract classes can have implementations
- Polymorphism
    - objects can inherit the same interface, but implement it differently
- Dynamic binding
    - objects inheriting the same class or interface can be handled equally
    - methods behaviour is resolved during run-time
- Overwriting
    - already implemented methods or attributes can be overwritten
- Enumeration
    - cutomized data types with only a discrete number of options
    - setting values other than the specified one is not possible
- Class nesting
    - a class definition may hold another local class definition
    - *"an aircraft has doors but not the other way around."*
- Lambda Expressions and Generators
    - short form of anonymous function
    - function name, and other details can be ommitted

Alarm: self testing questions at the beginning of next lecture!

