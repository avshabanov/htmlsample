
var phonebookApp = angular.module("phonebookApp", []);

phonebookApp.controller("ContactListCtrl", function ContactListCtrl($scope) {
    $scope.contacts = [
        {"name": "Alice", "phone": "7005103420", "note": "Real estate agent",
         "avatarUrl": "http://www.famfamfam.com/lab/icons/silk/icons/car.png"},
        {"name": "Bob", "phone": "7003104578",
         "avatarUrl": "http://www.famfamfam.com/lab/icons/silk/icons/cd.png"},
        {"name": "David", "phone": "7004421118", "note": "Janitor, comes every Tuesday",
         "avatarUrl": "http://www.famfamfam.com/lab/icons/silk/icons/camera.png"}
    ];
});
