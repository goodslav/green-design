<template>
    <div class="gallery-page">
        <app-navigation/>
        <gallery/>
        <app-footer/>
    </div>
</template>

<script>
import AppNavigation from '~/components/Navigation.vue';
import Gallery from '~/components/Gallery.vue';
import AppFooter from '~/components/Footer.vue';

export default {
    components: {
        AppNavigation,
        Gallery,
        AppFooter,
    },
};
</script>
