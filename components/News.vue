<template>
    <article
        class="section-news relative"
        :style="getStyle(latestNews)"
    >
        <div class="section-news__overlay"></div>
        <h3
            class="text-center pt-16 text-4xl text-shadow text-white font-semibold relative z-10"
        >Latest News</h3>
        <article
            class="flex flex-wrap justify-center py-12 px-6"
        >
            <figure
                class="shadow-lg md:max-w-md w-full my-4 mx-4 flex flex-col sm:flex-row"
                v-for="article in myArticles"
            >
                <div class="media" :style="getStyle(article)"></div>
                <figcaption class="w-auto flex-grow">
                    <header>
                        <h3
                            class="text-sunset-blue-lightest font-normal text-xl mb-4"
                        >{{ article.title }}</h3>
                        <small
                            class="text-sm text-white"
                        >{{ formatDate(article.created_at) }}</small>
                    </header>
                    <div class="body">
                        <p
                            class="text-white text-xs leading-normal pt-4 pb-2 text-justify"
                            v-text="getDescription(article)"
                        ></p>
                        <a
                            href="#"
                            class="text-sm no-underline text-sunset-cyan hover:text-sunset-blue-light font-semibold"
                        >Learn More</a>
                    </div>
                </figcaption>
            </figure>
        </article>
    </article>
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

    & .media {
        @apply bg-cover bg-center w-full h-64 flex-no-shrink;
        transition: all 0.25s ease;
        zoom: 1;
    }

    @screen sm {
        & .media {
            @apply w-48 h-full;
        }

        & figure {
            &:hover .media {
                transform: scale(1.15);
            }
        }
    }

    & figure {
        @apply overflow-hidden relative;
    }

    & figcaption {
        @apply bg-blue-darkest p-5 z-20;
    }

    & .body {
        @apply w-full;
    }
}

.section-news__overlay {
    @apply absolute h-full w-full z-0;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0, rgba(0, 0, 0, 0.45) 100%);
    background-color: white;
    opacity: 0.8;
}
</style>
