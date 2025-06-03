<template>
  <div class="min-h-screen bg-background flex flex-col">

    <div class="flex-1">
      <div class="text-[#5eccc1]">
        <router-link to="/produtos" class="btn-back mb-8 inline-flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="ml-2">Voltar para a listagem</span>
        </router-link>
      </div>

      <!-- <div  class="flex justify-center items-center py-12">  v-if="loading" 
        <p>Carregando...</p>
      </div> -->

      <div class="max-w-7xl mx-auto"> <!--v-else-if="produto"-->
        <div class="card">
          <div class="p-6 md:p-8 bg-white rounded-md border-2">
            <h1 class="text-2xl font-bold mb-6">Detalhes do Produto</h1>

            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-1/3">
                <div class="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center">
                  <!-- <img
                    :src="produto.imagem || '/placeholder.svg?height=250&width=250'"
                    :alt="produto.nome"
                    class="object-contain"
                    style="width: 250px; height: 250px;"
                  /> -->
                </div>
              </div>

              <div class="md:w-2/3">
                <div class="mb-6">
                  <h2 class="text-xl font-bold text-gray-800">{Nome}</h2>
                  <p class="text-gray-600 mt-2">{Descrição}</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 class="text-sm font-medium text-gray-500 mb-1">Código de Barras</h3>
                    <p class="text-lg font-mono">{Código de Barras}</p>
                  </div>

                  <div>
                    <h3 class="text-sm font-medium text-gray-500 mb-1">Preço</h3>
                    <p class="text-2xl font-bold text-primary text-[#5eccc1]">{R$ Preço}</p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <button class="p-1 flex items-center gap-2 bg-[#5eccc1] rounded-md text-white font-bold inline-block cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>Adicionar ao Pedido</button>
                  <router-link to="/produtos/busca" class="border border-[#5eccc1] rounded-md font-semibold text-center items-center">Nova Busca</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
 import axios from '@/services/api';

export default {
  name: 'ProdutoDetalhe',
  components: {
    Header
  },
  data() {
    return {
      produto: null,
      loading: true,
      produtosExemplo: [
        {
          id: 1,
          nome: "Chocolate Hershey's",
          descricao: "Chocolate Hershey's Special Dark 80% Cacau Tradicional 85g",
          preco: 7.99,
          codigoBarras: "7891234567890",
          imagem: "/placeholder.svg?height=250&width=250",
        },
        {
          id: 2,
          nome: "Notebook Dell Inspiron",
          descricao: "Notebook Dell Inspiron 15 8GB RAM 256GB SSD",
          preco: 4599.99,
          codigoBarras: "7891234567891",
          imagem: "/placeholder.svg?height=250&width=250",
        },
        {
          id: 3,
          nome: 'Smart TV LG 55"',
          descricao: 'Smart TV LG 55" 4K UHD',
          preco: 2899.99,
          codigoBarras: "7891234567892",
          imagem: "/placeholder.svg?height=250&width=250",
        },
      ]
    }
  },
  created() {
    this.loadProduto();
  },
  methods: {
    loadProduto() {
      const id = Number(this.$route.params.id);
      const found = this.produtosExemplo.find(p => p.id === id);

      if (found) {
        this.produto = found;
      } else {
        this.$router.push('/produtos');
      }

      this.loading = false;
    }
  }
}
</script> -->
