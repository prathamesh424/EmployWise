# User Management System

A React-based user management system that integrates with the Reqres API to perform basic user management functions.

## Technologies Used

- React.js
- React Router DOM
- Axios for API calls
- Tailwind CSS for styling
- React Hot Toast for notifications
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/prathamesh424/EmployWise.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## Features

- **Authentication**

  - Secure login system
  - Token-based authentication
  - Session management

- **User Management**

  - View list of users with pagination
  - Search users by name or email
  - Edit user details in a modal popup
  - Delete users with confirmation
  - Responsive design for all screen sizes

- **UI/UX**
  - Dark theme design
  - Toast notifications for actions
  - Loading states
  - Responsive layout
  - Modal dialogs for actions
  - Clean and modern interface


### Environment Variables

No environment variables are required as the application uses the public Reqres API.

## API Integration

This project uses the [Reqres API](https://reqres.in/) for demonstration purposes.

### Available Endpoints:

- POST /api/login - Authentication
- GET /api/users - Fetch users list
- PUT /api/users/{id} - Update user
- DELETE /api/users/{id} - Delete user

## Usage

### Login Credentials

- Email: eve.holt@reqres.in
- Password: cityslicka

### Features Usage

1. **Authentication**

   - Use the provided credentials to log in
   - Token is stored in session storage

2. **User Management**

   - View users list with pagination
   - Search users using the search bar
   - Click "Edit" to modify user details
   - Click "Delete" to remove a user

3. **Navigation**
   - Use pagination controls to navigate through users
   - Responsive navbar for easy navigation
   - Logout button to end session
