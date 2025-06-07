<template>
  <main class="max-w-6xl mx-auto px-4 py-8">
    <div class="p-6">
        <router-link to="/inicio" class="flex items-center text-[#48A6A7] hover:underline">
          <span class="text-2xl mr-2">←</span> Voltar para o inicio
        </router-link>
      </div>

    <section class="bg-[#d8e5d3] p-8 rounded-2xl shadow-md">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-black px-6 ">Listagem de Produtos</h1>
        <router-link to="/produtos/cadastro" class="flex items-center gap-2 bg-[#48A6A7] text-white px-4 py-2 rounded-lg font-semibold">
          <span class="text-xl">+</span> Novo Produto
        </router-link>
      </div>

      <div class="relative mb-6">
        <input
          type="text"
          placeholder="Buscar por nome ou código de barras"
          class="w-full px-4 py-2 pl-5 pr-10 rounded-xl bg-[#e4e4e4] text-gray-700 focus:outline-none"
        />
        <img src="../assets/icons/search.svg" class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5" />
      </div>

      <table class="w-full text-left">
        <thead class="text-black font-semibold">
          <tr>
            <th class="pb-2">Nome</th>
            <th class="pb-2">Código de barras</th>
            <th class="pb-2">Preço</th>
            <th class="pb-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in produtos" :key="produto.codigo" class="text-gray-800">
            <td class="py-2">{{ produto.nome }}</td>
            <td class="py-2">{{ produto.codigo }}</td>
            <td class="py-2">R$ {{ produto.preco.toFixed(2) }}</td>
            <td class="py-2">
              <router-link :to="`/produtos/${produto.codigo}`">
                <img src="../assets/icons/eye.png" class=" ml-4 w-6 h-4 cursor-pointer" />
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      produtos: [
        { nome: "Chocolate Hershey's", codigo: "7891234567890", preco: 7.99 },
        { nome: "Notebook Dell Inspiron", codigo: "7891234567891", preco: 4599.99 },
        { nome: 'Smart TV LG 55"', codigo: "7891234567892", preco: 2899.99 }
      ]
    }
  }
}
</script>

