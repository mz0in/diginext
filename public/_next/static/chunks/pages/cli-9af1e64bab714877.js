(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{59762:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cli",function(){return t(58454)}])},53068:function(e,s,t){"use strict";t.d(s,{Hc:function(){return c},mO:function(){return n}});var i=t(14223);let n=e=>(0,i.wz)(["users","list"],"/api/v1/user",e),c=e=>(0,i.yt)(["users"],"/api/v1/user/join-workspace",e)},7154:function(e,s,t){"use strict";var i=t(85893),n=t(11163),c=t(67294),a=t(5678);let r=e=>{let s=(0,n.useRouter)(),{isDarkMode:t}=(0,a.vs)(),[r,o]=(0,c.useState)("".concat(s.basePath,"/assets/images/diginext_logo_white.svg"));return(0,c.useEffect)(()=>{o(t?"".concat(s.basePath,"/assets/images/diginext_logo_white.svg"):"".concat(s.basePath,"/assets/images/diginext_logo.svg"))},[t]),(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("div",{className:"mx-auto my-5 w-64 text-center ".concat(e.className),children:(0,i.jsx)("img",{src:r,alt:"Diginext Logo"})}),e.useTagline&&(0,i.jsx)("div",{className:"mb-6",children:"Build faster. Deploy easier. More flexible."})]})};s.Z=r},58454:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return E}});var i=t(85893),n=t(73403),c=t(71577),a=t(99138),r=t(96486),o=t(41664),l=t.n(o),u=t(11163),d=t(67294),h=t(45669),p=t(53068),x=t(69931),m=t(57132),f=t(22850),g=t(5678);let v=e=>{let{children:s,value:t}=e,[n,a]=(0,g.m9)();return(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)(f.Z.Paragraph,{children:(0,i.jsx)("pre",{children:t})}),(0,i.jsx)(c.Z,{type:"primary",danger:!(0,r.isEmpty)(n),size:"large",onClick:()=>a(t),icon:(0,i.jsx)(m.Z,{}),children:n?"Copied":"Copy"})]})};var j=t(7154),w=t(91144),_=t(4651),k=t(69008);t(51369);let y=()=>{var e;(0,u.useRouter)();let s=null==window?void 0:null===(e=window.location)||void 0===e?void 0:e.origin,[t,{isFetched:o}]=(0,h.aC)({redirectUrl:"".concat(s,"/cli")}),[m]=(0,p.Hc)(),f=(null==t?void 0:t.workspaces)&&(null==t?void 0:t.workspaces.length)>0?null==t?void 0:t.workspaces[0].slug:void 0,g=(0,w.c)({name:f}),{slug:y}=g||{},E=async e=>{if(!y||!g)return;let s=await m({userId:e,workspace:y});console.log("joinedUser :>> ",s)};return(0,d.useEffect)(()=>{(0,r.isEmpty)(t)||E(t._id)},[t,g]),!(0,r.isEmpty)(t)&&(0,i.jsx)(_.o,{useSidebar:!1,meta:(0,i.jsx)(k.h,{title:"CLI Authentication",description:"Authenticate before using the CLI commands."}),children:(0,i.jsxs)(x.Z,{className:"max-w-md ",children:[(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)(j.Z,{})}),(0,r.isEmpty)(g)?(0,i.jsx)(a.Z,{message:"Error",description:"This workspace does not exists.",type:"error",showIcon:!0}):(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("p",{children:"Copy & paste this ACCESS TOKEN into your command interface:"}),(0,i.jsx)(v,{value:(0,r.isEmpty)(t)?"":(null==t?void 0:t.token).access_token}),(0,i.jsx)(c.Z,{size:"large",className:"mt-2",href:"/",icon:(0,i.jsx)(n.Z,{}),children:"Dashboard"})]})]})})};var E=y},69008:function(e,s,t){"use strict";t.d(s,{h:function(){return l}});var i=t(85893),n=t(9008),c=t.n(n),a=t(11163),r=t(2962),o=t(51369);let l=e=>{let s=(0,a.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"".concat(s.basePath,"/apple-touch-icon.png")},"apple"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(s.basePath,"/favicon-32x32.png")},"icon32"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(s.basePath,"/favicon-16x16.png")},"icon16"),(0,i.jsx)("link",{rel:"icon",href:"".concat(s.basePath,"/favicon.ico")},"favicon")]}),(0,i.jsx)(r.PB,{title:"".concat(e.title," | ").concat(o.XL.site_name),description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o.XL.locale,site_name:o.XL.site_name}}),(0,i.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",rel:"stylesheet"})]})}}},function(e){e.O(0,[662,762,175,201,374,774,888,179],function(){return e(e.s=59762)}),_N_E=e.O()}]);