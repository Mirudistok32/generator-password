(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={displaypassword:"DisplayPassword_displaypassword__1Yzmb",displaypassword__symbols:"DisplayPassword_displaypassword__symbols__vs4rO",displaypassword__group:"DisplayPassword_displaypassword__group__lK3jZ",displaypassword__inputRange:"DisplayPassword_displaypassword__inputRange__7SJXP",displaypassword__inputDisplay:"DisplayPassword_displaypassword__inputDisplay__2Zhzk"}},function(e,t,a){e.exports={checkbox:"CheckboxCraft_checkbox__17iwN",checkbox__title:"CheckboxCraft_checkbox__title__3Xu5e",checkbox__input:"CheckboxCraft_checkbox__input__2DOPV","checkbox__input-craft":"CheckboxCraft_checkbox__input-craft__1LL_w"}},function(e,t,a){e.exports={displaysettings:"DisplaySettings_displaysettings__3RgSn",displaysettings__list:"DisplaySettings_displaysettings__list__1lMgp",displaysettings__checkbox:"DisplaySettings_displaysettings__checkbox__2bOsF"}},,,function(e,t,a){e.exports={wrap:"InputRange_wrap__-qkZ2",wrap__output:"InputRange_wrap__output__2UGRU",input:"InputRange_input__3DioZ"}},function(e,t,a){e.exports={app:"App_app__3XAcC",app__wrap:"App_app__wrap__1dlwQ",app__footer:"App_app__footer__g0zFs"}},,,,,,function(e,t,a){e.exports={btn:"Button_btn__3un9t"}},function(e,t,a){e.exports={input:"InputDisplay_input__37PjG"}},,function(e,t,a){e.exports={boxdisplay:"Boxdisplay_boxdisplay__2aI3F"}},function(e,t,a){e.exports={footer:"Footer_footer__HOPex"}},function(e,t,a){e.exports={title:"Title_title__1TqVk"}},,function(e,t,a){e.exports=a(37)},,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(6),r=a.n(c),o=a(2),i=a(21),l=a(7),p=a(39),u={checkBottons:[{title:"Letters",checked:!1,id:Object(p.a)()},{title:"Symbols",checked:!1,id:Object(p.a)()},{title:"Uppercase",checked:!1,id:Object(p.a)()},{title:"Lowercase",checked:!1,id:Object(p.a)()}],maxValue:107,inputValue:4},_=Object(l.b)({name:"password",initialState:u,reducers:{setValueAC:function(e,t){var a=t.payload;e.inputValue=a},setIsCheckedAC:function(e,t){var a=t.payload,n=e.checkBottons.find((function(e){return e.id===a.id}));n&&(n.checked=a.isChecked)}}}),d=_.actions,m=d.setValueAC,h=d.setIsCheckedAC,f=_.reducer,b=function(e){var t=[];e.map((function(e){return"Letters"===e.title&&e.checked?t.push(String.fromCharCode(Math.floor(52*Math.random())+65)):"Symbols"===e.title&&e.checked?t.push("!@#$%^&*(){}[]=<>/,."[Math.floor(Math.random()*"!@#$%^&*(){}[]=<>/,.".length)]):"Uppercase"===e.title&&e.checked?t.push(String.fromCharCode(Math.floor(26*Math.random())+65)):"Lowercase"===e.title&&e.checked?t.push(String.fromCharCode(Math.floor(26*Math.random())+97)):t.push(String.fromCharCode(Math.floor(10*Math.random())+48).toString()),e.id}));return t[Math.floor(Math.random()*t.length)]},y=a(15),k=a.n(y),g=s.a.memo((function(e){var t=e.title,a=e.children,n=e.onClick,c=function(e){n&&n(e)};return s.a.createElement("button",{className:k.a.btn,onClick:function(e){return c(e)}},a||t)})),w=a(16),x=a.n(w),C=s.a.memo((function(e){var t=e.className,a=e.onChange,n=e.value;return s.a.createElement("input",{className:x.a.input+"".concat(t?" "+t:""),type:"text",value:n,onChange:a})})),v=a(8),E=a.n(v),N=s.a.memo((function(e){var t=e.className,a=e.value,n=e.onChange,c=e.max,r=void 0===c?100:c,o=[E.a.wrap];return t&&o.push(t),s.a.createElement("div",{className:o.join(" ")},s.a.createElement("output",{className:E.a.wrap__output},a),s.a.createElement("input",{className:E.a.input,type:"range",min:"0",max:r,value:a,title:a.toString(),onChange:n}))})),O=a(3),j=a.n(O),M=a(17),S=a.n(M),D=s.a.memo((function(){for(var e=Object(o.b)(),t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],r=a[1],l=Object(o.c)((function(e){return e.passwordReducer.inputValue})),p=Object(o.c)((function(e){return e.passwordReducer.maxValue})),u=Object(o.c)((function(e){return e.passwordReducer.checkBottons})),_=[],d=0;d<l;d++)_.push(d);var h=Object(n.useMemo)((function(){return _.reduce((function(e,t){return e+b(u)}),"")}),[_,u]),f=Object(n.useCallback)((function(t){e(m(+t.currentTarget.value))}),[e]),y=Object(n.useCallback)((function(t){+t.currentTarget.value>p?e(m(p)):e(m(+t.currentTarget.value))}),[e,p]);return s.a.createElement("div",{className:j.a.displaypassword},s.a.createElement("div",{className:j.a.displaypassword__symbols},h),s.a.createElement("div",{className:j.a.displaypassword__group},s.a.createElement(C,{className:j.a.displaypassword__inputDisplay,value:l,onChange:y}),s.a.createElement(N,{className:j.a.displaypassword__inputRange,value:l,max:p,onChange:f}),s.a.createElement(S.a,{text:h},s.a.createElement(g,{title:"Copy"})),s.a.createElement(g,{title:"Generator",onClick:function(e){r(c+1)}})))})),R=a(4),P=a.n(R),V=s.a.memo((function(e){var t=e.className,a=e.title,n=e.disabled,c=e.checked,r=e.onChange;return s.a.createElement("label",{className:P.a.checkbox+"".concat(t?" "+t:"")},s.a.createElement("span",{className:P.a.checkbox__title},a),s.a.createElement("input",{className:P.a.checkbox__input,type:"checkbox",disabled:n,checked:c,onChange:r}),s.a.createElement("span",{className:P.a["checkbox__input-craft"]}))})),A=a(5),B=a.n(A),I=s.a.memo((function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.passwordReducer.checkBottons})),a=Object(n.useMemo)((function(){return t.map((function(t){return s.a.createElement("li",{key:t.id,className:B.a.displaysettings__element},s.a.createElement(V,{className:B.a.displaysettings__checkbox,title:t.title,checked:t.checked,onChange:function(a){e(h({isChecked:a.currentTarget.checked,id:t.id}))}}))}))}),[t,e]);return s.a.createElement("div",{className:B.a.displaysettings},s.a.createElement("ul",{className:B.a.displaysettings__list},a))})),L=a(18),T=a.n(L),z=function(){return s.a.createElement("div",{className:T.a.boxdisplay},s.a.createElement(D,null),s.a.createElement(I,null))},F=a(19),G=a.n(F),U=s.a.memo((function(e){var t=e.className;return s.a.createElement("div",{className:G.a.footer+"".concat(t?" "+t:"")},s.a.createElement("a",{href:"https://github.com/Mirudistok32",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"}))))})),Z=a(20),J=a.n(Z),X=s.a.memo((function(e){var t=e.title;return s.a.createElement("div",{className:J.a.title},t)})),q=a(9),$=a.n(q),H=function(){return s.a.createElement("div",{className:$.a.app},s.a.createElement("div",{className:$.a.app__wrap},s.a.createElement(X,{title:"Generator password"}),s.a.createElement(z,null)),s.a.createElement(U,{className:$.a.app__footer}))},K=(a(36),a(1)),Q=Object(K.c)({passwordReducer:f}),Y=Object(l.a)({reducer:Q});r.a.render(s.a.createElement(o.a,{store:Y},s.a.createElement(H,null)),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.685015fb.chunk.js.map