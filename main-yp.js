$(function(){
	$(".body_home").addClass("showdiv");
    /*刷新自动回顶*/
    $("html,body").animate({
            scrollTop: 0,
            screenLeft: 0,
        }, 400); 


		$(".body_b").mousewheel(function(event, delta, deltaX, deltaY){
			
			if(deltaY>0){ 
				$("#headtop").slideDown(400)
				$(".header2").removeClass("lit"); 
			}
			if(deltaY<0){ 
				//$("#headtop").slideUp(400) 
				$(".header2").addClass("lit"); 
			}
			if(delta>0 && $(".body_b").scrollTop()==0){ 
				$(".body_home").addClass("showdiv");
				$(".main2").removeClass("showdiv");
				$(".main2").removeClass("shownav");
                $(".body_b .header .wp-menu .i2").removeClass("hover").siblings().removeClass("hover");
				$(".topbox").removeClass("showdiv")
				setTimeout(function(){
				 if($(window).width()>850){$(".banner .slick-active .a1").focus();} 
				},500);
				$(".body_b").removeClass("showdiv"); 
				$(".home5").removeClass("showdiv");
				if($(".body_b").css("position")=="fixed")$(".header").removeClass("mobile"); 
				$("#headtop").show() 
			}
		});
		$(".bb").click(function(){   
			$(".body_b").addClass("showdiv");//.focus(); 
			$(".topbox").addClass("showdiv"); 
			$(".body_b").focus()
			setTimeout(function(){ 
				$(".body_home").removeClass("showdiv");//.addClass("leave");
				$(".home5").addClass("showdiv");
				$(".main2").addClass("showdiv");$(".body_b .header .wp-menu .i2").addClass("hover");
				$(".main2").addClass("shownav");
				$(".body_b").focus()
				//$(".nav_r").addClass("showdiv");
			},500);
		})
		
		$(".body_home").mousewheel(function(event, delta, deltaX, deltaY){
				if(delta<0){
					$(".bb").click();
				};
		});  
	

	$('body').keydown(function(e){ 
		if(e.keyCode=="40" && $(".body_home").hasClass("showdiv")){
			$(".bb").click();
		}
		if(e.keyCode=="38" && $(".body_b").hasClass("showdiv") && $(".body_b").scrollTop()==0){
			$(".body_home").addClass("showdiv");
            $(".body_b .header .wp-menu .i2").removeClass("hover").siblings().removeClass("hover");
			$(".main2").removeClass("shownav");
			$(".main2").removeClass("showdiv");
			$(".topbox").removeClass("showdiv");
			setTimeout(function(){
			 if($(window).width()>850){$(".banner .slick-active .a1").focus();} 
			},500);
			$(".body_b").removeClass("showdiv"); 
			$(".home5").removeClass("showdiv");
			if($(".body_b").css("position")=="fixed")$(".header").removeClass("mobile"); 
			$("#headtop").stop(true).show() 
		}
		if (e.keyCode=="40" && $(".topbox").hasClass("showdiv")) {
			var scrollHeight = $('.body_b').scrollTop();
			$('.body_b').scrollTop(scrollHeight + 10);
		}
		if (e.keyCode=="38" && $(".topbox").hasClass("showdiv")) {
			var scrollHeight = $('.body_b').scrollTop();
			$('.body_b').scrollTop(scrollHeight - 10);
		}
	})
	/*动画*/
		$(".body_b").scroll(function(){
			$(".main1,.main2,.main3,.main4,.main5,.main6,.main7,.main8,.main9,.main10,.footer").each(function(index, element) {
				var e=$(this); 
				var fix=parseInt(e.attr("fix"));
				if(!fix && fix!=0){fix=$(window).height()*6*0.12;}
				else{fix=$(window).height()*fix*0.12;} 
		//console.log($(window).scrollTop(),$(e).offset().top,fix)
				if($(window).scrollTop()>=$(e).offset().top-fix){
					if(!$(e).hasClass("showdiv")){
						$(e).addClass("showdiv"); 
				$(e).addClass("shownav").siblings().removeClass("shownav");
					if($(e).hasClass("shownav")){
						var navi=$(e).attr("nav-id");console.log(navi);
						$(navi).addClass("hover").siblings().removeClass("hover")
					}      
					}           
				}
				else{
					if($(e).hasClass("showdiv")){
						$(e).removeClass("showdiv"); 
				$(e).addClass("shownav").siblings().removeClass("shownav");
					if($(e).hasClass("shownav")){
						var navi=$(e).attr("nav2-id");console.log(navi);
						$(navi).addClass("hover").siblings().removeClass("hover")
					}      
					}
				}
			
			});
		});
});