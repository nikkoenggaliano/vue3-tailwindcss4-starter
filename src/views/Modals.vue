<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Modals</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Modal components for overlays, dialogs, and popups
        </p>
      </div>

      <!-- Basic Modals -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Basic Modals</h2>
        
        <div class="flex flex-wrap gap-4">
          <!-- Simple Modal Trigger -->
          <button 
            @click="showSimpleModal = true"
            class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Open Simple Modal
          </button>

          <!-- Confirmation Modal Trigger -->
          <button 
            @click="showConfirmModal = true"
            class="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Open Confirmation Modal
          </button>

          <!-- Form Modal Trigger -->
          <button 
            @click="showFormModal = true"
            class="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Open Form Modal
          </button>

          <!-- Large Modal Trigger -->
          <button 
            @click="showLargeModal = true"
            class="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Open Large Modal
          </button>
        </div>
      </div>

      <!-- Simple Modal -->
      <Teleport to="body">
        <div v-if="showSimpleModal" class="modal-overlay" @click="showSimpleModal = false">
          <div class="modal-container" @click.stop>
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-icon bg-indigo-100 dark:bg-indigo-900">
                  <svg class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="modal-title-section">
                  <h3 class="modal-title">Simple Modal</h3>
                  <p class="modal-description">
                    This is a simple modal with basic content. You can add any content here including text, images, or other components.
                  </p>
                </div>
              </div>
              <div class="modal-footer">
                <button 
                  @click="showSimpleModal = false"
                  class="modal-button-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Teleport>

      <!-- Confirmation Modal -->
      <Teleport to="body">
        <div v-if="showConfirmModal" class="modal-overlay" @click="showConfirmModal = false">
          <div class="modal-container" @click.stop>
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-icon bg-red-100 dark:bg-red-900">
                  <svg class="h-6 w-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div class="modal-title-section">
                  <h3 class="modal-title">Delete Item</h3>
                  <p class="modal-description">
                    Are you sure you want to delete this item? This action cannot be undone.
                  </p>
                </div>
              </div>
              <div class="modal-footer">
                <button 
                  @click="handleDelete"
                  class="modal-button-danger"
                >
                  Delete
                </button>
                <button 
                  @click="showConfirmModal = false"
                  class="modal-button-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Teleport>

      <!-- Form Modal -->
      <Teleport to="body">
        <div v-if="showFormModal" class="modal-overlay" @click="showFormModal = false">
          <div class="modal-container" @click.stop>
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-icon bg-green-100 dark:bg-green-900">
                  <svg class="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div class="modal-title-section w-full">
                  <h3 class="modal-title">Add New Item</h3>
                  <div class="mt-4 space-y-4">
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                      <input 
                        v-model="formData.name"
                        type="text" 
                        id="name"
                        class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                        placeholder="Enter item name"
                      />
                    </div>
                    <div>
                      <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                      <textarea 
                        v-model="formData.description"
                        id="description"
                        rows="3"
                        class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                        placeholder="Enter description"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button 
                  @click="handleSubmit"
                  class="modal-button-success"
                >
                  Save
                </button>
                <button 
                  @click="showFormModal = false"
                  class="modal-button-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Teleport>

      <!-- Large Modal -->
      <Teleport to="body">
        <div v-if="showLargeModal" class="modal-overlay" @click="showLargeModal = false">
          <div class="modal-container modal-large" @click.stop>
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-icon bg-purple-100 dark:bg-purple-900">
                  <svg class="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div class="modal-title-section w-full">
                  <h3 class="modal-title">Detailed Information</h3>
                  <div class="mt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 class="text-md font-medium text-gray-900 dark:text-white mb-3">Project Overview</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          This is a comprehensive modal that can contain large amounts of content including forms, tables, charts, and other complex components.
                        </p>
                        <div class="space-y-3">
                          <div class="flex justify-between">
                            <span class="text-sm text-gray-600 dark:text-gray-400">Status:</span>
                            <span class="text-sm font-medium text-green-600 dark:text-green-400">Active</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-sm text-gray-600 dark:text-gray-400">Created:</span>
                            <span class="text-sm font-medium text-gray-900 dark:text-white">2024-01-15</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-sm text-gray-600 dark:text-gray-400">Updated:</span>
                            <span class="text-sm font-medium text-gray-900 dark:text-white">2024-01-20</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 class="text-md font-medium text-gray-900 dark:text-white mb-3">Statistics</h4>
                        <div class="space-y-3">
                          <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1,234</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Total Items</div>
                          </div>
                          <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <div class="text-2xl font-bold text-green-600 dark:text-green-400">89%</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button 
                  @click="showLargeModal = false"
                  class="modal-button-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Teleport>

      <!-- Modal with Loading State -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Modal with Loading State</h2>
        
        <button 
          @click="showLoadingModal = true"
          class="px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Open Loading Modal
        </button>

        <!-- Loading Modal -->
        <Teleport to="body">
          <div v-if="showLoadingModal" class="modal-overlay">
            <div class="modal-container" @click.stop>
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-icon bg-yellow-100 dark:bg-yellow-900">
                    <svg class="animate-spin h-6 w-6 text-yellow-600 dark:text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <div class="modal-title-section">
                    <h3 class="modal-title">Processing...</h3>
                    <p class="modal-description">
                      Please wait while we process your request. This may take a few moments.
                    </p>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 dark:bg-gray-700">
                  <div class="flex justify-center">
                    <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div class="bg-yellow-600 h-2 rounded-full animate-pulse" style="width: 60%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Teleport>
      </div>

      <!-- Modal Sizes -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Modal Sizes</h2>
        
        <div class="flex flex-wrap gap-4">
          <button 
            @click="showSmallModal = true"
            class="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Small Modal
          </button>
          <button 
            @click="showMediumModal = true"
            class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Medium Modal
          </button>
          <button 
            @click="showExtraLargeModal = true"
            class="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Extra Large Modal
          </button>
        </div>

        <!-- Small Modal -->
        <Teleport to="body">
          <div v-if="showSmallModal" class="modal-overlay" @click="showSmallModal = false">
            <div class="modal-container modal-small" @click.stop>
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title">Small Modal</h3>
                  <p class="modal-description">This is a small modal with minimal content.</p>
                </div>
                <div class="modal-footer">
                  <button @click="showSmallModal = false" class="modal-button-primary">Close</button>
                </div>
              </div>
            </div>
          </div>
        </Teleport>

        <!-- Medium Modal -->
        <Teleport to="body">
          <div v-if="showMediumModal" class="modal-overlay" @click="showMediumModal = false">
            <div class="modal-container modal-medium" @click.stop>
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title">Medium Modal</h3>
                  <p class="modal-description">This is a medium-sized modal with more content space.</p>
                </div>
                <div class="modal-footer">
                  <button @click="showMediumModal = false" class="modal-button-primary">Close</button>
                </div>
              </div>
            </div>
          </div>
        </Teleport>

        <!-- Extra Large Modal -->
        <Teleport to="body">
          <div v-if="showExtraLargeModal" class="modal-overlay" @click="showExtraLargeModal = false">
            <div class="modal-container modal-extra-large" @click.stop>
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title">Extra Large Modal</h3>
                  <p class="modal-description">This is an extra large modal for complex content and layouts.</p>
                  <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 class="font-medium text-gray-900 dark:text-white">Section 1</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Content for section 1</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 class="font-medium text-gray-900 dark:text-white">Section 2</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Content for section 2</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 class="font-medium text-gray-900 dark:text-white">Section 3</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Content for section 3</p>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button @click="showExtraLargeModal = false" class="modal-button-primary">Close</button>
                </div>
              </div>
            </div>
          </div>
        </Teleport>
      </div>
    </div>
  </LayoutWithMainbar>
</template>

<script setup>
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';
import { ref } from 'vue';

// Modal visibility states
const showSimpleModal = ref(false);
const showConfirmModal = ref(false);
const showFormModal = ref(false);
const showLargeModal = ref(false);
const showLoadingModal = ref(false);
const showSmallModal = ref(false);
const showMediumModal = ref(false);
const showExtraLargeModal = ref(false);

// Form data
const formData = ref({
  name: '',
  description: ''
});

// Handle form submission
const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
  // Add your form submission logic here
  alert('Form submitted successfully!');
  showFormModal.value = false;
  formData.value = { name: '', description: '' };
};

// Handle delete confirmation
const handleDelete = () => {
  console.log('Item deleted');
  // Add your delete logic here
  alert('Item deleted successfully!');
  showConfirmModal.value = false;
};
</script>

<style scoped>
/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.modal-container {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-small {
  max-width: 400px;
}

.modal-medium {
  max-width: 600px;
}

.modal-large {
  max-width: 800px;
}

.modal-extra-large {
  max-width: 1200px;
}

.modal-content {
  padding: 1.5rem;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.modal-icon {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-title-section {
  flex: 1;
}

.modal-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.modal-description {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.modal-button-primary {
  background-color: #4f46e5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.modal-button-primary:hover {
  background-color: #4338ca;
}

.modal-button-secondary {
  background-color: white;
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #d1d5db;
  cursor: pointer;
  transition: all 0.2s;
}

.modal-button-secondary:hover {
  background-color: #f9fafb;
}

.modal-button-danger {
  background-color: #dc2626;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.modal-button-danger:hover {
  background-color: #b91c1c;
}

.modal-button-success {
  background-color: #16a34a;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.modal-button-success:hover {
  background-color: #15803d;
}

/* Dark mode styles */
.dark .modal-container {
  background: #1f2937;
}

.dark .modal-title {
  color: #f9fafb;
}

.dark .modal-description {
  color: #d1d5db;
}

.dark .modal-footer {
  border-top-color: #374151;
}

.dark .modal-button-secondary {
  background-color: #374151;
  color: #d1d5db;
  border-color: #4b5563;
}

.dark .modal-button-secondary:hover {
  background-color: #4b5563;
}
</style> 