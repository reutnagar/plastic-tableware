app.controller('subCategoryCtrl', function ($scope, $http, $routeParams, $location) {
    $scope.category = $routeParams.category;
    $scope.master = {};
    $scope.subCategories = {};
    $scope.categories = {};
    $scope.goToListProducts = function (subCategory) {
        console.log("goToSubCtegory with subCategory variable", subCategory);
        $location.path("/productPage/" + subCategory);
    }
    $scope.showAllCategories = function () {
        $http.get('showAllCategories')
            .success(function (data) {
                $scope.categories = data;
                console.log("Succeed loading", $scope.categories);
            })
            .error(function (data) {
                console.log("Error: " + data);
            });
    }

    $scope.showAllSubCategory = function (category) {
        var data = category;
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        $http.post('/showAllSubCategory', data, config)
            .success(function (data, status, headers, config) {
                console.log("Succeed post showAllSubCategory");
                $scope.subCategories = data;
                console.log("category from ", data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: " + data);
                $scope.ResponseDetails = "category: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };

});