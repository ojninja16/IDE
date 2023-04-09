const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/python', (req, res) => {
  console.log(req.body);
  res.json({message: "reached!"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})