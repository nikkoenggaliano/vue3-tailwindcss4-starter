<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Alerts</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Alert components for displaying important messages and notifications
        </p>
      </div>

      <!-- Basic Alerts -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Basic Alerts</h2>
        
        <div class="space-y-4">
          <!-- Success Alert -->
          <div class="rounded-md bg-green-50 p-4 dark:bg-green-900/20">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-green-800 dark:text-green-200">Success!</h3>
                <div class="mt-2 text-sm text-green-700 dark:text-green-300">
                  <p>Your changes have been saved successfully.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Error Alert -->
          <div class="rounded-md bg-red-50 p-4 dark:bg-red-900/20">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800 dark:text-red-200">Error!</h3>
                <div class="mt-2 text-sm text-red-700 dark:text-red-300">
                  <p>There was an error processing your request. Please try again.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Warning Alert -->
          <div class="rounded-md bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-yellow-800 dark:text-yellow-200">Warning!</h3>
                <div class="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <p>Please review your information before proceeding.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Info Alert -->
          <div class="rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-blue-800 dark:text-blue-200">Information</h3>
                <div class="mt-2 text-sm text-blue-700 dark:text-blue-300">
                  <p>This is an informational message for your reference.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Alerts with Actions -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Alerts with Actions</h2>
        
        <div class="space-y-4">
          <!-- Dismissible Alert -->
          <div class="rounded-md bg-indigo-50 p-4 dark:bg-indigo-900/20">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3 flex-1">
                <h3 class="text-sm font-medium text-indigo-800 dark:text-indigo-200">New feature available!</h3>
                <div class="mt-2 text-sm text-indigo-700 dark:text-indigo-300">
                  <p>Check out our latest updates and improvements.</p>
                </div>
              </div>
              <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                  <button class="inline-flex rounded-md bg-indigo-50 p-1.5 text-indigo-500 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-400 dark:hover:bg-indigo-900/40 dark:focus:ring-offset-indigo-900/20">
                    <span class="sr-only">Dismiss</span>
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Alert with Multiple Actions -->
          <div class="rounded-md bg-green-50 p-4 dark:bg-green-900/20">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3 flex-1">
                <h3 class="text-sm font-medium text-green-800 dark:text-green-200">Payment successful!</h3>
                <div class="mt-2 text-sm text-green-700 dark:text-green-300">
                  <p>Your payment has been processed successfully. You can now access all features.</p>
                </div>
                <div class="mt-4">
                  <div class="-mx-2 -my-1.5 flex">
                    <button class="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:bg-green-900/20 dark:text-green-200 dark:hover:bg-green-900/40 dark:focus:ring-offset-green-900/20">
                      View Details
                    </button>
                    <button class="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:bg-green-900/20 dark:text-green-200 dark:hover:bg-green-900/40 dark:focus:ring-offset-green-900/20">
                      Download Receipt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Banner Alerts -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Banner Alerts</h2>
        
        <div class="space-y-4">
          <!-- Success Banner -->
          <div class="rounded-md bg-green-50 border border-green-200 p-4 dark:bg-green-900/20 dark:border-green-800">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-green-800 dark:text-green-200">Success Banner</h3>
                <div class="mt-2 text-sm text-green-700 dark:text-green-300">
                  <p>This is a banner-style alert with a border for more emphasis.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Error Banner -->
          <div class="rounded-md bg-red-50 border border-red-200 p-4 dark:bg-red-900/20 dark:border-red-800">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800 dark:text-red-200">Error Banner</h3>
                <div class="mt-2 text-sm text-red-700 dark:text-red-300">
                  <p>This banner alert is used for critical errors that require immediate attention.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Alerts -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Interactive Alerts</h2>
        
        <div class="space-y-4">
          <!-- Toggle Alert -->
          <div v-if="showToggleAlert" class="rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3 flex-1">
                <h3 class="text-sm font-medium text-blue-800 dark:text-blue-200">Interactive Alert</h3>
                <div class="mt-2 text-sm text-blue-700 dark:text-blue-300">
                  <p>This alert can be toggled on and off. Click the button below to hide it.</p>
                </div>
              </div>
              <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                  <button 
                    @click="showToggleAlert = false"
                    class="inline-flex rounded-md bg-blue-50 p-1.5 text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40 dark:focus:ring-offset-blue-900/20"
                  >
                    <span class="sr-only">Dismiss</span>
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Show Alert Button -->
          <button 
            @click="showToggleAlert = true"
            class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Show Interactive Alert
          </button>

          <!-- Dynamic Alert -->
          <div v-if="dynamicAlert.show" :class="[
            'rounded-md p-4',
            dynamicAlert.type === 'success' ? 'bg-green-50 dark:bg-green-900/20' :
            dynamicAlert.type === 'error' ? 'bg-red-50 dark:bg-red-900/20' :
            dynamicAlert.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20' :
            'bg-blue-50 dark:bg-blue-900/20'
          ]">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg 
                  :class="[
                    'h-5 w-5',
                    dynamicAlert.type === 'success' ? 'text-green-400' :
                    dynamicAlert.type === 'error' ? 'text-red-400' :
                    dynamicAlert.type === 'warning' ? 'text-yellow-400' :
                    'text-blue-400'
                  ]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    v-if="dynamicAlert.type === 'success'"
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                  <path 
                    v-else-if="dynamicAlert.type === 'error'"
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                  <path 
                    v-else-if="dynamicAlert.type === 'warning'"
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" 
                  />
                  <path 
                    v-else
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <div class="ml-3 flex-1">
                <h3 :class="[
                  'text-sm font-medium',
                  dynamicAlert.type === 'success' ? 'text-green-800 dark:text-green-200' :
                  dynamicAlert.type === 'error' ? 'text-red-800 dark:text-red-200' :
                  dynamicAlert.type === 'warning' ? 'text-yellow-800 dark:text-yellow-200' :
                  'text-blue-800 dark:text-blue-200'
                ]">
                  {{ dynamicAlert.title }}
                </h3>
                <div :class="[
                  'mt-2 text-sm',
                  dynamicAlert.type === 'success' ? 'text-green-700 dark:text-green-300' :
                  dynamicAlert.type === 'error' ? 'text-red-700 dark:text-red-300' :
                  dynamicAlert.type === 'warning' ? 'text-yellow-700 dark:text-yellow-300' :
                  'text-blue-700 dark:text-blue-300'
                ]">
                  <p>{{ dynamicAlert.message }}</p>
                </div>
              </div>
              <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                  <button 
                    @click="dynamicAlert.show = false"
                    :class="[
                      'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
                      dynamicAlert.type === 'success' ? 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/40 dark:focus:ring-offset-green-900/20' :
                      dynamicAlert.type === 'error' ? 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40 dark:focus:ring-offset-red-900/20' :
                      dynamicAlert.type === 'warning' ? 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400 dark:hover:bg-yellow-900/40 dark:focus:ring-offset-yellow-900/20' :
                      'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40 dark:focus:ring-offset-blue-900/20'
                    ]"
                  >
                    <span class="sr-only">Dismiss</span>
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Dynamic Alert Buttons -->
          <div class="flex flex-wrap gap-3">
            <button 
              @click="showDynamicAlert('success', 'Success!', 'Operation completed successfully.')"
              class="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Show Success Alert
            </button>
            <button 
              @click="showDynamicAlert('error', 'Error!', 'Something went wrong. Please try again.')"
              class="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Show Error Alert
            </button>
            <button 
              @click="showDynamicAlert('warning', 'Warning!', 'Please review your input before proceeding.')"
              class="px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Show Warning Alert
            </button>
            <button 
              @click="showDynamicAlert('info', 'Info', 'Here is some useful information.')"
              class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Show Info Alert
            </button>
          </div>
        </div>
      </div>

      <!-- Custom Alerts like SweetAlert -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Custom Alerts like SweetAlert</h2>
        <div class="space-y-4">
          <div class="flex flex-wrap gap-3">
            <button 
              @click="alertService.success('Success!', 'Operation completed successfully.')"
              class="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Show Success Alert
            </button>

            <button
              @click="alertService.error('Error!', 'Something went wrong. Please try again.')" 
              class="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Show Error Alert
            </button>

            <button
              @click="alertService.warning('Warning!', 'Please review your input before proceeding.')"
              class="px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Show Warning Alert
            </button>

            <button
              @click="alertService.info('Information', 'Here is some useful information.')"
              class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Show Info Alert
            </button>
          </div>
        </div>
      </div>


      <!-- Alert with Links -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Alerts with Links</h2>
        
        <div class="space-y-4">
          <!-- Alert with External Link -->
          <div class="rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-blue-800 dark:text-blue-200">New update available</h3>
                <div class="mt-2 text-sm text-blue-700 dark:text-blue-300">
                  <p>
                    A new version is available. 
                    <a href="#" class="font-medium underline hover:text-blue-600 dark:hover:text-blue-400">
                      Learn more about the changes
                    </a>
                    or
                    <a href="#" class="font-medium underline hover:text-blue-600 dark:hover:text-blue-400">
                      update now
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Alert with Action Links -->
          <div class="rounded-md bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-yellow-800 dark:text-yellow-200">Account verification required</h3>
                <div class="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <p>Please verify your email address to access all features.</p>
                </div>
                <div class="mt-4">
                  <div class="-mx-2 -my-1.5 flex">
                    <button class="rounded-md bg-yellow-50 px-2 py-1.5 text-sm font-medium text-yellow-800 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-200 dark:hover:bg-yellow-900/40 dark:focus:ring-offset-yellow-900/20">
                      Resend Email
                    </button>
                    <button class="ml-3 rounded-md bg-yellow-50 px-2 py-1.5 text-sm font-medium text-yellow-800 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-200 dark:hover:bg-yellow-900/40 dark:focus:ring-offset-yellow-900/20">
                      Change Email
                    </button>
                  </div>
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
// import { Alert } from '../components/Alert.vue';
import { ref } from 'vue';
import alertService from '../services/alert';

const alert = ref(null);

// alertService 

// Reactive state for interactive alerts
const showToggleAlert = ref(true);
const dynamicAlert = ref({
  show: false,
  type: 'info',
  title: '',
  message: ''
});

// Function to show dynamic alerts
const showDynamicAlert = (type, title, message) => {
  dynamicAlert.value = {
    show: true,
    type,
    title,
    message
  };
};
</script> 