Clio Integration Prototype
This is a prototype web application designed to demonstrate custom functionality for the Clio legal platform. The application allows users to authenticate with the Clio API and display custom fields for matters using a clean and minimal user interface powered by React and Material UI.

Features
OAuth2 authentication with Clio API.
Fetch and display custom fields for specific matters from Clio.
Clean and responsive UI built with Material UI.
Technologies Used
React: Frontend framework.
Material UI: UI component library for a clean, minimal design.
Axios: HTTP client for making API requests.
Clio API: For accessing legal matters and custom fields.
Prerequisites
Node.js and npm installed.
A Clio developer account and API keys for OAuth authentication.
Installation
Clone the repository:

bash
Copy code
git clone git@github.com:traviscrawford85/clio-integration-prototype.git
cd clio-integration-prototype
Install the dependencies:

bash
Copy code
npm install
Create a .env file in the project root with your Clio API credentials:

makefile
Copy code
REACT_APP_CLIENT_ID=your_clio_client_id
REACT_APP_CLIENT_SECRET=your_clio_client_secret
REACT_APP_REDIRECT_URI=http://localhost:3000/callback
Running the App
To run the development server, use the following command:

bash
Copy code
npm start
This will start the React development server at http://localhost:3000.

Usage
Open the app in your browser at http://localhost:3000.
Click the "Login with Clio" button to authenticate using Clio's OAuth2.
After successful login, the app will display custom fields for specific matters.
License
This project is licensed under the MIT License.
