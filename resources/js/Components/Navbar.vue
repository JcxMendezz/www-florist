<template>
    <div class="card">
        <!-- Top Bar - Solo visible en desktop -->
        <div
            class="border-surface-200 hidden items-center justify-between border-b px-4 py-2 lg:flex"
        >
            <div class="flex items-center gap-2">
                <i class="pi pi-phone text-pink-500"></i>
                <span class="text-600 text-sm">+1 (800) 312 - 2121</span>
            </div>
            <div class="flex items-center gap-2">
                <i class="pi pi-map-marker text-pink-500"></i>
                <span class="text-600 text-sm"
                    >172 14th Street, Office 503, NY</span
                >
            </div>
        </div>

        <!-- Menubar Principal -->
        <Menubar :model="items" class="border-none">
            <!-- Logo and Search Bar -->
            <template #start>
                <div
                    class="flex w-full items-center justify-between lg:justify-start"
                >
                    <div class="flex lg:hidden">
                        <Button
                            icon="pi pi-bars"
                            text
                            @click="visible = true"
                        />
                    </div>
                    <div class="flex items-center lg:mr-4">
                        <img
                            src="/Images/Logo.svg"
                            alt="Mia's Florist Logo"
                            class="h-8"
                        />
                    </div>
                    <div class="relative hidden flex-1 md:block lg:ml-4">
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-search left-4" />
                            <InputText
                                placeholder="Search"
                                type="text"
                                class="p-inputtext-sm w-full pl-10"
                            />
                        </span>
                    </div>
                </div>
            </template>

            <!-- Items del Menú - Hidden on mobile -->
            <template #item="{ item, props, hasSubmenu }">
                <a
                    v-ripple
                    class="hover:surface-100 mx-2 hidden items-center rounded-md p-4 transition-colors lg:flex"
                    v-bind="props.action"
                >
                    <i
                        :class="[item.icon, 'mr-3 text-lg']"
                        v-if="item.icon"
                    ></i>
                    <span class="text-base font-medium">{{ item.label }}</span>
                    <Badge v-if="item.badge" severity="danger" class="ml-3">{{
                        item.badge
                    }}</Badge>
                    <i v-if="hasSubmenu" class="pi pi-angle-down ml-auto"></i>
                </a>
            </template>

            <!-- End Section -->
            <template #end>
                <div class="flex items-center gap-3">
                    <!-- Carrito -->
                    <Button
                        icon="pi pi-shopping-cart"
                        badge="0"
                        severity="secondary"
                        text
                        aria-label="Cart"
                    />

                    <!-- Menú de Usuario -->
                    <Button
                        icon="pi pi-user"
                        severity="secondary"
                        text
                        aria-label="User menu"
                    />
                </div>
            </template>
        </Menubar>

        <!-- Sidebar Menu Mobile -->
        <Sidebar
            v-model:visible="visible"
            position="left"
            class="w-full sm:w-80"
        >
            <template #header>
                <!-- Barra de búsqueda en móvil -->
                <div class="p-input-icon-left w-full">
                    <i class="pi pi-search" />
                    <InputText placeholder="Search" type="text" />
                </div>
            </template>
            <div class="flex flex-col gap-2">
                <div v-for="(item, i) in items" :key="i">
                    <Button
                        :label="item.label"
                        :icon="item.icon"
                        text
                        class="w-full justify-start"
                        @click="navigateTo(item)"
                    />
                </div>
            </div>
        </Sidebar>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';
import Badge from 'primevue/badge';

const visible = ref(false);

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        to: '/',
    },
    {
        label: 'Products',
        icon: 'pi pi-shopping-bag',
        to: '/products',
    },
    {
        label: 'About',
        icon: 'pi pi-info-circle',
        to: '/about',
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        to: '/contact',
    },
]);
</script>

<style scoped>
.p-menubar {
    padding: 0.5rem 1rem;
}

@media (max-width: 768px) {
    .p-menubar-button {
        display: flex !important;
    }

    .p-menubar-root-list {
        display: none !important;
    }
}

/* Ajustes adicionales para el tema */
:deep(.p-menubar) {
    background: transparent;
}

:deep(.p-button.p-button-text:enabled:hover) {
    background: var(--surface-100);
    color: var(--primary-color);
}
</style>
