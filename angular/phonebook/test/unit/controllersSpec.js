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
    var testScope = {};
    $controller("ContactListCtrl", {
        $scope: testScope
    });
    equal(4, testScope.contacts.length);
});
