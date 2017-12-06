'use strict';

/**
 * @ngdoc service
 * @name chatAngularApp.chatSocket
 * @description
 * # chatSocket
 * Factory in the chatAngularApp.
 */
angular.module('chatAngularApp')
  .factory('chatSocket', function (socketFactory) {
     var socket = socketFactory();
      socket.forward('broadcast');
    // Public API here
    return {
      someMethod: function () {
        return socket;
      }
    };
  });
