//Método DDA
function DDA( ya,yb, xa ) {
	ya = Math.round( ya );
	yb = Math.round( yb );
	xa = Math.round( xa );
	
	var y = ya < yb ? ya : yb,
		i = Math.abs( ya - yb );
	for( ; i >= 0; i-- ) {
        setPixel(xa, y+1, color[1]);
        listado_coordenadas.innerHTML += 
        "x = [" + xa + "] " +
        "y = [" + y+1 + "] " +
        "<br>";
	}
}

function hLine( xa,xb, ya ) {
	xa = Math.round( xa );
	xb = Math.round( xb );
	ya = Math.round( ya );
	
	var x = xa < xb ? xa : xb,
		i = Math.abs( xa - xb );
	for( ; i >= 0; i-- ) {
        setPixel(x+1, ya, color[1]);
        listado_coordenadas.innerHTML += 
        "x = [" + x+1 + "] " +
        "y = [" + ya + "] " +
        "<br>";
	}
}

function line( xa,ya, xb,yb ) {
	xa = Math.round( xa );
	ya = Math.round( ya );
	xb = Math.round( xb );
	yb = Math.round( yb );
	
	var dx = xb - xa,
		dy = yb - ya,
		cInc, rInc,
		h, i;
	
	if( dx === 0 ) {
		vLine( ya,yb, xa );
		return;
	} else if( dy === 0 ) {
		hLine( xa,xb, ya );
		return;
	}
	
	cInc = dx < 0 ? -1 : 1;
	rInc = dy < 0 ? -1 : 1;

	dx = Math.abs( dx );
	dy = Math.abs( dy );
	
	if( dx >= dy ) {

		h = -dx;
        setPixel(xa, ya, color[1]);
        listado_coordenadas.innerHTML += 
        "x = [" + xa + "] " +
        "y = [" + ya + "] " +
        "<br>";
		for( i = dx; i > 0; i-- ) {
			xa += cInc;
			h += 2*dy;
			if( h >= 0 ) {
				ya += rInc;
				h -= 2*dx;
			}
            setPixel(xa, ya, color[1]);
            listado_coordenadas.innerHTML += 
            "x = [" + xa + "] " +
            "y = [" + ya + "] " +
            "<br>";
		}
		
	} else {

		h = -dy;
        setPixel(xa, ya, color[1]);
        listado_coordenadas.innerHTML += 
        "x = [" + xa + "] " +
        "y = [" + ya + "] " +
        "<br>";
		for( i = dy; i > 0; i-- ) {
			ya += rInc;
			h += 2*dx;
			if( h >= 0 ) {
				xa += cInc;
				h -= 2*dy;
			}
            setPixel(xa, ya, color[1]);
            listado_coordenadas.innerHTML += 
            "x = [" + xa + "] " +
            "y = [" + ya + "] " +
            "<br>";
		}
		
	}
}