<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Tooltips</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Tooltip components for providing additional information on hover
        </p>
      </div>

      <!-- Basic Tooltips -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Basic Tooltips</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex flex-wrap gap-4">
            <!-- Top Tooltip -->
            <div class="relative group">
              <button class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Hover me (Top)
              </button>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                This is a tooltip on top
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>

            <!-- Bottom Tooltip -->
            <div class="relative group">
              <button class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Hover me (Bottom)
              </button>
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                This is a tooltip on bottom
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
              </div>
            </div>

            <!-- Left Tooltip -->
            <div class="relative group">
              <button class="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                Hover me (Left)
              </button>
              <div class="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                This is a tooltip on left
                <div class="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"></div>
              </div>
            </div>

            <!-- Right Tooltip -->
            <div class="relative group">
              <button class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                Hover me (Right)
              </button>
              <div class="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                This is a tooltip on right
                <div class="absolute top-1/2 right-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Icon Tooltips -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Icon Tooltips</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex flex-wrap gap-6">
            <!-- Info Icon -->
            <div class="relative group">
              <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center cursor-help">
                <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                Additional information here
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600"></div>
              </div>
            </div>

            <!-- Warning Icon -->
            <div class="relative group">
              <div class="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center cursor-help">
                <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-yellow-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                Warning message here
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-600"></div>
              </div>
            </div>

            <!-- Success Icon -->
            <div class="relative group">
              <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center cursor-help">
                <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-green-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                Success message here
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600"></div>
              </div>
            </div>

            <!-- Error Icon -->
            <div class="relative group">
              <div class="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center cursor-help">
                <svg class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                Error message here
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Rich Content Tooltips -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Rich Content Tooltips</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex flex-wrap gap-4">
            <!-- User Profile Tooltip -->
            <div class="relative group">
              <button class="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
                <div class="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm font-medium">JD</span>
                </div>
                <span class="text-gray-700 dark:text-gray-300">John Doe</span>
              </button>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div class="p-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                      <span class="text-white font-medium">JD</span>
                    </div>
                    <div>
                      <h3 class="text-sm font-medium text-gray-900 dark:text-white">John Doe</h3>
                      <p class="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                    </div>
                  </div>
                  <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div class="flex items-center justify-between text-sm">
                      <span class="text-gray-500 dark:text-gray-400">Email:</span>
                      <span class="text-gray-900 dark:text-white">john@example.com</span>
                    </div>
                    <div class="flex items-center justify-between text-sm mt-1">
                      <span class="text-gray-500 dark:text-gray-400">Status:</span>
                      <span class="text-green-600 dark:text-green-400">Online</span>
                    </div>
                  </div>
                </div>
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"></div>
              </div>
            </div>

            <!-- Product Tooltip -->
            <div class="relative group">
              <button class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                View Product
              </button>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div class="p-4">
                  <div class="flex items-start space-x-3">
                    <div class="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-sm font-medium text-gray-900 dark:text-white">Premium Package</h3>
                      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Complete solution for your business needs</p>
                      <div class="mt-2 flex items-center justify-between">
                        <span class="text-lg font-bold text-indigo-600 dark:text-indigo-400">$99/month</span>
                        <span class="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">Popular</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Unlimited users</span>
                    </div>
                    <div class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>24/7 support</span>
                    </div>
                  </div>
                </div>
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Tooltips -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Interactive Tooltips</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex flex-wrap gap-4">
            <!-- Click to Show Tooltip -->
            <div class="relative">
              <button 
                @click="toggleClickTooltip"
                class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Click me
              </button>
              <div 
                v-show="showClickTooltip"
                class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-purple-600 rounded-lg"
              >
                Click tooltip content
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600"></div>
              </div>
            </div>

            <!-- Focus Tooltip -->
            <div class="relative group">
              <input 
                type="text" 
                placeholder="Focus me for tooltip"
                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              >
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none">
                This input accepts text
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Custom Styled Tooltips -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Custom Styled Tooltips</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex flex-wrap gap-4">
            <!-- Gradient Tooltip -->
            <div class="relative group">
              <button class="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md hover:from-indigo-600 hover:to-purple-600">
                Gradient Tooltip
              </button>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Beautiful gradient tooltip
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-indigo-500"></div>
              </div>
            </div>

            <!-- Large Tooltip -->
            <div class="relative group">
              <button class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Large Tooltip
              </button>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 text-base text-white bg-green-600 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                This is a larger tooltip with more padding
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-green-600"></div>
              </div>
            </div>

            <!-- Animated Tooltip -->
            <div class="relative group">
              <button class="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                Animated Tooltip
              </button>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-yellow-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-95 group-hover:scale-100">
                Tooltip with scale animation
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutWithMainbar>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';

const showClickTooltip = ref(false);

const toggleClickTooltip = () => {
  showClickTooltip.value = !showClickTooltip.value;
};

// Close click tooltip when clicking outside
const closeClickTooltip = (e) => {
  if (!e.target.closest('.relative')) {
    showClickTooltip.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeClickTooltip);
});

onUnmounted(() => {
  document.removeEventListener('click', closeClickTooltip);
});
</script> 