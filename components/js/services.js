angular.module('projectServices', []).factory('Project', function() {
	return {
		getProjects: function() {
			return {
				"TVLinks ": {
					"id": "tvlinks",
					"link": "http://appworld.blackberry.com/webstore/content/136899",
					"title": "TVLinks",
					"platforms": "PlayBook (discontinued)",
					"image": "",
					"feedback": []
				},
				"MarketsTV": {
					"id": "marketstv",
					"link": "http://appworld.blackberry.com/webstore/content/108191",
					"title": "MarketsTV",
					"platforms": "PlayBook, BB10, iPad (soon)",
					"image": "",
					"feedback": []
				},
				"TWiT Live Beta": {
					"id": "twit-live",
					"link": "http://appworld.blackberry.com/webstore/content/28055080",
					"title": "TWiT Live Beta",
					"platforms": "BB10",
					"image": "",
					"feedback": []
				},
				"Weight Tracker (soon)": {
					"id": "weight-tracker",
					"link": "",
					"title": "Weight Tracker (soon)",
					"platforms": "Web, Android, iOS",
					"image": "",
					"feedback": []
				},
				"CargoVans.ca": {
					"id": "cargo-vans",
					"link": "https://itunes.apple.com/ca/app/cargovans.ca/id729549371?mt=8&uo=4",
					"title": "CargoVans.ca",
					"platforms": "iOS",
					"image": "",
					"feedback": []
				},
			};
		}
	}
});

angular.module('reviewServices', []).factory('Review', function() {
	return {
		getReviews: function() {
			return {
				"Review1": {
					"date": "October 6, 2013",
					"title": "Awesome ",
					"comment": "Thanks for this!",
					"product": "TWiT Live Beta",
					"version": "0.0.6",
					"productLink": "https://appworld.blackberry.com/webstore/content/136899/?lang=en"
				},
				"Review2": {
					"date": "July 23, 2013",
					"title": "Good ",
					"comment": "Very good. Plus it's free. Grab it while u can. First to comment. #BBRY4ver",
					"product": "MarketsTV",
					"version": "1.0.12",
					"productLink": "https://appworld.blackberry.com/webstore/content/108191/?lang=en"
				},
				"Review3": {
					"date": "January 8, 2013",
					"title": "Extremely Useful ",
					"comment": "It saves an amazing amount of time and really sums up the day in the business world",
					"product": "MarketsTV",
					"version": "1.0.5",
					"productLink": "https://appworld.blackberry.com/webstore/content/108191/?lang=en"
				},
				"Review4": {
					"date": "November 01, 2012",
					"title": "Works great",
					"comment": "Loads a little slow, sometimes freezes, but its awesome other wise. Lots and lots to choose from!",
					"product": "TVLinks Beta",
					"version": "0.1.0",
					"productLink": "https://appworld.blackberry.com/webstore/content/102348/?lang=en"
				},
				"Review5": {
					"date": "September 27, 2012",
					"title": "tried this when it was beta",
					"comment": "thank you for continuing development. Great app supported",
					"product": "TVLinks",
					"version": "1.0.0",
					"productLink": "https://appworld.blackberry.com/webstore/content/136899/?lang=en"
				},
				"Review6": {
					"date": "August 28, 2012",
					"title": "Best tv app ever",
					"comment": "I like how this app has a list of shows and not channels, this app really helps! if you could add Newhart or The Bob Newhart show from the comedy gold network that would be great",
					"product": "TVLinks Beta",
					"version": "0.0.7",
					"productLink": "https://appworld.blackberry.com/webstore/content/102348/?lang=en"
				}
			};
		}
	}
});