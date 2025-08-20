# 📚 Library Management API

A RESTful API for managing books and borrows in a library, built with Express, TypeScript, and MongoDB (Mongoose).

---

## 🚀 Live Demo

https://your-live-link.com

---

## 📖 Postman Documentation

https://documenter.getpostman.com/view/your-postman-collection-id

---

## 🔧 Tech Stack

- TypeScript
- Node.js with Express
- MongoDB via Mongoose
- pnpm for package management
- dotenv for environment variables

---

## ✨ Features

- Create, read, update and delete books
- Filter and sort book listings
- Borrow books with business-logic checks
- Automatic copy count updates and availability toggling
- Aggregation pipeline summary of all borrows
- Mongoose static methods and middleware

---

## 🚧 Environment Variables

Create a `.env` file in your project root with the following:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/library?retryWrites=true&w=majority

PORT=8080
```

---

## ⚙️ Installation & Running Locally

1. Clone the repo

   ```bash
   git clone https://github.com/your-username/library-management-api.git

   cd library-management-api
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Build the TypeScript code

   ```bash
   pnpm build
   ```

4. Start the server

   ```bash
   pnpm start
   ```

5. The API will be available at
   ```
   http://localhost:8080
   ```

---
