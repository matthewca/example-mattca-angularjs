app.directive('noTouch', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			/* If not touch enabled, add no-touch class */
			if (!("ontouchstart" in document.documentElement)) {
				document.documentElement.className += " no-touch";
			}
		}
	}
});

app.directive('windowScroll', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			/* Enable shadow under header when scrolling */
			angular.element(window).scroll(function (e) {
				var y = $(window).scrollTop();
				var h = angular.element("#header");
				if (y > 0) {
					if (!h.hasClass("shadow")) h.addClass("shadow");
				} else {
					h.removeClass("shadow");
				}
			});
		}
	}
});

app.directive('clickScrollTop', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			/* Scroll to top when clicking logo */
			element.bind('click', function() {
				$("html, body").animate({
					scrollTop: "0"
				}, 500);
			})}
	}
});