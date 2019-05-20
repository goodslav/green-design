<template>
    <section class="w-full">
        <flux-parallax
            :src="_first(gallery.images).url"
            class="section-portfolio__banner"
            height="600px"
            type="relative"
        >
            <div class="shell flex flex-col z-10">
                <img
                    :src="logo.url"
                    :alt="logo.title"
                    :title="organization.name"
                >
                <h2 class="text-4xl font-bold text-white text-center w-full mt-2">Портфолио</h2>
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
        <ul class="nav-custom">
            <li>
                <a
                    class="active"
                    data-isotope-filter="*"
                    data-isotope-group="gallery"
                    href="#"
                >Всички</a>
            </li>
            <li>
                <a
                    data-isotope-filter="Type 1"
                    data-isotope-group="gallery"
                    href="#"
                >Публични</a>
            </li>
            <li>
                <a
                    data-isotope-filter="Type 2"
                    data-isotope-group="gallery"
                    href="#"
                >Градини</a>
            </li>
            <li>
                <a
                    data-isotope-filter="Type 3"
                    data-isotope-group="gallery"
                    href="#"
                >Дворове</a>
            </li>
            <li>
                <a
                    data-isotope-filter="Type 4"
                    data-isotope-group="gallery"
                    href="#"
                >Поливни системи</a>
            </li>
        </ul>

        <section class="flex flex-wrap justify-center py-10">
            <div
                class="flex flex-wrap justify-center items-stretch -mx-6"
                style="max-width:1900px;"
            >
                <article
                    :style="getStyle()"
                    class="section-portfolio__gallery-item md:w-1/2"
                >
                    <header class="mb-6">
                        <h3 class="text-3xl font-normal leading-loose">Проект 1</h3>
                        <p class="text-lg">Плевен, България</p>
                    </header>
                    <button class="button button-white button-arrow">
                        Виж Проект
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
                </article>

                <article
                    :style="getStyle()"
                    class="section-portfolio__gallery-item md:w-1/2"
                >
                    <header class="mb-6">
                        <h3 class="text-3xl font-normal leading-loose">Проект 2</h3>
                        <p class="text-lg">Ловеч, България</p>
                    </header>
                    <button class="button button-white button-arrow">
                        Виж Проект
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
                </article>

                <article
                    :style="getStyle()"
                    class="section-portfolio__gallery-item md:w-1/2"
                >
                    <header class="mb-6">
                        <h3 class="text-3xl font-normal leading-loose">Проект 3</h3>
                        <p class="text-lg">Русе, България</p>
                    </header>
                    <button class="button button-white button-arrow">
                        Виж Проект
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
                </article>

                <article
                    :style="getStyle()"
                    class="section-portfolio__gallery-item md:w-1/2"
                >
                    <header class="mb-6">
                        <h3 class="text-3xl font-normal leading-loose">Проект 4</h3>
                        <p class="text-lg">София, България</p>
                    </header>
                    <button class="button button-white button-arrow">
                        Виж Проект
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
                </article>

                <article
                    :style="getStyle()"
                    class="section-portfolio__gallery-item md:w-1/2"
                >
                    <header class="mb-6">
                        <h3 class="text-3xl font-normal leading-loose">Проект 5</h3>
                        <p class="text-lg">Велико Търново, България</p>
                    </header>
                    <button class="button button-white button-arrow">
                        Виж Проект
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
                </article>

                <article
                    :style="getStyle()"
                    class="section-portfolio__gallery-item md:w-1/2"
                >
                    <header class="mb-6">
                        <h3 class="text-3xl font-normal leading-loose">Проект 6</h3>
                        <p class="text-lg">Пловдив, България</p>
                    </header>
                    <button class="button button-white button-arrow">
                        Виж Проект
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
                </article>
            </div>
        </section>

        <!-- <vue-picture-swipe :items="items"></vue-picture-swipe> -->
    </section>
</template>

<script>
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';
import { FluxParallax } from 'vue-flux';
// import VuePictureSwipe from 'vue-picture-swipe';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    components: {
        FluxParallax,
        // VuePictureSwipe,
    },
    data() {
        return {
            items: [
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/64x64',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background', // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/64x64',
                    w: 1200,
                    h: 900,
                },
            ],
        };
    },
    computed: {
        ...mapGetters(['galleries', 'organization']),
        gallery() {
            return this._find(this.galleries, { id: '26b54c30-6da9-11e9-ab45-0242ac13000f' });
        },
        logo() {
            return this._find(this.organization.images, { order: 1 });
        },
        lawnGallery() {
            return this._find(this.galleries, { id: '605595a0-7ad6-11e9-9399-0242ac13000f' });
        },
    },
    methods: {
        getStyle() {
            if (this._isEmpty(this.lawnGallery.images)) {
                return '';
            }

            return {
                'background-image': `url('${this._first(this.lawnGallery.images).url}')`,
            };
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

.section-portfolio__gallery-item {
    @apply flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat overflow-hidden m-6 text-white text-center;
    height: 300px;
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
