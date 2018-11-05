/* eslint-disable no-shadow, no-param-reassign */
export const state = () => ({
    list: [],
});

export const mutations = {
    add(state, restaurant) {
        state.list.push(restaurant);
    },
    emptyList(state) {
        state.list = [];
    },
};

export const getters = {
    list: state => state.list,
};
/* eslint-enable no-shadow, no-param-reassign */
