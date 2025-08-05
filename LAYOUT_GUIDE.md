# Layout System Guide

## Overview

Aplikasi ini menggunakan sistem layout yang fleksibel dimana Anda bisa memilih apakah halaman menggunakan Mainbar (sidebar + header) atau tidak.

## Komponen Layout

### 1. Mainbar.vue
Komponen utama yang berisi:
- Sidebar navigation
- Header dengan user menu dan notifications
- Main content area dengan slot

### 2. LayoutWithMainbar.vue
Wrapper component yang menggunakan Mainbar dan menyediakan slot untuk konten halaman.

### 3. App.vue
Root component yang hanya berisi `<router-view />` untuk routing.

## Cara Penggunaan

### Halaman dengan Mainbar (Dashboard, Tasks, dll)

Gunakan `LayoutWithMainbar` untuk halaman yang membutuhkan sidebar dan header:

```vue
<template>
  <LayoutWithMainbar>
    <!-- Konten halaman Anda di sini -->
    <div class="space-y-8">
      <h1>Dashboard</h1>
      <!-- ... konten lainnya ... -->
    </div>
  </LayoutWithMainbar>
</template>

<script setup>
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';
</script>
```

### Halaman tanpa Mainbar (Login, Register, dll)

Untuk halaman yang tidak membutuhkan sidebar dan header, langsung render konten:

```vue
<template>
  <!-- Layout custom untuk halaman auth -->
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <!-- Header custom -->
    </header>
    
    <main class="flex items-center justify-center py-12">
      <!-- Konten halaman -->
    </main>
  </div>
</template>
```

## Contoh Implementasi

### ✅ Halaman dengan Mainbar
- Dashboard (`/dashboard`)
- Tasks (`/tasks`)
- Users (`/users`)
- Forms (`/forms`)
- Tables (`/tables`)
- dll.

### ✅ Halaman tanpa Mainbar
- Login (`/login`)
- Register (`/register`)
- 404 Page (`/404`)

## Keuntungan Sistem Ini

1. **Fleksibilitas**: Setiap halaman bisa memilih layout yang sesuai
2. **Reusability**: Mainbar bisa digunakan di berbagai halaman
3. **Maintainability**: Mudah untuk mengubah layout global
4. **Performance**: Halaman auth tidak memuat komponen yang tidak diperlukan

## Struktur File

```
src/
├── components/
│   ├── Mainbar.vue          # Komponen utama dengan sidebar + header
│   ├── LayoutWithMainbar.vue # Wrapper untuk halaman dengan Mainbar
│   └── Sidebar.vue          # Komponen sidebar
├── views/
│   ├── Dashboard.vue        # Menggunakan LayoutWithMainbar
│   ├── auth/
│   │   ├── Login.vue        # Layout custom tanpa Mainbar
│   │   └── Register.vue     # Layout custom tanpa Mainbar
│   └── ...
└── App.vue                  # Hanya router-view
```

## Tips Penggunaan

1. **Untuk halaman admin/dashboard**: Gunakan `LayoutWithMainbar`
2. **Untuk halaman auth**: Buat layout custom tanpa Mainbar
3. **Untuk halaman landing**: Buat layout custom sesuai kebutuhan
4. **Untuk modal/fullscreen**: Gunakan layout minimal tanpa Mainbar 