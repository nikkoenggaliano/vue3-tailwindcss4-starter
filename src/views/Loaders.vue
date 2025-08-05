<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Loaders</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Loading components and spinners for better user experience
        </p>
      </div>

      <!-- Spinners -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Spinners</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <!-- Basic Spinner -->
            <div class="text-center">
              <div class="inline-flex items-center justify-center">
                <svg class="animate-spin h-8 w-8 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Basic Spinner</p>
            </div>

            <!-- Dots Spinner -->
            <div class="text-center">
              <div class="inline-flex space-x-1">
                <div class="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              </div>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Dots Spinner</p>
            </div>

            <!-- Pulse Spinner -->
            <div class="text-center">
              <div class="inline-flex items-center justify-center">
                <div class="w-8 h-8 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse"></div>
              </div>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Pulse Spinner</p>
            </div>

            <!-- Ring Spinner -->
            <div class="text-center">
              <div class="inline-flex items-center justify-center">
                <div class="w-8 h-8 border-4 border-indigo-200 dark:border-indigo-700 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin"></div>
              </div>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Ring Spinner</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Button Loaders -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Button Loaders</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex flex-wrap gap-4">
            <!-- Primary Button with Loader -->
            <button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </button>

            <!-- Secondary Button with Loader -->
            <button class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">
              <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing
            </button>

            <!-- Small Button with Loader -->
            <button class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-900 dark:text-indigo-300 dark:hover:bg-indigo-800">
              <svg class="animate-spin -ml-1 mr-2 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Saving
            </button>
          </div>
        </div>
      </div>

      <!-- Skeleton Loaders -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Skeleton Loaders</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="space-y-6">
            <!-- Card Skeleton -->
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div class="animate-pulse">
                <div class="flex items-center space-x-4">
                  <div class="rounded-full bg-gray-300 dark:bg-gray-600 h-12 w-12"></div>
                  <div class="flex-1 space-y-2">
                    <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                    <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                  </div>
                </div>
                <div class="mt-4 space-y-2">
                  <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                  <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
                </div>
              </div>
            </div>

            <!-- Table Skeleton -->
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div class="animate-pulse">
                <div class="bg-gray-50 dark:bg-gray-700 px-6 py-3">
                  <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
                </div>
                <div class="divide-y divide-gray-200 dark:divide-gray-700">
                  <div class="px-6 py-4">
                    <div class="flex items-center space-x-4">
                      <div class="h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div class="flex-1 space-y-2">
                        <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
                        <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                      </div>
                      <div class="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  <div class="px-6 py-4">
                    <div class="flex items-center space-x-4">
                      <div class="h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div class="flex-1 space-y-2">
                        <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
                        <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
                      </div>
                      <div class="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  <div class="px-6 py-4">
                    <div class="flex items-center space-x-4">
                      <div class="h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div class="flex-1 space-y-2">
                        <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/5"></div>
                        <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                      </div>
                      <div class="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- List Skeleton -->
            <div class="space-y-3">
              <div class="animate-pulse">
                <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
              </div>
              <div class="space-y-2">
                <div class="animate-pulse">
                  <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
                <div class="animate-pulse">
                  <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                </div>
                <div class="animate-pulse">
                  <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
                </div>
                <div class="animate-pulse">
                  <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress Loaders -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Progress Loaders</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="space-y-6">
            <!-- Linear Progress -->
            <div>
              <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Upload Progress</span>
                <span>75%</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div class="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full transition-all duration-300" style="width: 75%"></div>
              </div>
            </div>

            <!-- Animated Progress -->
            <div>
              <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Processing</span>
                <span>Indeterminate</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div class="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full animate-pulse" style="width: 100%"></div>
              </div>
            </div>

            <!-- Stepped Progress -->
            <div>
              <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span>Installation Steps</span>
                <span>Step 3 of 5</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="flex-1 flex space-x-2">
                  <div class="h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full flex-1"></div>
                  <div class="h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full flex-1"></div>
                  <div class="h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full flex-1"></div>
                  <div class="h-2 bg-gray-300 dark:bg-gray-600 rounded-full flex-1"></div>
                  <div class="h-2 bg-gray-300 dark:bg-gray-600 rounded-full flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Full Page Loader -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Full Page Loader</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="relative h-64 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
            <!-- Overlay -->
            <div class="absolute inset-0 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 flex items-center justify-center">
              <div class="text-center">
                <svg class="animate-spin h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p class="text-lg font-medium text-gray-900 dark:text-white">Loading...</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Please wait while we process your request</p>
              </div>
            </div>
            
            <!-- Background Content -->
            <div class="p-6">
              <div class="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
              <div class="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
              <div class="h-3 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Custom Loaders -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Custom Loaders</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <!-- Heartbeat Loader -->
            <div class="text-center">
              <div class="inline-flex items-center justify-center">
                <svg class="animate-pulse h-8 w-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Heartbeat</p>
            </div>

            <!-- Wave Loader -->
            <div class="text-center">
              <div class="inline-flex space-x-1">
                <div class="w-1 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse"></div>
                <div class="w-1 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse" style="animation-delay: 0.1s"></div>
                <div class="w-1 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                <div class="w-1 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse" style="animation-delay: 0.3s"></div>
                <div class="w-1 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
              </div>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Wave</p>
            </div>

            <!-- Rotating Square -->
            <div class="text-center">
              <div class="inline-flex items-center justify-center">
                <div class="w-8 h-8 border-2 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded animate-spin"></div>
              </div>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Rotating Square</p>
            </div>

            <!-- Bouncing Ball -->
            <div class="text-center">
              <div class="inline-flex items-center justify-center">
                <div class="w-6 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-bounce"></div>
              </div>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Bouncing Ball</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutWithMainbar>
</template>

<script setup>
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';
// Loaders component logic can be added here
</script> 