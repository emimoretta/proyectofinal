<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/" class="nav-link">Inicio</router-link></li>
      <li><router-link to="/registro" class="nav-link">Registro</router-link></li>
      <li><router-link to="/inicio-sesion" class="nav-link">Iniciar Sesión</router-link></li>
      <li><router-link to="/twits-panel" class="nav-link">Ver Twits</router-link></li>
    </ul>
  </nav>
</template>

<style>
/* Estilos para el navbar */
.navbar {
  background-color: #333; /* Color de fondo del navbar */
  color: #fff; /* Color del texto */
  padding: 10px 20px; /* Espaciado interno */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #fff; /* Color del texto en los enlaces */
  font-weight: bold;
  margin-right: 20px; /* Espaciado entre enlaces */
}

.nav-link:hover {
  color: #ff9900; /* Color del texto al pasar el mouse por encima */
}
</style>

<script>
export default {
  name: 'NavbarMenu', // Nombre del componente
  // Resto de la configuración del componente
}
</script>