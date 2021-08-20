console.log('Javascript carregado');

function validaCPF(cpf) {
    // console.log(cpf.length);
    if(cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);
        
        return true;
    }  
}

function validacao() {
    console.log('Iniciando validação CPF');
    
    // O CPF digitado vai ser capturado através do JavaScript dentro do HTML e vai ser amarzenado na variável abaixo.
   
    var cpf = document.getElementById('cpf_digitado').value;
    
    var resultadovalidacao = validaCPF(cpf);

    if (resultadovalidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}