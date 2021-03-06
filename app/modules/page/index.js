// page modules components:

const controller = require('./controllers/page.ctrl.js')
const directive = require('./directives/page.directive.js')

module.exports = angular.module('app.page', [] )
	.controller( 'pageCtrl', [ '$scope', 'dataService', '$rootScope', '$state', controller ] )
	.directive( 'page', [ directive ] )
