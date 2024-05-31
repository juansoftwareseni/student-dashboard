import { defineStore } from 'pinia'

export const useDashboardStore = defineStore({
  id: 'dashboard',
  state: () => ({
    dashboard: null,
    loading: false
  }),
  actions: {
    async getDashboard() {
      this.$state.loading = true
      const response = await fetch('https://run.mocky.io/v3/b67e9f25-2c04-4303-b0df-d4a7e586b5c5')
      const responseJson = await response.json()
      this.$state.loading = false
      console.log(responseJson)
      this.$state.dashboard = responseJson
    }
  }
})
