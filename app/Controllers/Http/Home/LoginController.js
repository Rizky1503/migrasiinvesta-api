'use strict'
const Database = use('Database')
	const Encryption = use('Encryption')
	const moment = require('moment');

class LoginController {
	
	async login_api ({request,response}){
		const Inputs = request.only(['username','password'])
		const login = await Database.raw("SELECT 'peserta' as stt, uid, nama, noinduk, kelas, jenis_ujian FROM peserta WHERE userid='"+Inputs.username+"' AND PASSWORD= '"+Inputs.password+"'  AND statusaktif = 'YES' union select 'koordinator' as stt, idg as uid, namag as nama, '' as noinduk, '' as kelas, '' as jenis_ujian FROM guru WHERE userg='"+Inputs.username+"' AND passg= '"+Inputs.password+"' and access = 'Koordinator' limit 1");


		if (login[0].length > 0) {
			return response.json({
				data  : login[0][0],	
				count : login[0].length
			})
		}else{
			return response.json({
				data  : [],	
				count : login[0].length
			})
		}
	}

}

module.exports = LoginController
