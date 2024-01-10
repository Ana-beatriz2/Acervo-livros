/* eslint-disable no-undef */

import mongoose from "mongoose";

//Faz com que todos os erros, até mesmo os do programador, sejam "tratados" aqui
// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(error, req, res, next){
    console.log(error);

    // erro para quando o id passado for inválido
    if (error instanceof mongoose.Error.CastError){
        return res.status(400).json({message: "Um ou mais dados fornecidos estão incorretos."});
    }

    return res.status(500).json({message: `${error.message} - Erro interno!`});
}

export default manipuladorDeErros;