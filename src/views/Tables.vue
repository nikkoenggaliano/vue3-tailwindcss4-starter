<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Tables</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Comprehensive table components with sorting, filtering, and pagination
        </p>
      </div>

      <!-- Basic Table -->
      <div class="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Basic Table</h2>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  Name
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  Position
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  Status
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  Email
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <tr v-for="user in basicTableData" :key="user.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-medium">
                      {{ user.name.charAt(0) }}
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900 dark:text-white">{{ user.name }}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">{{ user.department }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {{ user.position }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                    user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    user.status === 'Inactive' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  ]">
                    {{ user.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {{ user.email }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3">
                    Edit
                  </button>
                  <button class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Advanced Table with Search and Filters -->
      <div class="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-0">Advanced Table</h2>
            
            <!-- Search and Filters -->
            <div class="flex flex-col sm:flex-row gap-4">
              <!-- Search -->
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search users..."
                  class="w-full sm:w-64 rounded-md border border-gray-300 px-3 py-2 pl-10 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <!-- Status Filter -->
              <select
                v-model="statusFilter"
                class="rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              >
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th 
                  v-for="column in columns" 
                  :key="column.key"
                  @click="sortBy(column.key)"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div class="flex items-center">
                    {{ column.label }}
                    <svg v-if="sortKey === column.key" class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path v-if="sortOrder === 'asc'" fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                      <path v-else fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <tr v-for="user in paginatedData" :key="user.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-medium">
                      {{ user.name.charAt(0) }}
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900 dark:text-white">{{ user.name }}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">{{ user.department }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {{ user.position }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                    user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    user.status === 'Inactive' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  ]">
                    {{ user.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {{ user.email }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {{ user.joinDate }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex space-x-2">
                    <button class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                      Edit
                    </button>
                    <button class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- Pagination -->
        <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-700 dark:text-gray-300">
              Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ filteredData.length }} results
            </div>
            
            <div class="flex items-center space-x-2">
              <button
                @click="previousPage"
                :disabled="currentPage === 1"
                class="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Previous
              </button>
              
              <div class="flex space-x-1">
                <button
                  v-for="page in visiblePages"
                  :key="page"
                  @click="goToPage(page)"
                  :class="[
                    'px-3 py-1 text-sm font-medium rounded-md',
                    page === currentPage
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                  ]"
                >
                  {{ page }}
                </button>
              </div>
              
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Data Table with Bulk Actions -->
      <div class="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-0">Data Table with Bulk Actions</h2>
            
            <div class="flex space-x-3">
              <button
                v-if="selectedItems.length > 0"
                @click="bulkDelete"
                class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Delete Selected ({{ selectedItems.length }})
              </button>
              <button
                @click="addNewItem"
                class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Add New
              </button>
            </div>
          </div>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th class="px-6 py-3 text-left">
                  <input
                    v-model="selectAll"
                    @change="toggleSelectAll"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  Product
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  Category
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  Price
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  Stock
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <tr v-for="product in productData" :key="product.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td class="px-6 py-4 whitespace-nowrap">
                  <input
                    v-model="selectedItems"
                    :value="product.id"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-indigo-400"
                  />
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-lg bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <span class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ product.name.charAt(0) }}</span>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900 dark:text-white">{{ product.name }}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">{{ product.sku }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {{ product.category }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  ${{ product.price }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                    product.stock > 10 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    product.stock > 0 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  ]">
                    {{ product.stock }} in stock
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex space-x-2">
                    <button class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                      Edit
                    </button>
                    <button class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </LayoutWithMainbar>
</template>

<script setup>
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';
import { ref, computed, watch } from 'vue';

// Basic table data
const basicTableData = ref([
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Engineering',
    status: 'Active',
    email: 'john.doe@example.com'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Product Manager',
    department: 'Product',
    status: 'Active',
    email: 'jane.smith@example.com'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Designer',
    department: 'Design',
    status: 'Inactive',
    email: 'mike.johnson@example.com'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    position: 'Marketing Specialist',
    department: 'Marketing',
    status: 'Pending',
    email: 'sarah.wilson@example.com'
  }
]);

// Advanced table data
const advancedTableData = ref([
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Engineering',
    status: 'Active',
    email: 'john.doe@example.com',
    joinDate: '2023-01-15'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Product Manager',
    department: 'Product',
    status: 'Active',
    email: 'jane.smith@example.com',
    joinDate: '2022-11-20'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Designer',
    department: 'Design',
    status: 'Inactive',
    email: 'mike.johnson@example.com',
    joinDate: '2023-03-10'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    position: 'Marketing Specialist',
    department: 'Marketing',
    status: 'Pending',
    email: 'sarah.wilson@example.com',
    joinDate: '2023-05-05'
  },
  {
    id: 5,
    name: 'David Brown',
    position: 'Data Analyst',
    department: 'Analytics',
    status: 'Active',
    email: 'david.brown@example.com',
    joinDate: '2022-09-12'
  },
  {
    id: 6,
    name: 'Lisa Davis',
    position: 'HR Manager',
    department: 'Human Resources',
    status: 'Active',
    email: 'lisa.davis@example.com',
    joinDate: '2023-02-28'
  }
]);

// Product data for bulk actions
const productData = ref([
  {
    id: 1,
    name: 'Laptop Pro',
    sku: 'LP001',
    category: 'Electronics',
    price: 1299.99,
    stock: 15
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    sku: 'WM002',
    category: 'Accessories',
    price: 49.99,
    stock: 8
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    sku: 'MK003',
    category: 'Accessories',
    price: 199.99,
    stock: 0
  },
  {
    id: 4,
    name: 'Monitor 27"',
    sku: 'MN004',
    category: 'Electronics',
    price: 399.99,
    stock: 12
  }
]);

// Table columns configuration
const columns = ref([
  { key: 'name', label: 'Name' },
  { key: 'position', label: 'Position' },
  { key: 'status', label: 'Status' },
  { key: 'email', label: 'Email' },
  { key: 'joinDate', label: 'Join Date' }
]);

// Search and filter state
const searchQuery = ref('');
const statusFilter = ref('');
const sortKey = ref('name');
const sortOrder = ref('asc');

// Pagination state
const currentPage = ref(1);
const itemsPerPage = ref(5);

// Bulk selection state
const selectedItems = ref([]);
const selectAll = ref(false);

// Computed properties
const filteredData = computed(() => {
  let filtered = advancedTableData.value;
  
  // Apply search filter
  if (searchQuery.value) {
    filtered = filtered.filter(user => 
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.position.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  
  // Apply status filter
  if (statusFilter.value) {
    filtered = filtered.filter(user => user.status === statusFilter.value);
  }
  
  // Apply sorting
  filtered.sort((a, b) => {
    const aValue = a[sortKey.value];
    const bValue = b[sortKey.value];
    
    if (sortOrder.value === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
  
  return filtered;
});

const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage.value));

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage.value, filteredData.value.length));

const paginatedData = computed(() => {
  return filteredData.value.slice(startIndex.value, endIndex.value);
});

const visiblePages = computed(() => {
  const pages = [];
  const maxVisible = 5;
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2));
  let end = Math.min(totalPages.value, start + maxVisible - 1);
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  return pages;
});

// Methods
const sortBy = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortOrder.value = 'asc';
  }
};

const goToPage = (page) => {
  currentPage.value = page;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedItems.value = productData.value.map(product => product.id);
  } else {
    selectedItems.value = [];
  }
};

const bulkDelete = () => {
  if (confirm(`Are you sure you want to delete ${selectedItems.value.length} items?`)) {
    productData.value = productData.value.filter(product => !selectedItems.value.includes(product.id));
    selectedItems.value = [];
    selectAll.value = false;
  }
};

const addNewItem = () => {
  const newProduct = {
    id: Date.now(),
    name: 'New Product',
    sku: 'NP' + Date.now().toString().slice(-4),
    category: 'General',
    price: 0,
    stock: 0
  };
  productData.value.push(newProduct);
};

// Watch for changes in selected items to update select all
watch(selectedItems, (newValue) => {
  selectAll.value = newValue.length === productData.value.length && productData.value.length > 0;
}, { deep: true });

// Reset pagination when filters change
watch([searchQuery, statusFilter], () => {
  currentPage.value = 1;
});
</script> 