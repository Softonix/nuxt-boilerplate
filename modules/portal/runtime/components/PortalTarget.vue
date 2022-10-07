<template>
  <div :id="name">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>
