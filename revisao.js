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

// const comidas = [
//   'banana', 'maça', 'uva', 'limão',
//   'abobora', 'beterraba', 'rabanete'
// ];

// const frutas = comidas.filter(comida =>
//   ['banana', 'maça', 'uva', 'limão'].includes(comida)
// );

// const legumes = comidas.filter(comida =>
//   ['abobora', 'beterraba', 'rabanete'].includes(comida)
// );

// console.log(frutas);


// console.log(legumes);


// const salarios = [1200, 50, 100, 1350, 300, 1450];

// const salarioAlto = salarios.filter(salario => salario >= 1000);

// const salarioBaixo = salarios.filter(salario => salario < 1000);

// console.log(salarioAlto);

// console.log(salarioBaixo);


// const numeros = [5, 10, 15, 20, 25];

// const resultado = numeros.filter(numero => numero > 15);

// console.log(resultado);

// let arrayMap = [1,2,3,4]
// arrayMap.map((array) => console.log(array));
// let idade = [12, 17, 22, 67, 30]
// let filter = idade.filter ((idade) => idade > 20)
// let map = idade.map ((idade) => idade * 20)
// console.log(filter)
// console.log(map);
// const objeto = {
//     Nome: 'ana',
//     idade: 15,
// }
// const { idade} = objeto;
// console.log(idade)




// const mesadas = [5, 10, 15];
// const mesadasDobradas = mesadas.map(mesada => mesada * 2);
// console.log("exercício 1:", mesadasDobradas);


// const pontos = [3, 7, 10];
// const pontosTurbinados = pontos.map(ponto => ponto + 5);
// console.log("exercício 2:", pontosTurbinados);


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const pares = numeros.filter(numero => numero % 2 === 0);
// console.log("exercício 3:", pares);


// const precos = [15, 30, 8, 22, 12];
// const precosBaratos = precos.filter(preco => preco <= 20);
// console.log("exercício 4:", precosBaratos);


// const moedas = [1, 0.5, 0.25, 1, 0.25];
// const totalMoedas = moedas.reduce((total, moeda) => total + moeda, 0);
// console.log("exercício 5:", totalMoedas);


// const fases = [120, 80, 200, 50];
// const totalPontos = fases.reduce((total, pontos) => total + pontos, 0);
// console.log("exercício 6:", totalPontos);


// const colegas = ["qna", "pedro", "maria", "lucas", "joão"];
// colegas.forEach(nome => console.log(`presente, ${nome}!`));


// const figurinhas = ["leão", "tigre", "urso"];
// figurinhas.forEach(animal => console.log(`tenho a figurinha do ${animal}`));


// const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const imparesAoQuadrado = numeros2
//     .filter(numero => numero % 2 !== 0)
//     .map(numero => numero * numero);
// console.log("exercício 9:", imparesAoQuadrado);


// const lista = [1, 2, 3, 4, 5, 6];
// const resultadoCombo = lista
//     .filter(numero => numero % 2 === 0)
//     .map(numero => numero * 2)
//     .reduce((total, numero) => total + numero, 0);
// console.log("exercício 10:", resultadoCombo);


// const mochila1 = ["lápis", "caderno"];
// const mochila2 = ["borracha", "régua"];
// const mochilaCompleta = [...mochila1, ...mochila2];
// console.log("exercício 11:", mochilaCompleta);
// console.log("quantidade de itens:", mochilaCompleta.length);


// const heroi = { nome: "raio azul", poder: "velocidade", nivel: 7 };
// const { nome, poder } = heroi;
// console.log(`exercício 12: ${nome} tem o poder de ${poder}`);

// const carrinho = [10,20.5,30];
// const total = carrinho.reduce((acc, p) => acc + p, 0);
// console.log(total);
// const nomes = ['ana','carlos','joão'];
// nomes.forEach(n => console.log('olá, ${n}!'))

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const resultado = numeros.filter(n => n % 2 === 0).map(n => n * 5);
// console.log(resultado); 

// const a = [1, 2]
// const b = [3, 4]
// const c = [ ... a, ... b] 
// const user = { nome: 'Ana', idade: 15 }
// const { nome, idade } = user
// console. log(nome) 

const alunos = [
    { nome: "Ana luisa", nota: 10 },
    { nome: "bernardo", nota: 2 },
    { nome: "marsol", nota: 4 },
    { nome: "higor", nota: 5 },
    { nome: "luiza", nota: 9 },
    { nome: "guilherme", nota: 8 },
    { nome: "josé", nota: 4 },
    { nome: "josué", nota: 5 },
    { nome: "mariana", nota: 7 },
    { nome: "leticia", nota: 7 }
];

const aprovados = alunos.filter(aluno => aluno.nota >= 7);

console.log(aprovados);