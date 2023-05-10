(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6797],{12574:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/css-modules",function(){return t(75810)}])},75810:function(e,n,t){"use strict";t.r(n);var o=t(85893),s=t(11151),l=t(34940),a=t(25263),i=t(35310),r=t(55847);let c=(0,l.A)(a.us.CSSModules);function d(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",a:"a",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong"},(0,s.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"css-modules",children:"CSS modules"}),"\n",(0,o.jsx)(n.p,{children:"All Mantine components use CSS modules for styling.\nIt is recommended to use CSS modules in your project as well, but it is not required –\nMantine components are fully compatible with any third-party styling solution and native CSS."}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["CSS modules are supported out of the box by all major frameworks and build tools. Usually all you need\nto do is to create ",(0,o.jsx)(n.code,{children:"*.module.css"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"/* Button.module.css */\n\n.button {\n  color: red;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"And then import it in your component:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import classes from './Button.module.css';\n\nfunction Demo() {\n  return (\n    <button className={classes.button} type=\"button\">\n      Button\n    </button>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"how-css-modules-work",children:"How CSS modules work"}),"\n",(0,o.jsxs)(n.p,{children:["When you create a ",(0,o.jsx)(n.code,{children:"*.module.css"})," file, your build tool will generate a unique class name for each class in your file.\nFor example, when you import the following file in your ",(0,o.jsx)(n.code,{children:".js"}),"/",(0,o.jsx)(n.code,{children:".ts"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"/* Button.module.css */\n\n.button {\n  color: red;\n}\n\n.text {\n  color: blue;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"You will get an object with unique class names:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import classes from './Button.module.css';\n\nconsole.log(classes);\n// -> Object of scoped class names: key is a class name, value is a generated unique class name\n// { button: 'button-Xh3s7ER', text: 'text-js65s3Se' }\n// Note that generated class names may vary depending on your build tool\n"})}),"\n",(0,o.jsx)(n.p,{children:"With CSS modules you do not need to worry about class name collisions, you can use any class name you want."}),"\n",(0,o.jsx)(n.h2,{id:"mantine-components-styles",children:"Mantine components styles"}),"\n",(0,o.jsxs)(n.p,{children:["All Mantine components are built with CSS modules, but all styles are bundled before publishing to npm.\nTo include these styles you need to import ",(0,o.jsx)(n.code,{children:"@mantine/{package}/styles.css"})," file in your application.\nExample with ",(0,o.jsx)(n.code,{children:"@mantine/core"})," package:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By adding this import you will have all styles of ",(0,o.jsx)(n.code,{children:"@mantine/core"})," components in your application."]}),"\n",(0,o.jsx)(n.h2,{id:"adding-styles-to-mantine-components",children:"Adding styles to Mantine components"}),"\n",(0,o.jsxs)(n.p,{children:["You can add styles to most of Mantine components using ",(0,o.jsx)(n.code,{children:"className"})," prop\n– the same way as you would do with a regular html element.\nTo set properties to your ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," values, you can use ",(0,o.jsx)(n.a,{href:"/theming/css-variables",children:"Mantine CSS variables"}),":"]}),"\n",(0,o.jsx)(t,{data:i.o}),"\n",(0,o.jsxs)(n.p,{children:["To apply styles to inner elements of Mantine components with CSS modules, you can use ",(0,o.jsx)(n.code,{children:"classNames"})," prop\n(see ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," for more information):"]}),"\n",(0,o.jsx)(t,{data:r.A}),"\n",(0,o.jsx)(n.h2,{id:"styling-mantine-components-without-css-modules",children:"Styling Mantine components without CSS modules"}),"\n",(0,o.jsx)(n.p,{children:"All Mantine components are fully compatible with any third-party styling solution and native CSS.\nThere are two main strategies to apply styles with a third-party library:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"className"}),", ",(0,o.jsx)(n.code,{children:"classNames"}),", ",(0,o.jsx)(n.code,{children:"style"})," and ",(0,o.jsx)(n.code,{children:"styles"})," props"]}),"\n",(0,o.jsxs)(n.li,{children:["with static selectors, for example ",(0,o.jsx)(n.code,{children:".mantine-Text-root"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example of applying styles with utility CSS library:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TextInput\n      classNames={{\n        root: 'mt-4',\n        input: 'bg-red-500 text-white',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Example of applying styles with global CSS:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"/* styles.css */\n\n/* Note that these styles are not scoped and\n   will be applied to all TextInput components */\n.mantine-TextInput-root {\n  margin-top: 0.8rem;\n}\n\n.mantine-TextInput-input {\n  background-color: var(--mantine-color-red-filled);\n  color: var(--mantine-color-white);\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can combine both approaches to achieve desired results, for example,\n",(0,o.jsx)(n.code,{children:"@emotion/styled"})," and ",(0,o.jsx)(n.code,{children:"styled-components"})," packages will pass ",(0,o.jsx)(n.code,{children:"className"})," prop to\ngiven component and you can use static selectors to style inner elements:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Slider } from '@mantine/core';\nimport styled from '@emotion/styled';\n\nconst StyledSlider = styled(Slider)`\n  & .mantine-Slider-bar {\n    background-color: var(--mantine-color-pink-5);\n  }\n\n  & .mantine-Slider-thumb {\n    border-color: var(--mantine-color-pink-5);\n    background-color: white;\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n`;\n\nfunction Demo() {\n  return <StyledSlider defaultValue={40} />;\n}\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Consider using CSS modules first"})}),"\n",(0,o.jsx)(n.p,{children:"CSS modules are the recommended way of styling Mantine components.\nBefore choosing another styling solution, make sure that CSS modules do not fit your needs.\nOther solutions have limitations, for example:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["It is hard to customize styles based on ",(0,o.jsx)(n.a,{href:"/styles/data-attributes",children:"data-* attributes"})," when using utility based CSS libraries"]}),"\n",(0,o.jsxs)(n.li,{children:["It is impossible to style inner elements of Mantine components with static selectors when using styled-components and other similar libraries if component uses ",(0,o.jsx)(n.a,{href:"/core/portal",children:"Portal"})," because some elements will be rendered outside of component root and inner elements are not part of component tree"]}),"\n"]}),"\n"]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(c,Object.assign({},e,{children:(0,o.jsx)(d,e)}))}},35310:function(e,n,t){"use strict";t.d(n,{o:function(){return r}});var o=t(67294),s=t(94873),l={box:"mantine-lDU4bIN",highlight:"mantine-8Pw-6Iu"};let a=`
import { Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Box className={classes.box}>
      Box component with <span className={classes.highlight}>some styles</span>
    </Box>
  );
}
`,i=`
.box {
  font-size: var(--mantine-font-size-xl);
  text-align: center;
  font-weight: 600;
}

.highlight {
  padding: 0.1rem 0.7rem;
  display: inline-block;
  border-radius: var(--mantine-radius-md);
  background: var(--mantine-color-blue-light);
  color: var(--mantine-color-blue-light-color);
}
`,r={type:"code",component:function(){return o.createElement(s.x,{className:l.box},"Box component with ",o.createElement("span",{className:l.highlight},"some styles"))},code:[{fileName:"Demo.tsx",language:"tsx",code:a},{fileName:"Demo.module.css",language:"css",code:i}]}},55847:function(e,n,t){"use strict";t.d(n,{A:function(){return r}});var o=t(67294),s=t(31577),l={root:"mantine-99bACAg",input:"mantine-XR1RJA6",label:"mantine-agUl3KK"};let a=`
import { useState } from 'react';
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <TextInput
      label="Floating label input"
      labelProps={{ 'data-floating': floating }}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
`,i=`
.root {
  position: relative;
  margin-top: rem(5px);
}

.input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-width: rem(2px);
  border-radius: 0;
  padding-left: 0;
  background-color: var(--mantine-color-body);
}

.label {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: rem(7px);
  color: var(--mantine-color-placeholder);
  font-weight: 400;
  font-size: var(--mantine-font-size-sm);
  transition: color 100ms ease, transform 100ms ease, font-size 100ms ease;

  &[data-floating] {
    transform: translateY(rem(-20px));
    font-size: var(--mantine-font-size-xs);
    color: var(--mantine-color-text);
  }
}
`,r={type:"code",component:function(){let[e,n]=(0,o.useState)(""),[t,a]=(0,o.useState)(!1),i=t||e.length>0||void 0;return o.createElement(s.o,{label:"Floating label input",labelProps:{"data-floating":i},classNames:{root:l.root,input:l.input,label:l.label},onFocus:()=>a(!0),onBlur:()=>a(!1),value:e,onChange:e=>n(e.currentTarget.value)})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:a},{fileName:"Demo.module.css",language:"css",code:i}]}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=12574)}),_N_E=e.O()}]);