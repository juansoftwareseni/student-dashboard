<template>
  <fwb-card class="w-full !max-w-none min-h-full hover:bg-white p-6">
    <div class="flex justify-between">
      <h5 class="text-lg font-semibold">Student List</h5>
      <fwb-button @click="openModalStudent">Add Student</fwb-button>
    </div>
    <fwb-table class="mt-10">
      <fwb-table-head>
        <fwb-table-head-cell>Student Name</fwb-table-head-cell>
        <fwb-table-head-cell class="text-center">Grade</fwb-table-head-cell>
        <fwb-table-head-cell class="text-center">Remaining Tasks</fwb-table-head-cell>
        <fwb-table-head-cell class="text-center">Solved Tasks</fwb-table-head-cell>
      </fwb-table-head>
      <fwb-table-body>
        <fwb-table-row v-for="student in students" :key="student.student_id">
          <fwb-table-cell>{{ student.name }}</fwb-table-cell>
          <fwb-table-cell class="text-center">{{ student.grade }}</fwb-table-cell>
          <fwb-table-cell class="text-center">{{ student.remainingTasks }}</fwb-table-cell>
          <fwb-table-cell class="!text-center">{{ student.solvedTasks }}</fwb-table-cell>
        </fwb-table-row>
      </fwb-table-body>
    </fwb-table>
  </fwb-card>
  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">Add Student</div>
    </template>
    <template #body>
      <div class="flex flex-col gap-4">
        <div>
          <label for="name">Name</label>
          <fwb-input v-model="form.name" />
        </div>
        <div>
          <label for="grade">Grade</label>
          <fwb-input v-model="form.grade" />
        </div>
        <div>
          <label for="tasks">Total Tasks</label>
          <fwb-input v-model="form.totalTasks" />
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative"> Cancel </fwb-button>
        <fwb-button @click.prevent="submitForm" color="blue"> Submit </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>

<script setup>
import {
  FwbCard,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
  FwbButton,
  FwbModal,
  FwbInput
} from 'flowbite-vue'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useStudentsStore } from '../store/students'

const studentsStore = useStudentsStore()
const { addStudent, getStudents } = studentsStore
const { students } = storeToRefs(studentsStore)

getStudents()

const form = ref({
  name: '',
  grade: '',
  totalTasks: null
})
const isShowModal = ref(false)

const openModalStudent = () => {
  isShowModal.value = true
}
const closeModal = () => {
  isShowModal.value = false
}
const submitForm = () => {
  addStudent(form.value)
  closeModal()
}
</script>
