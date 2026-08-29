# ADR 0001: Use Java and Spring Boot for the Backend

## Status

Accepted

## Context

Emberfall is a browser-based RPG designed both as a game and as a
software engineering learning project.

The original architecture considered ASP.NET Core with C# for the backend.

However, C# is already being practiced separately through Unity,
while Emberfall is intended to expose the project to additional
technologies and backend engineering concepts.

The backend will be responsible for concerns such as:

- Authentication
- Player accounts
- Character persistence
- Save games
- Inventory persistence
- Quest progression
- Achievements
- Rankings
- World events
- Multiplayer or realtime features in future versions

## Decision

Java and Spring Boot will be used for the Emberfall backend.

The initial backend stack will consist of:

- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL

Additional infrastructure such as Redis or messaging systems will only
be introduced when a concrete requirement justifies them.

## Consequences

### Positive

- Provides practical experience with Java and the Spring ecosystem
- Expands the project's technology coverage
- Reinforces object-oriented programming concepts
- Allows comparison of Java, TypeScript and C++ architectures
- Provides experience with enterprise backend development

### Negative

- Adds another language and ecosystem to the project
- Increases the learning curve
- Requires discipline to avoid duplicating game logic between backend
  and client

## Game Architecture Responsibility

Phaser will remain responsible for browser game runtime concerns such as:

- Rendering
- Scenes
- Sprites
- Input
- Camera
- Audio
- Tilemaps

C++ compiled to WebAssembly will be used for selected game-core systems
where algorithmic or performance-oriented logic provides educational value.

Java will not replace Phaser or the C++ Game Core.

## Date

2026-08-29