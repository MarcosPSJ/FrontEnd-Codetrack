<template>
  <nav class="bg-[#48A6A7] text-white text-xl py-6 px-8 flex justify-between items-center font-sans">
    <div class="flex items-center gap-2">
      <span class="font-bold text-xl">CodeTrack</span>
    </div>
    <ul class="flex justify-between items-center gap-6">
      <li><router-link to="/inicio">Home</router-link></li>
      <li><router-link to="/about">Sobre</router-link></li>
      <li><router-link to="/contact">Contato</router-link></li>
      <li v-if="route.path !== '/login'">
        <router-link
          to="/login"
          class="bg-white text-[#48A6A7] rounded-lg py-2 px-4 font-bold transition flex items-center gap-2"
        >Entrar</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
