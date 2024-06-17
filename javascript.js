let saludo = prompt("Bienvenido al banco LUSA, el banco que te ofrece prestamos con los intereses más bajos. ¿Cual es su nombre?");
let prestamo = parseInt(prompt(`Hola ${saludo}, ingrese el monto que desea solicitar. (Min. s/1000)` ));

function procesarPrestamos() {

    while (prestamo < 1000) {

        prestamo = parseInt(prompt(`Hola ${saludo}, ingrese el monto que desea solicitar. (Min. s/1000` ));
        break;
    }
}
procesarPrestamos();

let plazo
function cuotas(){
    while(plazo !== 6 && plazo !== 12 && plazo !== 18){

        plazo = parseInt(prompt(`Genial,${saludo} por favor selecciona la cantidad de cuotas que deseas: \n 1. 6 \n 2. 12 \n 3. 18 \nPor favor digite el número de su cuota preferente:`));
        
    }

    if (plazo == 6){
        let cuota1 = (prestamo * 1.5);
        let interes = cuota1 - prestamo;
        let cuotaMensual = (cuota1/6);
        alert("Monto solicitado: " + prestamo + "\n" + "Tu interes sera de: " + interes + "\n" + "El total a pagar es: " + cuota1 + "\n" + "Su cuota mensual sera de: " + cuotaMensual+ "\n" + "Número de cuotas: 06");
        
    }else if(plazo == 12){

        let cuota2 = (prestamo * 2.0);
        let interes = cuota2 - prestamo;
        let cuotaMensual = (cuota2/12).toFixed(2);
        alert("Monto solicitado: " + prestamo + "\n" + "Tu interes sera de: " + interes + "\n" + "El total a pagar es: " + cuota2 + "\n" + "Su cuota mensual sera de: " + cuotaMensual+ "\n" + "Número de cuotas: 12");
    }else if(plazo == 18){

        let cuota3 = (prestamo * 2.5);
        let interes = cuota3 - prestamo;
        let cuotaMensual = (cuota3/18).toFixed(2);
        alert("Monto solicitado: " + prestamo + "\n" + "Tu interes sera de: " + interes + "\n" + "El total a pagar es: " + cuota3 + "\n" + "Su cuota mensual sera de: " + cuotaMensual+ "\n" + "Número de cuotas: 18");

    }else{
        alert("bsldasjl")
        let plazo = prompt(`Genial, ahora ${saludo} por favor selecciona la cantidad de cuotas que deseas: \n 1. 6 \n 2. 12 \n 3. 18`);
    }

}

cuotas();







