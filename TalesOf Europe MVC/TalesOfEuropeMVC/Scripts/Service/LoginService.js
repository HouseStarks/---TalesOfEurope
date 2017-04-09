appTOELogin.service("TOELoginAPI", function ($http) {
    debugger;
    this.getLoginDetail = function (Username) {
        if (Username == undefined || Username == "")
            Username = null;
        debugger;
        return $http.get("http://localhost:1421/api/Login/LoginDetails/" + Username);
    }

});