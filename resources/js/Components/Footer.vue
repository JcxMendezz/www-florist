<template>
    <footer class="bg-gray-500">
        <!-- Logo Section -->
        <div class="bg-black py-4">
            <div class="container mx-auto px-4">
                <img
                    src="/images/Logo White.svg"
                    alt="MIA'S FLORIST"
                    class="mx-auto h-12"
                />
            </div>
        </div>

        <!-- Main Footer Content -->
        <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <!-- Navigation Links -->
                <div class="space-y-4">
                    <nav
                        class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white"
                    >
                        <a href="/products" class="hover:text-amber-400"
                            >Products</a
                        >
                        <a href="/about" class="hover:text-amber-400"
                            >About us</a
                        >
                        <a href="/contact" class="hover:text-amber-400"
                            >Contact</a
                        >
                        <a href="/faq" class="hover:text-amber-400"
                            >Frequent questions</a
                        >
                        <a href="/blog" class="hover:text-amber-400"
                            >Visit our blog</a
                        >
                    </nav>
                    <button
                        class="w-full rounded-md bg-amber-400 px-4 py-2 text-gray-900 transition-colors hover:bg-amber-500"
                    >
                        Login System
                    </button>
                </div>

                <!-- Subscribe Form -->
                <div class="space-y-4">
                    <h3 class="text-sm font-medium text-white">
                        Subscribe for Exclusive Email Offers
                    </h3>
                    <div class="space-y-3">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            class="w-full rounded-md bg-white px-4 py-2 text-gray-800 placeholder-gray-400"
                        />
                        <button
                            class="w-full rounded-md bg-amber-400 px-4 py-2 text-gray-900 transition-colors hover:bg-amber-500"
                        >
                            Sign me up
                        </button>
                    </div>
                </div>

                <!-- Contact Information -->
                <div class="space-y-4 text-white">
                    <div>
                        <div class="mb-1 flex items-center gap-2 text-sm">
                            <i class="pi pi-map-marker"></i>
                            <span class="font-medium">Location</span>
                        </div>
                        <p class="text-sm text-gray-300">
                            35 Pearl St suite 103, New Britain, CT 06051
                        </p>
                    </div>
                    <div>
                        <div class="mb-1 flex items-center gap-2 text-sm">
                            <i class="pi pi-envelope"></i>
                            <span class="font-medium">Email</span>
                        </div>
                        <p class="text-sm text-gray-300">info@wiseatp.com</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-gray-700">
            <div class="container mx-auto px-4 py-4">
                <div
                    class="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row"
                >
                    <div class="flex gap-4">
                        <a href="/terms" class="hover:text-white"
                            >Terms & Conditions</a
                        >
                        <a href="/privacy" class="hover:text-white"
                            >Privacy Policy</a
                        >
                    </div>
                    <p>2021 Copyright © Ingenuity & Solutions</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
// El componente no requiere lógica adicional
</script>

<style scoped>
/* Aseguramos que los enlaces tengan una transición suave */
a {
    transition: color 0.2s ease-in-out;
}

/* Estilo para los inputs cuando están enfocados */
input:focus {
    outline: 2px solid #ffa724;
    outline-offset: 2px;
}

/* Aseguramos que los botones tengan el mismo estilo al estar enfocados */
button:focus {
    outline: 2px solid #ffa724;
    outline-offset: 2px;
}
</style>
