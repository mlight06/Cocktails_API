const express = require('express');
const path = require('path');

const port = 3050;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
