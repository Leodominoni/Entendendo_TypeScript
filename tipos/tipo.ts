let nome = 'Ana'
console.log(nome)

//tuplas array de 3 posiçoes 
let endereco: [string, number] = ['Av Nereu Ramos', 230]
console.log(endereco)

//enum valores pre-definidos (tipo dia de semana)
enum Cor {
    Cinza,
    Verde,
    Amarelo
}

let minhaCor: Cor = Cor.Amarelo
console.log(minhaCor)

//any 

let carro: any = 'BMW'
carro = {marca: 'BMW', ano: 2021, modelo: 'automatico'}
console.log(carro)

//function
function retornaNome(): string {
    return nome
}
console.log(retornaNome())

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

//tipo function
let calculo: (x:number, y:number) => number
calculo = multiplicar
console.log(calculo(5,6))

//objetos 

let usuario: {nome:string, idade: number} = { //atributos e tipo
    nome: 'Joao',
    idade: 30
}
console.log(usuario)