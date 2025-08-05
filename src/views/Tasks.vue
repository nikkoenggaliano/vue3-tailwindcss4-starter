<template>
  <LayoutWithMainbar>
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Tasks Management</h1>
        <button @click="showCreateModal = true"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Add Task
        </button>
      </div>

      <!-- Filters -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
            <select v-model="filters.status"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Assignee</label>
            <select v-model="filters.assignee"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="">All Users</option>
              <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
            <select v-model="filters.priority"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="">All Priorities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Search</label>
            <input v-model="filters.search" type="text" placeholder="Search tasks..."
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
          </div>
        </div>
      </div>

      <!-- Tasks List -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Task</th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Assignee</th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status</th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Priority</th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Due Date</th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="task in filteredTasks" :key="task.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">{{ task.title }}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">{{ task.description }}</div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-8 w-8">
                      <img class="h-8 w-8 rounded-full" :src="getUserAvatar(task.assigneeId)"
                        :alt="getUserName(task.assigneeId)">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900 dark:text-white">{{ getUserName(task.assigneeId) }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="getStatusClass(task.status)"
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ task.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="getPriorityClass(task.priority)"
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ task.priority }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {{ formatDate(task.dueDate) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button @click="editTask(task)"
                    class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">
                    Edit
                  </button>
                  <button @click="deleteTask(task.id)"
                    class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Create/Edit Task Modal -->
      <div v-if="showCreateModal || showEditModal"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white dark:bg-gray-800">
          <div class="mt-3">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {{ showEditModal ? 'Edit Task' : 'Create New Task' }}
            </h3>
            <form @submit.prevent="showEditModal ? updateTask() : createTask()">
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                <input v-model="taskForm.title" type="text" required
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                <textarea v-model="taskForm.description" rows="3"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"></textarea>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Assignee</label>
                <select v-model="taskForm.assigneeId" required
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="">Select User</option>
                  <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
                </select>
              </div>
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
                  <select v-model="taskForm.status" required
                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
                  <select v-model="taskForm.priority" required
                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Due Date</label>
                <input v-model="taskForm.dueDate" type="date" required
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              </div>
              <div class="flex justify-end gap-3">
                <button type="button" @click="closeModal"
                  class="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  Cancel
                </button>
                <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  {{ showEditModal ? 'Update' : 'Create' }}
                </button>
              </div>
            </form>
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
const tasks = ref([])
const users = ref([])
const showCreateModal = ref(false)
const showEditModal = ref(false)
const editingTaskId = ref(null)
const filters = ref({
  status: '',
  assignee: '',
  priority: '',
  search: ''
})

const taskForm = ref({
  title: '',
  description: '',
  assigneeId: '',
  status: 'pending',
  priority: 'medium',
  dueDate: ''
})

// Computed properties
const filteredTasks = computed(() => {
  return tasks.value.filter(task => {
    const matchesStatus = !filters.value.status || task.status === filters.value.status
    const matchesAssignee = !filters.value.assignee || task.assigneeId === filters.value.assignee
    const matchesPriority = !filters.value.priority || task.priority === filters.value.priority
    const matchesSearch = !filters.value.search ||
      task.title.toLowerCase().includes(filters.value.search.toLowerCase()) ||
      task.description.toLowerCase().includes(filters.value.search.toLowerCase())

    return matchesStatus && matchesAssignee && matchesPriority && matchesSearch
  })
})

// Methods
const getUserName = (userId) => {
  const user = users.value.find(u => u.id === userId)
  return user ? user.name : 'Unknown User'
}

const getUserAvatar = (userId) => {
  const user = users.value.find(u => u.id === userId)
  return user ? user.avatar : 'https://avatars.githubusercontent.com/u/37658579'
}

const getStatusClass = (status) => {
  const classes = {
    'pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'cancelled': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  }
  return classes[status] || classes.pending
}

const getPriorityClass = (priority) => {
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

const createTask = () => {
  const newTask = {
    id: Date.now(),
    ...taskForm.value,
    createdAt: new Date().toISOString()
  }
  tasks.value.push(newTask)
  closeModal()
  resetForm()
}

const editTask = (task) => {
  editingTaskId.value = task.id
  taskForm.value = { ...task }
  showEditModal.value = true
}

const updateTask = () => {
  const index = tasks.value.findIndex(t => t.id === editingTaskId.value)
  if (index !== -1) {
    tasks.value[index] = { ...tasks.value[index], ...taskForm.value }
  }
  closeModal()
  resetForm()
}

const deleteTask = (taskId) => {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks.value = tasks.value.filter(t => t.id !== taskId)
  }
}

const closeModal = () => {
  showCreateModal.value = false
  showEditModal.value = false
  editingTaskId.value = null
}

const resetForm = () => {
  taskForm.value = {
    title: '',
    description: '',
    assigneeId: '',
    status: 'pending',
    priority: 'medium',
    dueDate: ''
  }
}

// Initialize data
onMounted(() => {
  // Mock data - in real app, this would come from API
  users.value = [
    { id: 1, name: 'John Doe', avatar: 'https://avatars.githubusercontent.com/u/37658579' },
    { id: 2, name: 'Jane Smith', avatar: 'https://avatars.githubusercontent.com/u/37658579' },
    { id: 3, name: 'Mike Johnson', avatar: 'https://avatars.githubusercontent.com/u/37658579' },
    { id: 4, name: 'Sarah Wilson', avatar: 'https://avatars.githubusercontent.com/u/37658579' }
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
    }
  ]
})
</script>