'use strict';

describe('Controller: SocketcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('chatAngularApp'));

  var SocketcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocketcontrollerCtrl = $controller('SocketcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SocketcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
