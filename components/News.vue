<template>
    <div class="section-news relative" :style="getStyle(latestNews)">
        <div
            class="absolute h-full w-full bg-white z-0"
            style="opacity: 0.75;"
        ></div>
        <h3
            class="text-center pt-16 text-4xl text-shadow font-semibold relative z-10"
        >Latest News</h3>
        <div class="flex flex-wrap justify-center py-6 relative z-10">
            <div
                class="bg-white overflow-hidden shadow-lg max-w-xs w-full my-6 mx-6"
                v-for="article in myArticles"
            >
                <a
                    href="#"
                    class="block h-48 w-full bg-cover bg-center"
                    :style="getStyle(article)"
                ></a>
                <div class="px-4 py-4">
                    <div
                        class="font-normal text-base mb-4"
                    >{{ article.title }}</div>
                    <small
                        class="text-sm text-grey"
                    >{{ formatDate(article.created_at) }}</small>
                    <p
                        class="text-grey-darker text-xs leading-normal pt-4 pb-2 text-justify"
                        v-text="getDescription(article)"
                    ></p>
                    <a
                        href="#"
                        class="text-sm no-underline text-blue hover:text-blue-light font-semibold"
                    >Learn More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    computed: {
        ...mapGetters(['articles', 'galleries']),
        myArticles() {
            return this._filter(
                this.articles,
                article => article.category.id === '6ca70ce6-e344-11e8-ab89-02420a000145',
            );
        },
        latestNews() {
            return this._find(this.galleries, { id: '6f427800-e4f2-11e8-9b45-02420a000145' });
        },
    },
    methods: {
        getStyle(gallery) {
            return {
                'background-image': `url('${gallery.images[0].url}')`,
            };
        },
        getDescription(article) {
            return this.truncateText(article.description.replace(/<[^>]+>/g, ''));
        },
    },
};
</script>

<style>
.section-news {
    @apply w-full bg-cover bg-center;
}
</style>
