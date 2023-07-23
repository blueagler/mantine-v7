(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2971],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},73838:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-counter",function(){return n(18710)}])},18710:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(85893),o=n(11151),i=n(34940),s=n(34200),u=n(67294),c=n(77048),a=n(74378),l=n(55899),d=n(34525);let h=`
import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text>Count: {count}</Text>
      <Group justify="center">
        <Button onClick={handlers.increment}>Increment</Button>
        <Button onClick={handlers.decrement}>Decrement</Button>
        <Button onClick={handlers.reset}>Reset</Button>
        <Button onClick={() => handlers.set(5)}>Set 5</Button>
      </Group>
    </>
  );
}
`,v={type:"code",code:h,component:function(){let[e,t]=(0,d.C)(0,{min:0,max:10});return u.createElement(u.Fragment,null,u.createElement(c.x,{size:"md",ta:"center",py:"xs"},"Count: ",e),u.createElement(a.Z,{justify:"center"},u.createElement(l.z,{variant:"outline",size:"xs",onClick:t.increment},"Increment"),u.createElement(l.z,{variant:"outline",size:"xs",onClick:t.decrement},"Decrement"),u.createElement(l.z,{variant:"outline",size:"xs",onClick:t.reset},"Reset"),u.createElement(l.z,{variant:"outline",size:"xs",onClick:()=>t.set(5)},"Set 5")))}},p=(0,i.A)(s.us.useCounter);function m(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useCounter(\n  initialValue?: number,\n  options?: Partial<{\n    min: number;\n    max: number;\n  }>\n): [\n  number,\n  {\n    increment: () => void;\n    decrement: () => void;\n    set: (value: number) => void;\n    reset: () => void;\n  }\n];\n"})})]})}var f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(p,Object.assign({},e,{children:(0,r.jsx)(m,e)}))}},34525:function(e,t,n){"use strict";n.d(t,{C:function(){return h}});var r=n(67294),o=n(22188),i=Object.defineProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,a=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&a(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&a(e,n,t[n]);return e};let d={min:-1/0,max:1/0};function h(e=0,t){let{min:n,max:i}=l(l({},d),t),[s,u]=(0,r.useState)((0,o.u)(e,n,i)),c=()=>u(e=>(0,o.u)(e+1,n,i)),a=()=>u(e=>(0,o.u)(e-1,n,i)),h=e=>u((0,o.u)(e,n,i)),v=()=>u((0,o.u)(e,n,i));return[s,{increment:c,decrement:a,set:h,reset:v}]}}},function(e){e.O(0,[4940,9774,2888,179],function(){return e(e.s=73838)}),_N_E=e.O()}]);