(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5722],{84765:function(e,t,l){"use strict";l.d(t,{Z:function(){return o}});var a=l(30001),i=l(50959),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},r=l(94590),d=function(e,t){return i.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:n}))};d.displayName="MoreOutlined";var o=i.forwardRef(d)},10757:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/monitor/deployment",function(){return l(25291)}])},25291:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return E}});var a=l(11527),i=l(2154),n=l(84765),r=l(30388);l(5433);var d=l(58699),o=l(85273),u=l(88158),s=l(46457),v=l(5489),c=l(74637),m=l.n(c),p=l(32699),x=l(47725),f=l.n(x),g=l(50959),h=l(73621),y=l(19005);let j=e=>(0,y.wz)(["monitor-deployment","list"],"/api/v1/monitor/deployments",e);var w=l(22820),k=l(58012),I=l(97591),S=l(49309),Z=l(90400);let A=l(64814),R=l(54498);m().extend(R),m().extend(A);let _=()=>{var e,t;let{responsive:l}=(0,Z.Jl)(),{data:i,status:c}=(0,h.x7)(),{list:x=[]}=i||{},[y,A]=(0,g.useState)(0),[R,_]=(0,g.useState)(1),{data:b,status:N}=j({filter:{clusterShortName:""}}),{list:C,pagination:E}=b||{},{total_items:F=null!==(e=null==C?void 0:C.length)&&void 0!==e?e:0}=E||{},[M]=(0,w.kZ)(),[z,{setQuery:O}]=(0,S.o)(),P=(e,t)=>{var l,a;let{current:i}=e;A(null!==(a=null===(l=t.currentDataSource)||void 0===l?void 0:l.length)&&void 0!==a?a:0),i&&_(i)};(0,g.useEffect)(()=>A(null!==(t=null==C?void 0:C.length)&&void 0!==t?t:0),[C]);let T=(null==C?void 0:C.map((e,t)=>({...e,key:"ns-".concat(t),actions:[(0,a.jsx)(d.ZP,{size:"small",icon:(0,a.jsx)(n.Z,{})},"more-btn")]})))||[],D=null==C?void 0:C.map(e=>{var t,l;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.name)||"",value:(null===(l=e.metadata)||void 0===l?void 0:l.name)||""}}).filter(e=>""!==e.value).filter((e,t,l)=>t===l.findIndex(t=>t.text===e.text)),W=null==C?void 0:C.map(e=>{var t,l;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.namespace)||"",value:(null===(l=e.metadata)||void 0===l?void 0:l.namespace)||""}}).filter(e=>""!==e.value).filter((e,t,l)=>t===l.findIndex(t=>t.text===e.text)),X=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:(null==l?void 0:l.md)?"left":void 0,filterSearch:!0,render(e,t){var l;return null===(l=t.metadata)||void 0===l?void 0:l.name},filters:D,onFilter(e,t){var l,a;return null===(l=t.metadata)||void 0===l||!l.name||(null===(a=t.metadata)||void 0===a?void 0:a.name.indexOf(e.toString()))>-1}},{title:"Pods",dataIndex:"pods",key:"pods",width:15,render(e,t){var l,i,n,r,d,u,s,v,c,m;let p=null!==(c=null!==(u=null===(l=t.status)||void 0===l?void 0:l.availableReplicas)&&void 0!==u?u:null===(i=t.status)||void 0===i?void 0:i.readyReplicas)&&void 0!==c?c:(null!==(s=null===(n=t.status)||void 0===n?void 0:n.replicas)&&void 0!==s?s:0)-(null!==(v=null===(r=t.status)||void 0===r?void 0:r.unavailableReplicas)&&void 0!==v?v:0),x=null!==(m=null===(d=t.status)||void 0===d?void 0:d.replicas)&&void 0!==m?m:0;return(0,a.jsxs)(o.Z,{color:0===p?"error":p<x?"warning":"default",children:[p,"/",x]})},filterSearch:!0,filters:[{text:"Ready",value:"ready"},{text:"Partial",value:"partial"},{text:"Failed",value:"failed"}],onFilter(e,t){var l,a,i,n,r,d,o,u,s,v;let c=null!==(s=null!==(d=null===(l=t.status)||void 0===l?void 0:l.availableReplicas)&&void 0!==d?d:null===(a=t.status)||void 0===a?void 0:a.readyReplicas)&&void 0!==s?s:(null!==(o=null===(i=t.status)||void 0===i?void 0:i.replicas)&&void 0!==o?o:0)-(null!==(u=null===(n=t.status)||void 0===n?void 0:n.unavailableReplicas)&&void 0!==u?u:0),m=null!==(v=null===(r=t.status)||void 0===r?void 0:r.replicas)&&void 0!==v?v:0;return"failed"===e?0===c:"partial"===e?c>0&&c<m:c===m}},{title:"CPU",dataIndex:"cpu",key:"cpu",width:17,render(e,t){var l,i;let n=(0,p.toInteger)(null===(l=t.cpuAvg)||void 0===l?void 0:l.replace("m",""))||0,r=(0,p.toInteger)(null===(i=t.cpuCapacity)||void 0===i?void 0:i.replace("m",""))||0;return 0===r?(0,a.jsx)(u.Z,{overlay:(0,a.jsxs)(a.Fragment,{children:["Recommend: ",t.cpuRecommend]}),children:(0,a.jsx)(o.Z,{color:0===r?"default":n>.8*r?"warning":"success",children:t.cpuAvg})}):(0,a.jsx)(o.Z,{color:0===r?"default":n>.8*r?"warning":"success",children:t.cpuAvg})},sorter(e,t){var l,a;return(0,p.toInteger)(null===(l=e.cpuAvg)||void 0===l?void 0:l.replace("m",""))-(0,p.toInteger)(null===(a=t.cpuAvg)||void 0===a?void 0:a.replace("m",""))}},{title:"MEM",dataIndex:"memory",key:"memory",width:17,render(e,t){var l,i;let n=(0,p.toInteger)(null===(l=t.memoryAvg)||void 0===l?void 0:l.replace("Mi",""))||0,r=(0,p.toInteger)(null===(i=t.memoryCapacity)||void 0===i?void 0:i.replace("Mi",""))||0;return 0===r?(0,a.jsx)(u.Z,{overlay:(0,a.jsxs)(a.Fragment,{children:["Recommend: ",t.memoryRecommend]}),children:(0,a.jsx)(o.Z,{color:0===r?"default":n>.8*r?"warning":"success",children:t.memoryAvg})}):(0,a.jsx)(o.Z,{color:0===r?"default":n>.8*r?"warning":"success",children:t.memoryAvg})},sorter(e,t){var l,a;return(0,p.toInteger)(null===(l=e.memoryAvg)||void 0===l?void 0:l.replace("Mi",""))-(0,p.toInteger)(null===(a=t.memoryAvg)||void 0===a?void 0:a.replace("Mi",""))}},{title:"Namespace",dataIndex:"namespace",key:"namespace",width:30,render(e,t){var l;return(0,a.jsx)(f(),{href:"#",children:null===(l=t.metadata)||void 0===l?void 0:l.namespace})},filterSearch:!0,filters:W,onFilter(e,t){var l,a;return null===(l=t.metadata)||void 0===l||!l.namespace||(null===(a=t.metadata)||void 0===a?void 0:a.namespace.indexOf(e.toString()))>-1}},{title:"Cluster",dataIndex:"clusterSlug",key:"clusterSlug",width:30,render:e=>(0,a.jsx)(f(),{href:"#",children:e}),filterSearch:!0,filters:x.map(e=>({text:e.slug||"",value:e.slug||""})),onFilter:(e,t)=>!t.clusterSlug||t.clusterSlug.indexOf(e.toString())>-1},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:30,render(e,t){var l;return(0,a.jsx)(k.q,{date:null===(l=t.metadata)||void 0===l?void 0:l.creationTimestamp})},sorter(e,t){var l,a;return m()(null===(l=e.metadata)||void 0===l?void 0:l.creationTimestamp).diff(m()(null===(a=t.metadata)||void 0===a?void 0:a.creationTimestamp))}},{title:(0,a.jsx)(s.Z.Text,{className:"text-xs md:text-sm",children:"Action"}),key:"action",fixed:"right",width:(null==l||l.md,12),render:(e,t)=>t.actions}],q=(0,g.useRef)(null),B=(0,r.Z)(q);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(I.V,{title:"Deployments (".concat(y,")"),breadcrumbs:[{name:"Workspace"}],actions:[]}),(0,a.jsx)("div",{className:"flex-auto overflow-auto",ref:q,children:(0,a.jsx)(v.Z,{sticky:!0,loading:"loading"===N,size:"small",columns:X,dataSource:T,scroll:{x:1e3,y:void 0!==(null==B?void 0:B.height)?B.height-140:void 0},pagination:{pageSize:200,position:["bottomCenter"]},onChange:(e,t,l,a)=>P(e,a)})})]})};var b=l(33923),N=l(24810);let C=()=>(0,a.jsx)(i.Wk,{children:(0,a.jsx)(b.o,{meta:(0,a.jsx)(N.h,{title:"Deployments",description:"List of deployments."}),children:(0,a.jsx)(_,{})})});var E=C}},function(e){e.O(0,[8201,2967,9033,1079,9774,2888,179],function(){return e(e.s=10757)}),_N_E=e.O()}]);