<template>
    <div class="bg-gray-50 py-8">
        <div class="mx-auto max-w-6xl px-4">
            <!-- Título -->
            <h2 class="mb-6 text-center text-2xl font-bold text-gray-800">
                Top <span class="text-pink-500">sellers</span>
            </h2>

            <!-- Carrusel -->
            <div class="relative">
                <!-- Contenedor de los Productos -->
                <div
                    class="flex transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateX(-${currentPage * 100}%)` }"
                >
                    <div
                        v-for="(product, index) in products"
                        :key="index"
                        class="w-full flex-shrink-0 px-4 sm:w-1/2 md:w-1/4"
                    >
                        <div
                            class="relative rounded-lg bg-white shadow-md transition duration-300 hover:shadow-lg"
                        >
                            <!-- Badge -->
                            <div
                                v-if="product.badge"
                                class="absolute left-3 top-3"
                            >
                                <span
                                    :class="[
                                        'rounded-full px-3 py-1 text-xs font-bold uppercase',
                                        product.badge === 'New'
                                            ? 'bg-yellow-500 text-white'
                                            : 'bg-red-500 text-white',
                                    ]"
                                >
                                    {{ product.badge }}
                                </span>
                            </div>

                            <!-- Imagen del Producto -->
                            <div>
                                <img
                                    :src="product.image"
                                    :alt="product.title"
                                    class="h-56 w-full rounded-t-lg object-cover"
                                />
                            </div>

                            <!-- Detalles del Producto -->
                            <div class="p-4">
                                <h3
                                    class="mb-2 text-lg font-semibold text-gray-800"
                                >
                                    {{ product.title }}
                                </h3>

                                <div class="flex items-center justify-between">
                                    <span
                                        class="text-xl font-bold text-pink-500"
                                    >
                                        {{ product.price }}
                                    </span>
                                    <span
                                        v-if="product.originalPrice"
                                        class="text-sm text-gray-400 line-through"
                                    >
                                        {{ product.originalPrice }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Botones de Navegación -->
                <button
                    v-if="currentPage > 0"
                    class="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-pink-500 p-3 text-white shadow-md hover:bg-pink-600 focus:outline-none"
                    @click="prevSlide"
                >
                    <i class="pi pi-chevron-left"></i>
                </button>
                <button
                    v-if="currentPage < totalPages - 1"
                    class="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-pink-500 p-3 text-white shadow-md hover:bg-pink-600 focus:outline-none"
                    @click="nextSlide"
                >
                    <i class="pi pi-chevron-right"></i>
                </button>
            </div>

            <!-- Indicadores -->
            <div class="mt-6 flex justify-center space-x-2">
                <button
                    v-for="(dot, i) in totalPages"
                    :key="i"
                    @click="setPage(i)"
                    :class="[
                        'h-3 w-3 rounded-full border-2 border-pink-500',
                        currentPage === i ? 'bg-pink-500' : 'bg-white',
                    ]"
                ></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopSellersCarousel',
    data() {
        return {
            products: [
                {
                    title: 'Floral arrangement Roses in Lux',
                    price: '$99,00',
                    originalPrice: null,
                    badge: 'New',
                    image: '/Images/Grupo 9122.png',
                },
                {
                    title: 'Floral arrangement of the Day Roses in Black',
                    price: '$89,00',
                    originalPrice: null,
                    badge: null,
                    image: '/Images/Grupo 9123.png',
                },
                {
                    title: 'Floral bouquet of Pink and White roses',
                    price: '$49,00',
                    originalPrice: '$109,00',
                    badge: '60% off',
                    image: '/Images/sieirfhek.png',
                },
                {
                    title: 'Floral arrangement of Roses of the Day in a Golden',
                    price: '$99,00',
                    originalPrice: null,
                    badge: null,
                    image: '/Images/Grupo 9124.png',
                },
            ],
            currentPage: 0,
        };
    },
    computed: {
        totalPages() {
            // Calcula cuántas páginas son necesarias para mostrar todos los productos (4 productos por página)
            return Math.ceil(this.products.length / 4);
        },
    },
    methods: {
        nextSlide() {
            if (this.currentPage < this.totalPages - 1) {
                this.currentPage++;
            }
        },
        prevSlide() {
            if (this.currentPage > 0) {
                this.currentPage--;
            }
        },
        setPage(index) {
            this.currentPage = index;
        },
    },
};
</script>

<style scoped>
/* Estilos personalizados para el carrusel */
</style>
