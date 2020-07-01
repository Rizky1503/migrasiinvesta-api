'use strict'
const Database = use('Database')
	const Encryption = use('Encryption')
	const moment = require('moment');

class HomeController {
	async text_agreement({response}){
		const agreement = await Database
			.table('agreement')
			.first()
		return response.json(agreement)
	}

	async slider({response}){
		const slider = await Database
			.table('t_image_slide')
			.where('status_image','1')
		return response.json(slider)
	}

	async test({response,request}){
		const Inputs = request.only(['username','password'])
		return response.json(Inputs.username)
	}

	async berita({response}){
		const id_berita = await Database
			.table('t_category')
			.whereIn('category_id', [1,2,3])
			.orderBy('category_id','ASC')

		var berita = [];
		for (var IdBerita = 0; IdBerita < id_berita.length; IdBerita++) {
			const beritaq = await Database
				.table('berita')
				.where('category_id',id_berita[IdBerita].category_id)
				.orderBy('id_berita','DESC')
				.limit(2)
			berita.push(beritaq);
		}

		return response.json(berita);
	}

	async materi({response,params}){
		const data = await Database
			.select('t1.no_materi','t1.jenis_ujian','t1.topik','t1.file_name','t1.link_url','t1.status_materi','t2.jenis_ujian_desc')
			.table('t_unduh_materi as t1')
			.leftJoin('m_jenis_ujian as t2','t1.jenis_ujian','t2.jenis_ujian_id')
			.where('t1.jenis_ujian',params.id)
			.where('t1.status_materi','1')
		return response.json(data)
	}

}

module.exports = HomeController
