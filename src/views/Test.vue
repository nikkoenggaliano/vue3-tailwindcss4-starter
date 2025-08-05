<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
    <Sidebar />

    <div v-if="state.isSidebarOpen" @click="state.isSidebarOpen = false"
      class="fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 lg:hidden"></div>

    <main class="p-4 transition-all duration-300 lg:p-8" :class="{ 'lg:ml-64': state.isSidebarOpen }">
      <header class="mb-8 flex items-center justify-between">
        <button @click="state.isSidebarOpen = !state.isSidebarOpen"
          class="rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <h2 class="text-2xl font-bold">Dashboard</h2>

        <div class="w-8"></div>
      </header>

      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="text-lg font-semibold mb-4">Selamat Datang!</h3>
        <p>
          Area ini adalah tempat untuk konten Anda. Anda bisa memasukkan komponen tabel, form, kartu, atau apa pun yang
          Anda butuhkan di sini. Layout akan secara otomatis menyesuaikan dengan sidebar.
        </p>

        <!-- <div class="mt-6 flex flex-wrap gap-4">
            <div class="h-24 flex-grow rounded-md bg-gray-100 p-4 dark:bg-gray-700">Contoh Kartu 1</div>
            <div class="h-24 flex-grow rounded-md bg-gray-100 p-4 dark:bg-gray-700">Contoh Kartu 2</div>
            <div class="h-24 flex-grow rounded-md bg-gray-100 p-4 dark:bg-gray-700">Contoh Kartu 3</div>
          </div> -->

      </div>

      <div class="mt-6 flex flex-wrap gap-4">
        <div class="h-24 flex-grow rounded-md bg-gray-100 p-4 dark:bg-gray-700">
          <h4 class="font-medium text-gray-800 dark:text-gray-200">Contoh Kartu 1</h4>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Deskripsi singkat untuk kartu pertama</p>
        </div>
        <div class="h-24 flex-grow rounded-md bg-gray-100 p-4 dark:bg-gray-700">
          <h4 class="font-medium text-gray-800 dark:text-gray-200">Contoh Kartu 2</h4>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Deskripsi singkat untuk kartu kedua</p>
        </div>
        <div class="h-24 flex-grow rounded-md bg-gray-100 p-4 dark:bg-gray-700">
          <h4 class="font-medium text-gray-800 dark:text-gray-200">Contoh Kartu 3</h4>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Deskripsi singkat untuk kartu ketiga</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { state } from '../store.js';
import Sidebar from '../components/Sidebar.vue';

</script>