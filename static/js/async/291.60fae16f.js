"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["291"],{3162:function(e,r,n){n.r(r),n.d(r,{default:()=>o});var t=n(1549),a=n(6603);function i(e){let r=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",strong:"strong"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"introduction",children:["Introduction",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"We are creating several libraries to help us build design systems, especially for React.js. It is going to be a long journey ahead of us."}),"\n",(0,t.jsx)(r.p,{children:"This idea was born during a university project where we were challenged to meet several constraints because we asked for a more demanding task."}),"\n",(0,t.jsx)(r.p,{children:"We know there are many excellent tools out there that are evolving rapidly, offering great developer experience (DX), decent performance, and portability. However, they did not fully meet 100% of the requirements we were tasked with, such as:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Short build times"}),"\n",(0,t.jsx)(r.li,{children:"No runtime overhead"}),"\n",(0,t.jsx)(r.li,{children:"90% CSS coverage"}),"\n",(0,t.jsx)(r.li,{children:"Compatibility with React Server Components (RSC) and runtime style information (SSR)"}),"\n",(0,t.jsx)(r.li,{children:"Good JSX developer experience"}),"\n"]}),"\n",(0,t.jsxs)(r.h2,{id:"projects-that-inspire-us",children:["Projects That Inspire Us",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#projects-that-inspire-us",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"While researching tools to assist with our project, we discovered some amazing libraries that inspired us or even became the foundation of our tools. We are deeply grateful to the open-source community for their incredible work:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.radix-ui.com/",target:"_blank",rel:"noopener noreferrer",children:"Radix"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://tamagui.dev/",target:"_blank",rel:"noopener noreferrer",children:"Tamagui"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://stitches.dev/",target:"_blank",rel:"noopener noreferrer",children:"Stitches"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://mantine.dev/",target:"_blank",rel:"noopener noreferrer",children:"Mantine"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://unocss.dev/",target:"_blank",rel:"noopener noreferrer",children:"UnoCSS"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.tailwind-variants.org/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind Variants"})}),"\n"]}),"\n",(0,t.jsxs)(r.h2,{id:"some-context",children:["Some Context...",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#some-context",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"For example, we wanted to use a CSS variant generator because you often don't know what variants you'll need at compile time. All the classes representing possible states of that variant were generated, but the CSS coverage was not acceptable to our mentors."}),"\n",(0,t.jsxs)(r.p,{children:["Then we discovered ",(0,t.jsx)(r.a,{href:"https://tamagui.dev/",target:"_blank",rel:"noopener noreferrer",children:"Tamagui"}),", which was wonderful because it optimized JSX by extracting variants and creating a CSS file with only the classes that were used. We love Tamagui."]}),"\n",(0,t.jsx)(r.p,{children:"However, we needed to use the components as RSC, and the styles were not known ahead of time for those RSC components since we were fetching that information from a remote data source (SSR)."}),"\n",(0,t.jsx)(r.p,{children:"The heuristics for compiling a component were lost because we didn't know which variant value to apply until runtime."}),"\n",(0,t.jsx)(r.p,{children:"This is why we are building tools to help us create, with luck, a complete framework that addresses all the constraints we are facing."}),"\n",(0,t.jsx)(r.p,{children:"In this context, we do not aspire to replace these very powerful libraries. We are simply experimenting with some ideas."}),"\n",(0,t.jsxs)(r.h2,{id:"the-road-ahead",children:["The Road Ahead",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#the-road-ahead",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Currently, we are building a library of React component creators and, around that, a Tailwind wrapper using Tailwind Variants (we love Tailwind Variants)."}),"\n",(0,t.jsx)(r.p,{children:"To address the missing responsive variants, we are creating a Babel loader and a Vite plugin to generate all the responsive variants at compile time."}),"\n",(0,t.jsx)(r.p,{children:"Next, we plan to create an SWC plugin to extract only the necessary classes from JSX syntax and transform them into optimized components with only the required Tailwind classes."}),"\n",(0,t.jsx)(r.p,{children:"The component creator will assist us in development mode while we learn enough Rust to create the plugin."}),"\n",(0,t.jsx)(r.p,{children:"For RSC components with runtime data sources, we aim to create a set of Next.js utilities to register the required classes during SSG mode. These utilities will use the resolved values to generate only the necessary classes in the CSS file and inline the critical CSS."}),"\n",(0,t.jsx)(r.p,{children:"For client components, the approach is slightly different. We are exploring ways to extract the classes passed to the client component from the server component, possibly using a proxy."}),"\n",(0,t.jsx)(r.p,{children:"These approaches will require a strong set of rules and conventions, which we need to effectively communicate through warnings and linter rules."}),"\n",(0,t.jsx)(r.p,{children:"As you can see, there is a lot of work to do, and we are just getting started."}),"\n",(0,t.jsxs)(r.h2,{id:"what-we-have-so-far",children:["What We Have So Far",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#what-we-have-so-far",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"We have several packages, but the three most useful are:"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"@dyesthetics-lab/react-component-creators"}),"\nThis is our base library for creating polymorphic components with styles and variants."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"@dyesthetics-lab/react-tv-variants-creators"}),"\nA wrapper around Tailwind Variants and @dyesthetics-lab/react-component-creators to create responsive variants. Note: This does not work as a standalone library."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"@dyesthetics-lab/tailwind-manifest-creators"}),"\nTo effectively create responsive variants, we need to generate a manifest with all the responsive variants so TailwindCSS can read it and generate the required CSS. This module includes loaders and plugins to help with this process. (We are also planning to offer a codegen CLI as an alternative to this package.)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"You can test the following libraries:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"@dyesthetics-lab/react-component-creators"}),"\n",(0,t.jsx)(r.li,{children:"@dyesthetics-lab/react-tv-variants-creators"}),"\n",(0,t.jsx)(r.li,{children:"@dyesthetics-lab/tailwind-utils"}),"\n",(0,t.jsx)(r.li,{children:"@dyesthetics-lab/tailwind-manifest-creators"}),"\n",(0,t.jsx)(r.li,{children:"@dyesthetics-lab/tailwind-utils"}),"\n"]}),"\n",(0,t.jsxs)(r.h2,{id:"can-i-help-out",children:["Can I Help Out?",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#can-i-help-out",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Of course! We are looking for contributors to help us with the project. We want to learn, but we are currently very busy with university, so please be patient if we don't respond immediately. Nevertheless, any PR from a fork will be reviewed within the same week it is submitted."}),"\n",(0,t.jsxs)(r.h2,{id:"final-words",children:["Final Words",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#final-words",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"We are here to learn and greatly appreciate any feedback you can provide."}),"\n",(0,t.jsxs)(r.p,{children:["Additionally, we have an ",(0,t.jsx)(r.a,{href:"https://medium.com/@shadowrunner8095/my-deep-dive-road-creating-a-design-system-component-library-with-tailwind-part-1-0d7195316741",target:"_blank",rel:"noopener noreferrer",children:"article"})," that inspired this project. We created the libraries shortly after the article was published."]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}let o=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["guide%2Findex.mdx"]={toc:[{text:"Projects That Inspire Us",id:"projects-that-inspire-us",depth:2},{text:"Some Context...",id:"some-context",depth:2},{text:"The Road Ahead",id:"the-road-ahead",depth:2},{text:"What We Have So Far",id:"what-we-have-so-far",depth:2},{text:"Can I Help Out?",id:"can-i-help-out",depth:2},{text:"Final Words",id:"final-words",depth:2}],title:"Introduction",headingTitle:"Introduction",frontmatter:{}}}}]);