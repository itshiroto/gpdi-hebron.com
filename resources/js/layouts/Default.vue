<script setup lang='ts'>
const props = defineProps<{
    headerVariants?: 'light' | 'dark' | 'transparent'
}>()
import Header from "@/components/Header.vue"
</script>

<template>
    <Header :variant="props.headerVariants" />
    <slot />
</template>
