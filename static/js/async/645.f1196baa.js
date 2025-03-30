"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["645"],{2455:function(e,a,t){t.r(a),t.d(a,{default:()=>i});var n=t(1549),s=t(6603);function o(e){let a=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",em:"em",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.h1,{id:"do-you-need-a-state-manager-for-that-data",children:["Do you need a state manager for that DATA?",(0,n.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#do-you-need-a-state-manager-for-that-data",children:"#"})]}),"\n",(0,n.jsx)(a.p,{children:"You may not need a state manager for some type fo data. But before diving\ninto it some words of caution."}),"\n",(0,n.jsxs)(a.h2,{id:"words-of-caution-",children:["Words of caution :)",(0,n.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#words-of-caution-",children:"#"})]}),"\n",(0,n.jsx)(a.p,{children:"Don't get me wrong—state managers are incredibly powerful, and I love them.\nThis article isn't about telling you to rip Redux, Zustand, or Jotai out of your codebase.\nIn many cases, they are essential for managing state that multiple components subscribe to,\nensuring they update when the state changes."}),"\n",(0,n.jsx)(a.p,{children:"But here's the thing: not all data in your app needs that kind of management. Some state\ncan be handled differently, without introducing unnecessary complexity or\nperformance overhead."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"State Managers Are Not an All-or-Nothing Decision"})}),"\n",(0,n.jsx)(a.p,{children:"This isn't a “pick one and stick with it” scenario. State managers and\nalternative approaches can coexist in your app."}),"\n",(0,n.jsx)(a.p,{children:"Some data fits naturally in a global store, while other pieces\nof state can be handled more efficiently without one."}),"\n",(0,n.jsx)(a.p,{children:"It all depends on how and where the data is used."}),"\n",(0,n.jsx)(a.p,{children:"We are going to use TanStack Router for the example, but the same applies to other\nrouting libraries provided they have the features to support it."}),"\n",(0,n.jsxs)(a.h2,{id:"a-simple-example",children:["A simple example",(0,n.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#a-simple-example",children:"#"})]}),"\n",(0,n.jsx)(a.p,{children:"I'm going to present a simple example for the sake of explanation.\nImagine we have an input field where a user enters some data.\nOnce the input is provided and validated, the form (using React 19 form actions on the client side)\nis submitted. The action function then sends a request to the backend\nwith the input data, and if the response is successful, we navigate\nthe user to another page."}),"\n",(0,n.jsx)(a.p,{children:"The important part is that we need data from the response on the\nsecond page either to display it visually or to\nprocess it before showing something to the user."}),"\n",(0,n.jsx)(a.p,{children:"Using TanStack Router, you can pass that data via search\nparameters using the navigation function from useNavigate."}),"\n",(0,n.jsx)(a.p,{children:"(This is a simplified example,\nand in a real-world scenario, you would likely\nhave more complex data structures and error handling.)"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { useNavigate } from '@tanstack/react-router';\n\nfunction Form(){\n  const navigate = MyFirstRoute.useNavigate();\n  const action = async ()=>{\n    const { data, someOtherData } = await someMadeUpRequest();\n\n    //some response processing\n\n    await navigate({\n      to: '/next-page',\n      search: {\n        data: data,\n        otherData: otherData,\n      },\n    })\n  }\n\n  return <form action={action}>\n    {/* form fields */}\n  </form>\n\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["And now we can get the response data that is ",(0,n.jsx)(a.em,{children:"only needed in the second page"}),"\nwith the ",(0,n.jsx)(a.code,{children:"useSearch"})," hook"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { useSearch } from '@tanstack/react-router';\n\n\nfunction NextPage(){\n  const { data, otherData } = MySecondRoute.useSearch();\n\n  return (\n    <div>\n      <h1>Next Page</h1>\n      <p>Data: {data}</p>\n      <p>Other Data: {otherData}</p>\n    </div>\n  );\n}\n"})}),"\n",(0,n.jsx)(a.p,{children:"But what if you don't want to expose the data in the URL as search params?\nBecause if you use navigate with the search params, it will be visible in the URL."}),"\n",(0,n.jsx)(a.p,{children:"In that case, you can mask those parameters. TanStack Router supports this approach\nby maintaining temporary location state internally."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { useNavigate } from '@tanstack/react-router';\nfunction Form(){\n  const navigate = MyFirstRoute.useNavigate();\n  const action = async ()=>{\n    const { data, someOtherData } = await someMadeUpRequest();\n\n    //some response processing\n\n    await navigate({\n      to: '/next-page',\n      state: {\n        data: data,\n        otherData: otherData,\n      },\n      mask: {\n        to: '/next-page',\n        // because here are not listed the search params, they will\n        // not be visible in the URL\n        // but they will be available with useSearch or in the loaders\n      }\n    })\n  }\n\n  return <form action={action}>\n    {/* form fields */}\n  </form>\n}\n\n"})}),"\n",(0,n.jsx)(a.p,{children:"This  data, can be used as well in your destination route loaders, there you have the opportunity\nto perform any required operations before rendering."}),"\n",(0,n.jsx)(a.p,{children:"Again, this approach isn't for every case. Consider a scenario where you have\na component, say, a button—and one or more components that aren't its\ndirect children need to update visually when that button is clicked. In this\nscenario, we're dealing with an app state, that is, state internal to your application\nthat isn't fetched from an external system. Here, it makes sense to use a state manager."}),"\n",(0,n.jsxs)(a.p,{children:["And what about React Query? It features a powerful caching mechanism. If you obtain\na result in one mutation or query, you can retrieve the data response\nand even the params that were used for the request from its cache\nelsewhere in your app when needed. (There's a great\n",(0,n.jsx)(a.a,{href:"https://tkdodo.eu/blog/react-query-as-a-state-manager",target:"_blank",rel:"noopener noreferrer",children:"article"})," on this\ntopic by TkDodo that explains it in more detail.)"]}),"\n",(0,n.jsx)(a.p,{children:"The key is to think carefully about how the data is going to be used.\nSome developers prefer to centralize everything in one store for\npredictability. While that creates a consistent pattern, making\nit easy for AI tools and new developers to follow, it can also\nlead to workarounds and unnecessary re-renders."}),"\n",(0,n.jsx)(a.p,{children:"The argument for centralization is based on having one predictable pattern;\nhowever, this can sometimes create secondary issues."}),"\n",(0,n.jsx)(a.p,{children:"I believe that better documentation, like a flow diagram outlining different scenarios,\ncould help clarify when to use a state manager versus alternative approaches. Perhaps even an abstraction that handles data storage based on declared usage, or heuristics that decide the best storage method, could be beneficial. It’s a bit of a stretch, but it’s an idea that popped into my head while writing this."}),"\n",(0,n.jsx)(a.p,{children:"What do you think? Do you have examples where the data doesn't need to be\nstored in a state manager? Let's discuss!"})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}let i=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["blog%2Fyou-may-not-need-a-state-manager.mdx"]={toc:[{text:"Words of caution :)",id:"words-of-caution-",depth:2},{text:"A simple example",id:"a-simple-example",depth:2}],title:"Do you need a state manager for that DATA?",headingTitle:"Do you need a state manager for that DATA?",frontmatter:{}}}}]);