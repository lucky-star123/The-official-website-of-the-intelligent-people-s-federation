var num1;
var num2;
var num3;
var m;//用来存储获取的key的序号
var p;//用来存储获取的key对应的name值

function $(id){
    return document.getElementById(id);
   }

     /*用户名*/
     //获取key为count的个数
  
function checkUser(){
        var length=localStorage.getItem("count");
        console.log(length);
        for(var i=1;i<=length;i++){
          var name=localStorage.getItem("name"+i);
          var user=document.getElementById("username").value;
          if(user==name){
             $("User").innerHTML="";
             $("head").style.backgroundColor="lightgreen";
             $("username").style.border="2px solid lightgreen";
             m=i;//key的序号
             p=name;//
             num1=true;
             return m;
          }else{
             $("User").innerHTML="用户名不存在，请重新输入";
             num1=false;
          }
        }
    }

    //密码
    function checkPassword(){
      var password=localStorage.getItem("password"+m);
      var psd=document.getElementById("password").value;
      if(psd==password){
        $("psw").innerHTML="";
        $("locker").style.backgroundColor="lightgreen";
        $("password").style.border="2px solid lightgreen";
        num2=true;
      }else{
        $("psw").innerHTML="密码不正确，请重新输入";
        num2=false;
      }
    }

      /*验证码部分*/

//每次进入页面都会展示一个随机的验证码
       window.onload=function(){
             createCode();
    };
//设置一个全局的变量,用于保存验证码
   var code;
    function createCode(){
      
       //首先默认code为空字符串
       code="";
       //设置长度，在此设置长度为4
       var codeLength=4;
       var codeV=document.getElementById("codes");
       //设置随机字符
       var random=new Array(0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
       //循环4次
       for(var i=0;i<codeLength;i++){
        //设置随机数的范围，0~36
       var index=Math.floor(Math.random()*36);
       code+=random[index];
       }
       codeV.innerHTML=code;
    }

   function validate(){
      var oValue=document.getElementById("write-code").value.toUpperCase();
      if(oValue==0){
        alert("请输入验证码");
      }else if(oValue!=code){
            alert("验证码不正确，请重新输入！！");
            oValue="";
            createCode();
            num3=false;
      }else{
            $("write-code").style.border="2px solid lightgreen";
            num3=true;
      }
     
  }

   /*登录按钮事件*/
   function doLogin(){
    if(num1&&num2&&num3){
      alert("登陆成功！");
      window.location.href="index.html";
      sessionStorage.setItem("num",1);//为key赋值num,value为1
      sessionStorage.setItem("rename",p);//p为key对应的name值
    }else{
      alert("请完善登录信息！");
    }
   }