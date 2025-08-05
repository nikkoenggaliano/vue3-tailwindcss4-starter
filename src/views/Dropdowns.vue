<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Dropdowns</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Dropdown components for navigation and selection menus
        </p>
      </div>

      <!-- Basic Dropdown -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Basic Dropdown</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex space-x-4">
            <!-- Simple Dropdown -->
            <div class="relative">
              <button 
                @click="toggleBasicDropdown"
                class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Options
                <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div v-show="showBasicDropdown" class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
                <div class="py-1" role="menu">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">Edit</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">Duplicate</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">Archive</a>
                  <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-600" role="menuitem">Delete</a>
                </div>
              </div>
            </div>

            <!-- Dropdown with Icons -->
            <div class="relative">
              <button 
                @click="toggleIconDropdown"
                class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                User Menu
                <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div v-show="showIconDropdown" class="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
                <div class="py-1" role="menu">
                  <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                    <svg class="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Your Profile
                  </a>
                  <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                    <svg class="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </a>
                  <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                    <svg class="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Help
                  </a>
                  <div class="border-t border-gray-100 dark:border-gray-600"></div>
                  <a href="#" class="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-600" role="menuitem">
                    <svg class="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Multi-level Dropdown -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Multi-level Dropdown</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="relative">
            <button 
              @click="toggleMultiDropdown"
              class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Products
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div v-show="showMultiDropdown" class="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
              <div class="py-1" role="menu">
                <div class="relative group">
                  <button @click="toggleSubmenu" class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                    <span>Software</span>
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div v-show="showSubmenu" class="absolute left-full top-0 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                    <div class="py-1">
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">Desktop Apps</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">Mobile Apps</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">Web Apps</a>
                    </div>
                  </div>
                </div>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">Hardware</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">Services</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dropdown with Search -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Dropdown with Search</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="relative">
            <button 
              @click="toggleSearchDropdown"
              class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Select Country
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div v-show="showSearchDropdown" class="absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
              <div class="p-3 border-b border-gray-200 dark:border-gray-600">
                <input 
                  v-model="searchQuery"
                  type="text" 
                  placeholder="Search countries..."
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white dark:placeholder-gray-400"
                >
              </div>
              <div class="py-1 max-h-60 overflow-y-auto">
                <a 
                  v-for="country in filteredCountries" 
                  :key="country.code"
                  href="#" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  {{ country.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Notification Dropdown -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Notification Dropdown</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="relative">
            <button 
              @click="toggleNotificationDropdown"
              class="relative inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM4.19 4.19A2 2 0 004 6v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-1.41.59z" />
              </svg>
              <span class="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
                <span class="text-xs text-white font-medium">{{ notifications.length }}</span>
              </span>
            </button>
            
            <div v-show="showNotificationDropdown" class="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
              <div class="py-1">
                <div class="px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  <h3 class="text-sm font-medium text-gray-900 dark:text-white">Notifications</h3>
                </div>
                <div class="max-h-64 overflow-y-auto">
                  <div v-for="notification in notifications" :key="notification.id" class="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <div :class="`w-8 h-8 ${notification.iconBg} rounded-full flex items-center justify-center`">
                          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="notification.icon" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-3 flex-1">
                        <p class="text-sm font-medium text-gray-900 dark:text-white">{{ notification.title }}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ notification.message }}</p>
                        <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">{{ notification.time }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-2 border-t border-gray-200 dark:border-gray-600">
                  <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">View all notifications</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Split Button Dropdown -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Split Button Dropdown</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex">
            <button class="inline-flex items-center px-4 py-2 border border-r-0 border-gray-300 rounded-l-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">
              Save
            </button>
            <div class="relative">
              <button 
                @click="toggleSplitDropdown"
                class="inline-flex items-center px-3 py-2 border border-gray-300 rounded-r-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div v-show="showSplitDropdown" class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
                <div class="py-1" role="menu">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">Save as Draft</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">Save and Publish</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">Save as Template</a>
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
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Dropdown states
const showBasicDropdown = ref(false);
const showIconDropdown = ref(false);
const showMultiDropdown = ref(false);
const showSubmenu = ref(false);
const showSearchDropdown = ref(false);
const showNotificationDropdown = ref(false);
const showSplitDropdown = ref(false);

// Search functionality
const searchQuery = ref('');

// Sample data
const countries = ref([
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'JP', name: 'Japan' },
  { code: 'AU', name: 'Australia' },
  { code: 'BR', name: 'Brazil' },
  { code: 'IN', name: 'India' },
  { code: 'CN', name: 'China' }
]);

const notifications = ref([
  {
    id: 1,
    title: 'New user registration',
    message: 'John Doe has joined the platform',
    time: '2 minutes ago',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    iconBg: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Task completed',
    message: 'User authentication system has been completed',
    time: '1 hour ago',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    iconBg: 'bg-green-500'
  },
  {
    id: 3,
    title: 'System warning',
    message: 'High memory usage detected on server',
    time: '3 hours ago',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z',
    iconBg: 'bg-yellow-500'
  }
]);

// Computed properties
const filteredCountries = computed(() => {
  if (!searchQuery.value) return countries.value;
  return countries.value.filter(country => 
    country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Toggle functions
const toggleBasicDropdown = () => {
  showBasicDropdown.value = !showBasicDropdown.value;
  // Close other dropdowns
  showIconDropdown.value = false;
  showMultiDropdown.value = false;
  showSearchDropdown.value = false;
  showNotificationDropdown.value = false;
  showSplitDropdown.value = false;
};

const toggleIconDropdown = () => {
  showIconDropdown.value = !showIconDropdown.value;
  // Close other dropdowns
  showBasicDropdown.value = false;
  showMultiDropdown.value = false;
  showSearchDropdown.value = false;
  showNotificationDropdown.value = false;
  showSplitDropdown.value = false;
};

const toggleMultiDropdown = () => {
  showMultiDropdown.value = !showMultiDropdown.value;
  // Close other dropdowns
  showBasicDropdown.value = false;
  showIconDropdown.value = false;
  showSearchDropdown.value = false;
  showNotificationDropdown.value = false;
  showSplitDropdown.value = false;
};

const toggleSubmenu = () => {
  showSubmenu.value = !showSubmenu.value;
};

const toggleSearchDropdown = () => {
  showSearchDropdown.value = !showSearchDropdown.value;
  // Close other dropdowns
  showBasicDropdown.value = false;
  showIconDropdown.value = false;
  showMultiDropdown.value = false;
  showNotificationDropdown.value = false;
  showSplitDropdown.value = false;
};

const toggleNotificationDropdown = () => {
  showNotificationDropdown.value = !showNotificationDropdown.value;
  // Close other dropdowns
  showBasicDropdown.value = false;
  showIconDropdown.value = false;
  showMultiDropdown.value = false;
  showSearchDropdown.value = false;
  showSplitDropdown.value = false;
};

const toggleSplitDropdown = () => {
  showSplitDropdown.value = !showSplitDropdown.value;
  // Close other dropdowns
  showBasicDropdown.value = false;
  showIconDropdown.value = false;
  showMultiDropdown.value = false;
  showSearchDropdown.value = false;
  showNotificationDropdown.value = false;
};

// Close dropdowns when clicking outside
const closeDropdowns = () => {
  showBasicDropdown.value = false;
  showIconDropdown.value = false;
  showMultiDropdown.value = false;
  showSubmenu.value = false;
  showSearchDropdown.value = false;
  showNotificationDropdown.value = false;
  showSplitDropdown.value = false;
};

// Add click outside listener
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.relative')) {
      closeDropdowns();
    }
  });
});
</script> 