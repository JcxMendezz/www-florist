<template>
    <MainLayout>
        <div class="container mx-auto px-4">
            <Hero />
            <Banner />
            <ProductCard />
            <Images />
            <Hero2 />
            <Stats />
            <Clients />
        </div>
    </MainLayout>
</template>

<script>
import MainLayout from '../Layouts/MainLayout.vue';
import Hero from '../Components/Hero.vue';
import Banner from '../Components/Banner.vue';
import ProductCard from '../Components/ProductCard.vue';
import Images from '@/Components/Images.vue';
import Stats from '@/Components/Stats.vue';
import Clients from '@/Components/Clients.vue';
import Hero2 from '@/Components/Hero2.vue';

export default {
    components: {
        MainLayout,
        Hero,
        Banner,
        ProductCard,
        Images,
        Stats,
        Clients,
        Hero2,
    },
};
</script>
