webpackJsonp([32,266,267],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,i){for(var n=new PIXI.Container,r=new PIXI.filters.ColorMatrixFilter,o=a||!1,s=i||{addArrow:!1,type:"horizontal",scale:1},d=new PIXI.Container,l=0;l<3;++l){var h=l+1,c=PIXI.Sprite.fromFrame("TAP_1"+h);c.x=-c.width/2,c.y=-c.height/2;var p=new PIXI.Container;p.addChild(c),d.addChild(p)}var f=0;if(s.direction)switch(s.direction){case"top":f=-Math.PI/2;break;case"bottom":f=Math.PI/2;break;case"left":f=Math.PI;break;case"right":f=0;break;default:f=0}d.filters=[r];for(var u=0;u<d.children.length;u++){var v=d.children[u];v.scale.x=v.scale.y=2,u<2&&T(v,.75*u)}if(n.addChild(d),s.addArrow){var g,m;if(s.direction){g=PIXI.Sprite.fromFrame("oneArrow"),m=new PIXI.extras.MovieClip([g]);var x=s.scale?s.scale:1;m.scale.x=m.scale.y=x,m.pivot={x:0,y:m.height/2},m.rotation=f}else{g=PIXI.Sprite.fromFrame("NBarrow"),(m=new PIXI.extras.MovieClip([g])).pivot={x:m.width/2,y:m.height/2};var y=s.scale?s.scale:1;m.scale.x=m.scale.y=y,"horizontal"!==(s.type?s.type:"horizontal")&&(m.rotation=Math.PI/2)}n.addChild(m),n.arrow=m,n.addEventListener("hideArrow",function(){m.alpha=0,m.visible=!1}),n.addEventListener("showArrow",function(){m.alpha=1,m.visible=!0})}d.alpha=.4;var w=new PIXI.Graphics;function T(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return w.beginFill(16776960,0),w.drawRect(-50,-50,100,100),n.addChild(w),n.addEventListener(MouseEvent.MOUSE_OVER,function(){d.alpha=.6}),n.addEventListener(MouseEvent.MOUSE_OUT,function(){d.alpha=.4}),n.addEventListener(TouchEvent.TOUCH_BEGIN,function(){n.emit(n.event.TAP),!o&&n.parent&&n.parent.removeChild(n)}),n.x=e,n.y=t,n.setColor=function(e){var t=e>>16,a=e>>8&255,i=255&e;r._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,i,0,0,0,0,0,255,0],!1),d.filters=[r]},n.setRotation=function(e){n.rotation=e},n.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),n.addChild(t),t.pivot={x:0,y:m.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),n.addChild(a),a.pivot={x:m.width/2,y:m.height/2},a.rotation=n.rotation+Math.PI/2}},n.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&n.scale.set(.6,.6),n}},239:function(e,t,a){"use strict";nb.substance0147=extendsClass(ScienceMain,{frame0:function(){instance.viewStack.NBONOFF.visible=!1;var e=this.timeline,t=this.step0,a=this.step1,i=!1;a.alpha=0,e.setAutoPlay(!0,1),e.on("change",function(n){!i&&n.time>=1&&(i=!0,TweenMax.to([e,t],.5,{alpha:0,delay:1,onComplete:function(){TweenMax.to(a,.5,{alpha:1})}}));for(var r=1;r<4;r++)t["container"+r].s.alpha=n.time})},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"铁在什么情况下容易生锈？我们怎么防止、减缓铁生锈呢？",labName:"控制铁生锈的速度",CONCLUSION:"铁钉生锈是水和空气共同作用的结果。",newLayOut:!0,bgColor:"#F3E6CF"},const:{},event:{}}),nb.timelineSprite=function(){var e,t,a=this;if(a.bgMask){var i=a.bgMask.getChildAt(0);a.progressBar.mask=i,i.scale.x=0}for(var n,r=this.a0.x===this.a1.x?"vertical":"horizontal",o=0,s=0;s<int.MAX_VALUE;s++){var d=this["a"+s];if(void 0===d){t="vertical"===r?this["a"+(s-1)].y:this["a"+(s-1)].x,o=s;break}0===s&&(e="vertical"===r?d.y:d.x),d.addEventListener(TouchEvent.TAP,function(){"vertical"===r?TweenMax.to(a.drag,.5,{y:this.y,onUpdate:h,onComplete:c}):TweenMax.to(a.drag,.5,{x:this.x,onUpdate:h,onComplete:c}),a.emit("nodeTap",{index:this.name.substr(1,1)})})}this.setDrag=function(e){e&&NBDrag.addDrag(a.drag,n)},this.updateBound=function(){"vertical"==r?(n={x:this.drag.x,y:this.drag.y,width:0,height:t},n={x:this.drag.x,y:this.drag.y,width:0,height:t}):n={x:this.drag.x,y:this.drag.y,width:t,height:0}},this.updateBound(),a.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==a._align_){var i=o-1;if("vertical"===r){var n=Math.round((this.y-e)/(t-e)*i);n<0&&(n=0),TweenMax.to(this,.5,{y:n*(t-e)/i,onUpdate:h,onComplete:c})}else{var s=Math.round((this.x-e)/(t-e)*i);s<0&&(s=0)}}}),a.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){h()}),a.drag.constY=a.drag.y;var l,h=function(){if("vertical"===r){var i=(a.drag.y-e)/(t-e);a.emit("change",{time:i})}else{a.drag.y=a.drag.constY,a.drag.x>=t&&(a.drag.x=t),a.drag.x<=e&&(a.drag.x=e);var n=(a.drag.x-e)/(t-e);a.emit("change",{time:n}),a.drag.line0&&(a.drag.line0.rotation=1800*n*Math.PI/180,a.drag.line1.rotation=360*n*Math.PI/180),a.bgMask&&(a.bgMask.getChildAt(0).scale.x=n)}},c=function(){a.setMomentsPause(!0,2e3,2);var i=o-1;if("vertical"===r){var n=(a.drag.y-e)/(t-e),s=Math.round(n*i);a.emit("change",{index:s,time:n})}else{var d=(a.drag.x-e)/(t-e),l=Math.round(d*i);a.emit("change",{index:l,time:d})}};this.getNodeCount=function(){return o},this.setNodePos=function(e){var t=this["a"+e];"vertical"===r?a.drag.y=t.y:a.drag.x=t.x},nb.MovieClip.ticker.add(function(){if(a._auto_&&!a.drag.isDragging){var i=t-e;"vertical"===r?(a.drag.y+=a._speed_,a.drag.y>i&&(a.drag.y=i)):(a.drag.x+=a._speed_,a.drag.x>i+a.a0.x&&(a.drag.x=i+a.a0.x)),h()}}),this.setAutoPlay=function(e,t){this._auto_=e,this._speed_=t||.1},this.setAutoAlign=function(e){this._align_=e},this.setMomentsPause=function(e,t,i){clearTimeout(l),e&&!a.NOTafterStopPlay?(a.setAutoPlay(!1),clearTimeout(l),a.setAutoPlay(!1),l=setTimeout(function(){a.setAutoPlay(!0,i)},t)):a.setAutoPlay(!1)},this.resetTimeline=function(){this.drag.x=this.bgMask.x}},e.exports=nb.substance0147},245:function(e,t,a){"use strict";nb.substance0183=extendsClass(ScienceMain,{frame0:function(){instance.getNBLib("0134").frame0.apply(this)},frame1:function(e,t,a,i){e=e||5;var n=this;NBDrag.addDrag(n.glass);var r=new PIXI.Graphics;n.addChild(r),r.beginFill(0,255,1),r.drawCircle(0,0,n.bottom.width/2),n.graphics=r,r.alpha=1,n.glass.startX=n.glass.x,n.glass.startY=n.glass.y;for(var o=0;o<e;o++){var s=n["w"+o],d=n["a"+o];s.mask=r,s.scale.x=a||1,s.scale.y=a||1,d.scale.x=a||1,d.scale.y=a||1,s.alpha=1}if(1==(i=i||1)&&1==e){n.a0.y=(ScienceMain.H-n.a0.height)/2;var l=n.toLocal({x:0,y:0},instance.stage);n.a0.x=l.x+(ScienceMain.W-n.a0.width)/2}for(var h=[],c=void 0,p=0;p<e;p++){var f=n["w"+p];t?(t.scale.x=a||1,t.scale.y=a||1,c=t.width/n["a"+p].width):c=f.width/n["a"+p].width,h.push(c)}this.onUpdate=function(){!function(){r.x=n.glass.x,r.y=n.glass.y,n.bottom.x=r.x,n.bottom.y=r.y;for(var t=0;t<e;t++){var a=n["w"+t];a.x=-(h[t]-1)*(n.glass.x-n["a"+t].x)+n["a"+t].x,a.y=-(h[t]-1)*(n.glass.y-n["a"+t].y)+n["a"+t].y}}()}},frame2:function(){instance.frame1.apply(this,[1])},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),this.bindScriptToSprite(this.frame0,"frame0"),this.bindScriptToSprite(this.frame1,"frame1"),this.bindScriptToSprite(this.frame2,"frame2")},info:{experimentImport:"",labName:"观察动物的卵",title0:"这些是动物的卵，你认识哪个？",title1:"用放大镜观察各种卵",title2:"鸡蛋的蛋白在哪？蛋黄在哪？气室有什么作用？",CONCLUSION:""},const:{},event:{}}),e.exports=nb.substance0183},361:function(e,t,a){"use strict";var i=r(a(169)),n=r(a(540));function r(e){return e&&e.__esModule?e:{default:e}}a(239),a(245),nb.substance0164=extendsClass(ScienceMain,{frame0:function(){var e=this;NBDrag.addDrag(e.vege),e.vege1.alpha=0,e.timeline.visible=!1;var t=!0,a=(0,i.default)(-20,0,!0);e.vege.addChild(a),e.vege.Point=a,instance.NBDownTip.showTip("请将植物的茎放入烧杯中"),e.knife.alpha=0,e.bottom.alpha=e.top.alpha=0,e.cup.hit=!1,this.onUpdate=function(){e.vege1.x=e.vege.x,e.vege1.y=e.vege.y};for(var n=0;n<4;n++)e.timeline["a"+n].addEventListener(TouchEvent.TAP,function(){t||instance.NBDownTipsError.showTip("步骤一已完成")});e.vege.addEventListener(NBDrag.event.STOP_DRAG,function(){e.vege.hitTest(e.ref)?(e.cup.hit=!0,NBDrag.removeDrag(e.vege),TweenMax.to(e.vege,.5,{x:650,y:726,onComplete:function(){e.timeline.visible=!0,e.timeline.setAutoPlay(!0,2)}})):(e.vege.addChild(a),instance.NBDownTip.showTip("请将植物的茎放入烧杯中"))}),e.cup.addEventListener(TouchEvent.TAP,function(){e.cup.hit||instance.NBDownTip.showTip("请将植物的茎放入烧杯中")}),e.vege.addEventListener(NBDrag.event.START_DRAG,function(){e.vege.removeChild(a),instance.NBDownTip.hideTip()});var r=!1;e.timeline.addEventListener("change",function(a){e.vege1.alpha=a.time,1!==a.time||r||(e.vege.alpha=0,r=!0,TweenMax.to(e.cup,.5,{y:"+=300",alpha:0,ease:Sine.easeInOut}),TweenMax.to(e.vege1,.5,{rotation:Math.PI/8,ease:Sine.easeInOut,onComplete:function(){e.top.x=641,e.top.y=749,e.bottom.x=638,e.bottom.y=732,e.setChildIndex(e.top,0),e.setChildIndex(e.knife,1),e.setChildIndex(e.bottom,2),e.top.alpha=1,e.bottom.alpha=1,e.vege1.visible=!1,TweenMax.to(e.knife,1,{x:e.vege1.x,y:e.vege1.y,ease:Sine.easeInOut,onComplete:function(){e.knife.alpha=1,TweenMax.to(e.knife,1,{x:"+=300",alpha:0,onComplete:function(){instance.NBDownTipsError.showTip("步骤一已完成"),t=!1,instance.NBStepsShow(!0,1)},onUpdate:function(){e.bottom.y+=.2}})}})}}))}),e.timeline.setAutoAlign(!1)},frame1:function(){var e=this;instance.getNBLib("0183").frame1.apply(this,[1]),(0,n.default)(e.glass);var t=(0,i.default)(200,200,!0);e.glass.addChild(t),e.glass.addEventListener(NBDrag.event.START_DRAG,function(){e.glass.removeChild(t)})},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),this.bindScriptToSprite(this.frame0,"frame0"),this.bindScriptToSprite(this.frame1,"frame1")},info:{experimentImport:"植物的茎在植物生长发育过程中具有什么作用呢？它们是怎样起到这些作用的呢？",labName:"植物茎的作用",title0:"将芹菜的茎浸入红墨水",title1:"观察芹菜的横切面",CONCLUSION:"植物的茎具有支撑和运输水分和养料的作用。"},const:{},event:{}}),e.exports=nb.substance0164},540:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e,a=t.tipIcon,i=t.littleTip;a.y=-206,a.x=289,i.y=257,i.y=-100,i.alpha=0;var n=TweenMax.to(a.scale,.5,{x:1.2,y:1.2,repeat:-1,yoyo:!0});function r(e){t.tapPoint&&e&&t.removeChild(t.tapPoint),i.alpha&&(TweenMax.killTweensOf(i),TweenMax.to(i,.5,{y:-100,ease:Sine.easeInOut,alpha:0}))}t.addEventListener(NBDrag.event.START_DRAG,r),a.addEventListener(TouchEvent.TAP,function(){n.pause(),i.alpha||TweenMax.to(i,.5,{y:-150,ease:Sine.easeInOut,alpha:1})}),$("canvas").click(function(){r()})}}});