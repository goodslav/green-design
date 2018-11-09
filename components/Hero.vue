<template>
    <section class="min-h-screen">
        <div>
            <div class="d2-hero-title">
                <div>
                    <h1
                        class="text-5xl mb-12 font-semibold"
                    >British Divers Marine Life Rescue</h1>
                    <h3 class="text-xl font-normal leading-normal">
                        BDMLR is an organisation dedicated to the rescue and well-being of all marine animals in
                        distress around the UK.
                    </h3>
                    <button class="hero-button">Become a Medic</button>
                </div>
            </div>
            <div
                class="w-full h-full z-10 absolute pin-t bg-cover bg-black opacity-50"
            ></div>
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
            if (this.active + 1 < this.gallery.images.length) {
                this.active++;
            } else {
                this.active = 0;
            }
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
    },
};
</script>
