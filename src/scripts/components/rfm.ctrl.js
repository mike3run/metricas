'use strict'
angular.module('metricas')

.controller('rfmCtrl', function () {
  var self = this

  self.cpr = function (gastos, numero) {
    self.respuesta = gastos / numero
  }
})
