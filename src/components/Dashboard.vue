<script setup>
import { ref, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import ListaTwits from './ListaTwits.vue';

const router = useRouter();
const store = useStore();
const sesionActiva = ref(useStore().getters.getSesionActiva);
const usuario = store.getters.getUsuario;
const textoInput = ref('');

const emailPartes = usuario.split('@');
const nombreUsuario = emailPartes[0];

console.log(usuario)

onBeforeMount(() => {
  // Recuperar el token del localStorage al cargar el componente
  const token = localStorage.getItem('token');
  if (token) {
    // Realizar cualquier lógica adicional con el token si es necesario
    console.log('Token recuperado:', token);
  } else {
    // Si no hay token, podrías redirigir al usuario al inicio de sesión
    router.push({ name: 'home-page' });
  }
});


const cerrarSesion = () => {
  // Aquí puedes realizar cualquier lógica adicional antes de cerrar la sesión
  store.commit('setSesionActiva', false);
  store.commit('setUsuario', '');  // O cualquier valor predeterminado para el usuario
  router.push({ name: 'home-page' });  // Redirige a la página de inicio de sesión o donde prefieras
};

const crearTwit = async (texto) => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:3000/crear-twit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ texto }),
    });

    if (response.ok) {
      console.log('Twit creado con éxito');
    } else {
      const responseData = await response.json();
      console.error('Error al crear el twit:', responseData.error);
    }
  } catch (error) {
    console.error(error);
  }
};

const handleThinkButtonClick = async () => {
  const texto = textoInput.value;
  await crearTwit(texto);
  // Puedes limpiar el input después de enviar el twit si lo deseas
  textoInput.value = '';
};

</script>

<template>

    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    </head>

    <body>
        <!--sidebar-->
        <div class="siderbar-div">
            <input type="checkbox" id="check">
            <label for="check">
                <i class="fas fa-bars" id="btn"></i>
                <i class="fas fa-times" id="cancel"></i>
            </label>
            <div class="sidebar">
                <header>Think.</header>
                <ul>
                    <li><a href="#" class="side-inicio">Bienvenido  {{ nombreUsuario}}</a></li>
                    <li><a href="/dash-board" class="side-inicio">Inicio</a></li>
                    <li><a href="#" class="side-perfil">Pefil</a></li>
                    <li><a href="#" class="side-config">Configuracion</a></li>
                    <li><a href="#" class="side-acerca">Acerca De</a></li>
                    <li class="side-salir" v-if="sesionActiva" @click="cerrarSesion">Salir</li>
                </ul>
            </div>
        </div>
        <!--feed-->
        <div class="feed">
            <div class="feed__header">
                <h2>Inicio</h2>
            </div>
            <div class="twitBox">
                <form>
                    <div class="twitBox__input">
                        <input v-model="textoInput" type="text" placeholder="Comparti algo con la comunidad">
                    </div>
                    <button @click="handleThinkButtonClick" type="button" class="twitBox__twitButton">Think</button>
                </form>
            </div>
            <div>
                <lista-twits></lista-twits>
            </div>
        </div>

       
        

    </body>
 
</template>

<style>
    *{
        
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }

    .sidebar{
        position: fixed;
        left: -250px;
        width: 250px;
        height: 100%;
        background-color: #9442B2;
        transition: all 0.5s ease;
    }

    .sidebar header{
        font-size: 22px;
        color: #9442B2;
        text-align: center;
        line-height: 70px;
        background: #F5F5F5;
        user-select: none;
    }

    .sidebar ul a{
        display: block;
        height: 100%;
        width: 100%;
        line-height: 65px;
        font-size: 20px;
        color: #E6E6E6;
        padding-left: 40px;
        box-sizing: border-box;
        border-top: 1px solid rgba(255, 255, 255, .1);
        border-bottom: 1px solid #E6E6E6;
        transition: .5s;
    }

    ul li:hover a{
        padding-left: 50px;
    }

    #check{
        display: none;
    }

    label #btn,label #cancel{
    position: absolute;
    cursor: pointer;
    background: #F5F5F5;
    border-radius: 3px;
    }

    label #btn{
        left: 40px;
        top: 25px;
        font-size: 35px;
        color: #9442B2;
        padding: 6px 12px;
        transition: all 0.5s;
    }

    label #cancel{
        z-index: 1111;
        left: -195px;
        top: 17px;
        font-size: 30px;
        color: #9442B2;
        padding: 4px 9px;
        transition: all 0.5s ease;
    }

    #check:checked ~ .sidebar{
        left: 0;
    }

    #check:checked ~ label #cancel{
        left: 195px;
    }

    .feed{
        margin-left: 250px;
        flex: 0.5;
        background-color: white;
        min-width: fit-content;
        overflow-y: scroll;
    }

    .feed__header{
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 100;
  
        padding: 15px 20px;
        text-align: center;
    }

    .feed__header h2{
        font-size: 20px;
        font-weight: 800;
    }

    .feed::-webkit-scrollbar{
        display: none;
    }

    .feed{
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .twitBox{
        padding-bottom: 10px;
        
        padding-right: 10px;
    }
    
    .twitBox form{
        display: flex;
        flex-direction: column;
    }

    .twitBox__input {
        display: flex;
        padding: 20px;
    }

    .twitBox__input input{
        flex: 1;
        margin-left: 20px;
        font-size: 20px;
        border: none;
        outline: none;
    }

    .twitBox__twitButton{
        background-color: #9442B2;
        border: none;
        color: white;
        font-weight: 900;
        border-radius: 30px;
        width: 100px;
        height: 40px;
        margin-top: 20px;
        margin-left: auto;
    }

</style>
