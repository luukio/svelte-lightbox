import"./index-2e8868cc.js";import{s as t}from"./singletons-a12b8fd1.js";const r=()=>{const s=t,e={page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated};return Object.defineProperties(e,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},enumerable:!1},session:{get(){return n(),{}},enumerable:!1}}),e},a={subscribe(s){return r().page.subscribe(s)}},b={subscribe(s){return r().navigating.subscribe(s)}};function n(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}export{r as g,b as n,a as p};