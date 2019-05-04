// eslint-disable-next-line
import Vue from 'vue';
import { format } from 'date-fns';
import {
    filter as _filter,
    find as _find,
    first as _first,
    forEach as _forEach,
    forOwn as _forOwn,
    get as _get,
    groupBy as _groupBy,
    includes as _includes,
    isEmpty as _isEmpty,
    isNil as _isNil,
    orderBy as _orderBy,
    reject as _reject,
    trimEnd as _trimEnd,
    trimStart as _trimStart,
    truncate as _truncate,
} from 'lodash';

Vue.mixin({
    methods: {
        _filter,
        _find,
        _first,
        _forEach,
        _forOwn,
        _get,
        _groupBy,
        _includes,
        _isEmpty,
        _isNil,
        _orderBy,
        _reject,
        _trimEnd,
        _trimStart,
        _truncate,
        formatDate(date, formatString = 'DD/MM/YYYY') {
            return format(date, formatString);
        },
        truncateText(text, length = 125) {
            return _truncate(text, { length, separator: /,? +/ });
        },
    },
});
