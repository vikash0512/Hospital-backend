# Hospital Management Backend

This is the backend server for the Hospital Management System.

## Environment Variables

Create a `.env` file in the root directory and add the following:

```
PORT=3001
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
```

## Deployment on Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Fill in the following details:
   - Name: `hospital-management-backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Auto-Deploy: Yes

4. Add the following environment variables in Render:
   - `PORT`: Will be automatically set by Render
   - `NODE_ENV`: `production`
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `JWT_EXPIRE`: `30d`

## API Documentation

### Base URL
- Development: `http://localhost:3001/api/v1`
- Production: `https://your-render-url.onrender.com/api/v1`

### Authentication Endpoints

#### Register User
- POST `/auth/register`
- Body: `{ "name", "email", "password", "role" }`

#### Login User
- POST `/auth/login`
- Body: `{ "email", "password" }`

### Hospital Endpoints

#### Get All Hospitals
- GET `/hospitals`

#### Get Single Hospital
- GET `/hospitals/:id`

#### Create Hospital
- POST `/hospitals`
- Protected Route
- Body: `{ "name", "address", "contact" }`

#### Update Hospital
- PUT `/hospitals/:id`
- Protected Route
- Body: `{ "name", "address", "contact" }`

#### Delete Hospital
- DELETE `/hospitals/:id`
- Protected Route 