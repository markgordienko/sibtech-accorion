(function(){"use strict";var i={235:function(i,e,t){var n=t(963),o=t(252);const a={class:"task-container"},u=(0,o._)("p",null,"Какая-то информация в параграфе",-1),r=(0,o._)("div",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ",-1),l=(0,o._)("div",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ",-1),c=(0,o._)("div",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ",-1),s=(0,o._)("div",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ",-1),d=(0,o._)("div",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ",-1);function m(i,e,t,n,m,p){const f=(0,o.up)("AccordionItem");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(f,{title:"1ый элемент внешнего аккордеона"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Uk)(" Здесь находится наполнение 1го элемента внешнего аккордеона "),u,(0,o.Wm)(f,{title:"1ый элемент внутреннего аккордеона"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Uk)(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum "),(0,o.Wm)(f,{title:"1ый элемент внутреннего внутреннего аккордеона"},{default:(0,o.w5)((()=>[r])),_:1})])])),_:1}),(0,o.Wm)(f,{title:"2ой элемент внутреннего аккордеона (развернут по-умолчанию)","initial-state":!0},{default:(0,o.w5)((()=>[l])),_:1})])])),_:1}),(0,o.Wm)(f,{title:"2ой элемент внешнего аккордеона"},{default:(0,o.w5)((()=>[c])),_:1}),(0,o.Wm)(f,{title:"3ий элемент внешнего аккордеона"},{default:(0,o.w5)((()=>[s])),_:1}),(0,o.Wm)(f,{title:"4ый элемент внешнего аккордеона"},{default:(0,o.w5)((()=>[d])),_:1})])}var p=t(577);const f={class:"accordion-container"},v={class:"content-inner"};function g(i,e,t,n,a,u){return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",{onClick:e[0]||(e[0]=(...i)=>u.toggleAccordion&&u.toggleAccordion(...i)),class:"accordion-header"},(0,p.zw)(t.title),1),(0,o._)("div",{class:(0,p.C_)(["accordion-content",{active:i.isOpen}])},[(0,o._)("div",v,[(0,o.WI)(i.$slots,"default")])],2)])}var b={data:()=>({isOpen:!1}),name:"AccordionItem",props:{title:String,initialState:{type:Boolean,default:!1}},created(){this.isOpen=this.initialState},methods:{toggleAccordion(){this.isOpen=!this.isOpen}}},q=t(744);const h=(0,q.Z)(b,[["render",g]]);var x=h,_={name:"App",components:{AccordionItem:x}};const w=(0,q.Z)(_,[["render",m]]);var O=w;(0,n.ri)(O).mount("#app")}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return i[n](a,a.exports,t),a.exports}t.m=i,function(){var i=[];t.O=function(e,n,o,a){if(!n){var u=1/0;for(s=0;s<i.length;s++){n=i[s][0],o=i[s][1],a=i[s][2];for(var r=!0,l=0;l<n.length;l++)(!1&a||u>=a)&&Object.keys(t.O).every((function(i){return t.O[i](n[l])}))?n.splice(l--,1):(r=!1,a<u&&(u=a));if(r){i.splice(s--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var s=i.length;s>0&&i[s-1][2]>a;s--)i[s]=i[s-1];i[s]=[n,o,a]}}(),function(){t.d=function(i,e){for(var n in e)t.o(e,n)&&!t.o(i,n)&&Object.defineProperty(i,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}()}(),function(){t.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)}}(),function(){var i={143:0};t.O.j=function(e){return 0===i[e]};var e=function(e,n){var o,a,u=n[0],r=n[1],l=n[2],c=0;if(u.some((function(e){return 0!==i[e]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(l)var s=l(t)}for(e&&e(n);c<u.length;c++)a=u[c],t.o(i,a)&&i[a]&&i[a][0](),i[a]=0;return t.O(s)},n=self["webpackChunksibtech_accordion"]=self["webpackChunksibtech_accordion"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(235)}));n=t.O(n)})();
//# sourceMappingURL=app.48a8e7b5.js.map