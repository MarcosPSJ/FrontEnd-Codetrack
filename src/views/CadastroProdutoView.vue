<template>
  <div class="min-h-screen bg-[#F4F5F7]">
    <!-- Voltar -->
    <div class="p-6">
      <router-link to="/inicio" class="flex items-center text-[#48A6A7] hover:underline">
        <span class="text-2xl mr-2">←</span> Voltar para o inicio
      </router-link>
    </div>

    <!-- Conteúdo -->
    <main class="max-w-3xl mx-auto px-6">
      <div class="bg-[#DDE5D9] rounded-xl p-8">
        <h2 class="text-3xl font-bold mb-8">Cadastro de Produto</h2>

        <div class="space-y-6">
          <!-- Nome -->
          <div>
            <label class="block mb-1 text-gray-800">Nome do Produto</label>
            <input
              v-model="produto.nome"
              type="text"
              placeholder="Digite o nome do produto"
              class="w-full px-4 py-3 rounded-lg bg-[#E7E9EB] outline-none"
            />
          </div>

          <!-- Descrição -->
          <div>
            <label class="block mb-1 text-gray-800">Descrição</label>
            <textarea
              v-model="produto.descricao"
              rows="3"
              placeholder="Digite a descrição do produto"
              class="w-full px-4 py-3 rounded-lg bg-[#E7E9EB] outline-none"
            ></textarea>
          </div>

          <!-- Preço e Código -->
          <div class="flex flex-col sm:flex-row gap-6">
            <div class="flex-1">
              <label class="block mb-1 text-gray-800">Preço (R$)</label>
              <input
                v-model="produto.preco"
                type="number"
                step="0.01"
                placeholder="0,00"
                class="w-full px-4 py-3 rounded-lg bg-[#E7E9EB] outline-none"
              />
            </div>
            <div class="flex-1">
              <label class="block mb-1 text-gray-800">Código de barras</label>
              <input
                v-model="produto.codigo"
                type="text"
                placeholder="Digite o código"
                class="w-full px-4 py-3 rounded-lg bg-[#E7E9EB] outline-none"
              />
            </div>
            <div class="flex-1">
              <label class="block mb-1 text-gray-800">Imagem do Produto</label>
              <input
                type="file"
                @change="onFileChange"
                accept="image/*"
                class="w-full px-4 py-3 rounded-lg bg-[#E7E9EB] outline-none"
              />
            </div>
          </div>

          <!-- Botões -->
          <div class="flex justify-end gap-4 pt-4">
            <button
              @click="limparFormulario"
              class="px-6 py-2 rounded-lg text-[#48A6A7] hover:underline"
              type="button"
            >
              Cancelar
            </button>
            <button
              @click="salvarProduto"
              class="flex items-center gap-2 bg-[#48A6A7] text-white px-6 py-3 rounded-lg hover:scale-105 transition"
              type="button"
            >
              <span>💾</span> Salvar Produto
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/services/api'

const produto = ref({
  nome: '',
  descricao: '',
  preco: '',
  codigo: ''
})

const imagemFile = ref(null)

// Quando o input de arquivo muda, guardamos o arquivo selecionado
const onFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    imagemFile.value = file
  }
}

const salvarProduto = async () => {
  if (produto.value.nome.trim() === '') {
    alert('Preencha o nome do produto!')
    return
  }

  try {
    // Monta formData para enviar texto + arquivo
    const formData = new FormData()
    formData.append('nome', produto.value.nome)
    formData.append('descricao', produto.value.descricao)
    formData.append('preco', parseFloat(produto.value.preco)) // transforma para número
    formData.append('codigo', produto.value.codigo)

    if (imagemFile.value) {
      formData.append('imagem', imagemFile.value)
    }

    const response = await axios.post('https://localhost:7136/api/Produto', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    console.log('Resposta da API:', response.data)
    alert('Produto salvo com sucesso!')
    limparFormulario()
  } catch (error) {
    console.error('Erro ao salvar produto:', error)
    alert('Erro ao salvar produto. Tente novamente.')
  }
}

const limparFormulario = () => {
  produto.value = {
    nome: '',
    descricao: '',
    preco: '',
    codigo: ''
  }
  imagemFile.value = null
}
</script>
