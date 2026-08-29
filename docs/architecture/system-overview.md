# Emberfall System Architecture

## Overview

Emberfall is composed of three primary runtime layers:

1. Web Client
2. Game Core
3. Backend

## Web Client

Technologies:

- React
- TypeScript
- Vite
- Phaser

Responsibilities:

- Application UI
- Menus
- HUD
- Inventory interface
- Quest interface
- Game rendering
- Player input
- Audio
- Scenes
- Tilemaps

## Game Core

Technologies:

- C++
- WebAssembly
- Emscripten

Planned responsibilities:

- Combat calculations
- Pathfinding
- Procedural generation
- Selected AI algorithms
- Performance-sensitive game systems

The Game Core should remain independent from browser UI concerns.

## Backend

Technologies:

- Java
- Spring Boot
- Spring Security
- Spring Data JPA

Responsibilities:

- Authentication
- Player accounts
- Character persistence
- Save games
- Persistent inventory
- Quest state
- Achievements
- Rankings
- Server-side validation

## Database

Technology:

- PostgreSQL

The database will store persistent game and account state.

## Communication

The web client will initially communicate with the backend through HTTP APIs.

Future realtime requirements may introduce WebSockets.

## High-Level Architecture

```text
Browser
│
├── React
│
│   └── Application UI
│
├── Phaser
│   └── Game Runtime
│
└── WebAssembly
    └── C++ Game Core
         │
         │ HTTP / WebSocket
         ▼
     Spring Boot
         │
         ▼
     PostgreSQL