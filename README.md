# 📊 E-Dashboard

A full-stack MERN (MongoDB, Express.js, React, Node.js) e-commerce dashboard web application that allows users to register, log in, manage products (CRUD), and search across product categories. Authentication is secured using JWT.

---

## 🔧 Features

### 👥 Authentication

* User registration and login
* JWT-based token authentication
* Protected routes for product operations

### 📦 Product Management

* Add, update, delete products
* View product listings
* Search products by name, company, or category

### 🖥️ Dashboard UI

* React components for signup, login, product CRUD
* PrivateComponent for route guarding
* Navigation and footer components

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* CSS (custom styling)

### Backend

* Node.js
* Express.js
* MongoDB (via Mongoose)
* JWT (jsonwebtoken)

---

## 📁 Folder Structure

```
e-dashboard/
├── backend/
│   ├── db/
│   │   ├── config.js
│   │   ├── User.js
│   │   └── Product.js
│   ├── index.js (Main backend server)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddProduct.js
│   │   │   ├── Footer.js
│   │   │   ├── Login.js
│   │   │   ├── Nav.js
│   │   │   ├── PrivateComponent.js
│   │   │   ├── ProductList.js
│   │   │   ├── SignUp.js
│   │   │   └── UpdateProduct.js
│   │   ├── App.js
│   │   └── App.css
```

---

## 🚀 Running the Project

### Backend

```bash
cd backend
npm install
node index.js
```

### Frontend

```bash
cd frontend
npm install
npm start
```

### MongoDB

* Ensure MongoDB is running locally or update the connection string in `config.js` accordingly.

---

## 🔐 JWT Protected Endpoints (Backend)

| Method | Endpoint      | Description          |
| ------ | ------------- | -------------------- |
| POST   | /register     | Register user        |
| POST   | /login        | Login user           |
| POST   | /add-product  | Add new product      |
| GET    | /products     | Get all products     |
| DELETE | /product/\:id | Delete product       |
| GET    | /product/\:id | Get product by ID    |
| PUT    | /product/\:id | Update product by ID |
| GET    | /search/\:key | Search for products  |

---

## 🌐 Live Deployment

Host the frontend on **Netlify** or **Vercel**, and the backend on **Render**, **Railway**, or **VPS**.

---

## 🧑‍💻 Author

**Sanya Shresta Jathanna**

* **Portfolio** – [sanyashresta.netlify.app](https://sanyashresta.netlify.app/)
* **GitHub** – [@SanyaShresta25](https://github.com/SanyaShresta25)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
