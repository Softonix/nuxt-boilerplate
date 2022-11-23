<template>
  <div>
    <Test ref="testRef" />

    <IconEyeTest />

    <el-button @click="testRef?.testFn">
      call ref funtion
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { Test } from '#components'

definePageMeta({
  pageLabel: 'Contacts',
  navOrder: 3
})

const testRef = ref<InstanceType<typeof Test>>()
</script>
