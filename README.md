# 🛍️ MERN Online Shopping Store (Ongoing Project)

A full-featured online shopping web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
This app allows users to browse products by category and subcategory, view detailed product information, and manage a shopping cart — with a fully functional backend and responsive frontend.

---

## 🚀 Features  
### Frontend  
- 📂 **Category & Subcategory Navigation** – Navigate from categories to subcategories and then to product listings.  
- 📱 **Responsive Design** – Works seamlessly on desktop and mobile devices.  
- 🛍 **Product Cards** – View product details including images, description, and price.  
- 🔍 **Dynamic Routing** – Category → Subcategory → Product flow.  

### Backend  
- 📦 **RESTful API** – Built with Express.js for products, categories, and subcategories.  
- 🗄 **MongoDB Database** – Stores product and category data.  
- 🔐 **Environment Variables** – Securely handle API keys, database URIs, etc.  
- 📜 **MVC Structure** – Clean separation of concerns with models, routes, and controllers.

---

## 🗂️ Tech Stack

| Layer       | Technology |
|-------------|------------|
| **Frontend** | React.js + Vite + Chakra UI |
| **Backend**  | Node.js + Express.js |
| **Database** | MongoDB Atlas |
| **Other**    | Mongoose, Axios, Dotenv, Git/Github |

---  

## ⚙️ Installation & Setup
### 1. Clone the repository
```sh 
git clone https://github.com/yourusername/mern-store.git
cd mern-store
```
### 2. Install dependencies
***Backend***
```sh
cd backend
npm install
```

***Frontend***
```sh
cd ../frontend
npm install
```

### 3. Setup environment variables  
Create a .env file inside the backend folder:
```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the project
***Backend***
```sh
npm run dev
```

***Frontend***
```sh
cd ../frontend
npm start
```

## 📌 API Endpoints

### **Category Routes** `/api/categories`
| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/`                  | Get all categories           |
| GET    | `/:id`               | Get category by ID           |
| POST   | `/`                  | Create a new category        | 
| PUT    | `/:id`               | Update a category by ID      |
| DELETE | `/:id`               | Delete a category by ID      | 
---

### **Product Routes** `/api/products`
| Method | Endpoint             | Description                         | 
|--------|----------------------|-------------------------------------|
| GET    | `/`                  | Get all products                    |
| GET    | `/:id`               | Get product by ID                   | 
| POST   | `/`                  | Create a new product                | 
| PUT    | `/:id`               | Update a product by ID              | 
| DELETE | `/:id`               | Delete a product by ID              |
---

## Results (Up to now)
### 1. 🧪 API Testing with Postman
I tested the backend API easily using **Postman** before jump into the frontend by following these steps to verify that all routes work correctly:

#### 💡 Tips
- Always set Content-Type = application/json for POST/PUT requests.
- Use Postman’s Save Response feature to keep sample data.  
- If you get 500 Internal Server Error, check your MongoDB connection and body fields.

All functions in category controller✅  
  
![](./Results/postmancategory.png)  
  
All functions in product controller✅  
  
![](./Results/postmanproduct.png)  

---

### 🏠 1. Homepage  

The **Homepage** displays all the available **Category Cards** in a grid layout.  
Each card contains:

***Step 1***  
<img src="./Results/Homepage_v1.png" alt="Step 1" width="800" >  

***Step 2***  
<img src="./Results/Homepage_v2.png" alt="Step 2" width="800" >  

***Step 3***  
<img width="879" height="744" alt="Screenshot 2025-09-01 194233" src="https://github.com/user-attachments/assets/9b762605-293f-4fe0-8075-39bb3c03a261" />


---

### 3. Create Page

<img src="./Results/create.png" width="800">  

---

***Create Product***

<img src="./Results/addproduct.png" width="600">  

***Create Category***

<img width="800" alt="Screenshot 2025-09-01 194306" src="https://github.com/user-attachments/assets/184188fd-f532-4a5a-a6b5-301450105abe" />

---

### 🗂️ 4. Subcategory Page  

When you click on a **Category Card**, its subcategory page will open.  
Here’s an example of the **Furniture Category** subcategory page:  

<img width="800" alt="Screenshot 2025-09-01 194214" src="https://github.com/user-attachments/assets/51a64c27-aa6c-422c-ac11-a852d95ae853" />

---

### 🛍️ 5. Products Page  

When you click on a **Subcategory Card**, it will navigate to the relevant products page.  
Here’s an example of the **Products Page** for the Furniture → Sofa Sets subcategory:  

<img width="800" alt="Screenshot 2025-09-01 194158" src="https://github.com/user-attachments/assets/39db7c29-1c03-4a3e-be17-1041e96053cc" />

## 🚀 Future Improvements  

Planned features and enhancements for upcoming versions:  

- 🔑 **User Authentication & Authorization**  
  - User signup/login with JWT  
  - Admin panel for managing products and categories  

- 💳 **Payment Integration**  
  - Secure payment gateway (Stripe / PayPal)  
  - Order tracking system  

- 📊 **Search & Filters**  
  - Search bar to find products by name  
  - Category, price range, and rating filters  

- 🛠️ **Deployment & CI/CD**  
  - Deploy to free hosting (Render/Netlify/Vercel)  
  - Add CI/CD pipeline for automatic build and deploy  

- 📱 **PWA Support**  
  - Make the app installable as a Progressive Web App  
  - Offline access to products and categories  

---


 







