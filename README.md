# 📝 Notes App

A full-stack Notes application built with **EJS, CSS, JavaScript (Views)** and **Express.js + MongoDB (Backend)**. Users can add, view, edit, and delete notes. This project is fully **Dockerized** for easy setup and deployment.

---

## 🚀 Features

-   📄 **Full CRUD:** Create, Read, Update, and Delete notes.
-   🐳 **Dockerized:** Run the entire application with a single `docker compose up` command.
-   🎨 **Server-Side-Rendered UI:** Simple and responsive frontend built with EJS templates.
-   🌐 **Express.js Backend:** Solid backend built on Node.js and Express.js.
-   🗃️ **MongoDB Database:** Data stored in MongoDB and connected via Mongoose (using MongoDB Atlas).

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Backend** | Node.js, Express.js |
| **Frontend (Views)** | EJS (Embedded JavaScript), CSS, JavaScript |
| **Database** | MongoDB (with Mongoose) |
| **Deployment** | Docker, Render (or any platform supporting Docker) |

---

## 📦 Installation (Local Setup)

If you don't want to use Docker, you can also run it locally:

1.  **Clone the repo**
    ```bash
    git clone [https://github.com/AashutoshDubey619/Notes-app.git](https://github.com/AashutoshDubey619/Notes-app.git)
    cd Notes-app
    ```
2.  **Install dependencies**
    ```bash
    npm install
    ```
3.  **Create an environment file**
    Create a file named `.env` in the project's root folder and add your MongoDB connection string:
    ```.env
    # Paste your Atlas string here
    MONGO_URI=mongodb+srv://<username>:<password>@cluster-url.mongodb.net/notesapp?retryWrites=true&w=majority
    ```
4.  **Run the server**
    ```bash
    node index.js
    ```
5.  Open `http://localhost:3000` in your browser.

---

## 🐳 Running with Docker (Recommended)

This is the easiest method. You just need to have Docker Desktop installed and running.

1.  **Clone the repo**
    ```bash
    git clone [https://github.com/AashutoshDubey619/Notes-app.git](https://github.com/AashutoshDubey619/Notes-app.git)
    cd Notes-app
    ```
2.  **Create an environment file**
    Just like in step 3 above, create a `.env` file and add your `MONGO_URI`.
    *(**Note:** Don't forget to add `0.0.0.0/0` (Allow Access from Anywhere) to your Atlas Network Access so the Docker container can connect)*.
3.  **Run Docker Compose**
    Just run this command in your terminal:
    ```bash
Chalo, aage badhte hain.
    docker compose up
    ```
    *(The first time, it might take a moment to build the image and run `npm install`)*
4.  **Access your app**
    Open `http://localhost:<PORT>` in your browser (Use the port you specified in your `docker-compose.yml`, e.g., `8080`).
  
