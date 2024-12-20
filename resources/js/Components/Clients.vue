<template>
    <section class="py-12">
        <div class="container mx-auto px-4">
            <h2
                class="mb-10 flex items-center justify-center gap-2 text-center text-xl font-semibold"
            >
                <span class="text-amber-500">••</span>
                Our <span class="text-black-900">payment methods</span>
                <span class="text-amber-500">••</span>
            </h2>

            <div
                class="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
            >
                <!-- Logos de métodos de pago -->
                <img
                    src="/images/visa.png"
                    alt="Visa"
                    class="h-8 object-contain grayscale transition-all hover:grayscale-0"
                />
                <img
                    src="/images/mastercard.png"
                    alt="Mastercard"
                    class="h-8 object-contain grayscale transition-all hover:grayscale-0"
                />
                <img
                    src="/images/american-express-1.png"
                    alt="American Express"
                    class="h-8 object-contain grayscale transition-all hover:grayscale-0"
                />
                <img
                    src="/images/paypal-3.png"
                    alt="PayPal"
                    class="h-8 object-contain grayscale transition-all hover:grayscale-0"
                />
                <img
                    src="/images/discover-2.png"
                    alt="Discover"
                    class="h-8 object-contain grayscale transition-all hover:grayscale-0"
                />
                <img
                    src="/images/diners-club-international-2.png"
                    alt="Diners Club International"
                    class="h-8 object-contain grayscale transition-all hover:grayscale-0"
                />
                <img
                    src="/images/jcb-emblem-logo.png"
                    alt="JCB"
                    class="h-8 object-contain grayscale transition-all hover:grayscale-0"
                />
                <img
                    src="/images/western-union-2.png"
                    alt="Western Union"
                    class="h-8 object-contain grayscale transition-all hover:grayscale-0"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
// No se requiere lógica adicional para este componente
</script>

<style scoped>
/* Aseguramos que todos los logos tengan un tamaño consistente */
img {
    max-width: 120px;
    filter: grayscale(100%);
}

img:hover {
    filter: grayscale(0%);
}
</style>
