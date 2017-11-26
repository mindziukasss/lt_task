var app = angular.module('message', []);

app.controller('messageController', function($scope, $http){

    $scope.storeMessage = function(){
        var dataObj = {
            full_name: $scope.full_name,
            email: $scope.email,
            phone: $scope.phone,
            message: $scope.message
        }
        $http.post('http://127.0.0.1:8000/api/messages', dataObj).then(function(response){
            $scope.full_name = "";
            $scope.email = "";
            $scope.phone = "";
            $scope.message = "";
            $('#messageCreate').modal('hide');
            
        });
    };
});