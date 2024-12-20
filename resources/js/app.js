import '../css/app.css'; // Tus estilos locales
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import PrimeVue from 'primevue/config';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

// Iconos de PrimeVue
import 'primeicons/primeicons.css';

const appName = import.meta.env.VITE_APP_NAME || 'MiaFlowers';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue) // Configuración del plugin PrimeVue
            .use(ZiggyVue) // Configuración del plugin Ziggy
            .mount(el);
    },
    progress: {
        color: '#4B5563', // Cambia el color si lo necesitas
    },
});
