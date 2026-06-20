# Inkolo Connect

Inkolo Connect is a community platform built with:

* Angular (Frontend)
* Node.js + Express (Backend API)
* MariaDB/MySQL (Database)
* JWT Authentication

---

## Prerequisites

* Node.js 18+
* npm
* MariaDB/MySQL

---

## Installation

Install all dependencies:

```bash
npm run install:all
```

---

## Database Setup

Create the database and run the SQL scripts in order:

```text
backend/database/001_create_users.sql
backend/database/002_add_membership.sql
backend/database/003_create_service_subscriptions.sql
backend/database/004_create_service_applications.sql
backend/database/005_create_platform_tables.sql
backend/database/006_create_legal_acceptances.sql
```

Example:

```bash
mysql -u root -p your_database < backend/database/001_create_users.sql
```

---

## Environment Variables

Copy:

```text
backend/.env.example
```

to:

```text
backend/.env
```

Update the following values:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=inkolo_connect

JWT_SECRET=your_secret_key
ID_PEPPER=your_pepper_key
```

---

## Seed a Test User

```bash
npm --prefix backend run seed
```

Default ID Number:

```text
9001015009087
```

---

## Running the Application

### Start Backend

```bash
npm run start:backend
```

Backend URL:

```text
http://localhost:3000
```

Health Check:

```text
http://localhost:3000/api/health
```

---

### Start Frontend

```bash
npm run start:frontend
```

Frontend URL:

```text
http://localhost:4200
```

---

## Available Scripts

Install dependencies:

```bash
npm run install:all
```

Start backend:

```bash
npm run start:backend
```

Start frontend:

```bash
npm run start:frontend
```

Seed test user:

```bash
npm --prefix backend run seed
```

---

## Authentication API

### Login

```http
POST /api/auth/login
```

Request:

```json
{
  "idNumber": "9001015009087"
}
```

### Current User

```http
GET /api/auth/me
```

Header:

```text
Authorization: Bearer <token>
```

---

## Core Features

* User Authentication
* Membership Management
* Service Subscriptions
* Legal Acceptance Tracking
* Community Messaging
* Referrals
* Marketplace Listings
* Job Listings
* Wallet Services
* Church Communities

---

## Development URLs

Frontend:

```text
http://localhost:4200
```

Backend:

```text
http://localhost:3000
```

API Health:

```text
http://localhost:3000/api/health
```
