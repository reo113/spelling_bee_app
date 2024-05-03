const express = require("express");
const _ = require("lodash");
const { db } = require("../../utils/db");
const router = express.Router();

router.post('/', async (req, res) => {
    const { reponse, questionId, userId, isCorrect } = req.body;
    try {
        const response = await db.response.create({
            data: {
                reponse,
                 questionId,
                 userId,
                 isCorrect
            }
        });
        res.json(response);
    } catch (error) {
        if (error.code === 'P2003') {
            return res.status(400).send('Foreign key constraint failed. Check the validity of the IDs.');
        }
        console.error("Error creating Reponse:", error);
        res.status(500).send("Server Error")
    }
});
module.exports = router;