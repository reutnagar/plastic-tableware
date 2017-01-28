//add paymeny dependency
angular.module("clientApp").requires.push('angularPayments');

//set publish key
app.config(function ($window) {
    $window.Stripe.setPublishableKey('pk_test_BhOjkKLIAI0WnFdiStLTRHG2');
});
app.controller('paymentCtl', function ($scope, $http, $location) {

    // Stripe Response Handler
    $scope.stripeCallback = function (code, result) {
        if (result.error) {
            window.alert('it failed! error: ' + result.error.message);
        } else {
            window.alert('success! token: ' + result.id);
            var $payInfo = {
                'token': result.id,
                'customer_id': 111,
                'total': 50
            };

            $http.post('/api/payreservation', $payInfo).success(function (data) {
                if (data.status == "OK") {
                    console.log('payment recieved!');
                } else {
                    console.log('ERROR: payment is not recieved!');
                }
            });
        }
    };
});
