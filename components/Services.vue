<template>
    <section class="section-services flex flex-wrap justify-center">
        <div class="w-full lg:w-1/2 text-white bg-cover bg-center">
            <section class="flex flex-wrap justify-center" v-if="!_isEmpty(articles)">
                <article
                    v-for="(article, index) in myArticles"
                    :class="getArticleClass(index)"
                    :key="`service_article_card_${article.id}`"
                >
                    <a href="#" class="inline-block w-full h-full no-underline">
                        <div class="image-card">
                            <h3 :class="getArticleHeadingClass(index)">{{ article.Title }}</h3>
                            <h5 v-html="article.Content" :class="getArticleDescriptionClass(index)"></h5>
                            <div class="arrow-small-down">
                                <svg x="0px" y="0px" width="19px" height="11px" viewBox="2 0.5 18 14.5">
                                    <g>
                                        <polygon fill="none" points="20.406,1.5 10.906,13.5 1.406,1.5" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </a>
                </article>
            </section>
        </div>

        <div class="w-full lg:w-1/2 bg-white bg-cover bg-center" id="AboutUs">
            <section
                class="section-mission__subsection section-mission__subsection--light"
                v-if="!_isEmpty(organizations) && !_isEmpty(articles)"
            >
                <h2 class="text-3xl font-normal mb-8 text-black">{{ ourMission.Title }}</h2>
                <h3
                    class="text-base text-justify font-normal leading-loose italic mb-6"
                    v-html="organization.Description"
                ></h3>
                <button class="button button-primary button-arrow">
                    Прочети Още
                    <svg x="0px" y="0px" width="13px" height="22px" viewBox="0 0 16 24">
                        <polygon fill="none" points="1,2.5 13,12 1,21.5 " />
                    </svg>
                </button>
            </section>
        </div>
    </section>
</template>

<script>
import articlesQuery from '~/gql/queries/article/articles.gql';
import organizationQuery from '~/gql/queries/organization/organization.gql';

export default {
    data() {
        return {
            articles: [],
            organizations: [],
        };
    },
    apollo: {
        articles: {
            prefetch: true,
            query: articlesQuery,
        },
        organizations: {
            prefetch: true,
            query: organizationQuery,
            variables() {
                return { where: { Identifier: 'green-design-pleven' } };
            },
        },
    },
    computed: {
        organization() {
            if (this._isEmpty(this.organizations)) {
                return null;
            }

            return this._first(this.organizations);
        },
        ourMission() {
            return this._find(this.articles, { Identifier: 'about-us-section', Active: true });
        },
        myArticles() {
            return this._filter(
                this.articles,
                article =>
                    article.Active && !!this._find(article.categories, { Identifier: 'main-page-services-category' }),
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
