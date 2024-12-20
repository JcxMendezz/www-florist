<template>
    <div>
        <Navbar />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';

export default {
    components: {
        Navbar,
        // eslint-disable-next-line vue/no-reserved-component-names
        Footer,
    },
};
</script>
