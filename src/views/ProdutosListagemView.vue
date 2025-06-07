<template>
  <main class="max-w-6xl mx-auto px-4 py-8">
    <div class="p-6">
      <router-link to="/inicio" class="flex items-center text-[#48A6A7] hover:underline">
        <span class="text-2xl mr-2">←</span> Voltar para o início
      </router-link>
    </div>

    <section class="bg-[#d8e5d3] p-8 rounded-2xl shadow-md overflow-x-auto">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-black px-6">Listagem de Produtos</h1>
        <router-link to="/produtos/cadastro" class="flex items-center gap-2 bg-[#48A6A7] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#3c9091]">
          <span class="text-xl">+</span> Novo Produto
        </router-link>
      </div>

      <div class="relative mb-6">
        <input
          type="text"
          placeholder="Buscar por nome ou código de barras"
          class="w-full px-4 py-2 pl-5 pr-10 rounded-xl bg-[#e4e4e4] text-gray-700 focus:outline-none"
        />
        <img src="@/assets/icons/search.png" class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5" />
      </div>

      <table class="w-full text-left table-auto">
        <thead class="text-black font-semibold border-b border-gray-400">
          <tr>
            <th class="pb-2 px-4 w-1/4">Nome</th>
            <th class="pb-2 px-4 w-1/4">Código de barras</th>
            <th class="pb-2 px-4 w-1/6">Preço</th>
            <th class="pb-2 px-4 w-1/6">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="produto in produtos"
            :key="produto.id"
            class="text-gray-800 border-b border-gray-300"
          >
            <td class="py-3 px-4 break-words max-w-xs truncate" :title="produto.nome">
              {{ produto.nome }}
            </td>
            <td class="py-3 px-4 break-words max-w-xs truncate" :title="produto.codigoDeBarra">
              {{ produto.codigoDeBarra }}
            </td>
            <td class="py-3 px-4">
              {{ formatarPreco(produto.preco) }}
            </td>
            <td class="py-3 px-4">
              <router-link :to="`/produtos/${produto.codigoDeBarra}`" class="inline-block">
                <img src="@/assets/icons/eye.png" class="w-6 h-4 cursor-pointer" />
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      produtos: []
    }
  },
  mounted() {
    this.buscarProdutos()
  },
  methods: {
    async buscarProdutos() {
      try {
        const resposta = await axios.get('https://localhost:7136/api/Produto')
        this.produtos = resposta.data
      } catch (erro) {
        console.error('Erro ao buscar produtos:', erro)
      }
    },
    formatarPreco(valor) {
      const numero = Number(valor) / 100
      return numero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    }
  }
}
</script>

