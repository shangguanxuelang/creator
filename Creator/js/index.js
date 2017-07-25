//进度条
var flagimg=false;
var imgs = document.getElementsByTagName("img");
	var isrc = [
		"../img/1/music.png",
		"../img/1/liuxing1.png",
		"../img/1/liuxing2.png",
		"../img/1/liuxing3.png",
		"../img/1/lanse.png",
		"../img/1/redyun.png",
		"../img/1/jiantou.png",
		"../img/diqiu/1.jpg",
		"../img/diqiu/2.jpg",
		"../img/diqiu/3.jpg",
		"../img/diqiu/4.jpg",
		"../img/diqiu/5.jpg",
		"../img/diqiu/6.jpg",
		"../img/diqiu/7.jpg",
		"../img/diqiu/8.jpg",
		"../img/diqiu/9.jpg",
		"../img/diqiu/10.jpg",
		"../img/diqiu/11.jpg",
		"../img/diqiu/12.jpg",
		"../img/diqiu/13.jpg",
		"../img/diqiu/14.jpg",
		"../img/diqiu/15.jpg",
		"../img/diqiu/16.jpg",
		"../img/diqiu/17.jpg",
		"../img/diqiu/18.jpg",
		"../img/diqiu/19.jpg",
		"../img/diqiu/20.jpg",
		"../img/diqiu/21.jpg",
		"../img/diqiu/22.jpg",
		"../img/diqiu/23.jpg",
		"../img/diqiu/24.jpg",
		"../img/diqiu/25.jpg",
		"../img/diqiu/26.jpg",
		"../img/diqiu/27.jpg",
		"../img/diqiu/28.jpg",
		"../img/diqiu/29.jpg",
		"../img/diqiu/30.jpg",
		"../img/diqiu/31.jpg",
		"../img/diqiu/32.jpg",
		"../img/diqiu/33.jpg",
		"../img/diqiu/34.jpg",
		"../img/diqiu/35.jpg",
		"../img/diqiu/36.jpg",
		"../img/diqiu/37.jpg",
		"../img/diqiu/38.jpg",
		"../img/diqiu/39.jpg",
		"../img/diqiu/40.jpg",
		"../img/diqiu/41.jpg",
		"../img/diqiu/42.jpg",
		"../img/diqiu/43.jpg",
		"../img/diqiu/44.jpg",
		"../img/diqiu/45.jpg",
		"../img/diqiu/46.jpg",
		"../img/diqiu/47.jpg",
		"../img/2/5.png",
		"../img/2/2.png",
		"../img/2/3.png",
		"../img/2/4.png",
		"../img/1/jiantou.png",
		"../img/img3/5.png",
		"../img/img3/1.png",
		"../img/img3/2.png",
		"../img/img3/8.png",
		"../img/img3/7.png",
		"../img/img3/6.png",
		"../img/img3/3.png",
		"../img/img3/4.png",
		"../img/4/1.png",
		"../img/4/line/形状12副本2.png",
		"../img/4/line/形状11副本.png",
		"../img/4/line/形状11.png",
		"../img/4/line/形状11副本2.png",
		"../img/4/line/形状10副本.png",
		"../img/4/line/形状10副本4.png",
		"../img/4/line/形状10.png",
		"../img/4/line/形状10副本3.png",
		"../img/4/line/形状10副本2.png",
		"../img/4/line/形状15副本2.png",
		"../img/4/line/形状15.png",
		"../img/4/line/形状14副本4.png",
		"../img/4/line/形状15.png",
		"../img/4/line/形状14副本3.png",
		"../img/4/line/形状14.png",
		"../img/4/line/形状14副本.png",
		"../img/4/line/形状14副本2.png",
		"../img/4/line/形状18.png",
		"../img/4/line/形状17.png",
		"../img/4/line/形状17副本2.png",
		"../img/4/line/形状17副本.png",
		"../img/4/line/形状16副本2.png",
		"../img/4/line/形状16副本.png",
		"../img/4/line/形状13.png",
		"../img/4/line/形状13副本.png",
		"../img/4/line/形状12副本.png",
		"../img/4/line/形状12副本3.png",
		"../img/4/line/形状12.png",
		"../img/4/renwu/刘勇.png",
		"../img/4/renwu/龚焱.png",
		"../img/4/renwu/王壮.png",
		"../img/4/renwu/花间堂-张蓓.png",
		"../img/4/renwu/王晓峰.png",
		"../img/4/renwu/吴启刚 .png",
		"../img/4/renwu/阿诺.png",
		"../img/4/renwu/沈黎晖.png",
		"../img/4/hand.png",
		"../img/4/3.png",
		"../img/4/renwu/刘勇.png",
		"../img/4/renwu/龚焱.png",
		"../img/4/renwu/王壮.png",
		"../img/4/renwu/花间堂-张蓓.png",
		"../img/4/renwu/王晓峰.png",
		"../img/4/renwu/吴启刚 .png",
		"../img/4/renwu/阿诺.png",
		"../img/4/renwu/沈黎晖.png",
		"../img/5/line.png",
		"../img/5/2.png",
		"../img/5/黄.png",
		"../img/5/李.png",
		"../img/5/马月.png",
		"../img/5/万合.png",
		"../img/5/西.png",
		"../img/5/余.png",
		"../img/5/知乎.png",
		"../img/5/周.png",
		"../img/5/bili.png",
		"../img/5/余.png",
		"../img/5/12.png",
		"../img/5/11.png",
		"../img/5/15.png",
		"../img/5/18.png",
		"../img/5/16.png",
		"../img/5/13.png",
		"../img/5/17.png",
		"../img/5/19.png",
		"../img/5/20.png",
		"../img/5/14.png",
		"../img/5/3.png",
		"../img/6/组 1.png",
		"../img/6/组 2.png",
		"../img/6/组 3.png",
		"../img/6/组 4.png",
		"../img/6/组 5.png",
		"../img/6/组 6.png",
		"../img/6/组 8.png",
		"../img/6/组 7.png",
		"../img/6/华平.png",
		"../img/6/高臻.png",
		"../img/6/沈博阳.png",
		"../img/6/涂鸿川.png",
		"../img/6/蒋德.png",
		"../img/6/王屏.png",
		"../img/6/组 1.png",
		"../img/6/组 3.png",
		"../img/6/组 2.png",
		"../img/6/组 4.png",
		"../img/6/组 5.png",
		"../img/6/组 6.png",
		"../img/7/组 1.png",
		"../img/7/组 2.png",
		"../img/7/组 3.png",
		"../img/7/组 4.png",
		"../img/7/组 5.png",
		"../img/7/组 6.png",
		"../img/7/s.png",
		"../img/8/1.png",
		"../img/8/2.png",
		"../img/8/36kr.png",
		"../img/8/硅谷银行.png",
		"../img/8/爱奇艺.png",
		"../img/1/jiantou.png",
		"../img/6/组 1.png",
		"../img/6/组 4.png",
		"../img/6/组 6.png",
		"../img/6/组 3.png",
		"../img/9/ellemen.png",
		"../img/9/盛宴官方网址 www.ellemen.com .png"
	]
	var tImgs=[];
	var num1=0,m1=0,w1=0,x1=0;
	var len = isrc.length;

    for (var i=0; i<len; i++){
        tImgs[i] = new Image();
		tImgs[i].src=isrc[i];	
		(function(i){
			tImgs[i].onload = function(){
//				flagg = "ok";
				num1++;
				m1=parseInt(num1/len*100);
//				w=$(".outer").width()*m/100;
//				console.log(m);
				$(".num").html(m1+"%");
				$(".progress").css({
					width:m1+"%"
				})
				if(m1>=100){
					$(".test").remove();
					main();
				}
			}
			tImgs[i].onerror = function(){flagg = "err"}
		})(i)
   }
function main(){
	$.fn.extend({
		ani:function(ani,x,y){
			$_this=$(this);
			$_this.css({
				animation: " "+ani+" "+x+" "+y+"s"+" linear normal forwards",
			})
		}
	})
	$.fn.extend({
		Tab:function(x,y,w,h){
			$_this=$(this);
			$_this.css({
				left:x,
				top:y,
				width:w,
				height:h,
			});
			$_this.find("img").css({
	//			left:x,
	//			top:y,
				width:w,
				height:h,
			});
		}
	})
	$(".page6 p").eq(0).Tab("2.13rem","1rem","2.72rem","2.48rem");
	$(".page6 p").eq(1).Tab("7.16rem","1rem","0.34rem","0.83rem");
	$(".page6 p").eq(2).Tab("6.87rem","3.7rem","0.63rem","0.55rem");
	$(".page6 p").eq(3).Tab("0.44rem","1.2rem","2.73rem","2.22rem");
	$(".page6 p").eq(4).Tab("0rem","1.3rem","0.48rem","1.06rem");
	$(".page6 p").eq(5).Tab("3.97rem","1.1rem","2.95rem","2.09rem");
	$(".page6 p").eq(6).Tab("6.95rem","11rem","0.31rem","0.35rem");
	$(".page6 p").eq(7).Tab("3.28rem","5rem","0.63rem","0.5rem");
	
	$(".page6 p").eq(11).Tab("4.12rem","5rem","1.7rem","2rem");
	$(".page6 p").eq(12).Tab("1.71rem","5.5rem","2.1rem","2.5rem");
	$(".page6 p").eq(13).Tab("4.11rem","7rem","2.11rem","2.61rem");
	$(".page6 p").eq(14).Tab("1.31rem","8rem","2.5rem","2.1rem");
	$(".page6 p").eq(15).Tab("4.01rem","9.7rem","1.8rem","2.2rem");
	$(".page6 p").eq(16).Tab("1.91rem","10.2rem","1.7rem","1.7rem");
	
	
	$(".page8 p").eq(0).Tab("2.13rem","1rem","2.72rem","2.48rem");
	$(".page8 p").eq(1).Tab("7.16rem","1rem","0.34rem","0.83rem");
	$(".page8 p").eq(2).Tab("6.87rem","3.7rem","0.63rem","0.55rem");
	$(".page8 p").eq(3).Tab("0.44rem","1.2rem","2.73rem","2.22rem");
	$(".page8 p").eq(4).Tab("0rem","1.2rem","0.48rem","1.06rem");
	$(".page8 p").eq(5).Tab("3.97rem","1.1rem","2.95rem","2.09rem");
	
	
	//音乐
	var audio=document.getElementsByTagName("audio");
		var flag=true;
		$(".music").on("click",function(){
			if(flag){
				audio[0].pause();
				$(".music").removeClass("demo");
				flag=false;
			}else{
				audio[0].play();
				$(".music").addClass("demo");
				flag=true;
			}
		})
	
	var mySwiper = new Swiper('.swiper1',{
	//  pagination: '.swiper-pagination',
		direction: 'vertical',
	//	initialSlide: 8,
		freeMode:false,
	//	loop:false,
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		   swiperAnimateCache(swiper); //隐藏动画元素 
		   swiperAnimate(swiper); //初始化完成开始动画
		   
			if(swiper.activeIndex==0){
				$(".pintu p").eq(8).css({
		   	  	animation: "luo 2s 2s linear normal forwards",
		   	  })
			}else{
				$(".pintu p").eq(8).css({
		   	  	animation: "luo2 0s 0s linear normal forwards",
		   	  })
			}
		   
		}, 
		onSlideChangeEnd: function(swiper){ 
		   swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		   if(swiper.activeIndex==0){
				$(".pintu p").eq(8).css({
		   	  	animation: "luo 2s 2s linear normal forwards",
		   	  })
			}else{
				$(".pintu p").eq(8).css({
		   	  	animation: "luo2 0s 0s linear normal forwards",
		   	  })
			}
		   
		   if(swiper.activeIndex==1){
		   		clearInterval(time1);
		   		time1 = setInterval(time,50);
		   }else{
		   	clearInterval(time1);
		   }
		   if(swiper.activeIndex==3){
		   		$(".line p").css({
			   		animation: "scale3 3s 0s linear normal forwards",
			   	})
		   	  $(".page4 p:eq(0) img").eq(0).css({
		   	  	animation: "scale3 1.5s 1s linear normal forwards",
		   	  })
		   	  $(".people p img").eq(3).css({
		   	  	animation: "scale3 1.5s 1s linear normal forwards",
		   	  })
		   	  $(".people p img").eq(6).css({
		   	  	animation: "scale3 1.5s 1.25s linear normal forwards",
		   	  })
		   	  $(".people p img").eq(1).css({
		   	  	animation: "scale3 1.5s 1.75s linear normal forwards",
		   	  })
		   	  $(".people p img").eq(0).css({
		   	  	animation: "scale3 1.5s 1.75s linear normal forwards",
		   	  })
		   	  $(".people p img").eq(7).css({
		   	  	animation: "scale3 1.5s 2s linear normal forwards",
		   	  })
		   	  $(".people p img").eq(5).css({
		   	  	animation: "scale3 1.5s 2.25s linear normal forwards",
		   	  })
		   	  $(".people p img").eq(2).css({
		   	  	animation: "scale3 1.5s 2.5s linear normal forwards",
		   	  })
		   	  $(".people p img").eq(4).css({
		   	  	animation: "scale3 1.5s 2.75s linear normal forwards",
		   	  })
		   	  $(".down").hide();
		   	  $("#outer").css({
		   	  	display:"none",
		   	  })
		   	  $(".people p").show();
	//	   	  人物点击事件
		   	  $(".people p").on("click",function(){
		   	  	$(this).hide("slow").siblings().hide("slow");
		   	  	$(".to").hide();
		   	  	$(".down").show();
		   	  	$("#outer").show();
		   	  	$(".slide img").css({
		   	  		animation: "scale3 1s 0.5s linear normal forwards",
		   	  	});
				var t=$(this).index();
	//			console.log(t);
				var mySwiper1 = new Swiper ('.swiper2', {
				    direction: 'horizontal',
				    loop: true,
				    initialSlide:t,
				
				    
				    // 如果需要前进后退按钮
				    nextButton: '.swiper-button-next',
				    prevButton: '.swiper-button-prev',
				    
				    // 如果需要滚动条
				    scrollbar: '.swiper-scrollbar',
				  })      
		   	  })
		   	  $(".down").on("click",function(){
		   	  	$(this).hide();
		   	  	$(".to").hide();
		   	  	$(".slide img").css({
		   	  		animation: "scale4 1s 0s linear normal forwards",
		   	  	})
		   	  	
		   	  	if(parseFloat($(".slide img").css("transform").substring(7).split(',')[4])==0){
		   	  		setTimeout(function(){
		   	  			$("#outer").hide();
		   	  			$(".people p").show();
		   	  			$(".to").show();
		   	  		},1000)
		   	  	}
		   	  })
		   	  
		   }else{
		   	$(".line p").css({
			   		animation: "scale4 0s 0s linear normal forwards",
			   	})
		   	$(".page4 p:eq(0) img").eq(0).css({
		   	  	animation: "scale4 0s 0s linear normal forwards",
		   	  })
		   	$(".people p img").css({
		   	  	animation: "scale4 0s 0s linear normal forwards", 
		   	 })
		   }
	
		   if(swiper.activeIndex==4){
			   	
			   	var c=0;
				for(var i=9;i>=0;i--){
					$(".world img").show();
					c+=0.5;
					$(".mengceng div").eq(i).ani("scale5","0.5s",c);
				}
				var t=1;
				setTimeout(function(){
					for(var j=9;j>=0;j--){
						$(".back img").eq(j).css({
							animation:"opacity2 0.5s "+(t-1)+"s linear normal forwards",
						})
						$(".world img").eq(j).css({
							animation:"tanslate2 0.5s "+t+"s linear normal forwards",
						})
						
						t+=0.5;
					}
				},1000)
				$(".no").hide();
				$(".world img").on("click",function(){
					p=$(this).index();
					$(".no").show()
					$(".big img").eq(p).css({
						animation:"big"+(p+1)+" 1s 0s linear normal forwards",
					})
					$(".no").on("click",function(){
						$(".big img").eq(p).css({
							animation:"no"+(p+1)+" 1s 0s linear normal forwards",
						})
						$(".no").hide();
					})
				})
				
			}else{
				$(".world img").css({
					transform:"translate(0,0)",
				}).hide();
				$(".mengceng div").ani("scale6","0","0");
				$(".back img").css({
					animation:"opacity3 0s 0s linear normal forwards",
				})
				for(var k=0;k<=9;k++){
					$(".big img").eq(k).css({
						animation:"no"+(k)+" 1s 0s linear normal forwards",
					})
				}
			}
			
	//		第六个页面
			if(swiper.activeIndex==5){
				setTimeout(function(){
					$(".page6 p").eq(13).fadeIn(300,function(){
						$(".page6 p").eq(17).fadeIn(500);
						$(".page6 p").eq(14).fadeIn(300,function(){
							$(".page6 p").eq(15).fadeIn(300,function(){
								$(".talk").fadeIn(500);
								$(".page6 p").eq(11).fadeIn(300,function(){
									$(".page6 p").eq(12).fadeIn(300,function(){
										$(".page6 p").eq(16).fadeIn(300)
									})
								})
							})
						})
					});
				},2000)
			}else{
				$(".page6 p").eq(11).fadeOut(10);
				$(".page6 p").eq(12).fadeOut(10);
				$(".page6 p").eq(13).fadeOut(10);
				$(".page6 p").eq(14).fadeOut(10);
				$(".page6 p").eq(15).fadeOut(10);
				$(".page6 p").eq(16).fadeOut(10);
				$(".page6 p").eq(17).fadeOut(10);
				$(".talk").fadeOut(10);
			}
	//		第七个页面
			if(swiper.activeIndex==6){
			$(".s7-img").css({
					height:0
				}).animate({
					height:"8.34rem"
				},1500);
			}else{
				$(".s7-img").css({
					height:0
				});
			}
			//		第八个页面
			if(swiper.activeIndex==7){
				setTimeout(function(){
					$(".zhu").fadeIn(300,function(){
					$(".lian").fadeIn(500);
					})
				},2000)
			}else{
				$(".zhu").fadeOut(10);
				$(".lian").fadeOut(500);
			}
		}, 
		
	})
	
	var startX,endX,a=0,b=0,n=0;
	var time1;
	function time(){
		n++;
		if(n>=$("#box img").length-1){
			n=0;
		}
		$("#box img").eq(n).show().siblings().hide();
	}
	//setInterval(time,50);
	
	
	$(".line p").eq(0).Tab("0.76rem","1.56rem","2.99rem","5.13rem");
	$(".line p").eq(1).Tab("3.19rem","5.08rem","0.56rem","1.58rem");
	$(".line p").eq(2).Tab("3.34rem","3.89rem","0.43rem","2.83rem");
	$(".line p").eq(3).Tab("3.75rem","2.24rem","0.87rem","4.46rem");
	$(".line p").eq(4).Tab("3.79rem","5.04rem","0.43rem","1.56rem");
	$(".line p").eq(5).Tab("3.77rem","2.4rem","2.52rem","4.3rem");
	$(".line p").eq(6).Tab("3.77rem","4.86rem","1.85rem","1.83rem");
	$(".line p").eq(7).Tab("3.74rem","4.23rem","3.73rem","2.5rem");
	$(".line p").eq(8).Tab("3.81rem","6.15rem","1.5rem","0.55rem");
	$(".line p").eq(9).Tab("3.75rem","5.95rem","3.75rem","0.76rem");
	$(".line p").eq(10).Tab("3.78rem","6.69rem","1.83rem","0.22rem");
	$(".line p").eq(11).Tab("3.75rem","6.70rem","1.03rem","0.31rem");
	$(".line p").eq(12).Tab("3.76rem","6.70rem","1.52rem","0.71rem");
	$(".line p").eq(13).Tab("3.75rem","6.69rem","3.75rem","3.1rem");
	$(".line p").eq(14).Tab("3.77rem","6.71rem","1.68rem","1.8rem");
	$(".line p").eq(15).Tab("3.76rem","6.71rem","2.88rem","4.6rem");
	$(".line p").eq(16).Tab("3.75rem","6.70rem","1.21rem","3.45rem");
	$(".line p").eq(17).Tab("3.75rem","6.70rem","0.18rem","1.75rem");
	$(".line p").eq(18).Tab("3.64rem","6.71rem","0.12rem","2.92rem");
	$(".line p").eq(19).Tab("1.74rem","6.73rem","2.01rem","5.02rem");
	$(".line p").eq(20).Tab("3.14rem","6.7rem","0.62rem","1.14rem");
	$(".line p").eq(21).Tab("1.98rem","6.7rem","1.77rem","1.93rem");
	$(".line p").eq(22).Tab("0.58rem","6.73rem","3.13rem","1.44rem");
	$(".line p").eq(23).Tab("2.46rem","6.7rem","1.3rem","0.31rem");
	$(".line p").eq(24).Tab("0rem","6.24rem","3.63rem","0.47rem");
	$(".line p").eq(25).Tab("0.53rem","5.79rem","3.17rem","0.9rem");
	$(".line p").eq(26).Tab("2.31rem","5.96rem","1.45rem","0.75rem");
	$(".line p").eq(27).Tab("1.75rem","5.11rem","2.03rem","1.61rem");
	
	//人物
	$(".people p").eq(0).Tab("2.54rem","2.5rem","1.39rem","1.39rem");
	$(".people p").eq(1).Tab("5.37rem","3.53rem","1.54rem","1.54rem");
	$(".people p").eq(2).Tab("5.6rem","6.32rem","1.32rem","1.32rem");
	$(".people p").eq(3).Tab("5.22rem","8.3rem","1.39rem","1.39rem");
	$(".people p").eq(4).Tab("2.89rem","9.62rem","1.54rem","1.54rem");
	$(".people p").eq(5).Tab("0.86rem","8.64rem","1.39rem","1.39rem");
	$(".people p").eq(6).Tab("0.98rem","6.49rem","1.54rem","1.54rem");
	$(".people p").eq(7).Tab("0.27rem","3.76rem","1.69rem","1.69rem");
	
	//第五个页面
	$.fn.extend({
		Tab2:function(x,y,w,h){
			$_this=$(this);
			$_this.css({
				left:x,
				top:y,
				width:w,
				height:h,
			});
		}
	})
	$(".world img").eq(0).Tab2("4.0rem","2.85rem","1.5rem","1.7rem");
	$(".mengceng div").eq(0).Tab2("4.0rem","2.85rem","1.5rem","1.7rem");
	$(".back img").eq(0).Tab2("2.35rem","1.85rem","3.34rem","2.76rem");
	$(".world img").eq(1).Tab2("6.1rem","3.4rem","1.5rem","1.7rem");
	$(".mengceng div").eq(1).Tab2("6.1rem","3.4rem","1.5rem","1.7rem");
	$(".back img").eq(1).Tab2("4.4rem","2.4rem","3.34rem","2.76rem");
	$(".world img").eq(2).Tab2("0.5rem","3.5rem","1.5rem","1.7rem");
	$(".mengceng div").eq(2).Tab2("0.5rem","3.5rem","1.5rem","1.7rem");
	$(".back img").eq(2).Tab2("-1.15rem","2.5rem","3.34rem","2.76rem");
	$(".world img").eq(3).Tab2("2.2rem","5.5rem","1.5rem","1.7rem");
	$(".mengceng div").eq(3).Tab2("2.2rem","5.5rem","1.5rem","1.7rem");
	$(".back img").eq(3).Tab2("0.49rem","4.5rem","3.34rem","2.76rem");
	$(".world img").eq(4).Tab2("4.25rem","6.05rem","1.5rem","1.7rem");
	$(".mengceng div").eq(4).Tab2("4.25rem","6.05rem","1.5rem","1.7rem");
	$(".back img").eq(4).Tab2("2.6rem","5.1rem","3.34rem","2.76rem");
	$(".world img").eq(5).Tab2("5.9rem","8.05rem","1.5rem","1.7rem");
	$(".mengceng div").eq(5).Tab2("5.9rem","8.05rem","1.5rem","1.7rem");
	$(".back img").eq(5).Tab2("4.25rem","7.05rem","3.34rem","2.76rem");
	$(".world img").eq(6).Tab2("3.5rem","9rem","1.5rem","1.7rem");
	$(".mengceng div").eq(6).Tab2("3.5rem","9rem","1.5rem","1.7rem");
	$(".back img").eq(6).Tab2("1.8rem","7.95rem","3.34rem","2.76rem");
	$(".world img").eq(7).Tab2("0.35rem","8.1rem","1.5rem","1.7rem");
	$(".mengceng div").eq(7).Tab2("0.35rem","8.1rem","1.5rem","1.7rem");
	$(".back img").eq(7).Tab2("-1.3rem","7.1rem","3.34rem","2.76rem");
	$(".world img").eq(8).Tab2("1.7rem","11.6rem","1.5rem","1.7rem");
	$(".mengceng div").eq(8).Tab2("1.7rem","11.6rem","1.5rem","1.7rem");
	$(".back img").eq(8).Tab2("-0.03rem","10.6rem","3.34rem","2.76rem");
	$(".world img").eq(9).Tab2("5.2rem","11rem","1.5rem","1.7rem");
	$(".mengceng div").eq(9).Tab2("5.2rem","11rem","1.5rem","1.7rem");
	$(".back img").eq(9).Tab2("3.45rem","9.95rem","3.34rem","2.76rem");
	
	
	$(".big img").eq(0).Tab2("1.3rem","-1.8rem","6.6rem","10rem");
	$(".big img").eq(1).Tab2("3.3rem","-1.1rem","6.6rem","10rem");
	$(".big img").eq(2).Tab2("-2.3rem","-1rem","6.6rem","10rem");
	$(".big img").eq(3).Tab2("-0.7rem","1.2rem","6.6rem","10rem");
	$(".big img").eq(4).Tab2("1.5rem","1.8rem","6.6rem","10rem");
	$(".big img").eq(5).Tab2("3rem","3.7rem","6.6rem","10rem");
	$(".big img").eq(6).Tab2("0.8rem","4.5rem","6.6rem","10rem");
	$(".big img").eq(7).Tab2("-2.3rem","3.7rem","6.6rem","10rem");
	$(".big img").eq(9).Tab2("2.5rem","6.5rem","6.6rem","10rem");
	$(".big img").eq(8).Tab2("-1.1rem","6.9rem","6.6rem","10rem");
}






