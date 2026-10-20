// let animal = "macaco";
// let quant = 30;
// let aniamlQuant = {nome:"macaco", quant:30};
//     console.log(animal);
//     console.log(quant);
//     console.log(aniamlQuant);
    

// let preco;
// console.log(preco);
// console.log(typeof preco);

// let soma = 2+2
// let subtracao = 2-2
// let multiplicacao = 2*2
// let divisao = 2/2
// let resto = 2 % 2

// console.log(`
//     ${soma}
//     ${subtracao}
//     ${multiplicacao}
//     ${divisao}
//     ${resto}`
// );

// const temcarteira = true
// const maiordeidade = false 
// const podeconduzir = temcarteira && maiordeidade;
// console.log(podeconduzir);
// const temcarteira = true
// const maiordeidade = false
// const satisfazum = temcarteira || maiordeidade
// console.log(satisfazum);

// let ativo = true
// let inativo = !ativo
// console.log("ativo:", ativo)
// console.log("inativo:", inativo);

// let number = 24
// console.log(typeof number);
// let number2 = String (24)
// console.log(typeof number2);

// const resultado = '10' - 2;
// console.log(resultado);
// console.log(typeof resultado);

// const textoDecimal = '123.45'
// const numeroConvertido = Number(textoDecimal)
// const total = numeroConvertido + 10
// console.log(total);

// console.log(Boolean (0));
// console.log(Boolean(""));
// console.log(Boolean(100));
// console.log(Boolean("gato"));

// let saldo = 100
// saldo += 54
// saldo -= 20
// saldo *= 2
// saldo /= 4
// console.log("saldo final:", saldo);

// const idade = 20
// const mensagem = idade > 18 ? 'pode' : 'não'
// console.log(mensagem);

// const frutas = ['uva', 'pera', 'maçã'];

// for (const fruta of frutas) {
// console.log("Fruta da vez:", fruta);

// const idade = 70
// const mensagem = idade > 60 ? 'aposenta' : 'não aposenta'
// console.log(mensagem);

// const color = 'vermelho';

// switch (color) {
// case 'vermelho': console.log('Pare')
// break;

// case 'amarelo': console.log('Atenção');

// case 'verde': console.log('Siga');
// break;
// }

// let j = 0;

// while (j < 3) {
// console.log("Valor de j:", j);
// j++;
// }


// const nums = [1,2,3,4];
// const triplo = nums.map(n => n * 3);
// console.log(triplo); 


// const idades =[12,17,18,22,15,30];
// const maiores = idades.filter(i => i >= 18);
// console.log(maiores); 

const comidas = [
  'banana', 'maça', 'uva', 'limão',
  'abobora', 'beterraba', 'rabanete'
];

const frutas = comidas.filter(comida =>
  ['banana', 'maça', 'uva', 'limão'].includes(comida)
);

const legumes = comidas.filter(comida =>
  ['abobora', 'beterraba', 'rabanete'].includes(comida)
);

console.log(frutas);


console.log(legumes);


const salarios = [1200, 50, 100, 1350, 300, 1450];

const salarioAlto = salarios.filter(salario => salario >= 1000);

const salarioBaixo = salarios.filter(salario => salario < 1000);

console.log(salarioAlto);

console.log(salarioBaixo);


const numeros = [5, 10, 15, 20, 25];

const resultado = numeros.filter(numero => numero > 15);

console.log(resultado);
