<template>
    <section class="flex flex-wrap">
        <div
            class="w-full lg:w-2/3 bg-cover bg-center"
            :style="getStyle(ourMission)"
        >
            <div
                class="bg-blue-lightest px-16 py-24 h-full w-full"
                style="opacity: 0.95"
            >
                <h2
                    class="text-3xl font-bold mb-8"
                >{{ ourMission.title }}</h2>
                <h3
                    class="text-base font-normal leading-loose italic mb-6"
                    v-html="ourMission.description"
                ></h3>
                <button
                    class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded-full text-base font-normal leading-normal"
                >Learn More</button>
            </div>
        </div>
        <div
            class="w-full lg:w-1/3 text-teal-lightest bg-cover bg-center"
            :style="getStyle(becomeAHero)"
        >
            <div
                class="bg-teal-dark px-10 py-24 h-full w-full"
                style="opacity: 0.95"
            >
                <h2
                    class="text-3xl font-bold mb-8"
                >{{ becomeAHero.title }}</h2>
                <h3
                    class="text-base font-normal leading-loose italic mb-6"
                    v-html="becomeAHero.description"
                ></h3>
                <button
                    class="bg-teal hover:bg-teal-light text-teal-lightest py-2 px-4 rounded-full text-base font-normal leading-normal"
                >Apply Now</button>
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
    },
    methods: {
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
