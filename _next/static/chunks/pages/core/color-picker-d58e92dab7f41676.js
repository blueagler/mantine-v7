(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5686],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},79153:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},59140:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-picker",function(){return r(38181)}])},38181:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return er}});var o=r(85893),n=r(11151),a=r(34940),c=r(25263),l=r(67294),i=r(25943),s=r(46112),d=r(77048);let u=`
import { useState } from 'react';
import { ColorPicker, Text, Stack } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Stack align="center">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Stack>
  );
}
`,h={type:"code",component:function(){let[e,t]=(0,l.useState)("rgba(47, 119, 150, 0.7)");return l.createElement(i.K,{align:"center"},l.createElement(s.z,{format:"rgba",value:e,onChange:t}),l.createElement(d.x,null,e))},code:u};var p=Object.defineProperty,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&y(e,r,t[r]);if(f)for(var r of f(t))b.call(t,r)&&y(e,r,t[r]);return e};let x=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,v={type:"configurator",component:function(e){let[t,r]=(0,l.useState)("#C5D899");return l.createElement(i.K,{align:"center"},l.createElement(s.z,g({value:t,onChange:r},e)),l.createElement(d.x,null,t))},code:x,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var j=r(5037);let k=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(j.t.colors).map(e=>`'${j.t.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`,w={type:"code",component:function(){return l.createElement(i.K,{align:"center"},l.createElement(s.z,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(j.t.colors).map(e=>j.t.colors[e][6])}))},code:k};var P=Object.defineProperty,E=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,S=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&O(e,r,t[r]);if(E)for(var r of E(t))M.call(t,r)&&O(e,r,t[r]);return e};let z=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(j.t.colors).map(e=>`'${j.t.colors[e][6]}'`).join(", ")}]} />
  );
}
`,T={type:"configurator",component:function(e){return l.createElement(s.z,S({mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(j.t.colors).map(e=>j.t.colors[e][6])},e))},code:z,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]};var L=r(94873);let Z=`
import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text, Box } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <Box maw={200} mx="auto">
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red.slice(0, 7),
          ...DEFAULT_THEME.colors.green.slice(0, 7),
          ...DEFAULT_THEME.colors.blue.slice(0, 7),
        ]}
      />
      <Text ta="center" mt={5}>
        {value}
      </Text>
    </Box>
  );
}
`,_={type:"code",component:function(){let[e,t]=(0,l.useState)("#fff");return l.createElement(L.x,{maw:200,mx:"auto"},l.createElement(s.z,{format:"hex",value:e,onChange:t,withPicker:!1,fullWidth:!0,swatches:[...j.t.colors.red.slice(0,7),...j.t.colors.green.slice(0,7),...j.t.colors.blue.slice(0,7)]}),l.createElement(d.x,{ta:"center",mt:5},e))},code:Z};var D=Object.defineProperty,A=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))I.call(t,r)&&V(e,r,t[r]);if(A)for(var r of A(t))H.call(t,r)&&V(e,r,t[r]);return e};let B=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,N={type:"configurator",component:function(e){return l.createElement(s.z,W({mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(j.t.colors).map(e=>j.t.colors[e][6])},e))},code:B,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},F=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`,R={type:"code",component:function(){return l.createElement(s.z,{fullWidth:!0,size:"lg",format:"rgba"})},code:F};var U=r(33512),X=Object.defineProperty,$=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,Y=(e,t,r)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,q=(e,t)=>{for(var r in t||(t={}))K.call(t,r)&&Y(e,r,t[r]);if($)for(var r of $(t))G.call(t,r)&&Y(e,r,t[r]);return e};let J=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
`,Q={type:"styles-api",data:U.L,component:function(e){return l.createElement(s.z,q({size:"lg",format:"rgba",swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5"]},e))},centered:!0,code:J},ee=(0,a.A)(c.us.ColorPicker);function et(e){let t=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,n.ah)(),e.components),{Demo:r,StylesApiSelectors:a}=t;return r||eo("Demo",!0),a||eo("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(r,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"color-format",children:"Color format"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ColorPicker"})," supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:"]}),"\n",(0,o.jsx)(r,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,o.jsxs)(t.p,{children:["You can add predefined color swatches with ",(0,o.jsx)(t.code,{children:"swatches"})," prop:"]}),"\n",(0,o.jsx)(r,{data:w}),"\n",(0,o.jsxs)(t.p,{children:["By default, ",(0,o.jsx)(t.code,{children:"ColorPicker"})," will display 7 swatches per row, you can configure it with ",(0,o.jsx)(t.code,{children:"swatchesPerRow"})," prop:"]}),"\n",(0,o.jsx)(r,{data:T}),"\n",(0,o.jsxs)(t.p,{children:["To display swatches without picker set ",(0,o.jsx)(t.code,{children:"withPicker={false}"})," and ",(0,o.jsx)(t.code,{children:"fullWidth"})," props:"]}),"\n",(0,o.jsx)(r,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ColorPicker"})," has 5 predefined sizes: ",(0,o.jsx)(t.code,{children:"xs"}),", ",(0,o.jsx)(t.code,{children:"sm"}),", ",(0,o.jsx)(t.code,{children:"md"}),", ",(0,o.jsx)(t.code,{children:"lg"})," and ",(0,o.jsx)(t.code,{children:"xl"}),":"]}),"\n",(0,o.jsx)(r,{data:N}),"\n",(0,o.jsx)(t.h2,{id:"fullwidth",children:"fullWidth"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"fullWidth"})," prop to stretch component to 100% of parent width. In this case the picker will not\nhave fixed width, but you can still use ",(0,o.jsx)(t.code,{children:"size"})," prop to control sizes of sliders."]}),"\n",(0,o.jsx)(r,{data:R}),"\n",(0,o.jsx)(a,{component:"ColorPicker"}),"\n",(0,o.jsx)(r,{data:Q}),"\n",(0,o.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsx)(t.p,{children:"ColorPicker component is accessible by default:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Saturation, hue and alpha sliders are focusable"}),"\n",(0,o.jsx)(t.li,{children:"When moused is used to interact with the slider, focus is moved to the slider"}),"\n",(0,o.jsx)(t.li,{children:"All values can be changed with arrows"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["To make component accessible for screen readers, set ",(0,o.jsx)(t.code,{children:"saturationLabel"}),", ",(0,o.jsx)(t.code,{children:"hueLabel"})," and ",(0,o.jsx)(t.code,{children:"alphaLabel"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { ColorPicker } from \'@mantine/core\';\n\nfunction Demo() {\n  return <ColorPicker saturationLabel="Saturation" hueLabel="Hue" alphaLabel="Alpha" />;\n}\n'})})]})}var er=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(ee,Object.assign({},e,{children:(0,o.jsx)(et,e)}))};function eo(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[8969,9341,4831,9774,2888,179],function(){return e(e.s=59140)}),_N_E=e.O()}]);