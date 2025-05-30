# TechVision – Real-Time Web App

TechVision is a responsive business landing page with real-time backend integration, featuring a contact form and pricing plans powered by Node.js, Express, and MongoDB."  Let me know if you want variations!

# Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Notes](#notes)
- [License](#license)

# Introduction

TechVision is a modern and responsive business landing page. It is designed for tech startups or companies looking to promote their products or services online. The project features a user-friendly frontend and a real-time backend using Node.js, Express, and MongoDB. It allows users to interact through a contact form and pricing plan selections, both of which are stored in a database.

# Features

* Fully responsive HTML/CSS landing page
* Typing animation in the hero section
* Smooth scrolling and responsive navigation bar
* Contact form that submits data to a backend
* Pricing plan buttons that store user selections in a database
* Real-time functionality using REST API endpoints
* GitHub-ready with proper project structure

## Technologies Used

**Frontend:**

* HTML5
* CSS3
* JavaScript (Vanilla)

**Backend:**

* Node.js
* Express.js
* MongoDB (local or hosted via MongoDB Atlas)


# Setup Instructions

1. Clone the repository or download the ZIP:

   ```
   git clone https://github.com/yourusername/techvision-realtime.git
   cd techvision-realtime
   ```

2. Install required Node.js packages:

   ```
   npm install
   ```

3. Start the backend server:

   ```
   npm start
   ```

4. Open the `index.html` file in your browser manually
   OR use Live Server extension in VS Code.


# Available Scripts

* `npm start` – Starts the backend server on `http://localhost:3000`
* `npm install` – Installs all required packages based on `package.json`

---

# Deployment

You can deploy this project using:

**Frontend**

* GitHub Pages
* Netlify
* Vercel

**Backend**

* Render
* Railway
* Glitch

**Database**

* MongoDB Atlas (cloud version of MongoDB)

Make sure to update the MongoDB connection string in `server.js` with your hosted MongoDB URI when deploying.

# Future Enhancements

* Add user authentication (sign up/login)
* Create a dashboard to manage form submissions
* Use a templating engine like EJS for server-rendered pages
* Add form validation and confirmation messages
* Add email notifications when users submit forms

# Notes

* Do not upload the `node_modules/` folder to GitHub — it’s automatically recreated from `package.json`
* Make sure MongoDB is running locally or use MongoDB Atlas for production
* This is a beginner-friendly full stack project – no authentication or user roles yet
* Ensure CORS is enabled for frontend-backend communication during development

# License
This project is open-source and available under the [MIT License](LICENSE).

