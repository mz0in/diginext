(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{16403:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(29989)}])},53621:function(e,t,n){"use strict";n.d(t,{Hg:function(){return r},av:function(){return i},hv:function(){return l}});var s=n(28731);let i=e=>(0,s.FF)(["workspaces"],"/api/v1/workspace",e),l=e=>(0,s.yt)(["workspaces"],"/api/v1/workspace",e),r=e=>(0,s.FF)(["workspaces","invite"],"/api/v1/workspace/invite",e)},61585:function(e,t,n){"use strict";var s=n(11527),i=n(19662),l=n(46457),r=n(80042),c=n(58699),a=n(36865),o=n(32699),d=n(89335);let u=e=>{let{children:t,value:n,mode:u="block",type:p="text"}=e,[x,h]=(0,d.m9)();return(0,s.jsx)(s.Fragment,{children:"block"===u?(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(l.Z.Paragraph,{children:"text"===p?(0,s.jsx)("pre",{children:n}):(0,s.jsx)(r.Z,{type:"password",className:"flex-none",disabled:!0,value:n})}),(0,s.jsx)(c.ZP,{type:"primary",danger:!(0,o.isEmpty)(x),size:"large",onClick:()=>h(n),icon:(0,s.jsx)(i.Z,{}),children:x?"Copied":"Copy"})]}):(0,s.jsxs)(a.Z.Compact,{children:[(0,s.jsx)(r.Z,{type:p,className:"flex-none",disabled:!0,value:n}),(0,s.jsx)(c.ZP,{type:"primary",danger:!(0,o.isEmpty)(x),size:"large",onClick:()=>h(n),icon:(0,s.jsx)(i.Z,{}),children:x?"Copied":"Copy"})]})})};t.Z=u},29989:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var s=n(11527),i=n(14367),l=n(42149),r=n(91446),c=n(61663),a=n(58699);let o=()=>(0,s.jsx)(c.Z,{title:"Are you sure?",description:"This action cannot be undone.",placement:"bottomRight",children:(0,s.jsx)(a.ZP,{type:"default",danger:!0,icon:(0,s.jsx)(r.Z,{className:"align-middle"}),children:"Destroy"})});var d=n(99678),u=n(36865),p=n(46457),x=n(52079),h=n(50959),v=n(53621),j=n(71894);let k=()=>{let e=d.Z.useApp(),t=(0,j.c)(),[n,i]=(0,h.useState)(null==t?void 0:t.public),[l,r]=(0,v.hv)({filter:{_id:null==t?void 0:t._id}}),c=async n=>{let s=await l({public:n});(null==s?void 0:s.status)&&(i(n),e.notification.success({message:"Congrats!",description:'Made "'.concat(null==t?void 0:t.name,'" workspace ').concat(n?"PUBLIC":"PRIVATE"," successfully.")}))};return(0,s.jsxs)(u.Z,{direction:"horizontal",size:6,children:[(0,s.jsx)(p.Z.Title,{level:5,style:{marginBottom:0},children:"Public"}),(0,s.jsx)(x.Z,{checked:n,onChange:c,loading:"loading"===r})]})};var m=n(476),y=n(97088),Z=n(34010),f=n(74637),g=n.n(f),w=n(41507),_=n(28731);let b=e=>(0,_.wz)(["users","list"],"/api/v1/api_key",e);var C=n(61585);let P=n(64814),E=n(54498);g().extend(E),g().extend(P);let N=()=>{let e=(0,j.c)(),{data:{list:t=[]}={list:[]}}=b(),{data:n}=(0,w.sc)();return(0,s.jsxs)("div",{className:"px-4 py-6",children:[(0,s.jsxs)(p.Z.Title,{children:[null==e?void 0:e.name," Workspace"]}),(0,s.jsx)(m.Z,{title:"DX_KEY",children:(0,s.jsx)("div",{children:(0,s.jsx)(C.Z,{mode:"inline",value:(null==e?void 0:e.dx_key)||""})},"dx-key")}),(0,s.jsx)(y.Z,{dashed:!0}),t.length>0&&(0,s.jsx)(Z.ZP,{dataSource:t,renderItem(e,t){let{name:n,email:i,token:{access_token:l}={access_token:""}}=e;return(0,s.jsx)(m.Z,{title:n,children:(0,s.jsx)("div",{children:(0,s.jsx)(C.Z,{type:"password",mode:"inline",value:l})},"api-key-".concat(l))})}}),(0,s.jsx)(y.Z,{dashed:!0}),(0,s.jsx)(m.Z,{title:"PUBLIC KEY",children:(0,s.jsx)("div",{children:(0,s.jsx)(C.Z,{mode:"inline",value:(null==n?void 0:n.data.publicKey)||""})},"ssh-public-key")})]})};var T=n(1242),W=n(77736);let z=()=>(0,s.jsx)(i.Wk,{children:(0,s.jsxs)(T.o,{meta:(0,s.jsx)(W.h,{title:"Settings",description:"Workspace's configuration."}),children:[(0,s.jsx)(l.V,{title:"Workspace Settings",breadcrumbs:[{name:"Workspace"}],actions:[(0,s.jsx)(k,{},"workspace-privacy-switch"),(0,s.jsx)(o,{},"destroy-workspace-button")]}),(0,s.jsx)(N,{})]})});var F=z},71894:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var s=n(14367);let i=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];let[e]=(0,s.aC)();return null==e?void 0:e.activeWorkspace}}},function(e){e.O(0,[8201,2967,9001,1883,8874,9774,2888,179],function(){return e(e.s=16403)}),_N_E=e.O()}]);