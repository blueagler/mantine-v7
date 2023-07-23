(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2610],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},21941:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-debounced-value",function(){return n(34493)}])},34493:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(85893),o=n(11151),c=n(34940),u=n(34200),r=n(67294),l=n(54819),s=n(92259),d=n(31577),i=n(77048);let m=`
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`,h={type:"code",component:function(){let[e,t]=(0,r.useState)(""),[n]=(0,l.c)(e,200);return r.createElement(s.x,{maw:400,mx:"auto"},r.createElement(d.o,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,onChange:e=>t(e.currentTarget.value)}),r.createElement(i.x,{mt:"sm"},r.createElement(i.x,{component:"span",color:"dimmed",size:"sm"},"Value:")," ",e.trim()||"[empty string]"),r.createElement(i.x,null,r.createElement(i.x,{component:"span",color:"dimmed",size:"sm"},"Debounced value:")," ",n.trim()||"[empty string]"))},code:m},p=`
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200, { leading: true });

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`,v={type:"code",component:function(){let[e,t]=(0,r.useState)(""),[n]=(0,l.c)(e,200,{leading:!0});return r.createElement(s.x,{maw:400,mx:"auto"},r.createElement(d.o,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,onChange:e=>t(e.currentTarget.value)}),r.createElement(i.x,{mt:"sm"},r.createElement(i.x,{component:"span",color:"dimmed",size:"sm"},"Value:")," ",e.trim()||"[empty string]"),r.createElement(i.x,null,r.createElement(i.x,{component:"span",color:"dimmed",size:"sm"},"Debounced value:")," ",n.trim()||"[empty string]"))},code:p};var f=n(74378),x=n(55899);let g=`
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text, Button } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced, cancel] = useDebouncedValue(value, 1000);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Button onClick={cancel} size="lg">
        Cancel
      </Button>

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`,b={type:"code",component:function(){let[e,t]=(0,r.useState)(""),[n,a]=(0,l.c)(e,1e3);return r.createElement(s.x,{maw:400,mx:"auto"},r.createElement(f.Z,{align:"flex-end"},r.createElement(d.o,{label:"Enter value to see debounce effect",placeholder:"Enter value to see debounce effect",value:e,style:{flex:1},onChange:e=>t(e.currentTarget.value)}),r.createElement(x.z,{onClick:a},"Cancel")),r.createElement(i.x,{mt:"sm"},r.createElement(i.x,{component:"span",color:"dimmed",size:"sm"},"Value:")," ",e.trim()||"[empty string]"),r.createElement(i.x,null,r.createElement(i.x,{component:"span",color:"dimmed",size:"sm"},"Debounced value:")," ",n.trim()||"[empty string]"))},code:g},y=(0,c.A)(u.us.useDebouncedValue);function k(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li",pre:"pre"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"use-debounced-value"})," hook debounces value changes.\nThis can be useful in case you want to perform a heavy operation based on react state,\nfor example, send search request. Unlike ",(0,a.jsx)(t.a,{href:"/hooks/use-debounced-state/",children:"use-debounced-state"})," it\nis designed to work with controlled components."]}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(t.h2,{id:"differences-from-use-debounced-state",children:"Differences from use-debounced-state"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You have direct access to the non-debounced value."}),"\n",(0,a.jsxs)(t.li,{children:["It is used for controlled inputs (",(0,a.jsx)(t.code,{children:"value"})," prop instead of ",(0,a.jsx)(t.code,{children:"defaultValue"}),"), e.g. renders on every state change like a character typed in an input."]}),"\n",(0,a.jsxs)(t.li,{children:["It works with props or other state providers, and it does not force use of ",(0,a.jsx)(t.code,{children:"useState"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"leading-update",children:"Leading update"}),"\n",(0,a.jsxs)(t.p,{children:["You can immediately update value with first call with ",(0,a.jsx)(t.code,{children:"{ leading: true }"})," options:"]}),"\n",(0,a.jsx)(n,{data:v}),"\n",(0,a.jsx)(t.h2,{id:"cancel-update",children:"Cancel update"}),"\n",(0,a.jsxs)(t.p,{children:["Hook provides ",(0,a.jsx)(t.code,{children:"cancel"})," callback, you can use it to cancel update.\nUpdate cancels automatically on component unmount."]}),"\n",(0,a.jsx)(t.p,{children:"In this example, type in some text and click the cancel button\nwithin a second to cancel debounced value change:"}),"\n",(0,a.jsx)(n,{data:b}),"\n",(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"function useDebouncedValue<T = any>(\n  value: T,\n  wait: number,\n  options?: {\n    leading: boolean;\n  }\n): readonly [T, () => void];\n"})})]})}var E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(y,Object.assign({},e,{children:(0,a.jsx)(k,e)}))}},54819:function(e,t,n){"use strict";n.d(t,{c:function(){return o}});var a=n(67294);function o(e,t,n={leading:!1}){let[o,c]=(0,a.useState)(e),u=(0,a.useRef)(!1),r=(0,a.useRef)(null),l=(0,a.useRef)(!1),s=()=>window.clearTimeout(r.current);return(0,a.useEffect)(()=>{u.current&&(!l.current&&n.leading?(l.current=!0,c(e)):(s(),r.current=window.setTimeout(()=>{l.current=!1,c(e)},t)))},[e,n.leading,t]),(0,a.useEffect)(()=>(u.current=!0,s),[]),[o,s]}}},function(e){e.O(0,[4940,9774,2888,179],function(){return e(e.s=21941)}),_N_E=e.O()}]);