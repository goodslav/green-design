<template>
    <div>
        <h3
            class="text-center pt-16 text-3xl font-semibold"
        >Latest News</h3>
        <div class="flex flex-wrap justify-center py-6">
            <div
                class="rounded overflow-hidden shadow-lg max-w-xs w-full my-6 mx-6"
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
        ...mapGetters(['articles']),
        myArticles() {
            return this._filter(
                this.articles,
                article => article.category.id === '6ca70ce6-e344-11e8-ab89-02420a000145',
            );
        },
    },
    methods: {
        getStyle(article) {
            return {
                'background-image': `url('${article.images[0].url}')`,
            };
        },
        getDescription(article) {
            return this.truncateText(article.description.replace(/<[^>]+>/g, ''));
        },
    },
};
</script>
