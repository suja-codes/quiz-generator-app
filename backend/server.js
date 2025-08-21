const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});