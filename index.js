const path = require('path');
const express = require('express');
const gun = require('gun');
const app = express();
const port = process.env.PORT || 3030;
app.use(gun.serve);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const server = app.listen(port, () => {
  console.info(`✔ App is running on port ${port}.`)
});

gun({ web: server });