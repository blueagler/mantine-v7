(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{33507:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},81858:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/affix",function(){return n(29058)}])},29058:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var o=n(85893),r=n(11151),i=n(34940),s=n(34200),l=n(67294),a=(0,n(54764).Z)("arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]]),c=n(74508),f=n(77048),d=n(93256),u=n(45493),h=n(55899),p=n(46393);let v=`
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
`,y={type:"code",code:v,component:function(){let[t,e]=(0,c.b)();return l.createElement(l.Fragment,null,l.createElement(f.x,{ta:"center"},"Affix is located at the bottom of the screen, scroll to see it"),l.createElement(d.D,{position:{bottom:20,right:20}},l.createElement(u.u,{transition:"slide-up",mounted:t.y>0},t=>l.createElement(h.z,{leftSection:l.createElement(a,{style:{width:(0,p.h)(16),height:(0,p.h)(16)}}),style:t,onClick:()=>e({y:0})},"Scroll to top"))))}},m=(0,i.A)(s.us.Affix);function g(t){let e=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),t.components),{Demo:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"Affix"})," renders a div element with a fixed position inside the ",(0,o.jsx)(e.a,{href:"/core/portal",children:"Portal"})," component.\nUse it to display elements fixed at any position on the screen, for example, scroll to top button:"]}),"\n",(0,o.jsx)(n,{data:y})]})}var x=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(m,Object.assign({},t,{children:(0,o.jsx)(g,t)}))}},93256:function(t,e,n){"use strict";n.d(e,{D:function(){return E}});var o=n(67294),r={root:"m-7f854edf"},i=n(58549),s=n(75144),l=n(35577),a=n(25637),c=n(92259),f=n(13279),d=n(95553),u=n(46393),h=Object.defineProperty,p=Object.defineProperties,v=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,x=(t,e,n)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,w=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&x(t,n,e[n]);if(y)for(var n of y(e))g.call(e,n)&&x(t,n,e[n]);return t},k=(t,e)=>p(t,v(e)),b=(t,e)=>{var n={};for(var o in t)m.call(t,o)&&0>e.indexOf(o)&&(n[o]=t[o]);if(null!=t&&y)for(var o of y(t))0>e.indexOf(o)&&g.call(t,o)&&(n[o]=t[o]);return n};let M={position:{bottom:0,right:0},zIndex:(0,f.w)("modal"),withinPortal:!0},j=(0,d.Z)((t,{zIndex:e,position:n})=>({root:{"--affix-z-index":null==e?void 0:e.toString(),"--affix-top":(0,u.h)(null==n?void 0:n.top),"--affix-left":(0,u.h)(null==n?void 0:n.left),"--affix-bottom":(0,u.h)(null==n?void 0:n.bottom),"--affix-right":(0,u.h)(null==n?void 0:n.right)}})),E=(0,s.d)((t,e)=>{let n=(0,l.w)("Affix",M,t),{classNames:s,className:f,style:d,styles:u,unstyled:h,vars:p,portalProps:v,zIndex:y,withinPortal:m}=n,g=b(n,["classNames","className","style","styles","unstyled","vars","portalProps","zIndex","withinPortal"]),x=(0,a.y)({name:"Affix",classes:r,props:n,className:f,style:d,classNames:s,styles:u,unstyled:h,vars:p,varsResolver:j});return o.createElement(i.q,k(w({},v),{withinPortal:m}),o.createElement(c.x,w(w({ref:e},x("root")),g)))});E.classes=r,E.displayName="@mantine/core/Affix"},74508:function(t,e,n){"use strict";n.d(e,{b:function(){return l}});var o=n(67294),r=n(99440);function i(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function s({x:t,y:e}){if("undefined"!=typeof window){let n={behavior:"smooth"};"number"==typeof t&&(n.left=t),"number"==typeof e&&(n.top=e),window.scrollTo(n)}}function l(){let[t,e]=(0,o.useState)({x:0,y:0});return(0,r.s)("scroll",()=>e(i())),(0,r.s)("resize",()=>e(i())),(0,o.useEffect)(()=>{e(i())},[]),[t,s]}}},function(t){t.O(0,[4940,9774,2888,179],function(){return t(t.s=81858)}),_N_E=t.O()}]);