<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Overview of your application and key metrics
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Total Users -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">2,847</p>
            </div>
          </div>
          <div class="mt-4">
            <span class="text-green-600 text-sm font-medium">+12%</span>
            <span class="text-gray-500 dark:text-gray-400 text-sm">from last month</span>
          </div>
        </div>

        <!-- Active Tasks -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Active Tasks</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">156</p>
            </div>
          </div>
          <div class="mt-4">
            <span class="text-green-600 text-sm font-medium">+8%</span>
            <span class="text-gray-500 dark:text-gray-400 text-sm">from last week</span>
          </div>
        </div>

        <!-- Revenue -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">$45,231</p>
            </div>
          </div>
          <div class="mt-4">
            <span class="text-green-600 text-sm font-medium">+23%</span>
            <span class="text-gray-500 dark:text-gray-400 text-sm">from last month</span>
          </div>
        </div>

        <!-- Conversion Rate -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Conversion Rate</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">3.24%</p>
            </div>
          </div>
          <div class="mt-4">
            <span class="text-red-600 text-sm font-medium">-1%</span>
            <span class="text-gray-500 dark:text-gray-400 text-sm">from last month</span>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Activity Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Weekly Activity</h3>
          <div class="h-64 flex items-end justify-between space-x-2">
            <div class="flex flex-col items-center">
              <div class="w-8 bg-blue-500 rounded-t" style="height: 60%"></div>
              <span class="text-xs text-gray-500 dark:text-gray-400 mt-2">Mon</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-8 bg-blue-500 rounded-t" style="height: 80%"></div>
              <span class="text-xs text-gray-500 dark:text-gray-400 mt-2">Tue</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-8 bg-blue-500 rounded-t" style="height: 45%"></div>
              <span class="text-xs text-gray-500 dark:text-gray-400 mt-2">Wed</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-8 bg-blue-500 rounded-t" style="height: 90%"></div>
              <span class="text-xs text-gray-500 dark:text-gray-400 mt-2">Thu</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-8 bg-blue-500 rounded-t" style="height: 75%"></div>
              <span class="text-xs text-gray-500 dark:text-gray-400 mt-2">Fri</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-8 bg-blue-500 rounded-t" style="height: 50%"></div>
              <span class="text-xs text-gray-500 dark:text-gray-400 mt-2">Sat</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-8 bg-blue-500 rounded-t" style="height: 30%"></div>
              <span class="text-xs text-gray-500 dark:text-gray-400 mt-2">Sun</span>
            </div>
          </div>
        </div>

        <!-- Pie Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Task Status</h3>
          <div class="flex items-center justify-center h-64">
            <div class="relative w-32 h-32">
              <svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path class="text-blue-500" stroke-dasharray="60, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="text-green-500" stroke-dasharray="25, 100" stroke-dashoffset="-60"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="text-yellow-500" stroke-dasharray="15, 100" stroke-dashoffset="-85"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-lg font-semibold text-gray-900 dark:text-white">100%</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center space-x-4 mt-4">
            <div class="flex items-center">
              <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-600 dark:text-gray-400">Completed (60%)</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-600 dark:text-gray-400">In Progress (25%)</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-600 dark:text-gray-400">Pending (15%)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h3>
        </div>
        <div class="divide-y divide-gray-200 dark:divide-gray-700">
          <div class="px-6 py-4">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-900 dark:text-white">Task completed</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">User authentication system has been completed</p>
              </div>
              <div class="ml-auto">
                <span class="text-sm text-gray-500 dark:text-gray-400">2 hours ago</span>
              </div>
            </div>
          </div>
          <div class="px-6 py-4">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-900 dark:text-white">New user registered</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">John Doe has joined the platform</p>
              </div>
              <div class="ml-auto">
                <span class="text-sm text-gray-500 dark:text-gray-400">4 hours ago</span>
              </div>
            </div>
          </div>
          <div class="px-6 py-4">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-900 dark:text-white">System warning</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">High memory usage detected on server</p>
              </div>
              <div class="ml-auto">
                <span class="text-sm text-gray-500 dark:text-gray-400">6 hours ago</span>
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
// Dashboard component logic can be added here
</script>