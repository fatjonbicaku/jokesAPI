const jokeController = require("../controllers/joke.controller");

module.exports = app =>{
  app.get("/api/jokes", jokeController.listAllJokes);
  app.get("/api/jokes/:id", jokeController.getJokeById);
  app.post("/api/jokes/new" , jokeController.createJoke);
  app.patch("/api/jokes/:id" , jokeController.editJoke);
  app.delete("/api/jokes/:id", jokeController.deleteJoke);
}