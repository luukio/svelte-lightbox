import{S as R,i as Y,s as Q,a as S,e as F,c as z,b as v,E as J,h as _,o as pe,l as b,m as $,n as k,p as c,q as K,F as I,G as U,r as X,w as A,u as Z,x as D,H as V,y as L,I as O,v as ve,J as q,K as W,L as j,f as d,t as E,B as P,M as ge,N as de,O as be,g as ue,d as _e,P as ce}from"../chunks/index-e4dd6255.js";import{I as me}from"../chunks/Icon-da2e05db.js";import{p as he,n as $e}from"../chunks/stores-ba2e8a33.js";function ne(i){let t,e;return{c(){t=b("div"),e=b("div"),this.h()},l(l){t=$(l,"DIV",{class:!0});var a=k(t);e=$(a,"DIV",{class:!0,style:!0}),k(e).forEach(_),a.forEach(_),this.h()},h(){c(e,"class","progress svelte-2v07tr"),K(e,"width",i[0]*100+"%"),c(t,"class","progress-container svelte-2v07tr")},m(l,a){v(l,t,a),I(t,e)},p(l,a){a&1&&K(e,"width",l[0]*100+"%")},d(l){l&&_(t)}}}function ae(i){let t;return{c(){t=b("div"),this.h()},l(e){t=$(e,"DIV",{class:!0}),k(t).forEach(_),this.h()},h(){c(t,"class","fade svelte-2v07tr")},m(e,l){v(e,t,l)},d(e){e&&_(t)}}}function ke(i){let t,e,l=i[1]&&ne(i),a=i[0]>=.4&&ae();return{c(){l&&l.c(),t=S(),a&&a.c(),e=F()},l(n){l&&l.l(n),t=z(n),a&&a.l(n),e=F()},m(n,s){l&&l.m(n,s),v(n,t,s),a&&a.m(n,s),v(n,e,s)},p(n,[s]){n[1]?l?l.p(n,s):(l=ne(n),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),n[0]>=.4?a||(a=ae(),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:J,o:J,d(n){l&&l.d(n),n&&_(t),a&&a.d(n),n&&_(e)}}}function Ee(i,t,e){let l=0,a=!1;return pe(()=>{function n(){e(1,a=!0),e(0,l+=.1);const s=1-l;s>.15&&setTimeout(n,500/s)}setTimeout(n,250)}),[l,a]}class we extends R{constructor(t){super(),Y(this,t,Ee,ke,Q,{})}}const{window:x}=de,Ne=i=>({}),ie=i=>({}),Ie=i=>({}),re=i=>({});function fe(i){let t,e,l;return{c(){t=b("div"),this.h()},l(a){t=$(a,"DIV",{class:!0}),k(t).forEach(_),this.h()},h(){c(t,"class","modal-background hide-if-desktop svelte-y6pzn4")},m(a,n){v(a,t,n),e||(l=O(t,"click",i[12]),e=!0)},p:J,d(a){a&&_(t),e=!1,l()}}}function ye(i){let t,e,l,a,n,s,r,o,f,h,y,H,N,T,C,g=i[3]&&fe(i);r=new me({props:{name:i[3]?"close":"menu",size:"1em"}});const G=i[11]["nav-center"],w=U(G,i,i[10],re),B=i[11]["nav-right"],m=U(B,i,i[10],ie);return{c(){g&&g.c(),t=S(),e=b("nav"),l=b("a"),a=X(i[1]),n=S(),s=b("button"),A(r.$$.fragment),f=S(),h=b("ul"),w&&w.c(),y=S(),H=b("ul"),m&&m.c(),this.h()},l(u){g&&g.l(u),t=z(u),e=$(u,"NAV",{class:!0});var p=k(e);l=$(p,"A",{"sveltekit:prefetch":!0,href:!0,class:!0,title:!0,style:!0});var M=k(l);a=Z(M,i[1]),M.forEach(_),n=z(p),s=$(p,"BUTTON",{"aria-label":!0,"aria-expanded":!0,class:!0});var te=k(s);D(r.$$.fragment,te),te.forEach(_),f=z(p),h=$(p,"UL",{class:!0});var le=k(h);w&&w.l(le),le.forEach(_),y=z(p),H=$(p,"UL",{class:!0});var se=k(H);m&&m.l(se),se.forEach(_),p.forEach(_),this.h()},h(){c(l,"sveltekit:prefetch",""),c(l,"href","/"),c(l,"class","nav-spot home svelte-y6pzn4"),c(l,"title",i[2]),K(l,"background-image","url("+i[0]+")"),c(s,"aria-label","Toggle menu"),c(s,"aria-expanded",o=i[3].toString()),c(s,"class","menu-toggle svelte-y6pzn4"),V(s,"open",i[3]),c(h,"class","svelte-y6pzn4"),c(H,"class","external svelte-y6pzn4"),c(e,"class","svelte-y6pzn4"),V(e,"visible",i[4]||i[3]),V(e,"open",i[3])},m(u,p){g&&g.m(u,p),v(u,t,p),v(u,e,p),I(e,l),I(l,a),I(e,n),I(e,s),L(r,s,null),I(e,f),I(e,h),w&&w.m(h,null),I(e,y),I(e,H),m&&m.m(H,null),i[14](e),N=!0,T||(C=[O(x,"hashchange",i[6]),O(x,"scroll",i[7]),O(x,"focusin",i[8]),O(s,"click",i[13])],T=!0)},p(u,[p]){u[3]?g?g.p(u,p):(g=fe(u),g.c(),g.m(t.parentNode,t)):g&&(g.d(1),g=null),(!N||p&2)&&ve(a,u[1]),(!N||p&4)&&c(l,"title",u[2]),(!N||p&1)&&K(l,"background-image","url("+u[0]+")");const M={};p&8&&(M.name=u[3]?"close":"menu"),r.$set(M),(!N||p&8&&o!==(o=u[3].toString()))&&c(s,"aria-expanded",o),p&8&&V(s,"open",u[3]),w&&w.p&&(!N||p&1024)&&q(w,G,u,u[10],N?j(G,u[10],p,Ie):W(u[10]),re),m&&m.p&&(!N||p&1024)&&q(m,B,u,u[10],N?j(B,u[10],p,Ne):W(u[10]),ie),p&24&&V(e,"visible",u[4]||u[3]),p&8&&V(e,"open",u[3])},i(u){N||(d(r.$$.fragment,u),d(w,u),d(m,u),N=!0)},o(u){E(r.$$.fragment,u),E(w,u),E(m,u),N=!1},d(u){g&&g.d(u),u&&_(t),u&&_(e),P(r),w&&w.d(u),m&&m.d(u),i[14](null),T=!1,ge(C)}}}function He(i,t,e){let{$$slots:l={},$$scope:a}=t,{page:n}=t,{logo:s}=t,{home:r="Home"}=t,{home_title:o="Homepage"}=t,f=!1,h=!0,y;n.subscribe(()=>{e(3,f=!1)});let H=!1;function N(){H=!0}let T=0;function C(){const m=window.pageYOffset;H||e(4,h=m<50||m<T),T=m,H=!1}function g(){f&&!y.contains(document.activeElement)&&e(3,f=!1)}const G=()=>e(3,f=!1),w=()=>e(3,f=!f);function B(m){be[m?"unshift":"push"](()=>{y=m,e(5,y)})}return i.$$set=m=>{"page"in m&&e(9,n=m.page),"logo"in m&&e(0,s=m.logo),"home"in m&&e(1,r=m.home),"home_title"in m&&e(2,o=m.home_title),"$$scope"in m&&e(10,a=m.$$scope)},[s,r,o,f,h,y,N,C,g,n,a,l,G,w,B]}class Se extends R{constructor(t){super(),Y(this,t,He,ye,Q,{page:9,logo:0,home:1,home_title:2})}}function ze(i){let t,e,l,a;const n=i[5].default,s=U(n,i,i[4],null);return{c(){t=b("li"),e=b("a"),s&&s.c(),this.h()},l(r){t=$(r,"LI",{});var o=k(t);e=$(o,"A",{"aria-current":!0,"sveltekit:prefetch":!0,href:!0,title:!0,class:!0});var f=k(e);s&&s.l(f),f.forEach(_),o.forEach(_),this.h()},h(){c(e,"aria-current",l=i[3].url.pathname.startsWith(i[0])?!0:void 0),c(e,"sveltekit:prefetch",""),c(e,"href",i[0]),c(e,"title",i[2]),c(e,"class","svelte-pg3cgb")},m(r,o){v(r,t,o),I(t,e),s&&s.m(e,null),a=!0},p(r,o){s&&s.p&&(!a||o&16)&&q(s,n,r,r[4],a?j(n,r[4],o,null):W(r[4]),null),(!a||o&9&&l!==(l=r[3].url.pathname.startsWith(r[0])?!0:void 0))&&c(e,"aria-current",l),(!a||o&1)&&c(e,"href",r[0]),(!a||o&4)&&c(e,"title",r[2])},i(r){a||(d(s,r),a=!0)},o(r){E(s,r),a=!1},d(r){r&&_(t),s&&s.d(r)}}}function Ae(i){let t,e,l;const a=i[5].default,n=U(a,i,i[4],null);return{c(){t=b("li"),e=b("a"),n&&n.c(),this.h()},l(s){t=$(s,"LI",{});var r=k(t);e=$(r,"A",{href:!0,title:!0,rel:!0,class:!0});var o=k(e);n&&n.l(o),o.forEach(_),r.forEach(_),this.h()},h(){c(e,"href",i[1]),c(e,"title",i[2]),c(e,"rel","external"),c(e,"class","svelte-pg3cgb")},m(s,r){v(s,t,r),I(t,e),n&&n.m(e,null),l=!0},p(s,r){n&&n.p&&(!l||r&16)&&q(n,a,s,s[4],l?j(a,s[4],r,null):W(s[4]),null),(!l||r&2)&&c(e,"href",s[1]),(!l||r&4)&&c(e,"title",s[2])},i(s){l||(d(n,s),l=!0)},o(s){E(n,s),l=!1},d(s){s&&_(t),n&&n.d(s)}}}function De(i){let t,e,l,a;const n=[Ae,ze],s=[];function r(o,f){return o[1]?0:1}return t=r(i),e=s[t]=n[t](i),{c(){e.c(),l=F()},l(o){e.l(o),l=F()},m(o,f){s[t].m(o,f),v(o,l,f),a=!0},p(o,[f]){let h=t;t=r(o),t===h?s[t].p(o,f):(ue(),E(s[h],1,1,()=>{s[h]=null}),_e(),e=s[t],e?e.p(o,f):(e=s[t]=n[t](o),e.c()),d(e,1),e.m(l.parentNode,l))},i(o){a||(d(e),a=!0)},o(o){E(e),a=!1},d(o){s[t].d(o),o&&_(l)}}}function Le(i,t,e){let l;ce(i,he,f=>e(3,l=f));let{$$slots:a={},$$scope:n}=t,{href:s=null}=t,{external:r=null}=t,{title:o=null}=t;return i.$$set=f=>{"href"in f&&e(0,s=f.href),"external"in f&&e(1,r=f.external),"title"in f&&e(2,o=f.title),"$$scope"in f&&e(4,n=f.$$scope)},[s,r,o,l,n,a]}class ee extends R{constructor(t){super(),Y(this,t,Le,De,Q,{href:0,external:1,title:2})}}function oe(i){let t,e;return t=new we({}),{c(){A(t.$$.fragment)},l(l){D(t.$$.fragment,l)},m(l,a){L(t,l,a),e=!0},i(l){e||(d(t.$$.fragment,l),e=!0)},o(l){E(t.$$.fragment,l),e=!1},d(l){P(t,l)}}}function Pe(i){let t;return{c(){t=X("Docs")},l(e){t=Z(e,"Docs")},m(e,l){v(e,t,l)},d(e){e&&_(t)}}}function Te(i){let t;return{c(){t=X("Examples")},l(e){t=Z(e,"Examples")},m(e,l){v(e,t,l)},d(e){e&&_(t)}}}function Ve(i){let t,e,l,a;return t=new ee({props:{href:"/docs",$$slots:{default:[Pe]},$$scope:{ctx:i}}}),l=new ee({props:{href:"/examples",$$slots:{default:[Te]},$$scope:{ctx:i}}}),{c(){A(t.$$.fragment),e=S(),A(l.$$.fragment)},l(n){D(t.$$.fragment,n),e=z(n),D(l.$$.fragment,n)},m(n,s){L(t,n,s),v(n,e,s),L(l,n,s),a=!0},p(n,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:n}),t.$set(r);const o={};s&4&&(o.$$scope={dirty:s,ctx:n}),l.$set(o)},i(n){a||(d(t.$$.fragment,n),d(l.$$.fragment,n),a=!0)},o(n){E(t.$$.fragment,n),E(l.$$.fragment,n),a=!1},d(n){P(t,n),n&&_(e),P(l,n)}}}function Ge(i){let t,e,l,a,n,s;return n=new me({props:{name:"github"}}),{c(){t=b("span"),e=X("GitHub"),l=S(),a=b("span"),A(n.$$.fragment),this.h()},l(r){t=$(r,"SPAN",{class:!0});var o=k(t);e=Z(o,"GitHub"),o.forEach(_),l=z(r),a=$(r,"SPAN",{class:!0});var f=k(a);D(n.$$.fragment,f),f.forEach(_),this.h()},h(){c(t,"class","small"),c(a,"class","large")},m(r,o){v(r,t,o),I(t,e),v(r,l,o),v(r,a,o),L(n,a,null),s=!0},p:J,i(r){s||(d(n.$$.fragment,r),s=!0)},o(r){E(n.$$.fragment,r),s=!1},d(r){r&&_(t),r&&_(l),r&&_(a),P(n)}}}function Be(i){let t,e;return t=new ee({props:{external:"https://github.com/Hejtmus/svelte-lightbox",title:"GitHub Repo",$$slots:{default:[Ge]},$$scope:{ctx:i}}}),{c(){A(t.$$.fragment)},l(l){D(t.$$.fragment,l)},m(l,a){L(t,l,a),e=!0},p(l,a){const n={};a&4&&(n.$$scope={dirty:a,ctx:l}),t.$set(n)},i(l){e||(d(t.$$.fragment,l),e=!0)},o(l){E(t.$$.fragment,l),e=!1},d(l){P(t,l)}}}function Me(i){let t,e,l,a,n,s=i[0]&&oe();e=new Se({props:{page:he,logo:"/img/logo.svg",$$slots:{"nav-right":[Be],"nav-center":[Ve]},$$scope:{ctx:i}}});const r=i[1].default,o=U(r,i,i[2],null);return{c(){s&&s.c(),t=S(),A(e.$$.fragment),l=S(),a=b("main"),o&&o.c(),this.h()},l(f){s&&s.l(f),t=z(f),D(e.$$.fragment,f),l=z(f),a=$(f,"MAIN",{class:!0});var h=k(a);o&&o.l(h),h.forEach(_),this.h()},h(){c(a,"class","svelte-17ykimk")},m(f,h){s&&s.m(f,h),v(f,t,h),L(e,f,h),v(f,l,h),v(f,a,h),o&&o.m(a,null),n=!0},p(f,[h]){f[0]?s?h&1&&d(s,1):(s=oe(),s.c(),d(s,1),s.m(t.parentNode,t)):s&&(ue(),E(s,1,1,()=>{s=null}),_e());const y={};h&4&&(y.$$scope={dirty:h,ctx:f}),e.$set(y),o&&o.p&&(!n||h&4)&&q(o,r,f,f[2],n?j(r,f[2],h,null):W(f[2]),null)},i(f){n||(d(s),d(e.$$.fragment,f),d(o,f),n=!0)},o(f){E(s),E(e.$$.fragment,f),E(o,f),n=!1},d(f){s&&s.d(f),f&&_(t),P(e,f),f&&_(l),f&&_(a),o&&o.d(f)}}}function Oe(i,t,e){let l;ce(i,$e,s=>e(0,l=s));let{$$slots:a={},$$scope:n}=t;return i.$$set=s=>{"$$scope"in s&&e(2,n=s.$$scope)},[l,a,n]}class je extends R{constructor(t){super(),Y(this,t,Oe,Me,Q,{})}}export{je as default};
