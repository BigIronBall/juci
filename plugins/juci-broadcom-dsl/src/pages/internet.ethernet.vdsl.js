//! Author: Martin K. Schröder <mkschreder.uk@gmail.com>

JUCI.app
.controller("BCMVDSLPage", function($scope, $uci, $dsl){
	$scope.getItemTitle = function(dev){
		if(!dev) return "Unknown"; 
		return dev.name.value + " (" +dev.ifname.value + ")"; 
	}
	$dsl.getDevices().done(function(devices){
		$scope.vdsl_devices = devices.filter(function(dev){
			return dev.type == "vdsl"; 
		}).map(function(dev){
			return dev.base; 
		}); 
		$scope.$apply(); 
	}); 
	
	
	$scope.onCreateDevice = function(){
		$uci.layer2_interface_adsl.create({
			".type": "vdsl_interface",
			"name": gettext("New device")
		}).done(function(interface){
			$scope.vdsl_devices.push(interface); 
			$scope.$apply(); 
		});
	}
	
	$scope.onDeleteDevice = function(dev){
		if(!dev) alert(gettext("Please select a device in the list!")); 
		if(confirm(gettext("Are you sure you want to delete this device?"))){
			dev.$delete().done(function(){
				$scope.vdsl_devices = $scope.vdsl_devices.filter(function(d){
					return d != dev; 
				}); 
				$scope.$apply(); 
			}); 
		}
	}
}); 
