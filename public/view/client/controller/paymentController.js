app.controller('listProductCtrl', function ($scope, $http) {
    var handler = StripeCheckout.configure({
        key: 'pk_test_BhOjkKLIAI0WnFdiStLTRHG2',
        image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        locale: 'auto',
        token: function (token) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
        }
    });

    document.getElementById('customButton').addEventListener('click', function (e) {
        // Open Checkout with further options:
        handler.open({
            name: 'Plastic Tableware',
            description: '2 widgets',
            amount: 2000
        });
        e.preventDefault();
    });

    // Close Checkout on page navigation:
    window.addEventListener('popstate', function () {
        handler.close();
    });
});
