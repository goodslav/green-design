<template>
    <div class="landing-page">
        <app-navigation/>
        <app-hero/>
        <services ref="AboutUs"/>
        <app-tools/>
        <parallax/>
        <contacts ref="Contacts"/>
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
    watch: {
        $route() {
            this.scrollToHashTarget();
        },
    },
    mounted() {
        this.scrollToHashTarget();
    },
    methods: {
        scrollToHashTarget() {
            const targetRef = this._trimStart(this.$route.hash, '#');

            if (targetRef) {
                const target = this.$refs[targetRef].$el;

                if (target) {
                    this.$SmoothScroll(target, 500);
                }
            }
        },
    },
};
</script>
