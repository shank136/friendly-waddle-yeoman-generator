(function () {
    'use strict';

    angular.module('NodeIsCoolApp').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [];
    
    /* @ngInject */
    function HomeCtrl() {
        /* jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
        }
    }
})();