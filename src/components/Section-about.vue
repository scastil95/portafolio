

<template>
    <section id="about" class="about d-flex align-items-center min-vh-100">
        <div class="container">
            <div class="about-wrapper mx-auto">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-12 text-center">

                        <!-- FOTO -->
                        <div class="mb-4">
                            <img :src="foto" class="about-avatar">
                        </div>

                        <!-- TEXTO -->
                        <h1 class="fw-bold mb-2">
                            Sobre <span class="text-gradient">mí</span>
                        </h1>

                        <h6 class="text-secondary mb-3">
                            Sebastián Castillo · Desarrollador Font End
                        </h6>

                        <p class="about-text">
                            Hola 👋, soy <strong>Sebastián Castillo</strong>, profesional formado en Publicidad en el
                            Instituto Profesional de Chile, con una fuerte inclinación hacia la tecnología y el
                            desarrollo digital.
                        </p>

                        <p class="about-text">
                            Desde mis inicios, siempre sentí curiosidad por cómo funcionan las herramientas tecnológicas
                            y el impacto que tienen en la comunicación y los negocios. Esa inquietud me llevó a
                            complementar mi formación con el aprendizaje de desarrollo web, integrando creatividad y
                            lógica para construir soluciones digitales.
                        </p>

                        <p class="about-text">
                            He trabajado en el área de diseño, lo que me ha permitido desarrollar una mirada centrada en
                            la experiencia de usuario y la estética, habilidades que hoy combino con conocimientos en
                            desarrollo Frontend y tecnologías modernas. Actualmente me encuentro en proceso de
                            consolidar mi perfil como desarrollador, enfocado en crear productos funcionales, atractivos
                            y eficientes.
                        </p>

                        <p class="about-text">
                            Me motiva seguir aprendiendo, enfrentar nuevos desafíos y crecer profesionalmente dentro del
                            mundo tecnológico. Busco una oportunidad donde pueda aportar con mi visión creativa y
                            técnica, mientras continúo desarrollando mis habilidades y generando impacto real en los
                            proyectos en los que participe.
                        </p>

                        <p class="about-text">
                            Creo firmemente que la combinación entre diseño, tecnología y aprendizaje constante es la
                            clave para construir soluciones innovadoras y de valor.
                        </p>

                        <div class="d-flex gap-2 justify-content-center">
                            <a href="#" @click.prevent="descargarCV" class="btn btn-primary rounded-pill px-4">
                                Curriculum
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import foto from '@/assets/img/uo.png'

// logica de descargar curriculum
const descargarCV = () => {
    const cvUrl = '/cv/CV_Sebastian_Castillo.pdf'

    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'CV_Sebastian_Castillo.pdf'
    link.click()
}
</script>

<style scoped>
.about-wrapper {
    max-width: 900px;
}

/* ABOUT */
.about {
    background: radial-gradient(circle at top, #0f172a, #020617);
    color: white;
    font-family: 'Poppins', sans-serif;
    padding: 80px 0;
    min-height: 100vh;
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
.about-text {
    color: #cbd5f5;
    font-size: 0.85rem;
    max-width: 700px;
    line-height: 1.2;
}

/* GRADIENTE */
.text-gradient {
    background: linear-gradient(90deg, #38bdf8, #6366f1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* FOTO */
.about-avatar {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #3b82f6;
    transition: transform 0.3s ease;
}

.about-avatar:hover {
    transform: scale(1.05);
}

@media (min-width: 992px) {
    .about-avatar {
        width: 180px;
        height: 180px;
    }
}
</style>