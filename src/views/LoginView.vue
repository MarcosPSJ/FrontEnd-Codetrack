<template>
  <div class="min-h-screen bg-background flex flex-col bg-[#f5f5f0]">
    <div class="w-80">
      <div class="text-[#5eccc1]">
        <router-link to="/" class="btn-back mb-8 inline-flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="ml-2">Voltar para o início</span>
        </router-link>
      </div>

      <div class="max-w-md mx-auto">
        <div class="card p-8 border-2 rounded-lg bg-white">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" id="email" v-model="email" class="input-primary w-full border rounded-md p-1"
                placeholder="Digite seu email" required />
            </div>

            <div>
              <label for="senha" class="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <div class="relative">
                <input :type="mostrarSenha ? 'text' : 'password'" id="senha" v-model="senha"
                  class="input-primary pr-10 w-full border rounded-md p-1" placeholder="Digite sua senha" required />
              </div>
            </div>
            <div class="bg-[#5eccc1] text-white font-bold text-center items-center justify-center w-full mt-6 rounded-md p-2">
              <router-link to="/inicio" class="">  Entrar
              </router-link>
            </div>
          
          </form>

          <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
              Não tem uma conta?
              <router-link to="/cadastro" class="text-[#5eccc1] hover:underline">
                Cadastre-se
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/services/api';

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false
    };
  },
  methods: {
    handleLogin() {
      console.log('Login:', {
        email: this.email,
        password: this.password
      });
      this.$router.push('/inicio');
    }
  }
};
</script>
