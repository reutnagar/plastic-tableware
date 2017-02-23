app.directive('notificationDir', function () {
    return {
        restrict: 'E',
        require: '^ngModel',
        scope: {
            ngModel: '=',
            checkQuantity: '&'
        },
        controller: 'notificationCtrl',
        templateUrl: 'pages/notificationPage.html'
    }
});