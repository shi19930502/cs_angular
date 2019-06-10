//下面的这两种写法一样？还是写第一种保障点
//import _ from "./angular.min.js";
//import * as names from "./angular.min.js";
import _ from "angular";
import router from 'router'
import message from "message"
import farm from 'farm';
import fertilization from 'fertilization'
import pharmacy from 'pharmacy'
var mainApp=angular.module('mainApp',['ui.router']);

mainApp.controller("Message",message);
mainApp.controller("Farm",farm);
mainApp.controller("Fertilization",fertilization);
mainApp.controller("Pharmacy",pharmacy);

mainApp.controller("MainController",function($scope,ajax){
	$scope.getSession=function(){
		//这里是记录那个session
	}
})

mainApp.config(function($urlRouterProvider,$stateProvider){
	console.log(1)
//	$urlRouterProvider.when("","/message");
	$stateProvider.state("message",{
		url:"/message",
		templateUrl:"module/message/message.html"
	});
	$stateProvider.state("farm",{
		url:"/farm",
		templateUrl:"module/farm/farm.html"
	});
	$stateProvider.state("fertilization",{
		url:"/fertilization",
		templateUrl:"module/fertilization/fertilization.html"
	});
	$stateProvider.state("pharmacy",{
		url:"/pharmacy",
		templateUrl:"module/pharmacy/pharmacy.html"
	});
})

mainApp.factory('ajax',function($http){
//	通过依赖注入使$http简化成jq的ajax
	return function (config){
		if(config.type='get'){
			console.log(config)
			var param='?';
			for(var key in config.data){
				param+=`${key}=${config.data[key]}&`
			}
			$http.get(config.url+param).success(config.success)
		}else{
		    $http.post(config.url,config.data).success(config.success)	
		}
	}
})