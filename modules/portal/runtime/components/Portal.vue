<template>
  <teleport v-if="isMounted" :to="'#' + to">
    <slot />
  </teleport>
</template>

<script lang="ts" setup>
const props = defineProps<{
  to: string
  manual?: boolean
}>()

const { register, remove } = usePortal()

const isMounted = ref(false)

function mountPortal () {
  isMounted.value = true
}

onMounted(async () => {
  register(props.to, mountPortal)
})

onBeforeUnmount(() => remove(props.to))
</script>
