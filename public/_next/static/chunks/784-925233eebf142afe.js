(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784],{45669:function(e,t,n){"use strict";n.d(t,{Wk:function(){return y},aC:function(){return j},x4:function(){return p}});var l=n(85893),s=n(50888),i=n(67848),a=n(85945),r=n(99138),o=n(78945),c=n(47041),u=n(96486),d=n(11163),h=n(67294),m=n(69931),x=n(25026),g=n(91144),v=n(51369);let p=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=null!==(e=t.redirectURL)&&void 0!==e?e:v.De.NEXT_PUBLIC_API_BASE_URL;window.location.href="".concat(v.De.NEXT_PUBLIC_API_BASE_URL,"/auth/google?redirect_url=").concat(n)},f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{access_token:t=(0,c.getCookie)("x-auth-cookie")}=e,n=(0,d.useRouter)();return(0,i.a)({staleTime:12e4,queryKey:["auth"],queryFn:async()=>{var e;let l=new URLSearchParams(n.asPath.split("?")[1]),s=Object.fromEntries(l),{access_token:i}=s,a=null!==(e=null!=t?t:(0,c.getCookie)("x-auth-cookie"))&&void 0!==e?e:i,{data:r}=await o.Z.get("".concat(v.De.NEXT_PUBLIC_API_BASE_URL,"/auth/profile"),{headers:a?{Authorization:"Bearer ".concat(a)}:{}});return r}})},j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{redirectUrl:t}=e,n=(0,d.useRouter)(),[l]=(0,x.o)(),{access_token:s=(0,c.getCookie)("x-auth-cookie")}=l;s&&(0,c.setCookie)("x-auth-cookie",s);let{data:i,isError:r,isFetched:o,isLoading:u,isSuccess:m}=f({access_token:s}),{status:g,data:v}=i||{},p=(0,a.NL)(),j=async()=>{await p.invalidateQueries({queryKey:["auth"]})};return(0,h.useEffect)(()=>{void 0!==g&&!1!==o&&setTimeout(()=>{let e=(0,c.getCookie)("x-auth-cookie");e&&g?j():n.push(t?"/login?redirect_url=".concat(t):"/login")},200)},[g]),[v,{reload:j,isError:r,isLoading:u,isFetched:o,isSuccess:m,status:g}]},y=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{children:n}=t;(0,d.useRouter)();let[i,{isLoading:a,isFetched:o}]=j(),{workspaces:c=[]}=i||{},h=null===(e=c[0])||void 0===e?void 0:e.slug,x=(0,g.c)({name:h});return a?(0,l.jsxs)(m.Z,{children:[(0,l.jsx)(s.Z,{}),(0,l.jsx)("span",{className:"ml-2",children:"Loading..."})]}):o&&(0,u.isEmpty)(i)?(0,l.jsx)(l.Fragment,{}):x?(0,l.jsx)(l.Fragment,{children:n}):(0,l.jsx)(m.Z,{className:"text-center",children:(0,l.jsx)(r.Z,{message:"Error",description:"This workspace does not exists.",type:"error"})})}},12780:function(e,t,n){"use strict";n.d(t,{BY:function(){return s},wl:function(){return i}});var l=n(14223);let s=e=>(0,l.wz)(["builds","list"],"/api/v1/build",e),i=(e,t)=>(0,l.AQ)(["builds","logs",e],"/api/v1/build/logs",e,t)},34937:function(e,t,n){"use strict";n.d(t,{nu:function(){return s}});var l=n(14223);let s=e=>(0,l.wz)(["providers","list"],"/api/v1/provider",e)},84435:function(e,t,n){"use strict";n.d(t,{An:function(){return o},CN:function(){return a},pD:function(){return i},ve:function(){return r},x7:function(){return s}});var l=n(14223);let s=e=>(0,l.wz)(["clusters","list"],"/api/v1/cluster",e),i=(e,t)=>(0,l.AQ)(["cluster",e],"/api/v1/cluster",e,t),a=()=>(0,l.FF)(["clusters","create"],"/api/v1/cluster"),r=e=>(0,l.yt)(["clusters","update"],"/api/v1/cluster",e),o=()=>(0,l.TV)(["clusters","delete"],"/api/v1/cluster")},36770:function(e,t,n){"use strict";n.d(t,{D$:function(){return a},Dh:function(){return s},FX:function(){return i},fR:function(){return r},mt:function(){return o}});var l=n(14223);let s=e=>(0,l.wz)(["frameworks","list"],"/api/v1/framework",e),i=(e,t)=>(0,l.AQ)(["frameworks",e],"/api/v1/framework",e,t),a=()=>(0,l.FF)(["frameworks"],"/api/v1/framework"),r=e=>(0,l.yt)(["frameworks"],"/api/v1/framework",e),o=()=>(0,l.TV)(["frameworks","delete"],"/api/v1/framework")},59346:function(e,t,n){"use strict";n.d(t,{y3:function(){return s}});var l=n(14223);let s=e=>(0,l.wz)(["gits","list"],"/api/v1/git",e)},51855:function(e,t,n){"use strict";n.d(t,{av:function(){return i},xh:function(){return s}});var l=n(14223);let s=(e,t)=>(0,l.AQ)(["workspaces",e],"/api/v1/workspace",e,t),i=e=>(0,l.FF)(["workspaces"],"/api/v1/workspace",e)},14223:function(e,t,n){"use strict";n.d(t,{AQ:function(){return h},FF:function(){return m},TV:function(){return g},wz:function(){return d},yt:function(){return x}});var l=n(85945),s=n(67848),i=n(48228),a=n(78945),r=n(47041),o=n(96486),c=n(11163),u=n(51369);let d=function(e,t){var n;let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},d=(0,c.useRouter)(),h=null!==(n=d.query.access_token)&&void 0!==n?n:(0,r.getCookie)("x-auth-cookie"),m=h?{Authorization:"Bearer ".concat(h)}:{};m["Cache-Control"]="no-cache";let{pagination:x={page:1,size:20},populate:g,filter:v,sort:p="-updatedAt,-createdAt"}=i,f=new URLSearchParams(x).toString(),j=g?"populate=".concat(g):"",y=v?new URLSearchParams(v).toString():"",k="sort=".concat(p),Z=(0,l.NL)(),w=[...e];return w.push((0,o.isEmpty)(v)?{}:v),(0,o.isEmpty)(x)||w.push(x),(0,s.a)({refetchOnWindowFocus:!1,queryKey:w,queryFn:async()=>{let{data:n}=await a.Z.get("".concat(u.De.NEXT_PUBLIC_API_BASE_URL).concat(t,"?").concat(y,"&").concat(k,"&").concat(j,"&").concat(f),{...i,headers:m}),{current_page:l,total_pages:s,total_items:o,page_size:c,next_page:d,prev_page:h,...x}=n,{token:g={}}=x;return g.access_token&&(0,r.setCookie)("x-auth-cookie",g.access_token),{list:n.data.map(t=>(Z.setQueryData([e[0],t._id],t),Z.setQueryData([e[0],t.slug],t),Z.setQueryData([e[0],{slug:t.slug}],t),{...t,key:t._id}))||[],pagination:{current_page:l,total_pages:s,total_items:o,page_size:c,next_page:d,prev_page:h}}}})},h=function(e,t,n){var l;let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=(0,c.useRouter)(),h=null!==(l=d.query.access_token)&&void 0!==l?l:(0,r.getCookie)("x-auth-cookie"),m=h?{Authorization:"Bearer ".concat(h)}:{};m["Cache-Control"]="no-cache";let{populate:x,filter:g={}}=i;g.slug=n;let v=x?"populate=".concat(x):"",p=new URLSearchParams(g).toString();return(0,s.a)({enabled:null!=n,queryKey:e,queryFn:async()=>{let e="".concat(u.De.NEXT_PUBLIC_API_BASE_URL).concat(t,"?").concat(p,"&").concat(v),{data:n}=await a.Z.get(e,{...i,headers:m}),{token:l={}}=n;return(l.access_token&&(0,r.setCookie)("x-auth-cookie",l.access_token),(0,o.isArray)(n.data))?n.data.map(e=>({...e,key:e._id}))[0]:(0,o.isString)(n.data)?n.data:n.data[0]}})},m=function(e,t){var n;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(0,c.useRouter)(),d=(0,l.NL)(),h=null!==(n=o.query.access_token)&&void 0!==n?n:(0,r.getCookie)("x-auth-cookie"),m=h?{Authorization:"Bearer ".concat(h)}:{};m["Cache-Control"]="no-cache";let x=(0,i.D)({mutationFn:async e=>{let n="".concat(u.De.NEXT_PUBLIC_API_BASE_URL).concat(t),{data:l}=await a.Z.post(n,e,{...s,headers:m});return l.data},onMutate:async t=>(await d.cancelQueries({queryKey:e}),t),onSuccess:(t,n,l)=>{d.invalidateQueries({queryKey:[e[0],"list"]})}}),{mutateAsync:g,status:v}=x;return[g,v]},x=function(e,t){var n;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(0,c.useRouter)(),d=(0,l.NL)(),h=null!==(n=o.query.access_token)&&void 0!==n?n:(0,r.getCookie)("x-auth-cookie"),m=h?{Authorization:"Bearer ".concat(h)}:{};m["Cache-Control"]="no-cache";let{pagination:x={page:1,size:20},populate:g,sort:v="-createdAt",filter:p}=s,f=new URLSearchParams(x).toString(),j=p?new URLSearchParams(p).toString():"",y="".concat(u.De.NEXT_PUBLIC_API_BASE_URL).concat(t,"?").concat(j,"&").concat("sort=".concat(v),"&").concat(g?"populate=".concat(g):"","&").concat(f),k=(0,i.D)({mutationFn:async e=>{let{data:t}=await a.Z.patch(y,e,{...s,headers:m});return t.data},onSuccess:(t,n,l)=>{d.invalidateQueries({queryKey:[e[0],"list"]})},onSettled:(e,t,n,l)=>{}});return[k.mutateAsync,k.status]},g=function(e,t){var n;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(0,c.useRouter)(),d=(0,l.NL)(),h=null!==(n=o.query.access_token)&&void 0!==n?n:(0,r.getCookie)("x-auth-cookie"),m=h?{Authorization:"Bearer ".concat(h)}:{};m["Cache-Control"]="no-cache";let x=(0,i.D)({mutationFn:async e=>{let n=new URLSearchParams(e).toString(),l="".concat(u.De.NEXT_PUBLIC_API_BASE_URL).concat(t,"?").concat(n),{data:i}=await a.Z.delete(l,{...s,headers:m});return i},onSuccess:t=>(d.invalidateQueries({queryKey:[e[0],"list"]}),t)}),{mutateAsync:g,status:v}=x;return[g,v]}},69931:function(e,t,n){"use strict";var l=n(85893);let s=e=>(0,l.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ".concat(e.className),children:e.children});t.Z=s},77418:function(e,t,n){"use strict";n.d(t,{q:function(){return c}});var l=n(85893),s=n(83062),i=n(27484),a=n.n(i);n(67294);let r=n(56176),o=n(84110);a().extend(o),a().extend(r);let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{date:t}=e;return(0,l.jsx)(s.Z,{title:a()(t).format("LLL"),children:(0,l.jsx)("span",{children:t?a()(t).fromNow():"-"})})}},46003:function(e,t,n){"use strict";n.d(t,{O:function(){return C}});var l=n(85893),s=n(50888),i=n(87743),a=n(92195),r=n(33100),o=n(27484),c=n.n(o),u=n(25935),d=n(96486),h=n(11163),m=n(67294),x=n(91036),g=n.n(x),v=n(12780),p=n(25026),f=n(51369);let j=n(57046),y=n(56176),k=n(84110);c().extend(k),c().extend(y);let{useApp:Z}=i.Z,w="command failed with exit code 1",b=e=>g()("".concat(e).replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,"")),C=e=>{let{slug:t}=e;(0,h.useRouter)(),Z();let[n]=(0,p.o)(),{build_slug:i}=n,{data:o="",isLoading:c}=(0,v.wl)(null!=t?t:i),x=b(o),g=x.split("\n").map((e,t)=>e.toString()),y=f.De.NEXT_PUBLIC_API_BASE_URL,[k,C]=(0,m.useState)(["Connecting..."]),[N,S]=(0,m.useState)("in_progress"),[E,_]=(0,m.useState)(!1),{token:{colorText:P}}=a.Z.useToken();return(0,m.useEffect)(()=>{(0,d.isEmpty)(o)||C(g)},[g.length]),(0,m.useEffect)(()=>{let e=o.toString().toLowerCase();if((e.indexOf("finished deploying")>-1||e.indexOf(w)>-1||e.indexOf("[error]")>-1)&&_(!0),e.indexOf("finished deploying")>-1&&S("success"),(e.indexOf(w)>-1||e.indexOf("[error]")>-1)&&S("failed"),!i)return()=>!1;console.log('[socket] connecting to "'.concat(i,'" room...'));let t=j(y,{transports:["websocket"]});return t.on("connect",()=>{console.log("[socket] connected:",t.connected,"(ROOM: ".concat(i,")")),t.emit("join",{room:i}),t.on("message",e=>{let{action:n,message:l}=e;console.log("[socket] message:",{action:n,message:l}),l&&(C(e=>[...e,b(l)]),((null==l?void 0:l.toLowerCase().indexOf(w))>-1||(null==l?void 0:l.toLowerCase().indexOf("[error]"))>-1)&&(S("failed"),_(!0))),"end"===n&&(t.disconnect(),_(!0),S("success"))})}),t.on("disconnect",()=>{console.log("[socket] disconnected !"),C(e=>[...e,"Disconnected with build server."])}),()=>{t.connected&&(console.log("[socket] disconnecting..."),t.disconnect()),C([])}},[o,i]),(0,l.jsxs)("div",{style:{color:P},children:["failed"===N&&(0,l.jsx)("h2",{className:"text-xl text-red-600",children:"Build lỗi rồi m\xe1 ơi!"}),"success"===N&&(0,l.jsx)("h2",{className:"text-xl text-green-600",children:"Build th\xe0nh c\xf4ng rồi, đỉnh qu\xe1 idol ơi!"}),(0,l.jsxs)(r.Z,{children:["in_progress"===N&&(0,l.jsx)(r.Z.Item,{dot:(0,l.jsx)(s.Z,{}),children:"Building..."},"message-spin"),k.filter(e=>""!==e).reverse().map((e,t)=>"".concat(e).toLowerCase().indexOf("error")>-1?(0,l.jsx)(r.Z.Item,{className:"text-red-600",children:(0,u.ZP)("".concat(e))},"message-".concat(t)):(0,l.jsx)(r.Z.Item,{children:(0,u.ZP)("".concat(e))},"message-".concat(t)))]})]})}},25026:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var l=n(11163),s=n(67294);let i=()=>{let e=(0,l.useRouter)(),t=e.asPath,n=new URLSearchParams(e.asPath.split("?")[1]),i=Object.fromEntries(n),[a,r]=(0,s.useState)(i),o=t=>{let n={...a};return t.forEach(e=>{delete n[e]}),r(n),e.push(e.pathname,{query:n}),a},c=()=>{let e=Object.keys(a);return o(e)};return(0,s.useEffect)(()=>{if(e.isReady){if(-1===t.indexOf("?")){c();return}r(i)}},[e.asPath,e.isReady]),[a,{setQuery:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={...a,...t};return r(n),e.push("".concat(e.pathname),{query:n}),n},deleteQuery:o,deleteAllQueryKeys:c}]}},91144:function(e,t,n){"use strict";n.d(t,{c:function(){return a}});var l=n(51855),s=n(25026),i=n(67294);let a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t]=i.useState(()=>{try{var t,n;return null==window?void 0:null===(t=window.location)||void 0===t?void 0:null===(n=t.hostname)||void 0===n?void 0:n.split(".")[e]}catch(l){console.error(l.message);return}});return t}(),[{workspace:n}]=(0,s.o)(),a="app"===t||"localhost"===t||"diginext"===t?e.name:null!=n?n:t,{data:r}=(0,l.xh)(a);return r}},5346:function(e,t,n){"use strict";n.d(t,{o:function(){return e6}});var l,s=n(85893),i=n(58720),a=n(92195),r=n(87743),o=n(5678),c=n(97183),u=n(11163),d=n(67294),h=n(53971),m=n(52545),x=n(45350),g=n(65184),v=n(13179),p=n(70125),f=n(40717),j=n(13520),y=n(139),k=n(26522),Z=n(87547),w=n(55355),b=n(94149),C=n(42952),N=n(36907),S=n(87412),E=n(96486),_=n(41664),P=n.n(_);let A=(0,d.createContext)({sidebarCollapsed:!1}),I=()=>{let e=(0,d.useContext)(A);return e};var R=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,d.useState)(!1),l=e=>void 0!==e?n(e):n(e=>!e);return(0,s.jsx)(A.Provider,{value:{sidebarCollapsed:t,toggleSidebar:l},children:e.children})};let L=[{key:"menu/",icon:(0,s.jsx)(h.Z,{}),label:"Dashboard"},{key:"menu/project",icon:(0,s.jsx)(m.Z,{}),label:"Projects"},{key:"menu/framework",icon:(0,s.jsx)(x.Z,{}),label:"Frameworks"},{key:"menu/git",icon:(0,s.jsx)(g.Z,{}),label:"Git Providers"},{key:"menu/infrastructure",icon:(0,s.jsx)(v.Z,{}),label:"Infrastructure",children:[{key:"menu/infrastructure/cloud-provider",icon:(0,s.jsx)(p.Z,{}),label:"Cloud Providers"},{key:"menu/infrastructure/cluster",icon:(0,s.jsx)(f.Z,{}),label:"K8S Clusters"},{key:"menu/infrastructure/database",icon:(0,s.jsx)(j.Z,{}),label:"Databases"},{key:"menu/infrastructure/registry",icon:(0,s.jsx)(y.Z,{}),label:"Container Registries"}]},{key:"menu/workspace",icon:(0,s.jsx)(k.Z,{}),label:"Workspace",children:[{key:"menu/workspace/users",icon:(0,s.jsx)(Z.Z,{}),label:"Users"},{key:"menu/workspace/teams",icon:(0,s.jsx)(w.Z,{}),label:"Teams"},{key:"menu/workspace/roles",icon:(0,s.jsx)(b.Z,{}),label:"Roles"},{key:"menu/workspace/settings",icon:(0,s.jsx)(C.Z,{}),label:"Settings"}]}],F=()=>{let e=(0,u.useRouter)(),{sidebarCollapsed:t,toggleSidebar:n}=I(),{isDarkMode:l}=(0,o.vs)(),i="menu/".concat((0,E.trimStart)(e.pathname,"/").split("/")[0]),a="menu".concat((0,E.trimEnd)(e.pathname,"/")),r=t=>{let n=(0,E.trimStart)(t.key,"menu");e.push(n)};return(0,s.jsxs)(S.ZP,{theme:"light",collapsible:!0,collapsed:t,onCollapse:e=>n&&n(e),style:{overflow:"auto",height:"100vh",position:"fixed",left:0,top:0,bottom:0},children:[t?(0,s.jsx)("div",{className:"mx-auto my-5 w-[32px]",children:(0,s.jsx)(P(),{href:"/",children:(0,s.jsx)("img",{src:l?"".concat(e.basePath,"/assets/images/diginext-icon-white.svg"):"".concat(e.basePath,"/assets/images/diginext-icon-black.svg"),alt:"Diginext Logo"})})}):(0,s.jsx)("div",{className:"mx-auto my-5 w-36",children:(0,s.jsx)(P(),{href:"/",children:(0,s.jsx)("img",{src:l?"".concat(e.basePath,"/assets/images/diginext_logo_white.svg"):"".concat(e.basePath,"/assets/images/diginext_logo.svg"),alt:"Diginext Logo"})})}),(0,s.jsx)(N.Z,{mode:"inline",inlineCollapsed:t,defaultOpenKeys:[i],defaultSelectedKeys:[i,a],items:L,onSelect:r})]})};var T=n(44384),D=n(26713),U=n(71577),B=n(45669),O=n(34937),z=n(84435),V=n(97937),q=n(50888),X=n(63606),M=n(94282),Q=n(73546),H=n(16379),K=n(10),W=n(52645),Y=n(71965);let G=e=>{let{compact:t=!1,icon:n,name:l,setValue:i,initialValue:a}=e,r=T.Z.useFormInstance(),o=()=>r.submit(),c=()=>{r.setFieldValue(l,a),i(a)},u=()=>{r.setFieldValue(l,""),i("")};return(0,s.jsxs)(D.Z,{size:t?4:8,children:[(0,s.jsx)(U.Z,{type:"primary",icon:t&&(0,s.jsx)(X.Z,{}),onClick:()=>o(),children:!t&&"Save"}),(0,s.jsx)(U.Z,{icon:t&&(0,s.jsx)(W.Z,{}),onClick:()=>u(),children:!t&&"Clear"}),(0,s.jsx)(U.Z,{danger:!0,icon:t&&(0,s.jsx)(Y.Z,{}),onClick:()=>c(),children:!t&&"Reset"})]})},$=e=>{let t;let{label:n,postLabel:l,name:i,required:a=!1,requiredMessage:r="Please input your ".concat(n),defaultValue:c,initialValue:u,value:h,status:m,autoSave:x=!1,isNew:g,lang:v=[]}=e,p=T.Z.useFormInstance(),[f,j]=(0,d.useState)(null!=h?h:c),y=(0,o.Nr)(f,500),k=e=>{p.setFieldValue(i,e),j(e)},Z=()=>p.submit();return(0,d.useEffect)(()=>{p.setFieldValue(i,h),j(h)},[h]),(0,d.useEffect)(()=>{y!==h&&x&&!g&&Z()},[y]),m&&"error"===m[i]&&(t=(0,s.jsx)(V.Z,{})),m&&"loading"===m[i]&&(t=(0,s.jsx)(q.Z,{})),m&&"success"===m[i]&&(t=(0,s.jsx)(X.Z,{color:"green"})),(0,s.jsx)(T.Z.Item,{label:(0,s.jsxs)(D.Z,{size:"small",children:[n,t]}),name:i,rules:[{required:a,message:r}],children:(0,s.jsxs)(D.Z,{direction:"vertical",className:"w-full",children:[(0,s.jsx)(K.ZP,{height:"400px",theme:H.M_,extensions:[...v.map(e=>Q.RI[e]()),(0,M.X)({})],onChange:k,value:f}),l,!x&&!g&&(0,s.jsx)(G,{initialValue:u,name:i,setValue:j,icon:t})]})})};var J=n(79531);let ee=e=>{let t;let{label:n,postLabel:l,name:i,required:a=!1,requiredMessage:r="Please input your ".concat(n),defaultValue:c,initialValue:u,value:h,status:m,autoSave:x=!0,isNew:g,placeholder:v}=e,p=T.Z.useFormInstance(),[f,j]=(0,d.useState)(null!=h?h:c),y=(0,o.Nr)(f,500),k=e=>{let t=e.currentTarget.value;p.setFieldValue(i,t),j(t)},Z=()=>p.submit();return(0,d.useEffect)(()=>{p.setFieldValue(i,h),j(h)},[h]),(0,d.useEffect)(()=>{y!==h&&x&&!g&&Z()},[y]),m&&"error"===m[i]&&(t=(0,s.jsx)(V.Z,{})),m&&"loading"===m[i]&&(t=(0,s.jsx)(q.Z,{})),m&&"success"===m[i]&&(t=(0,s.jsx)(X.Z,{color:"green"})),(0,s.jsx)(T.Z.Item,{label:(0,s.jsxs)(D.Z.Compact,{direction:"vertical",children:[(0,s.jsxs)(D.Z,{size:"small",children:[n,t]}),l]}),name:i,rules:[{required:a,message:r}],children:(0,s.jsxs)(D.Z,{direction:"vertical",className:"w-full",children:[(0,s.jsx)(J.Z,{placeholder:v,onChange:k,value:f}),!x&&!g&&(0,s.jsx)(G,{initialValue:u,name:i,setValue:j,icon:t})]})})};var et=n(67527);let en=e=>{let t;let{className:n,style:l,label:i,postLabel:a,name:r,required:c=!1,requiredMessage:u="Please input your ".concat(i),defaultValue:h,initialValue:m,value:x,status:g,autoSave:v=!0,isNew:p,options:f}=e,j=T.Z.useFormInstance(),[y,k]=(0,d.useState)(null!=x?x:h),Z=(0,o.Nr)(y,500),w=e=>{j.setFieldValue(r,e),k(e)},b=()=>j.submit();return(0,d.useEffect)(()=>{j.setFieldValue(r,x),k(x)},[x]),(0,d.useEffect)(()=>{Z!==x&&v&&!p&&b()},[Z]),g&&"error"===g[r]&&(t=(0,s.jsx)(V.Z,{})),g&&"loading"===g[r]&&(t=(0,s.jsx)(q.Z,{})),g&&"success"===g[r]&&(t=(0,s.jsx)(X.Z,{color:"green"})),(0,s.jsx)(T.Z.Item,{label:(0,s.jsxs)(D.Z,{size:"small",children:[i,t]}),name:r,rules:[{required:c,message:u}],children:(0,s.jsxs)(D.Z,{direction:"horizontal",className:"w-full",children:[(0,s.jsx)(et.Z,{className:n,style:l,value:y,onChange:w,options:f}),a,!v&&!p&&(0,s.jsx)(G,{initialValue:m,name:r,setValue:k,icon:t})]})})},{TextArea:el}=J.Z,es=e=>{let t;let{label:n,postLabel:l,name:i,required:a=!1,requiredMessage:r="Please input your ".concat(n),defaultValue:c,initialValue:u,value:h,status:m,autoSave:x=!0,isNew:g}=e,v=T.Z.useFormInstance(),[p,f]=(0,d.useState)(null!=h?h:c),j=(0,o.Nr)(p,500),y=e=>{let t=e.currentTarget.value;v.setFieldValue(i,t),f(t)},k=()=>v.submit();return(0,d.useEffect)(()=>{v.setFieldValue(i,h),f(h)},[h]),(0,d.useEffect)(()=>{j!==h&&x&&!g&&k()},[j]),m&&"error"===m[i]&&(t=(0,s.jsx)(V.Z,{})),m&&"loading"===m[i]&&(t=(0,s.jsx)(q.Z,{})),m&&"success"===m[i]&&(t=(0,s.jsx)(X.Z,{color:"green"})),(0,s.jsx)(T.Z.Item,{label:(0,s.jsxs)(D.Z,{size:"small",children:[n,t]}),name:i,rules:[{required:a,message:r}],children:(0,s.jsxs)(D.Z,{direction:"vertical",className:"w-full",children:[(0,s.jsx)(el,{rows:3,onChange:y,value:p}),l,!x&&!g&&(0,s.jsx)(G,{compact:!0,initialValue:u,name:i,setValue:f,icon:t})]})})};var ei=n(25026),ea=n(85265);let er=(0,d.createContext)({drawerVisibility:{lv1:!1,lv2:!1},toggleDrawer:(e,t)=>{},showDrawer:(e,t)=>{},closeDrawer:e=>{}}),eo=()=>{let e=(0,d.useContext)(er);return e};var ec=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,d.useState)({lv1:!1,lv2:!1}),[l,i]=(0,d.useState)(),[a,r]=(0,d.useState)(),o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lv1",t=arguments.length>1?arguments[1]:void 0;return void 0!==t?n(n=>{let l={...n};return l[e]=t,l}):n(t=>{let n={...t};return n[e]=!t[e],n})},c=e=>{e?o(e,!1):n({lv1:!1,lv2:!1})},u=()=>{n(e=>({...e,lv1:!1}))},h=()=>{n(e=>({...e,lv2:!1}))},m=(e,t)=>{switch(null==t?void 0:t.level){case 1:i(e),o("lv1",!0);break;case 2:r(e),o("lv2",!0)}};return(0,s.jsxs)(er.Provider,{value:{drawerVisibility:t,toggleDrawer:o,showDrawer:m,closeDrawer:c},children:[e.children,(0,s.jsxs)(ea.Z,{title:null==l?void 0:l.title,placement:"right",onClose:u,open:t.lv1,size:"large",bodyStyle:{overflow:"hidden",padding:0},children:[null==l?void 0:l.content,(0,s.jsx)(ea.Z,{title:null==a?void 0:a.title,placement:"right",onClose:h,open:t.lv2,size:"large",children:null==a?void 0:a.content})]})]})},eu=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{data:n}=t,[l,i]=(0,B.aC)(),{drawerVisibility:r}=eo(),[,{deleteQuery:o}]=(0,ei.o)(),[c]=T.Z.useForm(),[u,h]=(0,d.useState)(),[{cluster_slug:m}]=(0,ei.o)(),{data:x}=(0,z.pD)(m,{populate:"owner,provider"}),[g,v]=(0,z.ve)({filter:{id:null==x?void 0:x._id}}),[p,f]=(0,z.CN)(),{data:{list:j=[]}={}}=(0,O.nu)();console.log("providers :>> ",j);let y=void 0===x,{token:{colorBgContainer:k}}=a.Z.useToken(),{closeDrawer:Z}=eo(),w=async e=>{console.log(y?"[NEW]":"[UPDATE]","Submit:",e);let t={...e};if(y)console.log("[NEW] result :>> ",await p(t)),Z();else{let n={};Object.entries(t).forEach(e=>{let[l,s]=e;x&&s!==x[l]?n[l]="loading":(delete n[l],delete t[l])}),console.log("statuses :>> ",n),h(n),(0,E.isEmpty)(n)?console.log("[UPDATE] Skipped, nothing new to update."):console.log("[UPDATE] result :>> ",await g(t))}},b=e=>{console.log("Failed:",e)};return(0,d.useEffect)(()=>{if(void 0===u)return;let e=Object.keys(u),t={};e.forEach(e=>{t[e]=v}),h(t)},[v]),(0,s.jsxs)(T.Z,{className:"h-full overflow-auto",layout:"vertical",form:c,onFinish:w,onFinishFailed:b,autoComplete:"off",children:[(0,s.jsxs)("div",{className:"p-6 pb-16",children:[(0,s.jsx)(ee,{label:"Cluster name",name:"name",value:null==x?void 0:x.name,status:u,isNew:y}),(0,s.jsx)(ee,{label:"Short name",name:"shortName",value:null==x?void 0:x.shortName,status:u,isNew:y}),(0,s.jsx)(en,{isNew:y,style:{width:250},label:"Cloud Provider",name:"provider",value:null==x?void 0:null===(e=x.provider)||void 0===e?void 0:e._id,options:j.map(e=>({label:e.name||"",value:e._id})),status:u}),(0,s.jsx)(ee,{label:"Primary IP",name:"primaryIP",value:null==x?void 0:x.primaryIP,status:u,isNew:y}),(0,s.jsx)(ee,{label:"Primary domain",name:"primaryDomain",value:null==x?void 0:x.primaryDomain,status:u,isNew:y}),(0,s.jsx)(ee,{label:"Project ID (Google)",name:"projectID",value:null==x?void 0:x.projectID,status:u,isNew:y}),(0,s.jsx)(ee,{label:"Region (Google)",name:"region",value:null==x?void 0:x.region,status:u,isNew:y}),(0,s.jsx)(ee,{label:"Zone (Google)",name:"zone",value:null==x?void 0:x.zone,status:u,isNew:y}),(0,s.jsx)($,{lang:["yaml"],label:"KubeConfig (YAML)",name:"kubeConfig",value:null==x?void 0:x.kubeConfig,initialValue:null==x?void 0:x.kubeConfig,status:u,isNew:y}),(0,s.jsx)(es,{isNew:y,label:"API Access Token",name:"apiAccessToken",value:null==x?void 0:x.apiAccessToken,initialValue:null==x?void 0:x.apiAccessToken,status:u}),(0,s.jsx)($,{lang:["json"],label:"Service Account (JSON)",name:"serviceAccount",value:null==x?void 0:x.serviceAccount,initialValue:null==x?void 0:x.serviceAccount,status:u,isNew:y})]}),(0,s.jsx)("div",{className:"fixed bottom-0 w-full px-6 py-3",style:{backgroundColor:k},children:(0,s.jsxs)(D.Z,{children:[(0,s.jsx)(T.Z.Item,{style:{marginBottom:0},children:(0,s.jsx)(U.Z,{type:"primary",htmlType:"submit",children:"Submit"})}),(0,s.jsx)(U.Z,{type:"primary",danger:!0,children:"Discard"})]})})]})},ed=n(22850),eh=n(36770),em=n(59346);let{Text:ex}=ed.Z;var eg=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{data:n}=t,[l,i]=(0,B.aC)(),{drawerVisibility:r}=eo(),[,{deleteQuery:o}]=(0,ei.o)(),[c]=T.Z.useForm(),[u,h]=(0,d.useState)(),[{framework_slug:m}]=(0,ei.o)(),{data:x}=(0,eh.FX)(m,{populate:"owner,provider"}),[g,v]=(0,eh.fR)({filter:{id:null==x?void 0:x._id}}),[p,f]=(0,eh.D$)(),{data:{list:j=[]}={}}=(0,em.y3)();console.log("gitProviders :>> ",j);let y=void 0===x,{token:{colorBgContainer:k}}=a.Z.useToken(),{closeDrawer:Z}=eo(),w=async e=>{console.log(y?"[NEW]":"[UPDATE]","Submit:",e);let t={...e};if(y)console.log("[NEW] result :>> ",await p(t)),Z();else{let n={};Object.entries(t).forEach(e=>{let[l,s]=e;x&&s!==x[l]?n[l]="loading":(delete n[l],delete t[l])}),console.log("statuses :>> ",n),h(n),(0,E.isEmpty)(n)?console.log("[UPDATE] Skipped, nothing new to update."):console.log("[UPDATE] result :>> ",await g(t))}},b=e=>{console.log("Failed:",e)};return(0,d.useEffect)(()=>{if(void 0===u)return;let e=Object.keys(u),t={};e.forEach(e=>{t[e]=v}),h(t)},[v]),(0,s.jsxs)(T.Z,{className:"h-full overflow-auto",layout:"vertical",form:c,onFinish:w,onFinishFailed:b,autoComplete:"off",children:[(0,s.jsxs)("div",{className:"p-6 pb-16",children:[(0,s.jsx)(ee,{label:"Framework name",name:"name",placeholder:"My Starter Template",value:null==x?void 0:x.name,status:u,isNew:y}),(0,s.jsx)(en,{label:"Git Provider",name:"git",value:null==x?void 0:null===(e=x.git)||void 0===e?void 0:e._id,style:{width:250},options:j.map(e=>({label:e.name||"",value:e._id})),status:u,isNew:y}),(0,s.jsx)(ee,{label:"Repository HTTPS URL",name:"repoURL",placeholder:"https://github.com/user/repo.git",value:null==x?void 0:x.repoURL,status:u,isNew:y}),(0,s.jsx)(ee,{label:"Repository SSH URL",name:"repoSSH",placeholder:"git@github.com:user/repo.git",value:null==x?void 0:x.repoSSH,status:u,isNew:y}),(0,s.jsx)(ee,{label:"Main branch",name:"mainBranch",value:null==x?void 0:x.mainBranch,placeholder:"main",status:u,isNew:y})]}),(0,s.jsx)("div",{className:"fixed bottom-0 w-full px-6 py-3",style:{backgroundColor:k},children:(0,s.jsxs)(D.Z,{children:[(0,s.jsx)(T.Z.Item,{style:{marginBottom:0},children:(0,s.jsx)(U.Z,{type:"primary",htmlType:"submit",children:"Submit"})}),(0,s.jsx)(U.Z,{type:"primary",danger:!0,children:"Discard"})]})})]})};let ev=()=>{let e;let[{type:t}]=(0,ei.o)();switch(t){case"cluster":e=(0,s.jsx)(eu,{});break;case"framework":e=(0,s.jsx)(eg,{})}return(0,s.jsx)("div",{className:"h-full",children:e})};var ep=n(51369);let ef=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsxs)("div",{children:[e.children,(0,s.jsxs)("div",{className:"border-t border-gray-300 py-8 text-center text-xs",children:["\xa9 Copyright ",new Date().getFullYear()," ",ep.XL.title,". Powered by ",(0,s.jsx)("a",{href:"https://wearetopgroup.com",children:"TOP GROUP"}),"."]})]})};var ej=n(19944),ey=n(84477),ek=n(68795),eZ=n(25035),ew=n(80882),eb=n(55241),eC=n(98293);let{Header:eN}=c.Z,eS=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{onSidebarChange:t}=e,{isDarkMode:n,toggle:l}=(0,o.vs)(),[i]=(0,B.aC)(),{token:{colorBgContainer:r}}=a.Z.useToken(),{sidebarCollapsed:c,toggleSidebar:u}=I();return(0,d.useEffect)(()=>t&&t(c),[c]),(0,s.jsx)(eN,{className:"w-full",style:{position:"sticky",top:0,paddingInline:24,lineHeight:"48px",height:48,zIndex:100,background:r},children:(0,s.jsxs)("div",{className:"flex ",children:[(0,s.jsx)("div",{className:"grow",children:d.createElement(c?ej.Z:ey.Z,{className:"trigger",onClick:()=>u&&u()})}),(0,s.jsxs)(D.Z,{size:4,children:[(0,s.jsx)(U.Z,{type:"text",icon:(0,s.jsx)(ek.Z,{})}),(0,s.jsx)(U.Z,{type:"text",icon:(0,s.jsx)(eZ.Z,{})}),(0,s.jsx)(U.Z,{type:"text",style:{fontSize:18,verticalAlign:"middle",paddingTop:0},onClick:l,icon:n?(0,s.jsx)("i",{className:"ri-sun-line inline-block"}):(0,s.jsx)("i",{className:"ri-moon-line inline-block"})}),(0,s.jsx)(eb.Z,{placement:"bottomRight",trigger:"click",content:(0,s.jsxs)(D.Z,{direction:"vertical",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"mb-0",children:(0,s.jsx)("strong",{children:null==i?void 0:i.name})}),(0,s.jsx)("p",{className:"mb-0",children:null==i?void 0:i.email})]}),(0,s.jsxs)(D.Z.Compact,{direction:"vertical",className:"w-full",children:[(0,s.jsx)(U.Z,{children:"Profile"}),(0,s.jsx)(U.Z,{href:"/logout",children:"Sign out"})]})]}),children:(0,s.jsxs)("div",{className:"cursor-pointer align-middle",children:[(0,s.jsx)(eC.C,{style:{lineHeight:"20px"},icon:(0,s.jsx)(Z.Z,{style:{verticalAlign:"middle"}}),src:null==i?void 0:i.image,size:24}),(0,s.jsx)("span",{className:"ml-2 inline-block",children:null==i?void 0:i.name}),(0,s.jsx)(ew.Z,{className:"ml-2"})]})})]})]})})};var eE=n(45605),e_=n(18429),eP=n(8751),eA=n(37993),eI=n(99611),eR=n(67841),eL=n(51904),eF=n(83062),eT=n(48232),eD=n(27484),eU=n.n(eD),eB=n(12780),eO=n(14223);let ez=e=>(0,eO.wz)(["releases","list"],"/api/v1/release",e),eV=e=>(0,eO.yt)(["releases","rollout"],"/api/v1/release/rollout",e),eq=e=>(0,eO.FF)(["releases","create"],"/api/v1/release/from-build",e),eX=e=>(0,eO.yt)(["releases","preview"],"/api/v1/release/preview",e);var eM=n(77418);let eQ=n(56176),eH=n(84110);eU().extend(eH),eU().extend(eQ);let{useApp:eK}=r.Z,eW=[{title:"Name",width:70,dataIndex:"name",key:"name",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.name&&t.name.indexOf(e.toString())>-1||!0,render:(e,t)=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:(0,s.jsx)(P(),{href:{pathname:"/build/[...slugs]",query:{slugs:[t.slug]}},children:(0,s.jsx)("strong",{children:e})})}),(0,s.jsxs)("p",{children:["Created ",(0,s.jsx)(eM.q,{date:t.createdAt})]})]})},{title:"Created by",dataIndex:"owner",key:"owner",width:40,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.owner&&(t.owner.slug||"").indexOf(e.toString())>-1||!0,render:e=>(0,s.jsx)(s.Fragment,{children:null==e?void 0:e.name})},{title:"Status",dataIndex:"status",key:"status",width:30,filters:[{text:"live",value:"live"}],render:e=>{let t="warning",n=(0,s.jsx)(eE.Z,{});switch(e){case"building":t="processing",n=(0,s.jsx)(q.Z,{className:"align-middle"});break;case"failed":t="error",n=(0,s.jsx)(e_.Z,{className:"align-middle"});break;case"success":t="success",n=(0,s.jsx)(eP.Z,{className:"align-middle"});break;default:t="default",n=(0,s.jsx)(eE.Z,{})}return(0,s.jsx)(eL.Z,{color:t,icon:n,children:e})}},{title:"Action",key:"action",width:30,dataIndex:"action"}],eY=()=>{(0,u.useRouter)();let e=eK(),[t,{setQuery:n}]=(0,ei.o)(),{project:l,app:i,env:a}=t,r={};l&&(r.projectSlug=l),i&&(r.appSlug=i),a&&(r.env=a);let[o,c]=(0,d.useState)(1),{data:h}=(0,eB.BY)({populate:"owner",pagination:{page:o,size:100},filter:r}),{list:m,pagination:x}=h||{},{total_items:g}=x||{},v=e=>{n({lv2:"build_logs",build_slug:e})},[p]=eq(),f=async t=>{if((0,E.isEmpty)(t)){e.notification.error({message:"Failed to release the build.",description:"Build not found: ".concat(t),placement:"top"});return}try{let n=await p({build:t});e.notification.success({message:"Congrats, the release has been created successfully!",description:(0,s.jsxs)(s.Fragment,{children:["You can now preview it on ",(0,s.jsx)("a",{href:"https://".concat(null==n?void 0:n.prereleaseUrl),children:"PRE-RELEASE"})," endpoint."]}),placement:"top"})}catch(l){console.error("Could not process releasing this build:",l),e.notification.error({message:"Failed to roll out.",description:"Could not process releasing this build: ".concat(l),placement:"top"})}},j=null==m?void 0:m.map(e=>({id:e._id,...e,action:(0,s.jsxs)(D.Z.Compact,{children:[(0,s.jsx)(eF.Z,{title:"View log history",children:(0,s.jsx)(U.Z,{icon:(0,s.jsx)(eA.Z,{}),onClick:()=>v(e.slug)})}),(0,s.jsx)(eF.Z,{title:"Go to image link",children:(0,s.jsx)(U.Z,{icon:(0,s.jsx)(eI.Z,{}),href:"https://".concat(e.image),target:"_blank"})}),"prod"===e.env&&(0,s.jsx)(eF.Z,{title:"Release this build",children:(0,s.jsx)(U.Z,{icon:(0,s.jsx)(eR.Z,{}),onClick:()=>{var t;return f(null===(t=e._id)||void 0===t?void 0:t.toString())}})})]})})),y=e=>{let{current:t}=e;c(null!=t?t:1)};return(0,s.jsx)("div",{children:(0,s.jsx)(eT.Z,{columns:eW,dataSource:j,scroll:{x:600},sticky:{offsetHeader:0},pagination:{current:o,pageSize:100,total:g},onChange:y})})};var eG=n(46003);let e$=n(56176),eJ=n(84110);eU().extend(eJ),eU().extend(e$);let{useApp:e0}=r.Z,e1=[{title:"Name",width:70,dataIndex:"name",key:"name",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.name&&t.name.indexOf(e.toString())>-1||!0,render:(e,t)=>{var n;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:e})}),(0,s.jsxs)("p",{children:["Author: ",null!==(l=null===(n=t.owner)||void 0===n?void 0:n.name)&&void 0!==l?l:"-",(0,s.jsx)("br",{}),"Created ",(0,s.jsx)(eM.q,{date:t.createdAt})]})]})}},{title:"Build status",dataIndex:"buildStatus",key:"buildStatus",width:30,filters:[{text:"start",value:"start"},{text:"failed",value:"failed"},{text:"success",value:"success"},{text:"building",value:"building"}],render:e=>{let t="warning",n=(0,s.jsx)(eE.Z,{});switch(e){case"building":t="processing",n=(0,s.jsx)(q.Z,{className:"align-middle"});break;case"failed":t="error",n=(0,s.jsx)(e_.Z,{className:"align-middle"});break;case"success":t="success",n=(0,s.jsx)(eP.Z,{className:"align-middle"});break;default:t="default",n=(0,s.jsx)(eE.Z,{})}return(0,s.jsx)(eL.Z,{color:t,icon:n,children:e})}},{title:"Active",dataIndex:"active",key:"active",width:20,filters:[{text:"active",value:!0}],onFilter:(e,t)=>t.active===e,render:e=>!0===e?(0,s.jsx)(eL.Z,{color:"blue",icon:(0,s.jsx)(eP.Z,{}),children:"active"}):"-"},{title:"Action",key:"action",width:30,dataIndex:"action",render:e=>e}],e2=()=>{(0,u.useRouter)();let e=e0(),[t]=(0,ei.o)(),{project:n,app:l,offsetHeader:i=0,env:a="prod"}=t,r={};n&&(r.projectSlug=n),l&&(r.appSlug=l),a&&(r.env=a);let[o,c]=(0,d.useState)(1),{data:h}=ez({populate:"owner",pagination:{page:o,size:100},filter:r}),{list:m=[],pagination:x}=h||{},{total_items:g}=x||{},[v,p]=eV();console.log("rolloutApiStatus :>> ",p);let[f,j]=(0,d.useState)(""),[y]=eX(),k=async t=>{if((0,E.isEmpty)(t)){e.notification.error({message:"Failed to roll out.",description:"Release not found: ".concat(t),placement:"top"});return}j(t);try{let n=await v({id:t});e.notification.success({message:"Congrats, the release has been rolled out successfully!",description:(0,s.jsxs)(s.Fragment,{children:["Your website is ready to access on PRODUCTION environment:"," ",(0,s.jsx)("a",{href:"https://".concat(null==n?void 0:n.productionUrl),target:"_blank",rel:"noreferrer",children:null==n?void 0:n.productionUrl})]}),placement:"top"})}catch(l){console.error("Could not process rolling out this release:",l),e.notification.error({message:"Failed to roll out.",description:"Could not process rolling out this release: ".concat(l),placement:"top"})}j("")},Z=async t=>{if((0,E.isEmpty)(t)){e.notification.error({message:"Failed to preview.",description:"Release not found: ".concat(t),placement:"top"});return}try{let n=await y({id:t});e.notification.success({message:"Congrats!",description:(0,s.jsxs)(s.Fragment,{children:["The PRE-RELEASE environment has been setup successfully at:"," ",(0,s.jsx)("a",{href:"https://".concat(null==n?void 0:n.prereleaseUrl),target:"_blank",rel:"noreferrer",children:null==n?void 0:n.prereleaseUrl})]}),placement:"top"})}catch(l){e.notification.error({message:"Failed to start preview.",description:"Could not set up the pre-release environment of this release: ".concat(l),placement:"top"})}},w=m.map(e=>({...e,id:e._id,state:""!==f?p:!0===e.active?"success":"none",action:(0,s.jsxs)(D.Z.Compact,{children:[(0,s.jsx)(eF.Z,{title:"Roll out",children:(0,s.jsx)(U.Z,{icon:""!==f&&"loading"===p?(0,s.jsx)(q.Z,{}):(0,s.jsx)(eR.Z,{}),onClick:()=>k(e._id)})}),(0,s.jsx)(eF.Z,{title:"Preview",children:(0,s.jsx)(U.Z,{icon:(0,s.jsx)(eI.Z,{}),onClick:()=>Z(e._id),target:"_blank"})})]})}));console.log({displayedReleases:w});let b=e=>{let{current:t}=e;c(null!=t?t:1)};return(0,s.jsx)("div",{children:(0,s.jsx)(eT.Z,{columns:e1,dataSource:w,scroll:{x:600},sticky:{offsetHeader:i},pagination:{current:o,pageSize:100,total:g},onChange:b})})},e4=e=>{let{useSidebar:t}=e;(0,u.useRouter)();let{sidebarCollapsed:n}=I(),l="auto";t&&(l=n?80:200);let i=eo(),{drawerVisibility:r,showDrawer:o,closeDrawer:h}=i,[m,{setQuery:x,deleteQuery:g,deleteAllQueryKeys:v}]=(0,ei.o)(),{lv1:p,lv2:f,type:j,slug:y,project:k,app:Z,env:w}=m,{token:{colorText:b}}=a.Z.useToken(),C=()=>{o&&o({title:"Builds",content:(0,s.jsx)(eY,{})},{level:1})},N=()=>{o&&o({title:"Releases",content:(0,s.jsx)(e2,{})},{level:1})},S=()=>{o&&o({title:"Build Logs",content:(0,s.jsx)(eG.O,{})},{level:2})},E=()=>{o&&o({title:"Edit",content:(0,s.jsx)(ev,{})},{level:1})},_=()=>{o&&o({title:"Create",content:(0,s.jsx)(ev,{})},{level:1})};return(0,d.useEffect)(()=>{switch(p){case"build":C();break;case"release":N();break;case"new":_();break;case"edit":E();break;default:h&&h("lv1")}"build_logs"===f?S():h&&h("lv2")},[p,f,k,Z,w]),(0,d.useEffect)(()=>{(null==r?void 0:r.lv1)===!1&&g(["lv1","project","app","release","type","cluster_slug"])},[null==r?void 0:r.lv1]),(0,d.useEffect)(()=>{(null==r?void 0:r.lv2)===!1&&g(["lv2","build_slug"])},[null==r?void 0:r.lv2]),(0,s.jsxs)(c.Z,{hasSider:!0,children:[e.meta,t&&(0,s.jsx)(F,{}),(0,s.jsxs)(c.Z,{className:"min-h-screen transition-all",style:{marginLeft:l},children:[t&&(0,s.jsx)(eS,{}),(0,s.jsx)("div",{className:"grow px-2",children:e.children}),(0,s.jsx)(ef,{})]})]})};function e5(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{components:t=[],children:n,...l}=e;return(0,s.jsx)(s.Fragment,{children:t.reduceRight((t,n)=>(0,d.createElement)(n,{...l,key:e.key},t),n)})}let e6=e=>{let{isDarkMode:t}=(0,o.vs)(),{useSidebar:n=!0}=e;return(0,s.jsx)(i.ZP,{theme:{hashed:!1,algorithm:t?a.Z.darkAlgorithm:a.Z.defaultAlgorithm},children:(0,s.jsx)(e5,{components:[R,ec],children:(0,s.jsx)(r.Z,{children:(0,s.jsx)(e4,{meta:e.meta,useSidebar:n,children:e.children})})})})}},51369:function(e,t,n){"use strict";n.d(t,{De:function(){return o},XL:function(){return r},r8:function(){return c}});var l=n(4793),s=n(96486),i=n(83454);let a={DEVELOPMENT:"development",STAGING:"staging",CANARY:"canary",PRODUCTION:"production"},r={site_name:"Diginext Admin",title:"Diginext Admin",description:"Welcome to an Admin Panel of Diginext.",locale:"en",tableConfig:{defaultPageSize:50}};class o{static get ENV(){return this.grab("NODE_ENV","development").toUpperCase()}static get NEXT_PUBLIC_BASE_PATH(){return""}static getBasePath(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",{NEXT_PUBLIC_BASE_PATH:t}=this;return(""===t?t:"/".concat(t))+e}static path(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.getBasePath(e)}static get NEXT_PUBLIC_ENV(){return"production"}static get NEXT_PUBLIC_API_BASE_URL(){return(0,s.trimEnd)("https://api.diginext.site","/")||"/"}static get NEXT_PUBLIC_DOMAIN(){return"diginext.site"}static get NEXT_PUBLIC_BASE_URL(){return(0,s.trimEnd)("https://app.diginext.site","/")||"/"}static get DISABLE_INPECT_MEMORY(){return(0,l.AM)(this.grab("DISABLE_INPECT_MEMORY"))}static get SECONDS_INPECT_MEMORY(){return(0,l.Hq)(this.grab("SECONDS_INPECT_MEMORY"))}static get CORS_WHITELIST(){return i.env.CORS_WHITELIST?i.env.CORS_WHITELIST.split(";"):["localhost","192.168","127.0","digitop.vn","diginext.site","diginext.vn"]}}o.grab=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l={...i.env};return null!==(t=l[e])&&void 0!==t?t:n};let c=()=>o.NEXT_PUBLIC_ENV===a.DEVELOPMENT},75347:function(){},31777:function(){},34017:function(){},59905:function(){}}]);