import{a1 as Re,p as We,s as X,l as N,i as E,d as v,U as M,j as z,V as A,W as se,y as Z,r as B,e as T,c as O,a as W,a2 as S,Y as ae,v as j,w as D,x as I,u as _e,H as ge,t as Oe,b as Se,h as Be,f as le,A as Ue,k as ce,o as de,g as re,n as Q,I as Ve}from"./scheduler.Dg_Xn4WQ.js";import{S as w,i as x,g as F,a as h,c as Y,t as k,f as ze,b as H,d as q,m as L,e as G}from"./index.gNonUo3Z.js";import{e as me,u as He,o as qe}from"./each.dwVHsGX8.js";import{a as Le,t as Ge,o as Fe,w as Ye,m as ee,e as ie,f as V,g as Je,j as K,k as te,h as Ke,r as Qe,i as Xe,c as be}from"./updater.B0HmoELl.js";import{g as oe}from"./spread.CgU5AtxT.js";import{d as he,r as ue,w as Ze}from"./index.Dalr-O9q.js";import{C as we}from"./ChevronLeft.DO9C7Lvo.js";import{C as xe}from"./ChevronRight.BEWpFLO1.js";function $e({page:l=1,totalPages:e,siblingCount:n=1}){const t=[],s=new Set([1,e]),u=3+n,i=e-2-n;if(u>i)for(let o=2;o<=e-1;o++)s.add(o);else if(l<u)for(let o=2;o<=Math.min(u,e);o++)s.add(o);else if(l>i)for(let o=e-1;o>=Math.max(i,2);o--)s.add(o);else for(let o=Math.max(l-n,2);o<=Math.min(l+n,e);o++)s.add(o);const f=o=>{t.push({type:"page",value:o,key:`page-${o}`})},a=()=>{t.push({type:"ellipsis",key:`ellipsis-${t.length}`})};let r=0;for(const o of Array.from(s).sort((g,d)=>g-d))o-r>1&&a(),f(o),r=o;return t}const et={perPage:1,siblingCount:1,defaultPage:1},{name:ne,selector:fe}=Je("pagination");function tt(l){const e={...et,...l},n=e.page??Ze(e.defaultPage),t=Le(n,e==null?void 0:e.onPageChange),s=Ge(Fe(e,"page","onPageChange","defaultPage")),{perPage:u,siblingCount:i,count:f}=s,a=Ye.derived([f,u],([c,b])=>Math.ceil(c/b)),r=he([t,u,f],([c,b,C])=>{const P=(c-1)*b,R=Math.min(P+b,C);return{start:P,end:R}}),o=ee(ne(),{returned:()=>({"data-scope":"pagination"})}),g=he([t,a,i],([c,b,C])=>$e({page:c,totalPages:b,siblingCount:C})),d=c=>{const b=c.target;if(!K(b))return;const C=b.closest('[data-scope="pagination"]');if(!K(C))return;const P=Array.from(C.querySelectorAll(fe("page"))).filter(J=>K(J)),R=C.querySelector(fe("prev")),$=C.querySelector(fe("next"));K(R)&&P.unshift(R),K($)&&P.push($);const U=P.indexOf(b);c.key===te.ARROW_LEFT&&U!==0?(c.preventDefault(),P[U-1].focus()):c.key===te.ARROW_RIGHT&&U!==P.length-1?(c.preventDefault(),P[U+1].focus()):c.key===te.HOME?(c.preventDefault(),P[0].focus()):c.key===te.END&&(c.preventDefault(),P[P.length-1].focus())},_=ee(ne("page"),{stores:t,returned:c=>b=>({"aria-label":`Page ${b.value}`,"data-value":b.value,"data-selected":b.value===c?"":void 0}),action:c=>({destroy:ie(V(c,"click",()=>{const C=c.dataset.value;!C||Number.isNaN(+C)||t.set(Number(C))}),V(c,"keydown",d))})}),m=ee(ne("prev"),{stores:t,returned:c=>({"aria-label":"Previous",disabled:c<=1}),action:c=>({destroy:ie(V(c,"click",()=>{t.update(C=>Math.max(C-1,1))}),V(c,"keydown",d))})}),y=ee(ne("next"),{stores:[t,a],returned:([c,b])=>({"aria-label":"Next",disabled:c>=b}),action:c=>({destroy:ie(V(c,"click",()=>{const C=a.get();t.update(P=>Math.min(P+1,C))}),V(c,"keydown",d))})});return{elements:{root:o,pageTrigger:_,prevButton:m,nextButton:y},states:{range:ue(r),page:t,pages:ue(g),totalPages:ue(a)},options:s}}function je(){return{NAME:"pagination",PARTS:["root","prev-button","next-button","page"]}}function nt(l){const{NAME:e,PARTS:n}=je(),t=Ke(e,n),s={...tt(Qe(l)),getAttrs:t};return Re(e,s),{...s,updateOption:Xe(s.options)}}function pe(){const{NAME:l}=je();return We(l)}const lt=l=>({builder:l&4,pages:l&8,range:l&16}),ke=l=>({builder:l[2],pages:l[3],range:l[4]}),st=l=>({builder:l&4,pages:l&8,range:l&16}),ve=l=>({builder:l[2],pages:l[3],range:l[4]});function at(l){let e,n,t,s;const u=l[16].default,i=B(u,l,l[15],ke);let f=[l[2],l[8]],a={};for(let r=0;r<f.length;r+=1)a=A(a,f[r]);return{c(){e=T("div"),i&&i.c(),this.h()},l(r){e=O(r,"DIV",{});var o=W(e);i&&i.l(o),o.forEach(v),this.h()},h(){S(e,a)},m(r,o){E(r,e,o),i&&i.m(e,null),l[17](e),n=!0,t||(s=ae(l[2].action(e)),t=!0)},p(r,o){i&&i.p&&(!n||o&32796)&&j(i,u,r,r[15],n?I(u,r[15],o,lt):D(r[15]),ke),S(e,a=oe(f,[o&4&&r[2],o&256&&r[8]]))},i(r){n||(k(i,r),n=!0)},o(r){h(i,r),n=!1},d(r){r&&v(e),i&&i.d(r),l[17](null),t=!1,s()}}}function ot(l){let e;const n=l[16].default,t=B(n,l,l[15],ve);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,u){t&&t.m(s,u),e=!0},p(s,u){t&&t.p&&(!e||u&32796)&&j(t,n,s,s[15],e?I(n,s[15],u,st):D(s[15]),ve)},i(s){e||(k(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function rt(l){let e,n,t,s;const u=[ot,at],i=[];function f(a,r){return a[1]?0:1}return e=f(l),n=i[e]=u[e](l),{c(){n.c(),t=N()},l(a){n.l(a),t=N()},m(a,r){i[e].m(a,r),E(a,t,r),s=!0},p(a,[r]){let o=e;e=f(a),e===o?i[e].p(a,r):(F(),h(i[o],1,1,()=>{i[o]=null}),Y(),n=i[e],n?n.p(a,r):(n=i[e]=u[e](a),n.c()),k(n,1),n.m(t.parentNode,t))},i(a){s||(k(n),s=!0)},o(a){h(n),s=!1},d(a){a&&v(t),i[e].d(a)}}}function it(l,e,n){let t;const s=["count","page","onPageChange","perPage","siblingCount","asChild","el"];let u=M(e,s),i,f,a,{$$slots:r={},$$scope:o}=e,{count:g}=e,{page:d=void 0}=e,{onPageChange:_=void 0}=e,{perPage:m=void 0}=e,{siblingCount:y=void 0}=e,{asChild:c=!1}=e,{el:b=void 0}=e;const{elements:{root:C},states:{pages:P,range:R,page:$},getAttrs:U,updateOption:J}=nt({count:g,perPage:m,siblingCount:y,defaultPage:d,onPageChange:({next:p})=>(d!==p&&(_==null||_(p),n(9,d=p)),p)});z(l,C,p=>n(14,i=p)),z(l,P,p=>n(3,f=p)),z(l,R,p=>n(4,a=p));const De=U("root");function Ie(p){Z[p?"unshift":"push"](()=>{b=p,n(0,b)})}return l.$$set=p=>{e=A(A({},e),se(p)),n(8,u=M(e,s)),"count"in p&&n(10,g=p.count),"page"in p&&n(9,d=p.page),"onPageChange"in p&&n(11,_=p.onPageChange),"perPage"in p&&n(12,m=p.perPage),"siblingCount"in p&&n(13,y=p.siblingCount),"asChild"in p&&n(1,c=p.asChild),"el"in p&&n(0,b=p.el),"$$scope"in p&&n(15,o=p.$$scope)},l.$$.update=()=>{l.$$.dirty&512&&d!==void 0&&$.set(d),l.$$.dirty&16384&&n(2,t=i),l.$$.dirty&4&&Object.assign(t,De),l.$$.dirty&1024&&J("count",g),l.$$.dirty&4096&&J("perPage",m),l.$$.dirty&8192&&J("siblingCount",y)},[b,c,t,f,a,C,P,R,u,d,g,_,m,y,i,o,r,Ie]}class ut extends w{constructor(e){super(),x(this,e,it,rt,X,{count:10,page:9,onPageChange:11,perPage:12,siblingCount:13,asChild:1,el:0})}}const ft=l=>({builder:l&4}),ye=l=>({builder:l[2]}),ct=l=>({builder:l&4}),Ce=l=>({builder:l[2]});function dt(l){let e,n,t,s;const u=l[8].default,i=B(u,l,l[7],ye);let f=[l[2],{type:"button"},l[5]],a={};for(let r=0;r<f.length;r+=1)a=A(a,f[r]);return{c(){e=T("button"),i&&i.c(),this.h()},l(r){e=O(r,"BUTTON",{type:!0});var o=W(e);i&&i.l(o),o.forEach(v),this.h()},h(){S(e,a)},m(r,o){E(r,e,o),i&&i.m(e,null),e.autofocus&&e.focus(),l[9](e),n=!0,t||(s=[ae(l[2].action(e)),_e(e,"m-click",l[4])],t=!0)},p(r,o){i&&i.p&&(!n||o&132)&&j(i,u,r,r[7],n?I(u,r[7],o,ft):D(r[7]),ye),S(e,a=oe(f,[o&4&&r[2],{type:"button"},o&32&&r[5]]))},i(r){n||(k(i,r),n=!0)},o(r){h(i,r),n=!1},d(r){r&&v(e),i&&i.d(r),l[9](null),t=!1,ge(s)}}}function _t(l){let e;const n=l[8].default,t=B(n,l,l[7],Ce);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,u){t&&t.m(s,u),e=!0},p(s,u){t&&t.p&&(!e||u&132)&&j(t,n,s,s[7],e?I(n,s[7],u,ct):D(s[7]),Ce)},i(s){e||(k(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function gt(l){let e,n,t,s;const u=[_t,dt],i=[];function f(a,r){return a[1]?0:1}return e=f(l),n=i[e]=u[e](l),{c(){n.c(),t=N()},l(a){n.l(a),t=N()},m(a,r){i[e].m(a,r),E(a,t,r),s=!0},p(a,[r]){let o=e;e=f(a),e===o?i[e].p(a,r):(F(),h(i[o],1,1,()=>{i[o]=null}),Y(),n=i[e],n?n.p(a,r):(n=i[e]=u[e](a),n.c()),k(n,1),n.m(t.parentNode,t))},i(a){s||(k(n),s=!0)},o(a){h(n),s=!1},d(a){a&&v(t),i[e].d(a)}}}function bt(l,e,n){let t;const s=["asChild","el"];let u=M(e,s),i,{$$slots:f={},$$scope:a}=e,{asChild:r=void 0}=e,{el:o=void 0}=e;const{elements:{prevButton:g},getAttrs:d}=pe();z(l,g,c=>n(6,i=c));const _=d("prev-button"),m=be();function y(c){Z[c?"unshift":"push"](()=>{o=c,n(0,o)})}return l.$$set=c=>{e=A(A({},e),se(c)),n(5,u=M(e,s)),"asChild"in c&&n(1,r=c.asChild),"el"in c&&n(0,o=c.el),"$$scope"in c&&n(7,a=c.$$scope)},l.$$.update=()=>{l.$$.dirty&64&&n(2,t=i),l.$$.dirty&4&&Object.assign(t,_)},[o,r,t,g,m,u,i,a,f,y]}class pt extends w{constructor(e){super(),x(this,e,bt,gt,X,{asChild:1,el:0})}}const mt=l=>({builder:l&4}),Pe=l=>({builder:l[2]}),ht=l=>({builder:l&4}),Ee=l=>({builder:l[2]});function kt(l){let e,n,t,s;const u=l[8].default,i=B(u,l,l[7],Pe);let f=[l[2],{type:"button"},l[5]],a={};for(let r=0;r<f.length;r+=1)a=A(a,f[r]);return{c(){e=T("button"),i&&i.c(),this.h()},l(r){e=O(r,"BUTTON",{type:!0});var o=W(e);i&&i.l(o),o.forEach(v),this.h()},h(){S(e,a)},m(r,o){E(r,e,o),i&&i.m(e,null),e.autofocus&&e.focus(),l[9](e),n=!0,t||(s=[ae(l[2].action(e)),_e(e,"m-click",l[4])],t=!0)},p(r,o){i&&i.p&&(!n||o&132)&&j(i,u,r,r[7],n?I(u,r[7],o,mt):D(r[7]),Pe),S(e,a=oe(f,[o&4&&r[2],{type:"button"},o&32&&r[5]]))},i(r){n||(k(i,r),n=!0)},o(r){h(i,r),n=!1},d(r){r&&v(e),i&&i.d(r),l[9](null),t=!1,ge(s)}}}function vt(l){let e;const n=l[8].default,t=B(n,l,l[7],Ee);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,u){t&&t.m(s,u),e=!0},p(s,u){t&&t.p&&(!e||u&132)&&j(t,n,s,s[7],e?I(n,s[7],u,ht):D(s[7]),Ee)},i(s){e||(k(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function yt(l){let e,n,t,s;const u=[vt,kt],i=[];function f(a,r){return a[1]?0:1}return e=f(l),n=i[e]=u[e](l),{c(){n.c(),t=N()},l(a){n.l(a),t=N()},m(a,r){i[e].m(a,r),E(a,t,r),s=!0},p(a,[r]){let o=e;e=f(a),e===o?i[e].p(a,r):(F(),h(i[o],1,1,()=>{i[o]=null}),Y(),n=i[e],n?n.p(a,r):(n=i[e]=u[e](a),n.c()),k(n,1),n.m(t.parentNode,t))},i(a){s||(k(n),s=!0)},o(a){h(n),s=!1},d(a){a&&v(t),i[e].d(a)}}}function Ct(l,e,n){let t;const s=["asChild","el"];let u=M(e,s),i,{$$slots:f={},$$scope:a}=e,{asChild:r=void 0}=e,{el:o=void 0}=e;const{elements:{nextButton:g},getAttrs:d}=pe();z(l,g,c=>n(6,i=c));const _=d("next-button"),m=be();function y(c){Z[c?"unshift":"push"](()=>{o=c,n(0,o)})}return l.$$set=c=>{e=A(A({},e),se(c)),n(5,u=M(e,s)),"asChild"in c&&n(1,r=c.asChild),"el"in c&&n(0,o=c.el),"$$scope"in c&&n(7,a=c.$$scope)},l.$$.update=()=>{l.$$.dirty&64&&n(2,t=i),l.$$.dirty&4&&Object.assign(t,_)},[o,r,t,g,m,u,i,a,f,y]}class Pt extends w{constructor(e){super(),x(this,e,Ct,yt,X,{asChild:1,el:0})}}const Et=l=>({builder:l&8}),Ne=l=>({builder:l[3]}),Nt=l=>({builder:l&8}),Ae=l=>({builder:l[3]});function At(l){let e,n,t,s;const u=l[9].default,i=B(u,l,l[8],Ne),f=i||Tt(l);let a=[{type:"button"},l[3],l[6]],r={};for(let o=0;o<a.length;o+=1)r=A(r,a[o]);return{c(){e=T("button"),f&&f.c(),this.h()},l(o){e=O(o,"BUTTON",{type:!0});var g=W(e);f&&f.l(g),g.forEach(v),this.h()},h(){S(e,r)},m(o,g){E(o,e,g),f&&f.m(e,null),e.autofocus&&e.focus(),l[10](e),n=!0,t||(s=[ae(l[3].action(e)),_e(e,"m-click",l[5])],t=!0)},p(o,g){i?i.p&&(!n||g&264)&&j(i,u,o,o[8],n?I(u,o[8],g,Et):D(o[8]),Ne):f&&f.p&&(!n||g&4)&&f.p(o,n?g:-1),S(e,r=oe(a,[{type:"button"},g&8&&o[3],g&64&&o[6]]))},i(o){n||(k(f,o),n=!0)},o(o){h(f,o),n=!1},d(o){o&&v(e),f&&f.d(o),l[10](null),t=!1,ge(s)}}}function Mt(l){let e;const n=l[9].default,t=B(n,l,l[8],Ae);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,u){t&&t.m(s,u),e=!0},p(s,u){t&&t.p&&(!e||u&264)&&j(t,n,s,s[8],e?I(n,s[8],u,Nt):D(s[8]),Ae)},i(s){e||(k(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function Tt(l){let e=l[2].value+"",n;return{c(){n=Oe(e)},l(t){n=Se(t,e)},m(t,s){E(t,n,s)},p(t,s){s&4&&e!==(e=t[2].value+"")&&Be(n,e)},d(t){t&&v(n)}}}function Ot(l){let e,n,t,s;const u=[Mt,At],i=[];function f(a,r){return a[1]?0:1}return e=f(l),n=i[e]=u[e](l),{c(){n.c(),t=N()},l(a){n.l(a),t=N()},m(a,r){i[e].m(a,r),E(a,t,r),s=!0},p(a,[r]){let o=e;e=f(a),e===o?i[e].p(a,r):(F(),h(i[o],1,1,()=>{i[o]=null}),Y(),n=i[e],n?n.p(a,r):(n=i[e]=u[e](a),n.c()),k(n,1),n.m(t.parentNode,t))},i(a){s||(k(n),s=!0)},o(a){h(n),s=!1},d(a){a&&v(t),i[e].d(a)}}}function St(l,e,n){let t;const s=["asChild","page","el"];let u=M(e,s),i,{$$slots:f={},$$scope:a}=e,{asChild:r=void 0}=e,{page:o}=e,{el:g=void 0}=e;const{elements:{pageTrigger:d},getAttrs:_}=pe();z(l,d,b=>n(7,i=b));const m=_("page"),y=be();function c(b){Z[b?"unshift":"push"](()=>{g=b,n(0,g)})}return l.$$set=b=>{e=A(A({},e),se(b)),n(6,u=M(e,s)),"asChild"in b&&n(1,r=b.asChild),"page"in b&&n(2,o=b.page),"el"in b&&n(0,g=b.el),"$$scope"in b&&n(8,a=b.$$scope)},l.$$.update=()=>{l.$$.dirty&132&&n(3,t=i(o)),l.$$.dirty&8&&Object.assign(t,m)},[g,r,o,t,d,y,u,i,a,f,c]}class Bt extends w{constructor(e){super(),x(this,e,St,Ot,X,{asChild:1,page:2,el:0})}}function Me(l,e,n){const t=l.slice();return t[0]=e[n],t}function jt(l){let e,n;return e=new we({props:{className:"size-4",strokeWidth:"2"}}),{c(){H(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){L(e,t,s),n=!0},p:Q,i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Dt(l){let e,n;return e=new Bt({props:{page:l[0],class:"inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 text-sm font-medium hover:bg-dark-10 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-transparent data-[selected]:bg-gray-50 data-[selected]:text-gray-700 data-[selected]:hover:bg-gray-100 dark:data-[selected]:bg-gray-850 dark:data-[selected]:text-gray-50 dark:data-[selected]:hover:bg-gray-800 transition",$$slots:{default:[Rt]},$$scope:{ctx:l}}}),{c(){H(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){L(e,t,s),n=!0},p(t,s){const u={};s&16&&(u.page=t[0]),s&144&&(u.$$scope={dirty:s,ctx:t}),e.$set(u)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function It(l){let e,n="...";return{c(){e=T("div"),e.textContent=n,this.h()},l(t){e=O(t,"DIV",{class:!0,"data-svelte-h":!0}),Ve(e)!=="svelte-17gfj4t"&&(e.textContent=n),this.h()},h(){le(e,"class","text-sm font-medium text-foreground-alt")},m(t,s){E(t,e,s)},p:Q,i:Q,o:Q,d(t){t&&v(e)}}}function Rt(l){let e=l[0].value+"",n,t;return{c(){n=Oe(e),t=ce()},l(s){n=Se(s,e),t=de(s)},m(s,u){E(s,n,u),E(s,t,u)},p(s,u){u&16&&e!==(e=s[0].value+"")&&Be(n,e)},d(s){s&&(v(n),v(t))}}}function Te(l,e){let n,t,s,u,i;const f=[It,Dt],a=[];function r(o,g){return o[0].type==="ellipsis"?0:1}return t=r(e),s=a[t]=f[t](e),{key:l,first:null,c(){n=N(),s.c(),u=N(),this.h()},l(o){n=N(),s.l(o),u=N(),this.h()},h(){this.first=n},m(o,g){E(o,n,g),a[t].m(o,g),E(o,u,g),i=!0},p(o,g){e=o;let d=t;t=r(e),t===d?a[t].p(e,g):(F(),h(a[d],1,1,()=>{a[d]=null}),Y(),s=a[t],s?s.p(e,g):(s=a[t]=f[t](e),s.c()),k(s,1),s.m(u.parentNode,u))},i(o){i||(k(s),i=!0)},o(o){h(s),i=!1},d(o){o&&(v(n),v(u)),a[t].d(o)}}}function Wt(l){let e,n;return e=new xe({props:{className:"size-4",strokeWidth:"2"}}),{c(){H(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){L(e,t,s),n=!0},p:Q,i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Ut(l){let e,n,t,s,u=[],i=new Map,f,a,r;n=new pt({props:{class:"mr-[25px] inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent",$$slots:{default:[jt]},$$scope:{ctx:l}}});let o=me(l[4]);const g=d=>d[0].key;for(let d=0;d<o.length;d+=1){let _=Me(l,o,d),m=g(_);i.set(m,u[d]=Te(m,_))}return a=new Pt({props:{class:"ml-[25px]  inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent",$$slots:{default:[Wt]},$$scope:{ctx:l}}}),{c(){e=T("div"),H(n.$$.fragment),t=ce(),s=T("div");for(let d=0;d<u.length;d+=1)u[d].c();f=ce(),H(a.$$.fragment),this.h()},l(d){e=O(d,"DIV",{class:!0});var _=W(e);q(n.$$.fragment,_),t=de(_),s=O(_,"DIV",{class:!0});var m=W(s);for(let y=0;y<u.length;y+=1)u[y].l(m);m.forEach(v),f=de(_),q(a.$$.fragment,_),_.forEach(v),this.h()},h(){le(s,"class","flex items-center gap-2.5"),le(e,"class","my-2 flex items-center")},m(d,_){E(d,e,_),L(n,e,null),re(e,t),re(e,s);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(s,null);re(e,f),L(a,e,null),r=!0},p(d,_){const m={};_&128&&(m.$$scope={dirty:_,ctx:d}),n.$set(m),_&16&&(o=me(d[4]),F(),u=He(u,_,g,1,d,o,i,s,qe,Te,null,Me),Y());const y={};_&128&&(y.$$scope={dirty:_,ctx:d}),a.$set(y)},i(d){if(!r){k(n.$$.fragment,d);for(let _=0;_<o.length;_+=1)k(u[_]);k(a.$$.fragment,d),r=!0}},o(d){h(n.$$.fragment,d);for(let _=0;_<u.length;_+=1)h(u[_]);h(a.$$.fragment,d),r=!1},d(d){d&&v(e),G(n);for(let _=0;_<u.length;_+=1)u[_].d();G(a)}}}function Vt(l){let e,n,t,s;function u(f){l[3](f)}let i={count:l[1],perPage:l[2],$$slots:{default:[Ut,({pages:f})=>({4:f}),({pages:f})=>f?16:0]},$$scope:{ctx:l}};return l[0]!==void 0&&(i.page=l[0]),n=new ut({props:i}),Z.push(()=>ze(n,"page",u)),{c(){e=T("div"),H(n.$$.fragment),this.h()},l(f){e=O(f,"DIV",{class:!0});var a=W(e);q(n.$$.fragment,a),a.forEach(v),this.h()},h(){le(e,"class","flex justify-center")},m(f,a){E(f,e,a),L(n,e,null),s=!0},p(f,[a]){const r={};a&2&&(r.count=f[1]),a&4&&(r.perPage=f[2]),a&144&&(r.$$scope={dirty:a,ctx:f}),!t&&a&1&&(t=!0,r.page=f[0],Ue(()=>t=!1)),n.$set(r)},i(f){s||(k(n.$$.fragment,f),s=!0)},o(f){h(n.$$.fragment,f),s=!1},d(f){f&&v(e),G(n)}}}function zt(l,e,n){let{page:t=0}=e,{count:s=0}=e,{perPage:u=20}=e;function i(f){t=f,n(0,t)}return l.$$set=f=>{"page"in f&&n(0,t=f.page),"count"in f&&n(1,s=f.count),"perPage"in f&&n(2,u=f.perPage)},[t,s,u,i]}class Qt extends w{constructor(e){super(),x(this,e,zt,Vt,X,{page:0,count:1,perPage:2})}}export{Qt as P};
//# sourceMappingURL=Pagination.B9OTMUpA.js.map
