document.addEventListener('DOMContentLoaded', function() {
  const botonAudio = document.getElementById("botonAudio");
  const iconoAudio = document.getElementById("iconoAudio");
  const miAudio = document.getElementById("miAudio");

  let audioReproduciendo = false;

  botonAudio.addEventListener('click', () => {
      if (!audioReproduciendo) {
          miAudio.play().catch(error => {
              console.error('Error al reproducir el audio:', error.message);
          });
          iconoAudio.className = "fa-solid fa-pause"; // Cambia el ícono a pausa
      } else {
          miAudio.pause();
          iconoAudio.className = "fa-solid fa-play"; // Cambia el ícono a reproducir
      }

      audioReproduciendo = !audioReproduciendo;
  });
});
