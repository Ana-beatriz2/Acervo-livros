import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autor } from "../models/Autor.js";

class AutorController {
    static async listaAutores(req, res, next) {
        try{
            const autores = await autor.find({});

            if (!autores.length){
                return next(new NaoEncontrado("Nenhum autor foi encontrado!"));
            } 

            return res.status(200).json(autores);
        } catch (error){
            next(error);
        }
    }

    static async listaAutor(req, res, next) {
        const { id } = req.params;

        try{
            const autorRetornado = await autor.findById(id);

            if (!autorRetornado){
                return next(new NaoEncontrado("Autor não encontrado!"));
            } 
            
            return res.status(200).json(autorRetornado);
        } catch (error){
            next(error);
        }
    }

    static async cadastraAutor(req, res, next){
        try{
            const autorCadastrado = await autor.create(req.body);
            return res.status(201).json({message: "Autor criado com sucesso!", Autor: autorCadastrado});
        } catch (error) {
            next(error);
        }
    }

    static async atualizaAutor(req, res, next) {
        const { id } = req.params;

        try{
            const autorParaAtualizacao = await autor.findByIdAndUpdate(id, req.body);

            if (!autorParaAtualizacao){
                return next(new NaoEncontrado("Autor não encontrado!"));
            } 

            return res.status(200).json({message: "Autor atualizado com sucesso!"});
        } catch (error){
            next(error);
        }
    }

    static async deletaAutor(req, res, next) {
        const { id } = req.params;

        try{
            const autorParaExclusao = await autor.findByIdAndDelete(id);

            if (!autorParaExclusao){
                return next(new NaoEncontrado("Autor não encontrado!"));
            } 

            return res.status(200).json({message: "Autor deletado com sucesso!"});
        } catch (error){
            next(error);
        }
    }
}

export default AutorController;