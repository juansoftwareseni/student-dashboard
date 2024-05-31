<template>
  <fwb-navbar class="shadow-slate-400 shadow-sm">
    <template #logo>
      <div class="pl-64">Welcome back {{ user.getUserData.name }}</div>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <button @click="logout">Logout</button>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { FwbNavbar, FwbNavbarCollapse } from 'flowbite-vue'
const user = useUserStore()
const logout = () => {
  user.resetUser()
}
</script>
