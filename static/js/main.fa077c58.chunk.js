(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={displaypassword:"DisplayPassword_displaypassword__1Yzmb",displaypassword__symbols:"DisplayPassword_displaypassword__symbols__vs4rO",displaypassword__group:"DisplayPassword_displaypassword__group__lK3jZ",displaypassword__inputRange:"DisplayPassword_displaypassword__inputRange__7SJXP",displaypassword__inputDisplay:"DisplayPassword_displaypassword__inputDisplay__2Zhzk"}},function(e,t,a){e.exports={checkbox:"CheckboxCraft_checkbox__17iwN",checkbox__title:"CheckboxCraft_checkbox__title__3Xu5e",checkbox__input:"CheckboxCraft_checkbox__input__2DOPV","checkbox__input-craft":"CheckboxCraft_checkbox__input-craft__1LL_w"}},function(e,t,a){e.exports={displaysettings:"DisplaySettings_displaysettings__3RgSn",displaysettings__list:"DisplaySettings_displaysettings__list__1lMgp",displaysettings__checkbox:"DisplaySettings_displaysettings__checkbox__2bOsF"}},,,function(e,t,a){e.exports={wrap:"InputRange_wrap__-qkZ2",wrap__output:"InputRange_wrap__output__2UGRU",input:"InputRange_input__3DioZ"}},,,,,,function(e,t,a){e.exports={btn:"Button_btn__3un9t"}},function(e,t,a){e.exports={input:"InputDisplay_input__37PjG"}},,function(e,t,a){e.exports={boxdisplay:"Boxdisplay_boxdisplay__2aI3F"}},function(e,t,a){e.exports={title:"Title_title__1TqVk"}},function(e,t,a){e.exports={app:"App_app__3XAcC"}},,function(e,t,a){e.exports=a(36)},,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(6),r=a.n(s),i=a(2),o=a(20),l=a(7),u=a(38),p={checkBottons:[{title:"Numbers",checked:!0,id:Object(u.a)()},{title:"Letters",checked:!1,id:Object(u.a)()},{title:"Symbols",checked:!1,id:Object(u.a)()},{title:"Uppercase",checked:!1,id:Object(u.a)()},{title:"Lowercase",checked:!1,id:Object(u.a)()}],maxValue:107,inputValue:4},d=Object(l.b)({name:"password",initialState:p,reducers:{setValueAC:function(e,t){var a=t.payload;e.inputValue=a},setIsCheckedAC:function(e,t){var a=t.payload,n=e.checkBottons.find((function(e){return e.id===a.id}));n&&(n.checked=a.isChecked)}}}),_=d.actions,m=_.setValueAC,h=_.setIsCheckedAC,b=d.reducer,f=function(e){var t=[];e.map((function(e){return"Numbers"===e.title&&e.checked?t.push(String.fromCharCode(Math.floor(10*Math.random())+48).toString()):"Letters"===e.title&&e.checked?t.push(String.fromCharCode(Math.floor(52*Math.random())+65)):"Symbols"===e.title&&e.checked?t.push("!@#$%^&*(){}[]=<>/,."[Math.floor(Math.random()*"!@#$%^&*(){}[]=<>/,.".length)]):"Uppercase"===e.title&&e.checked?t.push(String.fromCharCode(Math.floor(26*Math.random())+65)):"Lowercase"===e.title&&e.checked&&t.push(String.fromCharCode(Math.floor(26*Math.random())+97)),e.id}));return t[Math.floor(Math.random()*t.length)]},y=a(14),k=a.n(y),g=c.a.memo((function(e){var t=e.title,a=e.children,n=e.onClick,s=function(e){n&&n(e)};return c.a.createElement("button",{className:k.a.btn,onClick:function(e){return s(e)}},a||t)})),x=a(15),C=a.n(x),w=c.a.memo((function(e){var t=e.className,a=e.onChange,n=e.value;return c.a.createElement("input",{className:C.a.input+"".concat(t?" "+t:""),type:"text",value:n,onChange:a})})),v=a(8),E=a.n(v),N=c.a.memo((function(e){var t=e.className,a=e.value,n=e.onChange,s=e.max,r=void 0===s?100:s,i=[E.a.wrap];return t&&i.push(t),c.a.createElement("div",{className:i.join(" ")},c.a.createElement("output",{className:E.a.wrap__output},a),c.a.createElement("input",{className:E.a.input,type:"range",min:"0",max:r,value:a,title:a.toString(),onChange:n}))})),j=a(3),O=a.n(j),M=a(16),S=a.n(M),D=c.a.memo((function(){for(var e=Object(i.b)(),t=Object(n.useState)(0),a=Object(o.a)(t,2),s=a[0],r=a[1],l=Object(i.c)((function(e){return e.passwordReducer.inputValue})),u=Object(i.c)((function(e){return e.passwordReducer.maxValue})),p=Object(i.c)((function(e){return e.passwordReducer.checkBottons})),d=[],_=0;_<l;_++)d.push(_);var h=Object(n.useMemo)((function(){return d.reduce((function(e,t){return e+f(p)}),"")}),[d,p]),b=Object(n.useCallback)((function(t){e(m(+t.currentTarget.value))}),[e]),y=Object(n.useCallback)((function(t){+t.currentTarget.value>u?e(m(u)):e(m(+t.currentTarget.value))}),[e,u]);return c.a.createElement("div",{className:O.a.displaypassword},c.a.createElement("div",{className:O.a.displaypassword__symbols},h),c.a.createElement("div",{className:O.a.displaypassword__group},c.a.createElement(w,{className:O.a.displaypassword__inputDisplay,value:l,onChange:y}),c.a.createElement(N,{className:O.a.displaypassword__inputRange,value:l,max:u,onChange:b}),c.a.createElement(S.a,{text:h},c.a.createElement(g,{title:"Copy"})),c.a.createElement(g,{title:"Generator",onClick:function(e){r(s+1)}})))})),R=a(4),V=a.n(R),I=c.a.memo((function(e){var t=e.className,a=e.title,n=e.disabled,s=e.checked,r=e.onChange;return c.a.createElement("label",{className:V.a.checkbox+"".concat(t?" "+t:"")},c.a.createElement("span",{className:V.a.checkbox__title},a),c.a.createElement("input",{className:V.a.checkbox__input,type:"checkbox",disabled:n,checked:s,onChange:r}),c.a.createElement("span",{className:V.a["checkbox__input-craft"]}))})),P=a(5),B=a.n(P),A=c.a.memo((function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.passwordReducer.checkBottons})),a=Object(n.useMemo)((function(){return t.map((function(t){return c.a.createElement("li",{key:t.id,className:B.a.displaysettings__element},c.a.createElement(I,{title:t.title,checked:t.checked,onChange:function(a){e(h({isChecked:a.currentTarget.checked,id:t.id}))},className:B.a.displaysettings__checkbox}))}))}),[t,e]);return c.a.createElement("div",{className:B.a.displaysettings},c.a.createElement("ul",{className:B.a.displaysettings__list},a))})),L=a(17),T=a.n(L),G=function(){return c.a.createElement("div",{className:T.a.boxdisplay},c.a.createElement(D,null),c.a.createElement(A,null))},U=a(18),Z=a.n(U),J=c.a.memo((function(e){var t=e.title;return c.a.createElement("div",{className:Z.a.title},t)})),X=a(19),q=a.n(X),z=function(){return c.a.createElement("div",{className:q.a.app},c.a.createElement(J,{title:"Generator password"}),c.a.createElement(G,null))},F=(a(35),a(1)),$=Object(F.c)({passwordReducer:b}),K=Object(l.a)({reducer:$});r.a.render(c.a.createElement(i.a,{store:K},c.a.createElement(z,null)),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.fa077c58.chunk.js.map