webpackJsonp([178,267],{239:function(t,e,i){"use strict";nb.substance0147=extendsClass(ScienceMain,{frame0:function(){instance.viewStack.NBONOFF.visible=!1;var t=this.timeline,e=this.step0,i=this.step1,a=!1;i.alpha=0,t.setAutoPlay(!0,1),t.on("change",function(n){!a&&n.time>=1&&(a=!0,TweenMax.to([t,e],.5,{alpha:0,delay:1,onComplete:function(){TweenMax.to(i,.5,{alpha:1})}}));for(var r=1;r<4;r++)e["container"+r].s.alpha=n.time})},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"铁在什么情况下容易生锈？我们怎么防止、减缓铁生锈呢？",labName:"控制铁生锈的速度",CONCLUSION:"铁钉生锈是水和空气共同作用的结果。",newLayOut:!0,bgColor:"#F3E6CF"},const:{},event:{}}),nb.timelineSprite=function(){var t,e,i=this;if(i.bgMask){var a=i.bgMask.getChildAt(0);i.progressBar.mask=a,a.scale.x=0}for(var n,r=this.a0.x===this.a1.x?"vertical":"horizontal",s=0,o=0;o<int.MAX_VALUE;o++){var d=this["a"+o];if(void 0===d){e="vertical"===r?this["a"+(o-1)].y:this["a"+(o-1)].x,s=o;break}0===o&&(t="vertical"===r?d.y:d.x),d.addEventListener(TouchEvent.TAP,function(){"vertical"===r?TweenMax.to(i.drag,.5,{y:this.y,onUpdate:l,onComplete:c}):TweenMax.to(i.drag,.5,{x:this.x,onUpdate:l,onComplete:c}),i.emit("nodeTap",{index:this.name.substr(1,1)})})}this.setDrag=function(t){t&&NBDrag.addDrag(i.drag,n)},this.updateBound=function(){"vertical"==r?(n={x:this.drag.x,y:this.drag.y,width:0,height:e},n={x:this.drag.x,y:this.drag.y,width:0,height:e}):n={x:this.drag.x,y:this.drag.y,width:e,height:0}},this.updateBound(),i.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==i._align_){var a=s-1;if("vertical"===r){var n=Math.round((this.y-t)/(e-t)*a);n<0&&(n=0),TweenMax.to(this,.5,{y:n*(e-t)/a,onUpdate:l,onComplete:c})}else{var o=Math.round((this.x-t)/(e-t)*a);o<0&&(o=0)}}}),i.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){l()}),i.drag.constY=i.drag.y;var h,l=function(){if("vertical"===r){var a=(i.drag.y-t)/(e-t);i.emit("change",{time:a})}else{i.drag.y=i.drag.constY,i.drag.x>=e&&(i.drag.x=e),i.drag.x<=t&&(i.drag.x=t);var n=(i.drag.x-t)/(e-t);i.emit("change",{time:n}),i.drag.line0&&(i.drag.line0.rotation=1800*n*Math.PI/180,i.drag.line1.rotation=360*n*Math.PI/180),i.bgMask&&(i.bgMask.getChildAt(0).scale.x=n)}},c=function(){i.setMomentsPause(!0,2e3,2);var a=s-1;if("vertical"===r){var n=(i.drag.y-t)/(e-t),o=Math.round(n*a);i.emit("change",{index:o,time:n})}else{var d=(i.drag.x-t)/(e-t),h=Math.round(d*a);i.emit("change",{index:h,time:d})}};this.getNodeCount=function(){return s},this.setNodePos=function(t){var e=this["a"+t];"vertical"===r?i.drag.y=e.y:i.drag.x=e.x},nb.MovieClip.ticker.add(function(){if(i._auto_&&!i.drag.isDragging){var a=e-t;"vertical"===r?(i.drag.y+=i._speed_,i.drag.y>a&&(i.drag.y=a)):(i.drag.x+=i._speed_,i.drag.x>a+i.a0.x&&(i.drag.x=a+i.a0.x)),l()}}),this.setAutoPlay=function(t,e){this._auto_=t,this._speed_=e||.1},this.setAutoAlign=function(t){this._align_=t},this.setMomentsPause=function(t,e,a){clearTimeout(h),t&&!i.NOTafterStopPlay?(i.setAutoPlay(!1),clearTimeout(h),i.setAutoPlay(!1),h=setTimeout(function(){i.setAutoPlay(!0,a)},e)):i.setAutoPlay(!1)},this.resetTimeline=function(){this.drag.x=this.bgMask.x}},t.exports=nb.substance0147},357:function(t,e,i){"use strict";i(239),nb.substance0155=extendsClass(ScienceMain,{frame0:function(){var t=this;t.timeline.setAutoPlay(!0,2),t.timeline.setAutoAlign(!1),t.timeline.addEventListener("change",function(e){t.movie.Sunflower.currentFrame=e.time*t.movie.Sunflower.totalFrames,e.time>=.25?t.movie.setChildIndex(t.movie.Sunflower,0):t.movie.setChildIndex(t.movie.Sunflower,t.movie.children.length-1)})},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"植物的一生",labName:"绿色开花植物的一生",title0:"观察植物的一生",CONCLUSIONAlign:"left",CONCLUSION:"植物的生命周期是：<br/>1、种子<br/>2、种子萌发<br/>3、幼苗生长发育<br/>4、开花结果<br/>5、死亡<br/>",isOpenObserve:!0},const:{},event:{}}),t.exports=nb.substance0155}});