<template>
  <div>
    <el-button :type="$componentType.PRIMARY" @click="opened = true">test</el-button>

    <client-only>
      <el-dialog v-model="opened">
        <div>hello modal</div>
      </el-dialog>
    </client-only>
  </div>
</template>

<script lang="ts" setup>

import { ElMessage } from 'element-plus'

onMounted(() => {
  setTimeout(() => {
    ElMessage.success('hello')
  }, 1000)
})

const opened = ref(false)
</script>
