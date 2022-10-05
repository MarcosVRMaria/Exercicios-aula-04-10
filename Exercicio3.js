//Imprimir n°0 até 100
var lista1 = []
var lista2 = []
let x = 0
while (x < 100) {

  x++
  lista1.push(x)
}
//Imprimir valores entre 2 numeros
var xx = Number(prompt("Qual o primeiro numero?"))
var y = Number(prompt("Qual o segundo numero numero?"))
while (xx < y ) {
  //console.log(x)
  xx++
  lista2.push(xx)
}
lista2.pop(xx)
console.log(lista2)
console.log(lista1)