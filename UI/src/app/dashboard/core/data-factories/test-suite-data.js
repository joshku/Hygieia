/**
 * Gets test suite related data
 */
(function () {
    'use strict';

    angular
        .module('devops-dashboard.core')
        .factory('testSuiteData', testSuiteData);

    function testSuiteData($http) {
        var testDetailRoute = 'test-data/test_suite_detail.json';
        var caDetailRoute = '/api/test/';

        return {
            details: details
        };

        // search for test suite data
        function details(params) {
            return $http.get(localTesting ? testDetailRoute : caDetailRoute, { params: params })
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();