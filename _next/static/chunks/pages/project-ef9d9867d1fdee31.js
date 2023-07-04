(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{7837:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){return a(5360)}])},6853:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var s=a(5893),r=a(7294),n=a(1664),l=a.n(n),o=a(1163),i=a(4603),c=a(6130),d=a(2010);function m(){let{asPath:e}=(0,o.useRouter)(),[t,a]=(0,r.useState)("hamburger-nonactive"),[n,m]=(0,r.useState)("menu-hidden"),[x,u]=(0,r.useState)(!1),[h,g]=(0,r.useState)(!1);(0,r.useEffect)(()=>{g(!0)},[]);let{systemTheme:p,theme:b,setTheme:f}=(0,d.F)();return(0,s.jsx)("header",{className:"flex navbar-fixed top-0 left-0 w-full items-center z-10 dark:bg-opacity-70 dark:bg-black bg-opacity-70",children:(0,s.jsx)("div",{className:"container mx-auto max-w-screen-lg",children:(0,s.jsxs)("div",{className:"flex justify-between relative",children:[(0,s.jsx)("div",{className:"px-4",children:(0,s.jsx)(l(),{href:"/",children:(0,s.jsx)("span",{className:"font-bold text-2xl block py-6 relative",children:"wrseno"})})}),(0,s.jsxs)("div",{className:"flex items-center px-4",children:[(0,s.jsxs)("button",{id:t,name:"hamburger",type:"button",className:"block absolute right-4 lg:hidden",onClick:()=>{x?(a("hamburger-nonactive"),m("menu-hidden")):(a("hamburger-active"),m("menu-visible")),u(!x)},children:[(0,s.jsx)("span",{className:"hamburger-line transition duration-300 ease-in-out origin-top-left bg-black dark:bg-white"}),(0,s.jsx)("span",{className:"hamburger-line-2 transition duration-300 ease-in-out bg-black dark:bg-white"}),(0,s.jsx)("span",{className:"hamburger-line transition duration-300 ease-in-out origin-bottom-left bg-black dark:bg-white"})]}),(0,s.jsx)("nav",{id:n,className:"hidden absolute py-5 bg-white dark:lg:bg-transparent dark:bg-black bg-opacity-90 font-semibold shadow-lg rounded-lg w-full right-0 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none",children:(0,s.jsxs)("ul",{className:"block lg:flex items-center",children:[(0,s.jsx)("li",{className:"group",children:(0,s.jsx)(l(),{href:"/about",children:(0,s.jsx)("span",{className:"".concat("/about"===e?"font-bold":"dark:text-slate-400 text-slate-600"," text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-black dark:group-hover:text-white group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold"),children:"About"})})}),(0,s.jsx)("li",{className:"group",children:(0,s.jsx)(l(),{href:"/achievement",children:(0,s.jsx)("span",{className:"".concat("/achievement"===e?"font-bold":"dark:text-slate-400 text-slate-600"," text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-black dark:group-hover:text-white group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold"),children:"Achievements"})})}),(0,s.jsx)("li",{className:"group",children:(0,s.jsx)(l(),{href:"/project",children:(0,s.jsx)("span",{className:"".concat("/project"===e?"font-bold":"dark:text-slate-400 text-slate-600"," text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-black dark:group-hover:text-white group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold"),children:"Projects"})})}),(0,s.jsx)("li",{className:"group py-2 mx-8 lg:mx-4",children:h?"dark"===("system"===b?p:b)?(0,s.jsx)(i.Z,{className:"lg:ml-4 w-8 h-8 rounded-md text-yellow-500",role:"button",onClick:()=>f("light")}):(0,s.jsx)(c.Z,{className:"lg:ml-4 w-8 h-8 rounded-md text-gray-900",role:"button",onClick:()=>f("dark")}):null})]})})]})]})})})}},7226:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var s=a(5893);a(7294);var r=a(5675),n=a.n(r),l=a(3750),o=a(1664),i=a.n(o);function c(e){let{layout:t,project:a}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"my-4 rounded-xl shadow-neumorphism bg-white dark:shadow-dark-neumorphism dark:bg-dark",children:(0,s.jsxs)("div",{className:"flex flex-col md:p-4 md:px-6 rounded-xl md:flex-row",children:[(0,s.jsx)("div",{className:"pt-0 w-full md:pt-2 md:w-2/3 \n                ".concat(t?"order-1 md:order-2":""),children:(0,s.jsx)(n(),{src:"/img/".concat(a.image),alt:"projects",width:500,height:500,className:"duration-300 hover:cursor-pointer rounded-lg",placeholder:"blur",blurDataURL:"/img/".concat(a.image),unoptimized:!0})}),(0,s.jsxs)("div",{className:"w-full flex flex-col text-center justify-between p-4 \n                ".concat(t?"order-2 md:order-1 md:pr-8":"md:pl-8"," md:w-3/5 md:text-left md:p-0 md:pb-2 "),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-2xl font-bold md:text-3xl",children:a.title}),(0,s.jsx)("p",{className:"mt-2 md:text-lg",children:a.desc}),(0,s.jsx)("ul",{className:"flex mt-4 justify-center md:justify-start",children:a.category.map((e,t)=>(0,s.jsx)("li",{className:"mx-1 md:mx-0 md:mr-2 grid",children:(0,s.jsx)("div",{className:"bg-primary text-white py-2 px-4 rounded-md text-xs md:text-base",children:e.name})},t))})]}),(0,s.jsxs)("div",{className:"flex justify-center mt-2 md:justify-start md:mt-0",children:[(0,s.jsx)(i(),{href:"".concat(a.repo),children:(0,s.jsxs)("span",{className:"mr-4 text-white bg-black dark:text-black dark:bg-white my-6 flex items-center py-2 px-4 w-28 rounded-md font-semibold",children:[(0,s.jsx)(l.rFR,{className:"mr-2"})," Github"]})}),(0,s.jsx)(i(),{href:"".concat(a.demo),children:(0,s.jsxs)("span",{className:"mr-4 text-white bg-black dark:text-black dark:bg-white my-6 flex items-center py-2 px-4 w-28 rounded-md font-semibold",children:[(0,s.jsx)(l.Gzp,{className:"mr-2"})," Demo"]})})]})]})]})})})}},9855:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var s=a(5893),r=a(9008),n=a.n(r),l=a(6853);function o(e){let{children:t,pageTitle:a}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n(),{children:[(0,s.jsx)("title",{children:a}),(0,s.jsx)("meta",{name:"author",content:"Warseno Bambang Setyono"}),(0,s.jsx)("meta",{name:"description",content:"Warseno Personal Website"}),(0,s.jsx)("meta",{name:"keywords",content:"Warseno, Warseno Bambang, Warseno Bambang Setyono, wrseno, wrzeno"}),(0,s.jsx)("meta",{name:"og:title",content:"Warseno Bambang Setyono Personal Website"}),(0,s.jsx)("meta",{name:"og:url",content:"https://wrseno.my.id"}),(0,s.jsx)("meta",{name:"og:site_name",content:"wrseno"}),(0,s.jsx)("link",{rel:"icon",href:"/wrseno_icon2.png"})]}),(0,s.jsx)(l.Z,{}),(0,s.jsx)("div",{children:t})]})}},5360:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return l},default:function(){return o}});var s=a(5893);a(7294);var r=a(9855),n=a(7226),l=!0;function o(e){let{projects:t}=e;return(0,s.jsx)(r.Z,{pageTitle:"Wrseno | Projects Page",children:(0,s.jsx)("main",{id:"project_page",className:"pt-32",children:(0,s.jsx)("section",{className:"container mx-auto max-w-screen-lg",children:(0,s.jsxs)("div",{className:"flex flex-wrap relative",children:[(0,s.jsx)("h1",{className:"w-full text-3xl font-bold text-center",children:"Projects"}),(0,s.jsx)("div",{className:"w-16 h-1.5 rounded-full bg-primary absolute lg:left-96 lg:top-12 left-24 top-10"}),(0,s.jsx)("div",{className:"flex flex-col lg:my-24 my-14",children:t.map((e,t)=>t%2==0?(0,s.jsx)(n.Z,{project:e,layout:!1},t):(0,s.jsx)(n.Z,{project:e,layout:!0},t))})]})})})})}}},function(e){e.O(0,[13,637,892,774,888,179],function(){return e(e.s=7837)}),_N_E=e.O()}]);