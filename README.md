﻿# Employee-Management-System
## Overview

The Employee Management System is a web application designed to manage employee and department information. This project uses the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. It allows for CRUD operations (Create, Read, Update, Delete) on employee and department data.

## Features

- Manage employees: Add, view, update, and delete employee details.
- Manage departments: Add, view, update, and delete department details.
- User-friendly interface with responsive design.
- RESTful API for backend operations.
- Data stored in MongoDB.

## Technologies Used

- MongoDB: NoSQL database for storing employee and department data.
- Express.js: Web framework for Node.js to build the backend.
- React.js: Frontend library for building the user interface.
- Node.js: JavaScript runtime for the backend.

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/employee-management-system.git
    cd employee-management-system/server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory and add your MongoDB connection string:

    ```env
    MONGODB_URI=mongodb://localhost:27017/employee_management
    PORT=5000
    ```

4. Start the backend server:

    ```bash
    node index.js
    ```

### Frontend Setup

1. Navigate to the client directory:

    ```bash
    cd ../client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the interface to add, view, update, and delete employees and departments.

## Project Structure

```
employee-management-system/
├── client/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── README.md
│   ├── package-lock.json
│   └── package.json
├── server/
│   ├── routes/
│   ├── schemas/
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
