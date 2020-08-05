(function(e){function t(t){for(var r,i,a=t[0],s=t[1],u=t[2],l=0,p=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-simon-game/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0689":function(e,t,n){e.exports=n.p+"media/2.d2c4a2c4.mp3"},"0ad0":function(e,t,n){e.exports=n.p+"media/1.99e50f7d.mp3"},"1c1a":function(e,t,n){e.exports=n.p+"media/4.36d5a722.mp3"},"3c92":function(e,t,n){e.exports=n.p+"media/3.c1c96b44.mp3"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main",attrs:{id:"app"}},[n("h1",[e._v("Simon says")]),e.gameOver?n("h3",[e._v("Game Over! Try again!")]):e._e(),n("div",{staticClass:"game-box"},[n("div",{staticClass:"display"},[n("div",{class:"red "+(e.sections[0].isActive&&"active"),on:{click:function(t){return e.changeSection(0)}}}),n("div",{class:"green "+(e.sections[1].isActive&&"active"),on:{click:function(t){return e.changeSection(1)}}}),n("div",{class:"blue "+(e.sections[2].isActive&&"active"),on:{click:function(t){return e.changeSection(2)}}}),n("div",{class:"yellow "+(e.sections[3].isActive&&"active"),on:{click:function(t){return e.changeSection(3)}}})]),n("div",{staticClass:"game-info"},[n("h2",[e._v("Round: "+e._s(e.round))]),n("button",{on:{click:function(t){return e.start()}}},[e._v("Start")]),n("div",[n("h2",[e._v("Game options:")]),n("div",{attrs:{selected:e.selectedRoundSpeed,disabled:e.gameStarted}},[n("label",{attrs:{for:"light"}},[e._v("Light:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedRoundSpeed,expression:"selectedRoundSpeed"}],attrs:{type:"radio",name:"option",id:"light",value:"1500",checked:""},domProps:{checked:e._q(e.selectedRoundSpeed,"1500")},on:{change:function(t){e.selectedRoundSpeed="1500"}}}),n("label",{attrs:{for:"medium"}},[e._v("Medium:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedRoundSpeed,expression:"selectedRoundSpeed"}],attrs:{type:"radio",name:"option",id:"medium",value:"1000"},domProps:{checked:e._q(e.selectedRoundSpeed,"1000")},on:{change:function(t){e.selectedRoundSpeed="1000"}}}),n("label",{attrs:{for:"hard"}},[e._v("Hard:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedRoundSpeed,expression:"selectedRoundSpeed"}],attrs:{type:"radio",name:"option",id:"hard",value:"400"},domProps:{checked:e._q(e.selectedRoundSpeed,"400")},on:{change:function(t){e.selectedRoundSpeed="400"}}})])])])])])},o=[],i=(n("d3b7"),n("38cf"),n("b85c")),a=(n("96cf"),n("1da1")),s=n("0ad0"),u=n.n(s),d=n("0689"),l=n.n(d),p=n("3c92"),f=n.n(p),v=n("1c1a"),m=n.n(v),h=function(e){return new Promise((function(t){return setTimeout(t,e)}))},g={data:function(){return{gameStarted:!1,sequence:[],playerSequence:[],round:0,show:!1,selectedRoundSpeed:1500,sections:[{id:0,color:"red",isActive:!1,tone:u.a},{id:1,color:"green",isActive:!1,tone:l.a},{id:2,color:"blue",isActive:!1,tone:f.a},{id:3,color:"yellow",isActive:!1,tone:m.a}],gameOver:!1}},methods:{playAudio:function(e){new Audio(this.sections[e].tone).play()},changeSection:function(e){if(this.playAudio(e),this.gameStarted){this.playerSequence.push(e);var t=this.playerSequence.length-1;this.playerSequence[t]===this.sequence[t]?this.playerSequence.length===this.sequence.length&&this.repeat():this.gameOvered()}},addStep:function(){this.sequence.push(Math.floor(4*Math.random()))},commonGameMethod:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.addStep(),e.round=e.sequence.length,n=Object(i["a"])(e.sequence),t.prev=3,n.s();case 5:if((r=n.n()).done){t.next=14;break}return c=r.value,e.playAudio(c),e.sections[c].isActive=!0,t.next=11,h(e.selectedRoundSpeed);case 11:e.sections[c].isActive=!1;case 12:t.next=5;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](3),n.e(t.t0);case 19:return t.prev=19,n.f(),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[3,16,19,22]])})))()},start:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.gameStarted=!0,e.sequence=[],e.playerSequence=[],t.next=5,e.commonGameMethod();case 5:case"end":return t.stop()}}),t)})))()},repeat:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.playerSequence=[],t.next=3,h(e.selectedRoundSpeed);case 3:return t.next=5,e.commonGameMethod();case 5:case"end":return t.stop()}}),t)})))()},gameOvered:function(){this.gameOver=!0,this.gameStarted=!1,this.sequence=[],this.playerSequence=[]}}},S=g,b=(n("5c0b"),n("2877")),y=Object(b["a"])(S,c,o,!1,null,null,null),w=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),c=n.n(r);c.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.498c42b5.js.map