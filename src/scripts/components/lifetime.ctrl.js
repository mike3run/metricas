'use strict'
angular.module('metricas')

.controller('lifetimeCtrl', function () {
  var self = this

  self.cpr = function (gastos, numero) {
    self.respuesta = gastos / numero
  }
})
