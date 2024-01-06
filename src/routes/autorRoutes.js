import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listaAutores);
routes.get("/autores/:id", AutorController.listaAutor);
routes.post("/autores", AutorController.cadastraAutor);
routes.put("/autores/:id", AutorController.atualizaAutor);
routes.delete("/autores/:id", AutorController.deletaAutor);


export default routes;