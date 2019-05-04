<template>
    <section class="section-services flex flex-wrap justify-center">
        <div
            class="w-full lg:w-1/2 text-white bg-cover bg-center"
            :style="getStyle(becomeAHero)"
        >
            <!-- <div class="section-mission__subsection section-mission__subsection--light">
                <h2 class="text-3xl font-bold mb-8 text-sunset-blue-lightest">{{ becomeAHero.title }}</h2>
                <h3
                    class="text-base font-normal leading-loose italic mb-6"
                    v-html="becomeAHero.description"
                ></h3>
                <button class="section-mission__button section-mission__button--light">Apply Now</button>
            </div>-->
            <section class="flex flex-wrap justify-center">
                <article
                    v-for="(article, index)  in myArticles"
                    :class="getArticleClass(index)"
                >
                    <a
                        href="#"
                        class="inline-block w-full h-full no-underline"
                    >
                        <div class="image-card">
                            <h3 :class="getArticleHeadingClass(index)">{{ article.title }}</h3>
                            <h5
                                v-html="article.description"
                                :class="getArticleDescriptionClass(index)"
                            ></h5>
                            <div class="arrow-small-down">
                                <svg
                                    x="0px"
                                    y="0px"
                                    width="19px"
                                    height="11px"
                                    viewBox="2 0.5 18 14.5"
                                >
                                    <g>
                                        <polygon
                                            fill="none"
                                            points="20.406,1.5 10.906,13.5 1.406,1.5"
                                        ></polygon>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </a>
                </article>
            </section>
        </div>

        <div class="w-full lg:w-1/2 bg-white bg-cover bg-center">
            <div class="section-mission__subsection section-mission__subsection--light">
                <h2 class="text-3xl font-normal mb-8 text-black">{{ ourMission.title }}</h2>
                <h3
                    class="text-base font-normal leading-loose italic mb-6"
                    v-html="ourMission.description"
                ></h3>
                <button class="button button-primary button-arrow">
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
        </div>
    </section>
</template>

<script>
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    computed: {
        ...mapGetters(['articles']),
        ourMission() {
            return this._find(this.articles, { id: '2541887a-e34b-11e8-a653-02420a000145' });
        },
        becomeAHero() {
            return this._find(this.articles, { id: '2feb5b98-e34b-11e8-a760-02420a000145' });
        },
        myArticles() {
            return this._filter(
                this.articles,
                article => article.category.id === 'eaa33002-65f8-11e9-b2df-0242ac13000f',
            );
        },
    },
    methods: {
        getArticleClass(articleIndex) {
            return [
                'w-full',
                'md:w-1/2',
                { 'bg-grey-dark': articleIndex === 0 },
                { 'bg-grey': articleIndex === 1 },
                { 'bg-teal': articleIndex === 2 },
                { 'bg-grey-lighter': articleIndex === 3 },
            ];
        },
        getArticleHeadingClass(articleIndex) {
            return [
                'text-3xl',
                'font-normal',
                'mb-4',
                { 'text-white': articleIndex !== 3 },
                { 'text-teal': articleIndex === 3 },
                { 'text-shadow-none': articleIndex === 3 },
            ];
        },
        getArticleDescriptionClass(articleIndex) {
            return [
                'text-sm',
                'flex-grow',
                'leading-normal',
                'font-medium',
                'mb-8',
                { 'text-teal-light': articleIndex === 3 },
                { 'text-shadow-none': articleIndex === 3 },
                { 'opacity-50': articleIndex === 0 || articleIndex === 1 },
            ];
        },
        getStyle(article) {
            if (this._isEmpty(article.images)) {
                return '';
            }

            return {
                'background-image': `url('${article.images[0].url}')`,
            };
        },
    },
};
</script>

<style scoped>
.section-services {
    & .image-card {
        @apply items-center text-center;
        background: transparent;
    }
}

.section-mission__subsection {
    @apply px-8 py-12 h-full w-full;
    opacity: 0.95;
}

@screen lg {
    .section-mission__subsection {
        @apply px-16 py-24;
    }
}

.section-mission__subsection--dark {
    @apply bg-sunset-gray;
    text-shadow: 1px 2px 2px rgba(75, 63, 91, 0.2);
}
.section-mission__subsection--light {
    @apply bg-white text-teal-light opacity-100;
    text-shadow: none;
}
.section-mission__button {
    @apply py-2 px-4 rounded-full text-base font-normal leading-normal;
    transition: all 0.25s ease-in-out;
}

.section-mission__button--dark {
    @apply bg-sunset-navy text-white;
}

.section-mission__button--dark:hover {
    @apply bg-sunset-navy-light;
}

.section-mission__button--light {
    @apply bg-sunset-bisque-darkest text-white;
}

.section-mission__button--light:hover {
    @apply bg-sunset-bisque-darker;
}
</style>
