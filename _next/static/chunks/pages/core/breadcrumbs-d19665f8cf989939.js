(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1728],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},79153:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},79539:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/breadcrumbs",function(){return r(61710)}])},61710:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(85893),a=r(11151),s=r(34940),c=r(25263),o=r(67294),i=r(46342),l=r(26564);let d=`
import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="\u2192" mt="xs">{items}</Breadcrumbs>
    </>
  );
}
`,u=[{title:"Mantine",href:"https://mantine.dev"},{title:"Mantine hooks",href:"#"},{title:"use-id",href:"#"}].map((e,t)=>o.createElement(i.e,{href:e.href,key:t},e.title)),h={type:"code",code:d,component:function(){return o.createElement(o.Fragment,null,o.createElement(l.O,null,u),o.createElement(l.O,{separator:"→",mt:"xs",classNames:{separator:"mantine-rotate-rtl"}},u))}},p=(0,s.A)(c.us.Breadcrumbs);function m(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,a.ah)(),e.components),{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Breadcrumbs"})," component accepts any number of React nodes as children\nand adds a given separator (defaults to ",(0,n.jsx)(t.code,{children:"/"}),") between them:"]}),"\n",(0,n.jsx)(r,{data:h})]})}var f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(p,Object.assign({},e,{children:(0,n.jsx)(m,e)}))}},26564:function(e,t,r){"use strict";r.d(t,{O:function(){return O}});var n=r(67294),a={root:"mantine-DpaSRWv",breadcrumb:"mantine-Xf5Xl8f",separator:"mantine-ixC9ZM7"},s=r(72521),c=r(75144),o=r(35577),i=r(89123),l=r(94873),d=r(95553),u=r(71350),h=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&g(e,r,t[r]);if(f)for(var r of f(t))y.call(t,r)&&g(e,r,t[r]);return e},b=(e,t)=>p(e,m(t)),M=(e,t)=>{var r={};for(var n in e)v.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))0>t.indexOf(n)&&y.call(e,n)&&(r[n]=e[n]);return r};let w={separator:"/",separatorMargin:"xs"},x=(0,d.Z)((e,{separatorMargin:t})=>({root:{"--bc-separator-margin":(0,u.bG)(t)}})),O=(0,c.d)((e,t)=>{let r=(0,o.w)("Breadcrumbs",w,e),{classNames:c,className:d,style:u,styles:h,unstyled:p,vars:m,children:f,separator:v,separatorMargin:y}=r,g=M(r,["classNames","className","style","styles","unstyled","vars","children","separator","separatorMargin"]),O=(0,i.y)({name:"Breadcrumbs",classes:a,props:r,className:d,style:u,classNames:c,styles:h,unstyled:p,vars:m,varsResolver:x}),Z=n.Children.toArray(f).reduce((e,t,r,a)=>{var c;let o=(0,s.k)(t)?n.cloneElement(t,b(k({},O("breadcrumb",{className:null==(c=t.props)?void 0:c.className})),{key:r})):n.createElement("div",b(k({},O("breadcrumb")),{key:r}),t);return e.push(o),r!==a.length-1&&e.push(n.createElement(l.x,b(k({},O("separator")),{key:`separator-${r}`}),v)),e},[]);return n.createElement(l.x,k(k({ref:t},O("root")),g),Z)});O.classes=a,O.displayName="@mantine/core/Breadcrumbs"}},function(e){e.O(0,[8969,9341,4831,9774,2888,179],function(){return e(e.s=79539)}),_N_E=e.O()}]);