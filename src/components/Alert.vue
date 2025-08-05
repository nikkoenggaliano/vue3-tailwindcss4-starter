<template>
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      style="background-color: rgba(0, 0, 0, 0.5);"
    >
      <!-- Alert Container -->
      <div
        class="bg-white rounded-lg shadow-xl p-6 max-w-md w-full"
        style="z-index: 51;"
      >
        <!-- Alert Header -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-3">
            <!-- Icon -->
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center"
              :style="iconStyle"
            >
              <span class="text-white font-bold">{{ type.charAt(0).toUpperCase() }}</span>
            </div>
            
            <!-- Title -->
            <h3 class="text-lg font-semibold text-gray-900">
              {{ title }}
            </h3>
          </div>
          
          <!-- Close Button -->
          <button
            @click="close"
            class="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        
        <!-- Alert Body -->
        <div class="mb-4">
          <p class="text-sm text-gray-600">
            {{ message }}
          </p>
        </div>
        
        <!-- Progress Bar -->
        <div v-if="autoClose && duration > 0" class="w-full bg-gray-200 rounded-full h-1">
          <div
            class="h-1 rounded-full transition-all duration-100"
            :style="progressStyle"
          ></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  
  // Props
  const props = defineProps({
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['info', 'warning', 'error', 'success'].includes(value)
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 5000
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true
    }
  });
  
  // Reactive data
  const isVisible = ref(true);
  const progressPercentage = ref(100);
  
  // Computed properties
  const iconStyle = computed(() => {
    const colors = {
      info: 'background-color: #3B82F6;',
      success: 'background-color: #10B981;',
      warning: 'background-color: #F59E0B;',
      error: 'background-color: #EF4444;'
    };
    return colors[props.type] || colors.info;
  });
  
  const progressStyle = computed(() => {
    const colors = {
      info: 'background-color: #3B82F6;',
      success: 'background-color: #10B981;',
      warning: 'background-color: #F59E0B;',
      error: 'background-color: #EF4444;'
    };
    return `${colors[props.type] || colors.info} width: ${progressPercentage.value}%;`;
  });
  
  // Methods
  const close = () => {
    console.log('Closing alert');
    isVisible.value = false;
  };
  
  // Progress bar functionality
  let progressTimer = null;
  
  const startProgress = () => {
    if (!props.autoClose || props.duration <= 0) return;
    
    console.log('Starting progress for', props.duration, 'ms');
    progressPercentage.value = 100;
    
    const interval = 50;
    const steps = props.duration / interval;
    const decrement = 100 / steps;
    
    progressTimer = setInterval(() => {
      progressPercentage.value -= decrement;
      if (progressPercentage.value <= 0) {
        clearInterval(progressTimer);
        close();
      }
    }, interval);
  };
  
  const stopProgress = () => {
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  };
  
  // Lifecycle
  onMounted(() => {
    console.log('Alert component mounted');
    startProgress();
  });
  
  onUnmounted(() => {
    console.log('Alert component unmounted');
    stopProgress();
  });
  </script> 