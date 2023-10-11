<script setup>


let mensajes

const buscarMensaje  = () => {
  fetch('http://localhost:3000/')
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud falló');
    }
    return response.json();
  })
  .then(data => {
    // Maneja los datos recibidos del servidor
    mensajes=data
    
  })
  .catch(error => {
    // Maneja errores
    console.error(error);
  });
}

buscarMensaje()
console.log(mensajes)

</script>

<template>
  <div>
    <!-- Itera sobre los twits -->
    <div v-for="twit in mensajes" :key="twit">
      <div>
        <p>ID: {{ twit.id }}</p>
        <p>Usuario: {{ twit.user }}</p>
        <p>Mensaje: {{ twit.message }}</p>
        <p>Timestamp: {{ twit.timestamp }}</p>
      </div>

      <!-- Itera sobre las respuestas -->
      <div v-for="response in mensajes.twit.responses" :key="response.id">
        <div>
          <p>Respuesta ID: {{ response.id }}</p>
          <p>Usuario: {{ response.user }}</p>
          <p>Mensaje: {{ response.message }}</p>
          <p>Timestamp: {{ response.timestamp }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style>


</style>
