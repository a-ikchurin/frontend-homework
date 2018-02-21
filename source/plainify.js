'use strict';

const plainify = function(src, prefix, res = {}) {
    if (prefix === undefined) {
        prefix = '';
    } else {
        if (src === null) {
            res[prefix] = null;
            return res;
        }
        if (Object.keys(src).length === 0) {
            res[prefix] = {};
            return res;
        }
        prefix += '.';
    }

    for (let key in src) {
        if (typeof src[key] === "object") {
            plainify(src[key], prefix + key, res);
        } else {
            res[prefix + key] = src[key];
        }
    }

    return res;
};
