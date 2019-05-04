<template>
    <div>
        <app-navigation/>
        <app-hero/>
        <services/>
        <app-tools/>
        <parallax/>
        <contacts/>
    </div>
</template>

<script>
import AppNavigation from '~/components/Navigation.vue';
import AppHero from '~/components/Hero.vue';
import AppTools from '~/components/Tools.vue';
import Services from '~/components/Services.vue';
import Contacts from '../components/Contacts.vue';
import Parallax from '../components/Parallax.vue';

export default {
    async fetch({ store }) {
        await store.dispatch('deetoo/fetchAll');
    },
    components: {
        Contacts,
        AppNavigation,
        AppHero,
        AppTools,
        Services,
        Parallax,
    },
};
</script>
