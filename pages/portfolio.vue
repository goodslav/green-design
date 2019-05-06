<template>
    <div>
        <app-navigation/>
        <portfolio/>
    </div>
</template>

<script>
import AppNavigation from '~/components/Navigation.vue';
import Portfolio from '~/components/Portfolio.vue';

export default {
    async fetch({ store }) {
        await store.dispatch('deetoo/fetchAll');
    },
    components: {
        AppNavigation,
        Portfolio,
    },
};
</script>
