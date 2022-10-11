//Elaborar programa para o usuario digitar 5 nomes de carros e a 
// Considerar apenas 4 marcas: VW, GM, whiled e Fiat
//Salvar o nome do carro no sub-vetor da marca:

let carros = [[],
[],
[],
[],
[],
[],
[],
[],
[],
[],
[],
[]
]

let carro = 0
var mes = 0
while (mes != "terminar") {
  carro = 0
  mes = prompt("Digite o mes que foi vendido em numeros, terminar para finalizar")
  if (mes == 1) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[0].push(carro)
    }
    carros[0].pop()
  }
  if (mes == 2) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[1].push(carro)
    }
    carros[1].pop()
  }
  if (mes == 3) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[2].push(carro)
    }
    carros[2].pop()
  }
  if (mes == 4) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[3].push(carro)
    }
    carros[3].pop()
  }
  if (mes == 5) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[4].push(carro)
    }
    carros[4].pop()
  }
  if (mes == 6) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[5].push(carro)
    }
    carros[5].pop()
  }
  if (mes == 7) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[6].push(carro)
    }
    carros[6].pop()
  }
  if (mes == 8) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[7].push(carro)
    }
    carros[7].pop()
  }
  if (mes == 9) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[8].push(carro)
    }
    carros[8].pop()
  }
  if (mes == 10) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[9].push(carro)
    }
    carros[9].pop()
  }
  if (mes == 11) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[10].push(carro)
    }
    carros[10].pop()
  }
  if (mes == 12) {
    while (carro !== "proximo") {
      carro = prompt("Digite o nome do carro, para finalizar digite proximo")
      carros[11].push(carro)
    }
    carros[11].pop()
  }
}
console.log(`1° mes vendeu ${carros[0].length} carros`)
console.log(`2° mes vendeu ${carros[1].length} carros`)
console.log(`3° mes vendeu ${carros[2].length} carros`)
console.log(`4° mes vendeu ${carros[3].length} carros`)
console.log(`5° mes vendeu ${carros[4].length} carros`)
console.log(`6° mes vendeu ${carros[5].length} carros`)
console.log(`7° mes vendeu ${carros[6].length} carros`)
console.log(`8° mes vendeu ${carros[7].length} carros`)
console.log(`9° mes vendeu ${carros[8].length} carros`)
console.log(`10° mes vendeu ${carros[9].length} carros`)
console.log(`11° mes vendeu ${carros[10].length} carros`)
console.log(`12° mes vendeu ${carros[11].length} carros`)
console.log(carros)
