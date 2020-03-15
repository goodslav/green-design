<template>
    <section class="w-full overflow-hidden" v-if="!_isEmpty(gallery)">
        <h2 v-if="!_isEmpty(gallery.project)" class="text-4xl font-bold text-black text-center w-full mt-20">
            {{ gallery.project.Name }}
        </h2>
        <h2 v-else class="text-4xl font-bold text-black text-center w-full mt-20">{{ gallery.Name }}</h2>

        <p class="text-lg text-center text-teal mb-12 w-full">
            {{ _get(gallery, 'Description', 'Галерия с изображения') }}
        </p>

        <section class="flex flex-wrap justify-center py-10">
            <div class="flex flex-wrap justify-center items-stretch -mx-6" style="max-width:1400px;">
                <client-only>
                    <LightGallery
                        :images="images"
                        :index="index"
                        interface-color="#6f8b6d"
                        @close="index = null"
                        disable-scroll
                    />
                </client-only>

                <ul class="inline-block list-reset text-center">
                    <li
                        v-for="(thumb, thumbIndex) in images"
                        :key="thumbIndex"
                        @click="index = thumbIndex"
                        class="section-gallery__media-thumbnail-holder"
                    >
                        <img
                            :src="thumb.thumb"
                            :alt="thumb.thumbAlt"
                            :width="thumb.thumbWidth"
                            :height="thumb.thumbHeight"
                            class="section-gallery__media-thumbnail"
                            data-object-fit
                        />
                    </li>
                </ul>
            </div>
        </section>
    </section>
</template>

<script>
import 'objectFitPolyfill';
import galleryQuery from '~/gql/queries/gallery/gallery.gql';

export default {
    data() {
        return {
            galleries: [],
            index: null,
        };
    },
    apollo: {
        galleries: {
            query: galleryQuery,
            prefetch: true,
            variables() {
                return { where: { Identifier: this.$route.params.id, Active: true } };
            },
        },
    },
    mounted() {
        if (process.client) {
            window.objectFitPolyfill();
        }
    },
    computed: {
        gallery() {
            if (this._isEmpty(this.galleries)) {
                return null;
            }

            return this._first(this.galleries);
        },
        images() {
            if (this._isEmpty(this.gallery.Images)) {
                return [];
            }

            return this._map(this._filter(this.gallery.Images, 'Active'), image => {
                const imageUrl = this.assetUrlFromObj(image.Image);
                const url = imageUrl;
                const title = image.Title;
                const thumb = imageUrl;
                const thumbAlt = image.Title;

                return { url, title, thumb, thumbAlt, thumbWidth: 200, thumbHeight: 200 };
            });
        },
    },
};
</script>

<style scoped>
.section-gallery__media-thumbnail-holder {
    @apply inline-block m-2 cursor-pointer;
    transition: opacity 0.25s ease-in-out;

    &:hover,
    &:focus {
        @apply opacity-75;
    }
}

.section-gallery__media-thumbnail {
    width: 200px;
    height: 200px;
    object-fit: cover;
}
</style>
