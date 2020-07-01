'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')



Route.group(() => {
	Route.get('slider', 'Home/HomeController.slider')	
	Route.get('berita', 'Home/HomeController.berita')	
	Route.get('text_agreement', 'Home/HomeController.text_agreement')

	Route.get('materi/:id', 'Home/HomeController.materi')

		
}).prefix('api/migrasi/home')


Route.group(() => {
	Route.post('login_api', 'Home/LoginController.login_api')	
}).prefix('api/migrasi/login')

