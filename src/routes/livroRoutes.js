import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listaLivros);
routes.get("/livros/busca", LivroController.listaLivroPorEditora);
routes.get("/livros/:id", LivroController.listaLivro);
routes.post("/livros", LivroController.cadastraLivro);
routes.put("/livros/:id", LivroController.atualizaLivro);
routes.delete("/livros/:id", LivroController.deletaLivro);


export default routes;