<script setup lang='ts'>
interface HeaderProps {
    variant?: 'dark' | 'light' | 'transparent'
}

const props = withDefaults(defineProps<HeaderProps>(), {
    variant: "white"
})

import LogoHebron from './LogoHebron.vue';

const menu = [
    {
        title: "Tentang",
        href: "/"
    },
    {
        title: "Komunitas",
        href: "/"
    },
    {
        title: "Pelayanan",
        href: "/"
    },
    {
        title: "Acara",
        href: "/"
    },
    {
        title: "Renungan",
        href: "/"
    },
    {
        title: "Kontak",
        href: "/"
    },
]
</script>
<template>
    <header class="w-full h-14 z-99 absolute" :class="{
        'bg-linear-to-b from-black/25 to-black/0 text-white': props.variant === 'transparent',
        'bg-neutral-900 text-white': props.variant === 'dark',
        'bg-neutral-200 text-black': props.variant === 'white',
    }">
        <nav class="flex items-center justify-between px-4 h-full">
            <div class=" flex items-center">
                <LogoHebron class="size-10" />
                <div class="ml-2 tracking-tight">
                    <p class="text-sm font-bold leading-tight">Hebron Family Church</p>
                    <p class="text-xs leading-tight">GPdI Gading Serpong</p>
                </div>
            </div>
            <ul class="text-sm uppercase font-semibold flex gap-6">
                <li v-for="item in menu" class="transition-colors" :class="{
                    'hover:text-cyan-200': props.variant === 'transparent',
                    'hover:text-cyan-400': props.variant === 'dark',
                    'hover:text-cyan-600': props.variant === 'white',
                }">
                    <a :href=item.href>{{ item.title }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>
