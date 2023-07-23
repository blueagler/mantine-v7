(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},77990:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/portal",function(){return t(6883)}])},6883:function(e,n,t){"use strict";t.r(n);var r=t(85893),o=t(11151),a=t(34940),s=t(34200);let d=(0,a.A)(s.us.Portal);function l(e){let n=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Portal is a wrapper component for ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/portals.html",children:"ReactDOM.createPortal"})," API.\nRender any component or element at the end of ",(0,r.jsx)(n.code,{children:"document.body"})," or at a given element. ",(0,r.jsx)(n.a,{href:"/core/modal/",children:"Modal"})," and ",(0,r.jsx)(n.a,{href:"/core/drawer/",children:"Drawer"})," components are wrapped in Portal by default."]}),"\n",(0,r.jsxs)(n.p,{children:["Use Portal to render a component or an element at a different place (defaults to the end of ",(0,r.jsx)(n.code,{children:"document.body"}),").\nPortal is useful when you want to prevent parent styles from interfering with children,\nusually all these styles are related to ",(0,r.jsx)(n.code,{children:"position"})," and ",(0,r.jsx)(n.code,{children:"z-index"})," properties\nand portals are used for components with fixed position, for example, modals."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Portal } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n\n  return (\n    <main style={{ position: 'relative', zIndex: 1 }}>\n      {opened && (\n        <Portal>\n          <div>Your modal content</div>\n        </Portal>\n      )}\n\n      <button onClick={() => setOpened(true)} type=\"button\">\n        Open modal\n      </button>\n    </main>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above, the div element is rendered outside of parent main (before closing body tag),\nbut still receives ",(0,r.jsx)(n.code,{children:"opened"})," and ",(0,r.jsx)(n.code,{children:"onClose"})," props. The element will not be affected by parent z-index."]}),"\n",(0,r.jsx)(n.h2,{id:"specify-target-dom-node",children:"Specify target dom node"}),"\n",(0,r.jsxs)(n.p,{children:["You can specify dom node where portal will be rendered by passing ",(0,r.jsx)(n.code,{children:"target"})," prop:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Portal } from '@mantine/core';\n\nconst container = document.createElement('div');\ndocument.body.appendChild(container);\n\nfunction Demo() {\n  return <Portal target={container}>My portal</Portal>;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can specify selector to render portal in existing element:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Portal } from '@mantine/core';\n\nfunction Demo() {\n  return <Portal target=\"#portal-container\">My portal</Portal>;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you don't specify the target element, new one will be created and appended to the ",(0,r.jsx)(n.code,{children:"document.body"})," for each Portal component."]}),"\n",(0,r.jsx)(n.h2,{id:"server-side-rendering",children:"Server side rendering"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"createPortal"})," is not supported during server side rendering.\nAll components inside Portal are rendered only after the application was mounted to the dom."]}),"\n",(0,r.jsx)(n.h2,{id:"optionalportal-component",children:"OptionalPortal component"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"OptionalPortal"})," component lets you configure whether children should be rendered in ",(0,r.jsx)(n.code,{children:"Portal"}),".\nIt accepts the same props as the ",(0,r.jsx)(n.code,{children:"Portal"})," component:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { OptionalPortal } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <OptionalPortal withinPortal>This text is rendered in Portal</OptionalPortal>\n      <OptionalPortal withinPortal={false}>This text is rendered as regular child</OptionalPortal>\n    </>\n  );\n}\n"})})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,Object.assign({},e,{children:(0,r.jsx)(l,e)}))}}},function(e){e.O(0,[4940,9774,2888,179],function(){return e(e.s=77990)}),_N_E=e.O()}]);