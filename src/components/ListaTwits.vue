<template>
    <div>
      <h3 id="titulo">Tus Twits:</h3>
      <div v-for="twit in twits" :key="twit._id" class="twit-item">
        {{ twit.texto }}
        <!-- Puedes mostrar otros detalles del twit aquí -->
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';

const twits = ref([]);

onMounted(async () => {
    try {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:3000/obtener-twits', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    // Actualizar el array 'twits' con los datos obtenidos
    twits.value = data.twits;
  } else {
    console.error('Error al obtener los twits:', response.statusText);
  }
} catch (error) {
  console.error('Error al obtener los twits:', error);
}
});
</script>
  
  <style scoped>
  /* Estilos específicos del componente ListaTwits */
  .twit-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 5px;
  }
  #titulo{
    text-align: center;
  }
  </style>