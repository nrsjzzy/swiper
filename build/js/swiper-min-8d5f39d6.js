!function(t){function i(n){if(s[n])return s[n].exports;var e=s[n]={exports:{},id:n,loaded:!1};return t[n].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}var s={};return i.m=t,i.c=s,i.p="",i(0)}([function(t,i,s){"use strict";s(1),s(2);var n=function(t){this.queryString=t.dom.substring(1)||"",this.swiperLength=0,this.navigation=t.navigation||!1,this.activeIndex=0,this.navigationDom="",this.pageX=0,this.autoTime=t.autoTime||4e3,this.auto=t.auto||!1,this.trans=[-window.innerWidth,0,window.innerWidth],this.queryDom(),this.swiperLength<2?this.list[0].setAttribute("style","z-index:20;transform:translate3d("+this.trans[1]+"px,0,0);-webkit-transform:translate3d("+this.trans[1]+"px,0,0);transition:transform 0s;-webkit-transition:-webkit-transform 0s"):this.initDom().renderNavigation().bindEvent()};n.prototype={queryDom:function(){var t=this.queryString;return this.dom=document.getElementById(t),this.list=this.dom.getElementsByClassName("swiper-list"),this.navigationDom=this.dom.getElementsByClassName("swiper-navigation")[0],this.swiperLength=this.list.length,this},initDom:function(){return this.list[0].setAttribute("style","z-index:20;transform:translate3d("+this.trans[1]+"px,0,0);-webkit-transform:translate3d("+this.trans[1]+"px,0,0);transition:transform 0s;-webkit-transition:-webkit-transform 0s"),this.list[1].setAttribute("style","z-index:20;transform:translate3d("+this.trans[2]+"px,0,0);-webkit-transform:translate3d("+this.trans[2]+"px,0,0);transition:transform 0s;-webkit-transition:-webkit-transform 0s"),this},renderNavigation:function(){if(!this.navigation)return this;if(!this.navigationDom)return this;for(var t="",i=0;i<this.swiperLength;i++)t+=i!=this.activeIndex?"<div></div>":'<div class="active"></div>';return this.navigationDom.innerHTML=t,this},bindEvent:function(){function t(t){t.preventDefault(),this.pageX=t.touches[0].pageX,n.auto&&clearInterval(n.setInt)}function i(t){t.preventDefault();var i=t.touches[0].pageX,s=i-this.pageX;n.moveDom(s)}function s(t){var i=t.changedTouches[0].pageX,s=i-this.pageX;n.endDom(s),n.auto&&(n.setInt=setInterval(function(){n.moveDom("-4"),n.endDom("-4")},n.autoTime))}var n=this;this.dom.addEventListener("touchstart",t),this.dom.addEventListener("touchmove",i),this.dom.addEventListener("touchend",s),n.auto&&(n.setInt=setInterval(function(){n.moveDom("-4"),n.endDom("-4")},n.autoTime))},moveDom:function(t){var i,s,n;if(i=this.activeIndex,s=i+1,n=i-1,0==this.activeIndex&&(i=0,s=1,n=this.swiperLength-1),this.activeIndex==this.swiperLength-1&&(s=0,n=i-1),2==this.swiperLength){if(t>0)return;return this.list[i].setAttribute("style","z-index:20;transform:translate3d("+(this.trans[1]+t)+"px,0,0);-webkit-transform:translate3d("+(this.trans[1]+t)+"px,0,0);transition:transform 0s;-webkit-transition:-webkit-transform 0s"),void this.list[s].setAttribute("style","z-index:20;transform:translate3d("+(this.trans[2]+t)+"px,0,0);-webkit-transform:translate3d("+(this.trans[2]+t)+"px,0,0);transition:transform 0s;-webkit-transition:-webkit-transform 0s")}this.list[i].setAttribute("style","z-index:20;transform:translate3d("+(this.trans[1]+t)+"px,0,0);-webkit-transform:translate3d("+(this.trans[1]+t)+"px,0,0);transition:transform 0s;-webkit-transition:-webkit-transform 0s"),this.list[s].setAttribute("style","z-index:20;transform:translate3d("+(this.trans[2]+t)+"px,0,0);-webkit-transform:translate3d("+(this.trans[2]+t)+"px,0,0);transition:transform 0s;-webkit-transition:-webkit-transform 0s"),this.list[n].setAttribute("style","z-index:20;transform:translate3d("+(this.trans[0]+t)+"px,0,0);-webkit-transform:translate3d("+(this.trans[0]+t)+"px,0,0);transition:transform 0s;-webkit-transition:-webkit-transform 0s")},endDom:function(t){var i,s,n;i=this.activeIndex,s=i+1,n=i-1,0==this.activeIndex&&(i=0,s=1,n=this.swiperLength-1),this.activeIndex==this.swiperLength-1&&(s=0,n=i-1);var e=this;if(t>0){if(2==this.swiperLength)return;this.list[i].setAttribute("style","z-index:20;transform:translate3d("+this.trans[2]+"px,0,0);-webkit-transform:translate3d("+this.trans[2]+"px,0,0);transition:transform .4s;-webkit-transition:-webkit-transform .4s"),this.list[s].setAttribute("style",""),this.list[n].setAttribute("style","z-index:20;transform:translate3d("+this.trans[1]+"px,0,0);-webkit-transform:translate3d("+this.trans[1]+"px,0,0);transition:transform .4s;-webkit-transition:-webkit-transform .4s"),0==this.activeIndex?this.activeIndex=this.swiperLength-1:this.activeIndex=this.activeIndex-1}else{if(2==this.swiperLength)return this.list[i].setAttribute("style","z-index:20;transform:translate3d("+this.trans[0]+"px,0,0);-webkit-transform:translate3d("+this.trans[0]+"px,0,0);transition:transform .4s;-webkit-transition:-webkit-transform .4s"),this.list[s].setAttribute("style","z-index:20;transform:translate3d("+this.trans[1]+"px,0,0);-webkit-transform:translate3d("+this.trans[1]+"px,0,0);transition:transform .4s;-webkit-transition:-webkit-transform .4s"),void setTimeout(function(){e.list[i].setAttribute("style","z-index:20;transform:translate3d("+e.trans[2]+"px,0,0);-webkit-transform:translate3d("+e.trans[2]+"px,0,0);transition:transform 0s;-webkit-transition:-webkit-transform 0s"),1==e.activeIndex?e.activeIndex=0:e.activeIndex=1,e.renderNavigation()},400);this.list[i].setAttribute("style","z-index:20;transform:translate3d("+this.trans[0]+"px,0,0);-webkit-transform:translate3d("+this.trans[0]+"px,0,0);transition:transform .4s;-webkit-transition:-webkit-transform .4s"),this.list[s].setAttribute("style","z-index:20;transform:translate3d("+this.trans[1]+"px,0,0);-webkit-transform:translate3d("+this.trans[1]+"px,0,0);transition:transform .4s;-webkit-transition:-webkit-transform .4s"),this.list[n].setAttribute("style",""),this.activeIndex==this.swiperLength-1?this.activeIndex=0:this.activeIndex=this.activeIndex+1}this.renderNavigation()}},window.Swiper=n},function(t,i){"use strict";!function(t){function i(){var t,i=e.getBoundingClientRect().width;i>=750&&(i=750),320>=i&&(i=320),t=i/7.5,e.style.fontSize=t+"px"}var s,n=t.document,e=n.documentElement;t.addEventListener("resize",function(){clearTimeout(s),s=setTimeout(i,300)},!1),i()}(window)},function(t,i){}]);