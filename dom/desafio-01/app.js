new Vue({
    el: '#desafio',
    data: {
        nome: 'Marcelo R. Pierre',
        idade: 26,
        image: 'https://cdn.hipwallpaper.com/i/25/39/WP7vNj.jpg'
    },
    methods: {
        idadeMultiplicada() {
            return this.idade * 3
        },
        rand() {
            return Math.random()
        }
    }
})

