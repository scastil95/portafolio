<script setup>
const techStack = [
    {
        titulo: "Frontend",
        color: "text-info",
        tecnologias: [
            { nombre: "HTML", icon: "fa-html5" },
            { nombre: "CSS", icon: "fa-css3-alt" },

            { nombre: "Vue", icon: "fa-vuejs" },
            { nombre: "SASS", icon: "fa-brands fa-sass" },
        ]
    },
    {
        titulo: "Backend",
        color: "text-success",
        tecnologias: [
            { nombre: "Node.js", icon: "fa-node-js" },
            { nombre: "JavaScript", icon: "fa-js" },
            { nombre: "Firebase", icon: "fa-solid fa-fire" },
        ]
    },
    {
        titulo: "Aprendiendo",
        color: "text-warning",
        tecnologias: [
            { nombre: "SQL", icon: "fa-database" },
            { nombre: "TypeScript", icon: "fa-js" }
        ]
    },
    {
        titulo: "Herramientas",
        color: "text-primary",
        tecnologias: [
            { nombre: "Git", icon: "fa-git-alt" },
            { nombre: "GitHub", icon: "fa-github" },
            { nombre: "VS Code", icon: "fa-solid fa-code" }
        ]
    }
]
</script>


<template>
    <section id="habilidades" class="section-wrapper">
        <div class="container tech py-5 mx-auto ">

            <!-- TITULO -->
            <div class="mb-5 text-center">
                <h2 class="fw-bold">Tecnologías</h2>
                <p class="text-secondary">
                    Mi stack tecnológico incluye herramientas modernas para desarrollo frontend, backend y
                    productividad.
                </p>
            </div>

            <!-- GRID -->
            <div class="row g-4">

                <div v-for="(grupo, index) in techStack" :key="index" class="col-12 col-md-6">
                    <div class="tech-card p-4 h-100">

                        <h4 :class="grupo.color" class="fw-semibold mb-4">
                            {{ grupo.titulo }}
                        </h4>

                        <div class="row g-3">
                            <div v-for="tech in grupo.tecnologias" :key="tech.nombre" class="col-4 text-center">
                                <i :class="['fa-brands', tech.icon, 'tech-icon']"></i>
                                <p class="small mt-2 text-secondary">
                                    {{ tech.nombre }}
                                </p>
                            </div>
                        </div>

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

.tech {
    max-width: 900px;
    color: white;
    font-family: 'Poppins', sans-serif;
}

/* CARD */
.tech-card {
    background: rgba(15, 23, 42, 0.7);
    border-radius: 16px;
    border: 1px solid rgba(148, 163, 184, 0.1);
    backdrop-filter: blur(8px);
    transition: 0.3s;
}

.tech-card:hover {
    transform: translateY(-5px);
}

/* ICONOS */
.tech-icon {
    font-size: 2rem;
    color: #38bdf8;
    transition: 0.3s;
}

.tech-icon:hover {
    transform: scale(1.2);
    color: #6366f1;
}
</style>