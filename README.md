# 🛒 Online Grocery Store

![GitHub repo size](https://img.shields.io/github/repo-size/NayabShahbaz/Online-Grocery-Store?color=green)
![GitHub last commit](https://img.shields.io/github/last-commit/NayabShahbaz/Online-Grocery-Store?color=orange)
![GitHub issues](https://img.shields.io/github/issues/NayabShahbaz/Online-Grocery-Store?color=red)
![GitHub stars](https://img.shields.io/github/stars/NayabShahbaz/Online-Grocery-Store?style=social)

A **full-stack online grocery store application** where customers can browse products, add items to the cart, and place orders — built with **React**, **Node.js**, and **MySQL**.

---

## 📌 Features

- 🛍 **Browse Categories & Products**
- 🔍 **Search & Filter** products
- 🛒 **Add to Cart & Checkout**
- 💳 **Secure Payment Integration** 
- 📦 **Order Tracking**
- 📊 **Admin Dashboard** to manage products, orders, and customers

---

## 🛠 Tech Stack

**Frontend:**  
- React.js  
- CSS3 

**Backend:**  
- Node.js (Express.js)  
- Microsoft SQL Server Database  

**Other Tools:**  
- RESTful APIs
- Git for Version Control

---

## 📂 Project Structure

```plaintext
Online-Grocery-Store/
├── backend/        # Backend API (Node.js + Express + MySQL)
│   ├── .env
│   ├── middleware/
│   ├── routes/
│   ├── server.js
│   └── models/

│
├── frontend/       # Frontend (React.js)
│   ├── public/
│   ├── images/
│   ├── src/
│   └── package.json
│
└── database.sql  # Database schema & sample data


---

## ⚙️ Installation & Setup

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/yourusername/online-grocery-store.git
cd online-grocery-store


2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file inside the backend folder:

env
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=grocerydb
PORT=5000
