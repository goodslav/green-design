<template>
    <div class="portfolio-page">
        <app-navigation />
        <portfolio />
        <app-footer />
    </div>
</template>

<script>
import AppNavigation from '~/components/Navigation.vue';
import Portfolio from '~/components/Portfolio.vue';
import AppFooter from '~/components/Footer.vue';

export default {
    components: {
        AppNavigation,
        Portfolio,
        AppFooter,
    },
};
</script>

<style>
.portfolio-page {
    max-width: 100vw;
    overflow: hidden;
}
</style>
