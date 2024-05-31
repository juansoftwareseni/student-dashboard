import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
    loading: false
  }),
  actions: {
    async getUser() {
      this.$state.loading = true
      const response = await fetch('https://run.mocky.io/v3/d6cedfb6-3aaa-4f8f-9acf-1cf64844ca52')
      const responseJson = await response.json()
      this.$state.loading = false
      this.$state.user = responseJson
    },
    resetUser() {
      this.$state.user = null
    }
  },
  getters: {
    getUserData(state) {
      return state.user
    },
    isLoading(state) {
      return state.loading
    }
  }
})
