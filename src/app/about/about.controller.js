(function () {
    'use strict';

    angular.module('NodeIsCoolApp').controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = [];
    
    /* @ngInject */
    function AboutCtrl() {
        /* jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
        }
    }
})();