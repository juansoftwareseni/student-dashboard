<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
</script>

<template>
  <header-component />
  <sidebar-component />
  <main class="ml-64 p-6 h-[calc(100vh-72px)]">
    <router-view></router-view>
  </main>
</template>
