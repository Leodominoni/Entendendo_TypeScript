/* 
    Cria um objeto funcionatio com:
    - Array de string com os nomes dos supervisores
    - Funcao de bater ponto que recebe a hora e retorna uma string 
        -> Ponto normal ( <=8 )
        -> Fora do horario ( >8 )



let arr:string[] = ['Gustavo', 'Ana', 'Leticia']


function ponto(hora: number){
    if(hora <= 8){
        return "Ponto normal"
    } else {
        return "Fora do horario"
    }
}
ponto(5)
console.log(ponto) */

let funcionario: {
    supervisores: string[],
    ponto: (horas: number) => string
} = {
    supervisores: ['Ana', 'Lucas'], 
    ponto(horario: number): string {
        if(horario <= 8){
            return 'Ponto normal'
        } else{
            return 'Fora de hora'
        }
    }
}
console.log(funcionario.supervisores)
console.log(funcionario.ponto(8))