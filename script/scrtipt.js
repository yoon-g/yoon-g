$(document).ready(function(){ //$(document).ready=$
    //==============비주얼 슬라이드 이미지 
	  var num = 0;  
	  
	  function nextImg(){
		$('.img_box img').eq(num).stop().fadeOut();//사라지고 stop 를 쓰는것은  다음클릭하면 움직임 이동 차단  
		//img_box img img 다 가리킴  그중 넘버 =eq(num=0,1,2)
		if(num==4){  
			num = 0;   /*num값을 0으로 초기화하여 1번이미지가 나오게함.*/
		   $('.img_box img').eq(num).stop().fadeIn();	//다음이미지 보이게
		
		}else{
			num++; /*num=2아닐땐,다음이미지가 나오게 하기위해서 1씩 증가*/
		   
		   $('.img_box img').eq(num).stop().fadeIn();
		}
	  };
	  
	  function prevImg(){
		$('.img_box img').eq(num).stop().fadeOut();

		if(num==0){  /*num가 0와 같다면*/
			num = 4;   /*num값을 2으로 설정해서 마지막이미지가 나오게함.*/
		   $('.img_box img').eq(num).stop().fadeIn();	
		
		}else{
			num--; /*다음이미지가 나오게 하기위해서 1씩 증가*/
		   
		   $('.img_box img').eq(num).stop().fadeIn();
		}
	  };
	  /* 이전 버튼클릭시 함수 nextImg 호출하기 */
	  $('.btn_img a:first-child').click(function(){
		  prevImg(); /* 다음 이미지나오게 하는 함수 */
		  return false;/*href=#속성사용시 화면위로 못올라가게*/
	  });
	  
	  /* 다음 버튼클릭시 함수 nextImg 호출하기 */
	  $('.btn_img a:last-child').click(function(){
		  nextImg(); /* 다음 이미지나오게 하는 함수 */
		  return false;/*href=#속성사용시 화면위로 못올라가게*/
	  });
	  
	  /* 시간객체를 사용하여 자동으로 플레이 하기 */
	  Timer = setInterval(nextImg,3000);//계속 나오게 하는것 

	  //===============메뉴 
		  var gnbA=$('.gnb .main_box > a');
	  
	  	gnbA.on('mouseenter focus',function(){
			$('.gnb .sub').hide();
			$(this).next().slideDown(400).show();

		});

		$('.gnb').mouseleave(function(){
			$('.gnb .sub').hide();
		});
	

	//=======공지사항
		$('ul.tabs li').mouseenter(function(){
			var tab_id = $(this).attr('data-tab')//attr 속성값을 가져온다. data-tab ==data-tab="tab-1

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$('#'+tab_id).addClass('current');// <div id="tab-1" class="tab-content current">
		});

	
  });
