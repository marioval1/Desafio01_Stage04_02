/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/


let number1 = Number(prompt(`Digite seu primer número:`))
let number2 = Number(prompt(`Digite seu segundo número:`))

let add = number1 + number2;
let subtract = number1 - number2;
let multiply = number1 * number2;
let split = number1 / number2;
let restOfsplit = number1 % number2;
let pairOrOdd = add % 2;



alert(`A soma dos números ${number1} e ${number2} é: ${add}`)
alert(`A subtração dos números ${number1} e ${number2} é: ${subtract}`)
alert(`A multiplicação dos números ${number1} e ${number2} é: ${multiply}`)
alert(`A divisão dois números ${number1} e ${number2} é: ${split}`)
alert(`O resto da divisão dois números ${number1} e ${number2} é: ${restOfsplit}`)


if(pairOrOdd != 0) {
  alert(`O resultado da soma é um numero Impar ${add}`)
}
else{
  alert(`O resultado da soma é um numero Par ${add}`)
}

if(number1 === number2){
  alert(`Os dois número são iguais`)
}
else{
  alert(`Os dois números são diferentes`)
}

alert(`Fim!`)