const $button = document.querySelector(".compartir")

if ('share' in navigator) {
  $button.addEventListener('click', share)
  function share() {
    navigator.share({
      title: 'Monica Lucia Cardona',
      text: 'Curriculum Desarrolladora Web',
      url: 'https://cardonaml.github.io/',
    })
      .then(() => {
        alert('hemos logrado compartir')
      })
      .catch(() => {
        alert('no se pudo compartir, prueba usando https en un navegador móvil')
      })
  }
} else {
  alert('No está disponible el API de web share')
}