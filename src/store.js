import { reactive, watch } from 'vue';
export const state = reactive({
  isSidebarOpen: JSON.parse(localStorage.getItem('isSidebarOpen')) ?? true,
  isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) ?? false,
});

watch(
  () => state.isSidebarOpen,
  (newValue) => {
    localStorage.setItem('isSidebarOpen', JSON.stringify(newValue));
  }
);

watch(
  () => state.isDarkMode,
  (newValue) => {
    console.log('Dark mode changed to:', newValue); // Debug log
    localStorage.setItem('isDarkMode', JSON.stringify(newValue));
    if (newValue) {
      document.documentElement.classList.add('dark');
      console.log('Added dark class to html element'); // Debug log
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Removed dark class from html element'); // Debug log
    }
  },
  { immediate: true }
);