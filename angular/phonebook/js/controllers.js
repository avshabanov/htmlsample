
phonebookApp.controller("ContactListCtrl", [
    "$scope",
    "contactService",
    function ContactListCtrl($scope, contactService) {
        contactService.getContacts();
        $scope.contactData = contactService.data;
    }
]);
