
$(document).ready(function(){
	var contentSection = $('.content-section');
	var navigation = $('nav');
	

	navigation.on('click', 'a', function(event){
		event.preventDefault(); 
		smoothScroll($(this.hash));
	});
	
	$(window).on('scroll', function(){
		updateNavigation();
	})

	updateNavigation();
	
	function updateNavigation(){
		contentSection.each(function(){
			var sectionName = $(this).attr('id');
			var navigationMatch = $('nav a[href="#' + sectionName + '"]');
			if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
				  ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
				{
					navigationMatch.addClass('active-section');
				}
			else {
				navigationMatch.removeClass('active-section');
			}
		});
	}
	function smoothScroll(target){
		$('body,html').animate({
			scrollTop: target.offset().top
		}, 800);
	}
});