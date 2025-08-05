<template>
  <div class="min-h-screen bg-gray-50 transition-colors duration-200 dark:bg-gray-900">
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Main Content -->
    <div 
      class="transition-all duration-300"
      :class="{
        'ml-64': state.isSidebarOpen,
        'ml-0': !state.isSidebarOpen
      }"
    >
      <!-- Mobile overlay -->
      <div 
        v-if="state.isSidebarOpen" 
        class="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
        @click="state.isSidebarOpen = false"
      ></div>
      
      <!-- Header -->
      <header class="sticky top-0 z-20 bg-white shadow-sm transition-colors duration-200 dark:bg-gray-800 dark:shadow-gray-900/20">
        <div class="flex h-16 items-center justify-between px-6">
          <!-- Mobile menu button -->
          <button
            @click="state.isSidebarOpen = !state.isSidebarOpen"
            class="rounded-lg p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <!-- Page title -->
          <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
            {{ currentPageTitle }}
          </h1>
          
          <!-- User menu -->
          <div class="flex items-center gap-4">
            <!-- Notifications -->
            <div class="relative">
              <button 
                @click="toggleNotificationDropdown"
                class="relative rounded-lg p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                <span class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
              </button>
              
              <!-- Notification Dropdown -->
              <div 
                v-show="showNotificationDropdown"
                class="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 z-50"
              >
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
            
            <!-- User avatar -->
            <div class="relative">
              <button 
                @click="toggleUserDropdown"
                class="flex items-center gap-2 rounded-lg p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <div class="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-medium">
                  U
                </div>
                <span class="hidden text-sm font-medium text-gray-700 dark:text-gray-300 md:block">User</span>
                <svg 
                  :class="[
                    showUserDropdown ? 'rotate-180' : '',
                    'h-4 w-4 transition-transform duration-200'
                  ]"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- User Dropdown -->
              <div 
                v-show="showUserDropdown"
                class="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 z-50"
              >
                <div class="py-1" role="menu">
                  <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <p class="text-sm text-gray-900 dark:text-white">Signed in as</p>
                    <p class="text-sm font-medium text-gray-900 dark:text-white truncate">user@example.com</p>
                  </div>
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
                  <div class="border-t border-gray-200 dark:border-gray-600"></div>
                  <button 
                    @click="handleLogout"
                    class="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-600" 
                    role="menuitem"
                  >
                    <svg class="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <!-- Page content -->
      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { state } from '../store.js';
import Sidebar from './Sidebar.vue';

const route = useRoute();
const router = useRouter();

// Dropdown states
const showUserDropdown = ref(false);
const showNotificationDropdown = ref(false);

// Sample notifications data
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
  },
  {
    id: 4,
    title: 'Payment received',
    message: 'Payment of $299 has been received',
    time: '5 hours ago',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
    iconBg: 'bg-green-500'
  }
]);

// Compute current page title based on route
const currentPageTitle = computed(() => {
  const routeTitles = {
    '/': 'Dashboard',
    '/dashboard': 'Dashboard',
    '/tasks': 'Tasks',
    '/users': 'Users',
    '/forms': 'Forms',
    '/tables': 'Tables',
    '/cards': 'Cards',
    '/charts': 'Charts',
    '/buttons': 'Buttons',
    '/modals': 'Modals',
    '/alerts': 'Alerts',
    '/badges': 'Badges',
    '/breadcrumbs': 'Breadcrumbs',
    '/pagination': 'Pagination',
    '/tabs': 'Tabs',
    '/accordion': 'Accordion',
    '/tooltips': 'Tooltips',
    '/dropdowns': 'Dropdowns',
    '/loaders': 'Loaders',
    '/empty-states': 'Empty States',
    '/404': 'Page Not Found'
  };
  
  return routeTitles[route.path] || 'Page';
});

// Toggle functions
const toggleUserDropdown = () => {
  showUserDropdown.value = !showUserDropdown.value;
  showNotificationDropdown.value = false; // Close other dropdown
};

const toggleNotificationDropdown = () => {
  showNotificationDropdown.value = !showNotificationDropdown.value;
  showUserDropdown.value = false; // Close other dropdown
};

// Handle logout
const handleLogout = () => {
  // Clear any stored authentication data
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  
  // Close dropdown
  showUserDropdown.value = false;
  
  // Redirect to login page
  router.push('/login');
};

// Close dropdowns when clicking outside
const closeDropdowns = (e) => {
  if (!e.target.closest('.relative')) {
    showUserDropdown.value = false;
    showNotificationDropdown.value = false;
  }
};

// Add click outside listener
onMounted(() => {
  document.addEventListener('click', closeDropdowns);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdowns);
});
</script> 