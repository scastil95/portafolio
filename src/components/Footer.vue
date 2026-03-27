<template>
  <footer id="contacto" class="footer py-5">
    <div class="container text-center">

      <h3 class="fw-bold mb-3">¿Hablamos?</h3>

      <p class="mb-4 footer-text">
        Estoy disponible para oportunidades como desarrollador frontend, prácticas o proyectos freelance.
        Si tienes una idea o quieres sumar a tu equipo, será un gusto conversar.
      </p>

      <!-- ICONOS -->
      <div class="footer-icons mb-4">
        <a href="https://github.com/scastil95" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/scastillorodriguez/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:scastillo1095@gmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>

      <small class="footer-copy">
        © 2026 Sebastián Castillo · Portafolio 
      </small>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: radial-gradient(circle at top, #0f172a, #020617);
  color: white;
  font-family: 'Poppins', sans-serif;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
}

/* Texto */
.footer-text {
  color: #cbd5f5;
  max-width: 500px;
  margin: 0 auto;
  font-size: 0.95rem;
}

/* Iconos */
.footer-icons a {
  color: #cbd5f5;
  font-size: 1.8rem;
  margin: 0 10px;
  transition: all 0.3s ease;
}

/* Hover moderno */
.footer-icons a:hover {
  color: #38bdf8;
  transform: translateY(-3px) scale(1.1);
}

/* Copy */
.footer-copy {
  color: #64748b;
  font-size: 0.8rem;
}
</style>