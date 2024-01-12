/* eslint-disable no-undef */

import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

//Faz com que todos os erros, até mesmo os do programador, sejam "tratados" aqui
// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(error, req, res, next){
    console.log(error);
    // erro para quando o id passado for inválido
    if (error instanceof mongoose.Error.CastError){
        new RequisicaoIncorreta().enviarMensagem(res);
    } else if (error instanceof mongoose.Error.ValidationError){
        new ErroValidacao(error).enviarMensagem(res);
    } else if (error instanceof NaoEncontrado) {
        error.enviarMensagem(res);
    } else{
        new ErroBase().enviarMensagem(res);
    }
}

export default manipuladorDeErros;