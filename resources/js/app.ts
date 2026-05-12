import { createInertiaApp } from '@inertiajs/vue3';
import Default from './layouts/Default.vue';

const appName = import.meta.env.VITE_APP_NAME || 'Hebron Family Church';

createInertiaApp({
    title: (title) => (title ? `${title} | ${appName}` : appName),
    layout: () => Default,
    progress: {
        color: '#4B5563',
    },
});
