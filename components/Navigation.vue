<template>
    <nav class="main-nav">
        <div class="nav-links text-shadow--nav">
            <a href="#News" v-smooth-scroll="{ duration : 2000 }">News</a>
            <a href="#Who-Are-We">Join Us</a>
            <a href="#Contact-Us">Training</a>
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
        <div class="nav-links justify-end text-shadow--nav">
            <a href="#Products">How You Can Help</a>
            <a href="#Who-Are-We">Donate</a>
            <a href="#Contact-Us">Contact Us</a>
        </div>
        <div class="hamburger" @click="visible = !visible">
            <div class="w-full"></div>
            <div class="w-3/4"></div>
            <div class="w-1/2"></div>
        </div>
        <div
            class="mobile-links"
            v-if="visible"
            @click="visible = !visible"
        >
            <a href="#News">News</a>
            <a href="#Who-Are-We">Join Us</a>
            <a href="#Contact-Us">Training</a>
            <a href="#Products">How You Can Help</a>
            <a href="#Who-Are-We">Donate</a>
            <a href="#Contact-Us">Contact Us</a>
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
    @apply flex w-full fixed pin-t z-50 justify-between items-center h-16 px-2;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0.65) 100%);
}

.logo {
    width: 50px;
}

.nav-links {
    @apply w-1/3 hidden;
}

.nav-links a {
    @apply mx-2 px-2 no-underline text-white text-lg;
    transition: all 0.25s ease-in-out;
}

.nav-links a:hover {
    @apply opacity-75;
}

.mobile-links {
    @apply fixed pin w-full h-screen flex flex-col items-center justify-center z-40;
    background: rgba(255, 255, 255, 0.9);
}

.mobile-links a {
    @apply mx-2 px-2 my-1 no-underline text-blue-darker text-lg text-xl leading-loose;
    transition: all 0.25s ease-in-out;
}

.mobile-links a:hover {
    @apply opacity-75;
}

.hamburger {
    @apply cursor-pointer w-8 h-6 flex flex-col items-end justify-between z-50;
    transition: all 0.25s ease-in-out;
}

.hamburger > div {
    @apply h-1 bg-blue-darker rounded-full;
}

@screen xl {
    .nav-links {
        @apply flex;
    }

    .mobile-links {
        @apply hidden;
    }

    .hamburger {
        @apply hidden;
    }
}
</style>
