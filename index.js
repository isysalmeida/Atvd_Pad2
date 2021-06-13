function ola(text) {
  return "Olá, " + text + "!"
}

function operador(num1, num2, callback) {
  var calc = callback(num1, num2)

  console.log(calc)
}

function divisibilidade(num, callback) {
  const callbackNumber = callback()

  return num % callbackNumber === 0
}

function meses(num) {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  return months[num - 1]
}

function maiorOuIgual(n1, n2, callback) {
  return callback(n1, n2)
}
