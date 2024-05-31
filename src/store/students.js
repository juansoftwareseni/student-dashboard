import { defineStore } from 'pinia'

export const useStudentsStore = defineStore({
  id: 'students',
  state: () => ({
    students: [],
    loading: false
  }),
  actions: {
    async getStudents() {
      this.$state.loading = true
      const response = await fetch('https://run.mocky.io/v3/e09f7cda-2087-4d9e-b792-62170778a414')
      const responseJson = await response.json()
      this.$state.loading = false
      this.$state.students = responseJson.students
    },
    addStudent(form) {
      const newData = { ...form, remainingTasks: Number(form.totalTasks), solvedTasks: 0 }
      this.$state.students = [...this.$state.students, newData]
    }
  },
  getters: {
    getStudentsData(state) {
      return state.students
    },
    isLoading(state) {
      return state.loading
    }
  }
})
