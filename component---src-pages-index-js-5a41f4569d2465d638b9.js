(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),l=n("vOnD"),o=n("Nefw"),s=l.b.section.withConfig({displayName:"styled__StyledHome",componentId:"sc-1hmg09h-0"})(["display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;height:100vh;"]),r=l.b.aside.withConfig({displayName:"styled__StyledHomeSidebar",componentId:"sc-1hmg09h-1"})(["display:flex;justify-content:flex-end;align-items:center;width:40%;height:100%;"]),c=l.b.article.withConfig({displayName:"styled__StyledHomeContent",componentId:"sc-1hmg09h-2"})(["position:absolute;z-index:9;display:block;text-align:right;margin-right:-200px;h2{margin:5px;padding:5px;font-size:90px;font-weight:900;text-transform:uppercase;background-color:",";}p{margin:5px;padding:5px;font-size:30px;font-weight:100;background-color:",";}"],o.a.white,o.a.white),d=l.b.div.withConfig({displayName:"styled__StyledHomeImage",componentId:"sc-1hmg09h-3"})(["width:60%;height:100%;img{display:block;width:100%;height:100%;object-fit:cover;}"]),p=n("TbDO"),u=n.n(p),y=n("UJOU"),g=n.n(y),m=function(){return a.a.createElement(s,null,a.a.createElement(r,null,a.a.createElement(c,null,a.a.createElement("h2",null,"Celso Fabri"),a.a.createElement("p",null,"Front-End Developer & UX/UI Designer"))),a.a.createElement(d,null,a.a.createElement("img",{src:u.a,srcset:g.a,alt:"Celso Fabri Junior"})))},M=n("Rnav");t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(M.a,null),a.a.createElement(m,null))}},Rnav:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),l=n("Wbzz"),o=n("vOnD"),s=o.b.h1.withConfig({displayName:"styled__StyledLogo",componentId:"sc-1lxwep1-0"})(["display:inline-block;margin:0;padding:0;img{display:block;max-width:50px;height:38px;margin:0;padding:0;}"]),r=n("uFsF"),c=n.n(r),d=function(){return a.a.createElement(s,null,a.a.createElement(l.Link,{to:"/",title:"Celso Fabri"},a.a.createElement("img",{src:c.a,alt:"Celso Fabri"})))};var p=n("Nefw"),u=o.b.button.withConfig({displayName:"styled__StyledBurger",componentId:"sc-1tvccki-0"})(["position:relative;z-index:100;display:inline-flex;justify-content:flex-end;align-items:center;flex-wrap:wrap;width:32px;height:24px;margin:0;padding:0;border:0;background-color:transparent;cursor:pointer;transition:all 0.4s ease-out;outline:none;&:before,&:after{position:absolute;left:0;display:block;width:100%;height:3px;background-color:",";transition:all 0.4s ease-out;content:'';}&:before{top:0;}&:after{bottom:0;}",""],p.a.gray400,(function(e){return e.isMenuOpen&&Object(o.a)(["span{opacity:0;visibility:hidden;}&:before{transform:rotate(45deg) translateY(7px) translateX(8px);}&:after{transform:rotate(-45deg) translateY(-7px) translateX(8px);}"])})),y=o.b.span.withConfig({displayName:"styled__StyledBurgerItem",componentId:"sc-1tvccki-1"})(["width:100%;height:3px;background-color:",";transition:all 0.4s ease-out;"],p.a.gray400),g=function(e){var t=e.isMenuOpen,n=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["isMenuOpen"]);return a.a.createElement(u,Object.assign({isMenuOpen:t},n),a.a.createElement(y,null))},m=o.b.nav.withConfig({displayName:"styled__StyledMenu",componentId:"sc-15n1wys-0"})(["position:fixed;top:0;left:0;z-index:10;display:flex;justify-content:flex-end;align-items:center;width:100%;height:100vh;padding:0px 250px;background-color:rgba(255,255,255,0.95);opacity:0;visibility:hidden;transform:scale(1.15);transform:scale3d(1.15,1.15,1.15);transition:all 0.4s ease-out;overflow:auto;",""],(function(e){return e.isMenuOpen&&Object(o.a)(["opacity:1;visibility:visible;transform:scale(1);transform:scale3d(1,1,1);"])})),M=o.b.ul.withConfig({displayName:"styled__StyledMenuList",componentId:"sc-15n1wys-1"})(["display:block;margin:-10px 0;padding:0;list-style-type:none;"]),w=o.b.li.withConfig({displayName:"styled__StyledMenuItem",componentId:"sc-15n1wys-2"})(["margin:20px 0;text-align:right;a{position:relative;display:inline-block;font-size:90px;font-weight:900;color:",";text-transform:lowercase;text-decoration:none;transition:all 0.4s ease-out;&:before{margin-right:10px;opacity:0;content:'/';}&:hover{color:",";&:before{opacity:1;}}}"],p.a.gray400,p.a.red400),N=function(e){var t=e.isMenuOpen;return a.a.createElement(m,{isMenuOpen:t},a.a.createElement(M,null,a.a.createElement(w,null,a.a.createElement(l.Link,{to:"/sobre",title:"Sobre"},"Sobre"))))},f=n("PLGf"),b=o.b.header.withConfig({displayName:"styled__StyledHeader",componentId:"sc-1vau7h0-0"})(["position:fixed;top:0;left:0;z-index:50;display:block;width:100%;padding:30px 0;"]),h=o.b.div.withConfig({displayName:"styled__StyledHeaderContainer",componentId:"sc-1vau7h0-1"})(["display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;width:100%;"]);t.a=function(){var e=Object(i.useState)(!1),t=e[0],n=e[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null,a.a.createElement(f.e,null,a.a.createElement(h,null,a.a.createElement(d,null),a.a.createElement(g,{isMenuOpen:t,onClick:function(){n(!t)}})))),a.a.createElement(N,{isMenuOpen:t}))}},TbDO:function(e,t,n){e.exports=n.p+"static/img-celsofabri-010d519536c643c5e9c7fed167eaec85.jpg"},UJOU:function(e,t,n){e.exports=n.p+"static/img-celsofabri@2x-7737c8c038d33fca5e0ea197b8f741d8.jpg"},uFsF:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjIuODMiIGhlaWdodD0iMTY3LjQ0IiB2aWV3Qm94PSIwIDAgMjIyLjgzIDE2Ny40NCI+CiAgPGcgaWQ9ImxvZ28tbWluIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIxLjgyIC0yNjguNzgpIj4KICAgIDxwYXRoIGlkPSJDYW1pbmhvXzUiIGRhdGEtbmFtZT0iQ2FtaW5obyA1IiBkPSJNOTYuMzcsMy4yMnEtMjUuMywwLTQ1LjQyNS0xMC42OTVBNzkuOTc2LDc5Ljk3NiwwLDAsMSwxOS4zMi0zNy4yNlE3LjgyLTU2LjM1LDcuODItODAuNXQxMS41LTQzLjI0YTc5Ljk3Niw3OS45NzYsMCwwLDEsMzEuNjI1LTI5Ljc4NVE3MS4wNy0xNjQuMjIsOTYuMzctMTY0LjIycTIyLjA4LDAsMzkuNzksNy44MmE3Ni41NTYsNzYuNTU2LDAsMCwxLDI5LjQ0LDIyLjU0bC0yOC45OCwyNi4yMlExMjAuOTgtMTI2LjUsOTguNjctMTI2LjVhNDYuODM3LDQ2LjgzNywwLDAsMC0yMy4zNDUsNS43NSwzOS45MDgsMzkuOTA4LDAsMCwwLTE1Ljg3LDE2LjIxNUE0OS45LDQ5LjksMCwwLDAsNTMuODItODAuNWE0OS45LDQ5LjksMCwwLDAsNS42MzUsMjQuMDM1QTM5LjkwOCwzOS45MDgsMCwwLDAsNzUuMzI1LTQwLjI1LDQ2LjgzNyw0Ni44MzcsMCwwLDAsOTguNjctMzQuNXEyMi4zMSwwLDM3Ljk1LTE4Ljg2TDE2NS42LTI3LjE0QTc2LjU1Niw3Ni41NTYsMCwwLDEsMTM2LjE2LTQuNlExMTguNDUsMy4yMiw5Ni4zNywzLjIyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTE0IDQzMykiIGZpbGw9IiMyMjJmM2UiLz4KICAgIDxwYXRoIGlkPSJDYW1pbmhvXzYiIGRhdGEtbmFtZT0iQ2FtaW5obyA2IiBkPSJNMzIuNDMsMi4wN0EyNS43NCwyNS43NCwwLDAsMSwxMy44LTUuMjlRNi4yMS0xMi42NSw2LjIxLTIzLjkycTAtMTEuNSw3LjQ3NS0xOC42M1QzMi40My00OS42OHExMS41LDAsMTguODYsNy4xM3Q3LjM2LDE4LjYzcTAsMTEuMjctNy40NzUsMTguNjNUMzIuNDMsMi4wN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY4NiA0MzMpIiBmaWxsPSIjZWU1MjUzIi8+CiAgPC9nPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-index-js-5a41f4569d2465d638b9.js.map