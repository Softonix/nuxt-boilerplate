<template>
  <slot v-bind="$attrs" />
</template>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false
})
</script>
