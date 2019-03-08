(function(t){"use strict"
var e=jQuery.fn.revolution,o={alias:"SlideAnimations Min JS",name:"revolution.extensions.slideanims.min.js",min_core:"5.0",version:"1.6"}
jQuery.extend(!0,e,{animateSlide:function(t,a,i,r,s,l,d,h){return"stop"===e.compare_version(o).check?h:n(t,a,i,r,s,l,d,h)}})
var a=function(t,o,a,i){var n=t,r=n.find(".defaultimg"),s=r.data("mediafilter"),l=n.data("zoomstart"),d=n.data("rotationstart")
null!=r.data("currotate")&&(d=r.data("currotate")),null!=r.data("curscale")&&"box"==i?l=100*r.data("curscale"):null!=r.data("curscale")&&(l=r.data("curscale")),e.slotSize(r,o)
var h=r.attr("src"),f=r.css("backgroundColor"),c=o.width,u=o.height,p=r.data("fxof")
"on"==o.autoHeight&&(u=o.c.height()),null==p&&(p=0)
var g=0,w=r.data("bgfit"),m=r.data("bgrepeat"),v=r.data("bgposition")
switch(null==w&&(w="cover"),null==m&&(m="no-repeat"),null==v&&(v="center center"),i){case"box":for(var x=0,y=0,T=0;T<o.slots;T++){y=0
for(var z=0;z<o.slots;z++)n.append('<div class="slot" style="position:absolute;top:'+(0+y)+"px;left:"+(p+x)+"px;width:"+o.slotw+"px;height:"+o.sloth+'px;overflow:hidden;"><div class="slotslide '+s+'" data-x="'+x+'" data-y="'+y+'" style="position:absolute;top:0px;left:0px;width:'+o.slotw+"px;height:"+o.sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-y)+"px;left:"+(0-x)+"px;width:"+c+"px;height:"+u+"px;background-color:"+f+";background-image:url("+h+");background-repeat:"+m+";background-size:"+w+";background-position:"+v+';"></div></div></div>'),y+=o.sloth,null!=l&&null!=d&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:d})
x+=o.slotw}break
case"vertical":case"horizontal":if("horizontal"==i){if(!a)g=0-o.slotw
for(z=0;z<o.slots;z++)n.append('<div class="slot" style="position:absolute;top:0px;left:'+(p+z*o.slotw)+"px;overflow:hidden;width:"+(o.slotw+.3)+"px;height:"+u+'px"><div class="slotslide '+s+'" style="position:absolute;top:0px;left:'+g+"px;width:"+(o.slotw+.6)+"px;height:"+u+'px;overflow:hidden;"><div style="background-color:'+f+";position:absolute;top:0px;left:"+(0-z*o.slotw)+"px;width:"+c+"px;height:"+u+"px;background-image:url("+h+");background-repeat:"+m+";background-size:"+w+";background-position:"+v+';"></div></div></div>'),null!=l&&null!=d&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:d})}else{if(!a)g=0-o.sloth
for(z=0;z<o.slots+2;z++)n.append('<div class="slot" style="position:absolute;top:'+(0+z*o.sloth)+"px;left:"+p+"px;overflow:hidden;width:"+c+"px;height:"+o.sloth+'px"><div class="slotslide '+s+'" style="position:absolute;top:'+g+"px;left:0px;width:"+c+"px;height:"+o.sloth+'px;overflow:hidden;"><div style="background-color:'+f+";position:absolute;top:"+(0-z*o.sloth)+"px;left:0px;width:"+c+"px;height:"+u+"px;background-image:url("+h+");background-repeat:"+m+";background-size:"+w+";background-position:"+v+';"></div></div></div>'),null!=l&&null!=d&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:d})}}},i=function(t,e){return null==e||jQuery.isNumeric(t)?t:null==t?t:t.split(",")[e]},n=function(t,e,o,n,r,s,l,d){var h=o[0].opt,f=r.index(),c=n.index()<f?1:0
"arrow"==h.sc_indicator&&(c=h.sc_indicator_dir)
var u=function(t,e,o,a){var i=t[0].opt,n=punchgs.Power1.easeIn,r=punchgs.Power1.easeOut,s=punchgs.Power1.easeInOut,l=punchgs.Power2.easeIn,d=punchgs.Power2.easeOut,h=punchgs.Power2.easeInOut,f=(punchgs.Power3.easeIn,punchgs.Power3.easeOut),c=punchgs.Power3.easeInOut,u=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],p=[16,17,18,19,20,21,22,23,24,25,27],g=0,w=1,m=0,v=0,x=(new Array,[["boxslide",0,1,10,0,"box",!1,null,0,r,r,500,6],["boxfade",1,0,10,0,"box",!1,null,1,s,s,700,5],["slotslide-horizontal",2,0,0,200,"horizontal",!0,!1,2,h,h,700,3],["slotslide-vertical",3,0,0,200,"vertical",!0,!1,3,h,h,700,3],["curtain-1",4,3,0,0,"horizontal",!0,!0,4,r,r,300,5],["curtain-2",5,3,0,0,"horizontal",!0,!0,5,r,r,300,5],["curtain-3",6,3,25,0,"horizontal",!0,!0,6,r,r,300,5],["slotzoom-horizontal",7,0,0,400,"horizontal",!0,!0,7,r,r,300,7],["slotzoom-vertical",8,0,0,0,"vertical",!0,!0,8,d,d,500,8],["slotfade-horizontal",9,0,0,1e3,"horizontal",!0,null,9,d,d,2e3,10],["slotfade-vertical",10,0,0,1e3,"vertical",!0,null,10,d,d,2e3,10],["fade",11,0,1,300,"horizontal",!0,null,11,h,h,1e3,1],["crossfade",11,1,1,300,"horizontal",!0,null,11,h,h,1e3,1],["fadethroughdark",11,2,1,300,"horizontal",!0,null,11,h,h,1e3,1],["fadethroughlight",11,3,1,300,"horizontal",!0,null,11,h,h,1e3,1],["fadethroughtransparent",11,4,1,300,"horizontal",!0,null,11,h,h,1e3,1],["slideleft",12,0,1,0,"horizontal",!0,!0,12,c,c,1e3,1],["slideup",13,0,1,0,"horizontal",!0,!0,13,c,c,1e3,1],["slidedown",14,0,1,0,"horizontal",!0,!0,14,c,c,1e3,1],["slideright",15,0,1,0,"horizontal",!0,!0,15,c,c,1e3,1],["slideoverleft",12,7,1,0,"horizontal",!0,!0,12,c,c,1e3,1],["slideoverup",13,7,1,0,"horizontal",!0,!0,13,c,c,1e3,1],["slideoverdown",14,7,1,0,"horizontal",!0,!0,14,c,c,1e3,1],["slideoverright",15,7,1,0,"horizontal",!0,!0,15,c,c,1e3,1],["slideremoveleft",12,8,1,0,"horizontal",!0,!0,12,c,c,1e3,1],["slideremoveup",13,8,1,0,"horizontal",!0,!0,13,c,c,1e3,1],["slideremovedown",14,8,1,0,"horizontal",!0,!0,14,c,c,1e3,1],["slideremoveright",15,8,1,0,"horizontal",!0,!0,15,c,c,1e3,1],["papercut",16,0,0,600,"",null,null,16,c,c,1e3,2],["3dcurtain-horizontal",17,0,20,100,"vertical",!1,!0,17,s,s,500,7],["3dcurtain-vertical",18,0,10,100,"horizontal",!1,!0,18,s,s,500,5],["cubic",19,0,20,600,"horizontal",!1,!0,19,c,c,500,1],["cube",19,0,20,600,"horizontal",!1,!0,20,c,c,500,1],["flyin",20,0,4,600,"vertical",!1,!0,21,f,c,500,1],["turnoff",21,0,1,500,"horizontal",!1,!0,22,c,c,500,1],["incube",22,0,20,200,"horizontal",!1,!0,23,h,h,500,1],["cubic-horizontal",23,0,20,500,"vertical",!1,!0,24,d,d,500,1],["cube-horizontal",23,0,20,500,"vertical",!1,!0,25,d,d,500,1],["incube-horizontal",24,0,20,500,"vertical",!1,!0,26,h,h,500,1],["turnoff-vertical",25,0,1,200,"horizontal",!1,!0,27,h,h,500,1],["fadefromright",14,1,1,0,"horizontal",!0,!0,28,h,h,1e3,1],["fadefromleft",15,1,1,0,"horizontal",!0,!0,29,h,h,1e3,1],["fadefromtop",14,1,1,0,"horizontal",!0,!0,30,h,h,1e3,1],["fadefrombottom",13,1,1,0,"horizontal",!0,!0,31,h,h,1e3,1],["fadetoleftfadefromright",12,2,1,0,"horizontal",!0,!0,32,h,h,1e3,1],["fadetorightfadefromleft",15,2,1,0,"horizontal",!0,!0,33,h,h,1e3,1],["fadetobottomfadefromtop",14,2,1,0,"horizontal",!0,!0,34,h,h,1e3,1],["fadetotopfadefrombottom",13,2,1,0,"horizontal",!0,!0,35,h,h,1e3,1],["parallaxtoright",15,3,1,0,"horizontal",!0,!0,36,h,l,1500,1],["parallaxtoleft",12,3,1,0,"horizontal",!0,!0,37,h,l,1500,1],["parallaxtotop",14,3,1,0,"horizontal",!0,!0,38,h,n,1500,1],["parallaxtobottom",13,3,1,0,"horizontal",!0,!0,39,h,n,1500,1],["scaledownfromright",12,4,1,0,"horizontal",!0,!0,40,h,l,1e3,1],["scaledownfromleft",15,4,1,0,"horizontal",!0,!0,41,h,l,1e3,1],["scaledownfromtop",14,4,1,0,"horizontal",!0,!0,42,h,l,1e3,1],["scaledownfrombottom",13,4,1,0,"horizontal",!0,!0,43,h,l,1e3,1],["zoomout",13,5,1,0,"horizontal",!0,!0,44,h,l,1e3,1],["zoomin",13,6,1,0,"horizontal",!0,!0,45,h,l,1e3,1],["slidingoverlayup",27,0,1,0,"horizontal",!0,!0,47,s,r,2e3,1],["slidingoverlaydown",28,0,1,0,"horizontal",!0,!0,48,s,r,2e3,1],["slidingoverlayright",30,0,1,0,"horizontal",!0,!0,49,s,r,2e3,1],["slidingoverlayleft",29,0,1,0,"horizontal",!0,!0,50,s,r,2e3,1],["parallaxcirclesup",31,0,1,0,"horizontal",!0,!0,51,h,n,1500,1],["parallaxcirclesdown",32,0,1,0,"horizontal",!0,!0,52,h,n,1500,1],["parallaxcirclesright",33,0,1,0,"horizontal",!0,!0,53,h,n,1500,1],["parallaxcirclesleft",34,0,1,0,"horizontal",!0,!0,54,h,n,1500,1],["notransition",26,0,1,0,"horizontal",!0,null,46,h,l,1e3,1],["parallaxright",15,3,1,0,"horizontal",!0,!0,55,h,l,1500,1],["parallaxleft",12,3,1,0,"horizontal",!0,!0,56,h,l,1500,1],["parallaxup",14,3,1,0,"horizontal",!0,!0,57,h,n,1500,1],["parallaxdown",13,3,1,0,"horizontal",!0,!0,58,h,n,1500,1]])
i.duringslidechange=!0,i.testanims=!1,1==i.testanims&&(i.nexttesttransform=void 0===i.nexttesttransform?34:i.nexttesttransform+1,i.nexttesttransform=i.nexttesttransform>70?0:i.nexttesttransform,e=x[i.nexttesttransform][0],console.log(e+"  "+i.nexttesttransform+"  "+x[i.nexttesttransform][1]+"  "+x[i.nexttesttransform][2])),jQuery.each(["parallaxcircles","slidingoverlay","slide","slideover","slideremove","parallax","parralaxto"],function(t,o){e==o+"horizontal"&&(e=1!=a?o+"left":o+"right"),e==o+"vertical"&&(e=1!=a?o+"up":o+"down")}),"random"==e&&(e=Math.round(Math.random()*x.length-1))>x.length-1&&(e=x.length-1),"random-static"==e&&((e=Math.round(Math.random()*u.length-1))>u.length-1&&(e=u.length-1),e=u[e]),"random-premium"==e&&((e=Math.round(Math.random()*p.length-1))>p.length-1&&(e=p.length-1),e=p[e])
if(1==i.isJoomla&&null!=window.MooTools&&-1!=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45].indexOf(e)){var y=Math.round(Math.random()*(p.length-2))+1
y>p.length-1&&(y=p.length-1),0==y&&(y=1),e=p[y]}jQuery.each(x,function(t,o){o[0]!=e&&o[8]!=e||(g=o[1],w=o[2],m=v),v+=1}),g>30&&(g=30),g<0&&(g=0)
var T=new Object
return T.nexttrans=g,T.STA=x[m],T.specials=w,T}(o,e,0,c),p=u.STA,g=u.specials
t=u.nexttrans
"on"==s.data("kenburns")&&(t=11)
var w=n.data("nexttransid")||0,m=i(n.data("masterspeed"),w)
m=(m="default"===m?p[11]:"random"===m?Math.round(1e3*Math.random()+300):null!=m?parseInt(m,0):p[11])>h.delay?h.delay:m,m+=p[4],h.slots=i(n.data("slotamount"),w),h.slots=null==h.slots||"default"==h.slots?p[12]:"random"==h.slots?Math.round(12*Math.random()+4):h.slots,h.slots=h.slots<1?"boxslide"==e?Math.round(6*Math.random()+3):"flyin"==e?Math.round(4*Math.random()+1):h.slots:h.slots,h.slots=(4==t||5==t||6==t)&&h.slots<3?3:h.slots,h.slots=0!=p[3]?Math.min(h.slots,p[3]):h.slots,h.slots=9==t?h.width/h.slots:10==t?h.height/h.slots:h.slots,h.rotate=i(n.data("rotate"),w),h.rotate=null==h.rotate||"default"==h.rotate?0:999==h.rotate||"random"==h.rotate?Math.round(360*Math.random()):h.rotate,h.rotate=!jQuery.support.transition||h.ie||h.ie9?0:h.rotate,11!=t&&(null!=p[7]&&a(l,h,p[7],p[5]),null!=p[6]&&a(s,h,p[6],p[5])),d.add(punchgs.TweenLite.set(s.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),d.add(punchgs.TweenLite.set(l.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),d.add(punchgs.TweenLite.set(s.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),d.add(punchgs.TweenLite.set(l.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),d.add(punchgs.TweenLite.set(s,{autoAlpha:1,y:"+0%",x:"+0%"}),0),d.add(punchgs.TweenLite.set(l,{autoAlpha:1,y:"+0%",x:"+0%"}),0),d.add(punchgs.TweenLite.set(s.parent(),{backgroundColor:"transparent"}),0),d.add(punchgs.TweenLite.set(l.parent(),{backgroundColor:"transparent"}),0)
var v=i(n.data("easein"),w),x=i(n.data("easeout"),w)
if(v="default"===v?p[9]||punchgs.Power2.easeInOut:v||p[9]||punchgs.Power2.easeInOut,x="default"===x?p[10]||punchgs.Power2.easeInOut:x||p[10]||punchgs.Power2.easeInOut,0==t){var y=Math.ceil(h.height/h.sloth),T=0
s.find(".slotslide").each(function(t){var e=jQuery(this);(T+=1)==y&&(T=0),d.add(punchgs.TweenLite.from(e,m/600,{opacity:0,top:0-h.sloth,left:0-h.slotw,rotation:h.rotate,force3D:"auto",ease:v}),(15*t+30*T)/1500)})}if(1==t){var z
s.find(".slotslide").each(function(t){var e=jQuery(this),o=Math.random()*m+300,a=500*Math.random()+200
o+a>z&&(z=a+a,t),d.add(punchgs.TweenLite.from(e,o/1e3,{autoAlpha:0,force3D:"auto",rotation:h.rotate,ease:v}),a/1e3)})}if(2==t){var L=new punchgs.TimelineLite
l.find(".slotslide").each(function(){var t=jQuery(this)
L.add(punchgs.TweenLite.to(t,m/1e3,{left:h.slotw,ease:v,force3D:"auto",rotation:0-h.rotate}),0),d.add(L,0)}),s.find(".slotslide").each(function(){var t=jQuery(this)
L.add(punchgs.TweenLite.from(t,m/1e3,{left:0-h.slotw,ease:v,force3D:"auto",rotation:h.rotate}),0),d.add(L,0)})}if(3==t){L=new punchgs.TimelineLite
l.find(".slotslide").each(function(){var t=jQuery(this)
L.add(punchgs.TweenLite.to(t,m/1e3,{top:h.sloth,ease:v,rotation:h.rotate,force3D:"auto",transformPerspective:600}),0),d.add(L,0)}),s.find(".slotslide").each(function(){var t=jQuery(this)
L.add(punchgs.TweenLite.from(t,m/1e3,{top:0-h.sloth,rotation:h.rotate,ease:x,force3D:"auto",transformPerspective:600}),0),d.add(L,0)})}if(4==t||5==t){setTimeout(function(){l.find(".defaultimg").css({opacity:0})},100)
var b=m/1e3
L=new punchgs.TimelineLite
l.find(".slotslide").each(function(e){var o=jQuery(this),a=e*b/h.slots
5==t&&(a=(h.slots-e-1)*b/h.slots/1.5),L.add(punchgs.TweenLite.to(o,3*b,{transformPerspective:600,force3D:"auto",top:0+h.height,opacity:.5,rotation:h.rotate,ease:v,delay:a}),0),d.add(L,0)}),s.find(".slotslide").each(function(e){var o=jQuery(this),a=e*b/h.slots
5==t&&(a=(h.slots-e-1)*b/h.slots/1.5),L.add(punchgs.TweenLite.from(o,3*b,{top:0-h.height,opacity:.5,rotation:h.rotate,force3D:"auto",ease:punchgs.eo,delay:a}),0),d.add(L,0)})}if(6==t){h.slots<2&&(h.slots=2),h.slots%2&&(h.slots=h.slots+1)
L=new punchgs.TimelineLite
setTimeout(function(){l.find(".defaultimg").css({opacity:0})},100),l.find(".slotslide").each(function(t){var e=jQuery(this)
if(t+1<h.slots/2)var o=90*(t+2)
else o=90*(2+h.slots-t)
L.add(punchgs.TweenLite.to(e,(m+o)/1e3,{top:0+h.height,opacity:1,force3D:"auto",rotation:h.rotate,ease:v}),0),d.add(L,0)}),s.find(".slotslide").each(function(t){var e=jQuery(this)
if(t+1<h.slots/2)var o=90*(t+2)
else o=90*(2+h.slots-t)
L.add(punchgs.TweenLite.from(e,(m+o)/1e3,{top:0-h.height,opacity:1,force3D:"auto",rotation:h.rotate,ease:x}),0),d.add(L,0)})}if(7==t){(m*=2)>h.delay&&(m=h.delay)
L=new punchgs.TimelineLite
setTimeout(function(){l.find(".defaultimg").css({opacity:0})},100),l.find(".slotslide").each(function(){var t=jQuery(this).find("div")
L.add(punchgs.TweenLite.to(t,m/1e3,{left:0-h.slotw/2+"px",top:0-h.height/2+"px",width:2*h.slotw+"px",height:2*h.height+"px",opacity:0,rotation:h.rotate,force3D:"auto",ease:v}),0),d.add(L,0)}),s.find(".slotslide").each(function(t){var e=jQuery(this).find("div")
L.add(punchgs.TweenLite.fromTo(e,m/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-t*h.slotw+"px",ease:x,force3D:"auto",top:"0px",width:h.width,height:h.height,opacity:1,rotation:0,delay:.1}),0),d.add(L,0)})}if(8==t){(m*=3)>h.delay&&(m=h.delay)
L=new punchgs.TimelineLite
l.find(".slotslide").each(function(){var t=jQuery(this).find("div")
L.add(punchgs.TweenLite.to(t,m/1e3,{left:0-h.width/2+"px",top:0-h.sloth/2+"px",width:2*h.width+"px",height:2*h.sloth+"px",force3D:"auto",ease:v,opacity:0,rotation:h.rotate}),0),d.add(L,0)}),s.find(".slotslide").each(function(t){var e=jQuery(this).find("div")
L.add(punchgs.TweenLite.fromTo(e,m/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:"0px",top:0-t*h.sloth+"px",width:s.find(".defaultimg").data("neww")+"px",height:s.find(".defaultimg").data("newh")+"px",opacity:1,ease:x,rotation:0}),0),d.add(L,0)})}if(9==t||10==t){s.find(".slotslide").each(function(t){var e=jQuery(this)
0,d.add(punchgs.TweenLite.fromTo(e,m/2e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:v,delay:t*h.slots/100/2e3}),0)})}if(27==t||28==t||29==t||30==t){var D=s.find(".slot"),A=27==t||29==t?"-100%":"+100%",j=27==t||29==t?"+100%":"-100%",k=27==t||29==t?"-80%":"80%",M=27==t||29==t?"+80%":"-80%",P=27==t||29==t?"+10%":"-10%",Q={overwrite:"all"},O={autoAlpha:0,zIndex:1,force3D:"auto",ease:v},I={position:"inherit",autoAlpha:0,overwrite:"all",zIndex:1},X={autoAlpha:1,force3D:"auto",ease:x},Y={overwrite:"all",zIndex:2,opacity:1,autoAlpha:1},S={autoAlpha:1,force3D:"auto",overwrite:"all",ease:v},_={overwrite:"all",zIndex:2,autoAlpha:1},C={autoAlpha:1,force3D:"auto",ease:v},V=1==(27==t||28==t?1:2)?"y":"x"
Q[V]="0px",O[V]=A,I[V]=P,X[V]="0%",Y[V]=j,S[V]=A,_[V]=k,C[V]=M,D.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'),d.add(punchgs.TweenLite.fromTo(l,m/1e3,Q,O),0),d.add(punchgs.TweenLite.fromTo(s.find(".defaultimg"),m/2e3,I,X),m/2e3),d.add(punchgs.TweenLite.fromTo(D,m/1e3,Y,S),0),d.add(punchgs.TweenLite.fromTo(D.find(".slotslide div"),m/1e3,_,C),0)}if(31==t||32==t||33==t||34==t){m=6e3,v=punchgs.Power3.easeInOut
var Z=m/1e3
mas=Z-Z/5,_nt=t,fy=31==_nt?"+100%":32==_nt?"-100%":"0%",fx=33==_nt?"+100%":34==_nt?"-100%":"0%",ty=31==_nt?"-100%":32==_nt?"+100%":"0%",tx=33==_nt?"-100%":34==_nt?"+100%":"0%",d.add(punchgs.TweenLite.fromTo(l,Z-.2*Z,{y:0,x:0},{y:ty,x:tx,ease:x}),.2*Z),d.add(punchgs.TweenLite.fromTo(s,Z,{y:fy,x:fx},{y:"0%",x:"0%",ease:v}),0),s.find(".slot").remove(),s.find(".defaultimg").clone().appendTo(s).addClass("slot"),function(t,e,o,a,i){var n=t.find(".slot"),r=[2,1.2,.9,.7,.55,.42],l=t.width(),h=t.height()
n.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>')
for(var f=0;f<6;f++)n.parent().clone(!1).appendTo(s)
t.find(".slot-circle-wrapper").each(function(t){if(t<6){var a=jQuery(this),n=a.find(".slot"),s=l>h?r[t]*l:r[t]*h,f=s/2-l/2+0,c=s/2-h/2+0,u={scale:1,transformOrigo:"50% 50%",width:s+"px",height:s+"px",top:h/2-s/2+"px",left:(33==o?l/2-s/2:34==o?l-s:l/2-s/2)+"px",borderRadius:0!=t?"50%":"0"},p={scale:1,top:h/2-s/2,left:l/2-s/2,ease:i},g={width:l,height:h,autoAlpha:1,top:c+"px",position:"absolute",left:(33==o?f:34==o?f+l/2:f)+"px"},w={top:c+"px",left:f+"px",ease:i},m=e
d.add(punchgs.TweenLite.fromTo(a,m,u,p),0),d.add(punchgs.TweenLite.fromTo(n,m,g,w),0),d.add(punchgs.TweenLite.fromTo(a,.001,{autoAlpha:0},{autoAlpha:1}),0)}})}(s,Z,_nt,0,v)}if(11==t){g>4&&(g=0)
var H=2==g?"#000000":3==g?"#ffffff":"transparent"
switch(g){case 0:d.add(punchgs.TweenLite.fromTo(s,m/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:v}),0)
break
case 1:d.add(punchgs.TweenLite.fromTo(s,m/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:v}),0),d.add(punchgs.TweenLite.fromTo(l,m/1e3,{autoAlpha:1},{autoAlpha:0,force3D:"auto",ease:v}),0)
break
case 2:case 3:case 4:d.add(punchgs.TweenLite.set(l.parent(),{backgroundColor:H,force3D:"auto"}),0),d.add(punchgs.TweenLite.set(s.parent(),{backgroundColor:"transparent",force3D:"auto"}),0),d.add(punchgs.TweenLite.to(l,m/2e3,{autoAlpha:0,force3D:"auto",ease:v}),0),d.add(punchgs.TweenLite.fromTo(s,m/2e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:v}),m/2e3)}d.add(punchgs.TweenLite.set(s.find(".defaultimg"),{autoAlpha:1}),0),d.add(punchgs.TweenLite.set(l.find("defaultimg"),{autoAlpha:1}),0)}if(26==t){m=0,d.add(punchgs.TweenLite.fromTo(s,m/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:v}),0),d.add(punchgs.TweenLite.to(l,m/1e3,{autoAlpha:0,force3D:"auto",ease:v}),0),d.add(punchgs.TweenLite.set(s.find(".defaultimg"),{autoAlpha:1}),0),d.add(punchgs.TweenLite.set(l.find("defaultimg"),{autoAlpha:1}),0)}if(12==t||13==t||14==t||15==t){(m=m)>h.delay&&(m=h.delay),setTimeout(function(){punchgs.TweenLite.set(l.find(".defaultimg"),{autoAlpha:0})},100)
var J=h.width,N=h.height,R=s.find(".slotslide, .defaultvid"),q=0,B=0,E=1,F=1,G=1,K=m/1e3,U=K
"fullwidth"!=h.sliderLayout&&"fullscreen"!=h.sliderLayout||(J=R.width(),N=R.height()),12==t?q=J:15==t?q=0-J:13==t?B=N:14==t&&(B=0-N),1==g&&(E=0),2==g&&(E=0),3==g&&(K=m/1300),4!=g&&5!=g||(F=.6),6==g&&(F=1.4),5!=g&&6!=g||(G=1.4,E=0,J=0,N=0,q=0,B=0),6==g&&(G=.6)
7==g&&(J=0,N=0)
var W=s.find(".slotslide"),$=l.find(".slotslide, .defaultvid")
if(d.add(punchgs.TweenLite.set(r,{zIndex:15}),0),d.add(punchgs.TweenLite.set(n,{zIndex:20}),0),8==g?(d.add(punchgs.TweenLite.set(r,{zIndex:20}),0),d.add(punchgs.TweenLite.set(n,{zIndex:15}),0),d.add(punchgs.TweenLite.set(W,{left:0,top:0,scale:1,opacity:1,rotation:0,ease:v,force3D:"auto"}),0)):d.add(punchgs.TweenLite.from(W,K,{left:q,top:B,scale:G,opacity:E,rotation:h.rotate,ease:v,force3D:"auto"}),0),4!=g&&5!=g||(J=0,N=0),1!=g)switch(t){case 12:d.add(punchgs.TweenLite.to($,U,{left:0-J+"px",force3D:"auto",scale:F,opacity:E,rotation:h.rotate,ease:x}),0)
break
case 15:d.add(punchgs.TweenLite.to($,U,{left:J+"px",force3D:"auto",scale:F,opacity:E,rotation:h.rotate,ease:x}),0)
break
case 13:d.add(punchgs.TweenLite.to($,U,{top:0-N+"px",force3D:"auto",scale:F,opacity:E,rotation:h.rotate,ease:x}),0)
break
case 14:d.add(punchgs.TweenLite.to($,U,{top:N+"px",force3D:"auto",scale:F,opacity:E,rotation:h.rotate,ease:x}),0)}}if(16==t){L=new punchgs.TimelineLite
d.add(punchgs.TweenLite.set(r,{position:"absolute","z-index":20}),0),d.add(punchgs.TweenLite.set(n,{position:"absolute","z-index":15}),0),r.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'),r.find(".tp-half-one").clone(!0).appendTo(r).addClass("tp-half-two"),r.find(".tp-half-two").removeClass("tp-half-one")
J=h.width,N=h.height
"on"==h.autoHeight&&(N=o.height()),r.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+J+"px;height:"+N+'px;"></div>'),r.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+J+"px;height:"+N+'px;"></div>'),r.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"}),r.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'),d.add(punchgs.TweenLite.set(r.find(".tp-half-two"),{width:J,height:N,overflow:"hidden",zIndex:15,position:"absolute",top:N/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0),d.add(punchgs.TweenLite.set(r.find(".tp-half-one"),{width:J,height:N/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0)
r.find(".defaultimg")
var tt=Math.round(20*Math.random()-10),et=Math.round(20*Math.random()-10),ot=Math.round(20*Math.random()-10),at=.4*Math.random()-.2,it=.4*Math.random()-.2,nt=1*Math.random()+1,rt=1*Math.random()+1,st=.3*Math.random()+.3
d.add(punchgs.TweenLite.set(r.find(".tp-half-one"),{overflow:"hidden"}),0),d.add(punchgs.TweenLite.fromTo(r.find(".tp-half-one"),m/800,{width:J,height:N/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:nt,rotation:tt,y:0-N-N/4,autoAlpha:0,ease:v}),0),d.add(punchgs.TweenLite.fromTo(r.find(".tp-half-two"),m/800,{width:J,height:N,overflow:"hidden",position:"absolute",top:N/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:rt,rotation:et,y:N+N/4,ease:v,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(r,{position:"absolute","z-index":15}),punchgs.TweenLite.set(n,{position:"absolute","z-index":20}),r.find(".tp-half-one").length>0&&(r.find(".tp-half-one .defaultimg").unwrap(),r.find(".tp-half-one .slotholder").unwrap()),r.find(".tp-half-two").remove()}}),0),L.add(punchgs.TweenLite.set(s.find(".defaultimg"),{autoAlpha:1}),0),null!=r.html()&&d.add(punchgs.TweenLite.fromTo(n,(m-200)/1e3,{scale:st,x:h.width/4*at,y:N/4*it,rotation:ot,force3D:"auto",transformOrigin:"center center",ease:x},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0),d.add(L,0)}if(17==t&&s.find(".slotslide").each(function(t){var e=jQuery(this)
d.add(punchgs.TweenLite.fromTo(e,m/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:v,delay:.06*t}),0)}),18==t&&s.find(".slotslide").each(function(t){var e=jQuery(this)
d.add(punchgs.TweenLite.fromTo(e,m/500,{autoAlpha:0,rotationY:110,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:v,delay:.06*t}),0)}),19==t||22==t){L=new punchgs.TimelineLite
d.add(punchgs.TweenLite.set(r,{zIndex:20}),0),d.add(punchgs.TweenLite.set(n,{zIndex:20}),0),setTimeout(function(){l.find(".defaultimg").css({opacity:0})},100)
var lt=90,dt=(E=1,"center center ")
1==c&&(lt=-90),19==t?(dt=dt+"-"+h.height/2,E=0):dt+=h.height/2,punchgs.TweenLite.set(o,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),s.find(".slotslide").each(function(t){var e=jQuery(this)
L.add(punchgs.TweenLite.fromTo(e,m/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:h.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:dt,rotationX:lt},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:50*t/1e3,ease:v}),0),L.add(punchgs.TweenLite.to(e,.1,{autoAlpha:1,delay:50*t/1e3}),0),d.add(L)}),l.find(".slotslide").each(function(t){var e=jQuery(this),o=-90
1==c&&(o=90),L.add(punchgs.TweenLite.fromTo(e,m/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:dt,rotationX:0},{autoAlpha:1,rotationY:h.rotate,top:0,z:10,scale:1,rotationX:o,delay:50*t/1e3,force3D:"auto",ease:x}),0),d.add(L)}),d.add(punchgs.TweenLite.set(r,{zIndex:18}),0)}if(20==t){if(setTimeout(function(){l.find(".defaultimg").css({opacity:0})},100),1==c){var ht=-h.width
lt=80,dt="20% 70% -"+h.height/2}else ht=h.width,lt=-80,dt="80% 70% -"+h.height/2
s.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3
d.add(punchgs.TweenLite.fromTo(e,m/1e3,{left:ht,rotationX:40,z:-600,opacity:E,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:dt,transformStyle:"flat",rotationY:lt},{left:0,rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:o,ease:v}),0)}),l.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3
if(o=t>0?o+m/9e3:0,1!=c)var a=-h.width/2,i=30,n="20% 70% -"+h.height/2
else a=h.width/2,i=-30,n="80% 70% -"+h.height/2
x=punchgs.Power2.easeInOut,d.add(punchgs.TweenLite.fromTo(e,m/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:n,transformStyle:"flat",rotationY:0},{opacity:1,rotationX:20,top:0,z:-600,left:a,force3D:"auto",rotationY:i,delay:o,ease:x}),0)})}if(21==t||25==t){setTimeout(function(){l.find(".defaultimg").css({opacity:0})},100)
lt=90,ht=-h.width
var ft=-lt
if(1==c)if(25==t){dt="center top 0"
lt=h.rotate}else{dt="left center 0"
ft=h.rotate}else if(ht=h.width,lt=-90,25==t){dt="center bottom 0"
ft=-lt,lt=h.rotate}else{dt="right center 0"
ft=h.rotate}s.find(".slotslide").each(function(t){var e=jQuery(this),o=m/1.5/3
d.add(punchgs.TweenLite.fromTo(e,2*o/1e3,{left:0,transformStyle:"flat",rotationX:ft,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:dt,rotationY:lt},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",delay:o/1e3,ease:v}),0)}),1!=c?(ht=-h.width,lt=90,25==t?(dt="center top 0",ft=-lt,lt=h.rotate):(dt="left center 0",ft=h.rotate)):(ht=h.width,lt=-90,25==t?(dt="center bottom 0",ft=-lt,lt=h.rotate):(dt="right center 0",ft=h.rotate)),l.find(".slotslide").each(function(t){var e=jQuery(this)
d.add(punchgs.TweenLite.fromTo(e,m/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:dt,rotationY:0},{left:0,rotationX:ft,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:lt,ease:x}),0)})}if(23==t||24==t){setTimeout(function(){l.find(".defaultimg").css({opacity:0})},100)
lt=-90,E=1
if(1==c&&(lt=90),23==t){dt="center center -"+h.width/2
E=0}else dt="center center "+h.width/2
punchgs.TweenLite.set(o,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500}),s.find(".slotslide").each(function(t){var e=jQuery(this)
d.add(punchgs.TweenLite.fromTo(e,m/1e3,{left:0,rotationX:h.rotate,force3D:"auto",opacity:E,top:0,scale:1,transformPerspective:1200,transformOrigin:dt,rotationY:lt},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:50*t/500,ease:v}),0)}),lt=90,1==c&&(lt=-90),l.find(".slotslide").each(function(e){var o=jQuery(this)
d.add(punchgs.TweenLite.fromTo(o,m/1e3,{left:0,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformStyle:"flat",transformPerspective:1200,transformOrigin:dt,rotationY:0},{left:0,rotationX:h.rotate,top:0,scale:1,rotationY:lt,delay:50*e/500,ease:x}),0),23==t&&d.add(punchgs.TweenLite.fromTo(o,m/2e3,{autoAlpha:1},{autoAlpha:0,delay:50*e/500+m/3e3,ease:x}),0)})}return d}})(jQuery)
