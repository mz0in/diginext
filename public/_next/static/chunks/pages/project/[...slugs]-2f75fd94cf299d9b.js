(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{89045:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[...slugs]",function(){return n(56798)}])},23139:function(e,t,n){"use strict";n.d(t,{VD:function(){return r},Ys:function(){return a},_M:function(){return s}});var i=n(14223);let r=e=>(0,i.wz)(["apps","list"],"/api/v1/app",e),s=()=>(0,i.TV)(["apps","delete"],"/api/v1/app"),a=()=>(0,i.TV)(["projects","apps","environment","delete"],"/api/v1/app/environment")},60130:function(e,t,n){"use strict";n.d(t,{BT:function(){return s},E_:function(){return a},Zz:function(){return r}});var i=n(14223);let r=e=>(0,i.wz)(["projects","list"],"/api/v1/project",e),s=e=>(0,i.wz)(["projects","list"],"/api/v1/project/with-apps",e),a=()=>(0,i.TV)(["projects","delete"],"/api/v1/project")},45788:function(e,t,n){"use strict";n.d(t,{D:function(){return x},V:function(){return j}});var i=n(85893),r=n(42952),s=n(89705),a=n(73403),c=n(92195),o=n(71577),l=n(75527),d=n(26713),u=n(11163),p=n(5678);function x(e){let{token:{colorTextHeading:t}}=c.Z.useToken(),{isDarkMode:n}=(0,p.vs)(),{color:r=n?"white":"black",value:s}=e;return(0,i.jsx)("h1",{className:"my-0 grow py-0 pt-2 text-xl font-bold",style:{color:r},children:s})}let j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,u.useRouter)(),{breadcrumbs:n=[],title:p="Page Title",actions:j=[(0,i.jsx)(o.Z,{type:"default",icon:(0,i.jsx)(r.Z,{className:"align-middle"}),children:"Settings"},"workspace-setting-btn"),(0,i.jsx)(o.Z,{type:"default",icon:(0,i.jsx)(s.Z,{className:"align-middle"})},"more-btn")]}=e,{token:{colorTextHeading:f}}=c.Z.useToken();return(0,i.jsxs)("div",{className:"border-b border-gray-300 px-6 py-4",children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(l.Z.Item,{href:"".concat(t.basePath,"/"),children:(0,i.jsx)(a.Z,{})},"breadcrumb-home"),n.map((e,t)=>(0,i.jsxs)(l.Z.Item,{href:e.url,children:[e.icon,(0,i.jsx)("span",{children:e.name})]},"breadcrumb-".concat(t)))]}),(0,i.jsxs)("div",{className:" flex w-full flex-row",children:[(0,i.jsx)(x,{value:p}),(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{children:j})})]})]})}},56798:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var i=n(85893);n(67294);var r=n(45669),s=n(45788),a=n(8751),c=n(86548),o=n(30159),l=n(99611),d=n(50067),u=n(10524),p=n(56466),x=n(71577),j=n(51904),f=n(26713),h=n(48232),m=n(27484),v=n.n(m),g=n(96486),Z=n(11163),w=n(23139),k=n(60130),y=n(77418);let b=n(56176),_=n(84110);v().extend(_),v().extend(b);let N=[{title:"App name",width:70,dataIndex:"name",key:"name",fixed:"left",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.name&&t.name.indexOf(e.toString())>-1||!0},{title:"Cluster",width:60,dataIndex:"cluster",key:"cluster",render:e=>(0,i.jsx)(x.Z,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.cluster||t.cluster.indexOf(e.toString())>-1},{title:"Last updated by",dataIndex:"owner",key:"owner",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.owner||(t.owner.slug||"").indexOf(e.toString())>-1,render:e=>(0,i.jsx)(i.Fragment,{children:null==e?void 0:e.slug})},{title:"Last updated",dataIndex:"updatedAt",key:"updatedAt",width:50,render:e=>(0,i.jsx)(y.q,{date:e}),sorter:(e,t)=>v()(e.updatedAt).diff(v()(t.updatedAt))},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,i.jsx)(y.q,{date:e}),sorter:(e,t)=>v()(e.createdAt).diff(v()(t.createdAt))},{title:"Status",dataIndex:"status",fixed:"right",key:"status",width:30,filters:[{text:"live",value:"live"}],render:e=>(0,i.jsx)(j.Z,{color:"success",icon:(0,i.jsx)(a.Z,{className:"align-middle"}),children:e})},{title:"Action",key:"action",fixed:"right",width:50,dataIndex:"action",render:(e,t)=>{switch(e){case"app":case"project":return(0,i.jsxs)(f.Z.Compact,{children:[(0,i.jsx)(x.Z,{icon:(0,i.jsx)(c.Z,{})}),(0,i.jsx)(x.Z,{icon:(0,i.jsx)(o.Z,{})})]});case"env":return(0,i.jsxs)(f.Z.Compact,{children:[(0,i.jsx)(x.Z,{icon:(0,i.jsx)(l.Z,{}),href:t.url,target:"_blank"}),(0,i.jsx)(x.Z,{icon:(0,i.jsx)(o.Z,{})}),(0,i.jsx)(x.Z,{icon:(0,i.jsx)(d.Z,{})}),(0,i.jsx)(x.Z,{icon:(0,i.jsx)(c.Z,{})})]});case"env-prod":return(0,i.jsxs)(f.Z.Compact,{children:[(0,i.jsx)(x.Z,{icon:(0,i.jsx)(l.Z,{})}),(0,i.jsx)(x.Z,{icon:(0,i.jsx)(u.Z,{})}),(0,i.jsx)(x.Z,{icon:(0,i.jsx)(o.Z,{})}),(0,i.jsx)(x.Z,{icon:(0,i.jsx)(p.Z,{})}),(0,i.jsx)(x.Z,{icon:(0,i.jsx)(c.Z,{})})]});default:return(0,i.jsx)(i.Fragment,{})}}}],P=()=>{let e=(0,Z.useRouter)(),{slugs:t}=e.query,[n]=t||[],{data:r}=(0,k.Zz)({filter:{slug:n||"undefined"}}),{list:s}=r||{},[a]=s||[],{data:c}=(0,w.VD)({filter:{project:a?a._id:"undefined"},populate:"owner,project"}),{list:o}=c||{},l=(o||[]).map(e=>{var t;let n=Object.keys(null!==(t=e.environment)&&void 0!==t?t:{}),i=n.map(t=>{let n=e.environment?e.environment[t]:"[]",i=JSON.parse(n);return{name:t.toUpperCase(),key:"".concat(null==a?void 0:a.slug,"-").concat(e.slug,"-").concat(t),id:t,slug:t,action:"prod"!==t?"env":"env-prod",status:"live",url:i.domains?"https://".concat(i.domains[0]):"",...i}});return{...e,children:i}});return(0,g.isEmpty)(t)?(0,i.jsx)(i.Fragment,{children:"Project not found."}):(0,i.jsx)("div",{children:(0,i.jsx)(h.Z,{columns:N,dataSource:l,scroll:{x:1200},sticky:{offsetHeader:48},pagination:{pageSize:20},expandable:{defaultExpandAllRows:!0}})})};var S=n(4651),A=n(69008);let T=()=>(0,i.jsx)(r.Wk,{children:(0,i.jsxs)(S.o,{meta:(0,i.jsx)(A.h,{title:"Projects",description:"Manage builds & deployments of your projects / apps "}),children:[(0,i.jsx)(s.V,{title:"Projects",breadcrumbs:[{name:"Workspace"}]}),(0,i.jsx)(P,{})]})});var I=T},69008:function(e,t,n){"use strict";n.d(t,{h:function(){return l}});var i=n(85893),r=n(9008),s=n.n(r),a=n(11163),c=n(2962),o=n(51369);let l=e=>{let t=(0,a.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,i.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,i.jsx)(c.PB,{title:"".concat(e.title," | ").concat(o.XL.site_name),description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o.XL.locale,site_name:o.XL.site_name}}),(0,i.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",rel:"stylesheet"})]})}}},function(e){e.O(0,[662,762,175,911,374,774,888,179],function(){return e(e.s=89045)}),_N_E=e.O()}]);