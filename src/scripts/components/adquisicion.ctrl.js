'use strict'
angular.module('metricas')

.controller('adquisicionCtrl', function () {
  var self = this

  self.cpr = function (gastos, numero) {
    self.respuesta = gastos / numero
  }
})
