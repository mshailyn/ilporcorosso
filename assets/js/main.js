/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);

document.querySelector('#appetizer').addEventListener('click', showAppetizer)
document.querySelector('#brunch').addEventListener('click', showBrunch)
document.querySelector('#dinner').addEventListener('click', showDinner)
document.querySelector('#dessert').addEventListener('click', showDessert)
document.querySelector('#cocktails').addEventListener('click', showCocktails)

function showAppetizer(){
	document.querySelector(".appetizers").classList.remove('hide');
	document.querySelector(".brunch").classList.add('hide')
	document.querySelector(".dinner").classList.add('hide')
	document.querySelector(".dessert").classList.add('hide')
	document.querySelector(".cocktails").classList.add('hide')
}

function showBrunch(){
	document.querySelector(".appetizers").classList.add('hide');
	document.querySelector(".brunch").classList.remove('hide')
	document.querySelector(".dinner").classList.add('hide')
	document.querySelector(".dessert").classList.add('hide')
	document.querySelector(".cocktails").classList.add('hide')
}

function showDinner(){
	document.querySelector(".appetizers").classList.add('hide');
	document.querySelector(".brunch").classList.add('hide')
	document.querySelector(".dinner").classList.remove('hide')
	document.querySelector(".dessert").classList.add('hide')
	document.querySelector(".cocktails").classList.add('hide')
}

function showDessert(){
	document.querySelector(".appetizers").classList.add('hide');
	document.querySelector(".brunch").classList.add('hide')
	document.querySelector(".dinner").classList.add('hide')
	document.querySelector(".dessert").classList.remove('hide')
	document.querySelector(".cocktails").classList.add('hide')
}

function showCocktails(){
	document.querySelector(".appetizers").classList.add('hide');
	document.querySelector(".brunch").classList.add('hide')
	document.querySelector(".dinner").classList.add('hide')
	document.querySelector(".dessert").classList.add('hide')
	document.querySelector(".cocktails").classList.remove('hide')
}