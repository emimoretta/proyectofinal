<template>
  <div class="listadoTwits">
    <h3 id="titulo">Tus Thinks:</h3>
    <div v-for="twit in twits" :key="twit._id" class="twit-item" @click="mostrarTwitExpandido(twit)">
      {{ twit.texto }}
      <br>
      {{ formatDateHora(twit.fechaHora) }}
    </div>

    <!-- Agregamos el componente TwitExpandido y lo mostramos cuando hay un twit seleccionado -->

    <TwitExpandido v-if="twitSeleccionado" :twit="twitSeleccionado" :formatFechaHora="formatDateHora" />

  </div>

</template>
  
  <script setup>
import { ref, onMounted } from 'vue';

import TwitExpandido from './TwitExpandido.vue';


const twits = ref([]); // Estado local para los twits
const twitSeleccionado = ref(null); // Estado local para el twit seleccionado


const mostrarTwitExpandido = (twit) => {
  twitSeleccionado.value = twit;
};

const obtenerTwits = async () => {
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
      twits.value = data.twits.sort((a, b) => new Date(b.fechaHora) - new Date(a.fechaHora));
    } else {
      console.error('Error al obtener los twits:', response.statusText);
    }
  } catch (error) {
    console.error('Error al obtener los twits:', error);
  }
};

onMounted(() => {
  obtenerTwits();
});


const formatDateHora = (fechaHora) => {
  const fecha = new Date(fechaHora);
  const dia = fecha.getDate().toString().padStart(2, '0');
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  const anio = fecha.getFullYear().toString().substring(2);
  const horas = fecha.getHours().toString().padStart(2, '0');
  const minutos = fecha.getMinutes().toString().padStart(2, '0');

  return `${dia}-${mes}-${anio} - ${horas}:${minutos}`;
};



</script>

  
  <style scoped>
  /* Estilos específicos del componente ListaTwits */
  .twit-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 5px;
    -webkit-box-shadow: 1px 1px 15px -7px rgba(0, 0, 0, 1);
-moz-box-shadow: 1px 1px 15px -7px rgba(0, 0, 0, 1);
box-shadow: 1px 1px 15px -7px rgba(0, 0, 0, 1);
border-radius: 10px;
max-width: 300px;
margin: 10px auto 10px auto;

  }
  #titulo{
    text-align: center;
  }

 

  </style>