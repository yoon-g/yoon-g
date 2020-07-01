$(function(){
			  var num = 0;  
	  
	  function nextImg(){
		$('.banner > li').eq(num).stop().fadeOut();
		if(num==5){  
			num = 0;  
		   $('.banner > li ').eq(num).stop().fadeIn();	
		
		}else{
			num++;
		   
		   $('.banner > li').eq(num).stop().fadeIn();
		}
	  };
	  
	  function prevImg(){
		$('.banner > li').eq(num).stop().fadeOut();

		if(num==0){  
			num = 5;   
		   $('.banner > li ').eq(num).stop().fadeIn();	
		
		}else{
			num--; 
		   
		   $('.banner > li  ').eq(num).stop().fadeIn();
		}
	  };
	   Timer = setInterval(nextImg,3000);
});