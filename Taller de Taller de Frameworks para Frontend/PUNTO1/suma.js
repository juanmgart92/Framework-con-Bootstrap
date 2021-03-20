/*-JUAN DAVID LOPEZ LOMBANA 
-JUAN MANUEL GUERRERO ARTEAGA*/

/*Funcion para solo validadar numeros*/
function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
    return true;
    }else{
        alert("¡Solo ingrese valores númericos neutros!");
        return false;
    }       
}

function suma(){

var num1=Number(document.getElementById('a').value);
var num2=Number(document.getElementById('b').value);
var sum=num1+num2;

alert("La suma es: " + sum);
}

function resta(){

var num1=Number(document.getElementById('a').value);
var num2=Number(document.getElementById('b').value);
var res=num1-num2;
alert("La resta es: " + res);

}

function multiplicar(){

var num1=Number(document.getElementById('a').value);
var num2=Number(document.getElementById('b').value);
var mult=num1*num2;

alert("La multiplicación es: " + mult);

}

function dividir(){

var num1=Number(document.getElementById('a').value);
var num2=Number(document.getElementById('b').value);
var dividir=num1/num2;

alert("La división es: " + dividir);
}

function potencia(){
    var base=Number(document.getElementById('c').value);
    var expo=Number(document.getElementById('d').value);
    var potencia = Math.pow(base,expo);

    alert("La potencia es: " + potencia);
}