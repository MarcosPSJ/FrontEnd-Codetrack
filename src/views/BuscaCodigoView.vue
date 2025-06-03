<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <div class="page-container flex-1">
      <router-link to="/inicio" class="mb-8 flex items-center text-[#48A6A7] hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Voltar para o início
      </router-link>

      <div class="bg-[#d8e5d3] max-w-2xl mx-auto text-center bg-white pt-2 border border-gray-200 rounded-md shadow">
        <h1 class="text-2xl font-bold mb-2 mt-6">Buscar por Código</h1>
        <p class="text-gray-600 mb-8">Digite o código de barras do produto</p>

        <div class="flex justify-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
        </div>

        <div class="card p-6 mb-8">
          <div class="flex items-center gap-2 max-w-md mx-auto justify-center">
            <input
              type="text"
              class="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Ex: 1234567895285"
              v-model="codigoBarras"
              @keyup.enter="handleSearch"
            />
            <button class="bg-[#48A6A7] text-white px-4 py-2 rounded-lg hover:scale-105 transition flex items-center" @click="handleSearch">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Buscar
            </button>
          </div>
        </div>

        <div v-if="produto" class="card p-6 text-left bg-white border border-gray-200 rounded-md shadow">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/3 flex justify-center">
              <img :src="produto.imagem" :alt="produto.nome" class="object-contain w-[200px] h-[200px]" />
            </div>
            <div class="md:w-2/3">
              <h2 class="text-xl font-bold mb-2">{{ produto.nome }}</h2>
              <p class="text-gray-600 mb-4">{{ produto.descricao }}</p>

              <div class="mb-4">
                <p class="text-sm text-gray-500">Código de barras:</p>
                <p class="font-mono">{{ produto.codigoBarras }}</p>
              </div>

              <div class="mb-6">
                <p class="text-sm text-gray-500">Preço:</p>
                <p class="text-2xl font-bold text-blue-600">R$ {{ produto.preco.toFixed(2) }}</p>
              </div>

              <div class="flex gap-3">
                <router-link :to="`/produtos/${produto.id}`" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Ver Detalhes
                </router-link>
                <button class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400" @click="resetSearch">
                  Nova Busca
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="notFound" class="card p-8 text-center bg-white border border-gray-200 rounded-md shadow mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Produto não encontrado</h3>
          <p class="text-gray-600 mb-6">Verifique o código de barras e tente novamente</p>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" @click="resetSearch">
            Nova Busca
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- <script>
import Header from '../components/Header.vue';

export default {
  name: 'ProdutoBusca',
  components: {
    Header
  },
  data() {
    return {
      codigoBarras: '',
      produto: null,
      notFound: false,
      produtosExemplo: [
        {
          id: 1,
          nome: "Chocolate Hershey's",
          descricao: "Chocolate Hershey's Special Dark 80% Cacau Tradicional 85g",
          preco: 7.99,
          codigoBarras: "7891234567890",
          imagem: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 2,
          nome: "Notebook Dell Inspiron",
          descricao: "Notebook Dell Inspiron 15 8GB RAM 256GB SSD",
          preco: 4599.99,
          codigoBarras: "7891234567891",
          imagem: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 3,
          nome: 'Smart TV LG 55"',
          descricao: 'Smart TV LG 55" 4K UHD',
          preco: 2899.99,
          codigoBarras: "7891234567892",
          imagem: "/placeholder.svg?height=200&width=200",
        },
      ]
    }
  },
  methods: {
    handleSearch() {
      if (!this.codigoBarras.trim()) return;

      const found = this.produtosExemplo.find(p => p.codigoBarras === this.codigoBarras);

      if (found) {
        this.produto = found;
        this.notFound = false;
      } else {
        this.produto = null;
        this.notFound = true;
      }
    },
    resetSearch() {
      this.codigoBarras = '';
      this.produto = null;
      this.notFound = false;
    }
  }
}
</script>

<style scoped>
.bg-background {
  background-color: var(--background);
}

.text-primary {
  color: var(--primary);
}

.h-24 {
  height: 6rem;
}

.w-24 {
  width: 6rem;
}

.mr-2 {
  margin-right: 0.5rem;
}
</style> -->