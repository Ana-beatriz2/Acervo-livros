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

export default app;