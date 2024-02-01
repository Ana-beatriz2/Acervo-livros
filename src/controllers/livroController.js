import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
    static async listaLivros(req, res, next) {
        try{
            const livros = await livro.find({});
            if (!livros.length){
                return next(new NaoEncontrado("Nenhum livro foi encontrado!"));
            } 
                
            return res.status(200).json(livros);
        } catch (error){
            next(error);
        }
    }

    static async listaLivro(req, res, next) {
        const { id } = req.params;

        try{
            const livroRetorno = await livro.findById(id);

            if (!livroRetorno){
                return next(new NaoEncontrado("Livro não encontrado!"));
            } 

            return res.status(200).json(livroRetorno);
        } catch (error){
            next(error);
        }
    }

    static async listaLivroPorEditora(req, res, next) {
        const { editora } = req.query;

        try{
            const livrosPorEditora = await livro.find({editora});

            if (!livrosPorEditora.length){
                return next(new NaoEncontrado("Nenhum livro foi encontrado!"));
            } 

            return res.status(200).json(livrosPorEditora); 
        } catch(error){
            next(error);
        }
    }

    static async cadastraLivro(req, res, next) {
        const novoLivro = req.body;

        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
            const livroCadastrado = await livro.create(livroCompleto);
            
            return res.status(201).json({message: "Livro cadastrado com sucesso!", Livro: livroCadastrado});
        } catch (error){
            next(error);
        }
    }

    static async atualizaLivro(req, res, next) {
        const { id } = req.params;

        try{
            const livroParaAtualizacao = await livro.findByIdAndUpdate(id, req.body);

            if (!livroParaAtualizacao){
                return next(new NaoEncontrado("Livro não encontrado!"));
            }

            return res.status(200).json({message: "Livro atualizado com sucesso!"});
        } catch (error){
            next(error);
        }
    }

    static async deletaLivro(req, res, next) {
        const { id } = req.params;

        try{
            const livroParaExclusao = await livro.findByIdAndDelete(id);

            if (!livroParaExclusao){
                return next(new NaoEncontrado("Livro não encontrado!"));
            }

            return res.status(200).json({message: "Livro deletado com sucesso!"});
        } catch (error){
            next(error);
        }
    }
}

export default LivroController;