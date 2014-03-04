function AppCtrl($scope, Project, Review) {
	
	$scope.projects = Project.getProjects();
	
	$scope.reviews = Review.getReviews();
	
	$scope.openLink = function(link) {
		location.href = link;
	}
	
	$scope.isMorePanelOpen = false;
	
	$scope.toggleMore = function() {
		//console.log('toggle more panel');
		if (!$scope.isMorePanelOpen) {
			$scope.isMorePanelOpen = true;
		} else {
			$scope.isMorePanelOpen = false;
		}
	}
	
	$scope.date = Date.now();
	
	$scope.sideBarURL = 'partials/sidebar-reviews.html';
	
	$scope.setCurrent = function(current) {
		$scope.applicationsCurrent = '';
		$scope.servicesCurrent = '';
		$scope[current+'Current'] = 'current';
		$scope.isMorePanelOpen = false;
	}
	
}