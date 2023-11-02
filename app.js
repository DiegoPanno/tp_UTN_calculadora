//Función de botones

document.getElementById("suma").addEventListener("click", sumar);
document.getElementById("resta").addEventListener("click", restar);
document
  .getElementById("multiplicacion")
  .addEventListener("click", multiplicar);
document.getElementById("division").addEventListener("click", dividir);
document.getElementById("borrar").addEventListener("click", borrar);

//Operaciones
function sumar() {
  const operador1 = parseFloat(document.getElementById("operador1").value);
  const operador2 = parseFloat(document.getElementById("operador2").value);
  const resultado = operador1 + operador2;
  document.getElementById("resultado").textContent = resultado;
}

function restar() {
  const operador1 = parseFloat(document.getElementById("operador1").value);
  const operador2 = parseFloat(document.getElementById("operador2").value);
  const resultado = operador1 - operador2;
  document.getElementById("resultado").textContent = resultado;
}

function multiplicar() {
  const operador1 = parseFloat(document.getElementById("operador1").value);
  const operador2 = parseFloat(document.getElementById("operador2").value);
  const resultado = operador1 * operador2;
  document.getElementById("resultado").textContent = resultado;
}

function dividir() {
  const operador1 = parseFloat(document.getElementById("operador1").value);
  const operador2 = parseFloat(document.getElementById("operador2").value);
  if (operador2 !== 0) {
    const resultado = operador1 / operador2;
    document.getElementById("resultado").textContent = resultado;
  } else {
    alert("No se puede dividir por 0");
  }
}

function borrar() {
  document.getElementById("operador1").value = "";
  document.getElementById("operador2").value = "";
  document.getElementById("resultado").textContent = "0";
}
