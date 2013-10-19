phonebookApp.factory("getRestUrl", function () {
    return function phonebookRestUrlBase(relUrl) {
        return "rest/" + relUrl;
    }
});

phonebookApp.factory("contactService", [
    "$http",
    "getRestUrl",
    function ($http, getRestUrl) {
        var contactService = {
            data: {
                contacts: [],
                contactGroup: "All"
            },

            getContacts: function () {
                var self = this;
                return $http.get(getRestUrl("contacts.json"))
                    .success(function (value) {
                        self.data.contacts = value;
                    })
                    .error(function () {
                        // TODO: error handling strategy
                    });
            }
        };
        return contactService;
    }
]);