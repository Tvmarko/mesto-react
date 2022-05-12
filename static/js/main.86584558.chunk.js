(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),l=(a(5),a(12)),i=a(3),s=a(1),u=a(8),m=a.n(u);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:m.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f"}))},d=o.a.createContext(),_=a(9),f=a.n(_);var h=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,c=o.a.useContext(d),l=t.owner._id===c._id,i="elements__element-delete ".concat(l?"elements__element-delete_active":""),s=t.likes.some((function(e){return e._id===c._id})),u="elements__element-like ".concat(s?"elements__element-like_active":"");return o.a.createElement("div",{className:"elements__element"},o.a.createElement("div",{className:"elements__element-image"},o.a.createElement("img",{className:"elements__element-photo",src:"".concat(t.link),alt:"".concat(t.name),onClick:function(){a(t)}}),o.a.createElement("button",{className:i,onClick:function(){r(t)},type:"button"},o.a.createElement("img",{src:f.a,alt:"Delete"}))),o.a.createElement("div",{className:"elements__element-place"},o.a.createElement("h3",{className:"elements__element-title"},t.name),o.a.createElement("div",{className:"elements__element-like-container"},o.a.createElement("button",{className:u,onClick:function(){n(t)},type:"button","aria-label":"Like"}),o.a.createElement("span",{className:"elements__element-like-count"},t.likes.length))))};var b=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.onCardClick,c=e.cards,l=e.onCardLike,i=e.onCardDelete,s=o.a.useContext(d);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__info-container"},o.a.createElement("div",{className:"profile__avatar-container"},o.a.createElement("img",{className:"profile__avatar",src:s.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),o.a.createElement("div",{className:"profile__avatar-overlay"},o.a.createElement("button",{className:"profile__avatar-button",type:"button","aria-label":"Edit",onClick:n}))),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__info-title"},s.name),o.a.createElement("button",{className:"profile__edit-button",type:"button","aria-label":"Edit",onClick:t}),o.a.createElement("p",{className:"profile__info-subtitle"},s.about))),o.a.createElement("button",{className:"profile__add-button",type:"button","aria-label":"Add",onClick:a})),o.a.createElement("section",{className:"elements"},c.map((function(e){return o.a.createElement(h,{key:e._id,card:e,onCardClick:r,onCardLike:l,onCardDelete:i})}))))};var v=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa92021.\xa0Mesto Russia"))};var E=function(e){var t=e.title,a=e.name,n=e.buttonSubmitText,r=e.children,c=e.isOpen,l=e.onClose,i=e.onSubmit;return o.a.createElement("div",{className:"popup ".concat(c?"popup_opened":"")},o.a.createElement("div",{className:"popup__container popup__container_".concat(a)},o.a.createElement("h3",{className:"popup__title"},t),o.a.createElement("form",{className:"popup__form",name:"popup__form_".concat(a),onSubmit:i},r,o.a.createElement("button",{className:"popup__save-button",type:"submit"},n)),o.a.createElement("button",{className:"popup__close-button",type:"button","aria-label":"Close",onClick:l})))};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useState("name"),c=Object(s.a)(r,2),l=c[0],i=c[1],u=o.a.useState("about"),m=Object(s.a)(u,2),p=m[0],_=m[1],f=o.a.useContext(d);return o.a.useEffect((function(){i(f.name),_(f.about)}),[f]),o.a.createElement(E,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",buttonSubmitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:l,about:p})}},o.a.createElement("div",{className:"popup__form-field"},o.a.createElement("input",{className:"popup__input popup__input_name",id:"name",type:"text",name:"name",value:l,placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",required:!0,minLength:"2",maxLength:"40",onChange:function(e){i(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error name-error"})),o.a.createElement("div",{className:"popup__form-field"},o.a.createElement("input",{className:"popup__input popup__input_about",id:"about",type:"text",name:"about",value:p,placeholder:"\u0412\u0430\u0448 \u0440\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",required:!0,minLength:"2",maxLength:"200",onChange:function(e){_(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error about-error"})))};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef();return o.a.createElement(E,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",buttonSubmitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})}},o.a.createElement("div",{className:"popup__form-field"},o.a.createElement("input",{className:"popup__input popup__input_avatar",id:"avatar",type:"url",name:"avatar",ref:r,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),o.a.createElement("span",{className:"popup__input-error avatar-error"})))};var k=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=o.a.useState(""),c=Object(s.a)(r,2),l=c[0],i=c[1],u=o.a.useState(""),m=Object(s.a)(u,2),p=m[0],d=m[1];return o.a.useEffect((function(){i(""),d("")}),[t]),o.a.createElement(E,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",buttonSubmitText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:l,link:p})}},o.a.createElement("div",{className:"popup__form-field"},o.a.createElement("input",{className:"popup__input popup__input_place",id:"place",type:"text",name:"place",value:l,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",onChange:function(e){i(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error place-error"})),o.a.createElement("div",{className:"popup__form-field"},o.a.createElement("input",{className:"popup__input popup__input_image",id:"image",type:"url",name:"link",value:p,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){d(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error image-error"})))};var g=function(e){var t=e.card,a=e.onClose;return o.a.createElement("div",{className:"popup popup_image ".concat(t.link?"popup_opened":"")},o.a.createElement("div",{className:"popup__photo-container"},o.a.createElement("img",{className:"popup__photo",src:"".concat(t.link),alt:"".concat(t.name)}),o.a.createElement("p",{className:"popup__photo-caption"},t.name),o.a.createElement("button",{className:"popup__close-button popup__close-button_photo",type:"button","aria-label":"Close",onClick:a})))},y=a(10),O=a(11),S=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(y.a)(this,e),this._makeRequest=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))},this._baseUrl=a,this._headers=n}return Object(O.a)(e,[{key:"getProfileInfo",value:function(){return this._makeRequest("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"getInitialCards",value:function(){return this._makeRequest("".concat(this._baseUrl,"/cards"),{headers:this._headers})}},{key:"editProfile",value:function(e){return this._makeRequest("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"editAvatar",value:function(e){return this._makeRequest("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"addCard",value:function(e){return this._makeRequest("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return this._makeRequest("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers})}},{key:"handleLikeCardStatus",value:function(e,t){return this._makeRequest("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:t?"PUT":"DELETE",headers:this._headers})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"d47f770a-d44b-46ab-a4b8-15da85bd32ea","Content-Type":"application/json"}});var j=function(){var e=o.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(s.a)(r,2),u=c[0],m=c[1],_=o.a.useState(!1),f=Object(s.a)(_,2),h=f[0],E=f[1],y=o.a.useState({}),O=Object(s.a)(y,2),j=O[0],x=O[1],P=o.a.useState({}),U=Object(s.a)(P,2),L=U[0],q=U[1],A=o.a.useState([]),T=Object(s.a)(A,2),D=T[0],R=T[1];function w(){n(!1),E(!1),m(!1),x({})}return o.a.useEffect((function(){Promise.all([S.getProfileInfo(),S.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];q(a),R(n)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("div",{className:"page"},o.a.createElement(d.Provider,{value:L},o.a.createElement(p,null),o.a.createElement(b,{onEditProfile:function(){n(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){E(!0)},onCardClick:function(e){x(e)},cards:D,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===L._id}));S.handleLikeCardStatus(e._id,!t).then((function(t){R(D.map((function(a){return a._id===e._id?t:a})))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){S.deleteCard(e).then((function(){R(D.filter((function(t){return t._id!==e._id})))})).catch((function(e){console.log(e)}))}}),o.a.createElement(v,null),o.a.createElement(C,{isOpen:a,onClose:w,onUpdateUser:function(e){S.editProfile(e).then((function(e){q(Object(i.a)(Object(i.a)({},L),{},{name:e.name,about:e.about})),w()})).catch((function(e){console.log(e)}))}}),o.a.createElement(N,{isOpen:h,onClose:w,onUpdateAvatar:function(e){var t=e.avatar;S.editAvatar(t).then((function(e){q(Object(i.a)(Object(i.a)({},L),{},{avatar:e.avatar})),w()})).catch((function(e){console.log(e)}))}}),o.a.createElement(k,{isOpen:u,onClose:w,onAddPlace:function(e){S.addCard(e).then((function(e){R([e].concat(Object(l.a)(D))),w()})).catch((function(e){console.log(e)}))}}),o.a.createElement(g,{card:j,onClose:w})))};c.a.render(o.a.createElement(j,null),document.getElementById("root"))},5:function(e,t,a){},8:function(e,t,a){e.exports=a.p+"static/media/header-logo.400f7dde.svg"},9:function(e,t,a){e.exports=a.p+"static/media/delete-button.4831282e.svg"}},[[13,1,2]]]);
//# sourceMappingURL=main.86584558.chunk.js.map