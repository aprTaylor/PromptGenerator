(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,n){e.exports=n(466)},170:function(e,t,n){},172:function(e,t,n){},464:function(e,t){},466:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(26),i=n.n(a),s=(n(170),n(13)),c=n(6),l=n(7),h=n(12),u=n(10),p=n(11),m=n(8),d=(n(172),n(14));var b=function(e){if(void 0!=e){e=e.toLowerCase().split(" ");for(var t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")}};function f(){var e=Object(s.a)(["\n    & span {\n        color: ",";\n        font-family: 'Montez', cursive;\n        font-size: 5em;\n\n        &.amper{\n            font-family:  'Elsie', cursive;\n            font-size: 6em;\n            color: ",";\n        }\n    }\n"]);return f=function(){return e},e}var g=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{theme:this.props.theme,id:"promptContainer"},r.a.createElement("span",{id:"prompt1",className:"prompt"},b(this.props.prompt1)),r.a.createElement("span",{className:"prompt amper"},"&"),r.a.createElement("span",{id:"prompt2",className:"prompt"},b(this.props.prompt2)))}}]),t}(o.Component),v=d.a.div(f(),function(e){return e.theme.colors.text_prompt.toString()},function(e){return e.theme.colors.text_prompt.darken(20).toString()}),O=g,k=n(154);function y(){var e=Object(s.a)(["\n    color: ","\n"]);return y=function(){return e},e}var j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).createList=function(){for(var e=[],t=0;t<n.props.index;t+=2){e.push(r.a.createElement(w,{theme:n.props.theme,key:"list"+t},b(n.props.prompts[t])+", "+b(n.props.prompts[t+1])))}return e},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(k.slide,{styles:C(this.props.theme),bodyClassName:"my-class"},r.a.createElement("span",null," Used Prompts "),r.a.createElement("ul",{id:"oldPrompts"},this.createList()))}}]),t}(r.a.Component),w=d.a.li(y(),function(e){return e.theme.colors.text_menu.darken(10).toString()}),C=function(e){return{bmBurgerBars:{background:e.colors.menu.toString()},bmCross:{background:e.colors.text_menu.toString()},bmMenu:{background:e.colors.menu.toString()},bmMorphShape:{fill:e.colors.menu.toString()},bmItemList:{color:e.colors.text_menu.toString()},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}}},S=j,x=n(160),E=n(62),P=n.n(E),T=n(157),N=n.n(T),M=n(158),_=n.n(M),A=n(159),B=n.n(A),I=n(155),L=n.n(I),D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleCancel=function(){n.props.onClose()},n.handleOk=function(){n.props.onOk()},n.handleChange=function(e,t){n.setState({value:t})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(L.a,{maxWidth:"sm",onEntering:this.handleEntering,"aria-labelledby":"confirmation-dialog-title",open:this.props.open,className:"dialog"},r.a.createElement(N.a,{id:"confirmation-dialog-title"},"Are you sure you want to go to the next prompt?"),r.a.createElement(_.a,null,r.a.createElement("h4",null,"You wont be able to undo this!")),r.a.createElement(B.a,null,r.a.createElement(P.a,{onClick:this.handleCancel,color:"primary"},"Cancel"),r.a.createElement(P.a,{onClick:this.handleOk,color:"primary"},"Ok")))}}]),t}(r.a.Component);Object(x.withStyles)(function(e){return{root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},paper:{width:"80%",maxHeight:435,background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}})(D);function F(){var e=Object(s.a)(["\n        background-color: ","; \n        background-image: linear-gradient(",");    \n\n        &:after{\n            background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.2));\n        }\n\n        &:hover{\n            background: linear-gradient(",");    \n        }\n        color: ",";    \n"]);return F=function(){return e},e}var R=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(W,{theme:this.props.theme,className:"glass ".concat(this.props.outOfPrompts?"disabled":""),onClick:this.props.onClick,id:"button"},this.props.buttonText)}}]),t}(o.Component),W=d.a.span(F(),function(e){return e.theme.colors.text_prompt.toString()},function(e){var t=e.theme.colors.text_prompt;return"".concat(t.toString(),", ").concat(t.lighten().toString(40))},function(e){var t=e.theme.colors.text_prompt;return"".concat(t.lighten(10).toString(),", ").concat(t.lighten().toString(50))},function(e){return e.theme.colors.text_prompt.isLight()?"black":"white"}),z=R,U=n(161),J=n.n(U),Y=n(163),q=n(63),H=n(64),G=n(65),K=n(4),Z=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={input:{height:20,borderRadius:"5px",marginTop:"5px",border:"1px solid ".concat(this.props.hex),paddingLeft:10},label:{fontSize:"12px",color:"#999"}};return r.a.createElement("div",null,r.a.createElement(G.SliderPicker,{style:e,label:"hex",color:this.props.hex,onChangeComplete:this.props.onChangeComplete,onChange:this.props.onChange}),r.a.createElement(K.EditableInput,{style:{input:e.input},value:this.props.hex,onChangeComplete:this.props.onChangeComplete,onChange:this.props.onChange}))}}]),t}(r.a.Component),Q=Object(G.CustomPicker)(Z);function V(){var e=Object(s.a)(["\n    display: block;\n    margin-top: 20px;\n\n    & .color {\n      float: left;\n      width: 36px;\n      height: 14px;\n      borderRadius: 2px;\n      background: ","\n    }\n  \n    & .swatch {\n      padding: 5px;\n      background: #fff;\n      borderRadius: 1px;\n      boxShadow: 0 0 0 1px rgba(0,0,0,.1);\n      display: inline-block;\n      cursor: pointer;\n    }\n  \n    & .swatch-popover: {\n      display: block;\n  \n    }\n  \n    & .cover: {\n      position: fixed;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n    }\n\n    & label {\n        float: left;\n    }\n  "]);return V=function(){return e},e}var X=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){n.setState({displayColorPicker:!n.state.displayColorPicker})},n.handleClose=function(){n.setState({displayColorPicker:!1})},n.handleChange=function(e){n.props.onChange(n.props.colorName,e),n.setState({color:e.rgb})},n.state={displayColorPicker:!1,color:e.color},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement($,{color:this.state.color},this.props.label?r.a.createElement("label",null," ",this.props.label," "):null,r.a.createElement("div",{className:"swatch",onClick:this.handleClick},r.a.createElement("div",{className:"color"})),this.state.displayColorPicker?r.a.createElement("div",{className:"swatch-popover"},r.a.createElement("div",{className:"cover",onClick:this.handleClose}),r.a.createElement(Q,{color:this.state.color,onChange:this.handleChange,onCompleteChange:this.props.onCompleteChange})):null)}}]),t}(o.Component),$=d.a.div(V(),function(e){return"rgba(".concat(e.color.r,", ").concat(e.color.g,", ").concat(e.color.b,", ").concat(e.color.a,");")});function ee(){var e=Object(s.a)(["\n    \n  "]);return ee=function(){return e},e}var te=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).saveTheme=n.saveTheme.bind(Object(m.a)(Object(m.a)(n))),n.state={colors:{}},n.setColor=n.setColor.bind(Object(m.a)(Object(m.a)(n))),n.saveTheme=n.saveTheme.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"saveTheme",value:function(e){e.preventDefault(),this.props.handleSave(this.state.colors)}},{key:"setColor",value:function(e,t){this.setState({colors:Object(H.a)({},this.state.colors,Object(q.a)({},e,t))})}},{key:"render",value:function(){return r.a.createElement(ne,{onSubmit:this.saveTheme},Object.keys(this.props.theme.colors).map(function(e,t){return r.a.createElement(X,{label:"".concat(this.props.theme.colorLabels[e],": "),color:this.props.theme.colors[e].toRgb(),onChangeComplete:this.setColor,onChange:this.setColor,key:t,colorName:e})},this),r.a.createElement("input",{type:"submit",value:"Save"}))}}]),t}(r.a.Component),ne=d.a.form(ee()),oe=te;function re(){var e=Object(s.a)(["\n    & .Popover-body {\n      background: ",";\n      color: ",";\n      padding : 20px;\n    }\n\n    & .Popover-tip {\n      fill: ",";\n    }\n  "]);return re=function(){return e},e}function ae(){var e=Object(s.a)(["\n  cursor: pointer;\n  margin-right: 26px;\n\n  & svg {\n    height: 36px;\n    width: 36px;\n    fill: ",";\n  }\n "]);return ae=function(){return e},e}function ie(){var e=Object(s.a)(["\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: 26px;\n\n"]);return ie=function(){return e},e}var se=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={showMenu:!1,place:"below"},n.togglePopover=n.togglePopover.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"togglePopover",value:function(e){var t="boolean"===typeof e?e:!this.state.showMenu;this.setState({showMenu:t})}},{key:"render",value:function(){var e=this,t={isOpen:this.state.showMenu,place:this.state.place,onOuterAction:function(){return e.togglePopover(!1)},body:[r.a.createElement(oe,{handleSave:this.props.handleSave,theme:this.props.theme})]};return r.a.createElement(ce,{className:"ThemePickerMenu"},r.a.createElement(he,Object.assign({},t,{theme:this.props.theme}),r.a.createElement(le,{className:"themepicker-icon",onClick:this.togglePopover,theme:this.props.theme},r.a.createElement(Y.a,null))))}}]),t}(o.Component),ce=d.a.div(ie()),le=d.a.span(ae(),function(e){return e.theme.colors.menu.toString()}),he=Object(d.a)(J.a)(re(),function(e){return e.theme.colors.menu.toString()},function(e){return e.theme.colors.text_menu.toString()},function(e){return e.theme.colors.menu.toString()});function ue(){var e=Object(s.a)(["\n    position: relative;\n    top: 0;\n    width: 100%;\n    padding-bottom: 46px;\n    background: ",";\n"]);return ue=function(){return e},e}var pe=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(me,{theme:this.props.theme},r.a.createElement(S,{theme:this.props.theme,prompts:this.props.prompts,index:this.props.index}),r.a.createElement(se,{theme:this.props.theme,handleSave:this.props.handleSave}))}}]),t}(o.Component),me=d.a.div(ue(),function(e){return e.theme.colors.navbar.toString()}),de=pe,be=n(162),fe=n.n(be),ge=["wizard's staff","waterfall","zombies","sandcastle","fangs","tattoo","family crest","spaceship","mythical beast","spooky tree","alien","tropical cocktail","robot","dragons","tombstone","medieval goblet","king's throne","mermaid","vampire","witch's cauldron","tooth fairy","deep sea monster","magic carpet","sculpture","coral reef","wine bottle","statue of liberty","beauty","beast","elephant","mayan ruins","birds","camera","bowl of soup","breakfast","snack","lunch","dinner","flower base","ladder","full moon","bright sun","autumn","spring","summer","winter","butterfly","caterpillar","troll","roller skates","rain boots","weeds","flowers","bedroom","kitchen","dining room","bathroom","egg hatching","wrist watch","night","harvest","pond","raincoat","hat","water bottle","flashlight","top hat","sailboat","dandelion","earthworm","bank robber","policeman","superhero","villain","a view out a window","cactus","sunflowers","mosquito","spider web","star fish","flip flops","lawn chair","trampoline","pots and pans","sword","lighthouse","pie on a windowsill","houseplant","soldier","chimney","barbed wire","squirrel","hot sauce","chain","beehive","helicopter","hot dog","venus flytrap","stained glass","sphinx","skateboard","serenity","open book","werewolf","hourglass","tower","camel","cleopatra","Your favorite book character","Desert","Forest","Mountains","Ocean","Pumpkin seed","Pinecone","Octopus","Mannequin","Lollipop","Sticky","Footprints","Tractor","Slime","Island paradise","Sand dune","Archer","Your favorite outfit","Trophies","Fishing fly","Blackhole","Cyclops","Swan","Mirror","Microphone","Pretzels","Newspaper","Submarine","Scrambled eggs","Eel","Wave","Bike","Leather boots","Keys","Coffee cup","Self-portrait","Snake charmer","Playground","Sumo wrestler","Chrystal chandelier","Eight ball","Secrets","Treasure chest","Children's toy","Something sparkly","Penguin","Unicorn","Pirate","Tribal pattern","Suit of armor","Pinball machine","Erupting volcano","Seahorse","Ninja","Happy monster","Futuristic car","Three little pigs","Magic amulet","Yeti","Toolbox","Fish bones","Zipper","Carpenter","Handcuffs","Dollhouse","Mask","Telescope","Piano"],ve=n(33),Oe=n.n(ve),ke=function(){function e(){Object(c.a)(this,e),this._colors={navbar:Oe()("#835435"),menu:Oe()("#373A47"),text_menu:Oe()("#B8B7AD"),text_prompt:Oe()("#4D193C"),background:Oe()("#B8B7AD")},this.colorLabels={navbar:"Navbar",menu:"Menus",text_menu:"Menu Text",text_prompt:"Prompts",background:"Background"}}return Object(l.a)(e,[{key:"saveTheme",value:function(e){this.colors=e,localStorage.setItem("theme",JSON.stringify(this.getRgb()))}},{key:"loadTheme",value:function(){try{null!=localStorage.getItem("theme")&&(this.colors=JSON.parse(localStorage.getItem("theme")))}catch(e){return void console.error(e)}}},{key:"getRgb",value:function(){var e=this;return Object.keys(this._colors).reduce(function(t,n){return t[n]=e._colors[n].toRgb(),t},{})}},{key:"colors",set:function(e){var t=Object.keys(e).reduce(function(t,n){var o=e[n];return o.hasOwnProperty("hex")&&o.hasOwnProperty("source")?t[n]=Oe()(o.hex):t[n]=Oe()(o),t},{});this._colors=Object(H.a)({},this._colors,t)},get:function(){var e=this;return Object.keys(this._colors).reduce(function(t,n){return t[n]=e._colors[n].clone(),t},{})}}]),e}();function ye(){var e=Object(s.a)(["\n    background: ",";\n"]);return ye=function(){return e},e}var je=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).theme=new ke,n.theme.loadTheme(),n.state={seed:"",prompts:[],index:0,outOfPrompts:!1,dialogOpen:!1,colors:n.theme.colors},n.nextPrompt=n.nextPrompt.bind(Object(m.a)(Object(m.a)(n))),n.handleClose=n.handleClose.bind(Object(m.a)(Object(m.a)(n))),n.showDialog=n.showDialog.bind(Object(m.a)(Object(m.a)(n))),n.handleThemeSave=n.handleThemeSave.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("seed")||localStorage.setItem("seed",function(e,t){for(var n=Math.random()*(t-e)+e,o="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<n;a++)o+=r.charAt(Math.floor(Math.random()*r.length));return o}(5,10));var e=localStorage.getItem("seed"),t=parseInt(localStorage.getItem("index"));t&&this.setState({index:t}),this.setState({prompts:fe.a.shuffle(ge,e)})}},{key:"nextPrompt",value:function(){var e=this.state.index+2;e<ge.length-1?(this.setState({index:e}),localStorage.setItem("index",e)):this.setState({outOfPrompts:!0}),this.handleClose()}},{key:"showDialog",value:function(){this.setState({dialogOpen:!0})}},{key:"handleClose",value:function(){this.setState({dialogOpen:!1})}},{key:"handleThemeSave",value:function(e){this.theme.saveTheme(e),this.setState({colors:this.theme.colors})}},{key:"render",value:function(){var e=this.state.outOfPrompts?"No more prompts :(":"Next Prompt",t=this.state.index;return r.a.createElement(we,{theme:this.theme,className:"App"},r.a.createElement(de,{theme:this.theme,handleSave:this.handleThemeSave,prompts:this.state.prompts,index:this.state.index}),r.a.createElement(O,{theme:this.theme,prompt1:this.state.prompts[t],prompt2:this.state.prompts[t+1]}),r.a.createElement(z,{theme:this.theme,buttonText:e,outOfPrompts:this.state.outOfPrompts,onClick:this.nextPrompt}))}}]),t}(o.Component);var we=d.a.div(ye(),function(e){return e.theme.colors.background.toString()}),Ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Se(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(je,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/PromptGenerator",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/PromptGenerator","/service-worker.js");Ce?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Se(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Se(t,e)})}}()}},[[165,2,1]]]);
//# sourceMappingURL=main.7d5a00f9.chunk.js.map