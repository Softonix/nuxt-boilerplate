<template>
  <component :is="icon" />
</template>
<script lang="ts" setup>

const props = defineProps<{
  name?: string
}>()

const { $iconsDir } = useNuxtApp()

const icon = defineAsyncComponent(() => import(/* @vite-ignore */ `${$iconsDir}/${props.name}.svg?component`))
</script>
