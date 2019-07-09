addData.controller('AddDataController',function($scope){


    $scope.companies = [];
   
    $scope.addCompany = function(){

        $scope.companies.push($scope.newCompany);

        $scope.newCompany = {
           name:"",
           employees:"",
           headoffice:""
        }
    };
    $scope.removeRow = function(index){
        
        $scope.companies.splice( index, 1);
    };
    $scope.cites = ['Kolkata','Banglor','Pune'];
});