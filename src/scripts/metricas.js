'use strict'

angular.module('metricas', [
  'ui.router'
])

.config(function (
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
){

  $stateProvider

  .state('adquisicion', {
    url: '/',
    templateUrl: 'assets/templates/adquisicion.html',
    controller: 'adquisicionCtrl as ctrl'
  })

  .state('lifetime', {
    url: '/lifetime',
    templateUrl: 'assets/templates/lifetime.html',
    controller: 'lifetimeCtrl as ctrl'
  })

  .state('retencion', {
    url: '/retencion',
    templateUrl: 'assets/templates/retencion.html',
    controller: 'retencionCtrl as ctrl'
  })

  .state('rfm', {
    url: '/rfm',
    templateUrl: 'assets/templates/rfm.html',
    controller: 'rfmCtrl as ctrl'
  })



  $urlRouterProvider.otherwise('/');

  //$locationProvider.html5Mode(true);
})
