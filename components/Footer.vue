<template>
    <footer
        v-if="!_isEmpty(organizations) && !_isEmpty(categories) && !_isEmpty(articles)"
        :style="footerStyle"
        class="bg-footer-default bg-image text-white overflow-hidden"
    >
        <div class="flex flex-wrap items-start justify-center xl:flex-row py-16 -m-2 overflow-hidden">
            <div class="flex flex-col items-center text-center justify-center w-full xl:w-1/4 p-2">
                <h4 class="leading-loose text-xl">За Връзка</h4>

                <div class="py-3" v-html="addresses" />

                <div class="py-3">
                    <div>{{ phones }}</div>
                    <div>E-mail: {{ organization.Email }}</div>
                </div>

                <div class="pt-3">
                    <a
                        v-for="socialLink in socialLinks"
                        :href="socialLink.Link"
                        :title="`${organization.Name} линк за ${socialLink.Type}`"
                        :key="`social_link_icon_${socialLink.id}`"
                        class="footer__social-link"
                        target="_blank"
                    >
                        <fa-icon
                            :icon="[
                                'fab',
                                `${socialLink.Type}${
                                    !_includes(['linkedin', 'instagram'], socialLink.Type) ? '-square' : ''
                                }`,
                            ]"
                        />
                    </a>
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
                    />

                    <div class="py-3">
                        <div>DeeToo Solutions Ltd.</div>
                        <div>E-mail: office@deetoo.co.uk</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-panel py-4 text-white flex justify-center">
            <div v-html="footerNoticeArticle.Content" class="max-w-6xl text-center" style="line-height: 1.625;" />
        </div>
    </footer>
</template>

<script>
import categoryQuery from '~/gql/queries/category/category.gql';
import articleQuery from '~/gql/queries/article/article.gql';
import organizationQuery from '~/gql/queries/organization/organization.gql';

export default {
    data() {
        return {
            organizations: [],
            categories: [],
            articles: [],
        };
    },
    apollo: {
        categories: {
            prefetch: true,
            query: categoryQuery,
            variables() {
                return { where: { Identifier: 'main-page-footer-category', Active: true } };
            },
        },
        organizations: {
            prefetch: true,
            query: organizationQuery,
            variables() {
                return { where: { Identifier: 'green-design-pleven' } };
            },
        },
        articles: {
            prefetch: true,
            query: articleQuery,
            variables() {
                return { where: { Identifier: 'footer-copyright-notice', Active: true } };
            },
        },
    },
    computed: {
        footerNoticeArticle() {
            if (this._isEmpty(this.articles)) {
                return null;
            }

            return this._first(this.articles);
        },
        footerCategory() {
            if (this._isEmpty(this.categories)) {
                return null;
            }

            return this._first(this.categories);
        },
        footerImage() {
            return this._first(this.footerCategory.Images);
        },
        footerStyle() {
            if (!this._isEmpty(this.categories)) {
                return {
                    'background-image': `url('${this.assetUrlFromObj(this.footerImage)}')`,
                };
            }

            return {};
        },
        organization() {
            if (this._isEmpty(this.organizations)) {
                return null;
            }

            return this._first(this.organizations);
        },
        socialLinks() {
            return this._filter(this.organization.Social_Links, 'Active');
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
};
</script>

<style>
.bg-footer-default {
    background-color: #778a6e;
}

.footer-panel {
    background: rgba(0, 0, 0, 0.3);
}

.footer__social-link {
    @apply inline-block text-4xl mx-2 text-white no-underline;

    &:hover,
    &:focus,
    &:active {
        transition: opacity 0.25s ease-in-out;
        opacity: 0.75;
    }
}
</style>
