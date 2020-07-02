const express = require('express');
const app = express();
const port = 3333;

app.get('/project', (request, response) => {
  return response.json({ message: 'Hello World!' });
});
app.listen(port, () => {
  console.log(`🚀Back-end started port ${port}!`);
});
