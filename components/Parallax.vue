<template>
    <section class="flex w-full">
        <flux-parallax
            :src="_first(gallery.images).url"
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
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';
import { FluxParallax } from 'vue-flux';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    components: {
        FluxParallax,
    },
    computed: {
        ...mapGetters(['galleries']),
        gallery() {
            return this._find(this.galleries, { id: '26b54c30-6da9-11e9-ab45-0242ac13000f' });
        },
    },
};
</script>
