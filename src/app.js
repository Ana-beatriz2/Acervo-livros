import express from "express"
import connectDatabase from "../src/config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectDatabase();

conexao.on("error", (error) => {
    console.log("Erro ao se conectar com o banco: ", error.message);
})

conexao.once("open", () => {
    console.log("Conexão realizada com sucesso!");
})

const app = express();
routes(app);

app.get("/livros/:id", (req, res) => {
    const { id } = req.params;

    const index = buscarLivro(id);
    return res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).json({messgae: "Livro cadastrado com sucesso!"});
})

app.put("/livros/:id", (req, res) => {
    const { id } = req.params;
    const { titulo } = req.body;

    const index = buscarLivro(id);
    livros[index].titulo = titulo;

    return res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const { id } = req.params;

    const index = buscarLivro(id);
    livros.splice(index, 1);

    res.status(200).json({message: "Livro deletado com sucesso!"});
})

export default app;

// mongodb+srv://admin:jesusemeuamigo@cluster0.qcvstes.mongodb.net/livraria?retryWrites=true&w=majority