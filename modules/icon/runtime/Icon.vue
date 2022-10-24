<template>
  <component :is="icon" />
</template>
<script lang="ts" setup>

const props = defineProps<{
  name: string
}>()

const icon = await import(`../../../assets/icons/${props.name}.svg?component`)
</script>
