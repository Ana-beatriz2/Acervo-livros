import mongoose from "mongoose";
import { autor } from "../models/Autor.js";

class AutorController {
    static async listaAutores(req, res) {
        try{
            const autores = await autor.find({});
            return res.status(200).json(autores);
        } catch (error){
            return res.status(500).json({message: `${error.message} - Erro ao retornar autores!`});
        }
    }

    static async listaAutor(req, res) {
        const { id } = req.params;

        try{
            const autorRetornado = await autor.findById(id);

            if (autorRetornado){
                return res.status(200).json(autorRetornado);
            } 
            
            return res.status(404).json({message: "Autor não encontrado!"});
        } catch (error){
            if (error instanceof mongoose.Error.CastError){
                return res.status(400).json({message: "Um ou mais dados fornecidos estão incorretos."});
            }

            return res.status(500).json({message: `${error.message} - Erro ao retornar autor!`});
        }
    }

    static async cadastraAutor(req, res){
        try{
            const autorCadastrado = await autor.create(req.body);
            return res.status(201).json({message: "Autor criado com sucesso!", Autor: autorCadastrado});
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Erro ao criar autor!`});
        }
    }

    static async atualizaAutor(req, res) {
        const { id } = req.params;

        try{
            await autor.findByIdAndUpdate(id, req.body);
            return res.status(200).json({message: "Autor atualizado com sucesso!"});
        } catch (error){
            return res.status(500).json({message: `${error.message} - erro ao atualizar autor!`});
        }
    }

    static async deletaAutor(req, res) {
        const { id } = req.params;

        try{
            await autor.findByIdAndDelete(id);
            return res.status(200).json({message: "Autor deletado com sucesso!"});
        } catch (error){
            return res.status(500).json({message: `${error.message} - erro ao deletar autor!`});
        }
    }
}

export default AutorController;