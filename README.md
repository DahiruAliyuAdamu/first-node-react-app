# My First Node.js Blog App

A simple blogging platform built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**.

Users can create, view, and delete blog posts with a minimalistic and responsive design.

---

## Features

- 📝 Create new blog posts
- 📄 View a list of all blogs
- 🔎 View individual blog post details
- ❌ Delete blog posts
- 🎨 Styled with custom CSS
- 🗄️ MongoDB as the database backend

---

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Templating Engine**: EJS
- **Frontend**: HTML, CSS
- **Deployment Ready**: Easily deployable on platforms like Heroku, Vercel, or Railway.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) server running (local or cloud, e.g., MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root folder and add:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Run the app**
   ```bash
   npm start
   ```

5. **Visit**
   ```
   http://localhost:3000/
   ```

---

## Project Structure

```
├── controllers/
│   └── blogController.js
├── models/
│   └── blog.js
├── routes/
│   └── blogRoutes.js
├── public/
│   └── style.css
├── views/
│   ├── blogs/
│   │   ├── index.ejs
│   │   ├── details.ejs
│   │   └── create.ejs
│   ├── partials/
│   │   ├── head.ejs
│   │   ├── nav.ejs
│   │   └── footer.ejs
├── app.js (your main server file)
├── package.json
└── README.md
```

---

## API Endpoints

| Method | Endpoint         | Description                |
|:-------|:------------------|:----------------------------|
| GET    | `/blogs`          | List all blogs              |
| GET    | `/blogs/create`   | Get form to create a blog   |
| POST   | `/blogs/add`      | Create a new blog           |
| GET    | `/blogs/:id`      | View a specific blog        |
| DELETE | `/blogs/:id`      | Delete a specific blog      |

---

## Author

- **Dahasma Site** (Your Name)
- [GitHub Profile](https://github.com/your-username)

---

## License

This project is licensed under the [MIT License](LICENSE).
