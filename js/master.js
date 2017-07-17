var myApp = angular.module("myApp", []);

myApp.controller("myController", ["$scope", "$http", "$filter", function($scope, $http, $filter) {
  $http.get("http://ergast.com/api/f1/2017/driverStandings.json").then(function(data) {
    $scope.drivers = [];
    for (i = 0; i < 5; i++) {
      $scope.drivers.push(data.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver);
      $scope.drivers[i].position = i + 1;
    }
  });

  $scope.count = 0;
  $scope.lastcalled = 1;
  $scope.orderByMe = function(x, y) {
    if ($scope.lastcalled === y) {
      $scope.count += 1;
      if ($scope.count > 1) {
        $scope.count = 0;
      }
    } else {
      $scope.count = 0;
    }
    $scope.lastcalled = y;
    if ($scope.count === 0) {
      $scope.myOrderBy = x;
    } else {
      $scope.myOrderBy = '-';
      $scope.myOrderBy += x;
    }

    /*
    if ($scope.key === newKey) {
      $scope.key = '-' + newKey;
    } else {
      $scope.key = newKey;
    }
    */
  }
}]);
