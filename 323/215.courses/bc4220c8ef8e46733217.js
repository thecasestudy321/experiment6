webpackJsonp([215],{169:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a,n){for(var i=new PIXI.Container,o=new PIXI.filters.ColorMatrixFilter,r=a||!1,s=n||{addArrow:!1,type:"horizontal",scale:1},l=new PIXI.Container,h=0;h<3;++h){var d=h+1,p=PIXI.Sprite.fromFrame("TAP_1"+d);p.x=-p.width/2,p.y=-p.height/2;var c=new PIXI.Container;c.addChild(p),l.addChild(c)}var f=0;if(s.direction)switch(s.direction){case"top":f=-Math.PI/2;break;case"bottom":f=Math.PI/2;break;case"left":f=Math.PI;break;case"right":f=0;break;default:f=0}l.filters=[o];for(var w=0;w<l.children.length;w++){var T=l.children[w];T.scale.x=T.scale.y=2,w<2&&y(T,.75*w)}if(i.addChild(l),s.addArrow){var x,u;if(s.direction){x=PIXI.Sprite.fromFrame("oneArrow"),u=new PIXI.extras.MovieClip([x]);var v=s.scale?s.scale:1;u.scale.x=u.scale.y=v,u.pivot={x:0,y:u.height/2},u.rotation=f}else{x=PIXI.Sprite.fromFrame("NBarrow"),(u=new PIXI.extras.MovieClip([x])).pivot={x:u.width/2,y:u.height/2};var C=s.scale?s.scale:1;u.scale.x=u.scale.y=C,"horizontal"!==(s.type?s.type:"horizontal")&&(u.rotation=Math.PI/2)}i.addChild(u),i.arrow=u,i.addEventListener("hideArrow",function(){u.alpha=0,u.visible=!1}),i.addEventListener("showArrow",function(){u.alpha=1,u.visible=!0})}l.alpha=.4;var I=new PIXI.Graphics;function y(t,e){TweenMax.to(t,1.5,{delay:e,alpha:0,repeat:-1}),TweenMax.to(t.scale,1.5,{x:5,y:5,delay:e,repeat:-1})}return I.beginFill(16776960,0),I.drawRect(-50,-50,100,100),i.addChild(I),i.addEventListener(MouseEvent.MOUSE_OVER,function(){l.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){l.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!r&&i.parent&&i.parent.removeChild(i)}),i.x=t,i.y=e,i.setColor=function(t){var e=t>>16,a=t>>8&255,n=255&t;o._loadMatrix([e,0,0,0,0,0,a,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),l.filters=[o]},i.setRotation=function(t){i.rotation=t},i.showAllDir=function(){if(s.direction)for(var t=0;t<3;t++){var e=new PIXI.Container;e.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(e),e.pivot={x:0,y:u.height/2},e.rotation=Math.PI/2*(t+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(a),a.pivot={x:u.width/2,y:u.height/2},a.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},320:function(t,e,a){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(a(169));nb.substance0076=extendsClass(ScienceMain,{frame0:function(){var t=this,e=t.waterBreak,a=t.potato,i=t.spoon;i.startX=i.x,i.startY=i.y;var o=i.salt.x,r=i.salt.y,s=t.glass.x,l=0;e.setCurrentCapacity("65%"),NBDrag.addDrag(t.potato),NBDrag.addDrag(t.spoon),a.on(NBDrag.event.STOP_DRAG,p),a.on(NBDrag.event.START_DRAG,function(){instance.NBDownTip.hideTip(),instance.NBDownTipsError.hideTip(),this.removeChild(h),t.txt.alpha=0}),a.on(NBDrag.event.STOP_DRAG,p),i.on(NBDrag.event.STOP_DRAG,function(){var e=this;if(e.hitTest(t.hitArea)&&l>=4)return instance.NBDownTip.showTip("马铃薯已经浮起来了,不需要再加入食盐"),void TweenMax.to(e,.5,{x:e.startX,y:e.startY,ease:Sine.easeInOut});e.salt.hitTest(t.hitArea)&&e.salt.alpha?TweenMax.to(e,.2,{rotation:-Math.PI/6,onComplete:function(){t.addChildWithSamePos(e.salt),t.salt=e.salt,TweenMax.to(t.salt,.5,{y:t.line.y,alpha:0,onComplete:function(){l++,t.infoTxt.text=l,t.ani.alpha=1,e.addChild(t.salt),e.salt=t.salt,e.salt.x=o,e.salt.y=r,t.glass.alpha=1,TweenMax.to(t.glass,.5,{x:s-140,yoyo:!0,repeat:4,ease:Linear.easeNone,onComplete:function(){t.glass.x=s,t.glass.alpha=0}}),TweenMax.to(t.ani,1,{alpha:0}),TweenMax.to(e,.5,{x:e.startX,y:e.startY,ease:Sine.easeInOut,onComplete:function(){l<4&&a.isHit?(e.addChild(d),instance.NBDownTip.showTip("请往清水里面加盐, 直到马铃薯浮起来")):l<4&&instance.NBDownTip.showTip("请将马铃薯放入烧杯中")}}),t.line.y-=13*l,a.isReach&&4===l&&TweenMax.to(a,3,{y:t.line.y,ease:Sine.easeInOut})}})}}):e.hitTest(t.bottle)&&!e.salt.alpha&&TweenMax.to(e,.3,{x:t.bottlePoint.x,y:t.bottlePoint.y,onComplete:function(){TweenMax.to(e,.3,{rotation:-Math.PI/6,onComplete:function(){e.salt.alpha=1,TweenMax.to(e,.3,{rotation:0,onComplete:function(){TweenMax.to(e,.3,{y:e.y-130})}})}})}})}),i.on(NBDrag.event.START_DRAG,function(){instance.NBDownTip.hideTip(),instance.NBDownTipsError.hideTip(),this.removeChild(d)}),i.on(NBDrag.event.MOVE_DRAG,function(){this.removeChild(d)}),a.startX=a.x,a.startY=a.y,t.ani.alpha=0,t.glass.alpha=0,t.left.alpha=t.right.alpha=0,i.salt.alpha=0,t.infoTxt.text=l;var h=(0,n.default)(0,-a.height/2,!0),d=(0,n.default)(0,0,!0);function p(){var a=this,n=a.hitTest(t.left),o=a.hitTest(t.right);!this.hitTest(t.hitArea)||n||o?n||o?TweenMax.to(a,.5,{x:a.startX,y:a.startY,onComplete:function(){instance.NBDownTipsError.showTip("请将马铃薯从正上方放入烧杯中"),a.addChild(h),t.txt.alpha=1}}):TweenMax.to(a,.5,{x:a.startX,y:a.startY,onComplete:function(){instance.NBDownTip.showTip("请将马铃薯放入烧杯中"),a.addChild(h),t.txt.alpha=1}}):(a.isHit=!0,TweenMax.to(a,1,{y:t.line.y,ease:Sine.easeInOut,onComplete:function(){NBDrag.removeDrag(a),a.isReach=!0,l<4&&(instance.NBDownTip.showTip("请往清水里面加盐, 直到马铃薯浮起来"),i.addChild(d))}}),setTimeout(function(){e.setCapacityTween("75%",.7)},300))}a.addChild(h),instance.NBDownTip.showTip("请将马铃薯放入烧杯中"),this.onUpdate=function(){i.salt.alpha?(t.followtxt.alpha=1,t.followtxt.x=i.x,t.followtxt.y=i.y):t.followtxt.alpha=0}},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"我们知道了马铃薯在液体中浮起来是液体的原因,让我们来调制一杯使马铃薯浮起来的液体。",labName:"让马铃薯浮起来",title0:"使马铃薯浮起来",CONCLUSION:"清水中加入一定量的食盐时,马铃薯会浮起来。"},const:{},event:{}}),t.exports=nb.substance0076}});