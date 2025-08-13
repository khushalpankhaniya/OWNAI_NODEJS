# JWT Authentication System

A simple and secure user authentication system built with Node.js, Express, and JWT (JSON Web Tokens). This project allows users to register, login, and access protected features based on their roles.

## 🚀 Features

- **User Registration**: Create new accounts with personal details
- **User Login**: Secure login with email and password
- **JWT Authentication**: Secure token-based authentication
- **Role-Based Access**: Different permissions for Admin and User roles
- **User Management**: Admin can view all users and search for specific users
- **Country Filtering**: Filter users by country
- **User Profiles**: View individual user details
- **Database Integration**: Uses MySQL database with TypeORM

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MySQL with TypeORM
- **Authentication**: JWT (JSON Web Tokens)
- **Template Engine**: EJS
- **Other**: CORS, dotenv for environment variables

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/khushalpankhaniya/OWNAI_NODEJS.git
cd OWNAI_NODEJS
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add your configuration:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database_name
JWT_SECRET=your_jwt_secret_key
```

### 4. Database Setup
- Create a MySQL database
- Update the database connection details in `.env` file
- The tables will be created automatically when you run the application

### 5. Run the Application
```bash
# For development (with auto-restart)
npm run dev

# For production
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your .env file).

## 📡 API Endpoints

### Authentication Endpoints

#### Register User
- **URL**: `POST /register`
- **Description**: Create a new user account
- **Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "User",
  "phone": "1234567890",
  "city": "New York",
  "country": "USA"
}
```
- **Response**:
```json
{
  "success": true,
  "message": "Signup for john@example.com"
}
```

#### Login User
- **URL**: `POST /login`
- **Description**: Authenticate user and get JWT token
- **Body**:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response**:
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### User Management Endpoints

#### Get User Profile
- **URL**: `GET /:id`
- **Description**: Get details of a specific user
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "success": true,
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "User",
    "phone": "1234567890",
    "city": "New York",
    "country": "USA"
  }
}
```

#### Filter Users by Country
- **URL**: `GET /filter?country=USA`
- **Description**: Get all users from a specific country
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "success": true,
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "country": "USA"
    }
  ]
}
```

### Admin Only Endpoints

#### Get All Users
- **URL**: `GET /all`
- **Description**: Get list of all users (Admin only)
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "success": true,
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "User"
    }
  ]
}
```

#### Search Users
- **URL**: `GET /search?query=john`
- **Description**: Search users by name or email (Admin only)
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "success": true,
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
```



## 📊 Database Schema

The application uses a `users` table with the following structure:

| Field    | Type        | Description                    |
|----------|-------------|--------------------------------|
| id       | INT         | Primary key, auto-increment    |
| name     | VARCHAR(255)| User's full name               |
| email    | VARCHAR(255)| Unique email address           |
| password | VARCHAR(255)| User's password                |
| role     | ENUM        | User role (Admin/User)         |
| phone    | VARCHAR(20) | Phone number                   |
| city     | VARCHAR(100)| City name                      |
| country  | VARCHAR(100)| Country name                   |

## 🚨 Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

Common HTTP status codes:
- `200`: Success
- `201`: Created (for registration)
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Server Error



## 📝 Project Structure

```
ownAI_nodeJS/
├── app.js                 # Main application file
├── package.json           # Project dependencies
├── .env                   # Environment variables
├── authentication/
│   └── jwt-authentication.js  # JWT middleware
├── db/
│   ├── data-source.js     # Database configuration
│   └── entities/
│       └── User.js        # User entity definition
├── routes/
│   └── logicRoutes.js     # API route handlers
└── services/
    └── userService.js     # Business logic for users
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Khushal Pankhaniya**



