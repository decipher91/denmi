

	$('.menu').on('click', function() {
		console.log('clicked');
			$('.menu-overlay').show();
			$('.first-level-menu').show();
			$('.menu').hide();
			$('.close').show();
		}
	);

	$('.close').on('click', function() {
			$('.menu-overlay').hide();
			$('.menu').show();
			$('.close').hide();
		}
	);

	$('.second-level-trigger').on('click', function() {
		console.log('clicked');
			$('.first-level-menu').hide();
			$('.second-level-menu').show();
			$('.step-back').show();
		}
	);

	$('.step-back').on('click', function() {
			$('.first-level-menu').show();
			$('.second-level-menu').hide();
			$('.step-back').hide();
		}
	);

	$('.menu-overlay a').on('click', function() {
			$('.menu-overlay').hide();
		}
	);

	

$(function() {
	$('body').addClass('newpage');
});



