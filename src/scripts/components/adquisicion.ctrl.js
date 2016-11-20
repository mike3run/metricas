'use strict'
angular.module('metricas')

.controller('adquisicionCtrl', function () {
  var self = this

  //Costo promedio de adquisición ($) =  gastos de adquisición ($) / número de clientes adquiridos (#)
  self.cpa = function (gastos, numero) {
    self.respuesta = gastos / numero
  }
})
