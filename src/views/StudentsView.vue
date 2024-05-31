<template>
  <fwb-card class="w-full !max-w-none min-h-full hover:bg-white p-6">
    <h5 class="text-lg font-semibold">Student List</h5>
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
</template>

<script setup>
import {
  FwbCard,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow
} from 'flowbite-vue'
import { storeToRefs } from 'pinia'
import { useStudentsStore } from '../store/students'

const studentsStore = useStudentsStore()
studentsStore.getStudents()
const { students } = storeToRefs(studentsStore)
</script>
