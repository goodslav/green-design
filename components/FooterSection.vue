<template>
    <footer>
        <div class="section-footer container text-shadow--text">
            <div class="w-full lg:w-2/5 p-4">
                <div class="mb-4 items-center flex">
                    <img
                        :src="logo.url"
                        :alt="logo.title"
                        title="DeeToo"
                        class="w-16 mr-4"
                        data-fade-offset="-600"
                    >
                    <h4
                        class="text-2xl text-white font-semibold leading-tight mb-0"
                    >British Divers
                        <br>Marine Life Rescue
                    </h4>
                </div>
                <p class="italic text-sm mb-2">
                    Sed aliquam lacus id orci egestas scelerisque. Ut lobortis varius turpis, ac interdum leo posuere
                    vitae.
                </p>
                <div class="text-base flex flex-wrap items-center">
                    <a
                        href="mailto:info@bdmlr.org.uk"
                        class="text-sunset-bisque-light hover:text-orange-lighter mr-2"
                    >info@bdmlr.org.uk</a>
                    <span
                        class="flex items-center flex-no-shrink sm:border-l border-blue-light sm:pl-2 my-2 text-white"
                    >
                        <span>Proudly created by</span>
                        <a
                            href="https://www.deetoo.co.uk/"
                            target="_blank"
                            class="deetoo__logo inline-block ml-2"
                        >
                            <img
                                src="https://s3.eu-west-2.amazonaws.com/deetoo-uk/art/logo-blue.svg"
                                title="DeeToo Logo"
                                alt="DeeToo company logo"
                                style="height: 14px;"
                            >
                        </a>
                    </span>
                </div>
            </div>
            <div class="w-full md:w-1/3 lg:w-1/5 p-4">
                <h5 class="text-white">Links</h5>
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
                <h5 class="text-white">Rescue Hotline</h5>
                <div class="mb-2">
                    <a
                        href="tel:01825765546"
                        class="text-sunset-bisque-light hover:text-orange-lighter text-xl"
                    >01825 765 546</a>
                    <h4
                        class="text-base font-normal"
                    >Monday-Friday 9am-5pm</h4>
                </div>
                <div>
                    <a
                        href="tel:07787433412"
                        class="text-sunset-bisque-light hover:text-orange-lighter text-xl"
                    >07787 433 412</a>
                    <h4
                        class="text-base font-normal"
                    >Out of office hours</h4>
                </div>
            </div>
            <div class="w-full md:w-1/3 lg:w-1/5 p-4">
                <h5 class="text-white">Address</h5>
                <address
                    class="text-sm leading-normal whitespace-pre-line mb-4"
                >Lime House Regency Close
                    Uckfield
                    East Sussex
                    TN22 1DS
                    UK
                </address>
            </div>
        </div>
        <div class="section-footer__copyright">
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

<style>
.section-footer {
    @apply flex flex-wrap p-4 w-full bg-blue-darkest text-blue-lighter;
}

.section-footer__copyright {
    @apply w-full p-4 text-blue-lightest text-center text-xs bg-black leading-normal;
}
</style>
