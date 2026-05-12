<script setup lang="ts">
import Default from '@/layouts/Default.vue'
import { Button } from '@/components/ui/button'
import heroImage from '@/assets/home-hero.webp'

defineOptions({
    layout: [Default, { headerVariants: 'transparent' }]
})
</script>

<template>
    <section class="w-full h-screen py-12 lg:py-24 bg-cover bg-center bg-white bg-blend-multiply relative" :style="{
        backgroundImage: `
            linear-gradient(white 40%, rgba(0, 0, 0, 0.9) 100%),
            url(${heroImage})
        `
    }">
        <div class="h-full flex flex-col justify-end gap-8 max-w-6xl mx-auto p-4">
            <div class="grid lg:grid-cols-2 gap-4 text-white w-full">
                <h1 class="text-5xl">
                    United as One Family, <br>
                    <span class="font-semibold">to Live like Christ</span>
                </h1>
                <p class="text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    dignissim, ex id laoreet
                    aliquet, lorem nisl finibus urna, quis ultrices augue orci sit amet est. Fusce massa lacus,
                    consequat eget urna et, sollicitudin sagittis massa. Quisque pellentesque interdum vestibulum.
                </p>
            </div>
            <div class="flex gap-4">
                <Button size="lg" class="text-black bg-white hover:bg-neutral-300">Beribadah di Hebron</Button>
                <Button size="lg" class="text-white bg-transparent hover:bg-white/10 border border-white">
                    Kontak Kami
                </Button>
            </div>
        </div>
    </section>
</template>
