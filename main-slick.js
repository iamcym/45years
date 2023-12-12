$(function(){
	/*主大图切换*/
	$('.mbanner .inner2 .news_list').slick({
		dots: true,  //指示点
		infinite: true,  //循环播放
		autoplay: false,  //自动播放
		autoplaySpeed: 5000, //自动播放间隔
		arrows: true,  //左右箭头
		useCSS: true,  //使用 CSS3 过度
		speed: 600,  //滑动时间
		fade: true,
		slide: 'li',  //滑动元素查询
		slidesToShow: 1,  //幻灯片每屏显示个数
		slidesToScroll: 1  //幻灯片每次滑动个数
	}); 
	$(".post .more_btn a").attr("target","_blank")

	$('.post-12 .ul1.news_list').slick({
		dots: false,  //指示点
		infinite: true,  //循环播放
		autoplay: false,  //自动播放
		autoplaySpeed: 5000, //自动播放间隔
		arrows: true,  //左右箭头
		useCSS: true,  //使用 CSS3 过度
		speed: 600,  //滑动时间
		slide: 'li',  //滑动元素查询
		slidesToShow: 4,  //幻灯片每屏显示个数
		slidesToScroll: 1  //幻灯片每次滑动个数
	}); 
	$('.post-61 .box2 .news_list').slick({
		dots: true,  //指示点
		infinite: true,  //循环播放
		autoplay: false,  //自动播放
		autoplaySpeed: 5000, //自动播放间隔
		arrows: true,  //左右箭头
		useCSS: true,  //使用 CSS3 过度
		centerMode: true, //中间属性
		speed: 600,  //滑动时间
		slide: 'li',  //滑动元素查询
		slidesToShow: 3,  //幻灯片每屏显示个数
		slidesToScroll: 1  //幻灯片每次滑动个数
	});
	$(".post-61 .box1 .news_play").on("click", function () {
		if ($(this).is(".pause")) {
		  $(this).parents(".news_box").find("video").trigger("pause")
		  $(this).removeClass("pause")
		} else {
		  $(this).parents(".news_box").find("video").trigger("play")
		  $(this).addClass("pause")
		}
	  })
	var $li6n = $(".post-61 .box3 .news_list.ul1 li.news:nth-child(6n)").each(function (i) {
		$(".post-61 .box3 .news_list.ul1 li.news").slice(i * 6, i * 6 + 6).wrapAll("<ul class='pro_ul clearfix'></ul>"); 
		});
		$(".post-61 .box3 .news_list.ul1 li.news").slice($li6n.length * 6).wrapAll("<ul class='pro_ul clearfix'></ul>");
	$('.post-61 .box3 .news_list.ul1').slick({
		dots: true,  //指示点
		infinite: true,  //循环播放
		autoplay: false,  //自动播放
		autoplaySpeed: 5000, //自动播放间隔
		arrows: false,  //左右箭头
		useCSS: true,  //使用 CSS3 过度
		speed: 600,  //滑动时间
		slide: 'ul.pro_ul',  //滑动元素查询
		slidesToShow: 1,  //幻灯片每屏显示个数
		slidesToScroll: 1  //幻灯片每次滑动个数
	});
	$('.post-61 .box3 .news_list.ul2').slick({
		dots: true,  //指示点
		infinite: true,  //循环播放
		autoplay: false,  //自动播放
		autoplaySpeed: 5000, //自动播放间隔
		arrows: false,  //左右箭头
		useCSS: true,  //使用 CSS3 过度
		speed: 600,  //滑动时间
		slide: 'li',  //滑动元素查询
		slidesToShow: 1,  //幻灯片每屏显示个数
		slidesToScroll: 1  //幻灯片每次滑动个数
	});
	$('.post-61 .pic-box .news_list.ul2').slick({
		dots: true,  //指示点
		infinite: true,  //循环播放
		autoplay: false,  //自动播放
		autoplaySpeed: 5000, //自动播放间隔
		arrows: false,  //左右箭头
		useCSS: true,  //使用 CSS3 过度
		speed: 600,  //滑动时间
		slide: 'li',  //滑动元素查询
		slidesToShow: 1,  //幻灯片每屏显示个数
		slidesToScroll: 1  //幻灯片每次滑动个数
	});
$(".post-51 .box1 .swiper-slide").eq(0).addClass("selected")
$(".post-51 .box1 .ageNav-swiper li").eq(0).addClass("selected")
$(".post-51 .box1 .news .news_title a").each(function(){
 var txt=$(this).text(); 
 //$(this).text(parseInt(txt))
})

	var thumbsSwiper = new Swiper('.post-51 .box1 .swiper-container',{
		slidesPerView : 3,  	
		spaceBetween :150,
  		prevButton: '.post-51 .box1 .leftarr',
  		nextButton: '.post-51 .box1 .rightarr',
          onTransitionEnd: function(swiper){
             if(thumbsSwiper.isBeginning){
             $(".post-51 .box1  .news").eq(0).addClass("selected").siblings().removeClass("selected")
             $(".post-51 .box1 .ageNav-swiper li").eq(0).addClass("selected").siblings().removeClass("selected")
             }
          },
         onSlideNextStart:function(swiper){ 
           if(thumbsSwiper.isBeginning){         
           };
           $(".swiper-slide.selected").next().addClass("selected").siblings().removeClass("selected")
           $(".post-51 .box1 .ageNav-swiper li.selected").next().addClass("selected").siblings().removeClass("selected")
          },
         onSlidePrevEnd:function(swiper){ 
            $(".swiper-slide.selected").prev().addClass("selected").siblings().removeClass("selected")
            $(".post-51 .box1 .ageNav-swiper li.selected").prev().addClass("selected").siblings().removeClass("selected")
          },
          click:function(swiper){ 
             var index=swiper.clickedIndex;  
             $(".post-51 .box1 .swiper-slide").eq(index).addClass("selected").siblings().removeClass("selected")
             $(".post-51 .box1 .ageNav-swiper li").eq(index).addClass("selected").siblings().removeClass("selected")
              thumbsSwiper.slideTo(index, 600, false)
          },
		breakpoints: { 
		  1000: {  
			slidesPerView:2,
			spaceBetween: 50
		  },
		  768: {  
			slidesPerView:2,
			spaceBetween: 0
		  },
		  478: {  
			slidesPerView:1,
			spaceBetween: 0
		  }
		}
	  }); 
    var ageSwiper = new Swiper('.ages-nav',{ 
          watchSlidesVisibility: true,
           slidesPerView: 9,  
           multipleActiveThumbs: true,
          autoScrollOffset: 1,
            on:{
            //   slideChangeTransitionStart:function(swiper){ 
            //     $(".swiper-slide.selected").next().addClass("selected").siblings().removeClass("selected")
            //    },
            //    click:function(swiper){
            //       var index=swiper.clickedIndex;  
            //       var index2=index-2; 
            //       $(".swiper2 .swiper-slide").eq(index).addClass("selected").siblings().removeClass("selected")
            //        mySwiper.slideTo(index, 600, false)
            //        thumbsSwiper.slideTo(index2, 600, false)
            //    }
         }
     })
var $li2n = $(".post-51 .box3 .news_list li.news:nth-child(2n)").each(function (i) {
		$(".post-51 .box3 .news_list li.news").slice(i * 2, i * 2 + 2).wrapAll("<ul class='swiper-slide'></ul>"); 
		});
		$(".post-51 .box3 .news_list li.news").slice($li2n.length * 2).wrapAll("<ul class='swiper-slide'></ul>");
	  var mt2 = new Swiper('.post-51 .box3 .swiper',{
		slidesPerView: 4,  	
		spaceBetween: 86,
		//loop : true,
		//autoScrollOffset: 1,
		//watchSlidesVisibility: true,
		//multipleActiveThumbs: true,
  		  prevButton: '.post-51 .box3 .leftarr',
  		  nextButton: '.post-51 .box3 .rightarr',
		scrollbar:  '.post-51 .box3 .swiper-scrollbar',
		scrollbarHide:false,
		breakpoints: { 
		  1200: {  
			slidesPerView:4,
			spaceBetween: 86
		  },
		  1000: {  
			slidesPerView:2,
			spaceBetween: 30
		  },
		  768: {  
			slidesPerView:1,
			spaceBetween: 0
		  }
		}
	  });  


	  var mt6 = new Swiper('.post-51 .b4-con .b4-1 .swiper-container',{
		slidesPerView: 6,  	
		spaceBetween: 20,
		loop : false,
  		prevButton: '.post-51 .b4-con .b4-1 .leftarr',
  		nextButton: '.post-51 .b4-con .b4-1 .rightarr',

		breakpoints: { 
		  1000: {  
			slidesPerView:6,
			spaceBetween: 20
		  },
		  768: {  
			slidesPerView:2,
			spaceBetween: 20
		  }
		}
	  });  
	  var mt7 = new Swiper('.post-51 .b4-con .b4-2 .swiper-container',{
		slidesPerView: 6,  	
		spaceBetween: 20,
		loop : false,
  		prevButton: '.post-51 .b4-con .b4-2 .leftarr',
  		nextButton: '.post-51 .b4-con .b4-2 .rightarr',
		breakpoints: { 
		  1000: {  
			slidesPerView:6,
			spaceBetween: 20
		  },
		  768: {  
			slidesPerView:4,
			spaceBetween: 20
		  }
		}
	  });  

    $(".post-51 .ages-nav li").click(function(){
        var age = $(this).find(".ages_title").text().slice(0,4)
$(this).addClass("selected").siblings().removeClass("selected");
        var notFind = true
        $(".post-51 .box1 li.news .news_title").each(function(index){
            if($(this).text().slice(0,4)==age){
                $(".post-51 .box1 .swiper-slide").eq(index).addClass("selected").siblings().removeClass("selected")
                //mySwiper.slideTo(index, 600, false)
console.log(index)
                thumbsSwiper.slideTo(index, 600, false)
                notFind = false
                return false
            }
        })
       
    })
});