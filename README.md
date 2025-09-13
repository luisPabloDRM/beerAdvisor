🍺 BeerAdvisor

Plataforma web para descubrir, valorar y recomendar cervezas.
Construida con AdonisJS 6 (backend), Angular 18 (frontend) y MariaDB (base de datos en Docker).

📖 Tabla de contenidos

Características

Stack Tecnológico

Instalación

Uso

Estructura del Proyecto

Scripts disponibles

Pruebas

Contribución

Licencia

✨ Características

Registro e inicio de sesión de usuarios con JWT.

CRUD de cervezas (crear, listar, editar, borrar).

Sistema de valoraciones y comentarios por usuario.

Frontend responsivo con Angular + Tailwind.

Backend con AdonisJS y ORM Lucid.

Base de datos gestionada en Docker (MariaDB + phpMyAdmin).

🛠️ Stack Tecnológico

Frontend: Angular 18, RxJS, TailwindCSS

Backend: AdonisJS 6, Lucid ORM, VineJS

Base de datos: MariaDB (contenedor Docker)

Infraestructura: Docker & Docker Compose

Autenticación: JWT + middleware en AdonisJS

Testing: Japa (backend), Jasmine/Karma (frontend)

⚙️ Instalación
🔹 1. Clonar repositorio
git clone https://github.com/<tu-usuario>/beerAdvisor.git
cd beerAdvisor

🔹 2. Levantar contenedores con Docker
docker-compose up -d


Esto inicia:

MariaDB en localhost:3306

phpMyAdmin en localhost:8081

🔹 3. Configurar Backend (AdonisJS)
cd backend
cp .env.example .env
npm install
node ace migration:run
npm run dev

🔹 4. Configurar Frontend (Angular)
cd frontend
npm install
ng serve


Frontend disponible en http://localhost:4200

📂 Estructura del Proyecto
beerAdvisor/
│── backend/          # API en AdonisJS
│   ├── app/          # Modelos, controladores, middleware
│   ├── database/     # Migraciones y seeders
│   └── .env          # Configuración
│
│── frontend/         # Aplicación Angular
│   ├── src/app/      # Componentes, servicios, módulos
│   └── angular.json
│
│── docker-compose.yml # Configuración Docker

📜 Scripts disponibles
Backend
npm run dev       # Inicia API en modo desarrollo
node ace repl     # Consola interactiva AdonisJS
node ace test     # Ejecuta pruebas

Frontend
ng serve          # Servir en desarrollo
ng test           # Ejecutar pruebas unitarias
ng build          # Generar build para producción

🧪 Pruebas

Backend: pruebas unitarias con Japa (ejemplo: registro/login de usuario).

Frontend: pruebas unitarias con Jasmine/Karma (ejemplo: servicio de cervezas).

Ejecutar todas las pruebas:

# Backend
cd backend && node ace test

# Frontend
cd frontend && ng test

🤝 Contribución

Haz un fork del proyecto

Crea tu rama de feature: git checkout -b feature/nueva-feature

Haz commit: git commit -m 'Añade nueva feature'

Haz push: git push origin feature/nueva-feature

Crea un Pull Request

📄 Licencia

Este proyecto está bajo la licencia MIT. 

                ┌───────────────────┐
                │     Frontend      │
                │   Angular 18 +    │
                │   TailwindCSS     │
                └─────────┬─────────┘
                          │ HTTP (REST API)
                          │
                ┌─────────▼─────────┐
                │     Backend       │
                │   AdonisJS 6      │
                │ (Lucid ORM, JWT)  │
                └─────────┬─────────┘
                          │ SQL
                          │
                ┌─────────▼─────────┐
                │     Database      │
                │    MariaDB 11     │
                │ (Docker container)│
                └─────────┬─────────┘
                          │
                ┌─────────▼─────────┐
                │   phpMyAdmin UI   │
                │  (gestión DB)     │
                └───────────────────┘
