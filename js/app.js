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
