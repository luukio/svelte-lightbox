import{S as U,i as W,s as M,l as b,a as j,w as R,m as k,n as E,h as g,c as S,x as N,p as v,H as L,b as C,F as w,y as F,I as T,f as A,t as I,V as z,B as H,M as ne,k as se,r as V,u as y,v as D,O,o as le,G as Q,J as Y,K as Z,L as x,P as oe,W as ae,X as ie}from"../../chunks/index-2d828a12.js";import{m as ee}from"../../chunks/marked.esm-dd6d8b59.js";import{I as ce}from"../../chunks/Icon-6760cd7e.js";/* empty css                                                      */import{g as re,p as ue}from"../../chunks/stores-4aab985d.js";/* empty css                                                      */const fe=(s,e)=>{const t=[];for(const n of s)n.type==="heading"&&(n.depth===e?t.push({title:n.text,content:[]}):t[t.length-1].content.push(n));return t},te=(s,e)=>{const t=fe(s,e),n=[];for(const o of t){const i={title:o.title,path:`#${o.title.toLowerCase().replaceAll(" ","-")}`,sections:te(o.content,e+1)};n.push(i)}return n},he=s=>{const e=ee.lexer(s);return te(e,2)};function G(s,e,t){const n=s.slice();return n[10]=e[t],n}function J(s,e,t){const n=s.slice();return n[13]=e[t],n}function K(s,e,t){const n=s.slice();return n[13]=e[t],n}function P(s){let e,t,n=s[13].title+"",o,i,h;return{c(){e=b("li"),t=b("a"),o=V(n),h=j(),this.h()},l(u){e=k(u,"LI",{class:!0});var c=E(e);t=k(c,"A",{class:!0,href:!0});var _=E(t);o=y(_,n),_.forEach(g),h=S(c),c.forEach(g),this.h()},h(){v(t,"class","nested subsection svelte-1jnw08q"),v(t,"href",i=s[13].path),L(t,"active",s[13].path===s[2]),v(e,"class","svelte-1jnw08q")},m(u,c){C(u,e,c),w(e,t),w(t,o),w(e,h)},p(u,c){c&2&&n!==(n=u[13].title+"")&&D(o,n),c&2&&i!==(i=u[13].path)&&v(t,"href",i),c&6&&L(t,"active",u[13].path===u[2])},d(u){u&&g(e)}}}function X(s){let e,t,n=s[13].title+"",o,i,h,u,c,_=s[13].sections,f=[];for(let l=0;l<_.length;l+=1)f[l]=P(K(s,_,l));return{c(){e=b("li"),t=b("a"),o=V(n),h=j(),u=b("ul");for(let l=0;l<f.length;l+=1)f[l].c();c=j(),this.h()},l(l){e=k(l,"LI",{class:!0});var r=E(e);t=k(r,"A",{class:!0,href:!0});var a=E(t);o=y(a,n),a.forEach(g),h=S(r),u=k(r,"UL",{class:!0});var p=E(u);for(let m=0;m<f.length;m+=1)f[m].l(p);p.forEach(g),c=S(r),r.forEach(g),this.h()},h(){v(t,"class","subsection svelte-1jnw08q"),v(t,"href",i=s[13].path),L(t,"active",s[13].path===s[2]),v(u,"class","svelte-1jnw08q"),v(e,"class","svelte-1jnw08q")},m(l,r){C(l,e,r),w(e,t),w(t,o),w(e,h),w(e,u);for(let a=0;a<f.length;a+=1)f[a].m(u,null);w(e,c)},p(l,r){if(r&2&&n!==(n=l[13].title+"")&&D(o,n),r&2&&i!==(i=l[13].path)&&v(t,"href",i),r&6&&L(t,"active",l[13].path===l[2]),r&6){_=l[13].sections;let a;for(a=0;a<_.length;a+=1){const p=K(l,_,a);f[a]?f[a].p(p,r):(f[a]=P(p),f[a].c(),f[a].m(u,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=_.length}},d(l){l&&g(e),z(f,l)}}}function $(s){let e,t,n=s[10].title+"",o,i,h,u,c,_=s[10].sections,f=[];for(let l=0;l<_.length;l+=1)f[l]=X(J(s,_,l));return{c(){e=b("li"),t=b("a"),o=V(n),h=j(),u=b("ul");for(let l=0;l<f.length;l+=1)f[l].c();c=j(),this.h()},l(l){e=k(l,"LI",{class:!0});var r=E(e);t=k(r,"A",{class:!0,href:!0});var a=E(t);o=y(a,n),a.forEach(g),h=S(r),u=k(r,"UL",{class:!0});var p=E(u);for(let m=0;m<f.length;m+=1)f[m].l(p);p.forEach(g),c=S(r),r.forEach(g),this.h()},h(){v(t,"class","section svelte-1jnw08q"),v(t,"href",i=s[10].path),L(t,"active",s[10].path===s[2]),v(u,"class","svelte-1jnw08q"),v(e,"class","svelte-1jnw08q")},m(l,r){C(l,e,r),w(e,t),w(t,o),w(e,h),w(e,u);for(let a=0;a<f.length;a+=1)f[a].m(u,null);w(e,c)},p(l,r){if(r&2&&n!==(n=l[10].title+"")&&D(o,n),r&2&&i!==(i=l[10].path)&&v(t,"href",i),r&6&&L(t,"active",l[10].path===l[2]),r&6){_=l[10].sections;let a;for(a=0;a<_.length;a+=1){const p=J(l,_,a);f[a]?f[a].p(p,r):(f[a]=X(p),f[a].c(),f[a].m(u,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=_.length}},d(l){l&&g(e),z(f,l)}}}function _e(s){let e,t,n,o,i,h,u,c,_,f=s[1],l=[];for(let r=0;r<f.length;r+=1)l[r]=$(G(s,f,r));return h=new ce({props:{name:s[3]?"close":"menu"}}),{c(){e=b("aside"),t=b("div"),n=b("ul");for(let r=0;r<l.length;r+=1)l[r].c();o=j(),i=b("button"),R(h.$$.fragment),this.h()},l(r){e=k(r,"ASIDE",{class:!0});var a=E(e);t=k(a,"DIV",{class:!0});var p=E(t);n=k(p,"UL",{class:!0});var m=E(n);for(let q=0;q<l.length;q+=1)l[q].l(m);m.forEach(g),p.forEach(g),o=S(a),i=k(a,"BUTTON",{class:!0});var d=E(i);N(h.$$.fragment,d),d.forEach(g),a.forEach(g),this.h()},h(){v(n,"class","reference-toc svelte-1jnw08q"),v(t,"class","sidebar svelte-1jnw08q"),v(i,"class","svelte-1jnw08q"),v(e,"class","sidebar-container svelte-1jnw08q"),L(e,"open",s[3])},m(r,a){C(r,e,a),w(e,t),w(t,n);for(let p=0;p<l.length;p+=1)l[p].m(n,null);s[5](n),w(e,o),w(e,i),F(h,i,null),u=!0,c||(_=[T(n,"mouseenter",s[6]),T(n,"mouseleave",s[7]),T(t,"click",s[8]),T(i,"click",s[9])],c=!0)},p(r,[a]){if(a&6){f=r[1];let m;for(m=0;m<f.length;m+=1){const d=G(r,f,m);l[m]?l[m].p(d,a):(l[m]=$(d),l[m].c(),l[m].m(n,null))}for(;m<l.length;m+=1)l[m].d(1);l.length=f.length}const p={};a&8&&(p.name=r[3]?"close":"menu"),h.$set(p),a&8&&L(e,"open",r[3])},i(r){u||(A(h.$$.fragment,r),u=!0)},o(r){I(h.$$.fragment,r),u=!1},d(r){r&&g(e),z(l,r),s[5](null),H(h),c=!1,ne(_)}}}function me(s,e,t){let{contents:n=[]}=e,{path:o=null}=e,{prevent_sidebar_scroll:i=!1}=e,h=!1,u;se(()=>{if(i||h&&window.innerWidth<832)return;const a=u.querySelector(".active");if(a){const{top:p,bottom:m}=a.getBoundingClientRect(),d=200,q=window.innerHeight-200;p>q?u.parentNode.scrollBy({top:p-q,left:0}):m<d&&u.parentNode.scrollBy({top:m-d,left:0})}});function c(a){O[a?"unshift":"push"](()=>{u=a,t(4,u)})}const _=()=>t(0,i=!0),f=()=>t(0,i=!1),l=()=>t(3,h=!1),r=()=>t(3,h=!h);return s.$$set=a=>{"contents"in a&&t(1,n=a.contents),"path"in a&&t(2,o=a.path),"prevent_sidebar_scroll"in a&&t(0,i=a.prevent_sidebar_scroll)},[i,n,o,h,u,c,_,f,l,r]}class pe extends U{constructor(e){super(),W(this,e,me,_e,M,{contents:1,path:2,prevent_sidebar_scroll:0})}}const de=()=>window.location.hash.slice(1);function ge(s){let e=!1,t=null;const n=re().page.subscribe(()=>{t&&t(),e&&(t=s())});le(()=>(e=!0,t=s(),()=>{n(),t&&t(),e=!1}))}function ve(s){let e,t;const n=s[3].default,o=Q(n,s,s[2],null);return{c(){e=b("div"),o&&o.c(),this.h()},l(i){e=k(i,"DIV",{class:!0});var h=E(e);o&&o.l(h),h.forEach(g),this.h()},h(){v(e,"class","content listify svelte-t51vyw")},m(i,h){C(i,e,h),o&&o.m(e,null),s[4](e),t=!0},p(i,[h]){o&&o.p&&(!t||h&4)&&Y(o,n,i,i[2],t?x(n,i[2],h,null):Z(i[2]),null)},i(i){t||(A(o,i),t=!0)},o(i){I(o,i),t=!1},d(i){i&&g(e),o&&o.d(i),s[4](null)}}}function we(s,e,t){let n;oe(s,ue,_=>t(5,n=_));let{$$slots:o={},$$scope:i}=e,{path:h}=e,u;ge(()=>{const _=u.querySelectorAll("[id]:not([data-scrollignore])");for(const m of _)if(m.nodeName.startsWith("H")&&!m.querySelector("a.anchor")){const d=document.createElement("a");d.className="anchor",d.href=`${n.url.pathname}#${m.id}`;const q=document.createElement("span");q.className="visually-hidden",q.innerHTML="permalink",d.appendChild(q),m.appendChild(d)}let f;const l=()=>{const{top:m}=u.getBoundingClientRect();f=[].map.call(_,d=>d.getBoundingClientRect().top-m)};let r=de();const a=()=>{const{top:m}=u.getBoundingClientRect();let d=_.length;for(;d--;)if(f[d]+m<40){const q=_[d],{id:B}=q;B!==r&&(t(1,h=`${n.url.pathname}#${B}`),r=B);return}t(1,h=n.url.pathname)};window.addEventListener("scroll",a,!0),window.addEventListener("resize",l,!0);const p=[setTimeout(l,1e3),setTimeout(a,5e3)];return l(),a(),()=>{window.removeEventListener("scroll",a,!0),window.removeEventListener("resize",l,!0),p.forEach(m=>clearTimeout(m))}});function c(_){O[_?"unshift":"push"](()=>{u=_,t(0,u)})}return s.$$set=_=>{"path"in _&&t(1,h=_.path),"$$scope"in _&&t(2,i=_.$$scope)},[u,h,i,o,c]}class be extends U{constructor(e){super(),W(this,e,we,ve,M,{path:1})}}function ke(s){let e;const t=s[2].default,n=Q(t,s,s[4],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,i){n&&n.m(o,i),e=!0},p(o,i){n&&n.p&&(!e||i&16)&&Y(n,t,o,o[4],e?x(t,o[4],i,null):Z(o[4]),null)},i(o){e||(A(n,o),e=!0)},o(o){I(n,o),e=!1},d(o){n&&n.d(o)}}}function Ee(s){let e,t,n,o,i;function h(c){s[3](c)}let u={$$slots:{default:[ke]},$$scope:{ctx:s}};return s[1]!==void 0&&(u.path=s[1]),e=new be({props:u}),O.push(()=>ae(e,"path",h)),o=new pe({props:{contents:s[0],path:s[1]}}),{c(){R(e.$$.fragment),n=j(),R(o.$$.fragment)},l(c){N(e.$$.fragment,c),n=S(c),N(o.$$.fragment,c)},m(c,_){F(e,c,_),C(c,n,_),F(o,c,_),i=!0},p(c,[_]){const f={};_&16&&(f.$$scope={dirty:_,ctx:c}),!t&&_&2&&(t=!0,f.path=c[1],ie(()=>t=!1)),e.$set(f);const l={};_&1&&(l.contents=c[0]),_&2&&(l.path=c[1]),o.$set(l)},i(c){i||(A(e.$$.fragment,c),A(o.$$.fragment,c),i=!0)},o(c){I(e.$$.fragment,c),I(o.$$.fragment,c),i=!1},d(c){H(e,c),c&&g(n),H(o,c)}}}const qe=async({fetch:s})=>(await(await s("https://raw.githubusercontent.com/Hejtmus/svelte-lightbox/master/documentation/docs/index.json")).json()).sections,Le=async({fetch:s,url:e})=>await(await s(e)).text(),je=async({fetch:s,sectionLinks:e})=>{const t=[];for(const n of e){const o=await Le({fetch:s,url:n.edit}),i=he(o),h=ee.parse(o);t.push({...n,slug:n.title.toLowerCase().replaceAll(" ","-"),content:h,sections:i})}return t};async function Ne({fetch:s}){const e=await qe({fetch:s}),t=await je({fetch:s,sectionLinks:e});return{stuff:{sections:t},props:{sections:t}}}function Se(s,e,t){let{$$slots:n={},$$scope:o}=e,{sections:i}=e,h=null;function u(c){h=c,t(1,h)}return s.$$set=c=>{"sections"in c&&t(0,i=c.sections),"$$scope"in c&&t(4,o=c.$$scope)},[i,h,n,u,o]}class Fe extends U{constructor(e){super(),W(this,e,Se,Ee,M,{sections:0})}}export{Fe as default,Ne as load};