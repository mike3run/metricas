'use strict'
angular.module('metricas')

.controller('rfmCtrl', function () {
  var self = this

  self.demo = {
    nombre: 'Carlos',
    recency: 8,
    asignados1: 1,
    ponderados1: 3,
    frecuencia: 2,
    asignados2: 60,
    ponderados2: 300,
    monetary: 1200,
    asignados3: 120,
    ponderados3: 240,
    valorCliente: 543
  }

  self.datos = []
  self.datos.push(self.demo)

  self.otroDemo = function () {
    self.datos.push({
      nombre: null,
      recency: null,
      asignados1: null,
      ponderados1: null,
      frecuencia: null,
      asignados2: null,
      ponderados2: null,
      monetary: null,
      asignados3: null,
      ponderados3: null,
      valorCliente: null
    })
  }

  // Constantes
  self.recencyAsignado1 = 20
  self.recencyAsignado2 = 10
  self.recencyAsignado3 = 1

  self.frecuencyAsignado = 30

  self.montoAsignado = 10

  self.R = 3
  self.F = 5
  self.M = 2

  self.cpr = function (gastos, numero) {
    self.respuesta = gastos / numero
  }
})
