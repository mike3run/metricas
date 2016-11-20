'use strict'
angular.module('metricas')

.controller('lifetimeCtrl', function () {
  var self = this

  // CLV ($)= Margen ($) (Indice de retencion (%) / (1+Indice de descuento (%) - Indice de retencion (%))
  self.clv = function (margen, retencion, descuento) {
    self.respuesta = (margen * retencion) / (1 + descuento - retencion)
  }
})
