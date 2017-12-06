'use strict';

/**
 * @ngdoc function
 * @name chatAngularApp.decorator:Messageformatter
 * @description
 * # Messageformatter
 * Decorator of the chatAngularApp
 */
angular.module('chatAngularApp')
  .config(function ($provide) {
    $provide.decorator('messageFormatter', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });
