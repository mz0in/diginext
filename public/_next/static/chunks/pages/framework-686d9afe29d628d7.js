(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4467],{35396:function(e,t,n){"use strict";var i=n(30001),r=n(50959),o=n(62658),a=n(94590),s=function(e,t){return r.createElement(a.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:o.Z}))};s.displayName="EditOutlined",t.Z=r.forwardRef(s)},5433:function(e,t,n){"use strict";var i=n(2734),r=n(50959),o=n(72096),a=n(19589),s=n(89107);let l=null,c=e=>e(),d=[],u={},f=r.forwardRef((e,t)=>{let[n,i]=r.useState(),[a,l]=r.useState(),[c,d]=r.useState(),[f,g]=r.useState(),[m,x]=r.useState(),[h,p]=r.useState(),[w,k]=(0,s.k)({prefixCls:n,getContainer:()=>a,maxCount:c,rtl:f,top:m,bottom:h}),y=(0,o.w6)(),v=y.getRootPrefixCls(),j=y.getIconPrefixCls(),C=()=>{let{prefixCls:e,container:t,maxCount:n,rtl:r,top:a,bottom:s}=function(){let{prefixCls:e,getContainer:t,rtl:n,maxCount:i,top:r,bottom:a}=u,s=null!=e?e:(0,o.w6)().getPrefixCls("notification"),l=(null==t?void 0:t())||document.body;return{prefixCls:s,container:l,rtl:n,maxCount:i,top:r,bottom:a}}();i(e),l(t),d(n),g(r),x(a),p(s)};return r.useEffect(C,[]),r.useImperativeHandle(t,()=>{let e=Object.assign({},w);return Object.keys(e).forEach(t=>{e[t]=function(){return C(),w[t].apply(w,arguments)}}),{instance:e,sync:C}}),r.createElement(o.ZP,{prefixCls:v,iconPrefixCls:j},k)});function g(){if(!l){let e=document.createDocumentFragment(),t={fragment:e};l=t,c(()=>{(0,i.s)(r.createElement(f,{ref(e){let{instance:n,sync:i}=e||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=i,g())})}}),e)});return}l.instance&&(d.forEach(e=>{switch(e.type){case"open":c(()=>{l.instance.open(Object.assign(Object.assign({},u),e.config))});break;case"destroy":c(()=>{null==l||l.instance.destroy(e.key)})}}),d=[])}function m(e){d.push({type:"open",config:e}),g()}let x={open:m,destroy:function(e){d.push({type:"destroy",key:e}),g()},config:function(e){u=Object.assign(Object.assign({},u),e),c(()=>{var e;null===(e=null==l?void 0:l.sync)||void 0===e||e.call(l)})},useNotification:s.Z,_InternalPanelDoNotUseOrYouWillBeFired:a.ZP},h=x;["success","info","warning","error"].forEach(e=>{h[e]=t=>m(Object.assign(Object.assign({},t),{type:e}))}),t.Z=h},43129:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/framework",function(){return n(50135)}])},50135:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var i,r=n(11527),o=n(2154),a=n(35396),s=n(13740),l=n(78177),c=n(67918),d=n(58699),u=n(5433),f=n(36865),g=n(61663),m=n(75921),x=n(74637),h=n.n(x),p=n(50959),w=n(68114),k=n(58012),y=n(97591),v=n(49309),j=n(13557);let C=n(64814),b=n(54498);h().extend(b),h().extend(C);let Z=[{title:"Name",width:70,dataIndex:"name",key:"name",fixed:"left",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.name||t.name.indexOf(e.toString())>-1},{title:"Git",width:60,dataIndex:"git",key:"git",render(e,t){var n,i;return(0,r.jsx)(r.Fragment,{children:(null===(n=t.git)||void 0===n?void 0:n.name)?(0,r.jsx)(d.ZP,{type:"link",style:{padding:0},children:null===(i=t.git)||void 0===i?void 0:i.name}):(0,r.jsx)(d.ZP,{type:"link",style:{padding:0},children:t.gitProvider})})},filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.git||(t.git.name||"").indexOf(e.toString())>-1},{title:"Version",dataIndex:"version",key:"version",width:30},{title:"Created by",dataIndex:"owner",key:"owner",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.owner||(t.owner.name||"").toLowerCase().indexOf(e.toString())>-1,render:(e,t)=>(0,r.jsx)(r.Fragment,{children:t.owner.name})},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,r.jsx)(k.q,{date:e}),sorter:(e,t)=>h()(e.createdAt).diff(h()(t.createdAt))},{title:"Action",key:"action",width:50,fixed:"right",render:(e,t)=>t.actions}],P=null!==(i=j.XL.tableConfig.defaultPageSize)&&void 0!==i?i:20,_=()=>{let[e,t]=(0,p.useState)(1),{data:n,status:i}=(0,w.Dh)({populate:"git,owner",pagination:{page:e,size:P}}),{list:o,pagination:x}=n||{},{total_items:h}=x||{};console.log("frameworks :>> ",o);let[k]=(0,w.mt)(),[j,{setQuery:C}]=(0,v.o)(),b=async e=>{let t=await k({_id:e});(null==t?void 0:t.status)&&u.Z.success({message:"Item deleted successfully."})},_=(null==o?void 0:o.map(e=>({...e,actions:(0,r.jsxs)(f.Z.Compact,{children:[(0,r.jsx)(d.ZP,{icon:(0,r.jsx)(a.Z,{}),onClick:()=>C({lv1:"edit",type:"framework",framework_slug:e.slug})}),(0,r.jsx)(g.Z,{title:"Are you sure to delete this framework?",description:(0,r.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),onConfirm:()=>b(e._id),okText:"Yes",cancelText:"No",children:(0,r.jsx)(d.ZP,{icon:(0,r.jsx)(s.Z,{})})})]})})))||[],O=e=>{let{current:n}=e;n&&t(n)},S=(0,p.useRef)(null),N=(0,c.Z)(S);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.V,{title:"Frameworks",breadcrumbs:[{name:"Workspace"}],actions:[(0,r.jsx)(d.ZP,{type:"default",icon:(0,r.jsx)(l.Z,{className:"align-middle"}),onClick:()=>C({lv1:"new",type:"framework"}),children:"New"},"workspace-setting-btn")]}),(0,r.jsx)("div",{className:"h-full flex-auto overflow-hidden",ref:S,children:(0,r.jsx)(m.Z,{size:"small",loading:"loading"===i,columns:Z,dataSource:_,scroll:{x:1200,y:void 0!==(null==N?void 0:N.height)?N.height-100:void 0},sticky:!0,pagination:{pageSize:P,total:h,position:["bottomCenter"]},onChange:O})})]})};var O=n(7021),S=n(24810);let N=()=>{let[e,{setQuery:t}]=(0,v.o)();return(0,r.jsx)(o.Wk,{children:(0,r.jsx)(O.o,{meta:(0,r.jsx)(S.h,{title:"Frameworks",description:"The collection of boilerplate frameworks to start new project."}),children:(0,r.jsx)(_,{})})})};var E=N}},function(e){e.O(0,[8201,2967,5775,9780,9774,2888,179],function(){return e(e.s=43129)}),_N_E=e.O()}]);