(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7475],{35396:function(e,t,n){"use strict";var i=n(30001),a=n(50959),d=n(62658),r=n(94590),l=function(e,t){return a.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:d.Z}))};l.displayName="EditOutlined",t.Z=a.forwardRef(l)},99361:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace/teams",function(){return n(67688)}])},67688:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var i,a=n(11527),d=n(2154),r=n(97591),l=n(35396),o=n(13740),s=n(30388),c=n(58699),u=n(36865),f=n(5489),x=n(74637),h=n.n(x),m=n(50959),w=n(19005);let p=e=>(0,w.wz)(["teams","list"],"/api/v1/team",e);var g=n(58012),k=n(13557);let j=n(64814),v=n(54498);h().extend(v),h().extend(j);let Z=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:"left",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.name||t.name.indexOf(e.toString())>-1},{title:"Owner",dataIndex:"owner",key:"owner",width:50,render:(e,t)=>(0,a.jsx)(c.ZP,{type:"link",style:{padding:0},children:t.owner.slug}),filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.owner||(t.owner.slug||"").indexOf(e.toString())>-1},{title:"Email",dataIndex:"email",key:"email",width:80},{title:"Updated at",dataIndex:"updatedAt",key:"updatedAt",width:50,render:e=>(0,a.jsx)(g.q,{date:e}),sorter:(e,t)=>h()(e.updatedAt).diff(h()(t.updatedAt))},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,a.jsx)(g.q,{date:e}),sorter:(e,t)=>h()(e.createdAt).diff(h()(t.createdAt))},{title:"Action",key:"action",width:50,fixed:"right",render:()=>(0,a.jsxs)(u.Z.Compact,{children:[(0,a.jsx)(c.ZP,{icon:(0,a.jsx)(l.Z,{})}),(0,a.jsx)(c.ZP,{icon:(0,a.jsx)(o.Z,{})})]})}],_=null!==(i=k.XL.tableConfig.defaultPageSize)&&void 0!==i?i:20,y=()=>{let[e,t]=(0,m.useState)(1),{data:n,status:i}=p({populate:"owner",pagination:{page:e,size:_}}),{list:d,pagination:r}=n||{},{total_items:l}=r||{};console.log("teams :>> ",d);let o=e=>{let{current:n}=e;n&&t(n)},c=(0,m.useRef)(null),u=(0,s.Z)(c);return(0,a.jsx)("div",{className:"h-full flex-auto overflow-hidden",ref:c,children:(0,a.jsx)(f.Z,{sticky:!0,size:"small",loading:"loading"===i,columns:Z,dataSource:d,scroll:{x:1e3,y:void 0!==(null==u?void 0:u.height)?u.height-140:void 0},pagination:{pageSize:_,total:l,position:["bottomCenter"]},onChange:o})})};var A=n(33923),E=n(24810);let N=()=>(0,a.jsx)(d.Wk,{children:(0,a.jsxs)(A.o,{meta:(0,a.jsx)(E.h,{title:"Teams",description:"List of teams in the workspace."}),children:[(0,a.jsx)(r.V,{title:"Teams",breadcrumbs:[{name:"Workspace"}]}),(0,a.jsx)(y,{})]})});var C=N}},function(e){e.O(0,[8201,2967,9033,1079,9774,2888,179],function(){return e(e.s=99361)}),_N_E=e.O()}]);