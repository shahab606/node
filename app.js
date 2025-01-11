const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! change two test test tstetsetst');
});

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.211.142:${port}`);
});

