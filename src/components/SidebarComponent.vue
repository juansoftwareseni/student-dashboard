<script setup>
import { FwbSidebar, FwbSidebarItem, FwbSidebarLogo } from 'flowbite-vue'
import { ref } from 'vue'

const menuItems = ref([
  {
    link: '/',
    title: 'Dashboard'
  },
  {
    link: '/students',
    title: 'Students'
  },
  {
    link: '/other-routes',
    title: 'Not Found'
  }
])
</script>

<template>
  <fwb-sidebar class="[&>div]:!bg-black">
    <fwb-sidebar-logo
      name="Flowbite"
      logo="https://flowbite.com/docs/images/logo.svg"
      tag="router-link"
      class="text-white"
    />
    <fwb-sidebar-item
      v-for="item in menuItems"
      :link="item.link"
      :key="item.link"
      class="text-white hover:text-black"
    >
      <template #icon>
        <svg
          class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 21"
        >
          <path
            d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
          />
          <path
            d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
          />
        </svg>
      </template>
      <template #default>{{ item.title }}</template>
    </fwb-sidebar-item>
  </fwb-sidebar>
</template>
