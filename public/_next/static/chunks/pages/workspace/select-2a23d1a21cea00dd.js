(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1688],{940:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace/select",function(){return s(67286)}])},13861:function(e,a,s){"use strict";s.d(a,{Hg:function(){return r},av:function(){return i},hv:function(){return n}});var t=s(19005);let i=e=>(0,t.FF)(["workspaces"],"/api/v1/workspace",e),n=e=>(0,t.yt)(["workspaces"],"/api/v1/workspace",e),r=e=>(0,t.FF)(["workspaces","invite"],"/api/v1/workspace/invite",e)},61160:function(e,a,s){"use strict";var t=s(11527),i=s(47164),n=s(50959),r=s(89335);let c=e=>{let a=(0,i.useRouter)(),{isDarkMode:s}=(0,r.vs)(),[c,l]=(0,n.useState)("".concat(a.basePath,"/assets/images/diginext_logo_white.svg"));return(0,n.useEffect)(()=>{l(s?"".concat(a.basePath,"/assets/images/diginext_logo_white.svg"):"".concat(a.basePath,"/assets/images/diginext_logo.svg"))},[s]),(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"mx-auto my-5 w-64 text-center ".concat(e.className),children:(0,t.jsx)("img",{src:c,alt:"Diginext Logo"})}),e.useTagline&&(0,t.jsx)("div",{className:"mb-6",children:"Build faster. Deploy easier. More flexible."})]})};a.Z=c},67286:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return P}});var t=s(11527),i=s(32105),n=s(30001),r=s(50959),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"logout",theme:"outlined"},l=s(94590),o=function(e,a){return r.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:a,icon:c}))};o.displayName="LogoutOutlined";var u=r.forwardRef(o),d=s(233),h=s(46457),m=s(50002),v=s(3748),x=s(97393),p=s(80042),g=s(58699),w=s(47164),j=s(2154),f=s(22820),Z=s(13861),_=s(70804),k=s(61160),N=s(27481),y=s(24810),b=s(13557);let{Title:C}=h.Z,E=()=>{var e,a;let s=(0,w.useRouter)(),n=(0,d.NL)(),[c,l]=(0,r.useState)(""),[o,h]=(0,r.useState)(""),E=e=>l(e.currentTarget.value),[P,{refetch:S,status:F}]=(0,j.aC)(),[L,I]=(0,Z.av)(),[T]=(0,f.Hc)(),{workspaces:R=[]}=P||{},q=async e=>{let a=await T({userId:P._id,workspace:e});if(null==a?void 0:a.status){await n.invalidateQueries({queryKey:["auth"]}),await S();let t=new URL(window.location.href),i=t.searchParams.get("redirect_url")||window.location.origin;s.push(i)}},z=async e=>{let a={};a.name=e.name,a.public=void 0!==e.public&&e.public;let t=await L(a);if(null==t?void 0:t.status)null==t||t.data,await n.invalidateQueries({queryKey:["auth"]}),await S(),s.push((0,b.r8)()?"".concat(b.De.NEXT_PUBLIC_BASE_URL):"/");else{var i;h((null==t?void 0:null===(i=t.messages)||void 0===i?void 0:i.join("."))||"Internal Server Error")}},B=e=>{console.log("Failed:",e)},H=e=>{console.log("workspace > id :>> ",e),q(e)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(N.o,{useSidebar:!1,meta:(0,t.jsx)(y.h,{title:"Select/Create a Workspace",description:"Select or create your workspace."}),children:["loading"===F&&(0,t.jsxs)(_.Z,{className:"text-center",children:[(0,t.jsx)(k.Z,{}),(0,t.jsx)(i.Z,{})]}),"success"===F&&P&&(0,t.jsxs)(_.Z,{className:"text-center",children:[(0,t.jsx)(k.Z,{}),R.length>0&&(0,t.jsxs)("div",{children:[(0,t.jsx)(C,{level:3,children:"Select a workspace:"}),(0,t.jsx)("p",{children:"Choose a workspace which you want to interact with:"}),(0,t.jsx)(m.Z,{name:"select",children:(0,t.jsx)(m.Z.Item,{name:"workspace",children:(0,t.jsx)(v.Z,{size:"large",value:"".concat(null===(e=R[0])||void 0===e?void 0:e.name," (").concat(null===(a=R[0])||void 0===a?void 0:a.slug,")"),onChange:H,options:null==R?void 0:R.map(e=>({label:"".concat(e.name," (").concat(e.slug,")"),value:e._id}))})})})]}),"loading"===I&&(0,t.jsx)(i.Z,{}),"loading"!==I&&(0,t.jsxs)("div",{children:[(0,t.jsx)(C,{level:3,children:"Create a new workspace:"}),(0,t.jsxs)(m.Z,{name:"create",onFinish:z,onFinishFailed:B,autoComplete:"off",children:[(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(m.Z.Item,{name:"public",valuePropName:"checked",children:(0,t.jsx)(x.Z,{children:"Public"})}),(0,t.jsx)(m.Z.Item,{name:"name",style:{flex:"auto"},rules:[{required:!0,message:"Workspace name is required."}],children:(0,t.jsx)(p.Z,{className:"text-center text-lg",placeholder:"Workspace name",onChange:E})}),(0,t.jsx)(m.Z.Item,{children:(0,t.jsx)(g.ZP,{type:"primary",htmlType:"submit",disabled:""===c,className:"h-[38px]",children:"GO!"})})]}),(0,t.jsx)(m.Z.ErrorList,{className:"text-red-400",errors:[o]})]}),(0,t.jsx)(g.ZP,{href:"/logout",shape:"round",size:"large",type:"primary",icon:(0,t.jsx)(u,{}),children:"Sign out"})]})]})]})})};var P=E}},function(e){e.O(0,[8201,2967,95,5932,9774,2888,179],function(){return e(e.s=940)}),_N_E=e.O()}]);