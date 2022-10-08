<template>
  <component :is="icon" />
</template>
<script lang="ts" setup>

const props = defineProps<{
  name: string
}>()

const { $iconsPath } = useNuxtApp()

const icon = defineAsyncComponent(() => import(/* @vite-ignore */ `${$iconsPath}/${props.name}.svg?component`))
</script>
