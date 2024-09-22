// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "Si pudiera ver una lágrima", time: 25 },
    { text: "Mientras te beso entre incendios", time: 33 },
    { text: "Te abrazaría", time: 42 },  
    { text: "Para salirnos con el humo", time: 46 },
    { text: "Abajo de tu piel hay esmeraldas conquistadas", time: 52 },  
    { text: "Encima de mi piel hay una alfombra entre tus pies", time: 57 },
    { text: "Abajo de tu piel yo resucito y me derrito", time: 62 },  
    { text: "Encima de mi piel le guardo el aire que no hace daño", time: 67 },
    { text: "Ven acércate", time: 80 }, 
    { text: "Si pudiéramos escupir cometas", time: 85 },  
    { text: "Le ganaríamos al tiempo", time: 92 },
    { text: "A la magia, al destino, a la distancia, al olvido", time: 97 },
    { text: "Abajo de tu piel hay esmeraldas conquistadas", time: 108 },  
    { text: "Encima de mi piel hay una alfombra entre tus pies", time: 152 },
    { text: "Abajo de tu piel yo resucito y me derrito", time: 117 },  
    { text: "Encima de mi piel le guardo el aire que no hace daño", time: 122 },
    { text: "Abajo de tu piel hay esmeraldas conquistadas", time: 127 },  
    { text: "Encima de mi piel hay una alfombra entre tus pies", time: 131 },
    { text: "Abajo de tu piel yo resucito y me derrito", time: 136 },  
    { text: "Encima de mi piel le guardo el aire que no hace daño", time: 140 },
  ];
  

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);