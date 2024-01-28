"use strict";(self.webpackChunkha_casa_docs=self.webpackChunkha_casa_docs||[]).push([[614],{1157:(t,s,e)=>{e.r(s),e.d(s,{assets:()=>n,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>r});var a=e(5893),h=e(1151);const d={icon:"light-bulb",title:"Light Card",hide_table_of_contents:!0},i=void 0,c={id:"cards/light-card",title:"Light Card",description:"The light-card, used for a light entity, displays the current state and brightness (if available). Its uses a slider where you can set the brightness with. It hides the slider if the state is off.",source:"@site/docs/cards/light-card.md",sourceDirName:"cards",slug:"/cards/light-card",permalink:"/HaCasa/cards/light-card",draft:!1,unlisted:!1,editUrl:"https://github.com/damianeickhoff/HaCasa/docs/cards/light-card.md",tags:[],version:"current",frontMatter:{icon:"light-bulb",title:"Light Card",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Fan Card",permalink:"/HaCasa/cards/fan-card"},next:{title:"Mediaplayer Music",permalink:"/HaCasa/cards/mediaplayer-music-card"}},n={},r=[{value:"Usage",id:"usage",level:2}];function l(t){const s={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,h.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"light-card"}),", used for a light entity, displays the current state and brightness (if available). Its uses a slider where you can set the brightness with. It hides the slider if the state is off."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.img,{alt:"Light",src:e(765).Z+"",width:"542",height:"178"}),"\r\n",(0,a.jsx)(s.img,{alt:"Light Dark",src:e(5321).Z+"",width:"323",height:"146"})]}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:'type: "custom:button-card"\r\nentity: light.bedroom\r\nlabel: Bedroom\r\ntemplate:\r\n  - custom_card_light\n'})}),"\n",(0,a.jsx)("a",{href:"https://github.com/damianeickhoff/HaCasa/blob/main/dashboard/HaCasa/templates/custom_card_light/custom_card_light.yaml",class:"template-button",target:"_blank",children:"Template"})]})}function m(t={}){const{wrapper:s}={...(0,h.a)(),...t.components};return s?(0,a.jsx)(s,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},5321:(t,s,e)=>{e.d(s,{Z:()=>a});const a="data:image/png;base64,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"},765:(t,s,e)=>{e.d(s,{Z:()=>a});const a=e.p+"assets/images/light-8bceab95ac296b0c6e6e7377dc087c47.png"},1151:(t,s,e)=>{e.d(s,{Z:()=>c,a:()=>i});var a=e(7294);const h={},d=a.createContext(h);function i(t){const s=a.useContext(d);return a.useMemo((function(){return"function"==typeof t?t(s):{...s,...t}}),[s,t])}function c(t){let s;return s=t.disableParentContext?"function"==typeof t.components?t.components(h):t.components||h:i(t.components),a.createElement(d.Provider,{value:s},t.children)}}}]);