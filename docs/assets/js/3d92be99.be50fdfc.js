"use strict";(self.webpackChunkha_casa_docs=self.webpackChunkha_casa_docs||[]).push([[528],{1861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(5893),o=n(1151);const s={order:1,title:"Configuration",hide_table_of_contents:!0},r=void 0,i={id:"getting-started/configuration",title:"Configuration",description:"Now you've downloaded and uploaded all the nesesarry files we need to change some configuration to make this all work.",source:"@site/docs/getting-started/02-configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/HaCasa/getting-started/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/damianeickhoff/HaCasa/docs/getting-started/02-configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{order:1,title:"Configuration",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Download",permalink:"/HaCasa/getting-started/download"},next:{title:"Alarm Card",permalink:"/HaCasa/cards/alarm"}},d={},l=[{value:"Theme",id:"theme",level:2},{value:'UI Mode <span class="badge">Not Supported</span>',id:"ui-mode-not-supported",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Now you've downloaded and uploaded all the nesesarry files we need to change some configuration to make this all work."}),"\n",(0,a.jsx)(t.h2,{id:"theme",children:"Theme"}),"\n",(0,a.jsxs)(t.p,{children:["To load the theme file, you will need to add this line to your ",(0,a.jsx)(t.code,{children:"configuration.yaml"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"frontend:\r\n  themes: !include_dir_merge_named themes\n"})}),"\n",(0,a.jsx)(t.p,{children:"This is not only needed for the HaCasa theme, but just any custom theme you want to use."}),"\n",(0,a.jsxs)(t.p,{children:["After that, you will need to add the following code to your ",(0,a.jsx)(t.code,{children:"configuration.yaml"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'lovelace:\r\n  mode: "storage"\r\n  resources:\r\n    - url: "/hacsfiles/button-card/button-card.js"\r\n      type: "module"\r\n    - url: "/hacsfiles/my-cards/my-cards.js"\r\n      type: "module"\r\n    - url: "/hacsfiles/Bubble-Card/bubble-card.js"\r\n      type: "module"\r\n    - url:  "/hacsfiles/mini-graph-card/mini-graph-card-bundle.js"\r\n      type: "module"\r\n    - url:  "/hacsfiles/lovelace-mushroom/mushroom.js"\r\n      type: "module"\r\n    - url: "/hacsfiles/kiosk-mode/kiosk-mode.js"\r\n      type: module\r\n    - url: "/hacsfiles/decluttering-card/decluttering-card.js"\r\n      type: module\r\n    - url: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900"\r\n      type: css\r\n  dashboards:\r\n    HaCasa:\r\n      mode: "yaml"\r\n      title: HaCasa\r\n      icon: mdi:script\r\n      show_in_sidebar: true\r\n      filename: "dashboard/HaCasa/main.yaml"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Restart your Home Assistant and after it booted up, you should see a new dashboard in the menu with the name ",(0,a.jsx)(t.code,{children:"HaCasa"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Its also important that you change the theme in your HA profile. You can do that ",(0,a.jsx)(t.a,{href:"https://my.home-assistant.io/redirect/profile",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.h2,{id:"ui-mode-not-supported",children:["UI Mode ",(0,a.jsx)("span",{class:"badge",children:"Not Supported"})]}),"\n",(0,a.jsx)(t.p,{children:"Home Assistant doens't allow to include folders and files in the UI-Mode. Therefore it can't be used with the structure HaCasa uses. You could add the templates manually to the raw config, but this is not recommended and thus we can't support that way of using HaCasa."})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(7294);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);