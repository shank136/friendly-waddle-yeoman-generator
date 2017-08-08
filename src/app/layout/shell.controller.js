(function () {
    'use strict';

    angular.module('NodeIsCoolApp').controller('ShellCtrl', ShellCtrl);

    ShellCtrl.$inject = ['$rootScope'];

    function ShellCtrl($rootScope) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
