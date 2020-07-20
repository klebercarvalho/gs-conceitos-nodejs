const express = require('express');
const app = express();
app.use(express.json());
const port = 3333;

/**
 * HTTP Methods
 * GET: get information from back-end
 * POST: create information in back-end
 * PUT/PATCH: PUT(all) PATCH(particular one), change information in back-end
 * DELETE: delete information in back-end
 */

/**
 * Tipos de parâmetros
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (atualizar/deletar)
 * Request Body: Conteudo na hora de criar ou editar um recurso (JSON)
 */

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;

  console.log(title);
  console.log(owner);

  return response.json(['Project 1', 'Project 2']);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  console.log(title);
  console.log(owner);

  return response.json(['Project 1', 'Project 2', 'Project 3']);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  console.log(id);

  return response.json(['Project 1', 'Project 2', 'Project 3']);
});

app.delete('/projects/:id', (request, response) => {
  return response.json(['Project 1', 'Project 2', 'Project 3']);
});

app.listen(port, () => {
  console.log(`🚀Back-end started port ${port}!`);
});
