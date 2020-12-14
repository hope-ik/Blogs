// //当代码加载到这里的时候,执行这个script,当代码加载到这里,说明loading该结束了
// window.onload = function () {
//   var siteWelcome = document.getElementById("siteWelcome");
//   siteWelcome.classList.remove("active");
// };

// // Menu Scroll to content and Active menu

// $("a[href*=#]").bind("click", function (e) {
//   e.preventDefault();
//   var target = $(this).attr("href");
//   $("html, body")
//     .stop()
//     .animate({ scrollTop: $(target).offset().top - 140 }, 1000, function () {});
//   return false;
// });

// // 技能列表
// var progress = 0;
// $(".skill-list li").on("mouseenter", function () {
//   var val = $(this).attr("data-percent");
//   $(this)
//     .children(".skill-item")
//     .children(".skill-img")
//     .css("bottom", -(100 - val) + "%");

//   function step() {
//     progress += 2;
//     $(".skill-inscir .skill-per").html(progress + "%");
//     if (progress < val) {
//       requestAnimationFrame(step);
//     }
//   }
//   setTimeout(function () {
//     requestAnimationFrame(step);
//   }, 200);
// });

// $(".skill-list li").on("mouseleave", function () {
//   $(".skill-img").css("bottom", "-100px");
//   progress = 0;
//   $(".skill-inscir .skill-per").html(progress + "%");
// });

// //工作案例切换
// $(".works-list-tab li").on("click", function () {
//   $(this).addClass("act").siblings().removeClass("act");
//   $(".works .works-list").fadeOut("fast");
//   $(".works .works-list").eq($(this).index()).fadeIn("fast");
// });

// // loading
window.onload = function() {
    $(".preloader").delay(1000).fadeOut("slow"); //一秒后缓慢隐没
}



// // niceScroll
// $("html").niceScroll();

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
var swiper = new Swiper(".swiper-container", {
    autoplay: 3000, //可选选项，自动滑动
    pagination: ".swiper-pagination", //添加滑动按钮
    paginationClickable: true,
});

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

// (function () {
//   window.scrollReveal = new scrollReveal({ reset: true, move: "100px" });
// })();