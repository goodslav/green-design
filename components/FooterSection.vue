<template>
    <footer>
        <div class="flex flex-wrap container p-4 w-full bg-blue-dark text-blue-lighter text-shadow--text">
            <div class="w-full lg:w-2/5 p-4">
                <div class="mb-4 items-center flex">
                    <img
                        :src="logo.url"
                        :alt="logo.title"
                        title="DeeToo"
                        class="w-16 mr-4"
                        data-fade-offset="-600"
                    >
                    <h5 class="text-2xl font-semibold leading-tight mb-0">
                        British Divers<br />
                        Marine Life Rescue
                    </h5>
                </div>
                <p class="text-blue-light italic text-sm mb-4">
                    Sed aliquam lacus id orci egestas scelerisque. Ut lobortis varius turpis, ac interdum leo posuere
                    vitae.
                </p>

                <div class="text-base">
                    email:
                    <a href="mailto:info@bdmlr.org.uk">info@bdmlr.org.uk</a>
                </div>
            </div>
            <div class="w-full md:w-1/3 lg:w-1/5 p-4">
                <h5>Links</h5>
                <ul>
                    <li>
                        <a href="#">Join Us</a>
                    </li>
                    <li>
                        <a href="#">Training</a>
                    </li>
                    <li>
                        <a href="#">Become a Medic</a>
                    </li>
                    <li>
                        <a href="#">UK Marine Mammals</a>
                    </li>
                    <li>
                        <a href="#">Donate</a>
                    </li>
                </ul>
            </div>
            <div class="w-full md:w-1/3 lg:w-1/5 p-4">
                <h5>Rescue Hotline</h5>
                <div class="mb-2">
                    <a href="tel:01825765546" class="text-orange text-xl">01825 765 546</a>
                    <h4 class="text-base font-normal">Monday-Friday 9am-5pm</h4>
                </div>
                <div>
                    <a href="tel:07787433412" class="text-orange text-xl">07787 433 412</a>
                    <h4 class="text-base font-normal">Out of office hours</h4>
                </div>
            </div>
            <div class="w-full md:w-1/3 lg:w-1/5 p-4">
                <h5>Address</h5>

                <address class="text-sm leading-normal whitespace-pre-line mb-4">Lime House Regency Close,
                    Uckfield,
                    East Sussex
                    TN22 1DS
                    UK
                </address>
            </div>
        </div>

        <div class="w-full p-4 text-blue-lightest text-center text-xs bg-blue-darker leading-normal">
            © 2004-2018 British Divers Marine Life Rescue | Dedicated to the rescue of marine life | Registered
            Charity England and Wales no 803438. Scottish Charity no SC039304
        </div>
    </footer>
</template>

<script>
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    computed: {
        ...mapGetters(['organization']),
        logo() {
            return this._find(this.organization.images, { order: 1 });
        },
    },
};
</script>
