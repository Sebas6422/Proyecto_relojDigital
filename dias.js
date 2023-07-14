
const diasSemana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]
const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const fecha = document.querySelectorAll(".dia");
const hoy = new Date();
const pantalla = document.getElementById('fechaPantalla');
let horaPantalla = document.getElementById('hora');
let minutosPantalla = document.getElementById('minutos');
let segundosPantalla = document.getElementById('segundos');
const marca = document.getElementById('ToM');

//muestra la fecha con mes exacta
for(let i = 0; i <= mesesAnio.length;i++){
    if(i == hoy.getMonth()){
        pantalla.textContent = hoy.getDate() + " de " + mesesAnio[i] + " del " + hoy.getFullYear();
    } 
}

//marca el dia al que corresponde la fecha
for(let i = 0; i < fecha.length; i++){
    if(fecha[i].classList.contains(diasSemana[hoy.getDay()])) {
        fecha[i].style.color= "white";
    }
}

//muestra la hora exacta y dependiendo si es de mañana o tarde para colocar el am y pm
function marcarHora(){
    const hora = new Date();
    var hh = hora.getHours();
    var mm = hora.getMinutes();
    var ss = hora.getSeconds();
    marca.textContent = "am";
    if(hh >= 12){
        hh = hh - 12;
        marca.textContent = "pm";
    }

    if(hh == 0){
        hh = 12;
    }

    horaPantalla.textContent = (hh < 10) ? "0" + hh : hh;
    minutosPantalla.textContent = (mm < 10) ? "0" + mm : mm;
    segundosPantalla.textContent = (ss < 10) ? "0" + ss : ss;
}

setInterval(marcarHora, 1000);
