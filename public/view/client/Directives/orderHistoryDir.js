console.log("order_list directive");
app.directive('orderList', ['$document', function ($document) {
    return {
        restrict: 'E',
        require: '^ngModel',
        scope: {
            ngModel: '=',
        },
        controller: 'orderCtrl',
        templateUrl: 'pages/orderHistory.html',
        link: function (scope, element, attr) {
            element.css({
                cursor: 'pointer'
            });
        }
    };
}]);