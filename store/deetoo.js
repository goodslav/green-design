import fetchAll from '~/gql/fetchAll';

/* eslint-disable no-shadow, no-param-reassign */
export const state = () => ({
    articles: null,
    categories: null,
    galleries: null,
    menus: null,
    organization: null,
    people: null,
    products: null,
});

/** @type {import('vuex').MutationTree<typeof state>} */
export const mutations = {
    setArticles(state, articles) {
        state.articles = articles;
    },
    setCategories(state, categories) {
        state.categories = categories;
    },
    setGalleries(state, galleries) {
        state.galleries = galleries;
    },
    setMenus(state, menus) {
        state.menus = menus;
    },
    setOrganization(state, organization) {
        state.organization = organization;
    },
    setPeople(state, people) {
        state.people = people;
    },
    setProducts(state, products) {
        state.products = products;
    },
};

export const actions = {
    fetchAll(context) {
        return this.$axios.post('', { query: fetchAll }).then(response => {
            const { data } = response.data;
            context.commit('setArticles', data.articles);
            context.commit('setCategories', data.categories);
            context.commit('setGalleries', data.galleries);
            context.commit('setMenus', data.menus);
            context.commit('setOrganization', data.organizations[0]);
            context.commit('setPeople', data.people);
            context.commit('setProducts', data.products);
        });
    },
};

export const getters = {
    articles: state => state.articles,
    categories: state => state.categories,
    galleries: state => state.galleries,
    menus: state => state.menus,
    organization: state => state.organization,
    people: state => state.people,
    products: state => state.products,
};
/* eslint-enable no-shadow, no-param-reassign */
