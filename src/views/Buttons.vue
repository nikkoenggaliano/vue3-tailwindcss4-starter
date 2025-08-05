<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Buttons</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Comprehensive button components with various styles, sizes, and states
        </p>
      </div>

      <!-- Basic Buttons -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Basic Buttons</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Primary Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Primary Buttons</h3>
            <div class="flex flex-wrap gap-3">
              <button class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                Primary
              </button>
              <button class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" disabled>
                Disabled
              </button>
              <button class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                With Icon
              </button>
            </div>
          </div>

          <!-- Secondary Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Secondary Buttons</h3>
            <div class="flex flex-wrap gap-3">
              <button class="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
                Secondary
              </button>
              <button class="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800" disabled>
                Disabled
              </button>
              <button class="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
                <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Button Variants -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Button Variants</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Success Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Success</h3>
            <div class="flex flex-wrap gap-3">
              <button class="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                Success
              </button>
              <button class="px-4 py-2 border border-green-300 text-green-700 text-sm font-medium rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:border-green-600 dark:text-green-400 dark:hover:bg-green-900 dark:focus:ring-offset-gray-800">
                Success Outline
              </button>
            </div>
          </div>

          <!-- Warning Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Warning</h3>
            <div class="flex flex-wrap gap-3">
              <button class="px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                Warning
              </button>
              <button class="px-4 py-2 border border-yellow-300 text-yellow-700 text-sm font-medium rounded-md hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:border-yellow-600 dark:text-yellow-400 dark:hover:bg-yellow-900 dark:focus:ring-offset-gray-800">
                Warning Outline
              </button>
            </div>
          </div>

          <!-- Danger Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Danger</h3>
            <div class="flex flex-wrap gap-3">
              <button class="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                Danger
              </button>
              <button class="px-4 py-2 border border-red-300 text-red-700 text-sm font-medium rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-900 dark:focus:ring-offset-gray-800">
                Danger Outline
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Button Sizes -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Button Sizes</h2>
        
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-16">Small:</span>
            <button class="px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
              Small Button
            </button>
            <button class="px-3 py-1.5 border border-gray-300 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
              Small Secondary
            </button>
          </div>
          
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-16">Medium:</span>
            <button class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
              Medium Button
            </button>
            <button class="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
              Medium Secondary
            </button>
          </div>
          
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-16">Large:</span>
            <button class="px-6 py-3 bg-indigo-600 text-white text-base font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
              Large Button
            </button>
            <button class="px-6 py-3 border border-gray-300 text-gray-700 text-base font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
              Large Secondary
            </button>
          </div>
        </div>
      </div>

      <!-- Icon Buttons -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Icon Buttons</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Icon Only Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Icon Only</h3>
            <div class="flex flex-wrap gap-3">
              <button class="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button class="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </button>
              <button class="p-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button class="p-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Icon with Text Buttons -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Icon with Text</h3>
            <div class="flex flex-wrap gap-3">
              <button class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Item
              </button>
              <button class="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Save
              </button>
              <button class="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
                <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Button Groups -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Button Groups</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Horizontal Button Group -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Horizontal Group</h3>
            <div class="flex">
              <button class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium border border-indigo-600 rounded-l-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                Left
              </button>
              <button class="px-4 py-2 bg-white text-gray-700 text-sm font-medium border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
                Middle
              </button>
              <button class="px-4 py-2 bg-white text-gray-700 text-sm font-medium border border-gray-300 rounded-r-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
                Right
              </button>
            </div>
          </div>

          <!-- Vertical Button Group -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Vertical Group</h3>
            <div class="flex flex-col">
              <button class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium border border-indigo-600 rounded-t-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                Top
              </button>
              <button class="px-4 py-2 bg-white text-gray-700 text-sm font-medium border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
                Middle
              </button>
              <button class="px-4 py-2 bg-white text-gray-700 text-sm font-medium border border-gray-300 rounded-b-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
                Bottom
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading States -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Loading States</h2>
        
        <div class="flex flex-wrap gap-4">
          <button class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" disabled>
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </button>
          
          <button class="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800" disabled>
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </button>
          
          <button class="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800" disabled>
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Saving...
          </button>
        </div>
      </div>

      <!-- Disabled States -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Disabled States</h2>
        
        <div class="flex flex-wrap gap-4">
          <button class="px-4 py-2 bg-gray-300 text-gray-500 text-sm font-medium rounded-md cursor-not-allowed dark:bg-gray-700 dark:text-gray-400" disabled>
            Disabled Primary
          </button>
          
          <button class="px-4 py-2 border border-gray-200 text-gray-400 text-sm font-medium rounded-md cursor-not-allowed dark:border-gray-600 dark:text-gray-500" disabled>
            Disabled Secondary
          </button>
          
          <button class="px-4 py-2 bg-red-300 text-red-500 text-sm font-medium rounded-md cursor-not-allowed dark:bg-red-900 dark:text-red-400" disabled>
            Disabled Danger
          </button>
        </div>
      </div>
    </div>
  </LayoutWithMainbar>
</template>

<script setup>
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';
// No additional logic needed for this component
</script> 