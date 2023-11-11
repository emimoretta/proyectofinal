<template>
    <div class="container dosColumnas">
     
      <div id="intro">
        <p>Think.</p>
        <p>Bienvenido a la primera red social libre</p>
        <p>Pensá, escribí, compartí.</p>
      </div>
      
      <div id="form">
        <form id="registro" @submit="registrarUsuario()">
          <input type="email" placeholder="Correo electrónico" id="email" v-model="email" required>
          <input type="password" placeholder="Contraseña" id="pass1" v-model="pass1" required>
          <input type="password" placeholder="Repetír contraseña" id="pass2" required>
          <button type="submit">Registrate</button>
          <hr>
          <button class="black" type="submit">Ya tengo cuenta</button>
        </form>
      </div>

    </div>

    <div id="footer">

    </div>

  </template>
  
  <script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let email = ref('');
let pass1 = ref(null);

const router = useRouter();

async function registrarUsuario() {
  
  console.log("pasa por aca")
  event.preventDefault();
  try {
    const data = {
      email: email.value,
      password: pass1.value
    };

    fetch('http://localhost:3000/registrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        // Registro exitoso
        console.log('Usuario registrado con éxito');
        router.push('/dash-board');
      } else {
        // Manejar errores
        response.json().then((responseData) => {
          console.error('Error al registrar el usuario:', responseData.message);
        });
      }
    }).catch((error) => {
      // Manejar errores de red u otros errores
      console.error(error);
    });
  } catch (error) {
    // Manejar errores de red u otros errores
    console.error(error);
  }
}
</script>


<style>



  html{
    background-color: #F5F5F5;  
  }

  .container{
    text-align: center;
  }

  input{
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #f5f5f5;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 30px;
    width: 300px;
    font-size: larger;
  }

  input:focus {
  border: 2px solid #cf90e5; /* Cambia el color del borde al hacer focus */
  outline: none; /* Quita el borde predeterminado de enfoque (solo si lo deseas) */
}

  #form{
    background-color: #fefefe;
    border-radius: 10px;
    height: 400px;
    width: 400px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
    margin: auto;
    margin-left: 200px;
  }

  .dosColumnas{
    margin-top: 120px;
    display: flex;
    flex-wrap: wrap;
  }

  #registro{
    display: inline-block;
    width:auto;
    margin-top: 35px;
    
  }

  button{
    display:block;
    margin: auto;
    margin-top: 20px;
    background-color: #9442b2;
    color:white;
    height: 50px;
    width: 300px;
    border-radius: 10px;
    border-style: none;
    font-size: larger;

  }

  .black{
    background-color: black;
  }

  #intro > p:nth-child(1){
    font-size: 122px;
  }

  #intro > p:nth-child(2){
    font-size: 20px;
    bottom: 100px;
    position: relative;
  }
  #intro > p:nth-child(3){
    font-size: 20px;
    bottom: 100px;
    position: relative;
    font-weight: bold;
  }

  #intro{
    margin: auto;
    margin-right: 50px;
  }
  #footer{
    background-color: white;
    width: 100%;
    height: 100%;
    margin-top: 50px;
  }


</style>