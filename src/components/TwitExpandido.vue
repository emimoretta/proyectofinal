<!-- TwitExpandido.vue -->
<template>
    <div v-if="twit">
      <h3>{{ twit.texto }}</h3>
      <p>{{ formatFechaHoraLocal(twit.fechaHora) }}</p>
      <!-- Agrega aquí cualquier otro detalle del twit que desees mostrar -->
      
      <div>
        <input v-model="respuestaInput" placeholder="Escribe tu respuesta">
        <button @click="enviarRespuesta">Enviar</button>
      </div>
    </div>
    <div v-else>
      <p>No se ha seleccionado ningún twit.</p>
    </div>
  </template>
  
  <script setup>
import { ref, defineProps } from 'vue';


const props = defineProps(['twit']);
const twit = ref(props.twit);
  
  // Estado local para la respuesta
  const respuestaInput = ref('');
  
  // Método para enviar respuestas
  const enviarRespuesta = () => {
    // Aquí puedes realizar la lógica para enviar la respuesta
    // Puedes utilizar una función prop para enviar la respuesta al componente padre si es necesario
    // Ejemplo: props.enviarRespuesta(respuestaInput.value);
    console.log('Respuesta enviada:', respuestaInput.value);
  };

  const formatFechaHoraLocal = (fechaHora) => {
  // Implementa tu lógica de formato aquí si es diferente
  return fechaHora;
};


  </script>