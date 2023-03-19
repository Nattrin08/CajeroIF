var Nintentos = 0;
const usuario = "natt";

alert ("Bienvenido a su BancoAmigo");
var Iusuario = prompt("Ingrese ususario:");
var Ipin = prompt("Ingrese pin:");
const pin = 1234;
const Saldo = 20000000;



if (usuario == Iusuario && pin == Ipin){
    alert ("tu saldo es:" + Saldo)
    }else if ((usuario !== Iusuario ) || ( pin !== Ipin)) {
        alert ("Usuario/Pin Incorrectos #1")
        Iusuario = prompt("Ingrese ususario:");
        Ipin = prompt("Ingrese pin:");
        if (usuario == Iusuario && pin == Ipin){
            alert ("tu saldo es:" + Saldo)
            }else if ((usuario !== Iusuario ) || ( pin !== Ipin)) {
                alert ("Usuario/Pin Incorrectos #2")
                Iusuario = prompt("Ingrese ususario:");
                Ipin = prompt("Ingrese pin:");
                if (usuario == Iusuario && pin == Ipin){
                    alert ("tu saldo es:" + Saldo)
                    }else if ((usuario !== Iusuario ) || ( pin !== Ipin)) {
                        alert ("Usuario/Pin Incorrectos #3")
                        Iusuario = prompt("Ingrese ususario:");
                        Ipin = prompt("Ingrese pin:");
                        if (usuario == Iusuario && pin == Ipin){
                            alert ("tu saldo es:" + Saldo)
                            }else {
                                alert ("Usuario/Pin Incorrectos #4")
                                alert ("BLOQUEADO")
                            }
                    }
            }
    }