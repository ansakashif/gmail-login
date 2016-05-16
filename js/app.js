/**
 * Created by Kashif on 5/10/2016.
 */

function loginController($scope) {
    $scope.hideName = true;
    $scope.hideemailLabel = true;
    $scope.hidePasswordBox = true;
    $scope.hideNextBtn = false;
    $scope.hideSignBtn = true;
    $scope.hideCreateTxt = false;
    $scope.hideSignTxt = true;
    $scope.hideEmailBox = false;
    $scope.hideArrow = true;

    $scope.verifyEmail = function () {
        console.log($scope.loginForm.$valid);
        if ($scope.loginForm.$valid) {
            $scope.hideName = false;
            $scope.hideemailLabel = false;
            $scope.hidePasswordBox = false;
            $scope.hideNextBtn = true;
            $scope.hideSignBtn = false;
            $scope.hideCreateTxt = true;
            $scope.hideSignTxt = false;
            $scope.hideEmailBox = true;
            $scope.hideArrow = false;            
        }
    };
    
    $scope.verifyPassword = function () {
        $scope.passwordRequired = true;
        console.info($scope.loginForm.$valid);
    }

    $scope.goBack = function () {
        $scope.hideName = true;
        $scope.hideemailLabel = true;
        $scope.hidePasswordBox = true;
        $scope.hideNextBtn = false;
        $scope.hideSignBtn = true;
        $scope.hideCreateTxt = false;
        $scope.hideSignTxt = true;
        $scope.hideEmailBox = false;
        $scope.hideArrow = true;
    }
}


angular.module('loginApp', [])
    .controller('loginController', ['$scope', loginController])
