# E-commerce Application

This is a full-stack e-commerce application with a separate admin panel and user-facing frontend, built using React.js for the frontend and Node.js with Express.js for the backend. MongoDB is used as the database.

## Table of Contents

- [Features](#features)
  - [Admin Panel](#admin-panel)
  - [User Frontend](#user-frontend)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Admin Panel Setup](#admin-panel-setup)
  - [User Frontend Setup](#user-frontend-setup)
- [Environment Variables](#environment-variables)

## Features

### Admin Panel

The admin panel provides functionalities for managing products and orders.

- **Admin Authentication:** Secure login for administrators.
- **Product Management:**
  - Add new products with details such as name, description, price, category, sub-category, sizes, and multiple images.
  - View a list of all products.
  - Update and remove existing products.
- **Order Management:**
  - View all customer orders.
  - Update the status of orders (e.g., Order Placed, Packing, Shipped, Out For Delivery, Delivered).

### User Frontend

The user-facing frontend allows customers to browse products, manage their cart, and place orders.

- **User Authentication:** Register, login, and logout functionalities.
- **Product Catalog:**
  - Browse products on the home and collection pages.
  - View detailed information for individual products, including multiple images, description, and available sizes.
  - Search for products by name.
  - Filter products by category and sub-category.
  - Sort products by price (low to high, high to low) and relevance.
- **Shopping Cart:**
  - Add products to the cart with selected sizes.
  - Update product quantities in the cart.
  - Remove items from the cart.
- **Order Placement:**
  - Proceed to checkout from the cart.
  - Place orders using Cash on Delivery (COD) or Stripe payment gateway.
- **Order History:** View a list of all placed orders.
- **Informational Pages:** 


  - About Us page providing information about the company's mission and values.
  - Contact Us page with contact details and career information.
  - Newsletter subscription.

## Technologies Used

**Frontend (Admin & User):**
- React.js
- Vite (build tool)
- Tailwind CSS (for styling)
- React Router DOM (for navigation)
- Axios (for API requests)
- React Toastify (for notifications)

**Backend:**
- Node.js
- Express.js (web framework)
- MongoDB (database)
- Mongoose (ODM for MongoDB)
- Cloudinary (for image storage)
- Multer (for handling `multipart/form-data`)
- JWT (JSON Web Tokens for authentication)
- Bcrypt (for password hashing)
- Validator (for input validation)
- CORS (for Cross-Origin Resource Sharing)
- Dotenv (for environment variables)
- Stripe (payment gateway integration)
- Razorpay (payment gateway integration - *Note: Implementation is present but not fully utilized in the provided code*)

## Setup Instructions

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:** Obtain the project files by cloning the Git repository.
2.  **Install dependencies:** Install the necessary packages for both the backend and frontend components.
3.  **Configure environment variables:** Set up the required environment variables for database connection, API keys, and other configurations.
4.  **Run the applications:** Start the backend server, admin panel, and user frontend.

Below are the detailed setup instructions for each component:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB instance)
- Cloudinary account
- Stripe account (for payment gateway)

### Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Create a `.env` file:**
    Create a file named `.env` in the `backend` directory and add the following environment variables:
    ```
    STRIPE_SECRET_KEY=your_stripe_secret_key
    MONGODB_URI=your_mongodb_connection_uri
    CLOUDINARY_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    JWT_SECRET=your_jwt_secret
    ADMIN_EMAIL=your_admin_email@example.com
    ADMIN_PASSWORD=your_admin_password
    PORT=3000
    ```
    *Replace the placeholder values with your actual credentials.*

4.  **Run the backend server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The backend server will run on `http://localhost:3000` (or the port you specified in `.env`).

### Admin Panel Setup

1.  **Navigate to the `admin` directory:**
    ```bash
    cd ../admin
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Create a `.env` file:**
    Create a file named `.env` in the `admin` directory and add the following environment variable:
    ```
    VITE_BACKEND_URL=http://localhost:3000
    ```
    *Ensure the `VITE_BACKEND_URL` matches your backend server address.*

4.  **Run the admin panel:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The admin panel will run on `http://localhost:5174` (or the port specified in `vite.config.js`).

### User Frontend Setup

1.  **Navigate to the `frontend` directory:**
    ```bash
    cd ../frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Create a `.env` file:**
    Create a file named `.env` in the `frontend` directory and add the following environment variable:
    ```
    VITE_BACKEND_URL=http://localhost:3000
    ```
    *Ensure the `VITE_BACKEND_URL` matches your backend server address.*

4.  **Run the user frontend:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The user frontend will run on `http://localhost:5173` (or the port specified in `vite.config.js`).

## Environment Variables

Make sure to configure the following environment variables in their respective `.env` files:

**Backend (`backend/.env`):**
- `STRIPE_SECRET_KEY`: Your secret key from Stripe for payment processing.
- `MONGODB_URI`: Connection string for your MongoDB database (e.g., from MongoDB Atlas).
- `CLOUDINARY_NAME`: Your Cloudinary cloud name.
- `CLOUDINARY_API_KEY`: Your Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Your Cloudinary API secret.
- `JWT_SECRET`: A strong, random string for JWT token signing.
- `ADMIN_EMAIL`: Email for admin login.
- `ADMIN_PASSWORD`: Password for admin login.
- `PORT`: Port for the backend server (default: `3000`).

**Frontend (`admin/.env` and `frontend/.env`):**
- `VITE_BACKEND_URL`: The URL of your backend server (e.g., `http://localhost:3000`).
