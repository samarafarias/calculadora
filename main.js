const form = document.querySelector('#formulario');


function imc(event){
    event.preventDefault();
    
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //validação

    if(altura !== '' && peso !==''){

        const calculoIMC = (peso / (altura * altura)).toFixed();
        
        let classificacao = '';

        if (calculoIMC < 18.5){
            classificacao = 'abaixo do peso.';
            resultado.style.backgroundColor = '#cc3333';
        }else if(calculoIMC < 25){
            classificacao = 'no peso ideal.';
            resultado.style.backgroundColor = '#33cc33';
        }else if(calculoIMC < 30){
            classificacao = 'levemente acima do peso.';
            resultado.style.backgroundColor = '#cccc33';
        }else if(calculoIMC < 35){
            classificacao = 'com obesidade grau I.';
            resultado.style.backgroundColor = '#cc8033';
        }else if(calculoIMC < 40){
            classificacao = 'com obesidade grau II.';
            resultado.style.backgroundColor = '#cc5933';
        }else{
            classificacao = 'com obesidade grau III.';
            resultado.style.backgroundColor = '#cc3333';
        }

        resultado.textContent =  `Seu IMC é ${calculoIMC} e você está ${classificacao}`; 

    }else{
        resultado.textContent = 'Preencha os campos!!' 
    }
}

calcular.addEventListener('click', imc);
