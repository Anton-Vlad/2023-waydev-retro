import{d,u as _,a as p,c as m,b as h,r as u,e as s,f as t,t as a,g as l,F as f,h as v,n as g,i as x,o as n,j as y,k as b,l as N,m as k,_ as w}from"./index-4m_kZAd8.js";import{N as P}from"./NoteDisplay-FVuHxaBt.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},j={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const c=h(()=>u.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),s("div",{id:"page-root",style:g(l(x))},[t("div",V,[t("div",L,[t("h1",S,a(l(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(n(!0),s(f,null,v(c.value,(e,i)=>(n(),s("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",j,[t("div",B,[t("div",D,a(e==null?void 0:e.no)+"/"+a(l(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),H])]),N(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(n(),s("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/vlad/projects/2023-waydev-retro/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
