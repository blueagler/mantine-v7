(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},51739:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/space",function(){return n(45864)}])},45864:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r=n(85893),a=n(11151),o=n(34940),i=n(34200),c=n(67294),l=n(77048),s=n(75144),p=n(35577),d=n(92259),u=Object.defineProperty,h=Object.defineProperties,v=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&g(e,n,t[n]);if(f)for(var n of f(t))m.call(t,n)&&g(e,n,t[n]);return e},b=(e,t)=>h(e,v(t)),w=(e,t)=>{var n={};for(var r in e)y.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))0>t.indexOf(r)&&m.call(e,r)&&(n[r]=e[r]);return n};let j={},k=(0,s.d)((e,t)=>{let n=(0,p.w)("Space",j,e),{w:r,h:a,miw:o,mih:i}=n,l=w(n,["w","h","miw","mih"]);return c.createElement(d.x,b(x({ref:t},l),{w:r,miw:null!=o?o:r,h:a,mih:null!=i?i:a}))});k.displayName="@mantine/core/Space";var M=Object.defineProperty,O=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&T(e,n,t[n]);if(O)for(var n of O(t))E.call(t,n)&&T(e,n,t[n]);return e};let P=`
import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </>
  );
}
`,Z={type:"configurator",component:function(e){return c.createElement(c.Fragment,null,c.createElement(l.x,null,"First line"),c.createElement(k,_({},e)),c.createElement(l.x,null,"Second line"))},code:P,controls:[{prop:"h",type:"size",initialValue:"md",libraryValue:"__"}]};var I=Object.defineProperty,F=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,D=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))N.call(t,n)&&D(e,n,t[n]);if(F)for(var n of F(t))z.call(t,n)&&D(e,n,t[n]);return e};let V=`
import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First line</Text>
      <Space{{props}}
      <Text>Second line</Text>
    </div>
  );
}
`,A={type:"configurator",component:function(e){return c.createElement("div",{style:{display:"flex"}},c.createElement(l.x,null,"First part"),c.createElement(k,L({},e)),c.createElement(l.x,null,"Second part"))},code:V,controls:[{prop:"w",type:"size",initialValue:"md",libraryValue:"__"}]},C=(0,o.A)(i.us.Space);function U(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,a.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"Space"})," component to add horizontal or vertical spacing between elements:"]}),"\n",(0,r.jsx)(n,{data:Z}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n,{data:A}),"\n",(0,r.jsx)(t.h2,{id:"where-to-use",children:"Where to use"}),"\n",(0,r.jsxs)(t.p,{children:["In most cases, you would want to use margin props instead of ",(0,r.jsx)(t.code,{children:"Space"})," when working with Mantine components:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<Text>First line</Text>\n// <Space h="md" /> is not required as the same can be achieved with margin\n<Text mt="md">Second line</Text>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["But when you work with regular HTML elements you do not have access to ",(0,r.jsx)(t.code,{children:"theme.spacing"})," and you may want to use\n",(0,r.jsx)(t.code,{children:"Space"})," component to skip direct theme subscription:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<div>First line</div>\n<Space h="md" />\n// Margin props are not available on div, use Space to add spacing from theme\n<div>Second line</div>\n'})})]})}var X=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(C,Object.assign({},e,{children:(0,r.jsx)(U,e)}))}}},function(e){e.O(0,[4940,9774,2888,179],function(){return e(e.s=51739)}),_N_E=e.O()}]);