<!-- eslint-disable prettier/prettier -->
<template>
    <div class="bg-pink-50 px-4 py-10 lg:px-20">
        <div
            class="flex flex-col items-center justify-between gap-8 md:flex-row"
        >
            <!-- Flower Delivery -->
            <div class="flex items-center gap-4 text-center md:text-left">
                <img
                    src="/Images/7125203.png"
                    alt="Delivery"
                    class="h-24"
                />
                <div>
                    <h3 class="text-lg font-bold text-pink-600">
                        Flower delivery to:
                    </h3>
                    <p class="text-sm text-gray-600">
                        East Hertford, Hereford, Manchester,<br />
                        Glastonbury, Bolton, Willimantic, West
                    </p>
                    <a href="#" class="font-medium text-pink-600 underline"
                        >Track your order</a
                    >
                </div>
            </div>

            <!-- Our Schedule -->
            <div class="flex items-center gap-4 text-center md:text-left">
                <img
                    src="/Images/activo-2.png"
                    alt="Schedule"
                    class="h-24"
                />
                <div>
                    <h3 class="text-lg font-bold text-pink-600">
                        Our schedule:
                    </h3>
                    <p class="text-sm text-gray-600">
                        From 09:00 am to 04:00 pm<br />
                        Monday to Friday
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Aseguramos espaciado uniforme en pantallas grandes */
@media (min-width: 768px) {
    .gap-8 {
        gap: 2rem;
    }
}
</style>
