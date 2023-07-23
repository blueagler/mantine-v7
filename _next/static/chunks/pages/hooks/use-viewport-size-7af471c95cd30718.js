(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6177],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},73161:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-viewport-size",function(){return n(22094)}])},22094:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var i=n(85893),r=n(11151),s=n(34940),h=n(34200),o=n(67294),c=n(99440);let d={passive:!0};var a=n(77048);let u=`
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`,l={type:"code",code:u,component:function(){let{height:e,width:t}=function(){let[e,t]=(0,o.useState)({width:0,height:0}),n=(0,o.useCallback)(()=>{t({width:window.innerWidth||0,height:window.innerHeight||0})},[]);return(0,c.s)("resize",n,d),(0,c.s)("orientationchange",n,d),(0,o.useEffect)(n,[]),e}();return o.createElement(a.x,{ta:"center"},"Width: ",t,", height: ",e)}},p=(0,s.A)(h.us.useViewportSize);function v(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"use-viewport-size"})," returns current viewport's ",(0,i.jsx)(t.code,{children:"width"})," and ",(0,i.jsx)(t.code,{children:"height"}),", it subscribes to ",(0,i.jsx)(t.code,{children:"resize"})," and ",(0,i.jsx)(t.code,{children:"orientationchange"})," events,\nduring ssr hook will return ",(0,i.jsx)(t.code,{children:"{ width: 0, height: 0 }"}),":"]}),"\n",(0,i.jsx)(n,{data:l}),"\n",(0,i.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"function useViewportSize(): {\n  height: number;\n  width: number;\n};\n"})})]})}var g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(p,Object.assign({},e,{children:(0,i.jsx)(v,e)}))}}},function(e){e.O(0,[4940,9774,2888,179],function(){return e(e.s=73161)}),_N_E=e.O()}]);