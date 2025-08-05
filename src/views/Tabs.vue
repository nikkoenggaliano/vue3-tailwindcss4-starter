<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Tabs</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Tab components for organizing content into multiple sections
        </p>
      </div>

      <!-- Basic Tabs -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Basic Tabs</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div class="border-b border-gray-200 dark:border-gray-700">
            <nav class="flex space-x-8 px-6" aria-label="Tabs">
              <button 
                @click="activeTab = 'overview'"
                :class="[
                  activeTab === 'overview' 
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                ]"
              >
                Overview
              </button>
              <button 
                @click="activeTab = 'analytics'"
                :class="[
                  activeTab === 'analytics' 
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                ]"
              >
                Analytics
              </button>
              <button 
                @click="activeTab = 'reports'"
                :class="[
                  activeTab === 'reports' 
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                ]"
              >
                Reports
              </button>
              <button 
                @click="activeTab = 'notifications'"
                :class="[
                  activeTab === 'notifications' 
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                ]"
              >
                Notifications
              </button>
            </nav>
          </div>
          
          <div class="p-6">
            <div v-if="activeTab === 'overview'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Overview</h3>
              <p class="text-gray-600 dark:text-gray-400">
                This is the overview tab content. Here you can see a summary of all the important information.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 class="font-medium text-gray-900 dark:text-white">Total Users</h4>
                  <p class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">2,847</p>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 class="font-medium text-gray-900 dark:text-white">Active Sessions</h4>
                  <p class="text-2xl font-bold text-green-600 dark:text-green-400">156</p>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 class="font-medium text-gray-900 dark:text-white">Revenue</h4>
                  <p class="text-2xl font-bold text-yellow-600 dark:text-yellow-400">$45,231</p>
                </div>
              </div>
            </div>
            
            <div v-if="activeTab === 'analytics'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Analytics</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Detailed analytics and metrics for your application.
              </p>
              <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">User Growth</h4>
                <div class="h-32 bg-white dark:bg-gray-600 rounded flex items-end justify-between space-x-1 p-2">
                  <div class="w-8 bg-indigo-500 rounded-t" style="height: 60%"></div>
                  <div class="w-8 bg-indigo-500 rounded-t" style="height: 80%"></div>
                  <div class="w-8 bg-indigo-500 rounded-t" style="height: 45%"></div>
                  <div class="w-8 bg-indigo-500 rounded-t" style="height: 90%"></div>
                  <div class="w-8 bg-indigo-500 rounded-t" style="height: 75%"></div>
                  <div class="w-8 bg-indigo-500 rounded-t" style="height: 50%"></div>
                  <div class="w-8 bg-indigo-500 rounded-t" style="height: 30%"></div>
                </div>
              </div>
            </div>
            
            <div v-if="activeTab === 'reports'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Reports</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Generate and view various reports for your data.
              </p>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">Monthly Report</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Generated on January 15, 2024</p>
                  </div>
                  <button class="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                    Download
                  </button>
                </div>
                <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">Weekly Summary</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Generated on January 20, 2024</p>
                  </div>
                  <button class="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                    Download
                  </button>
                </div>
              </div>
            </div>
            
            <div v-if="activeTab === 'notifications'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Notifications</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Manage your notification preferences and view recent notifications.
              </p>
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div class="flex-shrink-0">
                    <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-blue-800 dark:text-blue-200">New user registration</p>
                    <p class="text-sm text-blue-700 dark:text-blue-300">John Doe has joined the platform</p>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div class="flex-shrink-0">
                    <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-green-800 dark:text-green-200">Task completed</p>
                    <p class="text-sm text-green-700 dark:text-green-300">User authentication system has been completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pills Tabs -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Pills Tabs</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex space-x-2 mb-6">
            <button 
              @click="activePillTab = 'account'"
              :class="[
                activePillTab === 'account' 
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' 
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
                'px-3 py-2 rounded-md text-sm font-medium'
              ]"
            >
              Account
            </button>
            <button 
              @click="activePillTab = 'password'"
              :class="[
                activePillTab === 'password' 
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' 
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
                'px-3 py-2 rounded-md text-sm font-medium'
              ]"
            >
              Password
            </button>
            <button 
              @click="activePillTab = 'notifications'"
              :class="[
                activePillTab === 'notifications' 
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' 
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
                'px-3 py-2 rounded-md text-sm font-medium'
              ]"
            >
              Notifications
            </button>
            <button 
              @click="activePillTab = 'billing'"
              :class="[
                activePillTab === 'billing' 
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' 
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
                'px-3 py-2 rounded-md text-sm font-medium'
              ]"
            >
              Billing
            </button>
          </div>
          
          <div v-if="activePillTab === 'account'" class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Account Settings</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Enter your name">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Enter your email">
              </div>
              <button class="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                Save Changes
              </button>
            </div>
          </div>
          
          <div v-if="activePillTab === 'password'" class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Change Password</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Current Password</label>
                <input type="password" class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Enter current password">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">New Password</label>
                <input type="password" class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Enter new password">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm New Password</label>
                <input type="password" class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Confirm new password">
              </div>
              <button class="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                Update Password
              </button>
            </div>
          </div>
          
          <div v-if="activePillTab === 'notifications'" class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Notification Preferences</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-sm font-medium text-gray-900 dark:text-white">Email Notifications</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Receive email notifications for important updates</p>
                </div>
                <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                  <span class="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                </button>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-sm font-medium text-gray-900 dark:text-white">Push Notifications</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Receive push notifications on your device</p>
                </div>
                <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700">
                  <span class="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
                </button>
              </div>
            </div>
          </div>
          
          <div v-if="activePillTab === 'billing'" class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Billing Information</h3>
            <div class="space-y-4">
              <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 class="font-medium text-gray-900 dark:text-white">Current Plan</h4>
                <p class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Pro Plan</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">$29/month</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Card Number</label>
                <input type="text" class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="**** **** **** ****">
              </div>
              <button class="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                Update Billing
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Vertical Tabs -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Vertical Tabs</h2>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div class="flex">
            <div class="w-48 border-r border-gray-200 dark:border-gray-700">
              <nav class="space-y-1 p-4">
                <button 
                  @click="activeVerticalTab = 'profile'"
                  :class="[
                    activeVerticalTab === 'profile' 
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900/50 dark:border-indigo-400 dark:text-indigo-300' 
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300',
                    'w-full flex items-center px-3 py-2 text-sm font-medium border-l-4'
                  ]"
                >
                  <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile
                </button>
                <button 
                  @click="activeVerticalTab = 'settings'"
                  :class="[
                    activeVerticalTab === 'settings' 
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900/50 dark:border-indigo-400 dark:text-indigo-300' 
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300',
                    'w-full flex items-center px-3 py-2 text-sm font-medium border-l-4'
                  ]"
                >
                  <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </button>
                <button 
                  @click="activeVerticalTab = 'security'"
                  :class="[
                    activeVerticalTab === 'security' 
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900/50 dark:border-indigo-400 dark:text-indigo-300' 
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300',
                    'w-full flex items-center px-3 py-2 text-sm font-medium border-l-4'
                  ]"
                >
                  <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Security
                </button>
              </nav>
            </div>
            
            <div class="flex-1 p-6">
              <div v-if="activeVerticalTab === 'profile'" class="space-y-4">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Profile Information</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Update your profile information and preferences.
                </p>
                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <div class="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <svg class="w-8 h-8 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <button class="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                      Change Photo
                    </button>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                      <input type="text" class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="John">
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                      <input type="text" class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Doe">
                    </div>
                  </div>
                </div>
              </div>
              
              <div v-if="activeVerticalTab === 'settings'" class="space-y-4">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Application Settings</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Configure your application preferences and behavior.
                </p>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <h4 class="text-sm font-medium text-gray-900 dark:text-white">Dark Mode</h4>
                      <p class="text-sm text-gray-500 dark:text-gray-400">Use dark theme for the application</p>
                    </div>
                    <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                      <span class="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                    </button>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <h4 class="text-sm font-medium text-gray-900 dark:text-white">Auto Save</h4>
                      <p class="text-sm text-gray-500 dark:text-gray-400">Automatically save your work</p>
                    </div>
                    <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700">
                      <span class="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div v-if="activeVerticalTab === 'security'" class="space-y-4">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Security Settings</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Manage your account security and privacy settings.
                </p>
                <div class="space-y-4">
                  <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-yellow-800 dark:text-yellow-200">Two-Factor Authentication</h3>
                        <p class="text-sm text-yellow-700 dark:text-yellow-300">Enable two-factor authentication for enhanced security.</p>
                      </div>
                    </div>
                  </div>
                  <button class="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                    Enable 2FA
                  </button>
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
import { ref } from 'vue';

const activeTab = ref('overview');
const activePillTab = ref('account');
const activeVerticalTab = ref('profile');
</script> 