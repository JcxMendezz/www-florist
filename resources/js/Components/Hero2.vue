<template>
    <section class="relative overflow-hidden bg-gray-50">
        <div class="container mx-auto px-4 py-16">
            <!-- Hero Text Section -->
            <div class="mb-12">
                <h1 class="mb-4 text-6xl font-bold text-amber-500">Happy</h1>
                <p class="mb-6 text-gray-600">
                    See the best decorations for this celebration
                </p>
                <button
                    class="rounded-md bg-amber-400 px-8 py-3 font-medium text-gray-900 transition-colors hover:bg-amber-500"
                >
                    Shop now
                </button>
            </div>

            <!-- Products Grid -->
            <div class="grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
                <!-- Thanksgiving Rose Decoration -->
                <div
                    class="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                    <div class="relative">
                        <!-- Discount Badge -->
                        <div
                            class="absolute right-4 top-4 rounded-md bg-amber-400 px-2 py-1 text-sm font-medium text-white"
                        >
                            20% off
                        </div>
                        <img
                            src="/Images/Harvest-Roselandvasecc-2_640x_crop_center.png"
                            alt="Thanksgiving rose decoration"
                            class="h-64 w-full object-cover"
                        />
                    </div>
                    <div class="bg-pink-50 p-4">
                        <h3 class="mb-2 text-center font-medium text-gray-900">
                            Thanksgiving rose decoration
                        </h3>
                        <div class="flex items-baseline justify-center gap-2">
                            <span class="text-2xl font-bold text-pink-500"
                                >$89</span
                            >
                            <span class="text-sm font-medium text-pink-500"
                                >.00</span
                            >
                            <span class="text-sm text-gray-400 line-through"
                                >$109.00</span
                            >
                        </div>
                    </div>
                </div>

                <!-- Thanksgiving Pumpkin Decoration -->
                <div
                    class="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                    <div class="relative">
                        <!-- Discount Badge -->
                        <div
                            class="absolute right-4 top-4 rounded-md bg-amber-400 px-2 py-1 text-sm font-medium text-white"
                        >
                            60% off
                        </div>
                        <img
                            src="/images/BF773-11KL_Rsd.png"
                            alt="Thanksgiving Pumpkin Decoration"
                            class="h-64 w-full object-cover"
                        />
                    </div>
                    <div class="bg-pink-50 p-4">
                        <h3 class="mb-2 text-center font-medium text-gray-900">
                            Thanksgiving Pumpkin Decoration
                        </h3>
                        <div class="flex items-baseline justify-center gap-2">
                            <span class="text-2xl font-bold text-pink-500"
                                >$49</span
                            >
                            <span class="text-sm font-medium text-pink-500"
                                >.00</span
                            >
                            <span class="text-sm text-gray-400 line-through"
                                >$109.00</span
                            >
                        </div>
                    </div>
                </div>
            </div>

            <!-- Background Decoration -->
            <div class="absolute bottom-0 right-0 h-full w-1/3">
                <div
                    class="h-full w-full rounded-tl-full bg-pink-100 opacity-50"
                ></div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No se requiere lógica adicional para este componente estático
</script>

<style scoped>
.rounded-2xl {
    border-radius: 1rem;
}

/* Efecto hover suave en las tarjetas */
.hover\:shadow-md:hover {
    box-shadow:
        0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
}
</style>
