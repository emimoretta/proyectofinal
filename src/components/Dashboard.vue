<script setup>

</script>

<template>

    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    </head>

    <body>
        
        <input type="checkbox" id="check">
        <label for="check">
            <i class="fas fa-bars" id="btn"></i>
            <i class="fas fa-times" id="cancel"></i>
        </label>
        <div class="sidebar">
            <header>Think.</header>
            <ul>
                <li><a href="#" class="side-inicio">Inicio</a></li>
                <li><a href="#" class="side-perfil">Pefil</a></li>
                <li><a href="#" class="side-config">Configuracion</a></li>
                <li><a href="#" class="side-acerca">Acerca De</a></li>
                <li><a href="#" class="side-salir">Salir</a></li>
            </ul>
        </div>

        <section></section>

    </body>

    
 
</template>

<style>
    *{
        margin: 0;
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
    
</style>
