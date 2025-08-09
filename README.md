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

📂 MERN_PROJECT/  
├── 📂 backend/  
│   ├── 📂 models/    
│   │   ├── category.model.js      
│   │   ├── product.model.js    
│   ├── 📂 routes/  
│   │   ├── categoryRoutes.js  
│   │   ├── productRoutes.js  
│   ├── 📂 controllers/  
│   │   ├── category.controller.js   
│   │   ├── product.controller.js    
│   ├── server.js    
│   └── 📂 config/  
│        ├── db.js  
├── 📂 frontend/    
│   ├── 📂 src/    
│   │   ├── 📂 components/  
│   │   │     ├── categorycard.jsx   
│   │   │     ├── Navbar.jsx   
│   │   │     ├── productcard.jsx   
│   │   │     ├── subcategorycard.jsx   
│   │   │     ├── subitemcard.jsx   
│   │   ├── 📂 pages/  
│   │   │     ├── createcategory.jsx   
│   │   │     ├── createpage.jsx   
│   │   │     ├── createproduct.jsx   
│   │   │     ├── homepage.jsx   
│   │   │     ├── productdetailpage.jsx   
│   │   │     ├── productspage.jsx   
│   │   │     ├── subcategorypage.jsx   
│   │   │     ├── subitempage.jsx   
│   │   ├── 📂 store/  
│   │   │     ├── category.js   
│   │   │     ├── product.js   
│   │   ├── App.jsx    
│   │   └── index.jsx    
└── README.md  







