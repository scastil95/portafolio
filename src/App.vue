<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppNavbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import SectionAbout from './components/Section-about.vue';
import SectionProyectos from './components/Section-Proyectos.vue';
import SectionStack from './components/Section-Stack.vue';
import Footer from './components/Footer.vue';
</script>

<RouterView />

<template>
  <AppNavbar />
  <Hero />
  <SectionProyectos />
  <SectionStack />
  <SectionAbout />
  <Footer />
  
</template>

<style scoped></style>
