<template>
    <section class="section-tools flex flex-wrap">
        <a
            href="#"
            class="w-full md:w-1/2 lg:w-1/4 no-underline bg-cover bg-center"
            v-for="article in myArticles"
            :style="getStyle(article)"
        >
            <div class="image-card">
                <h3
                    class="text-2xl font-normal mb-4 text-white"
                >{{ article.title }}</h3>
                <h5
                    class="text-sm flex-grow leading-normal font-medium"
                    v-html="article.description"
                ></h5>
                <button class="button button-white button-arrow">
                    Прочети Още
                    <svg
                        x="0px"
                        y="0px"
                        width="13px"
                        height="22px"
                        viewBox="0 0 16 24"
                    >
                        <polygon
                            fill="none"
                            points="1,2.5 13,12 1,21.5 "
                        ></polygon>
                    </svg>
                </button>
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
                article => article.category.id === '16eb46ce-682c-11e9-acd6-0242ac13000f',
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
