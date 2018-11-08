<template>
    <div>
        <app-navigation/>
        <app-hero/>
        <our-mission/>
        <app-tools/>
        <news/>
        <footer-section/>
    </div>
</template>

<script>
import AppNavigation from '~/components/Navigation.vue';
import AppHero from '~/components/Hero.vue';
import AppTools from '~/components/Tools.vue';
import News from '~/components/News.vue';
import FooterSection from '~/components/FooterSection.vue';
import OurMission from '../components/OurMission.vue';

export default {
    async fetch({ store }) {
        await store.dispatch('deetoo/fetchAll');
    },
    components: {
        OurMission,
        AppNavigation,
        AppHero,
        AppTools,
        News,
        FooterSection,
    },
};
</script>
