# Persistent Form Data Application
## Description

This React application allows users to input and persist form data using the browser’s local storage.
The application demonstrates how to:

* Create and use a custom React hook

* Persist user input after page refreshes

* Use localStorage with React hooks

* Manage controlled form inputs

* Reuse stateful logic across components

Users can:

* Enter their name

* Enter a service number

* Refresh the page

* See their previously entered data remain in the form

## Features

* Controlled form inputs

* Persistent data using localStorage

* Automatic data restoration after refresh

* Reusable custom hook (useLocalStorage)

* Dynamic UI updates

* React Hooks implementation

### Technologies Used

React

JavaScript (ES6)

React Hooks

localStorage API

CSS

### Project Structure

src/├── components/│   ├── App.jsx│   └── UserForm.jsx├── hooks/│   └── useLocalStorage.jsx├── main.jsx└── index.css

### Installation

1. Clone the Repository
git clone <repository-url>

2. Navigate into the Project Folder
cd persistent-form-app

3. Install Dependencies
npm install

### Running the Application

Start the Development Server
Vite
npm run dev
Create React App
npm start

### How the Hook Works

1. Retrieve Existing Data
localStorage.getItem(key)
Checks if data already exists in storage.

2. Store Updated Data
localStorage.setItem(key, value)
Automatically updates storage whenever input changes.

### Display Image

src\assets\Screenshot 2026-05-15 173402.png

### Benefits of Using a Custom Hook

Reusable across components

Cleaner code organization

Avoids duplicated logic

Simplifies localStorage handling

#### Testing

The application includes tests for:

Initial hook values

State updates

localStorage persistence

Form functionality

* Run tests using:
* npm test
or:
* npm run test

### Future Improvements

* Form validation

* Multiple saved users

* Clear form/reset button

* Dark mode

* Session expiration

* Backend integration

#### Author
Ruth Wanja Juma

Created as a React Custom Hooks and localStorage practice project.