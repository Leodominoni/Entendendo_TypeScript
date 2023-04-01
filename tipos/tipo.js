"use strict";
let nome = 'Ana';
console.log(nome);
//tuplas array de 3 posiçoes 
let endereco = ['Av Nereu Ramos', 230];
console.log(endereco);
//enum valores pre-definidos (tipo dia de semana)
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Amarelo"] = 2] = "Amarelo";
})(Cor || (Cor = {}));
let minhaCor = Cor.Amarelo;
console.log(minhaCor);
//any 
let carro = 'BMW';
carro = { marca: 'BMW', ano: 2021, modelo: 'automatico' };
console.log(carro);
//function
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function multiplicar(numA, numB) {
    return numA * numB;
}
//tipo function
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
//objetos 
let usuario = {
    nome: 'Joao',
    idade: 30
};
console.log(usuario);
