webpackJsonp([26],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){for(var i=new PIXI.Container,o=new PIXI.filters.ColorMatrixFilter,r=a||!1,s=n||{addArrow:!1,type:"horizontal",scale:1},d=new PIXI.Container,l=0;l<3;++l){var c=l+1,h=PIXI.Sprite.fromFrame("TAP_1"+c);h.x=-h.width/2,h.y=-h.height/2;var v=new PIXI.Container;v.addChild(h),d.addChild(v)}var u=0;if(s.direction)switch(s.direction){case"top":u=-Math.PI/2;break;case"bottom":u=Math.PI/2;break;case"left":u=Math.PI;break;case"right":u=0;break;default:u=0}d.filters=[o];for(var f=0;f<d.children.length;f++){var x=d.children[f];x.scale.x=x.scale.y=2,f<2&&M(x,.75*f)}if(i.addChild(d),s.addArrow){var p,g;if(s.direction){p=PIXI.Sprite.fromFrame("oneArrow"),g=new PIXI.extras.MovieClip([p]);var m=s.scale?s.scale:1;g.scale.x=g.scale.y=m,g.pivot={x:0,y:g.height/2},g.rotation=u}else{p=PIXI.Sprite.fromFrame("NBarrow"),(g=new PIXI.extras.MovieClip([p])).pivot={x:g.width/2,y:g.height/2};var T=s.scale?s.scale:1;g.scale.x=g.scale.y=T,"horizontal"!==(s.type?s.type:"horizontal")&&(g.rotation=Math.PI/2)}i.addChild(g),i.arrow=g,i.addEventListener("hideArrow",function(){g.alpha=0,g.visible=!1}),i.addEventListener("showArrow",function(){g.alpha=1,g.visible=!0})}d.alpha=.4;var w=new PIXI.Graphics;function M(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return w.beginFill(16776960,0),w.drawRect(-50,-50,100,100),i.addChild(w),i.addEventListener(MouseEvent.MOUSE_OVER,function(){d.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){d.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!r&&i.parent&&i.parent.removeChild(i)}),i.x=e,i.y=t,i.setColor=function(e){var t=e>>16,a=e>>8&255,n=255&e;o._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),d.filters=[o]},i.setRotation=function(e){i.rotation=e},i.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(t),t.pivot={x:0,y:g.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(a),a.pivot={x:g.width/2,y:g.height/2},a.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},351:function(e,t,a){"use strict";var n=d(a(169)),i=d(a(527)),o=d(a(522)),r=d(a(520)),s=d(a(521));function d(e){return e&&e.__esModule?e:{default:e}}nb.substance0139=extendsClass(ScienceMain,{frame0:function(){instance.viewStack.NBONOFF.visible=!1;var e=this;e.step0.next=e.step1,e.step1.next=e.step2,e.step1.over=e.step2.over=!1,e.timeline.a1.shan.alpha=e.timeline.a2.shan.alpha=0,s.default.apply(e),instance.watchM.apply(e.step0,[{timeline:e.timeline}]),instance.frame1.apply(e.step1,[{timeline:e.timeline}]),instance.frame2.apply(e.step2),e.timeline.addEventListener(r.default.event.CLICK_NODE,function(t){1==t.index?(TweenMax.killTweensOf(e.timeline.a1.shan),e.timeline.a1.shan.alpha=!1):2==t.index&&(TweenMax.killTweensOf(e.timeline.a2.shan),e.timeline.a2.shan.alpha=!1)})},watchM:function(e){var t=this,a=e.timeline;o.default.apply(t.form);for(var r=0;r<2;r++)t.form.dragForm["t"+r].alpha=0;i.default.apply(this,[t.glass,{littlePng:"sPng",bigPng:"bigPng",tipOffsetX:-140,tipOffsetY:100,iconOffsetX:-155,iconOffsetY:100}]);var s=(0,n.default)(90,90);t.glass.addChild(s),t.glass.addEventListener(NBDrag.event.START_DRAG,function(){t.glass.removeChild(s)}),t.glass.addEventListener(NBDrag.event.DRAG_MOVE,function(){t.bottom.hitTest(t.sPng0)?(t.form.dragForm.t1.alpha=1,t.shazi.visible=!1):t.shazi.visible=!0,t.bottom.hitTest(t.sPng1)?(t.form.dragForm.t0.alpha=1,t.huangdou.visible=!1):t.huangdou.visible=!0});var d=!1;this.onUpdate=function(){1!=t.form.dragForm.t1.alpha||1!=t.form.dragForm.t0.alpha||t.next.over||d||(d=!0,instance.blingTip(a.a1.shan))}},frame1:function(e){var t=this,a=e.timeline;NBDrag.addDrag(t.hit);var i=(0,n.default)(t.hit.width/2,t.hit.height/3);t.hit.addChild(i),t.hit.on(NBDrag.event.START_DRAG,function(){t.hit.removeChild(i),t.shazi.alpha=0}),t.touchArea.alpha=0,t.soy.fadeInOut.alpha=0;var o=t.hit.x,r=t.hit.y,s=t.hit.clone();t.hit.name=s.name,s.alpha=0;var d=!1;TweenMax.to(s,.1,{x:t.soy.x-10,y:t.soy.y-t.soy.height/2+10,currentFrame:6}),t.hit.on(NBDrag.event.STOP_DRAG,function(){t.hit.interactive=!1,d||(t.hit.hitTest(t.touchArea)?(TweenMax.to(s,.2,{alpha:0}),TweenMax.to(t.hit,.4,{x:t.soy.x,y:t.soy.y-t.soy.height/2+10,onComplete:function(){TweenMax.to(t.hit,.4,{currentFrame:t.hit.totalFrames-1,ease:Power0.easeNone,onComplete:function(){TweenMax.to(t.hit,.4,{alpha:0,delay:.2,onComplete:function(){TweenMax.to(t.soy,.5,{x:"+=190",delay:.3,onComplete:function(){d=t.over=!0,t.next.over||instance.blingTip(a.a2.shan)}}),TweenMax.to(t.hit,.4,{x:o,y:r})}})}}),setTimeout(function(){TweenMax.to(t.soy.fadeInOut,.5,{alpha:1})},500)}})):(t.hit.addChild(i),TweenMax.to(t.hit,.4,{x:o,y:r,onComplete:function(){t.hit.interactive=!0}}),TweenMax.to(s,.4,{alpha:0})))}),t.hit.on(NBDrag.event.DRAG_MOVE,function(){TweenMax.to(s,.4,{alpha:.5})})},frame2:function(){var e=this;e.bg.mask=e.mm.children[0],e.mm.y=e.bg.y-.85*e.bg.height;var t=(0,n.default)(-e.shaozi.width/4,0);e.shaozi.addChild(t);var a=e.shaozi.x;e.shaozi.addEventListener(TouchEvent.TAP,function(){e.shaozi.interactive=!1,e.shaozi.removeChild(t),TweenMax.to(e.shaozi,.1,{x:"-=25",onComplete:function(){TweenMax.to(e.shaozi,.4,{x:"+=50",yoyo:!0,repeat:6,ease:Power0.easeNOne,onComplete:function(){e.shaozi.interactive=!0}})}}),TweenMax.to(e.tu,2.5,{alpha:0,ease:Power0.easeNOne}),TweenMax.to(e.mm,2.5,{y:e.bg.y-2.2*e.bg.height,ease:Power0.easeNOne,onComplete:function(){e.over=!0}})}),e.beizi.addEventListener(TouchEvent.TAP,function(){1===e.tu.alpha&&e.shaozi.addChild(t)});var i=e.tu.x-e.shaozi.x;this.onUpdate=function(){e.tu.x=i+e.shaozi.x,e.tu.alpha<.1&&TweenMax.to(e.shaozi,.2,{x:a}),0===e.tu.alpha&&(e.shaozi.interactive=!1)}},blingTip:function(e){var t=TweenMax.to(e,2,{ease:Power0.easeNone,repeat:-1,onUpdate:function(){var a=t.progress();e.alpha=a<=.5?2*a:1-2*(a-.5)}})},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"在生活中，经常要混和一些物质，如炒菜的时候，把调味品和蔬菜混合。物质之间互相混合，会发生变化么？",labName:"物质发生了变化",CONCLUSION:"沙和豆子混合后没有发生变化。",newLayOut:!0,bgColor:"#F3E6CF"},const:{},event:{}}),e.exports=nb.substance0139},520:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={event:{CLICK_NODE:"nodeTap",CLICK_NODE_REACHED:"nodeTapReached",ON_COMPLETE:"timelineComplete",ON_PLAY:"timelinePlaying",REACHED_NODE:"reachedNode",START_DRAG:"startDrag",DRAGING:"draging",STOP_DRAG:"stopDrag"},init:function(){var e,t,a=this;if(a.bgMask){var i=a.bgMask.getChildAt(0);a.progressBar.mask=i,i.scale.x=0}var o=this.a0.x===this.a1.x?"vertical":"horizontal",r=0,s=[];a.drag.lastPos={x:a.drag.x,y:a.drag.y};for(var d=0;d<int.MAX_VALUE;d++){var l=this["a"+d];if(void 0===l){t="vertical"===o?this["a"+(d-1)].y:this["a"+(d-1)].x,r=d;break}s.push(l),0===d&&(e="vertical"===o?l.y:l.x),l.addEventListener(TouchEvent.TAP,function(){var e=this;"vertical"===o?TweenMax.to(a.drag,.5,{y:this.y}):TweenMax.to(a.drag,.5,{x:this.x,onComplete:function(){a.emit(n.event.CLICK_NODE_REACHED,{index:e.name.substr(1,1)})}}),this.totalFrames&&(s.forEach(function(e){return e.currentFrame=0}),this.currentFrame=1),a.drag.lastPos={x:this.x,y:this.y},a.emit(n.event.CLICK_NODE,{index:this.name.substr(1,1)})})}this.setDrag=function(i){i?(NBDrag.addDrag(a.drag),a.drag.on(NBDrag.event.START_DRAG,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.START_DRAG,{time:i})}),a.drag.on(NBDrag.event.DRAG_MOVE,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.DRAGING,{time:i})}),a.drag.on(NBDrag.event.STOP_DRAG,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.STOP_DRAG,{time:i}),i>=1&&a.emit(n.event.ON_COMPLETE,{time:i})})):NBDrag.removeDrag(a.drag)},a.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==a._align_){var n=r-1;if("vertical"===o){var i=Math.round((this.y-e)/(t-e)*n);i<0&&(i=0)}else{var s=Math.round((this.x-e)/(t-e)*n);s<0&&(s=0)}}}),a.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){v()});var c=!1;a.drag.constY=a.drag.y;var h,v=function(){a.drag.y=a.drag.constY,a.drag.x>=t&&(a.drag.x=t),a.drag.x<=e&&(a.drag.x=e);var i=(a.drag.x-e)/(t-e);if(i<1){c=!1,a.emit(n.event.ON_PLAY,{time:i});for(var o=0;o<s.length;o++)a.drag.lastPos.x<=s[o].x&&a.drag.x>s[o].x&&a.emit(n.event.REACHED_NODE,{index:o})}else c||(c=!0,a.emit(n.event.ON_COMPLETE,{time:i}));(a.drag.line0&&(a.drag.line0.rotation=1800*i*Math.PI/180,a.drag.line1.rotation=360*i*Math.PI/180),a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=i);a.drag.lastPos={x:a.drag.x,y:a.drag.y}};this.getNodeCount=function(){return r},this.setNodePos=function(e){var t=this["a"+e];"vertical"===o?a.drag.y=t.y:a.drag.x=t.x},nb.MovieClip.ticker.add(function(){a._auto_&&!a.drag.isDragging&&("vertical"===o?a.drag.y+=a._speed_:a.drag.x+=a._speed_,v())}),this.setAutoPlay=function(e,t){this._auto_=e,this._speed_=t||.1},this.setAutoAlign=function(e){this._align_=e},this.setMomentsPause=function(e,t,n){clearTimeout(h),e&&!a.NOTafterStopPlay?(a.setAutoPlay(!1),clearTimeout(h),a.setAutoPlay(!1),h=setTimeout(function(){a.setAutoPlay(!0,n)},t)):a.setAutoPlay(!1)},this.resetTimeline=function(){(this.drag.x=this.bgMask.x,a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=0)}}};t.default=n},521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e=e||{};var t=this,a=[];n.default.init.apply(this.timeline);for(var i=0;i<this.timeline.getNodeCount();i++){var o=this["step"+i];a.push(o),o.alpha=0,o.visible=!1}var r=this.step0;r.visible=!0,r.alpha=1;var s=0;this.timeline.on(n.default.event.CLICK_NODE,function(n){if(void 0!==n.index&&n.index!=s){var i=e.offset||1200;i=n.index>s?$s(i):-$s(i);var o=void 0!==r.currentX?r.currentX:r.currentX=r.x;TweenMax.to(r,e.oldTm||.6,{x:o+i,alpha:0,onComplete:function(t){t.visible=!1,e.isFix||(t.y=0)},onCompleteParams:[r],ease:Expo.easeOut}),s=n.index,(r=a[s]).visible=!0,o=void 0!==r.currentX?r.currentX:r.currentX=r.x,r.x=o-i,TweenMax.to(r,e.newTm||1,{x:o,alpha:1,ease:Expo.easeOut,onComplete:function(){t.emit(t.boxSwitch_event.CHANGE_COM,{target:r,index:n.index})}})}}),this.addEventListener("render",function(){r.onUpdate&&r.onUpdate()}),t.boxSwitch_event={CHANGE_COM:"changeCom"}};var n=function(e){return e&&e.__esModule?e:{default:e}}(a(520))},522:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=e||this,n=a.parent,i=a.record,o=Object.assign({offsetX:-(a.width+10),offsetY:100,limitRect:!0},t),r=instance.stage.NBONOFF||instance.viewStack.NBONOFF,s=Sine.easeInOut;n.bgMask&&(a.mask=n.bgMask.children[0]);a.x=1280-a.record.width-2,a.y=60+r.height*r.scale.y+5;var d=a.x,l=a.y,c=a.x+o.offsetX,h=a.y+o.offsetY;i.addEventListener(TouchEvent.TAP,f);var v=i.x-a.dragForm.x,u=i.y-a.dragForm.y;function f(e){instance.NBDownTip.hideTip(),instance.NBDownTipsError.hideTip(),n.setChildIndex(a,n.children.length-1),a.x==d?(a.emit("showData",{goBack:!1}),TweenMax.to(a,.4,{y:h,onComplete:function(){TweenMax.to(a,.4,{x:c,onComplete:function(){var e=void 0;o.limitRect&&(e={x:0,y:0,width:1280-a.width/3,height:720-a.height}),NBDrag.addDrag(a,e),a.addEventListener(NBDrag.event.DRAG_MOVE,g),a.addEventListener(NBDrag.event.STOP_DRAG,x),i.icon&&TweenMax.to(i.icon,.2,{rotation:Math.PI,ease:s})}})}}),o.showModelMask&&(TweenMax.killTweensOf(n.recordGra),TweenMax.to(n.recordGra,.5,{alpha:1,onComplete:function(){n.setChildIndex(a,n.children.length-1),n.setChildIndex(n.recordGra,n.children.length-2)}}))):(a.emit("showData",{goBack:!0}),e&&p())}function x(){instance.NBDownTip.hideTip(),instance.NBDownTipsError.hideTip(),a.x>d-a.width/3&&p()}function p(){TweenMax.to(a,.5,{x:d,onComplete:function(){TweenMax.to(a,.4,{y:l,onComplete:function(){NBDrag.removeDrag(a),a.removeEventListener(NBDrag.event.DRAG_MOVE,g),a.removeEventListener(NBDrag.event.STOP_DRAG,x),i.icon&&TweenMax.to(i.icon,.2,{rotation:0,ease:s})}})}}),o.showModelMask&&(TweenMax.killTweensOf(n.recordGra),TweenMax.to(n.recordGra,.5,{alpha:0,onComplete:function(){n.setChildIndex(n.recordGra,0)}}))}function g(){a.record.x=v+a.dragForm.x,a.record.y=u+a.dragForm.y}a.showRecord=f,a.recordBack=p,function(){if(o.showModelMask){var e=new PIXI.Graphics;e.beginFill(0,.6),e.drawRect(0,0,1280,720),e.endFill(),n.addChild(e),n.recordGra=e,n.setChildIndex(n.recordGra,0),n.setChildIndex(a,n.children.length-1),n.recordGra.alpha=0,e.addEventListener(TouchEvent.TAP,function(){})}}()}},527:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=this,n=e,i=Object.assign({},{littlePng:"lPng",bigPng:"bPng",MAX_SCALE:1.6,MIN_SCALE:.82,START_BLUR:.5,BLUR:7.8,tipOffsetX:0,tipOffsetY:0,iconOffsetX:0,iconOffsetY:0,slideY:70},t),o=n.tipIcon,r=n.littleTip;o.y=-206+i.iconOffsetY,o.x=289+i.iconOffsetX,r.x=257+i.tipOffsetX,r.y=-100+i.tipOffsetY,o.startPos={x:o.x,y:o.y},r.startPos={x:r.x,y:r.y},r.alpha=0,NBDrag.addDrag(n);var s=TweenMax.to(o.scale,.5,{x:1.2,y:1.2,repeat:-1,yoyo:!0});n.addEventListener(NBDrag.event.START_DRAG,l),n.addEventListener(NBDrag.event.DRAG_MOVE,m);var d=!1;function l(e){n.tapPoint&&e&&n.removeChild(n.tapPoint),TweenMax.killTweensOf(r),r.alpha&&TweenMax.to(r,.5,{y:r.startPos.y,ease:Power2.easeOut,alpha:0,onComplete:function(){}}),TweenMax.to(r,.5,{onComplete:function(){d=!1}})}o.addEventListener(TouchEvent.TAP,function(){d||(d=!0,s.pause(),r.alpha||(TweenMax.killTweensOf(r),TweenMax.to(r,.5,{y:r.startPos.y-i.slideY,ease:Power2.easeOut,alpha:1,onStart:function(){r.y=r.startPos.y,d=!1}})))}),$("canvas").click(function(){d||(d=!0,l())});var c=new PIXI.Graphics;a.addChild(c),a.graphics=c,c.beginFill(0,255,1),c.drawCircle(0,0,a.bottom.width/2);for(var h=[],v=[],u=[],f=0;f<int.MAX_VALUE&&a[i.bigPng+f];f++){var x,p=a[i.bigPng+f],g=a[i.littlePng+f];v.push(p),u.push(g),p.mask=c,p.alpha=1,x=p.width/g.width,h.push(x)}function m(){c.x=n.x,c.y=n.y,a.bottom.position=c.position,u.forEach(function(e,t){var o=a[i.bigPng+t];o.x=-(h[t]-1)*(n.x-e.x)+e.x,o.y=-(h[t]-1)*(n.y-e.y)+e.y})}var T=new PIXI.filters.BlurFilter;function w(e){T.blur=5.46*e-4.4784,T.blur<=0&&(T.blur=0)}function M(e){var t=a.toLocal({x:e.data.global.x,y:e.data.global.y});if(n.glassCenterPoint&&n.removeChild(n.glassCenterPoint),n.arrow.alpha=0,n.slide=!0,instance.NBDownTip.hideTip(),t.x<y){var i=y-t.x;_=P+i/1e3,C=A+i/1e3/2,(E=O+i/1e3)>instance.const.MAX_SCALE&&(E=instance.const.MAX_SCALE),C>instance.const.MAX_SCALE-.5&&(C=instance.const.MAX_SCALE-.5),_>instance.const.MAX_SCALE&&(_=instance.const.MAX_SCALE),w(E),TweenMax.to(n.scale,.5,{x:E,y:_}),TweenMax.to(c.scale,.5,{x:E,y:_}),TweenMax.to(a.bottom.scale,.5,{x:E,y:_}),v.forEach(function(e){TweenMax.to(e.scale,.5,{x:C,y:C}),e.filters=[T]})}if(t.x>y){var o=t.x-y;_=P-o/1e3,C=A-o/1e3/2,(E=O-o/1e3)<instance.const.MIN_SCALE&&(E=instance.const.MIN_SCALE),C<instance.const.MIN_SCALE&&(C=instance.const.MIN_SCALE),_<instance.const.MIN_SCALE&&(_=instance.const.MIN_SCALE),w(E),TweenMax.to(n.scale,.5,{x:E,y:_}),TweenMax.to(c.scale,.5,{x:E,y:_}),TweenMax.to(a.bottom.scale,.5,{x:E,y:_}),v.forEach(function(e){TweenMax.to(e.scale,.5,{x:C,y:C})})}}if(w(1),c){var y,C,E=0,_=0,O=1,P=1,A=1;c.addEventListener(TouchEvent.TOUCH_BEGIN,function(){c.addEventListener(TouchEvent.TOUCH_MOVE,M)}),c.addEventListener(TouchEvent.TOUCH_END,function(){0!=E&&(O=E,P=_,A=C),a.addChild(c),c.removeListener(TouchEvent.TOUCH_MOVE,M)}),c.addEventListener(TouchEvent.TOUCH_END_OUDSIDE,function(){0!=E&&(O=E,P=_,A=C),a.addChild(c),c.removeListener(TouchEvent.TOUCH_MOVE,M)}),c.addEventListener(TouchEvent.TOUCH_BEGIN,function(e){var t=a.toLocal({x:e.data.global.x,y:e.data.global.y});y=t.x,c.addEventListener(TouchEvent.TOUCH_MOVE,M)})}n.addEventListener("canSlide",function(){c.interactive=!0}),n.addEventListener("noSlide",function(){c.interactive=!1}),c.interactive=!1,m(),n.event={grpInteractive:"canSlide",grpNoInteractive:"noSlide"}}}});