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
        
        // Soma mod 11 é menor do que 2? Se for verdadeiro (?) atribua o valor 0, se não for (:) faça o que estiver após os dois pontos.
        // VALIDAÇÃO DO PRIMEIRO DÍGITO.
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(0)) {
            return false;
        }
        
        soma = 0;
        numeros = cpf.substring(0, 10);
        
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        // VALIDAÇÃO DO SEGUNDO DÍGITO.
        if (resultado != digitos.charAt(1)) {
            return false;
        }
 
        return true;
    }  
}

function validacao() {
    console.log('Iniciando validação CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    
    // O CPF digitado vai ser capturado através do JavaScript dentro do HTML e vai ser armazenado na variável abaixo.
    var cpf = document.getElementById('cpf_digitado').value;
    
    var resultadovalidacao = validaCPF(cpf);

    if (resultadovalidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}