# Clio Integration Prototype

This is a prototype web application designed to demonstrate custom functionality for the Clio legal platform. The application allows users to authenticate with the Clio API, display custom fields for matters, and interface with a local SQLite database to cache and retrieve matter information. Additionally, the app allows updating matters via the Clio API when necessary.

## Features

- **OAuth2 authentication with Clio API**: Secure user authentication to access Clio data.
- **Fetch and display custom fields for matters from Clio**: Allows users to view detailed information about legal matters.
- **Read-only querying from SQLite database**: Utilizes SQLite for performance by caching matter data locally for fast read access.
- **Update matters via Clio API**: Allows users to update information, such as the display number of a matter, which is synced directly with the Clio platform.
- **Clean and responsive UI built with Material UI**: Provides an intuitive and minimal interface for interacting with Clio and local data.

## Technologies Used

- **React**: Frontend framework for building a dynamic user interface.
- **Material UI**: UI component library for a clean and minimal design.
- **Axios**: HTTP client for making API requests to both Clio and the backend.
- **Node.js/Express**: Backend framework for handling API requests and communicating with Clio and SQLite.
- **SQLite**: Local database for caching matter data and improving performance for read-only operations.
- **Clio API**: For accessing legal matters, custom fields, and updating data.

## Author

- **Travis Crawford**  
  GitHub: [traviscrawford85](https://github.com/traviscrawford85)


## Setup and Installation

### 1. Clone the Repository

To get started, first clone the repository:

```bash
git clone https://github.com/traviscrawford85/clio-integration-prototype.git
cd clio-integration-prototype
```

### 2. Backend Setup

   1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
   2.  Install dependancies:
   ```bash
   npm install
   ```
   3. Start the backend server:
   ```bash
   node index.js
   ```
   4. The backend will be running at:
   ```bash
   http://localhost:5000
   ```

### 3. Frontend Setup

   1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
   2. Install dependancies:
   ```bash
   npm install
   ```
   3. Start the frontend server
   ```bash
   npm start
   ```
   4. The frontend will be available at:
   ```bash
   http://localhost:3000
   ```
   






