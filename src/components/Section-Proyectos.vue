<script setup>

import tiendaMascotasImg from '@/assets/img/proyectos-img/tienda-mascotas.png'
import appClimaImg from '@/assets/img/proyectos-img/app-clima.png'
import ghibliImg from '@/assets/img/proyectos-img/ghibli-movies.png'
import pokeApiImg from '@/assets/img/proyectos-img/pokeApi.png'


const proyectos = [
    {
        tipo: "Frontend",
        nombre: "Tienda de mascota",
        descripcion: "Desarrollo de una interfaz de tienda virtual moderna y totalmente adaptable. El proyecto se centra en una arquitectura limpia utilizando el sistema de rejilla de Bootstrap para garantizar una experiencia de compra fluida en cualquier dispositivo, potenciada con JavaScript nativo para la interactividad de componentes y la gestión dinámica del carrito.",
        tecnologias: ["Bootstrap", "Javascript", "CSS", "HTML"],
        imagen: tiendaMascotasImg,
        link: "https://scastil95.github.io/ecommerce-bootstrap/",
        invertido: false
    },
    {
        tipo: "Frontend",
        nombre: "App clima",
        descripcion: "Desarrollo de una plataforma web interactiva que consume datos en tiempo real de la API de AccuWeather. Implementa un sistema de búsqueda dinámica por ciudad, gestión de geolocalización y visualización de condiciones actuales y pronósticos extendidos, utilizando JavaScript (ES6+) para el manejo de peticiones asíncronas y Bootstrap para una interfaz adaptativa y moderna.",
        tecnologias: ["Bootstrap", "API", "Javascript", "CSS", "HTML"],
        imagen: appClimaImg,
        link: "https://scastil95.github.io/producto-clima/",
        invertido: true
    },
    {
        tipo: "Frontend",
        nombre: "Ghibli Movies API",
        descripcion: "Proyecto enfocado en la integración de servicios externos y manipulación dinámica del DOM. La aplicación utiliza JavaScript ES6+ para orquestar múltiples llamadas asíncronas concurrentes, permitiendo la visualización de datos complejos en una rejilla (grid) de Bootstrap altamente optimizada.",
        tecnologias: ["Bootstrap", "Javascript", "CSS", "HTML"],
        imagen: ghibliImg,
        link: "https://scastil95.github.io/Ghibli-Api/",
        invertido: false
    },
    {
        tipo: "Frontend",
        nombre: "PokeApi",
        descripcion: "Proyecto personal diseñado para demostrar el dominio de flujos asíncronos en JavaScript.",
        tecnologias: ["Bootstrap", "Javascript", "CSS", "HTML"],
        link: "https://scastil95.github.io/pokedex-con-pokeAPI/",
        imagen: pokeApiImg,
        invertido: true
    }
]
</script>

<template>
    <section id="proyectos" class="section-wrapper">
        <div class="container projects py-5 mx-auto min-vh-100">

            <div class="mb-5">
                <small class="text-uppercase text-secondary">Proyectos</small>
                <h2 class="fw-bold">Mis proyectos destacados</h2>
            </div>

            <div v-for="(proyecto, index) in proyectos" :key="index" class="project-card mb-5">
                <div class="row align-items-center g-4" :class="{ 'flex-row-reverse': proyecto.invertido }">

                    <!-- TEXTO -->
                    <div class="col-lg-6">
                        <small class="text-uppercase text-info">
                            {{ proyecto.tipo }}
                        </small>

                        <h3 class="fw-bold mt-2">
                            {{ proyecto.nombre }}
                        </h3>

                        <p class="text-secondary">
                            {{ proyecto.descripcion }}
                        </p>

                        <!-- TECNOLOGÍAS -->
                        <div class="d-flex flex-wrap gap-2 mt-3">
                            <span v-for="tech in proyecto.tecnologias" :key="tech" class="badge-tech">
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                    <!-- IMAGEN -->
                    <div class="col-lg-6 text-center">
                        <a :href="proyecto.link" target="_blank">
                            <img :src="proyecto.imagen" class="project-img" alt="proyecto">
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.section-wrapper {
    background: #020617;

}

.projects {
    max-width: 900px;
    color: white;
    font-family: 'Poppins', sans-serif;
}

/* CARD */
.project-card {
    padding: 30px;
    border-radius: 16px;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(148, 163, 184, 0.1);
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
}

/* IMAGEN */
.project-img {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
}

/* BADGES */
.badge-tech {
    padding: 6px 12px;
    border-radius: 999px;
    background: #1e293b;
    color: #cbd5f5;
    font-size: 0.8rem;
    transition: 0.3s;
}

.badge-tech:hover {
    background: #2563eb;
    color: white;
}
</style>