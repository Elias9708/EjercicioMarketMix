const app = new Vue({
    el: '#app',
    data: {
        datos: [],
        usuariosExistentes: [],
        titulo: 'INGRESO DE INFORMACION',
    },

    methods: {
        guardar() {
            this.datos.nombreCompleto = this.datos.nombre + ' ' + this.datos.apellidos;
            this.datos.edad = this.calcularEdad(this.datos.fechaNacimiento);
            this.datos.contrasena = this.generarContrasena();

            let sw = false;

            for (let i = 0; i < this.usuariosExistentes.length; i++) {
                if (this.usuariosExistentes[i].usuario == this.datos.usuario) {
                    sw = true;
                }
            }

            if (sw == true) {
                alert("ERROR:\nEste usuario ya existe");
                return;
            }
            else {
                this.usuariosExistentes.push(this.datos);
                this.datos = [];
                alert("¡Usuario registro con exito!");
                return;
            }
        },
        generarContrasena() {
            let result = "";
            const abc = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" "); // Espacios para convertir cara letra a un elemento de un array
            const num = "0 1 2 3 4 5 6 7 8 9".split(" ");

            for (i = 0; i <= 3; i++) {
                const randomLet = Math.floor(Math.random() * abc.length);
                result += abc[randomLet]

                const randomNum = Math.floor(Math.random() * num.length);
                result += num[randomNum]
            }

            return result;
        },
        calcularEdad(fecha) {
            var hoy = new Date();
            var cumpleanos = new Date(fecha);
            var edad = hoy.getFullYear() - cumpleanos.getFullYear();
            var m = hoy.getMonth() - cumpleanos.getMonth();

            if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
                edad--;
            }

            return edad;
        },
        verUsuarios() {
            let users = "";

            for (let i = 0; i < this.usuariosExistentes.length; i++) {
                if (users.length == 0) {
                    users += this.usuariosExistentes[i].usuario;
                    console.log(this.usuariosExistentes);
                    
                }
                else {
                    users += ", " + this.usuariosExistentes[i].usuario;
                    console.log(this.usuariosExistentes);
                }
            }

            alert("Usuarios registrados: " + users);
        },
    },

});



// var miAuto = {
//     marca: "toyota",
//     modelo: "corolla",
//     anno: 2023,
//     detalleDelObjeto: function(){
//         console.log(` este auto ${this.modelo}  es marca ${this.marca}`)
//     }
// };

// miAuto.detalleDelObjeto();