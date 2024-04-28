const express = require('express');
const app = express();
const router = express.Router();
require("dotenv").config();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const definition = require("./routes/definition");
app.use("/definition", definition);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
