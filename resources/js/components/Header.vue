<script setup lang="ts">
import { ref, watch } from 'vue';
import { Menu, X } from 'lucide-vue-next';
import LogoHebron from './LogoHebron.vue';

const props = withDefaults(defineProps<{
    variant?: 'dark' | 'light' | 'transparent'
}>(), {
    variant: "white"
})

const isOpen = ref(false)

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

watch(isOpen, (open) => {
    if (open) {
        document.body.classList.add('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
})
</script>

<template>
    <header class="w-full h-14 z-99 absolute" :class="{
        'bg-linear-to-b from-black/25 to-black/0 text-white': props.variant === 'transparent',
        'bg-neutral-900 text-white': props.variant === 'dark',
        'bg-neutral-200 text-black': props.variant === 'white',
    }">
        <nav class="flex items-center justify-between px-4 h-full">
            <div class="flex items-center">
                <LogoHebron class="size-10" />
                <div class="ml-2 tracking-tight">
                    <p class="text-sm font-bold leading-tight">Hebron Family Church</p>
                    <p class="text-xs leading-tight">GPdI Gading Serpong</p>
                </div>
            </div>
            <!-- Desktop Menu -->
            <ul class="hidden md:flex text-sm uppercase font-semibold gap-6">
                <li v-for="item in menu" class="transition-colors" :class="{
                    'hover:text-cyan-200': props.variant === 'transparent',
                    'hover:text-cyan-400': props.variant === 'dark',
                    'hover:text-cyan-600': props.variant === 'white',
                }">
                    <a :href=item.href>{{ item.title }}</a>
                </li>
            </ul>
            <!-- Mobile Hamburger Button -->
            <button @click="isOpen = true" class="md:hidden p-2 -mr-2" aria-label="Open menu">
                <Menu class="w-6 h-6" />
            </button>
        </nav>
    </header>

    <!-- Mobile Sidebar Overlay -->
    <Teleport to="body">
        <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="isOpen" class="fixed inset-0 z-[100] md:hidden">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black/50" @click="isOpen = false"></div>
                <!-- Sidebar Panel -->
                <Transition enter-active-class="transition-transform duration-300 ease-out"
                    enter-from-class="translate-x-full" enter-to-class="translate-x-0"
                    leave-active-class="transition-transform duration-300 ease-in" leave-from-class="translate-x-0"
                    leave-to-class="translate-x-full">
                    <div v-if="isOpen"
                        class="absolute right-0 top-0 h-full w-full bg-neutral-900 text-white flex flex-col">
                        <!-- Sidebar Header -->
                        <div class="flex items-center justify-between px-4 h-14 shrink-0">
                            <div class="flex items-center">
                                <LogoHebron class="size-10" />
                                <div class="ml-2 tracking-tight">
                                    <p class="text-sm font-bold leading-tight">Hebron Family Church</p>
                                    <p class="text-xs leading-tight">GPdI Gading Serpong</p>
                                </div>
                            </div>
                            <button @click="isOpen = false" class="p-2 -mr-2" aria-label="Close menu">
                                <X class="w-6 h-6" />
                            </button>
                        </div>
                        <!-- Sidebar Menu -->
                        <ul
                            class="flex flex-col items-center justify-center flex-1 gap-8 text-xl uppercase font-semibold">
                            <li v-for="item in menu" class="transition-colors hover:text-cyan-400">
                                <a :href="item.href" @click="isOpen = false">{{ item.title }}</a>
                            </li>
                        </ul>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>
