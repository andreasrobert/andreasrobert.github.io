(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),i=n(6860),a=n(379),o=n(8206);e.exports=function(e){return r(e)||i(e)||a(e)||o()}},5963:function(e,t,n){"use strict";n.d(t,{a:function(){return r}});var r=[{id:0,name:"audiophile",image:"/assets/audiophileImg.webp",favicon:"/assets/audiophile.png",description:"A fullstack e-commerce website demo.",link:"https://ecommerce-audiophile.netlify.app",git:"https://github.com/andreasrobert/ecommerce-audiophile-client",tech:["Node js.","Jwt.","MongoDB.","GraphQL.","Next js.","React.","Styled Components.","TypeScript."]},{id:1,name:"galleria.",image:"/assets/theGallaImg.webp",favicon:"/assets/theGalla.ico",description:"An art gallary in the comfort of your own\u2026 where ever you are at the moment.",link:"https://thegalla.netlify.app",git:"https://github.com/andreasrobert/galleria-slideshow-site-chakra-ui",tech:["Next js.","React.","Chakra UI.","Framer Motion.","TypeScript."]},{id:2,name:"planetfacts",image:"/assets/planetfactsImg.webp",favicon:"/assets/planetfacts.ico",description:"Learn more about our solar system.",link:"https://planetfacts.netlify.app",git:"https://github.com/andreasrobert/planet-fact-nextjs",tech:["Next js.","React.","Styled Components.","Framer Motion.","TypeScript."]},{id:3,name:"ip tracker",image:"/assets/ipTrackerImg.webp",favicon:"/assets/ipTracker.png",description:"Track the location of an ip address.",link:"https://ip-address-tracker23.netlify.app",git:"https://github.com/andreasrobert/ip-address-tracker",tech:["Leaflet API.","IP Geolocation API.","JavaScript.","CSS.","HTML."]},{id:4,name:"todo or not todo",image:"/assets/todoImg.webp",favicon:"/assets/todo.png",description:"the classic todo app that includes a dark/light theme and drag & drop reordering.",link:"https://todo-or-not-todo23.netlify.app",git:"https://github.com/andreasrobert/todo-app-react-dnd",tech:["React.","Styled Components.","TypeScript."]},{id:5,name:"shorttheurl",image:"/assets/shortUrlImg.webp",favicon:"/assets/shortUrl.png",description:"A web app to shorten a url.",link:"https://shorttheurl.netlify.app",git:"https://github.com/andreasrobert/url-shortening-api-react",tech:["Shrtcode API.","React.","Styled Components.","TypeScript."]},{id:6,name:"bow and arrow... and dogs",image:"/assets/bowImg.webp",favicon:"/assets/bowImg.webp",description:"A 2D game.",link:"https://andreas-robert.itch.io/bow-and-arrow-and-dogs",git:"https://github.com/andreasrobert",tech:["Unity.","C#."]},{id:7,name:"tip calculator",image:"/assets/tipCalcImg.webp",favicon:"/assets/tipCalc.png",description:"Calculators. Because we all have to start somewhere. Spliting the bill with friends has never been easier.",link:"https://tipcalculator23.netlify.app",git:"https://github.com/andreasrobert/tip-calculator-app-react",tech:["React.","Styled Components.","TypeScript."]},{id:8,name:"calculator",image:"/assets/calcImg.webp",favicon:"/assets/calc.png",description:"A three themed calculator app.",link:"https://themed-calc.netlify.app",git:"https://github.com/andreasrobert/calculator-app-main",tech:["JavaScript.","CSS.","HTML."]}]},6303:function(e,t,n){"use strict";var r=n(5893),i=n(4096),a=n(8017),o=n(336),s=n(9629),p=n(7294);t.Z=function(e){var t=e.order%2===0,n=(0,p.useState)(!1),s=n[0],x=n[1],b=(0,p.useState)(!1),h=b[0],m=b[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.k,{id:"project",w:"100%",justifyContent:"center",flexDirection:t?"row":"row-reverse",my:{tm:"-93px",lg:"-140px"},px:{lg:"40px"},children:[(0,r.jsxs)(i.k,{w:{base:"90%",tm:"40%",lg:"400px"},flexDirection:"column",p:"30px",alignItems:"center",justifyContent:"space-between",minH:"500px",bg:"white",my:"50px",borderRadius:"12px",border:"3px solid",boxShadow:" black 3px 3px, black 7px 7px, black 10px 10px",pos:"relative",onMouseOver:function(){return x(!0)},onMouseOut:function(){return x(!1)},children:[(0,r.jsxs)(a.xu,{w:"100%",children:[(0,r.jsx)(i.k,{w:"100%",h:{base:"47vw",tm:"20vw",lg:"214px"},border:"2px solid black",boxShadow:" black 2px 2px, black 4px 4px, black 5px 4px",borderRadius:"10px",justifyContent:"center",alignItems:"center",children:(0,r.jsx)(a.xu,{borderRadius:"8px",border:"1.5px solid white",w:"100%",h:"100%",bgImage:e.data.image,bgSize:"cover",bgPosition:"center",bgRepeat:"no-repeat",cursor:"pointer"})}),(0,r.jsxs)(i.k,{w:"100%",mt:"18px",alignItems:"center",children:[(0,r.jsx)(a.xu,{border:"1px solid",w:"40px",h:"40px",borderRadius:"50%",bgImage:e.data.favicon,bgSize:"cover",bgPosition:"center",bgRepeat:"no-repeat",alignSelf:"flex-start",mr:"17px"}),(0,r.jsx)(o.X,{w:{base:"75%",ts:"250px",tm:"75%",lg:"250px"},size:"H3",children:e.data.name})]}),(0,r.jsx)(o.X,{mt:"20px",size:"SubH1",w:"100%",children:e.data.description})]}),(0,r.jsxs)(i.k,{w:"100%",justifySelf:"end",mb:"-5px",mt:"40px",justifyContent:"flex-end",children:[(0,r.jsx)("a",{href:e.data.git,children:(0,r.jsx)(a.xu,{w:"40px",h:"40px",bgImage:"/github.svg",bgPosition:"center",bgRepeat:"no-repeat",borderRadius:"10px",border:"2px solid black",cursor:"pointer",_hover:{boxShadow:"rgba(3, 27, 241, 0.17) 0px -23px 25px 0px inset, rgba(88, 2, 248, 0.15) 0px -36px 30px 0px inset, rgba(252, 0, 126, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px"}})}),(0,r.jsx)("a",{href:e.data.link,children:(0,r.jsx)(a.xu,{w:"40px",h:"40px",bgImage:"/external-link.svg",bgPosition:"center",bgRepeat:"no-repeat",ml:"10px",borderRadius:"10px",border:"2px solid black",cursor:"pointer",_hover:{boxShadow:"rgba(241, 3, 3, 0.17) 0px -23px 25px 0px inset, rgba(88, 2, 248, 0.15) 0px -36px 30px 0px inset, rgba(252, 0, 126, 0.1) 0px -79px 40px 0px inset, rgba(0, 174, 255, 0.06) 0px 2px 1px, rgba(255, 0, 0, 0.09) 0px 4px 2px"}})})]}),t?(0,r.jsx)(c,{variants:l,initial:"hidden",animate:s?"visible":"exit",pos:{base:"absolute"},w:"59%",h:"100%",textAlign:{base:"center",tm:"end"},borderTop:"1px solid black",top:{tm:"205px",sm:"188px",lg:"301px"},right:{tm:"-70%"},pointerEvents:"none",d:{base:"none",tb:"inline"},children:e.data.tech.map((function(t){return(0,r.jsx)(o.X,{size:"SubH2",children:t},"".concat(e.data.id," ").concat(t))}))}):(0,r.jsx)(c,{variants:d,initial:"hidden",animate:s?"visible":"exit",pos:{base:"absolute"},w:"59%",h:"100%",textAlign:{base:"center",tm:"start"},borderTop:"1px solid black",top:{tm:"205px",sm:"188px",lg:"301px"},left:{tm:"-70%"},pointerEvents:"none",d:{base:"none",tb:"inline"},children:e.data.tech.map((function(t){return(0,r.jsx)(o.X,{size:"SubH2",children:t},"".concat(e.data.id," ").concat(t))}))}),(0,r.jsxs)(c,{variants:u,initial:"visible",animate:"visible",pos:{base:"relative"},w:"90%",h:"100%",mt:"30px",textAlign:{base:"center"},d:{base:"flex",tb:"none"},flexDirection:"column",justifyContent:"center",alignItems:"center",borderTop:"1px solid black",zIndex:"3",children:[(0,r.jsx)(a.xu,{pos:"absolute",left:"0",w:"25px",h:"25px",borderRadius:"50%",border:"1px solid black",justifyContent:"center",alignItems:"center",top:"4px",textAlign:"center",color:"black",fontWeight:"500",fontFamily:"Poppins",d:h?"inline":"none",onClick:function(){return m(!1)},cursor:"pointer",children:"-"}),e.data.tech.map((function(t){if(h)return(0,r.jsx)(o.X,{size:"SubH2",children:t},"".concat(e.data.id," ").concat(t))})),(0,r.jsx)(a.xu,{pos:"relative",w:"25px",h:"25px",borderRadius:"50%",border:"1px solid black",justifyContent:"center",alignItems:"center",top:"4px",textAlign:"center",color:"black",fontWeight:"500",fontFamily:"Poppins",d:h?"none":"inline",onClick:function(){return m(!0)},cursor:"pointer",children:"+"})]})]}),(0,r.jsx)(a.xu,{w:{tm:"380px",tb:"552px",lg:"850px"},flexShrink:105,d:{base:"none",tm:"inline"}})]})})};var c=(0,s.E)(a.xu),l={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:.3}},exit:{opacity:0,x:-50,transition:{delay:1,duration:.3}}},d={hidden:{opacity:0,x:50},visible:{opacity:1,x:0,transition:{duration:.3}},exit:{opacity:0,x:50,transition:{delay:1,duration:.3}}},u={hidden:{opacity:0},visible:{opacity:1,x:0,transition:{duration:.3}},exit:{opacity:0,transition:{duration:.3}}}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(a.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3398);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,a=e.hasQuery,o=void 0!==a&&a;return n||i&&o}},2775:function(e,t,n){"use strict";var r=n(9713);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(a=n(3244))&&a.__esModule?a:{default:a},p=n(3398),c=n(1165),l=n(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function x(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var b=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(x,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var a=!0,o=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){o=!0;var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var p=0,c=b.length;p<c;p++){var l=b[p];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=i.props[l],u=r[l]||new Set;"name"===l&&o||!u.has(d)?(u.add(d),r[l]=u):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,n=(0,o.useContext)(p.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=m},3244:function(e,t,n){"use strict";var r=n(319),i=n(4575),a=n(3913),o=(n(1506),n(2205)),s=n(8585),p=n(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var i=p(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),d=function(e){o(n,e);var t=c(n);function n(e){var a;return i(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},2562:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h},MotionBox:function(){return m}});var r=n(5893),i=n(980),a=n(3850),o=n(4096),s=n(336),p=n(8017),c=n(5724),l=n(6303),d=n(5963),u=n(7294),x=n(9629),b=n(9008);function h(){(0,c.G)("/ExternalScript2.js");var e=(0,u.useState)(!1),t=e[0],n=e[1],x=(0,i.useToast)(),h=0;fetch("https://ecommerce-audiophile.herokuapp.com/",{method:"GET"});var y=function(e){var t;null===(t=document.getElementById("".concat(e)))||void 0===t||t.scrollIntoView({behavior:"smooth"})},w=function(){n((function(e){return!e}))};return(0,r.jsxs)(a.W,{id:"home",pos:"absolute",minW:"100%",maxW:"100%",minH:"100%",maxH:"100%",p:"0",d:"flex",flexDirection:"column",alignItems:"center",children:[(0,r.jsxs)(b.default,{children:[(0,r.jsx)("title",{children:"Robert Pitoy"}),(0,r.jsx)("meta",{name:"title",property:"og:title",content:"Robert Pitoy"}),(0,r.jsx)("meta",{property:"og:type",content:"Website"}),(0,r.jsx)("meta",{name:"image",property:"og:image",content:"https://res.cloudinary.com/img23/image/upload/v1628459830/homepage_einqkh.png"}),(0,r.jsx)("meta",{name:"description",property:"og:description",content:"Robert Pitoy is a software engineer based in Jakarta"}),(0,r.jsx)("meta",{name:"author",content:"Robert Pitoy"})]}),(0,r.jsx)("canvas",{style:{margin:"0",width:"100%",minWidth:"100vw",height:"100%",minHeight:"100%",position:"fixed",top:"0",left:"0",display:"block",zIndex:-1}}),(0,r.jsxs)(o.k,{alignItems:"center",w:"100%",justifyContent:"center",mt:t?"30vh":"45vh",mb:"48vh",children:[(0,r.jsxs)(m,{maxW:"800px",pos:"relative",w:"calc(100% - 32px)",variants:g,initial:"hidden",animate:"visible",d:{base:"inline",md:"none"},children:[(0,r.jsx)(s.X,{size:"H1",children:"Robert P."}),(0,r.jsxs)(o.k,{w:"100%",mt:"-10px",mb:"10px",children:[(0,r.jsx)(s.X,{size:"SubH2",cursor:"pointer",onClick:function(){return w()},children:t?"view less.":"show more."}),(0,r.jsx)(s.X,{mx:"20px",size:"SubH2",cursor:"pointer",onClick:function(){return y("project")},children:"project."}),(0,r.jsx)(s.X,{size:"SubH2",cursor:"pointer",onClick:function(){return y("contact")},children:"contact."})]}),(0,r.jsx)(s.X,{mt:"-4px",size:"SubH1",maxW:"450px",children:t?"Hi \ud83d\udc4b My name is Andreas Robert Pitoy, call me Robert. I'm a full stack developer, currently trying to improve my backend while also pursuing a degree in informatics (it's essentially computer science).":"Software developer based in Jakarta"}),(0,r.jsx)(s.X,{size:"SubH1",mt:"30px",d:t?"block":"none",children:"tldr: Hi, call me Robert."})]},"".concat(t," mobile")),(0,r.jsxs)(m,{maxW:"800px",pos:"relative",w:"calc(100% - 32px)",variants:f,initial:"hidden",animate:"visible",d:{base:"none",md:"inline"},children:[(0,r.jsx)(s.X,{size:"H1",children:"Robert P."}),(0,r.jsxs)(o.k,{w:"100%",mt:"-10px",mb:"10px",children:[(0,r.jsx)(s.X,{size:"SubH2",cursor:"pointer",onClick:function(){return w()},children:t?"view less.":"show more."}),(0,r.jsx)(s.X,{mx:"20px",size:"SubH2",cursor:"pointer",onClick:function(){return y("project")},children:"project."}),(0,r.jsx)(s.X,{size:"SubH2",cursor:"pointer",onClick:function(){return y("contact")},children:"contact."})]}),(0,r.jsx)(s.X,{mt:"-4px",size:"SubH1",maxW:"450px",children:t?"Hi \ud83d\udc4b My name is Andreas Robert Pitoy, call me Robert. I'm a full stack developer, currently trying to improve my backend while also pursuing a degree in informatics (it's essentially computer science).":"Software developer based in Jakarta"}),(0,r.jsx)(s.X,{size:"SubH1",mt:"30px",d:t?"block":"none",children:"tldr: Hi, call me Robert."})]},"".concat(t))]}),d.a.map((function(e){return h+=1,(0,r.jsx)(l.Z,{order:h,data:e},e.id)})),(0,r.jsxs)(o.k,{id:"contact",mt:{base:"220px",mb:"70px",tm:"150px",sm:"270px"},mb:"159px",pb:"200px",alignItems:"center",flexDirection:{base:"column",mb:"row"},children:[(0,r.jsx)(p.xu,{w:"180px",h:"180px",bg:"rgba(0, 0, 0, 0.100)",pl:"10px",pt:"10px",border:"4px solid black",mt:{base:"-170px",mb:"0px"},mb:{base:"20px",mb:"0px"},borderRadius:"50px",boxShadow:" black 3px 3px, black 7px 7px",cursor:"pointer",onClick:function(){return y("home")},children:(0,r.jsx)(m,{w:"150px",h:"150px",bgImage:"/hand.png",zIndex:"4",bgPosition:"center",bgRepeat:"no-repeat",bgSize:"contain",variants:v,animate:"waving"})}),(0,r.jsxs)(o.k,{flexDirection:"column",h:"100%",mt:"15px",ml:"25px",children:[(0,r.jsxs)(o.k,{children:[(0,r.jsx)("a",{href:"https://github.com/andreasrobert",children:(0,r.jsx)(p.xu,{w:"35px",h:"35px",mt:"-5px",mx:"5px",bgImage:"/github.svg",bgPosition:"center",bgRepeat:"no-repeat",borderRadius:"10px",border:"2px solid black",cursor:"pointer",_hover:{boxShadow:"rgba(3, 27, 241, 0.17) 0px -23px 25px 0px inset, rgba(88, 2, 248, 0.15) 0px -36px 30px 0px inset, rgba(252, 0, 126, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px"}})}),(0,r.jsx)(s.X,{size:"SubH1",children:"Github"})]}),(0,r.jsxs)(o.k,{my:"15px",children:[(0,r.jsx)("a",{href:"https://www.linkedin.com/in/andreas-pitoy-394b161a4/",children:(0,r.jsx)(p.xu,{w:"35px",h:"35px",mt:"-5px",mx:"5px",bgImage:"/linkedin.svg",bgPosition:"center",bgRepeat:"no-repeat",borderRadius:"10px",border:"2px solid black",cursor:"pointer",_hover:{boxShadow:"rgba(3, 233, 241, 0.17) 0px -23px 25px 0px inset, rgba(2, 240, 248, 0.15) 0px -36px 30px 0px inset, rgba(0, 223, 252, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px"}})}),(0,r.jsx)(s.X,{size:"SubH1",children:"Linkedin"})]}),(0,r.jsxs)(o.k,{children:[(0,r.jsx)(p.xu,{w:"35px",h:"35px",mt:"-5px",mx:"5px",bgImage:"/mail.svg",bgPosition:"center",bgRepeat:"no-repeat",borderRadius:"10px",border:"2px solid black",cursor:"pointer",_hover:{boxShadow:"rgba(241, 3, 3, 0.17) 0px -23px 25px 0px inset, rgba(248, 2, 2, 0.15) 0px -36px 30px 0px inset, rgba(252, 0, 126, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px"},onClick:function(){navigator.clipboard.writeText("andreasrobb23@gmail.com"),x({title:"Email copied to clipboard.",description:"Hope to hear from you soon!",status:"success",duration:8e3,isClosable:!0})}}),(0,r.jsx)(s.X,{size:"SubH1",children:"andreasrobb23@gmail.com"})]})]})]})]})}var m=(0,x.E)(p.xu),f={hidden:{opacity:0,x:50,filter:"blur(8px)"},visible:{opacity:1,x:0,transition:{duration:1.5},filter:"blur(0px)"}},g={hidden:{opacity:0,filter:"blur(8px)"},visible:{opacity:1,transition:{duration:1.5},filter:"blur(0px)"}},v={waving:{rotate:[-35,-10,-35,0],transition:{rotate:{yoyo:"Infinity",duration:3.4}}}}},5724:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n(7294);function i(e){var t=(0,r.useState)(e?"loading":"idle"),n=t[0],i=t[1];return(0,r.useEffect)((function(){if(e){var t=document.querySelector('script[src="'.concat(e,'"]'));if(t)console.log("Using existing script with status: ".concat(t.getAttribute("data-status"))),i(t.getAttribute("data-status"));else{console.log("Creating script: ".concat(e)),(t=document.createElement("script")).src=e,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t);var n=function(e){t.setAttribute("data-status","load"===e.type?"ready":"error")};t.addEventListener("load",n),t.addEventListener("error",n)}var r=function(e){i("load"===e.type?"ready":"error")};return t.addEventListener("load",r),t.addEventListener("error",r),function(){t&&(t.removeEventListener("load",r),t.removeEventListener("error",r))}}i("idle")}),[e]),n}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2562)}])},9008:function(e,t,n){e.exports=n(2775)}},function(e){e.O(0,[774,565,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);