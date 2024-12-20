<template>
    <div class="bg-gray-50 py-8">
        <div class="container mx-auto px-4">
            <!-- Header con estrellas y título -->
            <div class="mb-8 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <div class="flex">
                        <i
                            v-for="n in 5"
                            :key="n"
                            class="pi pi-star-fill text-amber-400"
                        ></i>
                    </div>
                    <span class="font-medium text-gray-800"
                        >(5-Star) Reviews on Google my Business</span
                    >
                </div>
                <div class="flex gap-2">
                    <button
                        @click="prevSlide"
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition-colors hover:bg-pink-600"
                    >
                        <i class="pi pi-chevron-left"></i>
                    </button>
                    <button
                        @click="nextSlide"
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition-colors hover:bg-pink-600"
                    >
                        <i class="pi pi-chevron-right"></i>
                    </button>
                </div>
            </div>

            <!-- Carrusel -->
            <div class="relative overflow-hidden">
                <div
                    class="flex transition-transform duration-300"
                    :style="{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }"
                >
                    <div
                        v-for="(review, index) in reviews"
                        :key="index"
                        class="w-full flex-shrink-0 px-4"
                    >
                        <div class="flex justify-between gap-6">
                            <div
                                v-for="(item, i) in visibleReviews(index)"
                                :key="i"
                                class="flex flex-1 flex-col items-center rounded-lg bg-pink-50 p-6 text-center"
                                :class="{ 'bg-white': i === 1 }"
                            >
                                <img
                                    :src="item.image"
                                    :alt="item.name"
                                    class="mb-4 h-24 w-24 rounded-full object-cover"
                                />
                                <h3 class="mb-3 text-lg font-bold">
                                    {{ item.title }}
                                </h3>
                                <p class="mb-4 text-sm text-gray-600">
                                    {{ item.comment }}
                                </p>
                                <span class="font-semibold">{{
                                    item.name
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Indicadores -->
            <div class="mt-6 flex justify-center gap-2">
                <button
                    v-for="(_, index) in reviews"
                    :key="index"
                    @click="currentSlide = index"
                    class="h-2 w-2 rounded-full transition-colors"
                    :class="
                        currentSlide === index ? 'bg-pink-500' : 'bg-gray-300'
                    "
                ></button>
            </div>

            <!-- Botón Write a review -->
            <div class="mt-8 text-center">
                <button
                    class="rounded-md bg-amber-400 px-6 py-2 font-semibold text-gray-800 transition-colors hover:bg-amber-500"
                >
                    Write a review
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const currentSlide = ref(0);

const reviews = ref([
    {
        title: 'BEAUTIFUL',
        comment:
            'Very good service...and help when delivering. They had to wait a few minutes and they waited without',
        name: 'Andrea Castaño',
        image: '/Images/asdiafjiesjfs.png',
    },
    {
        title: 'EXCELLENT',
        comment:
            'Delivery on time and the quality of the bouquet is spectacular... a week has passed and it is impeccable.',
        name: 'Jonh cena',
        image: '/images/HOL23_TheMulberry_DL_ARG_334_Web (1).png',
    },
    {
        title: 'BEAUTIFUL',
        comment:
            'The order arrived on time and in shape, the flowers lasted more than 1 week.',
        name: 'Mariana Castañeda',
        image: '/Images/ramo-flores-hermosas-espacio-copia.png',
    },
]);

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % reviews.value.length;
};

const prevSlide = () => {
    currentSlide.value =
        currentSlide.value === 0
            ? reviews.value.length - 1
            : currentSlide.value - 1;
};

const visibleReviews = (startIndex) => {
    const result = [];
    for (let i = 0; i < 3; i++) {
        const index = (startIndex + i) % reviews.value.length;
        result.push(reviews.value[index]);
    }
    return result;
};
</script>

<style scoped>
.bg-pink-50 {
    background-color: #fff1f2;
}

/* Asegura que la transición del carrusel sea suave */
.transition-transform {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
