<template>
    <nav class="main-nav">
        <div class="nav-links">
            <a
                href="#Products"
                v-smooth-scroll="{ duration : 2000 }"
            >News</a>
            <a
                href="#Who-Are-We"
                v-smooth-scroll="{ duration : 2000 }"
            >Join Us</a>
            <a
                href="#Contact-Us"
                v-smooth-scroll="{ duration : 2000 }"
            >Training</a>
        </div>
        <div class="logo">
            <a href="#">
                <img
                    :src="logo.url"
                    :alt="logo.title"
                    :title="organization.name"
                    width="100%"
                >
            </a>
        </div>
        <div class="nav-links justify-end">
            <a
                href="#Products"
                v-smooth-scroll="{ duration : 2000 }"
            >How You Can Help</a>
            <a
                href="#Who-Are-We"
                v-smooth-scroll="{ duration : 2000 }"
            >Donate</a>
            <a
                href="#Contact-Us"
                v-smooth-scroll="{ duration : 2000 }"
            >Contact Us</a>
        </div>
    </nav>
</template>

<script>
// eslint-disable-next-line
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('deetoo');

export default {
    data() {
        return {
            visible: false,
        };
    },
    watch: {
        visible(value) {
            if (process.client) {
                if (value) {
                    document.documentElement.classList.add('overflow-hidden');
                } else {
                    document.documentElement.classList.remove('overflow-hidden');
                }
            }
        },
    },
    computed: {
        ...mapGetters(['organization']),
        logo() {
            return this._find(this.organization.images, { order: 1 });
        },
    },
};
</script>

<style>
.main-nav {
    @apply flex w-full fixed pin-t z-50 justify-between items-center max-w-4xl h-16 px-2;
    background: rgba(255,255,255,0.75);
}

.logo {
    width: 50px;
}

.nav-links {
    @apply flex w-1/3;
}

.nav-links a {
    @apply mx-2 px-2 no-underline text-blue-darker text-lg;
}

.nav-links a:hover {
    @apply opacity-75;
}
</style>
