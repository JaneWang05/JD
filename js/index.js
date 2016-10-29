$(function(){
  $("img.lazy").lazyload({
    effect : "fadeIn"
  });
   // 选项卡    
     var headleft=$(".headleft");
	 var location=$(".location");
	 for(i=0;i<location.length;i++){
	 	headleft[i].index=i;
	 	headleft[i].onmouseover=function(){
	 		location[this.index].style.display="block";
	 	}
	 	headleft[i].onmouseout=function(){
	 		location[this.index].style.display="none";
	 	}
	 }



     var wode=$(".wode");
	 var myjd=$(".myjd");
	 for(i=0;i<myjd.length;i++){
	 	wode[i].index=i;
	 	wode[i].onmouseover=function(){
	 		myjd[this.index].style.display="block";
	 	}
	 	wode[i].onmouseout=function(){
	 		myjd[this.index].style.display="none";
	 	}
	 }




     var clain=$(".clain");
	 var clainewm=$(".clainewm");
	 for(i=0;i<clainewm.length;i++){
	 	clain[i].index=i;
	 	clain[i].onmouseover=function(){
	 		clainewm[this.index].style.display="block";
	 	}
	 	clain[i].onmouseout=function(){
	 		clainewm[this.index].style.display="none";
	 	}
	 }


     var serve=$(".serve");
	 var servenr=$(".servenr");
	 for(i=0;i<servenr.length;i++){
	 	serve[i].index=i;
	 	serve[i].onmouseover=function(){
	 		servenr[this.index].style.display="block";
	 	}
	 	serve[i].onmouseout=function(){
	 		servenr[this.index].style.display="none";
	 	}
	 }
    



     var sj=$(".sj");
	 var kehuduan=$(".kehuduan");
	 for(i=0;i<kehuduan.length;i++){
	 	sj[i].index=i;
	 	sj[i].onmouseover=function(){
	 		kehuduan[this.index].style.display="block";
	 	}
	 	sj[i].onmouseout=function(){
	 		kehuduan[this.index].style.display="none";
	 	}
	 }
    


     var headnav=$(".headnav");
	 var headnavnr=$(".headnavnr");
	 for(i=0;i<headnavnr.length;i++){
	 	headnav[i].index=i;
	 	headnav[i].onmouseover=function(){
	 		headnavnr[this.index].style.display="block";
	 	}
	 	headnav[i].onmouseout=function(){
	 		headnavnr[this.index].style.display="none";
	 	}
	 }
    // 搜索框
    var search=getChilds($(".ssq")[0])[0];
    search.onclick=function(){
        this.value="";
    }
    search.onblur=function(){
        this.value="月饼礼盒";
    }
    // 购物车
    var gwc=$(".gwc");
   var gwclist=$(".gou1");
   for(i=0;i<gwclist.length;i++){
    gwc[i].index=i;
    gwc[i].onmouseover=function(){
      gwclist[this.index].style.display="block";
    }
    gwc[i].onmouseout=function(){
      gwclist[this.index].style.display="none";
    }
   }
    //轮播图
	var middle=$(".middle")[0];
	var imgs=$("a",$(".inner")[0]);
	var lis=$("li",$(".imglist")[0]);
	var btnL=$(".btnL")[0];
	var btnR=$(".btnR")[0];
	imgs[0].style.zIndex=5;
	// lis[0].ClassName="hot";
	lis[0].style.background="#C81623";
	var now=0;
	var t=setInterval(move,2000);
	middle.onmouseover=function(){
		clearInterval(t);
	}
	middle.onmouseout=function(){
		t=setInterval(move,2000);
	}
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.zIndex=5;
			animate(imgs[i],{opacity:0});
		    lis[i].style.background="";
		}

		// lis[this.index].ClassName="hot";
		lis[this.index].style.background="#C81623";
		// imgs[this.index].style.zIndex=10;
		animate(imgs[this.index],{opacity:1});
		now=this.index;	
		}
	}
	// move 函数
	function move(){
		now++;
		if(now==imgs.length){
			now=0;
		}
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.zIndex=5;
			animate(imgs[i],{opacity:0});
			// lis[i].ClassName="";
			lis[i].style.background="";
		}
		lis[now].style.background="#C81623";
		// imgs[now].style.zIndex=10;
		animate(imgs[now],{opacity:1});
		
	}	

	function moveL(){
		now--;
		if(now<0){
			now=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.zIndex=5;
			animate(imgs[i],{opacity:0});
			lis[i].style.background="";
		}
		lis[now].style.background="#C81623";
		// imgs[now].style.zIndex=10;
		animate(imgs[now],{opacity:1});
	}
	// btnL btnR
	btnR.onclick=function(){
		move();
	}
	btnL.onclick=function(){
		moveL()
	}

	// 推荐 节点轮播
	var jianright=$(".jianright")[0];
  var jianrighta=$(".jianrighta")[0];
  var eight=$("a",jianrighta);
  var jleft=$(".jleft")[0];
  var jright=$(".jright")[0];
   
   nodeLunbo(jianrighta,jleft,jright)
    
    function nodeLunbo(imgBox,left,right){
    var lunbo=imgBox.parentNode;
    var imgone=getChilds(imgBox)[0];
    var left=left;
    var right=right;
    var imgBox=imgBox;
    var width=parseInt(getStyle(imgone,"width"));
    var n=5;
    function move(){
      animate(imgBox,{left:-width*n},600,function(){
        for(var i=1;i<n;i++){
          var imgFirst=getFirst(imgBox);
          imgBox.appendChild(imgFirst);
        }
        imgBox.style.left="0px";
      });
    }
    lunbo.onmouseover=function(){
      left.style.display="block";
      right.style.display="block";
    }
    lunbo.onmouseout=function(){
      left.style.display="none";
      right.style.display="none";
    }
    left.onclick=function(){
      for(var i=1;i<n;i++){
        var last=getLast(imgBox);
        var First=getFirst(imgBox);
        insertBefore(last,First);
      }
      imgBox.style.left=-width*n+"px";
      animate(imgBox,{left:0},600)
    }
    right.onclick=function(){
      move();
    }
  }

// //猜你喜欢
    var cai=$(".cai")[0];
    var caiN=$(".caiN")[0];
    var p=$("p",caiN)[0];
    var change=$(".caiTitR",cai)[0];
    var caiNwm=parseInt(getStyle(caiN,"width"));
    var pwm=parseInt(getStyle(p,"width"));
    var caiNs=$(".caiN1",caiN);
    var now=0;
    var next=0;

    for(var i=0;i<caiNs.length;i++){
        caiNs[i].style.zIndex=0;
    }
    caiNs[0].style.zIndex=3;
    hover(cai,function(){
            p.style.left=0;
            animate(p,{left:caiNwm-pwm});
        },function(){
            p.style.left=caiNwm-pwm+"px";
        })
    change.onclick=function(){
        next=now+1;
        if(next==caiNs.length){
            next=0;
        }
        for(var i=0;i<caiNs.length;i++){
            caiNs[i].style.zIndex=0;
        }
        caiNs[next].style.zIndex=3;
        now=next;
    }
    //商品区
    function selt(obj){
        var tradetit3=$(".tradetit3",obj)[0];
      var llis=$("li",tradetit3);
      var spans=$("span",tradetit3);
      var slwm=[];
        var tradeTRs=$(".tradeTRs",obj);
      //初始化
      for(var i=0;i<llis.length;i++){
            llis[i].style.width=getStyle(llis[i],"width");
            slwm.push(llis[i].offsetWidth);
      }
      spans[0].className="tithot";
      spans[0].style.width=slwm[0]-1+"px";
      for(var j=0;j<llis.length;j++){
        llis[j].index=j;
        llis[j].onmouseover=function(){
          for(var i=0;i<llis.length;i++){
            spans[i].className="";
            spans[i].style.width="auto";
                    tradeTRs[i].style.display="none"
          }
          spans[this.index].className="tithot";
          spans[this.index].style.width=slwm[this.index]-1+"px";
                tradeTRs[this.index].style.display="block" 
        }
      }
    }
    //调用
  var trades=$(".trade");
  for(var j=0;j<trades.length-1;j++){
    selt(trades[j]);
  }

  // floor
  var sjtx_buttom=$(".sjtx-buttom");//3 4 5
   var sjtxb_right=$(".sjtxb-right");
   var ftopright=$(".ftopright");
   var fbright=$(".fbright");//1
   var grmzb_right=$(".grmzb-right")//2
   var grmz_buttom=$(".grmz-buttom") //6含2
   /*for (var i = 0; i < ftopright.length; i++) {     
       cc(ftopright[i],sjtxb_right[0]);  //调用cc 
   };*/
   cc(ftopright[0],fbright);
   cc(ftopright[1],grmzb_right);
   cc(ftopright[2],$(".sjtxb-right",sjtx_buttom[0]));
   cc(ftopright[3],$(".sjtxb-right",sjtx_buttom[1]));
   cc(ftopright[4],$(".sjtxb-right",sjtx_buttom[2]));
   cc(ftopright[5],$(".ydjs-right",grmz_buttom[1]));
   cc(ftopright[6],$(".ydjs-right",grmz_buttom[2]));
   cc(ftopright[7],$(".ydjs-right",grmz_buttom[3]));
   cc(ftopright[8],$(".ydjs-right",grmz_buttom[4]));
   cc(ftopright[9],$(".ydjs-right",grmz_buttom[5]));
   cc(ftopright[10],$(".sjtxb-right",sjtx_buttom[3]));


  function cc(a,b){
    //a选项卡父元素
    //b选项集合
   var childs=getChilds(a);
   for (var i = 0; i < childs.length; i++) {
       childs[i].index=i;
       childs[i].className='ftrab';
       childs[0].className="ftra";
       for (var j = 0; j < b.length; j++) {
        if(j==0){
          continue;
        }
         b[j].style.display="none";        
       };
       childs[i].onmouseover=function(){
        for (var j = 0; j < childs.length; j++) {
            childs[j].className="ftrab";
            b[j].style.display="none";
        };
        childs[this.index].className='ftra';
        b[this.index].style.display="block";
       }
   }
  }
	
	// floor 轮播
	var fbrmidlunbo=$(".fbrmid-lunbo");
   var lbts=$("a",fbrmidlunbo[0]);

   var gbrlbanner=$(".gbrlbanner");
   var left=$(".bannerleft");
   var right=$(".bannerright");
   var four=$(".four");
   var sbr_banner=$(".sbr-banner"); //3 4 5 11
   var yr_mid=$(".yr-mid"); //6 7 8 9
   var tbanner_top=$(".tbanner-top") //10
   var shfwbr=$(".shfwbr-banner") //12
  // alert(yr_mid.length)

   
   lunbo(lbts,left[0],right[0],four[0]);
   lunbo(gbrlbanner,left[1],right[1],four[1]);
   lunbo($("a",sbr_banner[0]),left[2],right[2],four[2])
   lunbo($("a",sbr_banner[1]),left[3],right[3],four[3])
   lunbo($("a",sbr_banner[2]),left[4],right[4],four[4])
   lunbo($(".yr-mid-banner",yr_mid[0]),left[5],right[5],four[5])
   lunbo($(".yr-mid-banner",yr_mid[1]),left[6],right[6],four[6])
   lunbo($(".yr-mid-banner",yr_mid[2]),left[7],right[7],four[7])
   lunbo($(".yr-mid-banner",yr_mid[3]),left[8],right[8],four[8])
   lunbo($("a",tbanner_top[0]),left[9],right[9],four[9])
   lunbo($("a",sbr_banner[3]),left[10],right[10],four[10])
   lunbo($("a",shfwbr[0]),left[11],right[11],four[11])
   lunbo($("a",shfwbr[1]),left[12],right[12],four[12])



  function lunbo(lbts,left,right,bottom){
    //lbts轮播图片集合，
    //left right左右按钮
    //bottom 底部选项
   var fours=getChilds(bottom)
   fours[0].style.background="#b61b1f";
   var lunboParent=lbts[0].parentNode
   //获取父元素
   var lw=parseInt(getStyle(lbts[0],"width"))   
   var imga=0;
   var imgb=0
   var time=setInterval(move,3000);
   var flag=true;
   var flag2=true;
   var flag3=true;
   
  left.onclick=function(){
      if(flag){
       movel();
       }
    flag=false;
   }
   
  right.onclick=function(){
      if(flag2){
       move();
     }
     flag2=false;
   }
   lunboParent.onmouseover=function(){
      clearInterval(time);
      left.style.display="block"
      right.style.display="block"
   }
   lunboParent.onmouseout=function(){
      time=setInterval(move,3000);
      left.style.display="none"
      right.style.display="none"
   }
   for (var i = 0; i < fours.length; i++) {
     fours[i].index=i;
      if(flag3) {
       fours[i].onmouseover=function(){
                
       for (var i = 0; i < fours.length; i++) {
           fours[i].style.background="#3e3e3e";
       };
       if(this.index>imga){
         lbts[this.index].style.left=lw+"px";
         animate(lbts[imga],{left:-lw},400);
       }else if(this.index<imga){
         lbts[this.index].style.left=-lw+"px";
         animate(lbts[imga],{left:lw},400);
       }
       animate(lbts[this.index],{left:0},400,function(){
        flag3=true;
       });
       this.style.background="#b61b1f";
       imgb=this.index;
       imga=this.index;
       flag3=false;
     }
      
     }   
   };
   lbts[0].style.left=0;
   for (var i = 0; i < lbts.length; i++) {
      if(i==0){
        continue;
      }
        lbts[i].style.left=parseInt(getStyle(lbts[0],"width"))+"px";
    };
   function move(){
    imgb++;
    if(imgb>=lbts.length){
        imgb=0;
    }
    for (var i = 0; i < fours.length; i++) {
      fours[i].style.background="#3e3e3e";
    };
    fours[imgb].style.background="#b61b1f";
    lbts[imgb].style.left=lw+"px";
    animate(lbts[imga],{left:-lw});
    animate(lbts[imgb],{left:0},function(){
      flag2=true;
    });
    imga=imgb;
   }
  
  function movel(){
    imgb--;
    if(imgb<0){
        imgb=lbts.length-1;
    }
    for (var i = 0; i < fours.length; i++) {
      fours[i].style.background="#3e3e3e";
    };
    fours[imgb].style.background="#b61b1f";
    lbts[imgb].style.left=-lw+"px";
    animate(lbts[imga],{left:lw});
    animate(lbts[imgb],{left:0},function(){
      flag=true;
    });
    imga=imgb;
   }
 }

    //热门晒单轮播
    function priceTab(obj,num){
      num=num||1;
      var Big=$(".priceRBsBig",obj)[0];
      var pt=setInterval(pmove,2000);
    var pflag=true;
    var pS=$(".priceRBsmall",obj);
    var pmw=parseInt(getStyle(pS[0],"height"))+parseInt(getStyle(pS[0],"margin-bottom"));
    function pmove(){
      for(var i=0;i<num;i++){
        var first=firstChild(Big);
        var last=lastChild(Big);
        Big.insertBefore(last,first);
      }
      Big.style.top=-num*pmw+"px";
      animate(Big,{top:0})
    }
    //开始和停止
      obj.onmouseover=function(){
        clearInterval(pt);
        }
        obj.onmouseout=function(){
        pt=setInterval(pmove,2000);
        }
    }
    //调用
    var priceR=$(".priceR")[0];
    priceTab(priceR);
  // 楼层跳转


  var trades=$(".floors");

 var sideL=$(".floor-nav")[0];
    var sides=$("a",sideL);
    var sideFlag=true;
    var tradetit1s=$(".floortop");
    for(var i=0;i<trades.length;i++){
        trades[i].hh=trades[i].offsetTop;
    }
    window.onscroll=function(){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        var bodyh=$("body")[0].offsetHeight;
        if(obj.scrollTop>=trades[0].hh-700&&obj.scrollTop<bodyh-1000){
            sideL.style.display="block";
        }else{
            sideL.style.display="none";
        }
        if(sideFlag){
          for(var i=0;i<sides.length;i++){
            if(obj.scrollTop>=trades[i].hh-280){
                for(var j=0;j<trades.length;j++){
                    $(".sideLName",sides[j])[0].style.display="none";
                    $(".sideLNum",sides[j])[0].style.display="block";
                    // tradetit1s[j].style.backgroundImage="url(images/floor1new.png)"
                }
                $(".sideLName",sides[i])[0].style.display="block";
                $(".sideLNum",sides[i])[0].style.display="none";
                // tradetit1s[i].style.backgroundImage="url(images/tradetit.png)"
            }else if(obj.scrollTop<trades[0].hh-300){
                $(".sideLName",sides[0])[0].style.display="none";
                $(".sideLNum",sides[0])[0].style.display="block";
                // tradetit1s[0].style.backgroundImage="url(images/floor1new.png)"
            }
          }
        }
    }
    for(var i=0;i<sides.length;i++){
        sides[i].index=i;
        sides[i].onclick=function(){
            sideFlag=false;
            var obj=document.documentElement.scrollTop?document.documentElement:document.body;
            animate(obj,{scrollTop:trades[this.index].hh-160},function(){
                sideFlag=true;
            });
        }
    }




   var listnr=$(".listnr");
   var spflxq=$(".spflxq");
   for(var i=0;i<listnr.length;i++){
    listnr[i].index=i;
    listnr[i].onmouseover=function(){
      spflxq[this.index].style.display="block";
    }
    listnr[i].onmouseout=function(){
      spflxq[this.index].style.display="none";
    }
   }

   
})

//右侧导航
     var sidelis=$("li",$(".sideRB")[0]);
    for(var i=0;i<sidelis.length;i++){
        sidelis[i].index=i;
        sidelis[i].onmouseover=function(){
            this.style.backgroundColor="#c81623";
            animate($("span",this)[0],{left:-60},200);
        }
        sidelis[i].onmouseout=function(){
            var that=this.index;
            animate($("span",this)[0],{left:0},200,function(){
               sidelis[that].style.backgroundColor="#7a6e6e";
            })
        }
    }




