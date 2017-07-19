var num1;
var num2;
var num3;
var num4;
var num5;
/*验证用户名*/
function checkUsername(){
  var reg=/^[\da-z][\u4e00-\u9fa5\w]{2,5}$/i;
  var name=$("username").value;
      if(!reg.test(name)){
        $("userInfo").innerHTML="用户名不合法";
       num1=false;
      }else{
        $("userInfo").innerHTML="";
        $("user-icon").style.backgroundColor="lightgreen";
        $("username").style.border="2px solid lightgreen";

        num1=true;
      }
}

/*验证手机号码*/
       function checkPhone(){
       	var reg=/^1\d{10}$/;
			var phone=$("phone_number").value;
			if(!reg.test(phone)){
				$("phoneInfo").innerHTML="手机号码不合法";
				num2=false;
				
			}else{
				$("phoneInfo").innerHTML="";
        $("phone-icon").style.backgroundColor="lightgreen";
        $("phone_number").style.border="2px solid lightgreen";
				num2=true;
			}
       }
        /*获取及验证验证码*/

        /*web存储验证码*/ 

        function doGet(){
          /*随机生成6位数验证码*/
          var Num="";
          for(var i=0;i<6;i++){
          	Num+=Math.floor(Math.random()*10);
          }
          
          /*存入web中*/
           console.log("验证码为:"+Num);
          /*var data=new Object();
          data.num=Num;*/
          localStorage.setItem("Num",Num);
        }
        /*将验证码输入框中的值与web中的值比较，若是相同，则表示输入正确，否则为错误*/

         function checkVerified(){
         	var codes=$('write_verified').value;
         	
         	var Num=localStorage.getItem("Num");
          if(codes==Num){
          	alert("输入正确！");
            $("veri").innerHTML="";
            $("QRcode").style.backgroundColor="lightgreen";
            $("write_verified").style.border="2px solid lightgreen";
            num3=true;
          }else if(codes==''){
          	alert("验证码不能为空！");
            num3=false;
          }
          else{
          	alert("输入错误！");
            num3=false;
            time(50);

          }
         }
          //倒计时
           function time(t){
            $("get").disabled=true;
            for(var i=1;i<=t;i++){
              window.setTimeout("update_p("+i+","+t+")",i*1000);
            }
            
           }
          function update_p(num,t){

            if(num==t){
              $("get").innerHTML="重新获取";
              $("get").disabled=false;
            }else{
              printnr=t-num;
            
              $("get").innerHTML="("+printnr+")秒后重新获取";
              $("get").style.fontWeight="bold";
            }
          }


        /*验证登录密码*/
        function checkPassword(){
			var reg=/^[\da-z]{6,10}$/;
			var password=$("log_word").value;
			if(!reg.test(password)){
				$("passwordInfo").innerHTML="密码只能由数字和字母组成，长度为6-10位";
				num4=false;
			}else{
				$("passwordInfo").innerHTML="";
        $("lock-icon").style.backgroundColor="lightgreen";
        $("log_word").style.border="2px solid lightgreen";
        num4=true;
			}
		}
        /*验证确认密码*/
        function checkRepassword(){
			var repassword=$("repassword").value;
			var password=$("log_word").value;
			if(repassword!=password){
				$("repasswordInfo").innerHTML="两次输入的密码不一致";
				num5=false;
			}else{
				$("repasswordInfo").innerHTML="";
        $("relock-icon").style.backgroundColor="lightgreen";
        $("repassword").style.border="2px solid lightgreen";
				num5=true;
			}
		}
        //按钮提交事件

        function checkAll(){
          var count=localStorage.count;//localStorage.getItem('count')
          console.log(count);
          if(!count){//如果count为0，则赋值1
            count=1;
          }else{
            count++;
          }
          var userInfo=$("username").value;
          var logInfo=$("log_word").value;
          if(num1&&num2&&num3&&num4&&num5){
            localStorage.setItem("name"+count,userInfo);
            localStorage.setItem("password"+count,logInfo);
            localStorage.setItem("count",count);
            window.location.href="website-log.html";
          }else{
            alert("请完善注册信息");
          }
        }
        //登陆密码转换
       var n=0;
      function doChange1(){
        n++;
        if(n%2!=0){
        $("log_word").setAttribute("type","text");
        }else{
        $("log_word").setAttribute("type","password");
        }
      }
      //确认密码转换
       var a=0;
      function doChange2(){
        a++;
        if(a%2!=0){
        $("repassword").setAttribute("type","text");
        }else{
        $("repassword").setAttribute("type","password");
        }
      }

      








      	function $(id){
      		return document.getElementById(id);
      	}

