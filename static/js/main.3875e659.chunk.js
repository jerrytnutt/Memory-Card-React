(this.webpackJsonpmemorycard=this.webpackJsonpmemorycard||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),r=c(4),n=c.n(r),s=(c(9),c(2)),d=(c(10),c(0)),j=function(e){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"image",children:[" ",Object(d.jsx)("h1",{children:"Memory Card Game"}),Object(d.jsx)("a",{href:"https://github.com/jerrytnutt",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("div",{className:"gitImg"})})]}),Object(d.jsx)("p",{className:"rules",children:"Don't click the same picture twice. Beat your High Score!"}),Object(d.jsxs)("div",{children:["High Score: ",Object(d.jsx)("p",{className:"score",children:e.highScore})]}),Object(d.jsxs)("div",{children:["Current Score: ",Object(d.jsx)("p",{className:"score",children:e.currentScore})]})]})},o=[{id:1,img:c.p+"static/media/backShip.61c86299.jpg"},{id:2,img:c.p+"static/media/earth.916bb8b6.jpg"},{id:3,img:c.p+"static/media/earthOverView.d0aed16e.jpg"},{id:4,img:c.p+"static/media/farView.12918835.jpg"},{id:5,img:c.p+"static/media/liftOff.11186c0d.jpg"},{id:6,img:c.p+"static/media/moonCraft.51b7c772.jpg"},{id:7,img:c.p+"static/media/moonEarthView.07715d34.jpg"},{id:8,img:c.p+"static/media/moonFlag.b68cf02a.jpg"},{id:9,img:c.p+"static/media/moonRover.f4a0b8af.jpg"},{id:10,img:c.p+"static/media/frontReflection.f77ac3d2.jpg"},{id:11,img:c.p+"static/media/greatView.e944d7a1.jpg"},{id:12,img:c.p+"static/media/spaceX.adb9f7ce.jpg"},{id:13,img:c.p+"static/media/space1.976f015d.jpg"},{id:14,img:c.p+"static/media/space2.a5615759.jpg"},{id:15,img:c.p+"static/media/space3.b3ab452b.jpg"}],m=function(e){var t=Object(i.useState)([]),c=Object(s.a)(t,2),a=c[0],r=c[1],n=function(t){var c=t.target.id;return a.includes(c)?(r([]),e.updateCurrentScore(0)):(r(a.concat([c])),e.changeGameScore())};return Object(i.useEffect)((function(){!function(){for(var e=o.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),c=[o[t],o[e]];o[e]=c[0],o[t]=c[1]}}()})),Object(d.jsx)("div",{className:"cardContainer",children:o.map((function(e){return Object(d.jsx)("div",{className:"card",children:Object(d.jsx)("img",{src:e.img,alt:"new",id:e.id,onClick:n})},e.id)}))})},g=function(e){var t=a.a.createRef();return Object(i.useEffect)((function(){!0===e.wonState?t.current.className="winScreen":t.current.className="hidden"})),Object(d.jsxs)("div",{className:"hidden",ref:t,children:[Object(d.jsx)("h1",{children:"You Won!"}),Object(d.jsx)("p",{className:"rules",children:"Click Here to play again!"}),Object(d.jsx)("button",{onClick:e.resetGame,children:"Reset"})]})};var p=function(){var e=Object(i.useState)(0),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(i.useState)(0),n=Object(s.a)(r,2),o=n[0],p=n[1],u=Object(i.useState)(!1),b=Object(s.a)(u,2),l=b[0],h=b[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{currentScore:o,highScore:c}),Object(d.jsx)(m,{changeGameScore:function(){o>=c?(14===o&&h(!0),p(o+1),a(c+1)):p(o+1)},updateCurrentScore:p}),Object(d.jsx)(g,{wonState:l,resetGame:function(){a(0),p(0),h(!1)}})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),i(e),a(e),r(e),n(e)}))};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.3875e659.chunk.js.map