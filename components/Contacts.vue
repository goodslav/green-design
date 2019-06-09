<template>
    <section
        class="flex flex-wrap"
        id="Contact-Us"
    >
        <div class="w-full lg:w-1/2 text-white bg-cover bg-center">
            <div class="h-full w-full">
                <div
                    class="h-full"
                    ref="mapElement"
                ></div>
            </div>
        </div>

        <div class="w-full lg:w-1/2 bg-cover bg-center">
            <div class="section-contacts__subsection section-contacts__subsection--light bg-zuckerberg-backache">
                <h2
                    class="text-3xl font-normal mb-24 text-black text-center lg:justify-end lg:text-right w-full"
                >Контактна информация</h2>
                <!-- <h3
                    class="text-base font-normal leading-loose italic mb-6"
                    v-html="contacts.description"
                ></h3>-->
                <div class="text-base font-normal leading-loose w-full">
                    <div class="flex items-center flex-no-wrap justify-center lg:justify-end -m-2 text-center">
                        <fa-icon
                            :icon="['fas', 'home']"
                            class="mx-2 text-black"
                        />
                        <span class="mx-2">{{ addresses }}</span>
                    </div>
                    <div class="flex items-center flex-no-wrap justify-center lg:justify-end -m-2 text-center">
                        <fa-icon
                            :icon="['fas', 'phone']"
                            class="mx-2 text-black"
                        />
                        <span class="mx-2">{{ phones }}</span>
                    </div>
                    <div class="flex items-center flex-wrap justify-center lg:justify-end text-base -m-4">
                        <a
                            href="mailto:info@green-design.bg"
                            class="no-underline text-purple-darker hover:text-purple font-semibold mx-2 my-4"
                        >info@green-design.bg</a>
                        <span
                            class="flex items-center justify-center flex-wrap sm:border-l border-blue-light sm:pl-3 mx-2"
                        >
                            <span>Cъздаденo благодарение на</span>
                            <a
                                href="https://www.deetoo.co.uk/"
                                target="_blank"
                                class="deetoo__logo inline-block ml-2"
                            >
                                <img
                                    src="https://deetoo-constructor.s3.eu-west-2.amazonaws.com/25475cd4-db6a-11e8-b116-0242ac130003-ts-1542213503.svg"
                                    title="DeeToo Logo"
                                    alt="DeeToo company logo"
                                    style="height:0.875rem;"
                                >
                            </a>
                        </span>
                    </div>

                    <div class="section-contacts__copyright lg:justify-end lg:text-right">© 2019 Зелен Дизайн ООД</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';
import { MAP_LOCATIONS, MAP_STYLES, MAP_LAT, MAP_LNG, MAP_ZOOM } from '~/utilities/consts';
import gmapsInit from '~/utilities/gmaps';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    computed: {
        ...mapGetters(['organization']),
        logo() {
            return this._find(this.organization.images, { order: 1 });
        },
        phones() {
            return this._join(this._map(this.organization.phones, 'number'), ', ');
        },
        addresses() {
            return this._join(
                this._map(
                    this.organization.addresses,
                    address =>
                        `${address.line_1}, ${address.city}, ${address.county}, ${address.postcode}, ${
                            address.country
                        }`,
                ),
                ', ',
            );
        },
    },
    async mounted() {
        try {
            const google = await gmapsInit();
            const mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: MAP_ZOOM,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(MAP_LAT, MAP_LNG),

                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: MAP_STYLES,
            };
            const { mapElement } = this.$refs;
            const map = new google.maps.Map(mapElement, mapOptions);

            MAP_LOCATIONS.map(location => new google.maps.Marker({ ...location, map }));
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    },
};
</script>

<style scoped>
.section-contacts__subsection--dark {
    @apply bg-sunset-gray;
    text-shadow: 1px 2px 2px rgba(75, 63, 91, 0.2);
}
.section-contacts__subsection--light {
    @apply text-teal-light;
    text-shadow: none;
}

.section-contacts__subsection {
    @apply flex flex-col items-center justify-between px-8 py-12 h-full w-full;
}

@screen lg {
    .section-contacts__subsection {
        @apply px-16;
    }
}

.section-contacts__copyright {
    @apply w-full pt-10 text-sm text-center leading-normal;
}
</style>
