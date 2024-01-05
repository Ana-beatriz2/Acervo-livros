import livro from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res) {
        try{
            const livros = await livro.find({});
            return res.status(200).json(livros);
        } catch (error){
            return res.status(500).json({message: `${error.message} - erro ao listar livros!`});
        }
    };

    static async listarLivro(req, res) {
        try{
            const { id } = req.params;
            const livroRetorno = await livro.findById(id);
            return res.status(200).json(livroRetorno);
        } catch (error){
            return res.status(500).json({message: `${error.message} - erro ao listar livro!`});
        }
    };

    static async cadastraLivro(req, res) {
        try{
            const livroCadastrado = await livro.create(req.body);
            return res.status(201).json({message: "Livro cadastrado com sucesso!", Livro: livroCadastrado});
        } catch (error){
            console.log(error)
            return res.status(500).json({message: `${error.message} - erro ao cadastrar livro!`});
        }
    };

    static async atualizaLivro(req, res) {
        try{
            const { id } = req.params;
            await livro.findByIdAndUpdate(id, req.body);
            return res.status(200).json({message: "Livro atualizado com sucesso!"});
        } catch (error){
            return res.status(500).json({message: `${error.message} - erro ao atualizar livro!`});
        }
    };

    static async deletaLivro(req, res) {
        try{
            const { id } = req.params;
            await livro.findByIdAndDelete(id);
            return res.status(200).json({message: "Livro deletado com sucesso!"});
        } catch (error){
            return res.status(500).json({message: `${error.message} - erro ao deletar livro!`})
        }
    };
};

export default LivroController;