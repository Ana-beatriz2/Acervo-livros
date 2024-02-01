import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, "O título do livro é obrigatório."] },
    editora: { type: String /* enum: {values: ["Alura", "4 ventos"], message: "A editora {VALUE} não é permitida!"}*/},
    valor: { type: Number },
    paginas: { type: Number, min: [10, "{VALUE} não é um número de páginas entre 10 e 5000"], max: [5000, "{VALUE} não é um número de páginas entre 10 e 5000"]},
    autor: autorSchema // embedding
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;