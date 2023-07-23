(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8279],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},82891:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-reduced-motion",function(){return n(26646)}])},26646:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(85893),r=n(11151),a=n(34940),i=n(34200),d=n(67294),s=n(23733),c=n(56763);let l=`
import { Badge } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';

function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}`,u={type:"code",code:l,component:function(){let e=(0,c.J)();return d.createElement(s.C,{color:e?"red":"teal",style:{transitionDuration:e?"0ms":"200ms"},variant:"filled"},e?"You prefer to reduce motion":"You prefer not to reduce motion")},centered:!0},h=(0,a.A)(i.us.useReducedMotion);function p(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-reduced-motion"})," detects if user ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",children:"prefers to reduce motion"}),".\nIt uses ",(0,o.jsx)(t.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," hook under the hood.\nHook relies on ",(0,o.jsx)(t.code,{children:"window.matchMedia()"})," ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia",children:"API"}),"\nand will always return ",(0,o.jsx)(t.code,{children:"false"})," if api is not available (e.g. during server side rendering), unless the initial value is provided in the first argument."]}),"\n",(0,o.jsxs)(t.p,{children:["Use hook to detect if user prefers to reduce motion (",(0,o.jsx)(t.code,{children:"(prefers-reduced-motion: reduce)"})," media query) and set animations duration based on this value."]}),"\n",(0,o.jsx)(n,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function useReducedMotion(\n  initialValue?: boolean,\n  options?: {\n    getInitialValueInEffect: boolean;\n  }\n): boolean;\n"})})]})}var f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,Object.assign({},e,{children:(0,o.jsx)(p,e)}))}},23733:function(e,t,n){"use strict";n.d(t,{C:function(){return w}});var o=n(67294),r={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"},a=n(70656),i=n(35577),d=n(25637),s=n(92259),c=n(95553),l=n(71350),u=n(94975),h=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&y(e,n,t[n]);if(g)for(var n of g(t))m.call(t,n)&&y(e,n,t[n]);return e},k=(e,t)=>p(e,f(t)),M=(e,t)=>{var n={};for(var o in e)v.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&g)for(var o of g(e))0>t.indexOf(o)&&m.call(e,o)&&(n[o]=e[o]);return n};let j={size:"md",radius:"xl",variant:"filled"},x=(0,c.Z)((e,{radius:t,color:n,gradient:o,variant:r,size:a})=>{let i=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:r});return{root:{"--badge-height":(0,l.ap)(a,"badge-height"),"--badge-padding-x":(0,l.ap)(a,"badge-padding-x"),"--badge-fz":(0,l.ap)(a,"badge-fz"),"--badge-radius":(0,l.H5)(t),"--badge-bg":i.background,"--badge-color":i.color,"--badge-bd":i.border,"--badge-dot-color":"dot"===r?(0,u.p)(n,e):void 0}}}),w=(0,a.b)((e,t)=>{let n=(0,i.w)("Badge",j,e),{classNames:a,className:c,style:l,styles:u,unstyled:h,vars:p,radius:f,color:g,gradient:v,leftSection:m,rightSection:y,children:w,variant:O,fullWidth:Z}=n,E=M(n,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),I=(0,d.y)({name:"Badge",props:n,classes:r,className:c,style:l,classNames:a,styles:u,unstyled:h,vars:p,varsResolver:x});return o.createElement(s.x,b(k(b({variant:O,mod:{block:Z}},I("root",{variant:O})),{ref:t}),E),m&&o.createElement("span",k(b({},I("section")),{"data-position":"left"}),m),o.createElement("span",b({},I("label")),w),y&&o.createElement("span",k(b({},I("section")),{"data-position":"right"}),y))});w.classes=r,w.displayName="@mantine/core/Badge"}},function(e){e.O(0,[4940,9774,2888,179],function(){return e(e.s=82891)}),_N_E=e.O()}]);