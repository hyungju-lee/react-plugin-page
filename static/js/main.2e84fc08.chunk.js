(this.webpackJsonpplugin=this.webpackJsonpplugin||[]).push([[0],{45:function(e,n,t){},46:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),s=t(16),c=t.n(s),r=(t(45),t(35)),o=t(36),l=(t(46),t(63)),h=t(64),d=t(62),u=t(61),f=t(19),j=t(7),b=t(3),v=Object(i.lazy)((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,100))}));function g(){return Object(i.useEffect)((function(){var e=document.querySelector("#canvas1"),n=e.getContext("2d");e.width=e.parentElement.offsetWidth,e.height=e.parentElement.offsetHeight;var t=[];n.lineWidth=3;var i={x:null,y:null,radius:150};n.fillStyle="#586370",n.font="25px Verdana",n.fillText("FT.DEV",0,30),n.fillText("UI\uac1c\ubc1c1\ud300",0,60),n.fillText("INTERACTION",0,90);var a,s=n.getImageData(0,0,200,150),c=function(){function e(n,t){Object(r.a)(this,e),this.x=n+30,this.y=t,this.size=2,this.baseX=this.x,this.baseY=this.y,this.density=5*Math.random()}return Object(o.a)(e,[{key:"draw",value:function(){n.fillStyle="#586370",n.beginPath(),n.arc(this.x,this.y,this.size,0,2*Math.PI),n.closePath(),n.fill()}},{key:"update",value:function(){var e=i.x-this.x,n=i.y-this.y,t=Math.sqrt(e*e+n*n),a=e/t,s=n/t,c=i.radius,r=(c-t)/c,o=a*r*this.density,l=s*r*this.density;if(t<i.radius)this.x-=o,this.y-=l;else{if(this.x!==this.baseX){var h=this.x-this.baseX;this.x-=h/10}if(this.y!==this.baseY){var d=this.y-this.baseY;this.y-=d/10}}}}]),e}();function l(e){t=[];for(var n=0,i=s.height;n<i;n++)for(var a=0,r=s.width;a<r;a++)if(s.data[4*n*s.width+4*a+3]>128){var o=a+0,l=n+0;t.push(new c(o*e,l*e))}}function h(i){n.clearRect(0,0,e.width,e.height);for(var s=0;s<t.length;s++)t[s].draw(),t[s].update();!function(e){for(var i=1,a=0;a<t.length;a++)for(var s=a;s<t.length;s++){var c=t[a].x-t[s].x,r=t[a].y-t[s].y,o=Math.sqrt(c*c+r*r);o<e&&(i=1-o/50,n.strokeStyle="rgba(255, 255, 255"+i+")",n.lineWidth=1,n.beginPath(),n.moveTo(t[a].x,t[a].y),n.lineTo(t[s].x,t[s].y),n.stroke())}}(i),a=requestAnimationFrame(h.bind(null,i))}switch(!0){case window.innerWidth>767:l(4),h(7);break;case window.innerWidth>560&&window.innerWidth<=767:l(3),h(4);break;case window.innerWidth<=560:l(1.5),h(3)}var d=function(e){i.x=e.x,i.y=e.y},u=function(){switch(cancelAnimationFrame(a),e.width=e.parentElement.offsetWidth,e.height=e.parentElement.offsetHeight,!0){case window.innerWidth>767:l(4),h(7);break;case window.innerWidth>560&&window.innerWidth<=767:l(3),h(4);break;case window.innerWidth<=560:l(1.5),h(3)}};return window.addEventListener("mousemove",d),window.addEventListener("resize",u),function(){cancelAnimationFrame(a),window.removeEventListener("mousemove",d),window.removeEventListener("resize",u)}})),Object(b.jsx)("canvas",{id:"canvas1",className:"main-canvas"})}var x=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)(l.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(b.jsx)(l.a.Brand,{as:f.b,to:"/",children:"LHJ's Plugins"}),Object(b.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(h.a,{className:"mr-auto",children:[Object(b.jsx)(h.a.Link,{as:f.b,to:"/introduce",children:"Intro"}),Object(b.jsx)(h.a.Link,{as:f.b,to:"/plugins",children:"Plugins"}),Object(b.jsx)(d.a,{title:"Plugin Example",id:"collasible-nav-dropdown",children:Object(b.jsx)(d.a.Item,{as:f.b,to:"/plugins/scroll",children:"Scroll"})})]})})]}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(u.a,{children:Object(b.jsx)(g,{})})}),Object(b.jsx)(j.a,{path:"/introduce",children:Object(b.jsx)(u.a,{children:Object(b.jsxs)("section",{className:"main-content",children:[Object(b.jsx)("h1",{className:"title",children:"Intro"}),Object(b.jsx)("h2",{className:"sub-title"}),Object(b.jsx)("p",{className:"content"})]})})}),Object(b.jsx)(j.a,{exact:!0,path:"/plugins",children:Object(b.jsx)(u.a,{children:Object(b.jsxs)("section",{className:"main-content",children:[Object(b.jsx)("h1",{className:"title",children:"Plugins"}),Object(b.jsx)("h2",{className:"sub-title"}),Object(b.jsx)("p",{className:"content"})]})})}),Object(b.jsx)(j.a,{path:"/plugins/scroll",children:Object(b.jsx)(i.Suspense,{fallback:Object(b.jsx)("div",{children:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4."}),children:Object(b.jsx)(v,{})})})]})]})},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=function(e){e&&e instanceof Function&&t.e(5).then(t.bind(null,101)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),i(e),a(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f.a,{children:Object(b.jsx)(x,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-plugin-page",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-plugin-page","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(n,e)}))}}(),m()}},[[55,1,2]]]);
//# sourceMappingURL=main.2e84fc08.chunk.js.map