<template>
    <section class="w-full" v-if="!_isEmpty(organizations) && !_isEmpty(galleries)">
        <flux-parallax
            :src="assetUrlFromObj(_first(gallery.Images).Image)"
            class="section-portfolio__banner"
            height="600px"
            type="relative"
        >
            <div class="shell flex flex-col z-10">
                <img :src="assetUrlFromObj(logo)" :alt="logo.name" :title="organization.Name" />
                <h2 class="text-4xl font-bold text-white text-center w-full mt-2">{{ gallery.Name }}</h2>
                <ul class="section-portfolio__breadcrumbs">
                    <li>
                        <nuxt-link to="/">Начало</nuxt-link>
                    </li>
                    <li class="active">Обекти</li>
                </ul>
            </div>
        </flux-parallax>

        <h2 class="text-4xl font-bold text-black text-center w-full mt-20">Обекти</h2>

        <p class="text-lg text-center text-teal mb-12 w-full">Нашите проекти</p>

        <client-only v-if="!_isEmpty(categories)">
            <ul class="nav-custom">
                <li>
                    <a :class="[!filterOption ? 'active' : '']" @click.prevent="onClickShowAll" href="">Всички</a>
                </li>
                <li v-for="projectCategory in projectCategories" :key="`project_category_tab_${projectCategory.id}`">
                    <a
                        :class="[
                            filterOption === 'filterByCategory' && selectedCategoryId === projectCategory.id
                                ? 'active'
                                : '',
                        ]"
                        @click.prevent="onFilterClick(projectCategory.id)"
                        href=""
                        >{{ projectCategory.Name }}</a
                    >
                </li>
            </ul>

            <section class="flex flex-wrap justify-center py-10">
                <isotope
                    ref="cpt"
                    id="root_isotope"
                    class="section-portfolio__gallery-holder"
                    :options="getOptions()"
                    :list="projects"
                    v-images-loaded:on.progress="layout"
                    @filter="filterOption = arguments[0]"
                    @sort="sortOption = arguments[0]"
                >
                    <article
                        v-for="project in projects"
                        :key="`project_card_${project.id}`"
                        class="section-portfolio__gallery-item"
                    >
                        <div class="section-portfolio__gallery-item-inner" :style="getStyle()">
                            <header class="mb-6">
                                <h3 class="text-3xl font-normal leading-loose">{{ project.Name }}</h3>
                                <p class="text-lg">{{ project.Description_Short }}</p>
                                <img :src="getImgSrc()" class="hidden" alt="Not found" />
                            </header>

                            <nuxt-link to="gallery/project-1" class="button button-white button-arrow">
                                Виж Проект
                                <svg x="0px" y="0px" width="13px" height="22px" viewBox="0 0 16 24">
                                    <polygon fill="none" points="1,2.5 13,12 1,21.5 " />
                                </svg>
                            </nuxt-link>
                        </div>
                    </article>
                </isotope>
            </section>
        </client-only>
    </section>
</template>

<script>
import { FluxParallax } from 'vue-flux';
import categoriesQuery from '~/gql/queries/category/categories.gql';
import galleriesQuery from '~/gql/queries/gallery/galleries.gql';
import organizationQuery from '~/gql/queries/organization/organization.gql';

export default {
    components: {
        FluxParallax,
    },
    data() {
        return {
            organizations: [],
            categories: [],
            galleries: [],
            selectedCategoryId: null,
            sortOption: null,
            filterOption: null,
        };
    },
    apollo: {
        organizations: {
            prefetch: true,
            query: organizationQuery,
            variables() {
                return { where: { Identifier: 'green-design-pleven' } };
            },
        },
        categories: {
            prefetch: true,
            query: categoriesQuery,
        },
        galleries: {
            prefetch: true,
            query: galleriesQuery,
        },
    },
    computed: {
        organization() {
            if (this._isEmpty(this.organizations)) {
                return null;
            }

            return this._first(this.organizations);
        },
        projectCategories() {
            if (this._isEmpty(this.categories)) {
                return [];
            }

            return this._filter(this.categories, category => category.Active && !this._isEmpty(category.projects));
        },
        projects() {
            // let projects;

            const projects = this._flatMap(this.projectCategories, 'projects');

            /* if (!this.selectedCategoryId) {
                projects = this._flatMap(this.projectCategories, 'projects');
            } else {
                projects = this._flatMap(
                    this._find(this.projectCategories, { id: this.selectedCategoryId }),
                    'projects',
                );
            } */

            return this._filter(projects, 'Active');
        },
        gallery() {
            return this._find(this.galleries, { Identifier: 'portfolio-page-hero-banner', Active: true });
        },
        logo() {
            return this._first(this.organization.Logos);
        },
        lawnGallery() {
            return this._find(this.galleries, { Identifier: 'portfolio-page-lawns-gallery', Active: true });
        },
    },
    methods: {
        layout() {
            this.$refs.cpt.layout('masonry');
        },
        getOptions() {
            const _this = this;

            return {
                itemSelector: '.section-portfolio__gallery-item',
                percentPosition: true,
                masonry: {
                    gutter: 0,
                    isFitWidth: true,
                    columnWidth: '.section-portfolio__gallery-item',
                },
                getSortData: {
                    id: 'id',
                    name(project) {
                        return project.Name.toLowerCase();
                    },
                },
                getFilterData: {
                    showAll() {
                        return true;
                    },
                    filterByCategory(project) {
                        return _this._find(project.categories, { id: _this.selectedCategoryId });
                    },
                },
            };
        },
        sort(key) {
            this.isotopeSort(key);
            this.sortOption = key;
        },
        filter(key) {
            if (this.filterOption === key) {
                // eslint-disable-next-line no-param-reassign
                key = null;
            }
            this.isotopeFilter(key);
            this.filterOption = key;
        },
        onClickShowAll() {
            this.selectedCategoryId = null;
            this.$refs.cpt.filter('showAll');
        },
        onFilterClick(projectCategoryId) {
            this.selectedCategoryId = projectCategoryId;
            this.$refs.cpt.filter('filterByCategory');
        },
        getStyle() {
            if (this._isEmpty(this.lawnGallery.Images)) {
                return '';
            }

            return {
                'background-image': `url('${this.assetUrlFromObj(this._first(this.lawnGallery.Images).Image)}')`,
            };
        },
        getImgSrc() {
            if (this._isEmpty(this.lawnGallery.Images)) {
                return '';
            }

            return this.assetUrlFromObj(this._first(this.lawnGallery.Images).Image);
        },
    },
};
</script>

<style scoped>
.section-portfolio__banner {
    @apply w-full;

    &:before {
        @apply absolute hidden z-0 opacity-50;
        content: '';
        top: 0;
        left: 50%;
        width: 458px;
        height: 458px;
        transform: translateX(-50%) rotate(45deg);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0) 25%, #050506 100%);
    }
}

.section-portfolio__gallery-holder {
    @apply flex flex-wrap justify-center items-stretch overflow-hidden;
    max-width: 100vw;
}

.section-portfolio__gallery-item {
    @apply flex items-center justify-center py-4 overflow-hidden;
    width: calc(100vw - 2rem);
    height: 300px;
}

.section-portfolio__gallery-item-inner {
    @apply flex flex-col items-center justify-center w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden text-white text-center;
}

@screen md {
    .section-portfolio__gallery-item {
        @apply w-1/2 px-4;
    }
}

@screen lg {
    .section-portfolio__gallery-item {
        height: 350px;
    }
}

@screen xl {
    .section-portfolio__gallery-item {
        width: 560px !important;
        height: 510px;
    }
}

@media (min-width: 768px) {
    .section-portfolio__banner:before {
        display: block;
        top: -27%;
    }
}

.section-portfolio__breadcrumbs {
    @apply inline-block list-reset font-bold text-white text-sm mt-1 ml-auto mr-auto relative z-50 uppercase;

    & > li {
        @apply relative inline-block pr-8 text-white align-middle;

        &:last-child {
            @apply pr-0;

            &:after {
                display: none;
            }
        }

        &:after {
            @apply absolute pin-t;
            content: '/';
            right: 10px;
        }
    }

    & a,
    & a:hover,
    & a:focus,
    & a:active {
        @apply text-white no-underline;
        transition: opacity 0.25s ease-in-out;
    }

    & a:hover,
    & a:focus,
    & a:active {
        @apply underline opacity-75;
    }
}

.nav-custom {
    @apply flex list-reset overflow-hidden justify-center flex-wrap;

    & li {
        @apply mt-2 ml-1 mr-1;
    }

    & a {
        @apply block py-2 px-5 text-white text-center no-underline;
        min-width: 122px;
        letter-spacing: 0.025em;
        transition: 0.3s;
        background: #778a6e;

        &:hover,
        &.active {
            background-color: #7e7e7e;
        }
    }
}
</style>
