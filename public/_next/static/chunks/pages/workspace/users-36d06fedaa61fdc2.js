(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[875],{67330:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace/users",function(){return n(92611)}])},53068:function(e,t,n){"use strict";n.d(t,{Hc:function(){return i},mO:function(){return r}});var a=n(14223);let r=e=>(0,a.wz)(["users","list"],"/api/v1/user",e),i=e=>(0,a.yt)(["users"],"/api/v1/user/join-workspace",e)},92611:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a,r=n(85893),i=n(45669),s=n(45788),d=n(86548),l=n(48689),o=n(87784),u=n(71577),c=n(26713),x=n(48232),f=n(27484),m=n.n(f),p=n(67294),h=n(53068),g=n(77418),k=n(51369);let v=n(56176),j=n(84110);m().extend(j),m().extend(v);let w=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:"left",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.name.indexOf(e.toString())>-1},{title:"User name",dataIndex:"username",key:"username",width:50,render:e=>(0,r.jsx)(u.Z,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.username||t.username.indexOf(e.toString())>-1},{title:"Email",dataIndex:"email",key:"email",width:80},{title:"Roles",dataIndex:"roles",key:"roles",width:40,filterSearch:!0,filters:[{text:"goon",value:"goon"}]},{title:"Teams",dataIndex:"teams",key:"teams",width:40,filterSearch:!0,filters:[{text:"goon",value:"goon"}]},{title:"Updated at",dataIndex:"updatedAt",key:"updatedAt",width:50,render:e=>(0,r.jsx)(g.q,{date:e}),sorter:(e,t)=>m()(e.updatedAt).diff(m()(t.updatedAt))},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,r.jsx)(g.q,{date:e}),sorter:(e,t)=>m()(e.createdAt).diff(m()(t.createdAt))},{title:"Action",key:"action",width:50,fixed:"right",render:()=>(0,r.jsxs)(c.Z.Compact,{children:[(0,r.jsx)(u.Z,{icon:(0,r.jsx)(d.Z,{})}),(0,r.jsx)(u.Z,{icon:(0,r.jsx)(l.Z,{})}),(0,r.jsx)(u.Z,{icon:(0,r.jsx)(o.Z,{})})]})}],y=null!==(a=k.XL.tableConfig.defaultPageSize)&&void 0!==a?a:20,_=()=>{let[e,t]=(0,p.useState)(1),{data:n}=(0,h.mO)({populate:"roles,teams",pagination:{page:e,size:y}}),{list:a,pagination:i}=n||{},{total_items:s}=i||{};console.log("users :>> ",a);let d=e=>{let{current:n}=e;n&&t(n)},l=(null==a?void 0:a.map((e,t)=>{var n,a,r,i,s;return{id:null!==(n=e._id)&&void 0!==n?n:"user-".concat(t),key:null!==(a=e._id)&&void 0!==a?a:"user-".concat(t),name:null!==(r=e.name)&&void 0!==r?r:"User #".concat(t),username:null!==(i=e.slug)&&void 0!==i?i:"",email:null!==(s=e.email)&&void 0!==s?s:"",roles:e.roles||[],teams:e.teams||[],updatedAt:e.updatedAt,createdAt:e.createdAt}}))||[];return console.log("displayedUsers :>> ",l),(0,r.jsx)("div",{children:(0,r.jsx)(x.Z,{columns:w,dataSource:l,scroll:{x:1200},sticky:{offsetHeader:48},pagination:{pageSize:y,total:s},onChange:d})})};var A=n(65009),S=n(69008);let Z=()=>(0,r.jsx)(i.Wk,{children:(0,r.jsxs)(A.o,{meta:(0,r.jsx)(S.h,{title:"Users",description:"List of users in the workspace."}),children:[(0,r.jsx)(s.V,{title:"Users",breadcrumbs:[{name:"Workspace"}]}),(0,r.jsx)(_,{})]})});var I=Z}},function(e){e.O(0,[662,762,481,9,31,774,888,179],function(){return e(e.s=67330)}),_N_E=e.O()}]);