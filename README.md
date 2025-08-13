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

### 4. Database Setup
- Create a MySQL database.

### 5. Run the Application
```bash
npm run dev


##  API Endpoints

#### Register User
- **URL**: `POST /[register](http://localhost:3000/register)`
- **Description**: Create a new user account
- **Body**:
```json
{
  "name": "khushal",
  "email": "khushal@example.com",
  "password": "123",
  "role": "Admin",
  "phone": "1234567890",
  "city": "rajkot",
  "country": "inida"
}
```
- **Response**:
```json
{
  "success": true,
  "message": "Signup for khushal@example.com"
}
```

#### Login User
- **URL**: `POST /[login](http://localhost:3000/loign)`
- **Description**: authenticate user and get JWT token
- **Body**:
```json
{
  "email": "khushal@example.com",
  "password": "123"
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
- **URL**: `GET /[:id](http://localhost:3000/:id)`
- **Description**: Get details of a specific user
- **Response**:
```json
{
  "success": true,
  "user": {
    "id": 1,
    "name": "khushal",
    "email": "khushal@example.com",
    "role": "admin",
    "phone": "1234567890",
    "city": "rajkot",
    "country": "india"
  }
}
```

#### Filter Users by Country
- **URL**: `GET /[filter?country=india](http://localhost:3000/filter?country=india)`
- **Description**: Get all users from  specific country
- **Response**:
```json
{
  "success": true,
  "users": [
    {
      "id": 1,
      "name": "khushal",
      "email": "khushal@example.com",
      "country": "india"
    }
  ]
}
```

### Admin Only Endpoints

#### Get All Users
- **URL**: `GET /[all](http://localhost:3000/all)`
- **Description**: Get list of all users (Admin only)
- **Response**:
```json
{
  "success": true,
  "users": [
    {
      "id": 1,
      "name": "khushal",
      "email": "khushal@example.com",
      "role": "Admin"
    }
  ]
}
```

#### Search Users
- **URL**: `GET /[search?query=khushal](http://localhost:3000/search?query=khushal)`
- **Description**: Search users by name or email (Admin only)
- **Response**:
```json
{
  "success": true,
  "users": [
    {
      "id": 1,
      "name": "khushal",
      "email": "khushal@example.com"
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
- `201`: Created 
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Server Error

