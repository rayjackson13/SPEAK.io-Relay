const express = require('express');
const gun = require('gun');
const app = express();
const port = 3030;
app.use(gun.serve);

const server = app.listen(port, () => {
  console.info(`✔ App is running on port ${port}.`)
});

gun({ web: server });