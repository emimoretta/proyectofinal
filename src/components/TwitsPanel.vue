<script setup>
import { ref, onMounted } from 'vue';

let twits = ref([]);

const toggleResponses = (twit) => {
  twit.showResponses = !twit.showResponses;
};

const buscarMensaje = () => {
  fetch('http://localhost:3000/')
    .then(response => {
      if (!response.ok) {
        throw new Error('La solicitud falló');
      }
      return response.json();
    })
    .then(data => {
      twits.value = data.twits; // Accede a la matriz de "twits"
    })
    .catch(error => {
      console.error(error);
    });
};


onMounted(() => {
  buscarMensaje();
});

</script>

<template>
  <div class="listadoTwits">
   

    <div class="cajaTwit" v-for="twit in twits" :key="twit.id">
      <div clas>
        <!-- <p>ID: {{ twit.id }}</p> -->
        <!-- <p>Usuario: {{ twit.user }}</p> -->
        <p>{{ twit.message }}</p>
        <p style="font-size: x-small;">{{ twit.timestamp }}</p>

      </div>
      <button class="toggle-button" @click="toggleResponses(twit)">
        {{ twit.showResponses ? '△' : '▽' }}
      </button>

        <div class="cajaRespuestas" v-if="twit.showResponses" >
        <div v-for="response in twit.responses" :key="response.id">
          <!-- <p>Respuesta ID: {{ response.id }}</p> -->
          <p style="color:red;"> {{ response.user }}</p>
          <p>{{ response.message }}</p>
          <p style="font-size: x-small;"> {{ response.timestamp }}</p>
        </div>
        </div>

    </div> 
  
  </div>
</template>

<style>
.cajaTwit {
  text-align: center;
  background-color: #fefefe; /* Color de fondo */
  border: 1px solid #ddd; /* Borde con un color suave */
  border-radius: 10px; /* Bordes redondeados */
  padding: 10px; /* Espaciado interno */
  margin: 10px; /* Margen exterior */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
  width: 300px;
  font-size: larger;

}

.cajaRespuestas {
  background-color: #fafafa; /* Color de fondo */
  border: 1px solid #ddd; /* Borde con un color suave */
  border-radius: 10px; /* Bordes redondeados */
  padding: 10px; /* Espaciado interno */
  margin: 10px; /* Margen exterior */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
  font-size: smaller
}

.toggle-button{
  border-radius: 8px;
  border:0px;
  background-color: lightblue;
}

</style>
