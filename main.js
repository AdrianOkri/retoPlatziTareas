new Vue({
    el: '#app',
    data: {
        logo: 'https://static.platzi.com/static/css/logo.a76b2a87162b3b46529c30d1cb91ccc6.png',
        titulo: 'Reto Grinch - Platzi',
        tarea: []
    },
    methods: {
        deleteTarea: function(t) {
            let indice = this.tarea.indexOf(t)
            this.tarea.splice(indice, 1)
        },
        addTarea: function(ev) {
            ev.preventDefault()

            if(this.tarea.nombre) {
                this.tarea.push({
                    nombre: this.tarea.nombre
                })
            } else {
                alert('Tarea no valida')
            }
            
        },
        completed: function(t) {
            let indice = this.tarea.indexOf(t)
            this.tarea.splice(indice, 1, { nombre: 'Finalizada' })
        },
        reiniciar: function() {
            location.reload()
        }
    }
})