
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/zzz", {
        templateUrl : "post.html"
    })
    ;
});
