<template>
    <div>
        <app-navigation/>
        <app-hero/>
        <section class="flex flex-wrap">
             <div class="w-full lg:w-2/3 bg-blue-lightest px-16 py-24">
                 <h2 class="text-3xl font-bold mb-8">Our Mission</h2>
                 <h3 class="text-base font-normal leading-loose italic mb-6">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                     aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum.
                 </h3>
                 <button
                     class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded-full text-base font-normal leading-normal">
                     Learn More
                 </button>
             </div>
             <div class="w-full lg:w-1/3 bg-teal-dark text-teal-lightest px-10 py-24">
                 <h2 class="text-3xl font-bold mb-8">Become a Hero</h2>
                 <h3 class="text-base font-normal leading-loose italic mb-6">
                     "The sea, the great unifier, is man's only hope. Now, as never before, the old phrase has a literal
                     meaning: we are all in the same boat."
                 </h3>

                 <button
                     class="bg-teal hover:bg-teal-light text-teal-lightest py-2 px-4 rounded-full text-base font-normal leading-normal">
                     Apply Now
                 </button>
             </div>
        </section>
        <app-tools/>
        <h3 class="text-center pt-16 text-3xl font-semibold">Latest News</h3>
        <div class="flex px-32 py-8">
            <card class="mx-6 my-8"></card>
            <card class="mx-6 my-8"></card>
            <card class="mx-6 my-8"></card>
        </div>
        <footer-section/>
    </div>
</template>

<script>
import AppNavigation from '~/components/Navigation.vue';
import AppHero from '~/components/Hero.vue';
import AppTools from '~/components/Tools.vue';
import Card from '~/components/Card.vue';
import FooterSection from '~/components/FooterSection.vue';

export default {
    async fetch({ store }) {
        await store.dispatch('deetoo/fetchAll');
    },
    components: {
        AppNavigation,
        AppHero,
        AppTools,
        Card,
        FooterSection,
    },
};
</script>
