(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6514],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},42051:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/stack",function(){return n(86727)}])},86727:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var a=n(85893),r=n(11151),l=n(34940),o=n(34200),c=n(67294),i=n(25943),s=n(55899),u=Object.defineProperty,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&v(e,n,t[n]);if(p)for(var n of p(t))h.call(t,n)&&v(e,n,t[n]);return e};let g=`
import { Stack, Button } from '@mantine/core';

function Demo() {
  return (
    <Stack
      h={300}
      bg="var(--mantine-color-blue-light)"
      {{props}}
    >
      <Button variant="default">1</Button>
      <Button variant="default">2</Button>
      <Button variant="default">3</Button>
    </Stack>
  );
}
`,y={type:"configurator",component:function(e){return c.createElement(i.K,f({h:300,bg:"var(--mantine-color-blue-light)"},e),c.createElement(s.z,{variant:"default"},"1"),c.createElement(s.z,{variant:"default"},"2"),c.createElement(s.z,{variant:"default"},"3"))},code:g,controls:[{prop:"align",type:"select",data:[{label:"stretch",value:"stretch"},{label:"center",value:"center"},{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"}],initialValue:"stretch",libraryValue:"stretch"},{prop:"justify",type:"select",data:[{label:"center",value:"center"},{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"space-between",value:"space-between"},{label:"space-around",value:"space-around"}],initialValue:"center",libraryValue:"center"},{prop:"gap",type:"size",initialValue:"md",libraryValue:"md"}]},k=(0,l.A)(o.us.Stack);function b(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components),{Demo:n,FlexboxGapSupport:l}=t;return n||m("Demo",!0),l||m("FlexboxGapSupport",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Stack"})," is a vertical flex container. If you need a horizontal flex container, use ",(0,a.jsx)(t.a,{href:"/core/group",children:"Group"}),"\ncomponent instead. If you need to have full control over flex container properties, use ",(0,a.jsx)(t.a,{href:"/core/flex",children:"Flex"})," component."]}),"\n",(0,a.jsx)(n,{data:y}),"\n",(0,a.jsx)(l,{component:"Stack"})]})}var M=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(k,Object.assign({},e,{children:(0,a.jsx)(b,e)}))};function m(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[4940,9774,2888,179],function(){return e(e.s=42051)}),_N_E=e.O()}]);