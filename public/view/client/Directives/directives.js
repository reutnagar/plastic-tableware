app.directive('custom', function(){
    return {
        restrict:'A',
        controller:'productCtrl',
            require: '^ngModel',
    scope: {
    ngModel: '=',
    },
        link: function(scope, element){
            element.bind('click', function($event){
                //alert('added successfuly to your shoping bag');
            });
            element.css({
             cursor: 'pointer'
            });

        }
    }
});