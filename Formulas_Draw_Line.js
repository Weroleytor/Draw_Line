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


//Método Bresenham
function Bresenham(x0, y0, x1, y1) {
    var dx = Math.abs(x1 - x0),
        sx = x0 < x1 ? 1 : -1;
    var dy = Math.abs(y1 - y0),
        sy = y0 < y1 ? 1 : -1;
    var err = (dx > dy ? dx : -dy) / 2;
    while (true) {
        setPixel(x0, y0, color[2]);
        if (x0 === x1 && y0 === y1) break;
        var e2 = err;
        if (e2 > -dx) {
            err -= dy;
            x0 += sx;
        }
        if (e2 < dy) {
            err += dx;
            y0 += sy;
        }

        listado_coordenadas.innerHTML += 
        "x = [" + x0 + "] " +
        "y = [" + y0 + "] " +
        "<br>";
    }
}

//Método Básico
function Basico(x0, y0, x1, y1) {
    const m = (y1 - y0) / (x1 - x0);
    const b = y0 - m * x0;

    for (let x = x0; x <= x1; x++){
        let y = m * x + b;
        
        setPixel(x, Math.round(y), color[2]);
        listado_coordenadas.innerHTML += 
        "x1 = [" + Math.round(x) + "] " +
        "y = [" + Math.round(y) + "] " +
        "<br>";

        if (Math.round(x) == x1 && Math.round(y) == y1){
            //return;
        }
    }

    for (let x = x1; x <= x0; x++){
        let y = m * x + b;
        
        setPixel(x, Math.round(y), color[2]);
        listado_coordenadas.innerHTML += 
        "x2 = [" + Math.round(x) + "] " +
        "y = [" + Math.round(y) + "] " +
        "<br>";
        
        if (Math.round(x) == x1 && Math.round(y) == y1){
            //return;
        }
    }

    for (let y = y1; y <= y0; y++){
        let x = (y - b) / m;

        setPixel(Math.round(x), y, color[2]);
        listado_coordenadas.innerHTML += 
        "x3 = [" + Math.round(x) + "] " +
        "y = [" + Math.round(y) + "] " +
        "<br>";
        
        if (x == x0 && y == y0){
            //return;
        }
    }

    for (let y = y0; y <= y1; y++){
        let x = (y - b) / m;

        setPixel(Math.round(x), y, color[2]);
        listado_coordenadas.innerHTML += 
        "x4 = [" + Math.round(x) + "] " +
        "y = [" + Math.round(y) + "] " +
        "<br>";
        
        if (x == x0 && y == y0){
            //return;
        }
    }


    
    //Actualizar Canvas
    ctx.putImageData(imgData, 0, 0);

}

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