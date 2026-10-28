# Product & Employee Management API

**Student Name:** Md Abu Saieed
**Student ID:** 23-54744-3
**Section:** B

## Project Overview

This is a NestJS REST API built for Lab Task 1. It uses TypeORM and PostgreSQL to manage Products and Employees. It implements full CRUD (Create, Read, Update, Delete) operations and uses TypeORM Migrations to handle the database schema.

## Tech Stack

- **Framework:** NestJS
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **Validation:** class-validator, class-transformer

## Database Setup

1. Create a PostgreSQL database named `product_management`.
2. Copy the `.env.example` file to `.env` and fill in your PostgreSQL credentials:

   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=your_password
   DB_NAME=product_management
   PORT=5000
   ```

## Installation & Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the database migrations to create the tables:

   ```bash
   pnpm run migration:run
   ```

3. Start the development server:

   ```bash
   pnpm run start:dev
   ```

The API will be running at `http://localhost:5000`.

## API Endpoints

### Products

| Method | Endpoint        | Description               |
| ------ | --------------- | ------------------------- |
| POST   | `/products`     | Create a new product      |
| GET    | `/products`     | Get all products          |
| GET    | `/products/:id` | Get a product by ID       |
| PATCH  | `/products/:id` | Update a product by ID    |
| DELETE | `/products/:id` | Delete a product by ID    |

### Employees

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| POST   | `/employees`     | Create a new employee      |
| GET    | `/employees`     | Get all employees          |
| GET    | `/employees/:id` | Get an employee by ID      |
| PATCH  | `/employees/:id` | Update an employee by ID   |
| DELETE | `/employees/:id` | Delete an employee by ID   |

## Sample Request Bodies

### Create Product (`POST /products`)

```json
{
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 19.99,
  "quantity": 50
}
```

### Create Employee (`POST /employees`)

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "01712345678",
  "password": "DummyPass123!",
  "age": 28,
  "yearsOfWorking": 5
}
```

## Postman Screenshots

All required CRUD operation screenshots (`01-create` through `07-confirm-delete`) are located inside the `screenshots/` folder.