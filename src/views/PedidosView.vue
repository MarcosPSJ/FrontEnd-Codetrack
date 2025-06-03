<template>
  <main class="max-w-6xl mx-auto px-4 py-8">
    <div class="p-6">
        <router-link to="/inicio" class="flex items-center text-[#48A6A7] hover:underline">
          <span class="text-2xl mr-2">←</span> Voltar para o inicio
        </router-link>
      </div>

    <section class="bg-[#d8e5d3] p-8 rounded-2xl shadow-md">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-black">Pedidos</h1>
        <button class="flex items-center gap-2 bg-[#48A6A7] text-white px-4 py-2 rounded-lg font-semibold">
          <span class="text-xl">+</span> Novo Pedido
        </button>
      </div>

      <div class="relative mb-6">
        <input
          type="text"
          placeholder="Buscar por cliente ou número do pedido"
          class="w-full px-4 py-2 pl-5 pr-10 rounded-xl bg-[#e4e4e4] text-gray-700 focus:outline-none"
        />
        <img src="../assets/icons/search.svg" class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5" />
      </div>

      <table class="w-full text-left">
        <thead class="text-black font-semibold">
          <tr>
            <th class="pb-2">Nº</th>
            <th class="pb-2">Cliente</th>
            <th class="pb-2">Data</th>
            <th class="pb-2">Itens</th>
            <th class="pb-2">Total</th>
            <th class="pb-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pedido in pedidos" :key="pedido.numero" class="text-gray-800">
            <td class="py-2">#{{ pedido.numero }}</td>
            <td class="py-2">{{ pedido.cliente }}</td>
            <td class="py-2">{{ pedido.data }}</td>
            <td class="py-2">{{ pedido.itens }}</td>
            <td class="py-2">R$ {{ pedido.total.toFixed(2) }}</td>
            <td class="py-2">
              <img src="../assets/icons/eye.svg" class="w-6 h-6 cursor-pointer" />
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
      pedidos: [
        { numero: 1, cliente: "João Silva", data: "09/05/2023", itens: 3, total: 4389.97 },
        { numero: 2, cliente: "Maria Oliveira", data: "08/05/2023", itens: 1, total: 2899.99 },
        { numero: 3, cliente: "Pedro Santos", data: "07/05/2023", itens: 2, total: 389.98 },
        { numero: 4, cliente: "Ana Souza", data: "06/05/2023", itens: 4, total: 8989.96 }
      ]
    }
  }
}
</script>
