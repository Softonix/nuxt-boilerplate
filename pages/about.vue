<template>
  <NuxtLayout name="default">
    <template #header="{ pageLabel, labelClass }">
      <p :class="labelClass" class="text-primary">{{ pageLabel }}</p>
      <p class="ml-5">some custom text from about page</p>
    </template>
    <AboutComponent/>

    <div>
      <span>{{ aboutVar }}</span>
      <ElButton :type="$componentType.PRIMARY" @click="changeAboutVar('changed var')">Change about var</ElButton>
    </div>

    <div class="space-x-5">
      <NuxtLink
        v-for="item in innerNavigation"
        :key="item.name"
        active-class="text-primary"
        class="hover:text-primary hover:underline"
        :to="{ name: item.name }"
      >
        {{ item.meta.pageLabel }}
      </NuxtLink>
    </div>

    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  pageLabel: 'About',
  navOrder: 2,
  layout: false
})

const route = useRoute()

const innerNavigation = route.matched[0].children

const { aboutVar, changeAboutVar } = useAboutStore()
</script>
