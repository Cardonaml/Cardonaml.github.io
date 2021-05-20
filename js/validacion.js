//validacion formulario


window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
  var elemento = document.getElementById("nombre");
  if (!elemento.checkValidity()) {
    error(elemento);
    return false;
  }
  return true;
}

function validaMail() {
  var elemento = document.getElementById("mail");
  if (!elemento.checkValidity()) {
    error(elemento);
    return false;
  }
  return true;
}

function validaMensaje() {
  var elemento = document.getElementById("mensaje");
  if (!elemento.checkValidity()) {
    error(elemento);
    return false;
  }
  return true;
}

function validar(e) {
  borrarError();
  if (validaNombre() && validaMail() && validaMensaje() &&
    confirm("Pulsa aceptar si deseas enviar el formulario")) {
    return true
  } else {
    e.preventDefault();
    return false;
  }
}

function error(elemento) {
  document.getElementsByClassName("help").innerHTML =
    elemento.validationMessage;
  elemento.className = "error";
  elemento.focus();
}

function borrarError() {
  var formulario = document.forms[0];
  for (var i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}
