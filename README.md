# OWNAI_NODEJS

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MySQL with TypeORM
- **Authentication**: JWT 

## Installation & Setup

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
JWT_SECRET=your_jwt_secret_key
```

### 4. Database Setup
- Create a MySQL database

### 5. Run the Application
```bash
npm run dev

##  API Endpoints

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



## Database Schema
 `users` table 

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


Common HTTP status codes:
- `200`: Success
- `201`: Created (for registration)
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Server Error

