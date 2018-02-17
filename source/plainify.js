'use strict';

const plainify = function(src, prefix, res) {
    res = res || {};

    if (prefix === undefined) {
        prefix = '';
    } else {
        if (src == null) {
            res[prefix] = null;
            return res;
        }
        if (isEmpty(src)) {
            res[prefix] = {};
            return res;
        }
    }

    if (prefix != '') {
        prefix += '.';
    }

    for (var key in src) {
        if (typeof src[key] == "object") {
            plainify(src[key], prefix + key, res);
        } else {
            res[prefix + key] = src[key];
        }
    }

    return res;
};

const isEmpty = function(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
};
