# Till Failure Backend

Production-style Express + TypeScript + PostgreSQL backend for the Till Failure gym management app.

## Stack

- Node.js + Express + TypeScript
- PostgreSQL on Neon
- Prisma ORM
- JWT access tokens + refresh tokens
- bcrypt password hashing
- Zod request validation
- RBAC roles: ADMIN, TRAINER, RECEPTIONIST, MEMBER

## Setup

1. Create backend/.env from backend/.env.example.
2. Set DATABASE_URL to your Neon connection string.
3. Use long random values for JWT_SECRET and REFRESH_TOKEN_SECRET.
4. Install and migrate:

    cd backend
    npm install
    npx prisma migrate dev --name init
    npm run db:seed
    npm run dev

Default admin:

- Email: admin@tillfailure.com
- Password: Admin@123

## Render Deployment

Set the Render service root directory to backend.

Build command:

    npm install && npm run build

Start command:

    npm start

The required production hook is already in package.json:

    "postinstall": "prisma generate && prisma migrate deploy && tsx prisma/seed.ts"

Render environment variables:

- DATABASE_URL
- JWT_SECRET
- REFRESH_TOKEN_SECRET
- CLIENT_URL
- NODE_ENV=production

## Neon Setup

1. Create a Neon project.
2. Copy the pooled PostgreSQL connection string.
3. Add ?sslmode=require if Neon has not already included it.
4. Paste it into Render as DATABASE_URL.
5. Deploy. Render will run Prisma generate, migrations, and seed during install.

## API Response Shape

Success:

    { "success": true, "data": {} }

Error:

    { "success": false, "error": { "message": "Validation failed", "details": [] } }

## Postman Examples

Base URL locally: http://localhost:4000/api

### Health

GET /health

### Login

POST /auth/login

    {
      "email": "admin@tillfailure.com",
      "password": "Admin@123"
    }

Use data.tokens.accessToken as:

    Authorization: Bearer ACCESS_TOKEN

### Refresh

POST /auth/refresh

    {
      "refreshToken": "REFRESH_TOKEN"
    }

### Public Trainers

GET /trainers

### Public Memberships

GET /memberships

### Admin Add Trainer

POST /admin/trainers

    {
      "fullName": "Nina Stone",
      "email": "nina@tillfailure.com",
      "password": "Trainer@123",
      "specialty": "Calisthenics",
      "experience": "7 Years",
      "schedule": { "Tuesday": ["08:00", "18:00"] },
      "bio": "Strength skill and bodyweight performance coach."
    }

### Admin Create Appointment

Always send database UUIDs, never slugs/public IDs:

POST /admin/appointments

    {
      "memberId": "00000000-0000-0000-0000-000000000000",
      "trainerId": "00000000-0000-0000-0000-000000000000",
      "scheduledDate": "2026-06-01T10:00:00.000Z",
      "status": "CONFIRMED",
      "notes": "Initial strength assessment"
    }

### Trainer Complete Appointment

PATCH /trainer/appointments/:id/complete

    {
      "notes": "Session completed."
    }

## UUID Safety

All relational writes require database UUID fields such as memberId, trainerId, and appointment id.
Every API response includes both id and publicId where applicable. publicId is for display, URLs, and human-readable references only.
