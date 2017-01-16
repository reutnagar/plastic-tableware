app.controller('mainController',function($scope, $http) {
	//$scope.formData = {};

    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
        options.async = true;
    });
});