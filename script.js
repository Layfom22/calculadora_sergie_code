
//Asignamos una variable para la pantalla
let v_pantalla = document.getElementById('pantalla')
let textoanterior = document.getElementById('text_operacion_ante')

//esto agrega el valor a la pantalla

function agregar(valor) {
    v_pantalla.value += valor;
}
function borrar() {
    v_pantalla.value = "Operación";
    textoanterior.innerHTML = ""
}

function calcular(){
    textoanterior.innerHTML ="operacion anterior " + v_pantalla.value
    const resultado = eval(v_pantalla.value)
    v_pantalla.value = resultado
}