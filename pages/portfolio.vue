<template>
    <div class="portfolio-page">
        <app-navigation/>
        <portfolio/>
        <app-footer/>
    </div>
</template>

<script>
import AppNavigation from '~/components/Navigation.vue';
import Portfolio from '~/components/Portfolio.vue';
import AppFooter from '~/components/Footer.vue';

export default {
    async fetch({ store }) {
        await store.dispatch('deetoo/fetchAll');
    },
    components: {
        AppNavigation,
        Portfolio,
        AppFooter,
    },
};
</script>
