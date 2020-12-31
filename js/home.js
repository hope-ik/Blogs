// //当代码加载到这里的时候,执行这个script,当代码加载到这里,说明loading该结束了
// window.onload = function () {
//   var siteWelcome = document.getElementById("siteWelcome");
//   siteWelcome.classList.remove("active");
// };

// loading
window.onload = function () {
    $(".preloader").delay(1000).fadeOut("slow"); //一秒后缓慢隐没
}

// Menu Scroll to content and Active menu

$("a[href*=#]").bind("click", function (e) {
    // console.log(e.currentTarget.href)
    e.preventDefault();//阻止默认行为
    var target = $(this).attr("href");//当前点击的href属性
    $("html,body")
        .stop()
        .animate({ scrollTop: $(target).offset().top - 100 }, 1000, function () { });
    return false;
});



//menu 
window.onscroll = function (e) {
    let scrol = document.documentElement.scrollTop;
    if (scrol >= 981) {
        $("#menu").css("display", "block")
    } else {
        $("#menu").css("display", "none")
    }
}


// 技能列表
var progress = 0;
$(".skill-list li").on("mouseenter", function () {//鼠标移入事件
    let val = $(this).attr("data-percent");//当前属性为data-percent的值赋值给val
    $(this)
        .children(".skill-item")
        .children(".skill-img")
        .css('bottom', -(100 - val) + '%')//根据用户给定的值改变css高度

    function step() {
        progress += 2;//progress值加2
        $(".skill-inscir .skill-per").html(progress + "%");//往class为skill-per的标签里添加progress值
        if (progress < val) {
            requestAnimationFrame(step)//当progress小于val时进入
        }
    }
    setTimeout(function () {
        requestAnimationFrame(step)
    }, 200);//200毫秒执行
});

$("#skill-list li").on("mouseleave", function () {
    $('.skill-img').css("bottom", "-100px");
    progress = 0;
    $(".skill-inscir .skill-per").html(progress + "%");
});




new WOW().init();//初始化wow.js

//scrollReveal
const config = {
    reset: true,
    move: "100px"
};
window.scrollReveal = new scrollReveal(config);
// console.log(window.scrollReveal)


//工作案例切换
$('.works-list-tab li').click(function () {
    //siblings() 方法返回被选元素的所有同级元素。
    $(this).addClass('act').siblings().removeClass('act');

    //使用fadeout隐藏一组工作案例 slideUp
    $("#case .works-list").fadeOut("fast");
    //使用eq选择器选中当前点击的一组工作案例，使用fadeIn显示 slideDown
    $("#case .works-list").eq($(this).index()).fadeIn("fast")
})


// // niceScroll 滚动条
$('html').niceScroll({
    cursorcolor: "#099", //滚动条的颜色
    cursoropacitymax: 0.8, //滚动条的透明度，从0-1   
    touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备 true滚动条拖动不可用  
    cursorwidth: "6px", //滚动条的宽度  单位默认px 
    cursorborder: "0", // 游标边框css定义    
    cursorborderradius: "3px", //滚动条两头的圆角   
    autohidemode: false, //是否隐藏滚动条  true的时候默认不显示滚动条，当鼠标经过的时候显示滚动条   
    zindex: "auto", //给滚动条设置z-index值    
    spacebarenabled: true,  // 当按下空格时使页面向下滚动
    railvalign: 'defaul',
    railpadding: {
        top: 0,
        right: -6,
        left: 0,
        bottom: 0
    } //滚动条的位置
});

// $.fn.highlight1 = function () {
//     this.css("color", "red")
//     return this;
// }

// function foo(x) {
//     console.log(arguments)
//     for (let i = 0; i < arguments.length; i++) {
//         console.log("arg" + i + "=" + arguments[i])
//     }
// }
// foo(30, 20, 30)



// // Stick menu
// $("nav").sticky({ topSpacing: 0 });
// // var navH = $("nav").offset().top;
// //  //滚动条事件
// //  $(window).scroll(function(){
// //   var scroH = $(this).scrollTop();
// //   if(scroH>=navH){
// //     $("nav").addClass('navfixed')
// //   }else if(scroH<navH){
// //      $("nav").removeClass("navfixed")
// //   }
// //  })

// // 首页幻灯片
// var swiper = new Swiper(".swiper-container", {
//     autoplay: 3000, //可选选项，自动滑动
//     pagination: ".swiper-pagination", //添加滑动按钮
//     paginationClickable: true,
// });

// // 移动端菜单
// $(document).on("click", ".m-nav-menu", function () {
//   $(".m-nav-menu").toggleClass("on");
//   $(".nav-menu").slideToggle();
// });

// if ($(window).width() <= 540) {
//   $(".nav-menu").on("click", function () {
//     $(this).hide();
//   });
// }

