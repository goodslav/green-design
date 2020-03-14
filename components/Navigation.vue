<template>
    <nav v-if="!_isEmpty(organizations)" class="main-nav">
        <div class="logo">
            <nuxt-link to="/">
                <img
                    :src="assetUrlFromObj(logo)"
                    :alt="`${organization.Name} Logo Image`"
                    :title="organization.Name"
                    width="100%"
                />
            </nuxt-link>
        </div>

        <div class="nav-links justify-end text-shadow--nav">
            <nuxt-link to="/#AboutUs">За Нас</nuxt-link>
            <nuxt-link to="portfolio">Портфолио</nuxt-link>
            <nuxt-link to="/#Contacts">Контакти</nuxt-link>
        </div>

        <div class="hamburger" @click="visible = !visible">
            <div class="w-full"></div>
            <div class="w-3/4"></div>
            <div class="w-1/2"></div>
        </div>

        <div class="mobile-links" v-if="visible" @click="visible = !visible">
            <nuxt-link to="/">Начало</nuxt-link>
            <nuxt-link to="/#AboutUs">За Нас</nuxt-link>
            <nuxt-link to="portfolio">Портфолио</nuxt-link>
            <nuxt-link to="/#Contacts">Контакти</nuxt-link>
        </div>
    </nav>
</template>

<script>
import organizationQuery from '~/gql/queries/organization/organization.gql';

export default {
    data() {
        return {
            organizations: [],
            visible: false,
        };
    },
    apollo: {
        organizations: {
            prefetch: true,
            query: organizationQuery,
            variables() {
                return { where: { Identifier: 'green-design-pleven' } };
            },
        },
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
        organization() {
            if (this._isEmpty(this.organizations)) {
                return null;
            }

            return this._first(this.organizations);
        },
        logo() {
            return this._first(this.organization.Logos);
        },
    },
};
</script>

<style>
.main-nav {
    @apply flex w-full fixed pin-t z-50 justify-between items-center h-16 px-2;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.65) 0, rgba(0, 0, 0, 0.85) 100%);
}

.logo {
    @apply ml-2;
    width: 50px;
}

.nav-links {
    @apply w-1/3 hidden;

    & > a + a {
        @apply ml-1;
    }
}

.nav-links a {
    @apply no-underline text-white text-base;
    padding: 8px 24px;
    border: 2px solid transparent;
    transition: opacity 0.25s ease-in-out, border-color 0.25s ease-in-out;
}

.nav-links a:hover {
    @apply opacity-75;
    border: 2px solid white;
}

.mobile-links {
    @apply fixed pin w-full h-screen flex flex-col items-center justify-center z-40;
    background: rgba(0, 0, 0, 0.9);
}

.mobile-links a {
    @apply mx-2 px-2 my-1 no-underline text-white text-lg text-xl leading-loose;
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
    @apply h-1 bg-white rounded-full;
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
