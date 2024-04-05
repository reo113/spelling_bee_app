const express = require('express');
const app = express();
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();




app.use(express.json());

// Set up your SQLite database and routes here
router.post('/saveGame', async (req, res) => {
  const { userId, questions } = req.body;

  try {
    const game = await prisma.game.create({
      data: {
        userId,
        questions: {
          createMany: {
            data: questions,
          },
        },
      },
      include: {
        questions: true,
      },
    });

    res.status(201).json(game);
  } catch (error) {
    console.error('Error saving game:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
