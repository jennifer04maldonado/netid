function ratings_page_load(){
	//Allows the social and professional tabs to change color on click
	$('.social_tab_link').click(function(){
		if($('.social_tab_link').hasClass('social_tab_link_active')){
			
		} else{
			$('.social_tab_link > a').addClass('social_tab_link_active');
			$('.prof_tab_link > a').removeClass('prof_tab_link_active');
		}	
	});
	$('.prof_tab_link').click(function(){
		if($('.prof_tab_link').hasClass('prof_tab_link_active')){
			
		} else {
			$('.prof_tab_link > a').addClass('prof_tab_link_active');
			$('.social_tab_link > a').removeClass('social_tab_link_active');
		}
	});

	//Causes the tabs to be initially open when the user navigates to the ratings page
	$('.social_tab_link').trigger('click');
	$('.social_tab1').addClass('active');
	$('.persona_tab1').addClass('active');
	

	var score = $('.score_container').width();
	$('.score_container').height(score);
}
