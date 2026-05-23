# Landing — NAIVA Austral

Este repositorio contiene la landing page pública del proyecto NAIVA Austral.

## Propósito

Landing institucional desarrollada con React 19 + Vite + Tailwind CSS.
Sirve como punto de entrada para usuarios interesados en conocer el producto.

## Estructura del proyecto

```
Landing/
├── src/          — Código fuente React
├── public/       — Assets estáticos
├── docs/         — Documentación interna (no se publica al repo)
├── Dockerfile
└── docker-compose.yml
```

## Stack

| Tecnología     | Versión |
|----------------|---------|
| Node.js        | 22      |
| React          | 19      |
| Vite           | 6+      |
| Tailwind CSS   | 4       |
| Axios          | 1+      |

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Desarrollo con Docker

```bash
docker compose up --build
# → http://localhost:3000
```

Los cambios en `src/` se reflejan automáticamente sin reiniciar el contenedor (HMR).
