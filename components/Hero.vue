<template>
    <section class="min-h-screen" v-if="!_isEmpty(galleries)">
        <div>
            <div class="d2-hero-title text-shadow--hero">
                <div>
                    <h1 class="md:text-5xl text-3xl mb-6 font-normal leading-tight">
                        Професионални ландшафтни услуги и проектиране
                    </h1>
                    <h3 class="md:text-xl text-base font-normal leading-normal">
                        Ландшафтен дизайн с индивидуален дух и енергия.
                    </h3>
                    <button class="button button-white button-arrow">
                        Виж Проекти
                        <svg x="0px" y="0px" width="13px" height="22px" viewBox="0 0 16 24">
                            <polygon fill="none" points="1,2.5 13,12 1,21.5 " />
                        </svg>
                    </button>

                    <div class="box-nav box-nav-small mt-12">
                        <div @click.prevent="prev" class="swiper-button-prev arrow-left swiper-button-disabled">
                            <svg x="0px" y="0px" width="13px" height="22px" viewBox="0 0 16 24">
                                <polygon fill="none" points="1,2.5 13,12 1,21.5 " />
                            </svg>
                        </div>

                        <div class="wrap-counter">
                            <div class="swiper-pagination swiper-pagination-clickable">
                                <span
                                    v-for="(imageObj, index) in gallery.Images"
                                    :class="
                                        `swiper-pagination-bullet ${
                                            index === active ? 'swiper-pagination-bullet-active' : ''
                                        }`
                                    "
                                    :key="`pagination_bullet_${imageObj.id}`"
                                />
                            </div>
                            <div class="divider-counter">/</div>
                            <div class="total-counter">0{{ gallery.Images.length }}</div>
                        </div>

                        <div @click.prevent="next" class="swiper-button-next arrow-right">
                            <svg x="0px" y="0px" width="13px" height="22px" viewBox="0 0 16 24">
                                <polygon fill="none" points="1,2.5 13,12 1,21.5 " />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <transition-group
                name="fadeHero"
                mode="out-in"
                tag="div"
                class="w-full h-full pin-t"
                style="z-index: -1; background: #000"
            >
                <div
                    v-for="(imageObj, index) in gallery.Images"
                    v-show="active === index"
                    class="w-full h-full absolute pin-t bg-cover bg-center bg-no-repeat"
                    :style="getStyle(imageObj.Image)"
                    :key="`active_image_${imageObj.id}`"
                />
            </transition-group>
        </div>
    </section>
</template>

<script>
import galleryQuery from '~/gql/queries/gallery/gallery.gql';

export default {
    data() {
        return {
            galleries: [],
            active: 0,
            autoplayId: null,
        };
    },
    beforeDestroy() {
        clearInterval(this.autoplayId);
    },
    apollo: {
        galleries: {
            prefetch: true,
            query: galleryQuery,
            variables() {
                return { where: { Identifier: 'main-page-hero-banner', Active: true } };
            },
            result(result, key) {
                if (key === 'galleries' && !result.loading && !this.autoplayId) {
                    this.initAutoplay();
                }
            },
            error(error) {
                // eslint-disable-next-line
                console.log('ERROR: ', error);
            },
        },
    },
    computed: {
        gallery() {
            if (this._isEmpty(this.galleries)) {
                return null;
            }

            return this._first(this.galleries);
        },
    },
    methods: {
        getStyle(image) {
            return {
                'background-image': `url('${this.assetUrlFromObj(image)}')`,
            };
        },
        initAutoplay() {
            this.autoplayId = setInterval(() => {
                this.next();
            }, 4500);
        },
        next() {
            if (this.active + 1 < this.gallery.Images.length) {
                this.active++;
            } else {
                this.active = 0;
            }
        },
        prev() {
            if (this.active - 1 >= 0) {
                this.active--;
            } else {
                this.active = this.gallery.Images.length;
            }
        },
    },
};
</script>
