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
    templateUrl: 'assets/templates/adquisicion.html'
  })

  .state('lifetime', {
    url: '/lifetime',
    templateUrl: 'assets/templates/lifetime.html'
  })

  .state('retencion', {
    url: '/retencion',
    templateUrl: 'assets/templates/retencion.html'
  })

  .state('rfm', {
    url: '/rfm',
    templateUrl: 'assets/templates/rfm.html'
  })



  $urlRouterProvider.otherwise('/');
  
  //$locationProvider.html5Mode(true);
})

// Execute SVG4EveryBody 💅
svg4everybody();

//# sourceMappingURL=app.js.map
