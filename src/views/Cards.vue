<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Cards</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Various card components for displaying content in different layouts
        </p>
      </div>

      <!-- Basic Cards -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Basic Cards</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Simple Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Simple Card</h3>
              <p class="text-gray-600 dark:text-gray-400">
                This is a simple card with basic content. It can contain any type of content including text, images, and other elements.
              </p>
            </div>
          </div>

          <!-- Card with Image -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <div class="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg class="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Image</h3>
              <p class="text-gray-600 dark:text-gray-400">
                This card includes an image header with content below. Perfect for showcasing products or articles.
              </p>
            </div>
          </div>

          <!-- Card with Actions -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Actions</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                This card includes action buttons for user interaction.
              </p>
              <div class="flex space-x-3">
                <button class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                  Primary Action
                </button>
                <button class="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
                  Secondary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Stats Cards</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Revenue Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center dark:bg-green-900">
                  <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</p>
                <p class="text-2xl font-semibold text-gray-900 dark:text-white">$45,231</p>
                <p class="text-sm text-green-600 dark:text-green-400">+20.1% from last month</p>
              </div>
            </div>
          </div>

          <!-- Users Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center dark:bg-blue-900">
                  <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</p>
                <p class="text-2xl font-semibold text-gray-900 dark:text-white">2,350</p>
                <p class="text-sm text-green-600 dark:text-green-400">+180.1% from last month</p>
              </div>
            </div>
          </div>

          <!-- Orders Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center dark:bg-yellow-900">
                  <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Orders</p>
                <p class="text-2xl font-semibold text-gray-900 dark:text-white">12,234</p>
                <p class="text-sm text-red-600 dark:text-red-400">-19% from last month</p>
              </div>
            </div>
          </div>

          <!-- Conversion Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center dark:bg-purple-900">
                  <svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Conversion Rate</p>
                <p class="text-2xl font-semibold text-gray-900 dark:text-white">2.65%</p>
                <p class="text-sm text-green-600 dark:text-green-400">+4.75% from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Feature Cards</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Feature Card 1 -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
            <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 dark:bg-indigo-900">
              <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Experience blazing fast performance with our optimized architecture and efficient algorithms.
            </p>
          </div>

          <!-- Feature Card 2 -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 dark:bg-green-900">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure by Default</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Built with security in mind, featuring encryption, authentication, and best practices.
            </p>
          </div>

          <!-- Feature Card 3 -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 dark:bg-purple-900">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">User Friendly</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Intuitive design that makes complex tasks simple and enjoyable for all users.
            </p>
          </div>
        </div>
      </div>

      <!-- Interactive Cards -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Interactive Cards</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Hover Card -->
          <div class="group bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
            <div class="h-32 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-colors duration-200"></div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                Hover Effects
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                This card has smooth hover animations including lift, shadow, and color transitions.
              </p>
            </div>
          </div>

          <!-- Clickable Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200">
            <div class="h-32 bg-gradient-to-r from-green-500 to-teal-600"></div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Clickable Card</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                This card is clickable and can trigger actions or navigate to other pages.
              </p>
              <button class="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                Learn More →
              </button>
            </div>
          </div>

          <!-- Expandable Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <div class="h-32 bg-gradient-to-r from-orange-500 to-red-600"></div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Expandable Content</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                This card can expand to show more content when needed.
              </p>
              <button class="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Cards -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Profile Cards</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- User Profile Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <div class="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <div class="relative px-6 pb-6">
              <div class="flex justify-center">
                <div class="h-16 w-16 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-800 flex items-center justify-center text-white text-xl font-semibold -mt-8">
                  JD
                </div>
              </div>
              <div class="text-center mt-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
                <p class="text-gray-600 dark:text-gray-400">Software Engineer</p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">San Francisco, CA</p>
              </div>
              <div class="flex justify-center space-x-4 mt-4">
                <button class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                  Message
                </button>
                <button class="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
                  Follow
                </button>
              </div>
            </div>
          </div>

          <!-- Team Member Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-6">
            <div class="flex items-center space-x-4">
              <div class="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">
                JS
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Jane Smith</h3>
                <p class="text-gray-600 dark:text-gray-400">Product Manager</p>
                <div class="flex items-center mt-1">
                  <div class="flex items-center">
                    <div class="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Online</span>
                  </div>
                </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Contact Card -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-6">
            <div class="text-center">
              <div class="h-16 w-16 rounded-full bg-purple-500 mx-auto flex items-center justify-center text-white text-xl font-semibold mb-4">
                MW
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Mike Wilson</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Designer</p>
              <div class="space-y-2">
                <div class="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  mike@example.com
                </div>
                <div class="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutWithMainbar>
</template>

<script setup>
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';
// No additional logic needed for this component
</script> 