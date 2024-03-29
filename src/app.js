import express from "express";
import connectDatabase from "../src/config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await connectDatabase();

conexao.on("error", (error) => {
    // eslint-disable-next-line no-undef
    console.log("Erro ao se conectar com o banco: ", error.message);
});

conexao.once("open", () => {
    // eslint-disable-next-line no-undef
    console.log("Conexão realizada com sucesso!");
});

const app = express();
routes(app);

app.use(manipulador404); // para rotas que não forem encontradas
app.use(manipuladorDeErros);

export default app;