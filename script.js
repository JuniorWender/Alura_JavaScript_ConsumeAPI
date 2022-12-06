var cep = document.getElementById('cep');
var cidade = document.getElementById('cidade');
var logradouro = document.getElementById('logradouro');
var estado = document.getElementById('estado');
var erro = document.getElementById('erro');


cep.addEventListener("focusout", () => buscaEndereco(cep.value));

async function buscaEndereco(cep) {
    erro.innerHTML = "";

    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var CEPConvertido = await consultaCEP.json();

        if (CEPConvertido.erro){
            throw Error('CEP inexistente!');
        }
        
        cidade.value = CEPConvertido.localidade;
        logradouro.value = CEPConvertido.logradouro;
        estado.value = CEPConvertido.uf;
        console.log(CEPConvertido);

        return CEPConvertido;
    }
    catch(erro){
        erro.innerHTML = '<p> CEP inválido. Tente Novamente! </p>';
    }
}
