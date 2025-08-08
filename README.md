
<div align="center">
  <img src="frontend/public/images/grocery.jpeg" alt="Grocery Store" width="120" />
  <h1>🛒 Online Grocery Store</h1>
  <p>A modern full-stack web application for managing an online grocery store.</p>
</div>

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** React.js
- **Database:** Microsoft SQL Server
- **Authentication:** JWT
- **Styling:** CSS

---

## ✨ Features

- 🧑‍💼 **Admin Dashboard:** Manage products, categories, suppliers, view sales reports, and handle customer reviews.
- 🛍️ **Customer Dashboard:** Browse products, add to cart/wishlist, place orders, view order history, and update profile.
- 🔒 **Authentication:** Separate login/signup for admins and customers.
- 🗄️ **Database:** SQL-based backend for storing products, users, orders, and reviews.

---

## 📁 Project Structure

```text
grocery-store/
│
├── backend/         # Node.js backend (Express, SQL)
│   ├── server.js
│   ├── db.js
│   ├── authMiddleware.js
│   ├── fetchData.js
│   ├── insertData.js
│   ├── updateData.js
│   ├── deleteData.js
│
├── frontend/        # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── DashboardAdmin.js
│   │   ├── DashboardCustomer.js
│   │   ├── admin/
│   │   ├── customer/
│   │   └── ...other components
│   ├── public/
│   │   ├── index.html
│   │   └── images/
│   ├── package.json
│
├── database.sql     # SQL schema and seed data
├── README.md
└── package.json     # Project metadata
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) & npm
- SQL database (e.g., MySQL, PostgreSQL)

### Backend Setup

1. Install dependencies:

	```bash
	cd backend
	npm install
	```

2. Configure your database in `db.js`.
3. Run the server:

	```bash
	node server.js
	```

### Frontend Setup

1. Install dependencies:

	```bash
	cd frontend
	npm install
	```

2. Start the React app:

	```bash
	npm start
	```

### Environment Variables

You must create your own `.env` file in the `backend` directory to store sensitive configuration (such as database credentials, secret keys, etc.). This file is not included in the repository for security reasons.

**Sample `.env` file (use this exact format, replace placeholder values):**

```properties
JWT_SECRET=yourVerySecretKey        # e.g. mySuperSecretKey123

DB_SERVER=DESKTOP-8SUCDH9\SQLEXPRESS # e.g. YOUR_PC_NAME\SQLEXPRESS
DB_NAME=FlashMart                   # e.g. grocery_db
DB_USER=sa                          # e.g. db_user
DB_PASS=123456                      # e.g. db_password
DB_PORT=1433                        # e.g. 1433
DB_ENCRYPT=false                    # true or false
DB_ENABLE_ARITH_ABORT=true           # true or false
DB_TRUST_CERT=true                   # true or false
```

Add any other environment variables your setup requires. Do not commit this file to GitHub.

---

### Database

- Import `database.sql` into your SQL database to set up tables and initial data.

---

## 💻 Usage

- Access the frontend at [`http://localhost:3000`](http://localhost:3000)
- Backend API runs at [`http://localhost:5000`](http://localhost:5000) (default)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

MIT
