const express = require('express');
const app = express();
const port = 3333;

/**
 * HTTP Methods
 * GET: get information from back-end
 * POST: create information in back-end
 * PUT/PATCH: PUT(all) PATCH(particular one), change information in back-end
 * DELETE: delete information in back-end
 */

app.get('/projects', (request, response) => {
  return response.json(['Project 1', 'Project 2']);
});

app.post('/projects', (request, response) => {
  return response.json(['Project 1', 'Project 2', 'Project 3']);
});

app.put('/projects/:id', (request, response) => {
  return response.json(['Project 1', 'Project 2', 'Project 3']);
});

app.delete('/projects/:id', (request, response) => {
  return response.json(['Project 1', 'Project 2', 'Project 3']);
});

app.listen(port, () => {
  console.log(`🚀Back-end started port ${port}!`);
});

