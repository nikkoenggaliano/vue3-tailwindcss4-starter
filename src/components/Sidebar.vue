<template>
    <aside
      class="fixed inset-y-0 left-0 z-40 flex h-screen w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 dark:border-gray-700 dark:bg-gray-800"
      :class="{
        'translate-x-0': state.isSidebarOpen,
        '-translate-x-full': !state.isSidebarOpen,
      }"
    >
      <div class="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 px-6 dark:border-gray-700">
        <h1 class="text-xl font-bold text-gray-800 dark:text-white">ADHD Cure</h1>
        
        <!-- Dark Mode Toggle Button -->
        <button 
          @click="toggleDarkMode" 
          class="rounded-lg p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :title="state.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <!-- Sun icon for light mode -->
          <svg 
            v-if="!state.isDarkMode" 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon icon for dark mode -->
          <svg 
            v-else 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
  
      <nav class="flex-grow overflow-y-auto p-4">
        <ul class="space-y-2">
          <!-- Main Navigation -->
          <li class="mb-4">
            <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Main</h3>
            <ul class="space-y-1">
              <li>
                <router-link 
                  to="/" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                  <span>Dashboard</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tasks" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/tasks'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/tasks')
                  }"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a1 1 0 110 2H4a1 1 0 110-2zm12 0h-3a1 1 0 100 2h3a1 1 0 100-2zM4 9h12a1 1 0 110 2H4a1 1 0 110-2zm0 5h12a1 1 0 110 2H4a1 1 0 110-2z" clip-rule="evenodd" /></svg>
                  <span>Tasks</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/users" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/users'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/users')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                  <span>Users</span>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- Auth -->
          <li class="mb-4">
            <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Auth</h3>
            <ul class="space-y-1">
              <li>
                <router-link 
                  to="/login" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/login'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/login')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  <span>Login</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/register" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/register'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/register')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" /></svg>
                  <span>Register</span>
                </router-link>
              </li>
            </ul>
          </li>



          <!-- Components -->
          <li class="mb-4">
            <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Components</h3>
            <ul class="space-y-1">
              <li>
                <router-link 
                  to="/forms" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/forms'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/forms')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" /></svg>
                  <span>Forms</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tables" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/tables'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/tables')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
                  <span>Tables</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/cards" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/cards'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/cards')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" /></svg>
                  <span>Cards</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/buttons" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/buttons'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/buttons')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" /></svg>
                  <span>Buttons</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/modals" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/modals'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/modals')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
                  <span>Modals</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/alerts" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/alerts'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/alerts')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>
                  <span>Alerts</span>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- Data & Charts -->
          <li class="mb-4">
            <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Data & Charts</h3>
            <ul class="space-y-1">
              <li>
                <router-link 
                  to="/charts" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/charts'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/charts')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
                  <span>Charts</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/pagination" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/pagination'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/pagination')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                  <span>Pagination</span>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- UI Elements -->
          <li class="mb-4">
            <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">UI Elements</h3>
            <ul class="space-y-1">
              <li>
                <router-link 
                  to="/badges" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/badges'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/badges')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Badges</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tabs" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/tabs'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/tabs')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
                  <span>Tabs</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/accordion" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/accordion'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/accordion')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0-8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
                  <span>Accordion</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/dropdowns" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/dropdowns'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/dropdowns')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                  <span>Dropdowns</span>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- Utilities -->
          <li class="mb-4">
            <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Utilities</h3>
            <ul class="space-y-1">
              <li>
                <router-link 
                  to="/loaders" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/loaders'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/loaders')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" /></svg>
                  <span>Loaders</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tooltips" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/tooltips'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/tooltips')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>
                  <span>Tooltips</span>
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/empty-states" 
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                  :class="{
                    'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300': isActive('/empty-states'),
                    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': !isActive('/empty-states')
                  }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
                  <span>Empty States</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
  
      <!-- Footer with user info or additional actions -->
      <div class="flex h-16 shrink-0 items-center justify-center border-t border-gray-200 px-6 dark:border-gray-700">
        <div class="text-sm text-gray-500 dark:text-gray-400">
          © 2024 ProjectKu
        </div>
      </div>
    </aside>
  </template>
  
  <script setup>
  import { state } from '../store.js';
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';

  const route = useRoute();

  // Function to check if a route is active
  const isActive = (path) => {
    return route.path === path;
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    state.isDarkMode = !state.isDarkMode;
  };
  </script>