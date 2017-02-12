// console.log("hello addToCartService!!");

// app.factory('addToCartService',function ($scope){
// $scope.myList=[];
// $scope.addItem-[];
	
// 	return{
//    addToCart:function(){
//         /*if($scope.myList==""){
//             console.log("myList is empty");

//            $scope.myList.push(JSON.parse(localStorage.getItem('myList')));
//            localStorage.setItem('myList', JSON.stringify($scope.myList));
//            $scope.myList="";
//                     console.log("myList",$scope.myList);
//                 }*/
//         if(JSON.parse(localStorage.getItem('myList'))!== null)
//             $scope.myList = JSON.parse(localStorage.getItem('myList'));

//         console.log("myList from localStorage",$scope.myList);
//         for (var i = 0; i < $scope.myList.length; i++) {
//             if($scope.product._id == $scope.myList[i]._id)
//                 {
//                     console.log('there is same product in your cart',$scope.myList[i].quantity);
//                     $scope.myList[i].quantity+=$scope.quantity;
//                     console.log('there is same product in your cart',$scope.myList[i].quantity);
//                     localStorage.setItem('myList', JSON.stringify($scope.myList));
//                     return;
//                 }
//         }
//        console.log('there isnt the same product');
//         $scope.addItem=
//             {
//                 _id :$scope.product._id, 
//                 name : $scope.product.name,
//                 price : $scope.product.price,
//                 quantity : $scope.quantity,
//                 image : $scope.product.image,
//                 color : $scope.color
//             };
//         $scope.myList.push($scope.addItem);
//          localStorage.setItem('myList', JSON.stringify($scope.myList));
//          console.log("myList from localStorage",$scope.myList);
//          return;
//     }


// 	}
// });
