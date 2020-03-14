<template>
    <section class="flex flex-wrap" id="Contact-Us">
        <div class="section-contacts__map-container">
            <div class="h-full w-full">
                <div class="h-full" ref="mapElement"></div>
            </div>
        </div>

        <div class="w-full lg:w-1/2 bg-cover bg-center">
            <div class="section-contacts__subsection section-contacts__subsection--light bg-zuckerberg-backache">
                <h2 class="text-3xl font-normal mb-24 text-black text-center lg:justify-end lg:text-right w-full">
                    Контактна информация
                </h2>
                <!-- <h3
                    class="text-base font-normal leading-loose italic mb-6"
                    v-html="contacts.description"
                ></h3>-->
                <div class="text-base font-normal leading-loose w-full" v-if="!_isEmpty(organizations)">
                    <div
                        class="flex items-center flex-no-wrap justify-center lg:justify-end -m-2 lg:text-right text-center"
                    >
                        <span class="mx-2 mb-1 flex items-center">
                            <fa-icon :icon="['fas', 'home']" class="mx-2 text-black" />
                            <span v-html="addresses" />
                        </span>
                    </div>
                    <div class="flex items-center flex-no-wrap justify-center lg:justify-end -m-2 text-right">
                        <span class="mx-2 my-1 flex items-center">
                            <fa-icon :icon="['fas', 'phone']" class="mx-2 text-black" />
                            <span v-html="phones" />
                        </span>
                    </div>
                    <div class="flex items-center flex-wrap justify-center lg:justify-end text-base -m-4">
                        <a
                            :href="`mailto:${organization.Email}`"
                            class="no-underline text-purple-darker hover:text-purple font-semibold mx-2 my-4"
                            >{{ organization.Email }}</a
                        >
                        <span
                            class="flex items-center justify-center flex-wrap sm:border-l border-blue-light sm:pl-3 mx-2"
                        >
                            <span>Cъздаденo благодарение на</span>
                            <a href="https://www.deetoo.co.uk/" target="_blank" class="deetoo__logo inline-block ml-2">
                                <img
                                    src="https://deetoo-constructor.s3.eu-west-2.amazonaws.com/25475cd4-db6a-11e8-b116-0242ac130003-ts-1542213503.svg"
                                    title="DeeToo Logo"
                                    alt="DeeToo company logo"
                                    style="height:0.875rem;"
                                />
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
import gmapsInit from '~/utilities/gmaps';
import organizationQuery from '~/gql/queries/organization/organization.gql';

export default {
    data() {
        return {
            organizations: [],
        };
    },
    apollo: {
        organizations: {
            prefetch: true,
            query: organizationQuery,
            variables() {
                return { where: { Identifier: 'green-design-pleven' } };
            },
            result(result, key) {
                if (key === 'organizations' && !result.loading) {
                    this.initMap();
                }
            },
            error(error) {
                // eslint-disable-next-line
                console.log('ERROR: ', error);
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
        mapInfo() {
            return this.organization.Map_Info;
        },
        phones() {
            return this._join(this._map(this._filter(this.organization.Phones, 'Active'), 'Number'), ', ');
        },
        addresses() {
            return this._join(
                this._map(
                    this._filter(this.organization.Addresses, 'Active'),
                    address =>
                        `${address.Line_1}, ${address.Line_2 ? `${address.Line_2},` : ''} ${address.City}, ${
                            address.County ? `${address.County},` : ''
                        } ${address.Postcode ? `${address.Postcode},` : ''} ${address.Country}`,
                ),
                ',<br/>',
            );
        },
    },
    methods: {
        async initMap() {
            try {
                const google = await gmapsInit();
                const mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: this.mapInfo.MAP_ZOOM,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(this.mapInfo.MAP_LAT, this.mapInfo.MAP_LNG),

                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: this.mapInfo.MAP_STYLES,
                };
                const { mapElement } = this.$refs;
                const map = new google.maps.Map(mapElement, mapOptions);

                this.mapInfo.MAP_LOCATIONS.map(location => new google.maps.Marker({ ...location, map }));
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>
.section-contacts__map-container {
    @apply w-full text-white bg-cover bg-center;
    min-height: 350px;
}

@screen lg {
    .section-contacts__map-container {
        @apply w-1/2;
    }
}

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
