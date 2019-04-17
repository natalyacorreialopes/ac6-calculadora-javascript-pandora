
// addEventListener()
let buttons   = document.querySelectorAll('.calculadora button');
let sinais    = ['-', '*', '/', '+']
let resultado = document.querySelector('#resultado')

buttons.forEach(button => {
    
    button.addEventListener('click', e => {
        let buttonValue = button.innerText

        if (resultado.value === 'Erro de operação') {
            resultado.value = '';
        }

        if (buttonValue === '=') {
            somar();
            conteudoClicado = '';
        } else {
            /**
             * Verificando se o botão clicado é algum sinal
             */
            if (sinais.indexOf(buttonValue) >= 0) {
                let validado = true;
                /**
                 * Verificando se o resultado possui já algum sinal
                 */
                sinais.forEach(sinal => {
                    if (resultado.value.indexOf(sinal) >= 0) validado = false
                })

                if (validado === false) return false
            }
            if (sinais.indexOf(buttonValue) >= 0 && resultado.value === '') return false

            if (buttonValue === '.') {
                if (resultado.value !== '') {
                    
                    let arrayString = separarNumeros(resultado.value)
                    if (arrayString[arrayString.length-1].indexOf('.') >= 0) return false

                }
            }
            resultado.value += buttonValue;
        }
        
    });
});


separarNumeros = (string) => {
    let stringSeparada      = '';

    for(let key in string) {
        if (sinais.indexOf(string[key]) >= 0) {
            stringSeparada += ' ' + string[key] + ' ';
        } else {
            stringSeparada += string[key];
        }
    }

    return stringSeparada.split(' ');
}


somar = () => {
    let resultado = document.querySelector('#resultado').value;
    let arrayString = separarNumeros(resultado);
    let arrayNumero = [];

    
    if (arrayString.length !== 3) return false;
    if (arrayString[2] === '') {
        document.querySelector('#resultado').value = 'Erro de operação';
        return false;
    }
    

    arrayString.forEach(string => {
        if (sinais.indexOf(string) === -1) {
            if (string.indexOf('.') === -1) arrayNumero.push(parseInt(string));
            else arrayNumero.push(parseFloat(string));
        } else {
            arrayNumero.push(string);
        }
    })

    switch (arrayNumero[1]) {
        case '+':
            document.querySelector('#resultado').value = arrayNumero[0] + arrayNumero[2]
            break;
        case '-':
            document.querySelector('#resultado').value = arrayNumero[0] - arrayNumero[2]
            break;
        case '*':
            document.querySelector('#resultado').value = arrayNumero[0] * arrayNumero[2]
            break;
        case '/':
            document.querySelector('#resultado').value = arrayNumero[0] / arrayNumero[2]
            break;
    }
    
    
}