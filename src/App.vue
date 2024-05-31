<script setup>
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from './store/user'

const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const exe = () => {
  if (user.value) {
    router.push({ path: '/' })
  } else {
    router.push({ path: '/students' })
  }
}
watch(user, () => {
  exe()
})
</script>

<template><router-view /></template>
