app.controller('listProductCtrl', function ($scope, $http, $routeParams, $location) {
    $scope.subCategory = $routeParams.subCategory;
    $scope.image = "";
    $scope.myList = [];
    $scope.getProductsOfSubCategory = function (subCategory) {
        var data = $scope.subCategory;
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        $http.post('/getProductsOfSubCategory', data, config)
            .success(function (data, status, headers, config) {
                console.log("Succeed post getProductsOfSubCategory", data);
                //$scope.PostDataResponse = data;
                $scope.products = data;
                $scope.category = data[0].category;
                console.log("items", data);
                for (var i = 0, length = $scope.products.length; i < length; i++) {
                    $scope.getQuantities($scope.products[i].quantities, i);
                }
            })
            .error(function (data, status, header, config) {
                console.log("Error: " + data);
                $scope.ResponseDetails = "items: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };

    $scope.getQuantities = function (quantities, i) {

        quantities = angular.toJson(quantities);
        //console.log("*******in getQuantities*******",quantities);
        var data = $.param({
            quantities: quantities
        });

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.post('/admin/getQuantities', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("Succeed getQuantities");
                console.log("~~~~~~~for", quantities, "---", $scope.PostDataResponse);
                $scope.products[i].quantities = $scope.PostDataResponse;
                console.log("~~~~~~~for", i, "---", $scope.products[i]);

            })
            .error(function (data, status, header, config) {
                console.log("Error: " + data);
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };





    $scope.setImageModal = function (image) {
        $scope.image = 'img/' + image;
        console.log("$scope.image", $scope.image);
    };



    $scope.addToCart = function (product) {
        if (JSON.parse(localStorage.getItem('myList')) !== null)
            $scope.myList = JSON.parse(localStorage.getItem('myList'));

        console.log("myList from localStorage", $scope.myList);
        for (var i = 0; i < $scope.myList.length; i++) {
            if (product._id == $scope.myList[i]._id) {
                $scope.myList[i].quantity++;
                localStorage.setItem('myList', JSON.stringify($scope.myList));
                return;
            }
        }
        console.log('there isnt the same product');
        $scope.addItem = {
            _id: product._id,
            name: product.name,
            price: product.price,
            quantity: '1',
            image: product.image,
            color: "white"
        };
        $scope.myList.push($scope.addItem);
        localStorage.setItem('myList', JSON.stringify($scope.myList));
        console.log("myList from localStorage", $scope.myList);
    };
});