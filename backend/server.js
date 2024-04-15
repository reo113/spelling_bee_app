const express = require('express');
const app = express();
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { auth, requiresAuth } = require('express-openid-connect');
require("dotenv").config();
const cors = require('cors');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: 'http://localhost:3001',
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
app.use(express.json());
app.use(cors({origin: 'http://localhost:5173'}));

// Set up your SQLite database and routes here
// router.post('/saveGame', async (req, res) => {
//   const { userId, questions } = req.body;

//   try {
//     const game = await prisma.game.create({
//       data: {
//         userId,
//         questions: {
//           createMany: {
//             data: questions,
//           },
//         },
//       },
//       include: {
//         questions: true,
//       },
//     });

//     res.status(201).json(game);
//   } catch (error) {
//     console.error('Error saving game:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
