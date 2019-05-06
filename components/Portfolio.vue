<template>
    <section class="flex w-full">
        <vue-picture-swipe :items="items"></vue-picture-swipe>
    </section>
</template>

<script>
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';
import VuePictureSwipe from 'vue-picture-swipe';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    components: {
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
        ...mapGetters(['galleries']),
        gallery() {
            return this._find(this.galleries, { id: '26b54c30-6da9-11e9-ab45-0242ac13000f' });
        },
    },
};
</script>
