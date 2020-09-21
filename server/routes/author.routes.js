const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get("/api/authors",AuthorController.index);
    app.post("/api/create/author",AuthorController.create);
    app.get("/api/author/:id",AuthorController.show);
    app.put("/api/update/author/:id",AuthorController.update);
    app.delete("/api/destroy/author/:id",AuthorController.destroy);

}