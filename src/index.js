const express = require('express');
const { uuid } = require('uuidv4');

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

const projects = [];

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return response.json(results);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found' });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return response.json(projects);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found' });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(port, () => {
  console.log(`🚀Back-end started port ${port}!`);
});
