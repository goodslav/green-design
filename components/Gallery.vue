<template>
    <section class="w-full" v-if="_isEmpty(gallery)">
        <h2 class="text-4xl font-bold text-black text-center w-full mt-20">Проект 1</h2>
        <p class="text-lg text-center text-teal mb-12 w-full">Галерия с изображения</p>
        <section class="flex flex-wrap justify-center py-10">
            <div class="flex flex-wrap justify-center items-stretch -mx-6" style="max-width:1900px;">
                <vue-picture-swipe :items="items"></vue-picture-swipe>
            </div>
        </section>
    </section>
</template>

<script>
import VuePictureSwipe from 'vue-picture-swipe';
// import galleryQuery from '~/gql/queries/gallery/galleryById.gql';

export default {
    components: {
        VuePictureSwipe,
    },
    data() {
        return {
            gallery: Object,
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
    /* apollo: {
        gallery: {
            query: galleryQuery,
            prefetch: ({ route }) => ({ id: route.params.id }),
            variables() {
                return { id: this.$route.params.id };
            },
        },
    }, */
};
</script>

<style scoped></style>
