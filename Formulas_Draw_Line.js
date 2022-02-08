var canvas = document.getElementById("canvas");

canvas.addEventListener("click", function(event){
    getMousePos(canvas, event);
});


const click_pos_1 = document.getElementById("click_pos_1");
const click_pos_2 = document.getElementById("click_pos_2");
const listado_coordenadas = document.getElementById("listado_coordenadas");



var ctx = canvas.getContext("2d");

// var cx = canvas.width * 0.5;
// var cy = canvas.height * 0.5;

// ctx.translate(cx, cy);    

//canvas.scale(1,-1);    // invert


console.log(canvas.width + " - " + canvas.height);


var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
var data = imgData.data;

var x0 = 0;
var x1 = 0;
var y0 = 0;
var y1 = 0;

var contador = 0;

//Imprimir los pixeles en el canvas
function setPixel(x, y, color) {
    var n = (y * canvas.width + x) * 4;
    data[n] = color.r;
    data[n + 1] = color.g;
    data[n + 2] = color.b;
    data[n + 3] = color.a;
}

//Seleccionar el color de la línea
var color = [
    {r: 255, g:   0, b:   0, a: 255}, // red
    {r:   0, g: 255, b:   0, a: 255}, // green
    {r:   0, g:   0, b: 255, a: 255}, // blue
];


//Obtener posición del mouse
function getMousePos(canvas, evt) {
    
    //Aumenta el contador para saber en cual click vamos
    contador++;

    var rect = canvas.getBoundingClientRect();

    x = evt.clientX - rect.left;
    y = evt.clientY - rect.top;




    // var x = 0;
    // var y = 0;

    // x = evt.clientX - rect.left;
    // y = evt.clientY - rect.top;

    // x = x - cx;
    // y = y - cy;


    console.warn("x = " + x + " y = " + y);

    //Muestra las coordenadas del click
    console.log( {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    });

    if (contador == 2){
        
        //Entra en el segundo click



        x1 = x;
        y1 = Math.trunc(y);
        
        console.log(
            "x0" + " = " + x0 + " - "
            + "y0" + " = " + y0 + " - "
            + "x1" + " = " + x1 + " - "
            + "y1" + " = " + y1
        );

        //Limpiar listado
        listado_coordenadas.innerHTML = "";


        click_pos_2.innerHTML = "Las coordenadas del segundo click son: X<sub>2</sub>[" +
        x1 + "] y Y<sub>2</sub>[" + y1 + "]";

        //Seleccionar el método y mandar datos
        if(document.getElementById('basico').checked) {
            console.log("Método Básico");
            Basico(x0, y0, x1, y1);
        }else if(document.getElementById('DDA').checked) {
            console.log("Método DDA");
            line(x0, y0, x1, y1);
        }else if(document.getElementById('bresenham').checked) {
            console.log("Método Bresenham");
            Bresenham(x0, y0, x1, y1);
        }


        //Actualizar Canvas
        ctx.putImageData(imgData, 0, 0);
    
        contador = 0;

    }else{
    
        //Entra en el primer click

        x0 = x;
        y0 = Math.trunc(y);
    
        click_pos_1.innerHTML = "Las coordenadas del primer click son: X<sub>1</sub>[" +
            x0 + "] y Y<sub>1</sub>[" + y0 + "]";

        // console.log(
        //     "0 - " + contador + " - " + x0 + " - " + y0
        // );
    }
}	