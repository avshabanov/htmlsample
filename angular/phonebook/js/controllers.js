
var phonebookApp = angular.module("phonebookApp", []);

phonebookApp.controller("ContactListCtrl", function ContactListCtrl($scope) {
    $scope.contacts = [
        {"name": "David Perl", "phone": "7004421118", "note": "Janitor, comes every Tuesday",
         "avatarUrl": "http://www.famfamfam.com/lab/icons/silk/icons/camera.png"},
        {"name": "Boris Karloff", "phone": "7005108511", "note": "Horror movies actor",
         "avatarUrl": "http://www.famfamfam.com/lab/icons/silk/icons/anchor.png"},
        {"name": "Alice Levistone", "phone": "7005103420", "note": "Real estate agent",
         "avatarUrl": "http://www.famfamfam.com/lab/icons/silk/icons/car.png"},
        {"name": "Bob Lee", "phone": "7003104578",
         "avatarUrl": "http://www.famfamfam.com/lab/icons/silk/icons/cd.png"}
    ];
    $scope.contactGroup = "All";
});
