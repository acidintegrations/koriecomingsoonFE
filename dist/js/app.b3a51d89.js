(function(t){function e(e){for(var r,o,u=e[0],l=e[1],s=e[2],p=0,d=[];p<u.length;p++)o=u[p],a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"4a89":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=(n("034f"),n("57a0"),n("2877")),u={},l=Object(o["a"])(u,a,i,!1,null,"778d63cd",null),s=l.exports,c=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("div",{attrs:{id:"wrapper-flex-container"}},[t._m(0),t._m(1),n("div",[t._m(2),n("form",{on:{submit:function(e){return t.sendMail(e)}}},[n("div",{attrs:{id:"form-container"}},[n("div",[n("KInput",{attrs:{color:"pink",placeholder:"Enter Email",type:"email",required:""},model:{value:t.inputData.email,callback:function(e){t.$set(t.inputData,"email",e)},expression:"inputData.email"}})],1),n("div",[n("KButton",{attrs:{label:"Notify Me",color:"pink",radius:"1.5",uppercase:"",fontSize:"1",paddingVertical:"0.5",paddingHorizontal:"3"}})],1)])])])])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"logo-container"}},[n("img",{attrs:{id:"logo",src:"/images/branding/korie-logo-white.svg"}}),n("img",{attrs:{id:"car",src:"/images/branding/car.png",width:"60"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"coming-soon"}},[t._v("COMING SOON")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"mailing-list"}},[t._v("Sign Up to our Mailing List!")])])}],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{class:t.inputClasses,attrs:{type:t.type,placeholder:t.placeholder,required:t.required},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})},m=[],g=(n("c5f6"),{props:{value:[String,Number],type:String,placeholder:String,color:String,required:Boolean},computed:{inputClasses:function(){var t=["input"];switch(this.color){default:t.push("input-pink")}return t.join(" ")}}}),v=g,b=(n("8b42"),Object(o["a"])(v,f,m,!1,null,null,null)),h=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.buttonClasses,style:t.buttonStyling,on:{click:function(e){return t.$emit("click")}}},[t._v("\n    "+t._s(t.label)+"\n")])},y=[],S={props:{color:String,label:String,radius:String,uppercase:Boolean,fontSize:String,paddingVertical:String,paddingHorizontal:String},computed:{buttonClasses:function(){var t=["button"];switch(this.color){default:t.push("button-pink")}return t.join(" ")},buttonStyling:function(){var t={borderRadius:this.radius+"rem",fontSize:this.fontSize+"rem",padding:this.paddingVertical+"rem "+this.paddingHorizontal+"rem"};return this.uppercase&&(t.textTransform="uppercase"),t}}},x=S,w=(n("cd80"),Object(o["a"])(x,_,y,!1,null,"3cc3ed31",null)),O=w.exports,j=[{transform:"translateX(+0%) translateY(-50%) rotate(0)",left:"0px",top:"0px"},{transform:"translateX(-50%) translateY(-50%) rotate(0)",left:"75%",top:"0px"},{transform:"translateX(-50%) translateY(+50%) rotate(90deg)",left:"100%",top:"0px"},{transform:"translateX(-50%) translateY(-50%) rotate(90deg)",left:"100%",top:"75%"},{transform:"translateX(-100%) translateY(-50%) rotate(180deg)",left:"100%",top:"100%"},{transform:"translateX(-50%) translateY(-50%) rotate(180deg)",left:"25%",top:"100%"},{transform:"translateX(-50%) translateY(-150%) rotate(270deg)",left:"0px",top:"100%"},{transform:"translateX(-50%) translateY(-50%) rotate(270deg)",left:"0px",top:"25%"},{transform:"translateX(+0%) translateY(-50%) rotate(360deg)",left:"0px",top:"0px"}],k={duration:1e4,iterations:1/0,easing:"linear"},$={animation:j,timing:k},E=n("bc3a"),M=n.n(E),X=(M.a.create({baseURL:"http://localhost:8081"}),{data:function(){return{carAnimation:$.animation,carTiming:$.timing,inputData:{email:""}}},created:function(){},mounted:function(){document.getElementById("car").animate(this.carAnimation,this.carTiming)},methods:{sendMail:function(t){t.preventDefault()}},components:{KInput:h,KButton:O}}),Y=X,z=(n("5ac0"),Object(o["a"])(Y,p,d,!1,null,"7b83d2b3",null)),P=z.exports;r["a"].use(c["a"]);var T=new c["a"]({routes:[{path:"/",name:"home",component:P},{path:"*",redirect:"/"},{path:"",redirect:"/"}]}),B=n("2f62");r["a"].use(B["a"]);var C=new B["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:T,store:C,render:function(t){return t(s)}}).$mount("#app")},"57a0":function(t,e,n){"use strict";var r=n("66a1"),a=n.n(r);a.a},"5ac0":function(t,e,n){"use strict";var r=n("bbde"),a=n.n(r);a.a},"64a9":function(t,e,n){},"66a1":function(t,e,n){},"8b42":function(t,e,n){"use strict";var r=n("8da4"),a=n.n(r);a.a},"8da4":function(t,e,n){},bbde:function(t,e,n){},cd80:function(t,e,n){"use strict";var r=n("4a89"),a=n.n(r);a.a}});
//# sourceMappingURL=app.b3a51d89.js.map