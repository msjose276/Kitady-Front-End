!function(t){"use strict"
var e=jQuery.fn.revolution,a={alias:"KenBurns Min JS",name:"revolution.extensions.kenburn.min.js",min_core:"5.0",version:"1.2.0"}
jQuery.extend(!0,e,{stopKenBurn:function(t){return"stop"!==e.compare_version(a).check&&void(null!=t.data("kbtl")&&t.data("kbtl").pause())},startKenBurn:function(t,r,n){if("stop"===e.compare_version(a).check)return!1
var s=t.data(),i=t.find(".defaultimg"),o=i.data("lazyload")||i.data("src"),d=(s.owidth,s.oheight,"carousel"===r.sliderType?r.carousel.slide_width:r.ul.width()),l=r.ul.height()
t.data("kbtl")&&t.data("kbtl").kill(),n=n||0,0==t.find(".tp-kbimg").length&&(t.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="'+o+'" style="position:absolute;" width="'+s.owidth+'" height="'+s.oheight+'"></div>'),t.data("kenburn",t.find(".tp-kbimg")))
var h=function(t,e,a,r,n,s,i){var o=t*a,d=e*a,l=Math.abs(r-o),h=Math.abs(n-d),p=new Object
return p.l=(0-s)*l,p.r=p.l+o,p.t=(0-i)*h,p.b=p.t+d,p.h=s,p.v=i,p},p=function(t,e,a,r,n){var s=t.bgposition.split(" ")||"center center",i="center"==s[0]?"50%":"left"==s[0]||"left"==s[1]?"0%":"right"==s[0]||"right"==s[1]?"100%":s[0],o="center"==s[1]?"50%":"top"==s[0]||"top"==s[1]?"0%":"bottom"==s[0]||"bottom"==s[1]?"100%":s[1]
i=parseInt(i,0)/100||0,o=parseInt(o,0)/100||0
var d=new Object
return d.start=h(n.start.width,n.start.height,n.start.scale,e,a,i,o),d.end=h(n.start.width,n.start.height,n.end.scale,e,a,i,o),d}
null!=t.data("kbtl")&&(t.data("kbtl").kill(),t.removeData("kbtl"))
var c=t.data("kenburn"),u=c.parent(),g=function(t,e,a){var r=a.scalestart/100,n=a.scaleend/100,s=null!=a.offsetstart&&a.offsetstart.split(" ")||[0,0],i=null!=a.offsetend&&a.offsetend.split(" ")||[0,0]
a.bgposition="center center"==a.bgposition?"50% 50%":a.bgposition
var o=new Object
a.owidth,a.oheight
if(a.owidth,a.oheight,o.start=new Object,o.starto=new Object,o.end=new Object,o.endo=new Object,o.start.width=t,o.start.height=o.start.width/a.owidth*a.oheight,o.start.height<e){var d=e/o.start.height
o.start.height=e,o.start.width=o.start.width*d}o.start.transformOrigin=a.bgposition,o.start.scale=r,o.end.scale=n,a.rotatestart=0===a.rotatestart?.01:a.rotatestart,o.start.rotation=a.rotatestart+"deg",o.end.rotation=a.rotateend+"deg"
var l=p(a,t,e,0,o)
s[0]=parseFloat(s[0])+l.start.l,i[0]=parseFloat(i[0])+l.end.l,s[1]=parseFloat(s[1])+l.start.t,i[1]=parseFloat(i[1])+l.end.t
var h=l.start.r-l.start.l,c=l.start.b-l.start.t,u=l.end.r-l.end.l,g=l.end.b-l.end.t
return s[0]=s[0]>0?0:h+s[0]<t?t-h:s[0],i[0]=i[0]>0?0:u+i[0]<t?t-u:i[0],s[1]=s[1]>0?0:c+s[1]<e?e-c:s[1],i[1]=i[1]>0?0:g+i[1]<e?e-g:i[1],o.starto.x=s[0]+"px",o.starto.y=s[1]+"px",o.endo.x=i[0]+"px",o.endo.y=i[1]+"px",o.end.ease=o.endo.ease=a.ease,o.end.force3D=o.endo.force3D=!0,o}(d,l,s),b=new punchgs.TimelineLite
b.pause(),g.start.transformOrigin="0% 0%",g.starto.transformOrigin="0% 0%",b.add(punchgs.TweenLite.fromTo(c,s.duration/1e3,g.start,g.end),0),b.add(punchgs.TweenLite.fromTo(u,s.duration/1e3,g.starto,g.endo),0),b.progress(n),b.play(),t.data("kbtl",b)}})}(jQuery)
