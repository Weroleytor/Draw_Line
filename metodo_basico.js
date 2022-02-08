//Método Básico
function Basico(x0, y0, x1, y1) {
    const m = (y1 - y0) / (x1 - x0);
    const b = y0 - m * x0;

    for (let x = x0; x <= x1; x++){
        let y = m * x + b;
        
        setPixel(x, Math.round(y), color[0]);
        listado_coordenadas.innerHTML += 
        "x1 = [" + Math.round(x) + "] " +
        "y = [" + Math.round(y) + "] " +
        "<br>";
    }

    for (let x = x1; x <= x0; x++){
        let y = m * x + b;
        
        setPixel(x, Math.round(y), color[0]);
        listado_coordenadas.innerHTML += 
        "x2 = [" + Math.round(x) + "] " +
        "y = [" + Math.round(y) + "] " +
        "<br>";
    }

    for (let y = y1; y <= y0; y++){
        let x = (y - b) / m;

        setPixel(Math.round(x), y, color[0]);
        listado_coordenadas.innerHTML += 
        "x3 = [" + Math.round(x) + "] " +
        "y = [" + Math.round(y) + "] " +
        "<br>";
    }

    for (let y = y0; y <= y1; y++){
        let x = (y - b) / m;

        setPixel(Math.round(x), y, color[0]);
        listado_coordenadas.innerHTML += 
        "x4 = [" + Math.round(x) + "] " +
        "y = [" + Math.round(y) + "] " +
        "<br>";
    }

    //Actualizar Canvas
    ctx.putImageData(imgData, 0, 0);

}
