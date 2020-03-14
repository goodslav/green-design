<template>
    <section class="section-tools flex flex-wrap" v-if="!_isEmpty(categories)">
        <a
            href="#"
            class="w-full md:w-1/2 lg:w-1/4 no-underline bg-cover bg-center"
            v-for="article in myArticles"
            :style="getStyle(article)"
            :key="`tool_article_card_${article.id}`"
        >
            <div class="image-card">
                <h3 class="text-2xl font-normal mb-4 text-white">{{ article.Title }}</h3>
                <h5 class="text-sm flex-grow leading-normal font-medium" v-html="article.Content"></h5>
                <button class="button button-white button-arrow">
                    Прочети Още
                    <svg x="0px" y="0px" width="13px" height="22px" viewBox="0 0 16 24">
                        <polygon fill="none" points="1,2.5 13,12 1,21.5 " />
                    </svg>
                </button>
            </div>
        </a>
    </section>
</template>

<script>
import categoryQuery from '~/gql/queries/category/category.gql';

export default {
    data() {
        return {
            categories: [],
            active: 0,
        };
    },
    apollo: {
        categories: {
            prefetch: true,
            query: categoryQuery,
            variables() {
                return { where: { Identifier: 'main-page-project-types-category', Active: true } };
            },
        },
    },
    computed: {
        category() {
            if (this._isEmpty(this.categories)) {
                return null;
            }

            return this._first(this.categories);
        },
        myArticles() {
            return this._filter(this._get(this.category, 'articles', []), 'Active');
        },
    },
    methods: {
        getStyle(article) {
            return {
                'background-image': `url('${this.assetUrlFromObj(this._first(article.Media))}')`,
            };
        },
    },
};
</script>

<style scoped>
.section-tools {
    & .image-card {
        @apply items-center text-center;
    }
}

.section-tools__link {
    @apply no-underline text-sunset-cyan font-semibold;
    text-shadow: 1px 2px 2px rgba(34, 77, 116, 0.5);
    transition: all 0.25s ease-in-out;
}

.section-tools__link:hover {
    @apply text-sunset-blue-light;
}
</style>
