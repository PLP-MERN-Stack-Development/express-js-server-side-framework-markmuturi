🛒 Product Management API

A simple RESTful API built with Node.js, Express, and MongoDB (Mongoose) for managing products.
Includes authorization middleware, error handling, and request logging.

🚀 Features

CRUD operations for products

MongoDB + Mongoose integration

Custom error-handling middleware

Request logging middleware

Environment-based token authentication (non-JWT)

🧩 Tech Stack

Node.js

Express.js

MongoDB / Mongoose

dotenv

uuid (optional for IDs)

Postman (for testing)

⚙️ Setup Instructions
1️⃣ Clone the Repository

2️⃣ Install Dependencies
npm install

3️⃣ Create a .env File
PORT=5000
MONGO_URI=mongodb://localhost:27017/productdb
AUTH_TOKEN=mysecrettoken
NODE_ENV=development

4️⃣ Start the Server
node server.js


You should see:

Server running on port 3000
MongoDB Connected

📚 API Endpoints
Base URL
http://localhost:3000/api/products

🧾 GET / — Fetch All Products

Request

GET /api/products


Response

[
  {
    "_id": "6716b7b2f1a2c4c2a3d4",
    "name": "Laptop",
    "description": "High-performance laptop",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  }
]

🔍 GET /:id — Fetch Product by ID

Request

GET /api/products/6716b7b2f1a2c4c2a3d4


Response

{
  "_id": "6716b7b2f1a2c4c2a3d4",
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}

➕ POST / — Create Product (Protected)

Headers

Authorization: Bearer mysecrettoken


Body

{
  "name": "Smartphone",
  "description": "Latest model with 128GB storage",
  "price": 800,
  "category": "electronics",
  "inStock": true
}


Response

{
  "_id": "6716b7b2f1a2c4c2a3d5",
  "name": "Smartphone",
  "description": "Latest model with 128GB storage",
  "price": 800,
  "category": "electronics",
  "inStock": true
}

✏️ PUT /:id — Update Product (Protected)

Headers

Authorization: Bearer mysecrettoken


Body

{
  "price": 850
}


Response

{
  "message": "Product updated successfully"
}

🗑️ DELETE /:id — Delete Product (Protected)

Headers

Authorization: Bearer mysecrettoken


Response

{
  "message": "Product deleted successfully"
}

🧱 Middleware
🔹 Logger Middleware

Logs every request with timestamp, method, and URL.

🔹 Auth Middleware

Checks for a valid token in the Authorization header:

Authorization: <AUTH_TOKEN>

🔹 Error Handler

Catches and formats errors in JSON.

🧪 Testing with Postman

Open Postman and create a new request collection called Product API.

For protected routes, go to Headers → Add:

Key: Authorization
Value: mysecrettoken


Test all CRUD endpoints.

📁 Project Structure
├── config/
│   └── db.js
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   └── logger.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── server.js
├── .env
└── package.json

🧠 Future Improvements

Replace static token with JWT authentication

Add user registration & login

Implement pagination and search

Add validation using Joi or Zod

Dockerize for deployment

🧑‍💻 Author
Mark Mwangi Muturi
