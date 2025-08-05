<template>
  <LayoutWithMainbar>
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Users Management</h1>
        <button 
          @click="showCreateModal = true"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Add User
        </button>
      </div>

      <!-- User Statistics -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">{{ users.length }}</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">{{ activeUsersCount }}</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total Tasks</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">{{ totalTasksCount }}</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Tasks/User</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">{{ averageTasksPerUser }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Role</label>
            <select 
              v-model="filters.role" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">All Roles</option>
              <option value="admin">Admin</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
            <select 
              v-model="filters.status" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Search</label>
            <input 
              v-model="filters.search" 
              type="text" 
              placeholder="Search users..."
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
          </div>
        </div>
      </div>

      <!-- Users List -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">User</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Tasks</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Joined</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="user.avatar" :alt="user.name">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900 dark:text-white">{{ user.name }}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">{{ user.email }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="getRoleClass(user.role)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ user.role }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="getStatusClass(user.status)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ user.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900 dark:text-white">
                    <div class="flex items-center gap-2">
                      <span class="font-medium">{{ getUserTaskCount(user.id) }}</span>
                      <button 
                        @click="viewUserTasks(user)"
                        class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 text-xs"
                      >
                        View Tasks
                      </button>
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                      {{ getUserCompletedTasks(user.id) }} completed
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {{ formatDate(user.joinedDate) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    @click="editUser(user)"
                    class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3"
                  >
                    Edit
                  </button>
                  <button 
                    @click="deleteUser(user.id)"
                    class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Create/Edit User Modal -->
      <div v-if="showCreateModal || showEditModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white dark:bg-gray-800">
          <div class="mt-3">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {{ showEditModal ? 'Edit User' : 'Create New User' }}
            </h3>
            <form @submit.prevent="showEditModal ? updateUser() : createUser()">
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input 
                  v-model="userForm.name" 
                  type="text" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  v-model="userForm.email" 
                  type="email" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Role</label>
                <select 
                  v-model="userForm.role" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="admin">Admin</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
                <select 
                  v-model="userForm.status" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Avatar URL</label>
                <input 
                  v-model="userForm.avatar" 
                  type="url" 
                  placeholder="https://example.com/avatar.jpg"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
              </div>
              <div class="flex justify-end gap-3">
                <button 
                  type="button"
                  @click="closeModal"
                  class="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {{ showEditModal ? 'Update' : 'Create' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- User Tasks Modal -->
      <div v-if="showTasksModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div class="relative top-10 mx-auto p-5 border w-4/5 max-w-4xl shadow-lg rounded-md bg-white dark:bg-gray-800">
          <div class="mt-3">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                Tasks for {{ selectedUser?.name }}
              </h3>
              <button 
                @click="showTasksModal = false"
                class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Task</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Priority</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Due Date</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="task in userTasks" :key="task.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div class="text-sm font-medium text-gray-900 dark:text-white">{{ task.title }}</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">{{ task.description }}</div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="getTaskStatusClass(task.status)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                        {{ task.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="getTaskPriorityClass(task.priority)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                        {{ task.priority }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {{ formatDate(task.dueDate) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutWithMainbar>
</template>

<script setup>
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';
import { ref, computed, onMounted } from 'vue'

// Reactive data
const users = ref([])
const tasks = ref([])
const showCreateModal = ref(false)
const showEditModal = ref(false)
const showTasksModal = ref(false)
const editingUserId = ref(null)
const selectedUser = ref(null)
const filters = ref({
  role: '',
  status: '',
  search: ''
})

const userForm = ref({
  name: '',
  email: '',
  role: 'developer',
  status: 'active',
  avatar: 'https://avatars.githubusercontent.com/u/37658579'
})

// Computed properties
const filteredUsers = computed(() => {
  return users.value.filter(user => {
    const matchesRole = !filters.value.role || user.role === filters.value.role
    const matchesStatus = !filters.value.status || user.status === filters.value.status
    const matchesSearch = !filters.value.search || 
      user.name.toLowerCase().includes(filters.value.search.toLowerCase()) ||
      user.email.toLowerCase().includes(filters.value.search.toLowerCase())
    
    return matchesRole && matchesStatus && matchesSearch
  })
})

const activeUsersCount = computed(() => {
  return users.value.filter(user => user.status === 'active').length
})

const totalTasksCount = computed(() => {
  return tasks.value.length
})

const averageTasksPerUser = computed(() => {
  return users.value.length > 0 ? (tasks.value.length / users.value.length).toFixed(1) : '0'
})

const userTasks = computed(() => {
  if (!selectedUser.value) return []
  return tasks.value.filter(task => task.assigneeId === selectedUser.value.id)
})

// Methods
const getUserTaskCount = (userId) => {
  return tasks.value.filter(task => task.assigneeId === userId).length
}

const getUserCompletedTasks = (userId) => {
  return tasks.value.filter(task => task.assigneeId === userId && task.status === 'completed').length
}

const getRoleClass = (role) => {
  const classes = {
    'admin': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'developer': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'designer': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'manager': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  }
  return classes[role] || classes.developer
}

const getStatusClass = (status) => {
  const classes = {
    'active': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'inactive': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
  return classes[status] || classes.inactive
}

const getTaskStatusClass = (status) => {
  const classes = {
    'pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'cancelled': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  }
  return classes[status] || classes.pending
}

const getTaskPriorityClass = (priority) => {
  const classes = {
    'low': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
    'medium': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'high': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    'urgent': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  }
  return classes[priority] || classes.medium
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

const createUser = () => {
  const newUser = {
    id: Date.now(),
    ...userForm.value,
    joinedDate: new Date().toISOString()
  }
  users.value.push(newUser)
  closeModal()
  resetForm()
}

const editUser = (user) => {
  editingUserId.value = user.id
  userForm.value = { ...user }
  showEditModal.value = true
}

const updateUser = () => {
  const index = users.value.findIndex(u => u.id === editingUserId.value)
  if (index !== -1) {
    users.value[index] = { ...users.value[index], ...userForm.value }
  }
  closeModal()
  resetForm()
}

const deleteUser = (userId) => {
  if (confirm('Are you sure you want to delete this user?')) {
    users.value = users.value.filter(u => u.id !== userId)
  }
}

const viewUserTasks = (user) => {
  selectedUser.value = user
  showTasksModal.value = true
}

const closeModal = () => {
  showCreateModal.value = false
  showEditModal.value = false
  showTasksModal.value = false
  editingUserId.value = null
  selectedUser.value = null
}

const resetForm = () => {
  userForm.value = {
    name: '',
    email: '',
    role: 'developer',
    status: 'active',
    avatar: 'https://avatars.githubusercontent.com/u/37658579'
  }
}

// Initialize data
onMounted(() => {
  // Mock data - in real app, this would come from API
  users.value = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com',
      role: 'admin',
      status: 'active',
      avatar: 'https://avatars.githubusercontent.com/u/37658579',
      joinedDate: '2023-01-15T10:00:00Z'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com',
      role: 'developer',
      status: 'active',
      avatar: 'https://avatars.githubusercontent.com/u/37658579',
      joinedDate: '2023-02-20T14:30:00Z'
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      email: 'mike@example.com',
      role: 'designer',
      status: 'active',
      avatar: 'https://avatars.githubusercontent.com/u/37658579',
      joinedDate: '2023-03-10T09:15:00Z'
    },
    { 
      id: 4, 
      name: 'Sarah Wilson', 
      email: 'sarah@example.com',
      role: 'manager',
      status: 'inactive',
      avatar: 'https://avatars.githubusercontent.com/u/37658579',
      joinedDate: '2023-04-05T16:45:00Z'
    }
  ]
  
  tasks.value = [
    {
      id: 1,
      title: 'Design Homepage',
      description: 'Create new homepage design with modern UI',
      assigneeId: 1,
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-02-15',
      createdAt: '2024-01-15T10:00:00Z'
    },
    {
      id: 2,
      title: 'Fix Login Bug',
      description: 'Resolve authentication issue in login form',
      assigneeId: 2,
      status: 'completed',
      priority: 'urgent',
      dueDate: '2024-01-20',
      createdAt: '2024-01-10T14:30:00Z'
    },
    {
      id: 3,
      title: 'Update Documentation',
      description: 'Update API documentation for new features',
      assigneeId: 3,
      status: 'pending',
      priority: 'medium',
      dueDate: '2024-02-01',
      createdAt: '2024-01-18T09:15:00Z'
    },
    {
      id: 4,
      title: 'User Interface Review',
      description: 'Review and approve new UI components',
      assigneeId: 1,
      status: 'completed',
      priority: 'medium',
      dueDate: '2024-01-25',
      createdAt: '2024-01-12T11:20:00Z'
    },
    {
      id: 5,
      title: 'Database Optimization',
      description: 'Optimize database queries for better performance',
      assigneeId: 2,
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-02-10',
      createdAt: '2024-01-20T13:45:00Z'
    }
  ]
})
</script> 