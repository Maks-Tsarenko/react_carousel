(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(7),i=n.n(a),s=n(2),c=n(3),r=n(5),l=n(4),o=n(1),p=n.n(o),u=(n(12),n(13),n(0)),m=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={position:0},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.images,a=e.itemWidth,i=e.frameSize,s=e.step,c=e.animationDuration,r=e.infinite,l=this.state.position,o=-(n.length*a-i*a);return Object(u.jsxs)("div",{className:"Carousel",style:{width:a*i},children:[Object(u.jsx)("div",{className:"Container",style:{border:"2px solid grey",borderRadius:"70px"},children:Object(u.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(l,"px)"),transition:"".concat(c,"ms")},children:n.map((function(t,e){return Object(u.jsx)("li",{children:Object(u.jsx)("img",{src:t,alt:"".concat(e+1),width:a})},t)}))})}),Object(u.jsxs)("div",{className:"Carousel__buttons",children:[Object(u.jsx)("button",{className:"Carousel__button Carousel__button-left ",type:"button",onClick:function(){var e=l+a*s;!r||l?t.setState({position:Math.min(e,0)}):t.setState({position:o})},disabled:!r&&0===l}),Object(u.jsx)("button",{"data-cy":"next",className:" Carousel__button Carousel__button-right",type:"button",onClick:function(){var e=l-a*s;r&&l===o?t.setState({position:0}):t.setState({position:Math.max(e,o)})},disabled:!r&&l===o})]})]})}}]),n}(o.Component),b=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,a=e.itemWidth,i=e.frameSize,s=e.step,c=e.animationDuration,r=e.infinite;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(n.length," images")}),Object(u.jsxs)("div",{className:"App__inputs",children:[Object(u.jsxs)("label",{htmlFor:"itemWidthInput",className:"App__label",children:["Item width",Object(u.jsx)("input",{className:"App__input",type:"number",id:"itemWidthInput",value:a,min:100,max:230,step:10,onChange:function(e){t.setState({itemWidth:+e.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"frameSizeInput",className:"App__label",children:["Frame size",Object(u.jsx)("input",{className:"App__input",type:"number",id:"frameSizeInput",value:i,min:1,max:10,onChange:function(e){t.setState({frameSize:+e.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"stepInput",className:"App__label",children:["Step",Object(u.jsx)("input",{className:"App__input",type:"number",id:"stepInput",value:s,min:1,max:9,onChange:function(e){t.setState({step:+e.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"animationDurationInput",className:"App__label",children:["Animation Duration",Object(u.jsx)("input",{className:"App__input",type:"number",id:"animationDurationInput",value:c,step:100,onChange:function(e){t.setState({animationDuration:+e.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"infiniteInput",className:"App__label",children:["Infinite",Object(u.jsx)("input",{className:"App__input",type:"checkbox",id:"infiniteInput",checked:r,onChange:function(e){t.setState({infinite:e.currentTarget.checked})}})]})]}),Object(u.jsx)(m,{images:n,itemWidth:a,frameSize:i,step:s,animationDuration:c,infinite:r})]})}}]),n}(p.a.Component),h=b;i.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fd72189b.chunk.js.map