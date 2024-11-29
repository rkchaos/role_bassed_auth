<h1>ROLE BASED AUTHENTICATION</h1>

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Refer Documentation](#Refer-Documentation)
- [Installation](#installation)
- [Acknowledgments](#acknowledgments)

## Features

- User authentication and authorization
- User taking an action based on role
- Like there are three roles(admin,superadmin,user)
- User only see the products
- Admin can see how many user they have and add products
- Superadmin can delete the products,delete the users and how many user they have and add products

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

## Refer Documentation

[Documentation](https://my.visme.co/view/w4xnxdz6-role-based)

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Backend Setup

1. Clone the repository
   ```sh
   https://github.com/rkchaos/role_bassed_auth.git
   ```

2. Install NPM packages
    ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   PORT=YOUR_PORT_NUMBER
   MONGO_URI = your_mongodb_uri
   ```
4. Start the backend server
   ```sh
   npm start
   ```

   ## Acknowledgments
   
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
