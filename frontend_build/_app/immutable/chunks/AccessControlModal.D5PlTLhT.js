import{s as B,E as I,F as N,a as w,d as v,f,i as D,g,n as V,y as T,A as W,p as J,j as K,e as k,t as P,k as j,c as b,b as Q,o as x,I as X,u as Y,h as $}from"./scheduler.Dg_Xn4WQ.js";import{S as z,i as H,f as y,b as S,d as q,m as F,t as O,a as U,e as Z}from"./index.gNonUo3Z.js";import{M as ee}from"./Modal.DLh1UrlN.js";import{A as se}from"./AccessControl.BdBhtnxq.js";function te(a){let e,s;return{c(){e=I("svg"),s=I("path"),this.h()},l(t){e=N(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var o=w(e);s=N(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),w(s).forEach(v),o.forEach(v),this.h()},h(){f(s,"stroke-linecap","round"),f(s,"stroke-linejoin","round"),f(s,"d","M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"fill","none"),f(e,"viewBox","0 0 24 24"),f(e,"stroke-width",a[1]),f(e,"stroke","currentColor"),f(e,"class",a[0])},m(t,o){D(t,e,o),g(e,s)},p(t,[o]){o&2&&f(e,"stroke-width",t[1]),o&1&&f(e,"class",t[0])},i:V,o:V,d(t){t&&v(e)}}}function ne(a,e,s){let{className:t="size-4"}=e,{strokeWidth:o="1.5"}=e;return a.$$set=l=>{"className"in l&&s(0,t=l.className),"strokeWidth"in l&&s(1,o=l.strokeWidth)},[t,o]}class ue extends z{constructor(e){super(),H(this,e,ne,te,B,{className:0,strokeWidth:1})}}function ae(a){let e,s,t,o=a[4].t("Access Control")+"",l,n,r,d='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>',C,_,u,c,p,L,A;function G(i){a[7](i)}let E={onChange:a[3],accessRoles:a[2]};return a[1]!==void 0&&(E.accessControl=a[1]),u=new se({props:E}),T.push(()=>y(u,"accessControl",G)),{c(){e=k("div"),s=k("div"),t=k("div"),l=P(o),n=j(),r=k("button"),r.innerHTML=d,C=j(),_=k("div"),S(u.$$.fragment),this.h()},l(i){e=b(i,"DIV",{});var h=w(e);s=b(h,"DIV",{class:!0});var m=w(s);t=b(m,"DIV",{class:!0});var M=w(t);l=Q(M,o),M.forEach(v),n=x(m),r=b(m,"BUTTON",{class:!0,"data-svelte-h":!0}),X(r)!=="svelte-745w2y"&&(r.innerHTML=d),m.forEach(v),C=x(h),_=b(h,"DIV",{class:!0});var R=w(_);q(u.$$.fragment,R),R.forEach(v),h.forEach(v),this.h()},h(){f(t,"class","text-lg font-medium self-center font-primary"),f(r,"class","self-center"),f(s,"class","flex justify-between dark:text-gray-100 px-5 pt-3 pb-1"),f(_,"class","w-full px-5 pb-4 dark:text-white")},m(i,h){D(i,e,h),g(e,s),g(s,t),g(t,l),g(s,n),g(s,r),g(e,C),g(e,_),F(u,_,null),p=!0,L||(A=Y(r,"click",a[6]),L=!0)},p(i,h){(!p||h&16)&&o!==(o=i[4].t("Access Control")+"")&&$(l,o);const m={};h&8&&(m.onChange=i[3]),h&4&&(m.accessRoles=i[2]),!c&&h&2&&(c=!0,m.accessControl=i[1],W(()=>c=!1)),u.$set(m)},i(i){p||(O(u.$$.fragment,i),p=!0)},o(i){U(u.$$.fragment,i),p=!1},d(i){i&&v(e),Z(u),L=!1,A()}}}function oe(a){let e,s,t;function o(n){a[8](n)}let l={size:"sm",$$slots:{default:[ae]},$$scope:{ctx:a}};return a[0]!==void 0&&(l.show=a[0]),e=new ee({props:l}),T.push(()=>y(e,"show",o)),{c(){S(e.$$.fragment)},l(n){q(e.$$.fragment,n)},m(n,r){F(e,n,r),t=!0},p(n,[r]){const d={};r&543&&(d.$$scope={dirty:r,ctx:n}),!s&&r&1&&(s=!0,d.show=n[0],W(()=>s=!1)),e.$set(d)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){U(e.$$.fragment,n),t=!1},d(n){Z(e,n)}}}function le(a,e,s){let t;const o=J("i18n");K(a,o,c=>s(4,t=c));let{show:l=!1}=e,{accessControl:n=null}=e,{accessRoles:r=["read"]}=e,{onChange:d=()=>{}}=e;const C=()=>{s(0,l=!1)};function _(c){n=c,s(1,n)}function u(c){l=c,s(0,l)}return a.$$set=c=>{"show"in c&&s(0,l=c.show),"accessControl"in c&&s(1,n=c.accessControl),"accessRoles"in c&&s(2,r=c.accessRoles),"onChange"in c&&s(3,d=c.onChange)},[l,n,r,d,t,o,C,_,u]}class he extends z{constructor(e){super(),H(this,e,le,oe,B,{show:0,accessControl:1,accessRoles:2,onChange:3})}}export{he as A,ue as L};
//# sourceMappingURL=AccessControlModal.D5PlTLhT.js.map
