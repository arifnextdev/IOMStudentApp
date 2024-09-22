# IMStudentApp

IMStudentApp is a Node.js-based RESTful API that manages schedules, groups, notes, previous classes, and previous semesters. The app uses MongoDB for data storage and can be deployed on platforms like Vercel.

## Features

- **CRUD operations** for managing schedules, groups, notes, previous classes, and semesters.
- **Express.js** for routing.
- **Mongoose** for MongoDB interaction.
- **CORS** enabled for cross-origin resource sharing.
- Environment variables configured with `dotenv`.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Deployment on Vercel](#deployment-on-vercel)
- [Technologies Used](#technologies-used)

## Installation

To install and run the app locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/arifnextdev/imstudentapp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd imstudentapp
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables (see [Environment Variables](#environment-variables)).

5. Start the server locally:

   ```bash
   npm start
   ```

6. The app will run on `https://iom-student-app.vercel.app/`.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```plaintext
MONGODB_URI=your_mongodb_uri
PORT=4000
```

Make sure to replace `your_mongodb_uri` with your actual MongoDB connection string.

## API Endpoints

### Schedule

- **Create Schedule**

  ```http
  POST /api/v1/shedule
  ```

- **Get All Schedules**

  ```http
  GET /api/v1/shedules
  ```

### Group

- **Create Group**

  ```http
  POST /api/v1/group
  ```

- **Get All Groups**

  ```http
  GET /api/v1/groups
  ```

### Note

- **Create Note**

  ```http
  POST /api/v1/note
  ```

- **Get All Notes**

  ```http
  GET /api/v1/notes
  ```

### Previous Class

- **Create Previous Class**

  ```http
  POST /api/v1/prevclass
  ```

- **Get All Previous Classes**

  ```http
  GET /api/v1/prevclasses
  ```

### Previous Semester

- **Create Previous Semester**

  ```http
  POST /api/v1/prevsemester
  ```

- **Get All Previous Semesters**

  ```http
  GET /api/v1/prevSemesters
  ```

## Deployment on Vercel

To deploy this project on [Vercel](https://vercel.com/):

1. Make sure your project includes a `vercel.json` configuration:

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "server.js"
       }
     ]
   }
   ```

2. Push your project to a GitHub repository.

3. Go to the [Vercel Dashboard](https://vercel.com/dashboard).

4. Create a new project and import your repository.

5. Set up the environment variables (`MONGODB_URI` and `PORT`) in Vercel’s project settings.

6. Deploy the project. Vercel will provide a live URL where you can access your API.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **CORS**
- **dotenv**
- **Vercel** for deployment

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

```

### Explanation:
- **Installation Section:** Guides on how to clone, set up, and run the project locally.
- **Environment Variables Section:** Explains how to configure the app to work with MongoDB.
- **API Endpoints Section:** Documents your API routes with method types.
- **Deployment Section:** Provides step-by-step instructions to deploy the app on Vercel.
- **Technologies Used Section:** Highlights the main technologies used in the project. 

Let me know if you need additional details or changes!