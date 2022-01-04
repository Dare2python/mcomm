const m = require("mithril");

const Entity = require("./Entity");
const comm = require("../model/Comm");

module.exports = {
    view: (vnode) =>
        m(".matrix", [
            m("h1.title", "the comm matrix"),
            m(Entity, {entity: comm}),
            m(Entity, {entity: comm}),
        ])
};
