<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Charts</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Chart components for data visualization (Note: For production, consider using Chart.js or similar libraries)
        </p>
      </div>

      <!-- Bar Charts -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Bar Charts</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Simple Bar Chart -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Monthly Sales</h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <span class="w-16 text-sm text-gray-600 dark:text-gray-400">Jan</span>
                <div class="flex-1 mx-4">
                  <div class="bg-indigo-500 h-6 rounded" style="width: 60%"></div>
                </div>
                <span class="w-12 text-sm text-gray-900 dark:text-white">60%</span>
              </div>
              <div class="flex items-center">
                <span class="w-16 text-sm text-gray-600 dark:text-gray-400">Feb</span>
                <div class="flex-1 mx-4">
                  <div class="bg-indigo-500 h-6 rounded" style="width: 80%"></div>
                </div>
                <span class="w-12 text-sm text-gray-900 dark:text-white">80%</span>
              </div>
              <div class="flex items-center">
                <span class="w-16 text-sm text-gray-600 dark:text-gray-400">Mar</span>
                <div class="flex-1 mx-4">
                  <div class="bg-indigo-500 h-6 rounded" style="width: 45%"></div>
                </div>
                <span class="w-12 text-sm text-gray-900 dark:text-white">45%</span>
              </div>
              <div class="flex items-center">
                <span class="w-16 text-sm text-gray-600 dark:text-gray-400">Apr</span>
                <div class="flex-1 mx-4">
                  <div class="bg-indigo-500 h-6 rounded" style="width: 90%"></div>
                </div>
                <span class="w-12 text-sm text-gray-900 dark:text-white">90%</span>
              </div>
              <div class="flex items-center">
                <span class="w-16 text-sm text-gray-600 dark:text-gray-400">May</span>
                <div class="flex-1 mx-4">
                  <div class="bg-indigo-500 h-6 rounded" style="width: 75%"></div>
                </div>
                <span class="w-12 text-sm text-gray-900 dark:text-white">75%</span>
              </div>
            </div>
          </div>

          <!-- Horizontal Bar Chart -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Revenue by Category</h3>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span>Electronics</span>
                  <span>$45,231</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div class="bg-green-500 h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span>Clothing</span>
                  <span>$32,145</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div class="bg-blue-500 h-2 rounded-full" style="width: 65%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span>Books</span>
                  <span>$18,432</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div class="bg-purple-500 h-2 rounded-full" style="width: 45%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span>Home & Garden</span>
                  <span>$12,789</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div class="bg-yellow-500 h-2 rounded-full" style="width: 30%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Line Charts -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Line Charts</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Simple Line Chart -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Website Traffic</h3>
            <div class="h-48 flex items-end justify-between space-x-2">
              <div class="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 60%"></div>
              <div class="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 80%"></div>
              <div class="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 45%"></div>
              <div class="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 90%"></div>
              <div class="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 75%"></div>
              <div class="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 85%"></div>
              <div class="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 70%"></div>
            </div>
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          <!-- Multiple Line Chart -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
            <div class="h-48 flex items-end justify-between space-x-2">
              <div class="flex-1 flex flex-col justify-end space-y-1">
                <div class="bg-green-500 rounded-t" style="height: 60%"></div>
                <div class="bg-blue-500 rounded-t" style="height: 40%"></div>
              </div>
              <div class="flex-1 flex flex-col justify-end space-y-1">
                <div class="bg-green-500 rounded-t" style="height: 80%"></div>
                <div class="bg-blue-500 rounded-t" style="height: 60%"></div>
              </div>
              <div class="flex-1 flex flex-col justify-end space-y-1">
                <div class="bg-green-500 rounded-t" style="height: 45%"></div>
                <div class="bg-blue-500 rounded-t" style="height: 70%"></div>
              </div>
              <div class="flex-1 flex flex-col justify-end space-y-1">
                <div class="bg-green-500 rounded-t" style="height: 90%"></div>
                <div class="bg-blue-500 rounded-t" style="height: 50%"></div>
              </div>
              <div class="flex-1 flex flex-col justify-end space-y-1">
                <div class="bg-green-500 rounded-t" style="height: 75%"></div>
                <div class="bg-blue-500 rounded-t" style="height: 80%"></div>
              </div>
              <div class="flex-1 flex flex-col justify-end space-y-1">
                <div class="bg-green-500 rounded-t" style="height: 85%"></div>
                <div class="bg-blue-500 rounded-t" style="height: 65%"></div>
              </div>
              <div class="flex-1 flex flex-col justify-end space-y-1">
                <div class="bg-green-500 rounded-t" style="height: 70%"></div>
                <div class="bg-blue-500 rounded-t" style="height: 90%"></div>
              </div>
            </div>
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
            <div class="flex space-x-4 mt-4">
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span class="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span class="text-sm text-gray-600 dark:text-gray-400">Orders</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pie Charts -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Pie Charts</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Simple Pie Chart -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Market Share</h3>
            <div class="flex items-center justify-center">
              <div class="relative w-32 h-32">
                <svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path class="text-gray-200 dark:text-gray-700" fill="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  <path class="text-indigo-500" fill="currentColor" stroke-dasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-2xl font-bold text-gray-900 dark:text-white">60%</span>
                </div>
              </div>
            </div>
            <div class="mt-4 text-center">
              <p class="text-sm text-gray-600 dark:text-gray-400">Our Market Share</p>
            </div>
          </div>

          <!-- Donut Chart -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">User Distribution</h3>
            <div class="flex items-center justify-center">
              <div class="relative w-32 h-32">
                <svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path class="text-gray-200 dark:text-gray-700" fill="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  <path class="text-green-500" fill="currentColor" stroke-dasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  <path class="text-blue-500" fill="currentColor" stroke-dasharray="25, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  <path class="text-yellow-500" fill="currentColor" stroke-dasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                </div>
              </div>
            </div>
            <div class="mt-4 space-y-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Active</span>
                </div>
                <span class="text-sm font-medium text-gray-900 dark:text-white">40%</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Inactive</span>
                </div>
                <span class="text-sm font-medium text-gray-900 dark:text-white">25%</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Pending</span>
                </div>
                <span class="text-sm font-medium text-gray-900 dark:text-white">15%</span>
              </div>
            </div>
          </div>

          <!-- Progress Ring -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Goal Progress</h3>
            <div class="flex items-center justify-center">
              <div class="relative w-32 h-32">
                <svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path class="text-gray-200 dark:text-gray-700" fill="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  <path class="text-purple-500" fill="currentColor" stroke-dasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-2xl font-bold text-gray-900 dark:text-white">75%</span>
                </div>
              </div>
            </div>
            <div class="mt-4 text-center">
              <p class="text-sm text-gray-600 dark:text-gray-400">Monthly Goal</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">$75,000 / $100,000</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Cards with Mini Charts -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Stats with Mini Charts</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Revenue Stats -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">$45,231</p>
                <p class="text-sm text-green-600 dark:text-green-400">+20.1% from last month</p>
              </div>
              <div class="w-16 h-12 flex items-end space-x-1">
                <div class="flex-1 bg-green-500 rounded-t" style="height: 60%"></div>
                <div class="flex-1 bg-green-500 rounded-t" style="height: 80%"></div>
                <div class="flex-1 bg-green-500 rounded-t" style="height: 45%"></div>
                <div class="flex-1 bg-green-500 rounded-t" style="height: 90%"></div>
              </div>
            </div>
          </div>

          <!-- Users Stats -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">2,350</p>
                <p class="text-sm text-green-600 dark:text-green-400">+180.1% from last month</p>
              </div>
              <div class="w-16 h-12 flex items-end space-x-1">
                <div class="flex-1 bg-blue-500 rounded-t" style="height: 40%"></div>
                <div class="flex-1 bg-blue-500 rounded-t" style="height: 60%"></div>
                <div class="flex-1 bg-blue-500 rounded-t" style="height: 80%"></div>
                <div class="flex-1 bg-blue-500 rounded-t" style="height: 70%"></div>
              </div>
            </div>
          </div>

          <!-- Orders Stats -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Orders</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">12,234</p>
                <p class="text-sm text-red-600 dark:text-red-400">-19% from last month</p>
              </div>
              <div class="w-16 h-12 flex items-end space-x-1">
                <div class="flex-1 bg-yellow-500 rounded-t" style="height: 80%"></div>
                <div class="flex-1 bg-yellow-500 rounded-t" style="height: 60%"></div>
                <div class="flex-1 bg-yellow-500 rounded-t" style="height: 40%"></div>
                <div class="flex-1 bg-yellow-500 rounded-t" style="height: 50%"></div>
              </div>
            </div>
          </div>

          <!-- Conversion Stats -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">2.65%</p>
                <p class="text-sm text-green-600 dark:text-green-400">+4.75% from last month</p>
              </div>
              <div class="w-16 h-12 flex items-end space-x-1">
                <div class="flex-1 bg-purple-500 rounded-t" style="height: 30%"></div>
                <div class="flex-1 bg-purple-500 rounded-t" style="height: 50%"></div>
                <div class="flex-1 bg-purple-500 rounded-t" style="height: 70%"></div>
                <div class="flex-1 bg-purple-500 rounded-t" style="height: 60%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chart Controls -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Chart Controls</h2>
        
        <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4 sm:mb-0">Interactive Chart</h3>
            
            <div class="flex space-x-4">
              <select class="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last year</option>
              </select>
              
              <select class="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400">
                <option>Revenue</option>
                <option>Orders</option>
                <option>Users</option>
                <option>Conversion</option>
              </select>
            </div>
          </div>
          
          <div class="mt-6 h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p class="text-gray-500 dark:text-gray-400">Chart visualization would go here</p>
          </div>
        </div>
      </div>
    </div>
  </LayoutWithMainbar>
</template>

<script setup>
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';
// No additional logic needed for this component
// For production use, consider integrating with Chart.js, D3.js, or similar libraries
</script> 