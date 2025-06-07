<template>
  <div class="max-w-md mx-auto px-6 py-16">
    <h2 class="text-5xl font-extrabold text-gray-800 mb-6">Contato</h2>
    <p class="text-lg text-gray-700 mb-8">
      Entre em contato conosco para obter mais informações sobre nossos serviços
      ou para dar feedback sobre nossa plataforma.
    </p>
    <form action="" class="space-y-4">
      <div>
        <label for="nome" class="block text-sm font-medium text-gray-700 mb-1">
          Nome
        </label>
        <input type="text" id="nome" class="border rounded-md w-full p-1">
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
          E-mail
        </label>
        <input type="email" id="email" class="border rounded-md w-full p-1">
      </div>
      <div>
        <label for="mensagem" class="block text-sm font-medium text-gray-700 mb-1">
          Mensagem
        </label>
        <textarea id="mensagem" class="border rounded-md w-full p-1" rows="5"></textarea>
      </div>
      <button type="submit" class="bg-[#48A6A7] text-white py-2 px-4 rounded-md font-medium">
        Enviar
      </button>
    </form>
  </div>
</template>