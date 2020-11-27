new Vue({
	el: '#desafio',
	data: {
		cor: 'red',
		classeCSS: 'destaque',
		classeInsert: '',
		sera: false,
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			this.classeCSS = this.classeCSS === 'destaque' ? 'emcolher' : 'destaque'
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if (valor === 100) clearInterval(temporizador)
			}, 500)
		}
	}
})
