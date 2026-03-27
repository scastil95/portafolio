<template>
<nav class="navbar navbar-expand-lg fixed-top navbar-custom">
        <div class="container">

            <!-- Botón hamburguesa -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Links -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto gap-3">
                    <li class="nav-item"><a class="nav-link" href="#about">Sobre mí</a></li>
                    <li class="nav-item"><a class="nav-link" href="#habilidades">Stack</a></li>
                    <li class="nav-item"><a class="nav-link" href="#proyectos">Proyectos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
                </ul>
            </div>

        </div>
    </nav>
</template>

<style scoped>
.navbar-custom {
    background: rgba(2, 6, 23, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(148, 163, 184, 0.2);
    font-family: 'Poppins', sans-serif;
}

/* Avatar */
.avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #3b82f6;
}

/* Brand */
.navbar-brand {
    color: #fff !important;
    font-size: 1rem;
}

/* Links */
.nav-link {
    color: #cbd5f5 !important;
    position: relative;
    transition: all 0.3s ease;
}

/* Hover underline animado */
.nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background: #3b82f6;
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: #fff !important;
}

.nav-link:hover::after {
    width: 100%;
}

/* Botón hamburguesa */
.navbar-toggler {
    border: none;
}

/* Espacio para que no tape contenido */
body {
    padding-top: 80px;
}
</style>