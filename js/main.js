//navbar-burguer
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

//flecha subir
$(document).ready(function () {

  $('.ir-arriba').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.ir-arriba').slideDown(300);
    } else {
      $('.ir-arriba').slideUp(300);
    }
  });

});


//validacion formulario


window.onload = iniciar:

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
