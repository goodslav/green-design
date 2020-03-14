<template>
    <section class="flex w-full" v-if="!_isEmpty(galleries)">
        <flux-parallax
            :src="assetUrlFromObj(_first(gallery.Images).Image)"
            class="w-full"
            height="400px"
            offset="80%"
            type="relative"
        >
            <div class="smoked">
                <span class="absolute w-full h-full text-shadow uppercase">проекти</span>
            </div>
        </flux-parallax>
    </section>
</template>

<script>
import { FluxParallax } from 'vue-flux';
import galleryQuery from '~/gql/queries/gallery/gallery.gql';

export default {
    components: {
        FluxParallax,
    },
    data() {
        return {
            galleries: [],
        };
    },
    apollo: {
        galleries: {
            prefetch: true,
            query: galleryQuery,
            variables() {
                return { where: { Identifier: 'portfolio-page-hero-banner', Active: true } };
            },
        },
    },
    computed: {
        gallery() {
            if (this._isEmpty(this.galleries)) {
                return null;
            }

            return this._first(this.galleries);
        },
    },
};
</script>
