<template>
    <section class="w-full">
        <flux-parallax
            :src="_first(gallery.images).url"
            class="section-portfolio__banner"
            height="400px"
            offset="80%"
            type="relative"
        >
            <div class="shell">
                <img
                    :src="logo.url"
                    :alt="logo.title"
                    :title="organization.name"
                    class="inline-block"
                    width="49"
                    height="49"
                >
                <h2 class="text-4xl font-bold text-white text-center w-full mt-2">Works</h2>
                <ul class="section-portfolio__breadcrumbs">
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li class="active">Works</li>
                </ul>
            </div>
        </flux-parallax>
        <h2 class="text-4xl font-bold text-black text-center w-full mt-8">Обекти</h2>
        <p class="text-lg text-center text-teal mb-24 w-full">Нашите проекти</p>
        <vue-picture-swipe :items="items"></vue-picture-swipe>
    </section>
</template>

<script>
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';
import { FluxParallax } from 'vue-flux';
import VuePictureSwipe from 'vue-picture-swipe';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    components: {
        FluxParallax,
        VuePictureSwipe,
    },
    data() {
        return {
            items: [
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/64x64',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background', // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/64x64',
                    w: 1200,
                    h: 900,
                },
            ],
        };
    },
    computed: {
        ...mapGetters(['galleries', 'organization']),
        gallery() {
            return this._find(this.galleries, { id: '26b54c30-6da9-11e9-ab45-0242ac13000f' });
        },
        logo() {
            return this._find(this.organization.images, { order: 1 });
        },
    },
};
</script>

<style scoped>
.section-portfolio__banner {
    @apply w-full;

    &:before {
        content: '';
        display: none;
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        z-index: 0;
        width: 318px;
        height: 318px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0) 25%, #050506 100%);
        opacity: 0.5;
    }
}

@media (min-width: 480px) {
    .section-portfolio__banner:before {
        display: block;
        top: -40%;
    }
}

@media (min-width: 768px) {
    .section-portfolio__banner:before {
        top: -15%;
    }
}

.section-portfolio__breadcrumbs {
    @apply inline-block list-reset font-normal text-white text-base ml-auto mr-auto relative z-50;

    & > li {
        @apply inline-block text-white;
    }

    & a,
    & a:hover,
    & a:focus,
    & a:active {
        @apply text-white;
    }

    & a:hover,
    & a:focus,
    & a:active {
        @apply underline opacity-50;
    }
}
</style>
