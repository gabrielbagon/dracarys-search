# Dracarys Project 🐉

Welcome to Dracarys, a dragon management system! This project allows you to register, edit, view, and delete dragons easily and intuitively. 🚀

## 📋 Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## ⚙️ Setting Up the Environment

Follow these steps to set up the project locally:

1. Clone the repository:

   git clone https://github.com/your-username/dracarys.git
   cd dracarys

2. Install the dependencies:

   npm install

   or

   yarn install

3. Start the development server:
   
   npm run dev

    or

    yarn dev

4. Open the project in your browser:

    [text](http://localhost:3000)

🗂️ Project Structure

src/
├── app/
│   ├── layout.js          # Global layout of the project
│   ├── page.js            # Home page
│   ├── dragons/           # Dragons module
│   │   ├── [id]/page.js   # Dragon details page
│   │   ├── new/page.js    # Dragon registration page
├── components/            # Reusable components
│   ├── Navbar.js          # Application navbar
│   ├── DragonForm.js      # Form for dragon registration/editing
├── styles/                # Style files (CSS/SASS)
├── mocks/                 # Mock API handlers for testing
└── tests/                 # Unit and integration tests

✨ Features

- Secure Login: Only authenticated users can access the system.
- Dragon Management: Create, edit, view, and delete dragons.
- Responsive Interface: Fully adapted for mobile devices.
- Form Validation: Visual feedback for invalid inputs.
- Automated Tests: Quality assurance with unit and integration tests.

🧪 Tests

To run the tests, execute:

npm test
or
yarn test

The tests include:

Unit tests for individual components.
Integration tests to verify data flow and functionality.

🚀 Deployment

This project is ready for deployment on Vercel. Follow these steps:

1. Install the Vercel CLI:

    npm install -g vercel

2. Log in:

    vercel login

3. Deploy the project:

    vercel

4. The production link will be generated automatically.

📜 License

This project is licensed under the[ MIT License](https://chatgpt.com/g/g-HxPrv1p8v-code-tutor/c/LICENSE).

Contributions
Contributions are welcome! Feel free to open issues or submit pull requests. 😄





