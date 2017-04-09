appTOELogin.controller('TOELoginController', function ($scope, TOELoginAPI) {
    debugger;
    //getLogin();

    //function getMenu() {
    //    debugger;
    //    var serCallForLog = TOELoginAPI.getLoginDetail();
    //    serCallForLog.then(function (d) {
    //        debugger;
    //        $scope.ToeLogin = d.data;
    //    }, function (error) {
    //        alert(error);
    //        $log.error('Oops! Something went wrong while fetching the data.')
    //    })
    //}
    $scope.GetUserNameDetails = function () {
        debugger;
        var serCallForLog = TOELoginAPI.getLoginDetail($scope.Username);
        serCallForLog.then(function (d) {
            debugger;
            $scope.ToeLogin = d.data;
        }, function (error) {
            debugger;
            alert(error);
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }

});