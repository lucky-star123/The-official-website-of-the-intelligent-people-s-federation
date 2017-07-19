


$(function(){

    var Lname=sessionStorage.getItem("num");
    if(Lname==1){
        $("#new-register").html("退出");
        $("#new-register").attr("href","website-log.html");
        $("#new-login").html(sessionStorage.getItem("rename"));
        $("#new-login").attr("href","http://www.baidu.com");
        Lname=0;
    }
   var swiper = new Swiper('.swiper-container',{
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true,
        onSlideChangeStart: function(swiper){
            $("header").addClass(".hide");
        },
        onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        $("header").removeClass(".hide");
        }
    });
});
  
   

   

