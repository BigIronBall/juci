JUCI.app
.directive("juciExpandable", function(){
	var plugin_root = $juci.module("core").plugin_root; 
	return {
		templateUrl: plugin_root + "/widgets/juci.expandable.html", 
		replace: true, 
		scope: {
			title: "@", 
			status: "="
		}, 
		transclude: true, 
		link: function (scope, element, attrs) {
			
		}
	};  
})
