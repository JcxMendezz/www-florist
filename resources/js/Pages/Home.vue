<template>
    <MainLayout>
        <div class="container mx-auto px-4">
            <Hero />
            <Banner />
            <ProductCard />
            <Images />
        </div>
    </MainLayout>
</template>

<script>
import MainLayout from '../Layouts/MainLayout.vue';
import Hero from '../Components/Hero.vue';
import Banner from '../Components/Banner.vue';
import ProductCard from '../Components/ProductCard.vue';
import Images from '@/Components/Images.vue';

export default {
    components: {
        MainLayout,
        Hero,
        Banner,
        ProductCard,
        Images,
    },
};
</script>
