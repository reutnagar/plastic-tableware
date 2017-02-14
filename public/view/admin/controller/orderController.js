app.controller('orderCtrl', function($scope, $http) {  
 console.log("orders controller````````````````"); 

 $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

 $scope.master = {};
 $scope.ordersOfUserName={};
  //$scope.orders = {};
  //$scope.lastOrders = {};
  $scope.showMe = true;


  $scope.showAllOrders=function(){
   console.log("request all orders");
   $http.get('/admin/showAllOrders')
   .success(function(data){
    $scope.orders = data;
    console.log("Succeed loading",$scope.orders);
  })
   .error(function(data){
    console.log("Error: "+data);
  });
 }

 $scope.showLastOrders=function(){
   console.log("request last orders");
   $http.get('/admin/showLastOrders')
   .success(function(data){
    $scope.orders = data;
    console.log("Succeed loading",$scope.lastOrders);
  })
   .error(function(data){
    console.log("Error: "+data);
  });
 }

 //now it from client side, but i think that itws match to admin also...... 
 $scope.ordersOfUserName=function(userName){
   var data = userName;
   var config = {
    headers : {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
    }
  }
  $http.post('/ordersOfUserName', data, config)
  .success(function (data, status, headers, config) {
    console.log("Succeed post ordersOfUserName");
    $scope.ordersOfUserName=data;
    console.log("orders of ", data);
  })
  .error(function (data, status, header, config) {
    console.log("Error: "+ data);
    $scope.ResponseDetails = "orders of " + data +
    "<hr />status: " + status +
    "<hr />headers: " + header +
    "<hr />config: " + config;
  });
};

});


/*


});
 

/*

<script>
  $(function () {
    //Initialize Select2 Elements
    $(".select2").select2();

    //Datemask dd/mm/yyyy
    $("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
    //Datemask2 mm/dd/yyyy
    $("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
    //Money Euro
    $("[data-mask]").inputmask();

    //Date range picker
    $('#reservation').daterangepicker();
    //Date range picker with time picker
    $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'});
    //Date range as a button
    $('#daterange-btn').daterangepicker(
        {
          ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
          startDate: moment().subtract(29, 'days'),
          endDate: moment()
        },
        function (start, end) {
          $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
    );

    //Date picker
    $('#datepicker').datepicker({
      autoclose: true
    });

    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'iradio_minimal-blue'
    });
    //Red color scheme for iCheck
    $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
      checkboxClass: 'icheckbox_minimal-red',
      radioClass: 'iradio_minimal-red'
    });
    //Flat red color scheme for iCheck
    $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass: 'iradio_flat-green'
    });

    //Colorpicker
    $(".my-colorpicker1").colorpicker();
    //color picker with addon
    $(".my-colorpicker2").colorpicker();

    //Timepicker
    $(".timepicker").timepicker({
      showInputs: false
    });

</script>*/