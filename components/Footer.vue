<template>
    <footer
        :style="footerStyle"
        class="bg-footer-default bg-image text-white"
    >
        <div class="flex flex-wrap items-start justify-center xl:flex-row py-16 -m-2">
            <div class="flex flex-col items-center text-center justify-center w-full xl:w-1/4 p-2">
                <h4 class="leading-loose text-xl">За Връзка</h4>
                <div class="py-3">{{ addresses }}</div>
                <div class="py-3 text-justify">
                    <div>{{ phones }}</div>
                    <div>E-mail: info@green-design.bg</div>
                </div>
                <div class="pt-3">
                    <fa-icon
                        :icon="['fas', 'phone']"
                        class="mx-2"
                    />
                    <fa-icon
                        :icon="['fas', 'phone']"
                        class="mx-2"
                    />
                    <fa-icon
                        :icon="['fas', 'phone']"
                        class="mx-2"
                    />
                    <fa-icon
                        :icon="['fas', 'phone']"
                        class="mx-2"
                    />
                </div>
            </div>
            <div class="flex flex-col items-center text-center justify-center w-full xl:w-1/4 p-2">
                <h4 class="leading-loose text-xl">Изготвено от</h4>
                <div class="py-3">
                    <img
                        src="https://s3.eu-west-2.amazonaws.com/deetoo-uk/art/logo-blue.svg"
                        alt="DeeToo Logo Purple"
                        title="DeeToo"
                        width="150px"
                        class="py-2"
                    >
                    <div class="py-3">
                        <div>DeeToo Solutions Ltd.</div>
                        <div>E-mail: office@deetoo.co.uk</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-panel py-4 text-white flex justify-center">
            <div
                v-html="footerCategory.description"
                class="max-w-6xl text-center"
                style="line-height: 1.625;"
            />
        </div>
    </footer>
</template>

<script>
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    computed: {
        ...mapGetters(['categories', 'organization']),
        footerCategory() {
            return this._find(this.categories, { id: 'e6ffb4da-7a6f-11e9-9e89-0242ac13000f' });
        },
        footerImage() {
            return this._find(this.footerCategory.images, { order: 1 });
        },
        footerStyle() {
            return {
                'background-image': `url('${this.footerImage.url}')`,
            };
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
};
</script>

<style>
.bg-footer-default {
    background-color: #778a6e;
}

.footer-panel {
    background: rgba(0, 0, 0, 0.3);
}
</style>
