(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6074],{48424:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var o=i(30001),l=i(50959),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zM902 476H588v-76c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-76h314c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"import",theme:"outlined"},r=i(94590),s=function(e,t){return l.createElement(r.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:a}))};s.displayName="ImportOutlined";var n=l.forwardRef(s)},84033:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/import",function(){return i(95400)}])},69270:function(e,t,i){"use strict";var o=i(11527),l=i(39445),a=i(50959),r=i(89335);let s=e=>{let t=(0,l.useRouter)(),{isDarkMode:i}=(0,r.vs)(),[s,n]=(0,a.useState)("".concat(t.basePath,"/assets/images/diginext_logo_white.svg"));return(0,a.useEffect)(()=>{n(i?"".concat(t.basePath,"/assets/images/diginext_logo_white.svg"):"".concat(t.basePath,"/assets/images/diginext_logo.svg"))},[i]),(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("div",{className:"mx-auto my-5 w-64 text-center ".concat(e.className),children:(0,o.jsx)("img",{src:s,alt:"Diginext Logo"})}),e.useTagline&&(0,o.jsx)("div",{className:"mb-6",children:"Build faster. Deploy easier. More flexible."})]})};t.Z=s},95400:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return L}});var o=i(11527),l=i(25698),a=i.n(l),r=i(14367),s=i(63530),n=i(69270),c=i(32105),d=i(30001),u=i(50959),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm336 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm192-552a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"fork",theme:"outlined"},m=i(94590),h=function(e,t){return u.createElement(m.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:t,icon:p}))};h.displayName="ForkOutlined";var v=u.forwardRef(h),g=i(48424),f=i(59850),x=i(75616),j=i(50002),Z=i(476),w=i(46457),S=i(80042),b=i(3748),_=i(58699),y=i(32699),I=i(54389),N=i(41507),C=i(54579),z=i(981),E=i(8462);let P=e=>{var t,i,l,a,r;let{className:s=""}=e,{token:{colorBgContainer:n}}=x.Z.useToken(),[d]=j.Z.useForm(),[p,{setQuery:m}]=(0,E.o)(),{sshUrl:h,branch:P}=p,[D,T]=(0,u.useState)(),[k,L]=(0,u.useState)(h);(0,u.useEffect)(()=>L(h),[h]);let{data:{list:B=[]}={},status:H}=(0,C.Zz)({populate:"owner",pagination:{page:1,size:100}}),{data:{list:R}={},status:V}=(0,N.y3)(),[O,F]=(0,I.u4)(),M=(0,z.t1)(k),{data:{list:q}={}}=(0,N.Td)(M.repoSlug||"",{enabled:void 0!==M.repoSlug&&void 0!==(null==D?void 0:D._id)&&!(0,y.isEmpty)(k),filter:{_id:null==D?void 0:D._id}});console.log("curSshURL :>> ",k),console.log("gitData :>> ",M),console.log("gitData.repoSlug :>> ",M.repoSlug);let U=async e=>{console.log("Submit:",e),O({name:e.name,projectID:e.projectID,gitProviderID:e.gitProviderID,sshUrl:k,gitBranch:e.gitBranch}).then(e=>{console.log("res.data :>> ",e.data)})},G=e=>{console.log("Failed:",e)};return(0,o.jsxs)(Z.Z,{bordered:!1,title:(0,o.jsx)(w.Z.Title,{level:4,className:"!mb-0 text-center",children:"success"===F?"Imported successfully!":"loading"===F?"Importing...":"Import GIT repo"}),children:["loading"===F&&(0,o.jsx)("div",{className:"p-4 text-center",children:(0,o.jsx)(c.Z,{})}),"success"!==F&&"loading"!==F?(0,o.jsxs)(j.Z,{className:["h-full","overflow-x-hidden",s].join(" "),layout:"vertical",form:d,onFinish:U,onFinishFailed:G,autoComplete:"off",preserve:!1,children:[(0,o.jsx)(j.Z.Item,{name:"sshUrl",rules:[{required:!0,message:"Please enter the repo SSH url."}],initialValue:k,children:(0,o.jsx)(S.Z,{size:"large",prefix:(0,o.jsx)(v,{}),placeholder:"git@github.com:organization/repo.git",status:"warning",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",onChange(e){console.log("e.currentTarget.value :>> ",e.currentTarget.value),L(e.currentTarget.value)}})}),(0,o.jsx)(j.Z.Item,{name:"gitProviderID",rules:[{required:!0,message:"Please select git provider."}],className:"mb-2",initialValue:null===(t=(R||[])[0])||void 0===t?void 0:t._id,children:(0,o.jsx)(b.Z,{placeholder:"Select git provider for this app",showSearch:!0,filterOption:(e,t)=>(null!==(l=null==t?void 0:t.label)&&void 0!==l?l:"").toLowerCase().includes(e.toLowerCase()),options:null==R?void 0:R.map(e=>({label:e.name,value:e._id})),onSelect:e=>T(null==R?void 0:R.find(t=>t._id===e))})}),(0,o.jsx)(j.Z.Item,{name:"projectID",rules:[{required:!0,message:"Please select project."}],className:"mb-2",initialValue:null===(i=(B||[])[0])||void 0===i?void 0:i._id,children:(0,o.jsx)(b.Z,{placeholder:"Select parent project",showSearch:!0,filterOption:(e,t)=>(null!==(a=null==t?void 0:t.label)&&void 0!==a?a:"").toLowerCase().includes(e.toLowerCase()),options:null==B?void 0:B.map(e=>({label:e.name,value:e._id}))})}),(0,o.jsx)(j.Z.Item,{name:"name",initialValue:M.repoSlug,children:(0,o.jsx)(S.Z,{placeholder:"App's name (optional)",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off"})}),(0,o.jsx)(j.Z.Item,{name:"gitBranch",initialValue:P,children:(0,o.jsx)(b.Z,{placeholder:"Git branch (optional)",showSearch:!0,filterOption:(e,t)=>(null!==(r=null==t?void 0:t.label)&&void 0!==r?r:"").toLowerCase().includes(e.toLowerCase()),options:null==q?void 0:q.map(e=>({label:e.name,value:e.name}))})}),(0,o.jsx)(j.Z.Item,{style:{marginBottom:0},className:"text-center",children:(0,o.jsx)(_.ZP,{type:"primary",htmlType:"submit",icon:(0,o.jsx)(g.Z,{}),size:"large",shape:"round",children:"Import Now"})})]}):(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)(_.ZP,{href:"/project",icon:(0,o.jsx)(f.Z,{}),size:"large",shape:"round",children:"Back to projects & apps"})})]})};var D=i(42598),T=i(77736);let k=()=>(0,o.jsx)(r.Wk,{children:(0,o.jsx)(D.o,{useSidebar:!1,meta:(0,o.jsx)(T.h,{title:"Import to Diginext",description:"Import a git repo to Diginext platform."}),children:(0,o.jsxs)(s.Z,{className:"max-w-md ",children:[(0,o.jsx)(a(),{href:"/",children:(0,o.jsx)(n.Z,{})}),(0,o.jsx)(P,{})]})})});var L=k},981:function(e,t,i){"use strict";function o(e){var t,i,o,l;let a,r,s,n;if(!e)return{};try{a=null===(t=e.split(":")[1])||void 0===t?void 0:t.split("/")[0]}catch(c){throw Error("Repository SSH (".concat(e,") is invalid"))}try{r=null===(i=null===(o=e.split(":")[1])||void 0===o?void 0:o.split("/")[1])||void 0===i?void 0:i.split(".")[0]}catch(d){throw Error("Repository SSH (".concat(e,") is invalid"))}try{s=null===(l=e.split(":")[0])||void 0===l?void 0:l.split("@")[1]}catch(u){throw Error("Repository SSH (".concat(e,") is invalid"))}try{n=null==s?void 0:s.split(".")[0]}catch(p){throw Error("Repository SSH (".concat(e,") is invalid"))}let m="".concat(a,"/").concat(r);return{namespace:a,repoSlug:r,fullSlug:m,gitDomain:s,gitProvider:n}}i.d(t,{t1:function(){return o}}),i(32699)}},function(e){e.O(0,[8201,2967,9001,9656,9774,2888,179],function(){return e(e.s=84033)}),_N_E=e.O()}]);