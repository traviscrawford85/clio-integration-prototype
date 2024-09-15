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

1. **Clone the repository:**
   ```bash
   git clone https://github.com/traviscrawford85/clio-integration-prototype.git
   cd clio-integration-prototype
