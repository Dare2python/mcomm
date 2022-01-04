const m = require("mithril");
const Cidr = require("./Cidr");

module.exports = {
    view: (vnode) =>
        m(".entity", [
            m(".entity-name", vnode.attrs.entity.name),
            vnode.attrs.entity.cidr.map((cidr)=>
                m(Cidr, {c:cidr})
            )
        ])
};
