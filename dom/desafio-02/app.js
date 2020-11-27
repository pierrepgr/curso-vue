new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertando() {
            alert('Alertando');
        },
        keyDown(e) {
            this.valor = e.target.value;
        }
    }
})