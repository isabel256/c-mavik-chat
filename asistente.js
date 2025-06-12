const respuestas = {
  "¿cuáles son los horarios de atención?":
    "Nuestro horario es de lunes a viernes, de 8:00 a 19:00.",
  "¿cómo puedo contactarlos?":
    "Puedes contactarnos al correo staticpeque@gmail.com o al teléfono 967-025-756.",
  "¿dónde están ubicados?": "Estamos ubicados en Huanchilca, Chilia-Patáz.",
  "¿aceptan devoluciones?":
    "Sí, aceptamos devoluciones dentro de los primeros 30 días con el recibo.",
  gracias: "¡De nada! ¿Hay algo más en lo que te pueda ayudar?",
};

function handleUserInput() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");
  const preguntaOriginal = input.value.trim();

  if (!preguntaOriginal) return; // no enviar si está vacío

  const pregunta = preguntaOriginal.toLowerCase();

  // Mostrar pregunta del usuario
  chat.innerHTML += `<div class="user"><strong>Tú:</strong> ${preguntaOriginal}</div>`;

  // Buscar respuesta
  const respuesta =
    respuestas[pregunta] ||
    "Lo siento, no tengo una respuesta para eso. ¿Podrías reformular tu pregunta?";

  // Mostrar respuesta del asistente
  chat.innerHTML += `<div class="bot"><strong>Asistente:</strong> ${respuesta}</div>`;

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
