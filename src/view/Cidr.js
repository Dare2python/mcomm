const m = require("mithril");

module.exports = {
    view: (vnode) =>
        m("span.cidr", vnode.attrs.c)
};
