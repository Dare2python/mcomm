const m = require("mithril");

const Entity = require("./Entity");
const comm = require("../model/Comm");
// import { test} from "../model/AWS.mjs";
// const test = require("../model/AWS.mjs");

const describeRoutes2 = require("../model/AWScmjs.js");

var test;
var describeRoutes;

// (async () => {
//     const AWS = await import('../src/model/AWS.mjs');
//     console.log(AWS);
//     // test = AWS.test;
//     // AWS.describeRoutes();
//     describeRoutes = AWS.describeRoutes;
// })().catch();

module.exports = {
    view: (vnode) =>
        m(".matrix", [
            m("h1.title", "the comm matrix"),
            m(Entity, {entity: comm}),
            m(Entity, {entity: comm}),
            m("button", { onclick: () => describeRoutes()
            }, "Describe routes")
        ])        
};
