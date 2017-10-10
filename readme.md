
programa cifrado cesar

subproceso funcion cipher

var text imrpime el texto a ser introducido
var str: el string  a ser transformado
var ascii:el valor ASCII que se le asigna
para   for (var i = 0; i < word.length; i++ {
    aplicarle .charCodeAt(i);
    Si el elemento ingresado es numero o vacio
        retorna undefined";
    Si el elemento ingresado es un string:
        separar en mayusuculas y minusculas
    Si es mayuscula aplicar la formula:(ascii-65+33)%26+65
    si es minuscula aplicar la formula:(ascii-97+33)%26+97
    retornar el nuevo valor del cifrado
}
