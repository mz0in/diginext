(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{5433:function(e,t,n){"use strict";var a=n(2734),i=n(50959),r=n(72096),l=n(19589),s=n(89107);let o=null,d=e=>e(),c=[],u={},m=i.forwardRef((e,t)=>{let[n,a]=i.useState(),[l,o]=i.useState(),[d,c]=i.useState(),[m,f]=i.useState(),[v,x]=i.useState(),[h,p]=i.useState(),[g,j]=(0,s.k)({prefixCls:n,getContainer:()=>l,maxCount:d,rtl:m,top:v,bottom:h}),y=(0,r.w6)(),S=y.getRootPrefixCls(),k=y.getIconPrefixCls(),N=()=>{let{prefixCls:e,container:t,maxCount:n,rtl:i,top:l,bottom:s}=function(){let{prefixCls:e,getContainer:t,rtl:n,maxCount:a,top:i,bottom:l}=u,s=null!=e?e:(0,r.w6)().getPrefixCls("notification"),o=(null==t?void 0:t())||document.body;return{prefixCls:s,container:o,rtl:n,maxCount:a,top:i,bottom:l}}();a(e),o(t),c(n),f(i),x(l),p(s)};return i.useEffect(N,[]),i.useImperativeHandle(t,()=>{let e=Object.assign({},g);return Object.keys(e).forEach(t=>{e[t]=function(){return N(),g[t].apply(g,arguments)}}),{instance:e,sync:N}}),i.createElement(r.ZP,{prefixCls:S,iconPrefixCls:k},j)});function f(){if(!o){let e=document.createDocumentFragment(),t={fragment:e};o=t,d(()=>{(0,a.s)(i.createElement(m,{ref(e){let{instance:n,sync:a}=e||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=a,f())})}}),e)});return}o.instance&&(c.forEach(e=>{switch(e.type){case"open":d(()=>{o.instance.open(Object.assign(Object.assign({},u),e.config))});break;case"destroy":d(()=>{null==o||o.instance.destroy(e.key)})}}),c=[])}function v(e){c.push({type:"open",config:e}),f()}let x={open:v,destroy:function(e){c.push({type:"destroy",key:e}),f()},config:function(e){u=Object.assign(Object.assign({},u),e),d(()=>{var e;null===(e=null==o?void 0:o.sync)||void 0===e||e.call(o)})},useNotification:s.Z,_InternalPanelDoNotUseOrYouWillBeFired:l.ZP},h=x;["success","info","warning","error"].forEach(e=>{h[e]=t=>v(Object.assign(Object.assign({},t),{type:e}))}),t.Z=h},69423:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/monitor/ingress",function(){return n(69267)}])},69267:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var a=n(11527),i=n(2154),r=n(13740),l=n(67918);n(5433);var s=n(36865),o=n(61663),d=n(58699),c=n(46457),u=n(75921),m=n(74637),f=n.n(m),v=n(47725),x=n.n(v),h=n(50959),p=n(73621),g=n(19005);let j=e=>(0,g.wz)(["monitor-ingress","list"],"/api/v1/monitor/ingresses",e);var y=n(22820),S=n(58012),k=n(97591),N=n(49309),C=n(90400);let b=n(64814),w=n(54498);f().extend(w),f().extend(b);let O=()=>{var e;let{responsive:t}=(0,C.Jl)(),{data:n,status:i}=(0,p.x7)(),{list:m=[]}=n||{},[v,g]=(0,h.useState)(0),[b,w]=(0,h.useState)(1),{data:O,status:Z}=j({filter:{clusterShortName:""}}),{list:_,pagination:E}=O||{},{total_items:P}=E||{},[I]=(0,y.kZ)(),[T,{setQuery:F}]=(0,N.o)(),A=(e,t)=>{var n,a;let{current:i}=e;g(null!==(a=null===(n=t.currentDataSource)||void 0===n?void 0:n.length)&&void 0!==a?a:0),i&&w(i)};(0,h.useEffect)(()=>g(null!==(e=null==_?void 0:_.length)&&void 0!==e?e:0),[_]);let z=(null==_?void 0:_.map((e,t)=>({...e,key:"ns-".concat(t),actions:(0,a.jsx)(s.Z.Compact,{children:(0,a.jsx)(o.Z,{title:"Are you sure to delete this item?",description:(0,a.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),okText:"Yes",cancelText:"No",children:(0,a.jsx)(d.ZP,{icon:(0,a.jsx)(r.Z,{})})})})})))||[],D=null==_?void 0:_.map(e=>{var t,n;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.name)||"",value:(null===(n=e.metadata)||void 0===n?void 0:n.name)||""}}).filter(e=>""!==e.value).filter((e,t,n)=>t===n.findIndex(t=>t.text===e.text)),R=null==_?void 0:_.map(e=>{var t,n;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.namespace)||"",value:(null===(n=e.metadata)||void 0===n?void 0:n.namespace)||""}}).filter(e=>""!==e.value).filter((e,t,n)=>t===n.findIndex(t=>t.text===e.text)),W=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:(null==t?void 0:t.md)?"left":void 0,filterSearch:!0,render(e,t){var n;return null===(n=t.metadata)||void 0===n?void 0:n.name},filters:D,onFilter(e,t){var n,a;return null===(n=t.metadata)||void 0===n||!n.name||(null===(a=t.metadata)||void 0===a?void 0:a.name.indexOf(e.toString()))>-1}},{title:"Namespace",dataIndex:"namespace",key:"namespace",width:30,render(e,t){var n;return(0,a.jsx)(x(),{href:"#",children:null===(n=t.metadata)||void 0===n?void 0:n.namespace})},filterSearch:!0,filters:R,onFilter(e,t){var n,a;return null===(n=t.metadata)||void 0===n||!n.namespace||(null===(a=t.metadata)||void 0===a?void 0:a.namespace.indexOf(e.toString()))>-1}},{title:"Cluster",dataIndex:"clusterShortName",key:"clusterShortName",width:30,render:e=>(0,a.jsx)(d.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:m.map(e=>({text:e.shortName||"",value:e.shortName||""})),onFilter:(e,t)=>!t.clusterShortName||t.clusterShortName.indexOf(e.toString())>-1},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:30,render(e,t){var n;return(0,a.jsx)(S.q,{date:null===(n=t.metadata)||void 0===n?void 0:n.creationTimestamp})},sorter(e,t){var n,a;return f()(null===(n=e.metadata)||void 0===n?void 0:n.creationTimestamp).diff(f()(null===(a=t.metadata)||void 0===a?void 0:a.creationTimestamp))}},{title:(0,a.jsx)(c.Z.Text,{className:"text-xs md:text-sm",children:"Action"}),key:"action",fixed:"right",width:(null==t?void 0:t.md)?30:26,render:(e,t)=>t.actions}],X=(0,h.useRef)(null),Y=(0,l.Z)(X);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(k.V,{title:"Ingresses (".concat(v,")"),breadcrumbs:[{name:"Workspace"}],actions:[]}),(0,a.jsx)("div",{className:"h-full flex-auto overflow-hidden",ref:X,children:(0,a.jsx)(u.Z,{sticky:!0,size:"small",loading:"loading"===Z,columns:W,dataSource:z,scroll:{x:1e3,y:void 0!==(null==Y?void 0:Y.height)?Y.height-100:void 0},pagination:{pageSize:200,position:["bottomCenter"]},onChange:(e,t,n,a)=>A(e,a)})})]})};var Z=n(7021),_=n(24810);let E=()=>(0,a.jsx)(i.Wk,{children:(0,a.jsx)(Z.o,{meta:(0,a.jsx)(_.h,{title:"Ingresses",description:"List of ingresses."}),children:(0,a.jsx)(O,{})})});var P=E}},function(e){e.O(0,[8201,2967,5775,9780,9774,2888,179],function(){return e(e.s=69423)}),_N_E=e.O()}]);