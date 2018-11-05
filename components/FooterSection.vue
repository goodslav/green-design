<template>
    <footer
        class="d2-container d2-hero-gradient justify-center relative z-10 p-12"
    >
        <div class="text-center">
            <img
                :src="logo.url"
                :alt="logo.title"
                title="DeeToo"
                width="100px"
                class="section__fade-trigger slideUp slideUp--delay-2"
                data-fade-offset="-600"
            >
        </div>
    </footer>
</template>

<script>
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    computed: {
        ...mapGetters(['organization']),
        logo() {
            return this._find(this.organization.images, { order: 1 });
        },
    },
};
</script>
