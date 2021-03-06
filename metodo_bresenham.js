//Método Bresenham
function Bresenham(x0, y0, x1, y1, var_color) {
    var dx = Math.abs(x1 - x0),
        sx = x0 < x1 ? 1 : -1;
    var dy = Math.abs(y1 - y0),
        sy = y0 < y1 ? 1 : -1;
    var err = (dx > dy ? dx : -dy) / 2;
    while (true) {
        setPixel(x0, y0, color[var_color]);
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

        // listado_coordenadas.innerHTML += 
        // "x = [" + x0 + "] " +
        // "y = [" + y0 + "] " +
        // "<br>";
    }
}