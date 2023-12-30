(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{7837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){return n(5360)}])},4051:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var s=n(5893),a=n(7294),r=n(1664),l=n.n(r),i=n(4603),o=n(6130),c=n(2010),d=n(1163),m=e=>{let{path:t,title:n}=e,{asPath:a}=(0,d.useRouter)();return(0,s.jsx)("li",{className:"group",children:(0,s.jsx)(l(),{href:"".concat(t),children:(0,s.jsx)("span",{className:"".concat(a==="".concat(t)?"font-bold":"dark:text-slate-400 text-slate-600"," text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-black dark:group-hover:text-white group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold"),children:n})})})};function x(){let[e,t]=(0,a.useState)("hamburger-nonactive"),[n,r]=(0,a.useState)("menu-hidden"),[d,x]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1);(0,a.useEffect)(()=>{h(!0)},[]);let{systemTheme:g,theme:b,setTheme:j}=(0,c.F)();return(0,s.jsx)("header",{className:"flex navbar-fixed top-0 left-0 w-full items-center z-10 dark:bg-opacity-70 dark:bg-black bg-opacity-70",children:(0,s.jsx)("div",{className:"container mx-auto max-w-screen-lg",children:(0,s.jsxs)("div",{className:"flex justify-between relative",children:[(0,s.jsx)("div",{className:"px-4",children:(0,s.jsx)(l(),{href:"/",children:(0,s.jsx)("span",{className:"font-bold text-2xl block py-6 relative",children:"wrseno"})})}),(0,s.jsxs)("div",{className:"flex items-center px-4",children:[(0,s.jsxs)("button",{id:e,name:"hamburger",type:"button",className:"block absolute right-4 lg:hidden",onClick:()=>{d?(t("hamburger-nonactive"),r("menu-hidden")):(t("hamburger-active"),r("menu-visible")),x(!d)},children:[(0,s.jsx)("span",{className:"hamburger-line transition duration-300 ease-in-out origin-top-left bg-black dark:bg-white"}),(0,s.jsx)("span",{className:"hamburger-line-2 transition duration-300 ease-in-out bg-black dark:bg-white"}),(0,s.jsx)("span",{className:"hamburger-line transition duration-300 ease-in-out origin-bottom-left bg-black dark:bg-white"})]}),(0,s.jsx)("nav",{id:n,className:"hidden absolute py-5 bg-white dark:lg:bg-transparent dark:bg-black bg-opacity-90 font-semibold shadow-lg rounded-lg w-full right-0 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none",children:(0,s.jsxs)("ul",{className:"block lg:flex items-center",children:[(0,s.jsx)(m,{path:"/about",title:"About"}),(0,s.jsx)(m,{path:"/achievement",title:"Achievements"}),(0,s.jsx)(m,{path:"/project",title:"Projects"}),(0,s.jsx)("li",{className:"group py-2 mx-8 lg:mx-4",children:u?"dark"===("system"===b?g:b)?(0,s.jsx)(i.Z,{className:"lg:ml-4 w-8 h-8 rounded-md text-yellow-500",role:"button",onClick:()=>j("light")}):(0,s.jsx)(o.Z,{className:"lg:ml-4 w-8 h-8 rounded-md text-gray-900",role:"button",onClick:()=>j("dark")}):null})]})})]})]})})})}},7226:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(5893);n(7294);var a=n(5675),r=n.n(a),l=n(3750),i=n(1664),o=n.n(i);function c(e){let{layout:t,project:n}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"my-4 rounded-xl shadow-neumorphism bg-white dark:shadow-dark-neumorphism dark:bg-dark",children:(0,s.jsxs)("div",{className:"flex flex-col md:p-4 md:px-6 rounded-xl md:flex-row",children:[(0,s.jsx)("div",{className:"pt-0 w-full md:pt-2 md:w-2/3 \n                ".concat(t?"order-1 md:order-2":""),children:(0,s.jsx)(r(),{src:"/img/".concat(n.image),alt:"projects",width:500,height:500,className:"duration-300 hover:cursor-pointer rounded-lg",placeholder:"blur",blurDataURL:"/img/".concat(n.image),unoptimized:!0})}),(0,s.jsxs)("div",{className:"w-full flex flex-col text-center justify-between p-4 \n                ".concat(t?"order-2 md:order-1 md:pr-8":"md:pl-8"," md:w-3/5 md:text-left md:p-0 md:pb-2 "),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-2xl font-bold md:text-3xl",children:n.title}),(0,s.jsx)("p",{className:"mt-2 md:text-lg",children:n.desc}),(0,s.jsx)("ul",{className:"flex mt-4 justify-center md:justify-start",children:n.category.map((e,t)=>(0,s.jsx)("li",{className:"mx-1 md:mx-0 md:mr-2 grid",children:(0,s.jsx)("div",{className:"bg-primary text-white py-2 px-4 rounded-md text-xs md:text-base",children:e.name})},t))})]}),(0,s.jsxs)("div",{className:"flex justify-center mt-2 md:justify-start md:mt-0",children:[(0,s.jsx)(o(),{href:"".concat(n.repo),children:(0,s.jsxs)("span",{className:"mr-4 text-white bg-black dark:text-black dark:bg-white my-6 flex items-center py-2 px-4 w-28 rounded-md font-semibold",children:[(0,s.jsx)(l.rFR,{className:"mr-2"})," Github"]})}),(0,s.jsx)(o(),{href:"".concat(n.demo),children:(0,s.jsxs)("span",{className:"mr-4 text-white bg-black dark:text-black dark:bg-white my-6 flex items-center py-2 px-4 w-28 rounded-md font-semibold",children:[(0,s.jsx)(l.Gzp,{className:"mr-2"})," Demo"]})})]})]})]})})})}},9855:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(5893),a=n(9008),r=n.n(a),l=n(4051);function i(e){let{children:t,pageTitle:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:n}),(0,s.jsx)("meta",{name:"author",content:"Warseno Bambang Setyono"}),(0,s.jsx)("meta",{name:"description",content:"Warseno Personal Website"}),(0,s.jsx)("meta",{name:"keywords",content:"Warseno, Warseno Bambang, Warseno Bambang Setyono, wrseno, wrzeno"}),(0,s.jsx)("meta",{name:"og:title",content:"Warseno Bambang Setyono Personal Website"}),(0,s.jsx)("meta",{name:"og:url",content:"https://wrseno.my.id"}),(0,s.jsx)("meta",{name:"og:site_name",content:"wrseno"}),(0,s.jsx)("link",{rel:"icon",href:"/wrseno_icon2.png"})]}),(0,s.jsx)(l.Z,{}),(0,s.jsx)("div",{children:t})]})}},5360:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l},default:function(){return i}});var s=n(5893);n(7294);var a=n(9855),r=n(7226),l=!0;function i(e){let{projects:t}=e;return(0,s.jsx)(a.Z,{pageTitle:"Wrseno | Projects Page",children:(0,s.jsx)("main",{id:"project_page",className:"pt-32",children:(0,s.jsx)("section",{className:"container mx-auto max-w-screen-lg",children:(0,s.jsxs)("div",{className:"flex flex-wrap relative",children:[(0,s.jsx)("h1",{className:"w-full text-3xl font-bold text-center",children:"Projects"}),(0,s.jsx)("div",{className:"w-16 h-1.5 rounded-full bg-primary absolute lg:left-96 lg:top-12 left-24 top-10"}),(0,s.jsx)("div",{className:"flex flex-col lg:my-24 my-14",children:t.map((e,t)=>t%2==0?(0,s.jsx)(r.Z,{project:e,layout:!1},t):(0,s.jsx)(r.Z,{project:e,layout:!0},t))})]})})})})}}},function(e){e.O(0,[13,637,892,774,888,179],function(){return e(e.s=7837)}),_N_E=e.O()}]);