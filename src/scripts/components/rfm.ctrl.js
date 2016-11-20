'use strict'
angular.module('metricas')

.controller('rfmCtrl', function () {
  var self = this

  self.datos = []

  self.datos.push({
    nombre: 'Carlos',
    recency: 8,
    frecuencia: 2,
    monetary: 1200,
    ponderados3: null,
  })

  self.otroDemo = function () {
    self.datos.push({
      nombre: null,
      recency: null,
      frecuencia: null,
      monetary: null,
    })
  }

  // Constantes
  self.recencyAsignado1 = 20
  self.recencyAsignado2 = 10
  self.recencyAsignado3 = 1

  self.frecuencyAsignado = 30
  self.frecuencyLimite = 900

  self.montoAsignado = 10
  self.montoLimite = 900

  self.R = 3
  self.F = 5
  self.M = 2

  self.recencyPuntos = function (recencia) {
    if (recencia >= 0 && recencia <= 3) {
      return self.recencyAsignado1
    } else if (recencia >= 4 && recencia <= 6) {
      return self.recencyAsignado2
    } else if (recencia >= 7 && recencia <= 12) {
      return self.recencyAsignado3
    } else {
      return 'Elige un valor de 0 -12'
    }
  }

  self.ponderados = function (puntos) {
    if(typeof puntos === 'number') {
      return puntos * self.R
    }
    return 'Error'
  }

})
