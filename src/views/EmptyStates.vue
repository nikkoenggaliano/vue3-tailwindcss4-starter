<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Empty States</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Empty state components for when there's no data to display
        </p>
      </div>

      <!-- Basic Empty State -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Basic Empty State</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-12">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No projects</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by creating a new project.</p>
            <div class="mt-6">
              <button class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg class="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Project
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State with Illustration -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Empty State with Illustration</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-12">
          <div class="text-center">
            <div class="mx-auto h-24 w-24 text-gray-300 dark:text-gray-600">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No tasks completed</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">You haven't completed any tasks yet. Start by creating your first task.</p>
            <div class="mt-6">
              <button class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State with Multiple Actions -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Empty State with Multiple Actions</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-12">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No team members</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by inviting your team members to collaborate.</p>
            <div class="mt-6 flex justify-center space-x-3">
              <button class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg class="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Invite Team Member
              </button>
              <button class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State with Search -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Empty State with Search</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-12">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No results found</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Try adjusting your search criteria or browse our categories.</p>
            <div class="mt-6 max-w-sm mx-auto">
              <div class="relative">
                <input type="text" placeholder="Search for something else..." class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State with List -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Empty State with List</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-12">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No notifications</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">You're all caught up! Here's what you can do:</p>
            <div class="mt-6">
              <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li class="flex items-center justify-center">
                  <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Check your email for updates
                </li>
                <li class="flex items-center justify-center">
                  <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Review your project settings
                </li>
                <li class="flex items-center justify-center">
                  <svg class="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Invite team members
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State with Error -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Empty State with Error</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-12">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">Unable to load data</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">There was an error loading your data. Please try again.</p>
            <div class="mt-6 flex justify-center space-x-3">
              <button class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Try Again
              </button>
              <button class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State with Loading -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Empty State with Loading</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-12">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">Loading your data</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Please wait while we fetch your information.</p>
            <div class="mt-6">
              <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div class="bg-indigo-600 h-2 rounded-full animate-pulse" style="width: 60%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State with Success -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Empty State with Success</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-12">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">All caught up!</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">You've completed all your tasks for today. Great job!</p>
            <div class="mt-6">
              <button class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create New Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State with Custom Illustration -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Empty State with Custom Illustration</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-12">
          <div class="text-center">
            <div class="mx-auto h-32 w-32 text-gray-300 dark:text-gray-600">
              <!-- Custom illustration -->
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No achievements yet</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Start completing tasks to earn achievements and badges.</p>
            <div class="mt-6">
              <button class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                View Available Tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutWithMainbar>
</template>

<script setup>
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';
// Empty States component logic can be added here
</script> 