# Product-Management-
Endpoints
  GET /products
  Fetch all products.
  Optional query: category (e.g., /products?category=Apparel)

  GET /products/:id
  Fetch product by ID.

  POST /products
  Create a new product.
  Body (JSON):
  {
    "id": 101,
    "name": "New Product",
    "category": "Electronics",
    "price": 199.99
  }
🛠️ Tech Stack
Built using Node.js and Express.js for creating RESTful APIs and handling server-side logic. JSON is used as an in-memory datastore for simplicity.

🚀 How to Run the Project

git clone <your-repo-url>
cd <project-folder>
npm install
npm start
Server runs on http://localhost:3000

🧪 Sample Requests
1. Fetch All Products (Optional filter by category)
curl http://localhost:3000/products
curl http://localhost:3000/products?category=Apparel
2. Fetch Product by ID
bash
Copy
Edit
curl http://localhost:3000/products/101
3. Create Product

   
curl -X POST http://localhost:3000/products \
-H "Content-Type: application/json" \
-d '{"id":102,"name":"Test Product","category":"Apparel","price":49.99}'
