<template>
    <MainLayout>
        <div class="container mx-auto px-4">
            <Hero />
            <Banner />
            <ProductCard />
            <Images />
            <Stats />
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

export default {
    components: {
        MainLayout,
        Hero,
        Banner,
        ProductCard,
        Images,
        Stats,
    },
};
</script>
