// mocks
phonebookApp.factory("contactService", function () {
    return {
        data: {
            contacts: [{"test": "contact"}],
            contactGroup: "All"
        },

        getContacts: function () {
            // mock
        }
    };
});

// tests
var injector = angular.injector(['ng', 'phonebookApp']);

var init = {
    setup: function() {
        this.$scope = injector.get('$rootScope').$new();
    }
};

module("tests", init);

test("Test controller", function () {
    var $controller = injector.get("$controller");
    $controller("ContactListCtrl", { $scope: this.$scope });
    var expectedContacts = injector.get("contactService").data.contacts;
    equal(expectedContacts.length, this.$scope.contactData.contacts.length);
});
