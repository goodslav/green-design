<template>
    <section class="flex flex-wrap">
        <a
            href="#"
            class="w-full md:w-1/2 lg:w-1/4 no-underline bg-cover bg-center"
            v-for="article in myArticles"
            :style="getStyle(article)"
        >
            <div class="image-card">
                <h3
                    class="text-2xl font-bold mb-4 text-sunset-blue-lightest"
                >{{ article.title }}</h3>
                <h5
                    class="text-sm flex-grow leading-normal font-medium mb-8"
                    v-html="article.description"
                ></h5>
                <a href="#" class="section-tools__link">Learn More</a>
            </div>
        </a>
    </section>
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
                article => article.category.id === '6df158de-e12f-11e8-b23c-02420a000145',
            );
        },
    },
    methods: {
        getStyle(article) {
            return {
                'background-image': `url('${article.images[0].url}')`,
            };
        },
    },
};
</script>

<style>
.image-card {
    @apply flex
    flex-col w-full h-full text-white px-8 py-24;
    text-shadow: 1px 2px 2px rgba(34, 77, 116, 0.5);
    background: rgba(0, 0, 0, 0.6);
    transition: all 0.5s;
}

.image-card:hover {
    @apply pb-32 pt-16;
    background: rgba(0, 0, 0, 0.5);
}

.section-tools__link {
    @apply no-underline text-teal font-semibold;
    text-shadow: 1px 2px 2px rgba(34, 77, 116, 0.5);
    transition: all 0.25s ease-in-out;
}

.section-tools__link:hover {
    @apply text-teal-lighter;
}
</style>
