const express = require("express");

const app = express();
app.use(express.json());

// Pseudo Databases

const projects = [
  {
    id: "1",
    title: "My first project on the database",
    tasks: ["Pay my montlhy subscription", "Buy a SSD"]
  }
];

let count = 0;
let index = 0;
let project = projects[0];

function checkIfProjectExists(req, res, next) {
  const { id } = req.params;
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].id === id) {
      project = projects[i];
      index = i;
      return next();
    }
  }
  return res.status(400).json({ error: "Project not found" });
}

app.use((req, res, next) => {
  count += 1;
  console.log(count);
  next();
});

// Rotas
app.get("/test", (req, res) => {
  res.json(projects);
});

app.post("/projects", (req, res) => {
  const payload = req.body;
  const { id } = payload;
  const { title } = payload;
  const { tasks } = payload;
  const newProject = {
    id,
    title,
    tasks
  };
  projects.push(newProject);
  res.send();
});

app.get("/projects", (req, res) => {
  let renderContent = "";
  for (let i = 0; i < projects.length; i += 1) {
    renderContent += `
    Id: ${projects[i].id}<br>
    Project: ${projects[i].title}<br>
    Your tasks: ${projects[i].tasks}
    <br><br>
    `;
  }
  res.send(renderContent);
});

app.put("/projects/:id", checkIfProjectExists, (req, res) => {
  project.title = req.body.title;
  res.send();
});

app.delete("/projects/:id", checkIfProjectExists, (req, res) => {
  projects.splice(index, 1);
  res.send();
});

app.post("/projects/:id/tasks", checkIfProjectExists, (req, res) => {
  const { title } = req.body;
  project.tasks.push(title);
  res.send();
});

app.listen(3000);
