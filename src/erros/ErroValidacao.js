import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta{
    constructor(error){
        const mensagensErro = Object.values(error.errors).map(erro => erro.message).join("; "); //Object.values -> função para percorrer objetos

        super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
    }
}

export default ErroValidacao;