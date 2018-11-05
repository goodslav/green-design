<template>
    <div>
        <app-navigation/>
        <app-hero/>
        <footer-section/>
    </div>
</template>

<script>
import AppNavigation from '~/components/Navigation.vue';
import AppHero from '~/components/Hero.vue';
import FooterSection from '~/components/FooterSection.vue';

export default {
    async fetch({ store }) {
        await store.dispatch('deetoo/fetchAll');
    },
    components: {
        AppNavigation,
        AppHero,
        FooterSection,
    },
};
</script>
