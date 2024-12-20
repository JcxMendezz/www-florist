<template>
    <div class="rounded-xl border-2 border-gray-300 bg-gray-100 p-6 shadow-lg">
        <div class="container mx-auto px-4 py-8">
            <div class="flex flex-wrap items-center">
                <!-- Texto y CTA -->
                <div class="w-full space-y-4 lg:w-1/2">
                    <h1 class="font-playfair text-3xl lg:text-5xl font-bold leading-tight text-gray-900">
                        Surprise your favorite person
                    </h1>
                    <div class="flex items-center gap-2">
                        <span class="font-semibold text-pink-500">New</span>
                        <p class="text-gray-600">
                            Rose arrangement with golden vase
                        </p>
                    </div>
                    <div class="flex items-baseline gap-1">
                        <span class="text-3xl lg:text-5xl font-bold text-pink-500">$99</span>
                        <span class="text-xl lg:text-2xl text-pink-500">.00</span>
                    </div>
                    <Button
                        label="Shop now"
                        class="border-none bg-amber-400 px-8 py-3 font-semibold text-gray-900 hover:bg-amber-500"
                    />
                </div>

                <!-- Imagen y Slider -->
                <div class="relative w-full lg:w-1/2">
                    <Carousel
                        :value="products"
                        :numVisible="1"
                        :numScroll="1"
                        :circular="true"
                        class="custom-carousel mx-auto max-w-md"
                    >
                        <template #item="slotProps">
                            <div class="relative p-8">
                                <img
                                    :src="slotProps.data.image"
                                    :alt="slotProps.data.description"
                                    class="animate-float mx-auto h-[200px] lg:h-[400px] w-auto object-contain"
                                />
                                <div class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-pink-50 to-transparent"></div>
                            </div>
                        </template>
                        <template #nav="{ prev, next }">
                            <div class="absolute -bottom-4 right-4 flex gap-2">
                                <button
                                    @click="prev"
                                    class="group rounded-full bg-pink-400 p-2 text-white shadow-lg transition-all duration-300 hover:bg-pink-500 hover:shadow-pink-200"
                                >
                                    <i class="pi pi-chevron-left text-sm transition-transform group-hover:scale-110"></i>
                                </button>
                                <button
                                    @click="next"
                                    class="group rounded-full bg-pink-400 p-2 text-white shadow-lg transition-all duration-300 hover:bg-pink-500 hover:shadow-pink-200"
                                >
                                    <i class="pi pi-chevron-right text-sm transition-transform group-hover:scale-110"></i>
                                </button>
                            </div>
                        </template>
                    </Carousel>

                    <!-- Elementos decorativos -->
                    <div class="absolute -bottom-4 -right-4 -z-10 h-32 lg:h-64 w-32 lg:w-64 rounded-full bg-pink-100"></div>
                    <div class="absolute left-8 top-16 h-2 w-2 animate-ping rounded-full bg-pink-300 delay-300"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';

const products = ref([
    {
        id: 1,
        image: '/Images/Grupo -5.png',
        description: 'Pink and peach roses in golden vase',
    },
    {
        id: 2,
        image: '/Images/FTD-BD223.png',
        description: 'Classic red roses arrangement',
    },
    {
        id: 3,
        image: '/Images/BF773-11KL_Rsd.png',
        description: 'Mixed roses bouquet',
    },
]);
</script>

<style scoped>
.font-playfair {
    font-family: 'Playfair Display', serif;
}

/* Personalización del carousel */
:deep(.custom-carousel .p-carousel-container) {
    padding: 0;
}

:deep(.custom-carousel .p-carousel-items-container) {
    overflow: visible;
}

:deep(.p-carousel .p-carousel-indicators) {
    display: none;
}

/* Animaciones */
@keyframes float {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}
</style>
