<template>
    <section class="flex flex-wrap">
        <div
            class="w-full lg:w-1/2 text-white bg-cover bg-center"
            :style="getStyle(becomeAHero)"
        >
            <div class="section-mission__subsection section-mission__subsection--light">
                <h2 class="text-3xl font-bold mb-8 text-sunset-blue-lightest">{{ becomeAHero.title }}</h2>
                <h3
                    class="text-base font-normal leading-loose italic mb-6"
                    v-html="becomeAHero.description"
                ></h3>
                <button class="section-mission__button section-mission__button--light">Apply Now</button>
            </div>
        </div>

        <div
            class="w-full lg:w-1/2 bg-cover bg-center"
            :style="getStyle(ourMission)"
        >
            <div class="section-mission__subsection section-mission__subsection--dark">
                <h2 class="text-3xl font-bold mb-8">{{ ourMission.title }}</h2>
                <h3
                    class="text-base font-normal leading-loose italic mb-6"
                    v-html="ourMission.description"
                ></h3>
                <button class="section-mission__button section-mission__button--dark">Learn More</button>
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

<style>
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
    @apply bg-teal-dark;
    text-shadow: 1px 2px 2px rgba(34, 77, 116, 0.3);
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
