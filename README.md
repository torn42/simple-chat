# Simple Chat Application

This is a simple chat application built with React for the frontend and Node.js, Express, and Socket.io for the backend.
The initial version of this project was taken from a YouTube for learning nodejs, but I've made several improvements and
optimizations.

## Features

- **Frontend**:
    - Built with React using hooks such as `useEffect`, `useState`, `useReducer` (chosen instead of adding Redux to the
      project for simplicity), and `useRef`.
    - Fully typed with TypeScript for better maintainability and readability.
    - Action creators for the reducer to manage state more effectively.

- **Backend**:
    - Node.js with Express for handling HTTP requests.
    - Socket.io for real-time communication between the client and server.
    - Minor optimizations and improvements to enhance functionality.

## Enhancements Made

1. **Message Sending Optimization**:
    - Improved message sending logic and handling of the Enter key for new lines and message submission.

2. **TypeScript Integration**:
    - Converted the entire project to TypeScript.
    - Defined custom types and action creators for better type safety and code clarity.

3. **Project Decomposition**:
    - Refactored and decomposed the codebase for better structure and maintainability.

4. **Backend Improvements**:
    - Made slight optimizations to the backend code for better performance and readability.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.
- A package manager such as npm or yarn.

### Installation

1. **Clone the repository**:

   ```
   git clone https://github.com/your-username/simple-chat.git
   cd simple-chat-app
   ```

2. **Install dependencies**:

   ```
   npm install
   ```

3. **Run the server**:

   ```
   npm run server
   ```

4. **Run the app**:

   ```
   npm start
   ```

### Acknowledgments

Original tutorial and inspiration from YouTube.
Special thanks to the creators of the libraries and tools used in this project.