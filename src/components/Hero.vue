<script setup>

import foto from '@/assets/img/uo.png'

</script>

<template>
    <section class="hero d-flex align-items-center min-vh-100">
        <div class="container">
            <div class="hero-wrapper mx-auto">

                <div class="row align-items-center">

                    <!-- TEXTO -->
                    <div class="col-lg-7 col-12 order-2 order-lg-1 text-center text-lg-start">

                        <h1 class="fw-bold mb-2">
                            Hola, soy <span class="text-gradient">Sebastián</span>
                        </h1>

                        <h6 class="text-secondary mb-3">
                            Desarrollador Frontend
                        </h6>

                        <p class="hero-text mb-4">
                            Soy desarrollador frontend con formación en marketing digital.
                            Me especializo en crear interfaces claras, accesibles y enfocadas en resultados.
                            <br><br>
                            Busco formar parte de equipos donde la tecnología, el diseño y la estrategia digital
                            se integren para resolver problemas reales.
                        </p>

                        <div class="d-flex gap-2 justify-content-center justify-content-lg-start">
                            <a href="https://www.linkedin.com/in/scastillorodriguez/" target="_blank" class="btn btn-primary rounded-pill px-4">LinkedIn</a>
                            <a href="https://github.com/scastil95" target="_blank" class="btn btn-secondary rounded-pill px-4">GitHub</a>
                        </div>

                    </div>

                    <!-- FOTO -->
                    <div class="col-lg-5 col-12 text-center order-1 order-lg-2  mt-4 mt-lg-0">
                        <img :src="foto" class="hero-avatar">
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
/* CONTENEDOR MÁS COMPACTO */
.hero-wrapper {
    max-width: 900px;
    /* 🔥 ESTO ES LA CLAVE */
}

/* HERO */
.hero {
    background: radial-gradient(circle at top, #0f172a, #020617);
    color: white;
    font-family: 'Poppins', sans-serif;
    padding: 80px 0;
}

/* TITULO */
h1 {
    font-size: 2.3rem;
}

@media (min-width: 992px) {
    h1 {
        font-size: 2.6rem;
    }
}

/* TEXTO */
.hero-text {
    color: #cbd5f5;
    font-size: 0.95rem;
    max-width: 480px;
    /* 🔥 limita ancho del texto */
}

/* GRADIENTE */
.text-gradient {
    background: linear-gradient(90deg, #38bdf8, #6366f1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* FOTO */
.hero-avatar {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #3b82f6;
}

@media (min-width: 992px) {
    .hero-avatar {
        width: 180px;
        height: 180px;
    }
}
</style>