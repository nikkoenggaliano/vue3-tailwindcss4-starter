<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Forms</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Comprehensive form components with validation and various input types
        </p>
      </div>

      <!-- Basic Form -->
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Basic Form</h2>
        
        <form @submit.prevent="handleBasicSubmit" class="space-y-6">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <!-- First Name -->
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                First Name *
              </label>
              <input
                id="firstName"
                v-model="basicForm.firstName"
                type="text"
                required
                class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                placeholder="Enter your first name"
              />
            </div>

            <!-- Last Name -->
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Last Name *
              </label>
              <input
                id="lastName"
                v-model="basicForm.lastName"
                type="text"
                required
                class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                placeholder="Enter your last name"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address *
              </label>
              <input
                id="email"
                v-model="basicForm.email"
                type="email"
                required
                class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                placeholder="Enter your email"
              />
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <input
                id="phone"
                v-model="basicForm.phone"
                type="tel"
                class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              v-model="basicForm.message"
              rows="4"
              class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>

      <!-- Advanced Form -->
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Advanced Form</h2>
        
        <form @submit.prevent="handleAdvancedSubmit" class="space-y-6">
          <!-- Personal Information -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Personal Information</h3>
            
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
              <!-- Date of Birth -->
              <div>
                <label for="dob" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  v-model="advancedForm.dob"
                  type="date"
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                />
              </div>

              <!-- Gender -->
              <div>
                <label for="gender" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Gender
                </label>
                <select
                  id="gender"
                  v-model="advancedForm.gender"
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Country -->
              <div>
                <label for="country" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Country
                </label>
                <select
                  id="country"
                  v-model="advancedForm.country"
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                >
                  <option value="">Select country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="id">Indonesia</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Preferences -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Preferences</h3>
            
            <!-- Checkboxes -->
            <div class="space-y-3">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Interests</label>
              <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
                <label class="flex items-center">
                  <input
                    v-model="advancedForm.interests"
                    type="checkbox"
                    value="technology"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Technology</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="advancedForm.interests"
                    type="checkbox"
                    value="sports"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Sports</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="advancedForm.interests"
                    type="checkbox"
                    value="music"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Music</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="advancedForm.interests"
                    type="checkbox"
                    value="travel"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Travel</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="advancedForm.interests"
                    type="checkbox"
                    value="cooking"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Cooking</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="advancedForm.interests"
                    type="checkbox"
                    value="reading"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Reading</span>
                </label>
              </div>
            </div>

            <!-- Radio Buttons -->
            <div class="space-y-3">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Newsletter Subscription</label>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input
                    v-model="advancedForm.newsletter"
                    type="radio"
                    value="daily"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Daily</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="advancedForm.newsletter"
                    type="radio"
                    value="weekly"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Weekly</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="advancedForm.newsletter"
                    type="radio"
                    value="monthly"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Monthly</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="advancedForm.newsletter"
                    type="radio"
                    value="never"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Never</span>
                </label>
              </div>
            </div>
          </div>

          <!-- File Upload -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">File Upload</h3>
            
            <div>
              <label for="avatar" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Profile Picture
              </label>
              <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 dark:border-gray-600">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600 dark:text-gray-400">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        type="file"
                        class="sr-only"
                        accept="image/*"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Buttons -->
          <div class="flex justify-end space-x-3">
            <button
              type="button"
              @click="resetAdvancedForm"
              class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
            >
              Reset
            </button>
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Submit Advanced Form
            </button>
          </div>
        </form>
      </div>

      <!-- Form Validation Example -->
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Form with Validation</h2>
        
        <form @submit.prevent="handleValidationSubmit" class="space-y-6">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <!-- Username -->
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Username *
              </label>
              <input
                id="username"
                v-model="validationForm.username"
                type="text"
                @blur="validateUsername"
                :class="[
                  'mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
                  validationErrors.username
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:border-red-400 dark:focus:ring-red-400'
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:focus:border-indigo-400 dark:focus:ring-indigo-400'
                ]"
                placeholder="Enter username"
              />
              <p v-if="validationErrors.username" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ validationErrors.username }}
              </p>
            </div>

            <!-- Password -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password *
              </label>
              <input
                id="password"
                v-model="validationForm.password"
                type="password"
                @blur="validatePassword"
                :class="[
                  'mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
                  validationErrors.password
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:border-red-400 dark:focus:ring-red-400'
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:focus:border-indigo-400 dark:focus:ring-indigo-400'
                ]"
                placeholder="Enter password"
              />
              <p v-if="validationErrors.password" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ validationErrors.password }}
              </p>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <button
              type="submit"
              :disabled="!isValidationFormValid"
              class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-gray-800"
            >
              Submit Validated Form
            </button>
          </div>
        </form>
      </div>
    </div>
  </LayoutWithMainbar>
</template>

<script setup>
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';
import { ref, computed } from 'vue';

// Basic form data
const basicForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
});

// Advanced form data
const advancedForm = ref({
  dob: '',
  gender: '',
  country: '',
  interests: [],
  newsletter: '',
  avatar: null
});

// Validation form data
const validationForm = ref({
  username: '',
  password: ''
});

// Validation errors
const validationErrors = ref({
  username: '',
  password: ''
});

// Computed property to check if validation form is valid
const isValidationFormValid = computed(() => {
  return validationForm.value.username && 
         validationForm.value.password && 
         !validationErrors.value.username && 
         !validationErrors.value.password;
});

// Form submission handlers
const handleBasicSubmit = () => {
  console.log('Basic form submitted:', basicForm.value);
  // Add your form submission logic here
  alert('Basic form submitted successfully!');
};

const handleAdvancedSubmit = () => {
  console.log('Advanced form submitted:', advancedForm.value);
  // Add your form submission logic here
  alert('Advanced form submitted successfully!');
};

const handleValidationSubmit = () => {
  if (isValidationFormValid.value) {
    console.log('Validation form submitted:', validationForm.value);
    // Add your form submission logic here
    alert('Validation form submitted successfully!');
  }
};

// Validation functions
const validateUsername = () => {
  const username = validationForm.value.username;
  if (!username) {
    validationErrors.value.username = 'Username is required';
  } else if (username.length < 3) {
    validationErrors.value.username = 'Username must be at least 3 characters';
  } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    validationErrors.value.username = 'Username can only contain letters, numbers, and underscores';
  } else {
    validationErrors.value.username = '';
  }
};

const validatePassword = () => {
  const password = validationForm.value.password;
  if (!password) {
    validationErrors.value.password = 'Password is required';
  } else if (password.length < 8) {
    validationErrors.value.password = 'Password must be at least 8 characters';
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    validationErrors.value.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
  } else {
    validationErrors.value.password = '';
  }
};

// Reset function
const resetAdvancedForm = () => {
  advancedForm.value = {
    dob: '',
    gender: '',
    country: '',
    interests: [],
    newsletter: '',
    avatar: null
  };
};
</script> 