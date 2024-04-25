const express = require('express');
const app = express();
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require("dotenv").config();
const cors = require('cors');
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
