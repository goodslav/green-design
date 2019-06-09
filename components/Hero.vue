<template>
    <section class="min-h-screen">
        <div>
            <div class="d2-hero-title text-shadow--hero">
                <div>
                    <h1
                        class="md:text-5xl text-3xl mb-6 font-normal leading-tight"
                    >Професионални ландшафтни услуги и проектиране</h1>
                    <h3
                        class="md:text-xl text-base font-normal leading-normal"
                    >Ландшафтен дизайн с индивидуален дух и енергия.</h3>
                    <button class="button button-white button-arrow">
                        Виж Проекти
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

                    <div class="box-nav box-nav-small mt-12">
                        <div
                            @click.prevent="prev"
                            class="swiper-button-prev arrow-left swiper-button-disabled"
                        >
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
                        </div>

                        <div class="wrap-counter">
                            <div class="swiper-pagination swiper-pagination-clickable">
                                <span
                                    v-for="(image, index) in gallery.images"
                                    :class="`swiper-pagination-bullet ${index === active ? 'swiper-pagination-bullet-active' : ''}`"
                                />
                            </div>
                            <div class="divider-counter">/</div>
                            <div class="total-counter">0{{ gallery.images.length }}</div>
                        </div>

                        <div
                            @click.prevent="next"
                            class="swiper-button-next arrow-right"
                        >
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
                    v-for="(image, index) in gallery.images"
                    v-show="active === index"
                    class="w-full h-full absolute pin-t bg-cover bg-center bg-no-repeat"
                    :style="getStyle(image)"
                    :key="`image_${index}`"
                />
            </transition-group>
        </div>
    </section>
</template>

<script>
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    data() {
        return {
            active: 0,
        };
    },
    mounted() {
        setInterval(() => {
            this.next();
        }, 4000);
    },
    computed: {
        ...mapGetters(['galleries']),
        gallery() {
            return this._find(this.galleries, { id: 'd022cd08-e030-11e8-96f3-02420a000145' });
        },
    },
    methods: {
        getStyle(image) {
            return {
                'background-image': `url('${image.url}')`,
            };
        },
        next() {
            if (this.active + 1 < this.gallery.images.length) {
                this.active++;
            } else {
                this.active = 0;
            }
        },
        prev() {
            if (this.active - 1 >= 0) {
                this.active--;
            } else {
                this.active = this.gallery.images.length;
            }
        },
    },
};
</script>
