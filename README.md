# 🛍️ MERN Online Shopping Store (Ongoing Project)

A full-stack e-commerce web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and **Chakra UI** for styling.  
It supports a hierarchical product structure with **categories → subcategories → subitems → products**.

---

## 🚀 Features

- **Category Management** – Create, edit, delete categories with images & descriptions
- **Subcategory & Subitem Management** – Nested product classification
- **Product Management** – Add, edit, and delete products
- **REST API** – Secure endpoints for all operations
- **Responsive UI** – Built with Chakra UI
- **MongoDB Integration** – Data stored in cloud (Atlas)
- **Error Handling** – Descriptive messages for invalid inputs
- **Scalable Structure** – Easily extendable for future features

---

## 🗂️ Tech Stack

| Layer       | Technology |
|-------------|------------|
| **Frontend** | React.js + Vite + Chakra UI |
| **Backend**  | Node.js + Express.js |
| **Database** | MongoDB Atlas |
| **Other**    | Mongoose, Axios, Dotenv |

---

## 📦 Project Structure

📂 MERN_PROJECT  
|-📂 backend
┃ ┣ 📂 models
┃ ┃ ┣ category.js
┃ ┃ ┗ product.js
┃ ┣ 📂 routes
┃ ┃ ┣ categoryRoutes.js
┃ ┃ ┗ productRoutes.js
┃ ┣ server.js
┃ ┗ db.js
┣ 📂 frontend
┃ ┣ 📂 src
┃ ┃ ┣ 📂 components
┃ ┃ ┣ 📂 pages
┃ ┃ ┣ App.jsx
┃ ┃ ┗ main.jsx
┣ .env
┣ package.json
┗ README.md


