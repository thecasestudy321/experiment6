webpackJsonp([210],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,i){for(var n=new PIXI.Container,r=new PIXI.filters.ColorMatrixFilter,o=a||!1,s=i||{addArrow:!1,type:"horizontal",scale:1},d=new PIXI.Container,l=0;l<3;++l){var c=l+1,h=PIXI.Sprite.fromFrame("TAP_1"+c);h.x=-h.width/2,h.y=-h.height/2;var f=new PIXI.Container;f.addChild(h),d.addChild(f)}var v=0;if(s.direction)switch(s.direction){case"top":v=-Math.PI/2;break;case"bottom":v=Math.PI/2;break;case"left":v=Math.PI;break;case"right":v=0;break;default:v=0}d.filters=[r];for(var p=0;p<d.children.length;p++){var w=d.children[p];w.scale.x=w.scale.y=2,p<2&&m(w,.75*p)}if(n.addChild(d),s.addArrow){var u,I;if(s.direction){u=PIXI.Sprite.fromFrame("oneArrow"),I=new PIXI.extras.MovieClip([u]);var x=s.scale?s.scale:1;I.scale.x=I.scale.y=x,I.pivot={x:0,y:I.height/2},I.rotation=v}else{u=PIXI.Sprite.fromFrame("NBarrow"),(I=new PIXI.extras.MovieClip([u])).pivot={x:I.width/2,y:I.height/2};var y=s.scale?s.scale:1;I.scale.x=I.scale.y=y,"horizontal"!==(s.type?s.type:"horizontal")&&(I.rotation=Math.PI/2)}n.addChild(I),n.arrow=I,n.addEventListener("hideArrow",function(){I.alpha=0,I.visible=!1}),n.addEventListener("showArrow",function(){I.alpha=1,I.visible=!0})}d.alpha=.4;var C=new PIXI.Graphics;function m(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return C.beginFill(16776960,0),C.drawRect(-50,-50,100,100),n.addChild(C),n.addEventListener(MouseEvent.MOUSE_OVER,function(){d.alpha=.6}),n.addEventListener(MouseEvent.MOUSE_OUT,function(){d.alpha=.4}),n.addEventListener(TouchEvent.TOUCH_BEGIN,function(){n.emit(n.event.TAP),!o&&n.parent&&n.parent.removeChild(n)}),n.x=e,n.y=t,n.setColor=function(e){var t=e>>16,a=e>>8&255,i=255&e;r._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,i,0,0,0,0,0,255,0],!1),d.filters=[r]},n.setRotation=function(e){n.rotation=e},n.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),n.addChild(t),t.pivot={x:0,y:I.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),n.addChild(a),a.pivot={x:I.width/2,y:I.height/2},a.rotation=n.rotation+Math.PI/2}},n.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&n.scale.set(.6,.6),n}},353:function(e,t,a){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(a(169));nb.substance0141=extendsClass(ScienceMain,{frame0:function(){instance.viewStack.NBONOFF.visible=!1;for(var e=this.head,t=this.po0,a=this.po1,n=this.bottle0,r=this.bottle1,o=this.burette,s=Power0.easeNOne,d=0;d<2;d++){this["bottle"+d].drop.scale.set(0,0)}var l=(0,i.default)(0,10);function c(){TweenMax.to(e,.7,{x:e.initP.x,y:e.initP.y,delay:.3,ease:s,onComplete:function(){e.times++,e.currentFrame=0,e.interactive=!0,e.times>2?(e.interactive=!1,TweenMax.to([o,e],.5,{y:"+= 200",alpha:0,ease:s}),TweenMax.to(n,.5,{x:"+=50",y:"-=120",ease:s,delay:.5}),TweenMax.to(r,.5,{x:"-=50",y:"-=120",ease:s,delay:.5})):e.addChild(l)}})}e.times=1,e.addChild(l),e.initP={x:e.x,y:e.y},e.addEventListener(TouchEvent.TAP,function(){e.interactive=!1,e.removeChild(l);var i=1==e.times?t:a,o=1==e.times?n:r;TweenMax.to(e,.7,{x:i.x,y:i.y,ease:s,onComplete:function(){TweenMax.to(e,1,{currentFrame:14,ease:s,onComplete:c}),TweenMax.to(o.drop.scale,1,{x:1,y:1,ease:s,delay:.2})}})})},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"米饭是我们的主食，我们几乎天天在吃米饭。有时候咀嚼米饭会有一种甜甜的味道，它有什么秘密呢？ ",labName:"米饭、淀粉遇碘",CONCLUSION:"米饭、淀粉遇到碘酒，颜色发生了变化，这蓝色的物质是一种不同于米饭和淀粉的新物质",newLayOut:!0,bgColor:"#F3E6CF"},const:{},event:{}}),e.exports=nb.substance0141}});