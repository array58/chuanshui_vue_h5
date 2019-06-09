<style lang="scss">

*{margin: 0;padding: 0;}
			html,body{height: 100%;width: 100%;position: fixed;top: 0;left: 0;}
			#body{
				background-image: url(./img/BG.jpg);background-size:100% 100%;text-align: center;
				position: fixed;top: 0;left: 0;right: 0;bottom: 0;
			}
			#ren{
				width: 60%;position: absolute;top: 40%;
				-webkit-transform-origin: 50% 90%;
				    -ms-transform-origin: 50% 90%;
				    transform-origin: 50% 90%;
				    transition: .2s ease;
				    -webkit-transition: .2s ease;
			}
			#hand{position: absolute;width: 22%;bottom: 12%;}
			@-webkit-keyframes rotation{
			from {-webkit-transform: rotate(0deg) scale(120);}
			to {-webkit-transform: rotate(360deg) scale(120);}
			}
			
			.Rotation{
			-webkit-transform: rotate(360deg);
			animation: rotation 4s linear infinite;
			-moz-animation: rotation 4s linear infinite;
			-webkit-animation: rotation 4s linear infinite;
			-o-animation: rotation 4s linear infinite;
			}

</style>

<template>
   <div id='body'>
       <img src="./img/ren.png" alt="" id="ren"/>
        <img src="./img/hand.png" alt="" id="hand"/>
        <p style="text-align: center;width: 100%;position: absolute;bottom: 9%;"><span style="font-weight: bold;color: red;font-size:0.2rem">每日首摇免费</span></p>	
        <audio src="./img/yaoyiyao.wav" id="yaoyiyao"></audio>
        <audio src="./img/prize.wav" id="prize"></audio>
        <div id="moneyarea" style="position: absolute;display: none;width: 100%;height: 100%;overflow: hidden;text-align: center;">
            
        </div>
        <img id="quan"  src="./img/quan.png" style="position: absolute;width: 10px;top: 50%;transition: .5s linear;visibility:hidden;"  />
        
        <div id="gongxihuode" style="position: absolute;width: 100%;top: 35%;transition: .5s linear;display: none;">
            <img src="./img/gongxihuode.png" style="z-index:1000 ;width: 100%;" />
            <img src="./img/3yuanbao.png" style="z-index:1000 ;width: 20%;"/>
            <p>元宝x10</p>
        </div>
   </div>
</template>

<script  type="text/javascript">

var drow;
		//var screenW=window.screen.width;
		//var screenH=window.screen.height;
		var screenW=document.body.clientWidth;
		var screenH=document.body.clientHeight;
		function stopdonghua(){
            console.log('stop dong hua')
			document.getElementById("quan").style.cssText="position: absolute;width: 10px;top: 50%;transition: .5s linear;visibility:hidden;";
			document.getElementById("gongxihuode").style.display="none";
			drow.stop();
		}
		function drowmoney(){
			document.getElementById("moneyarea").style.display="block";
			this.Timer=setInterval(function(){
					for(var i=0;i<3;i++){
						var money=new makemoney();
						money.begindown();
					}
			},500)
		}
		drowmoney.prototype.stop=function(){
			document.getElementById("moneyarea").style.display="none";
			clearInterval(this.Timer);
		}
		function makemoney(){
			this.body=document.getElementById("moneyarea");
			this.gap=window.screen.width/12;
			this.windowH=window.screen.height;
			this.imgsrc=[require("./img/jinbi.png"),require("./img/yuanbao.png")];
			this.size=[30,50];
			this.speed=[1,2,2,1,2,4];
			this.img=document.createElement("img");
			this.ramdom1=Math.random()>0.5?1:0;
			this.ramdom2=Math.random()>0.5?1:0;
			this.random3=Math.random()*10;
			this.random4=Math.floor(Math.random()*6);
			this.img.setAttribute("src",this.imgsrc[this.ramdom1]);
			this.img.style.width=this.size[this.ramdom2]+"px";
			this.img.style.position="absolute";
			this.img.style.left=this.random3*this.gap+"px";
			//this.img.style.zIndex=10000;
			this.img.style.transition=this.speed[this.random4]+"s linear";
			this.endTime=this.speed[this.random4]*1000;
		}
		makemoney.prototype.begindown=function(){
			var _this=this;
			this.body.appendChild(this.img);
			setTimeout(function(){
				_this.img.style.transform="translateY("+_this.windowH+"px) rotate(700deg)";
				_this.img.style.webkitTransform="translateY("+_this.windowH+"px) rotate(700deg)";
			},30)
			setTimeout(function(){
				_this.body.removeChild(_this.img);
				
			},this.endTime)
		}
		
		function dejiang(){
			var quan=document.getElementById("quan");
			quan.style.visibility="visible";
			quan.style.transform="scale(120)";
			setTimeout(function(){
					quan.style.animation=" rotation 5s linear infinite";
					document.getElementById("gongxihuode").style.display="block";
					document.getElementById("prize").play();
			},500)
			drow=new drowmoney();
		}
		function zhuan(obj){
			var angle=5;
			setInterval(function(){
				if(angle>0){
					angle=-1*angle;
				}else{
					angle=-1*angle;
				}
				obj.style.transform="rotate("+angle+"deg)";
			},300)
		}
		function zhuanhand(obj){
			var angle=5;
			setInterval(function(){
				clearInterval(timer);
				var timer=setInterval(function(){
					if(angle>0){
						angle=-1*angle;
					}else{
						angle=-1*angle;
					}
				obj.style.transform="rotate("+angle+"deg)";
				},100)
				setTimeout(function(){
					console.log("clear");
					if(angle<0){
						obj.style.transform="rotate("+(-1*angle)+"deg)";
					}
					clearInterval(timer);
				},700)
			},2000)
		}
		function pageInit(){
		    screenW=document.body.clientWidth;
		    screenH=document.body.clientHeight;
			var ren=document.getElementById("ren");
			var renW=ren.offsetWidth;
			var renH=ren.offsetHeight;
			ren.style.left=(screenW-renW)/2+"px";
			var hand=document.getElementById("hand");
			var handW=hand.offsetWidth;
			var handH=hand.offsetHeight;
			hand.style.left=(screenW-handW)/2+"px";
			zhuan(ren);
			zhuanhand(hand);
			hand.onclick=function(){
				var yaoyiyao=document.getElementById("yaoyiyao");
				yaoyiyao.pause();
				yaoyiyao.play();
				dejiang();
				}
			var quan=document.getElementById("quan");
			quan.onclick=function(){
				drow.stop();
			}
		}
		window.onload=function(){
			pageInit();
			window.onresize=function(){
				pageInit();
            }
            var gongxihuode = document.getElementById('gongxihuode');
            gongxihuode.addEventListener('click',stopdonghua)
			/*setTimeout(function(){
				var yaoyiyao=document.getElementById("yaoyiyao");
				yaoyiyao.pause();
				yaoyiyao.play();
				dejiang();
			},3000)*/
		//	drow=new drowmoney();
			
	
				document.addEventListener("WeixinJSBridgeReady", function(){  
		            yaoyiyao.play();
		          
				}, false); 
		 
		
			 
			 document.addEventListener("WeixinJSBridgeReady", function(){  
		            yaoyiyao.play();
		            setTimeout(function(){
		            	yaoyiyao.pause();
		            },0)
				}, false); 
        } 
        
        export default {

        }

</script>

