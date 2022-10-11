//Elaborar programa para o usuario digitar 5 nomes de carros e a 
// Considerar apenas 4 marcas: VW, GM, whiled e Fiat
//Salvar o nome do carro no sub-vetor da marca:

let carros = [[],
[],
[]
]

let carro = 0
let carro2 = 0
let x = 0
while (carro2 != "terminar") {
    carro2 = prompt("Digite o carros vendido, 1 para Gol, 2 para Onix, 3 para Corolla. Terminar para finalizar")
    if (carro2 == 1) {
        let a = "Gol"
        carros[0].push(a)
    }
    if (carro2 == 2) {
        carros[1].push("x")
    }
    if (carro2 == 3) {
        carros[2].push("x")

    }
}
while (x != "fim") {
    x = prompt("Qual carro você quer saber a quantidade de vendidos vendeu: 1 para Gol, 2 para Onix, 3 para Corolla. Fim para finalizar")
    if (x == 1) {
            alert(`Foram vendidos ${carros[0].length} Gol`)
        console.log(`Foram vendidos ${carros[0].length} Gol`)
    }
    if (x == 2) {
            alert(`Foram vendidos ${carros[1].length} Onix`)
        console.log(`Foram vendidos ${carros[1].length} Onix`)
    }
    if (x == 3) {
            alert(`Foram vendidos ${carros[2].length} Corolla`)
        console.log(`Foram vendidos ${carros[2].length} Corolla`)
    }
}