import{s as N,r as q,e as p,k as A,c as w,a as k,I as H,o as V,d as h,f as b,i as y,g,v as j,w as z,x as F,p as K,j as B,t as D,b as E,h as C,u as x,Q as O,H as Q,B as T,q as G,O as J,y as R}from"./scheduler.Dg_Xn4WQ.js";import{S as L,i as M,t as P,a as S,h as U}from"./index.gNonUo3Z.js";import{a as W}from"./index.nST1YYiD.js";import{o as X}from"./index.C2zJs1dP.js";function Y(s){let e=s[2].t("Add Files")+"",t;return{c(){t=D(e)},l(l){t=E(l,e)},m(l,o){y(l,t,o)},p(l,o){o&4&&e!==(e=l[2].t("Add Files")+"")&&C(t,e)},d(l){l&&h(t)}}}function Z(s){let e;return{c(){e=D(s[0])},l(t){e=E(t,s[0])},m(t,l){y(t,e,l)},p(t,l){l&1&&C(e,t[0])},d(t){t&&h(e)}}}function $(s){let e=s[2].t("Drop any files here to add to the conversation")+"",t;return{c(){t=D(e)},l(l){t=E(l,e)},m(l,o){y(l,t,o)},p(l,o){o&4&&e!==(e=l[2].t("Drop any files here to add to the conversation")+"")&&C(t,e)},d(l){l&&h(t)}}}function ee(s){let e;return{c(){e=D(s[1])},l(t){e=E(t,s[1])},m(t,l){y(t,e,l)},p(t,l){l&2&&C(e,t[1])},d(t){t&&h(e)}}}function te(s){let e;function t(i,c){return i[1]?ee:$}let l=t(s),o=l(s);return{c(){e=p("div"),o.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var c=k(e);o.l(c),c.forEach(h),this.h()},h(){b(e,"class","px-2 mt-2 text-center text-sm dark:text-gray-200 w-full")},m(i,c){y(i,e,c),o.m(e,null)},p(i,c){l===(l=t(i))&&o?o.p(i,c):(o.d(1),o=l(i),o&&(o.c(),o.m(e,null)))},d(i){i&&h(e),o.d()}}}function le(s){let e,t,l="📄",o,i,c,f;function v(n,_){return n[0]?Z:Y}let a=v(s),r=a(s);const d=s[5].default,m=q(d,s,s[4],null),u=m||te(s);return{c(){e=p("div"),t=p("div"),t.textContent=l,o=A(),i=p("div"),r.c(),c=A(),u&&u.c(),this.h()},l(n){e=w(n,"DIV",{class:!0});var _=k(e);t=w(_,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1f01f7u"&&(t.textContent=l),o=V(_),i=w(_,"DIV",{class:!0});var I=k(i);r.l(I),I.forEach(h),c=V(_),u&&u.l(_),_.forEach(h),this.h()},h(){b(t,"class","text-center text-6xl mb-3"),b(i,"class","text-center dark:text-white text-xl font-semibold z-50"),b(e,"class","px-3")},m(n,_){y(n,e,_),g(e,t),g(e,o),g(e,i),r.m(i,null),g(e,c),u&&u.m(e,null),f=!0},p(n,[_]){a===(a=v(n))&&r?r.p(n,_):(r.d(1),r=a(n),r&&(r.c(),r.m(i,null))),m?m.p&&(!f||_&16)&&j(m,d,n,n[4],f?F(d,n[4],_,null):z(n[4]),null):u&&u.p&&(!f||_&6)&&u.p(n,f?_:-1)},i(n){f||(P(u,n),f=!0)},o(n){S(u,n),f=!1},d(n){n&&h(e),r.d(),u&&u.d(n)}}}function se(s,e,t){let l,{$$slots:o={},$$scope:i}=e,{title:c=""}=e,{content:f=""}=e;const v=K("i18n");return B(s,v,a=>t(2,l=a)),s.$$set=a=>{"title"in a&&t(0,c=a.title),"content"in a&&t(1,f=a.content),"$$scope"in a&&t(4,i=a.$$scope)},[c,f,l,v,i,o]}class fe extends L{constructor(e){super(),M(this,e,se,le,N,{title:0,content:1})}}function ne(s){let e,t,l,o,i,c,f,v;const a=s[5].default,r=q(a,s,s[4],null);return{c(){e=p("div"),t=p("div"),r&&r.c(),this.h()},l(d){e=w(d,"DIV",{class:!0});var m=k(e);t=w(m,"DIV",{class:!0});var u=k(t);r&&r.l(u),u.forEach(h),m.forEach(h),this.h()},h(){b(t,"class",l="mt-auto w-full bg-gray-50 dark:bg-gray-900 dark:text-gray-100 "+s[1]+" max-h-[100dvh] overflow-y-auto scrollbar-hidden svelte-fq1rhy"),b(e,"class",o="modal fixed right-0 "+(s[3]?" ml-[4.5rem] max-w-[calc(100%-4.5rem)]":"")+" left-0 bottom-0 bg-black/60 w-full h-screen max-h-[100dvh] flex justify-center z-[999] overflow-hidden overscroll-contain")},m(d,m){y(d,e,m),g(e,t),r&&r.m(t,null),s[6](e),c=!0,f||(v=[x(t,"mousedown",oe),x(e,"mousedown",s[7])],f=!0)},p(d,[m]){r&&r.p&&(!c||m&16)&&j(r,a,d,d[4],c?F(a,d[4],m,null):z(d[4]),null),(!c||m&2&&l!==(l="mt-auto w-full bg-gray-50 dark:bg-gray-900 dark:text-gray-100 "+d[1]+" max-h-[100dvh] overflow-y-auto scrollbar-hidden svelte-fq1rhy"))&&b(t,"class",l),(!c||m&8&&o!==(o="modal fixed right-0 "+(d[3]?" ml-[4.5rem] max-w-[calc(100%-4.5rem)]":"")+" left-0 bottom-0 bg-black/60 w-full h-screen max-h-[100dvh] flex justify-center z-[999] overflow-hidden overscroll-contain"))&&b(e,"class",o)},i(d){c||(P(r,d),d&&(i||O(()=>{i=U(e,W,{y:100,duration:100}),i.start()})),c=!0)},o(d){S(r,d),c=!1},d(d){d&&h(e),r&&r.d(d),s[6](null),f=!1,Q(v)}}}const oe=s=>{s.stopPropagation()};function ae(s,e,t){let l;B(s,X,n=>t(3,l=n));let{$$slots:o={},$$scope:i}=e;const c=T();let{show:f=!1}=e,{className:v=""}=e,a=null;const r=n=>{n.key==="Escape"&&d()&&(console.log("Escape"),t(0,f=!1))},d=()=>{const n=document.getElementsByClassName("modal");return n.length&&n[n.length-1]===a};G(()=>{}),J(()=>{t(0,f=!1),a&&document.body.contains(a)&&(document.body.removeChild(a),document.body.style.overflow="unset")});function m(n){R[n?"unshift":"push"](()=>{a=n,t(2,a)})}const u=()=>{t(0,f=!1)};return s.$$set=n=>{"show"in n&&t(0,f=n.show),"className"in n&&t(1,v=n.className),"$$scope"in n&&t(4,i=n.$$scope)},s.$$.update=()=>{s.$$.dirty&5&&(f&&a?(document.body.appendChild(a),window.addEventListener("keydown",r),document.body.style.overflow="hidden"):a&&(c("close"),window.removeEventListener("keydown",r),document.body.contains(a)&&(document.body.removeChild(a),document.body.style.overflow="unset")))},[f,v,a,l,i,o,m,u]}class ue extends L{constructor(e){super(),M(this,e,ae,ne,N,{show:0,className:1})}}export{fe as A,ue as D};
//# sourceMappingURL=Drawer.B1OKbols.js.map
