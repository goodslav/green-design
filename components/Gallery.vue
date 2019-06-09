<template>
    <section class="w-full">
        <h2 class="text-4xl font-bold text-black text-center w-full mt-20">Проект 1</h2>
        <p class="text-lg text-center text-teal mb-12 w-full">Галерия с изображения</p>

        <section class="flex flex-wrap justify-center py-10">
            <div
                class="flex flex-wrap justify-center items-stretch -mx-6"
                style="max-width:1900px;"
            >
                <vue-picture-swipe :items="items"></vue-picture-swipe>
            </div>
        </section>
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

<style scoped>
</style>
