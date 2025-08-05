<template>
  <LayoutWithMainbar>
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Accordion</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Accordion components for collapsible content sections
        </p>
      </div>

      <!-- Basic Accordion -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Basic Accordion</h2>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <div v-for="(item, index) in accordionItems" :key="index" class="accordion-item">
              <button @click="toggleAccordion(index)"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset">
                <span class="text-sm font-medium text-gray-900 dark:text-white">{{ item.title }}</span>
                <svg :class="[
                  item.isOpen ? 'rotate-180' : '',
                  'w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200'
                ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-show="item.isOpen" class="px-6 pb-4 transition-all duration-200">
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Accordion with Icons -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Accordion with Icons</h2>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <div v-for="(item, index) in iconAccordionItems" :key="index" class="accordion-item">
              <button @click="toggleIconAccordion(index)"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset">
                <div class="flex items-center">
                  <div class="flex-shrink-0 mr-3">
                    <div :class="`w-8 h-8 ${item.iconBg} rounded-md flex items-center justify-center`">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                      </svg>
                    </div>
                  </div>
                  <span class="text-sm font-medium text-gray-900 dark:text-white">{{ item.title }}</span>
                </div>
                <svg :class="[
                  item.isOpen ? 'rotate-180' : '',
                  'w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200'
                ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-show="item.isOpen" class="px-6 pb-4 transition-all duration-200">
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  <p class="mb-3">{{ item.content }}</p>
                  <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                    <h4 class="font-medium text-gray-900 dark:text-white mb-2">{{ item.subtitle }}</h4>
                    <ul class="space-y-1 text-sm">
                      <li v-for="(feature, featureIndex) in item.features" :key="featureIndex"
                        class="flex items-center">
                        <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {{ feature }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Multiple Open Accordion -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Multiple Open Accordion</h2>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <div v-for="(item, index) in multipleAccordionItems" :key="index" class="accordion-item">
              <button @click="toggleMultipleAccordion(index)"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset">
                <div class="flex items-center">
                  <span class="text-sm font-medium text-gray-900 dark:text-white">{{ item.title }}</span>
                  <span
                    class="ml-2 px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">
                    {{ item.badge }}
                  </span>
                </div>
                <svg :class="[
                  item.isOpen ? 'rotate-180' : '',
                  'w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200'
                ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-show="item.isOpen" class="px-6 pb-4 transition-all duration-200">
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  <p class="mb-3">{{ item.content }}</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="(stat, statIndex) in item.stats" :key="statIndex"
                      class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                      <div class="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{{ stat.value }}</div>
                      <div class="text-xs text-gray-500 dark:text-gray-400">{{ stat.label }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">FAQ Accordion</h2>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Frequently Asked Questions</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Find answers to common questions about our service</p>
          </div>
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <div v-for="(item, index) in faqItems" :key="index" class="accordion-item">
              <button @click="toggleFaq(index)"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset">
                <span class="text-sm font-medium text-gray-900 dark:text-white">{{ item.question }}</span>
                <svg :class="[
                  item.isOpen ? 'rotate-180' : '',
                  'w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200'
                ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-show="item.isOpen" class="px-6 pb-4 transition-all duration-200">
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  <p class="mb-3">{{ item.answer }}</p>
                  <div v-if="item.additional" class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md">
                    <h4 class="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Additional Information:</h4>
                    <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li v-for="(info, infoIndex) in item.additional" :key="infoIndex" class="flex items-start">
                        <span class="mr-2">•</span>
                        {{ info }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Custom Styled Accordion -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Custom Styled Accordion</h2>

        <div class="space-y-4">
          <div v-for="(item, index) in customAccordionItems" :key="index"
            class="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
            <button @click="toggleCustomAccordion(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset transition-all duration-200">
              <div class="flex items-center">
                <div class="flex-shrink-0 mr-4">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.subtitle }}</p>
                </div>
              </div>
              <div class="flex items-center">
                <span
                  class="mr-3 px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">
                  {{ item.badge }}
                </span>
                <svg :class="[
                  item.isOpen ? 'rotate-180' : '',
                  'w-6 h-6 text-gray-500 dark:text-gray-400 transition-transform duration-200'
                ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div v-show="item.isOpen" class="px-6 py-4 transition-all duration-200">
              <div class="text-sm text-gray-600 dark:text-gray-400">
                <p class="mb-4">{{ item.content }}</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div v-for="(metric, metricIndex) in item.metrics" :key="metricIndex"
                    class="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{{ metric.value }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">{{ metric.label }}</div>
                  </div>
                </div>
                <div class="mt-4 flex space-x-3">
                  <button
                    class="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors">
                    Learn More
                  </button>
                  <button
                    class="px-4 py-2 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Documentation
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
import { ref } from 'vue';
import LayoutWithMainbar from '../components/LayoutWithMainbar.vue';

// Basic accordion data
const accordionItems = ref([
  {
    title: 'What is Vue.js?',
    content: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning you can use as much or as little of Vue as you need for your project.',
    isOpen: false
  },
  {
    title: 'How does Vue.js work?',
    content: 'Vue.js works by creating a reactive data binding system that automatically updates the DOM when the underlying data changes. It uses a virtual DOM to efficiently update only the parts of the page that need to change.',
    isOpen: false
  },
  {
    title: 'What are Vue components?',
    content: 'Vue components are reusable Vue instances with a name. They can be used as custom elements in your templates and can contain their own template, script, and style sections.',
    isOpen: false
  }
]);

// Icon accordion data
const iconAccordionItems = ref([
  {
    title: 'User Management',
    content: 'Comprehensive user management system with role-based access control and user authentication.',
    subtitle: 'Key Features:',
    features: ['User registration and login', 'Role-based permissions', 'Profile management', 'Password reset functionality'],
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
    iconBg: 'bg-blue-500',
    isOpen: false
  },
  {
    title: 'Data Analytics',
    content: 'Advanced analytics dashboard with real-time data visualization and reporting capabilities.',
    subtitle: 'Analytics Tools:',
    features: ['Real-time dashboards', 'Custom reports', 'Data export', 'Performance metrics'],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    iconBg: 'bg-green-500',
    isOpen: false
  },
  {
    title: 'Security Features',
    content: 'Enterprise-grade security features to protect your data and ensure compliance.',
    subtitle: 'Security Measures:',
    features: ['Two-factor authentication', 'Data encryption', 'Audit logging', 'Compliance monitoring'],
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    iconBg: 'bg-red-500',
    isOpen: false
  }
]);

// Multiple open accordion data
const multipleAccordionItems = ref([
  {
    title: 'Project Overview',
    badge: 'Active',
    content: 'This project provides a comprehensive solution for managing user data and analytics.',
    stats: [
      { value: '2,847', label: 'Total Users' },
      { value: '156', label: 'Active Sessions' },
      { value: '89%', label: 'Uptime' },
      { value: '24/7', label: 'Support' }
    ],
    isOpen: false
  },
  {
    title: 'Development Status',
    badge: 'In Progress',
    content: 'Current development phase focuses on implementing new features and improving performance.',
    stats: [
      { value: '75%', label: 'Completion' },
      { value: '12', label: 'Features' },
      { value: '3', label: 'Bugs Fixed' },
      { value: '2', label: 'Weeks Left' }
    ],
    isOpen: false
  },
  {
    title: 'Performance Metrics',
    badge: 'Excellent',
    content: 'System performance metrics show excellent response times and reliability.',
    stats: [
      { value: '0.2s', label: 'Avg Response' },
      { value: '99.9%', label: 'Reliability' },
      { value: '1.2M', label: 'Requests/Day' },
      { value: '45ms', label: 'Latency' }
    ],
    isOpen: false
  }
]);

// FAQ accordion data
const faqItems = ref([
  {
    question: 'How do I get started with the platform?',
    answer: 'Getting started is easy! Simply create an account, verify your email, and you can begin using all the features immediately.',
    additional: [
      'Free trial available for 14 days',
      'No credit card required to start',
      'Comprehensive onboarding guide provided'
    ],
    isOpen: false
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards including Visa, MasterCard, American Express, and Discover. We also support PayPal and bank transfers for enterprise customers.',
    additional: null,
    isOpen: false
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.',
    additional: [
      'Cancellation takes effect at the end of your billing period',
      'You can reactivate your account anytime',
      'All data is preserved for 30 days after cancellation'
    ],
    isOpen: false
  }
]);

// Custom styled accordion data
const customAccordionItems = ref([
  {
    title: 'Advanced Analytics',
    subtitle: 'Real-time data insights and reporting',
    badge: 'Premium',
    content: 'Unlock powerful analytics capabilities with our advanced reporting tools and real-time data visualization.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    metrics: [
      { value: '15+', label: 'Chart Types' },
      { value: 'Real-time', label: 'Data Updates' },
      { value: 'Export', label: 'Multiple Formats' }
    ],
    isOpen: false
  },
  {
    title: 'API Integration',
    subtitle: 'Connect with external services',
    badge: 'Developer',
    content: 'Integrate with third-party services and build custom workflows with our comprehensive API.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    metrics: [
      { value: '100+', label: 'Endpoints' },
      { value: 'REST', label: 'API Type' },
      { value: '24/7', label: 'Support' }
    ],
    isOpen: false
  }
]);

// Toggle functions
const toggleAccordion = (index) => {
  accordionItems.value[index].isOpen = !accordionItems.value[index].isOpen;
};

const toggleIconAccordion = (index) => {
  iconAccordionItems.value[index].isOpen = !iconAccordionItems.value[index].isOpen;
};

const toggleMultipleAccordion = (index) => {
  multipleAccordionItems.value[index].isOpen = !multipleAccordionItems.value[index].isOpen;
};

const toggleFaq = (index) => {
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
};

const toggleCustomAccordion = (index) => {
  customAccordionItems.value[index].isOpen = !customAccordionItems.value[index].isOpen;
};
</script>