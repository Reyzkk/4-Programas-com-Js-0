/*Crie um programa que simule um sistema bancário. Você deverá ler o saldo inicial do usuário e, em seguida, ler o valor da compra que este deseja realizar. Se o valor da compra for menor ou igual ao saldo inicial da conta, o programa deve informar que a compra ocorreu corretamente e retornar o valor do saldo atual. Se o valor da compra for maior do que o saldo inicial, você deverá retornar a mensagem “saldo insuficiente”.*/





function comprar() {
    let valorInicial = Number(prompt('Digite o valor'));
    let valorCompra = 2000;
    let valorRetornado = valorInicial - valorCompra;

    if (valorInicial >= valorCompra) {
        document.getElementById('dinheiro').innerHTML = "Sucesso! valor retornado R$" + valorRetornado;
    } else if (valorInicial < valorCompra) {
        document.getElementById('dinheiro').innerHTML = "Saldo Insuficiente ;-; ";
    }
}



/*Faça uma calculadora. Escreva um programa que receba dois números inteiros. Em seguida, deve ser recebido um caracter (“+”, “-”, “*” ou “/”) que indicará a operação a ser efetuada com esses dois números. Por último, deve ser mostrado na tela o resultado da operação entre esses dois números.*/



function clicar() {
    let number1 = document.getElementById('numero1').value;
    let caracter = document.getElementById('caracter').value;
    let number2 = document.getElementById('numero2').value;


    if (caracter == '+') {
        document.getElementById('resultado').innerHTML = Number(number1) + Number(number2);
    } else if (caracter == "-") {
        document.getElementById('resultado').innerHTML = Number(number1) - Number(number2);
    } else if (caracter == "*" || `x`) {
        document.getElementById('resultado').innerHTML = Number(number1) * Number(number2);
    } if (caracter == "/") {
        document.getElementById('resultado').innerHTML = Number(number1) / Number(number2);
    } else if(caracter == "" || null) {
        document.getElementById('resultado').innerHTML = 'Coloque um caracter valido (+, -, x, *, /)';
    }
}

/*As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.*/



function guardarStatus() {
    let salario = document.getElementById('salario').value;
    let percentual = 0; 
    let aumento = 0;
    let novoSalario = 0;

 if(salario > 0 && salario <= 280){
    percentual = 20;
    aumento = salario * 0.20;
    novoSalario = parseFloat(salario) + parseFloat(aumento);
 } else if(salario >= 280 && salario <= 700) {
    percentual = 15;
    aumento = salario * 0.15;
    novoSalario = parseFloat(salario) + parseFloat(aumento);
 } else if(salario >= 700 && salario <= 1500) {
    aumento = salario * 0.10;
    percentual = 10;
    novoSalario = parseFloat(salario) + parseFloat(aumento);
 } else if(salario > 1500) {
    percentual = 5;
    aumento = salario * 0.05;
    novoSalario = parseFloat(salario) + parseFloat(aumento);

} else if(salario == 0 || null) {
percentual = 0;
salario = 0;
}
 else {
    percentual =5;
    aumento = salario * 0.05;
    novoSalario = parseFloat(salario) + parseFloat(aumento);
}

document.getElementById('stats').innerHTML = "Salario: $" + salario + "<br>"+"Percentual: " + percentual +"%" + "<br>"+ "Aumento: $" + aumento + "<br>" + "Novo Salario: $" + novoSalario  


}
   

/*Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

    Dicas:
    Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
        Triângulo Equilátero: três lados iguais;
        Triângulo Isósceles: quaisquer dois lados iguais;
        Triângulo Escaleno: três lados diferentes;*/


function ladosTriangulo() {
    let ladoA = Number(prompt('informe o lado A'))
    let ladoB = Number(prompt('informe o lado B'))
    let ladoC = Number(prompt('informe o lado C'))


    if(ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA) {
        alert('isso não é um triangulo')
    } else if(ladoA == ladoB && ladoA == ladoC) {
        alert('isso é um triangulo Equilatero')
    } else if(ladoA == ladoB || ladoA==ladoC || ladoB == ladoC) {
        alert('Isosceles')
    } else {
        alert("Escaleno")
    }
}