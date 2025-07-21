
Teresa Pahl (Tessa) - Full Stack Developer Portfolio
This project is a personal portfolio website for Teresa Pahl (Tessa), a full-stack developer. It's built with a React frontend using Vite for fast development, and a simple Express.js backend.

Project Structure
The project is divided into two main parts:

frontend/: Contains the React application.

src/App.jsx: The main React component, containing all the portfolio sections.

src/main.jsx: The entry point for the React application.

index.html: The main HTML file for the React app.

tailwind.config.js: Tailwind CSS configuration.

vite.config.js: Vite build configuration.

backend/: Contains the Express.js server.

server.js: The Express server that serves the React build and handles API requests (e.g., for the contact form).

package.json: Backend dependencies.

Technologies Used
Frontend
React.js: A JavaScript library for building user interfaces.

Vite: A fast build tool that provides a lightning-fast development experience for modern web projects.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

Backend
Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.

Express.js: A fast, unopinionated, minimalist web framework for Node.js.

CORS: Middleware to enable Cross-Origin Resource Sharing.

Setup and Running the Application
Follow these steps to get the application up and running on your local machine.

1. Clone the Repository (Simulated)
In a real scenario, you would clone the repository:

git clone <your-repo-url>
cd <your-repo-name>

For this setup, you'll create the folders manually.

2. Create Project Directories
Create the following directory structure:

my-portfolio/
├── frontend/
└── backend/

3. Setup Frontend (React with Vite)
Navigate to the frontend directory:

cd my-portfolio/frontend

Initialize a new Vite React project:
(If you are starting from scratch, you would run npm create vite@latest . -- --template react)
Since we're providing the App.jsx, you'll just need to set up package.json and install dependencies.

Create package.json in frontend/:

{
  "name": "tessa-portfolio-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "vite": "^4.4.5"
  }
}

Install frontend dependencies:

npm install

Create tailwind.config.js in frontend/:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

Create index.css in frontend/src/:

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles for section heading underline */
.section-heading::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 4px;
    background-color: #6366f1; /* Indigo 500 */
    border-radius: 9999px;
}

/* Smooth scroll for anchor links */
html {
    scroll-behavior: smooth;
}

Create main.jsx in frontend/src/:

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Import Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

Place the App.jsx code (provided in the first immersive block) into frontend/src/App.jsx.

4. Setup Backend (Express.js)
Navigate to the backend directory:

cd my-portfolio/backend

Initialize a new Node.js project:

npm init -y

Install backend dependencies:

npm install express cors

Place the server.js code (provided in the second immersive block) into backend/server.js.

5. Run the Application
5.1. Start the Backend Server
Navigate to the backend directory:

cd my-portfolio/backend

Start the server:

node server.js

You should see a message like: Server is running on http://localhost:3000

5.2. Start the Frontend Development Server
Navigate to the frontend directory:

cd my-portfolio/frontend

Start the Vite development server:

npm run dev

Vite will provide a local URL (e.g., http://localhost:5173). Open this URL in your browser.

6. Building for Production
To create a production-ready build:

Build the React frontend:

cd my-portfolio/frontend
npm run build

This will create a dist folder inside frontend/ with optimized static assets.

Start the Express server in production mode:

cd my-portfolio/backend
node server.js

The Express server will now serve the static files from frontend/dist.

Contact Form Functionality
The Contact section in the React frontend makes a POST request to /api/contact. The server.js includes a placeholder route for this.

To make the contact form actually send emails, you would need to:

Choose an email sending service or library:

Nodemailer: A popular Node.js module for sending emails. You'd configure it with your email service provider's SMTP settings (e.g., Gmail, SendGrid, Mailgun).

Third-party form services: Services like Formspree, Netlify Forms, or Getform can handle form submissions directly without needing a custom backend email setup. You would configure your React form to submit directly to their endpoint.

Implement the email sending logic in the backend/server.js file (uncomment and fill in the Nodemailer example or integrate with your chosen service). Remember to handle sensitive information (like email passwords/API keys) securely using environment variables.

Customization
Content: Update all text content in frontend/src/App.jsx to reflect Tessa's actual experience, skills, and project details.

Images: Replace the placeholder profile picture with a real one.

Project Links: Update the liveDemoLink and githubRepoLink for each project with actual URLs.

Styling: Further customize the Tailwind CSS classes or add more custom CSS in frontend/src/index.css to match Tessa's personal branding.