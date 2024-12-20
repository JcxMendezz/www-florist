<template>
    <section class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
            <!-- Banner de Descuento -->
            <div
                class="w-full overflow-hidden rounded-2xl hover:shadow-lg md:w-4/5"
            >
                <img
                    src="/images/Grupo -8.png"
                    alt="Sales promotion banner"
                    class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            <!-- Banner de Thanksgiving -->
            <div
                class="w-full overflow-hidden rounded-2xl hover:shadow-lg md:w-4/5"
            >
                <img
                    src="/images/Grupo -9.png"
                    alt="Thanksgiving banner"
                    class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
/* Agregamos hover effects suaves */
.rounded-2xl {
    transition: transform 0.3s ease-in-out;
}

.rounded-2xl:hover {
    transform: translateY(-4px);
}

/* Animación para los círculos decorativos */
@keyframes float {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.rounded-full {
    animation: float 3s ease-in-out infinite;
}
</style>
