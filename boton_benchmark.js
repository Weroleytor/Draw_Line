function Benchmark() {

    console.log("Benchmark");

    //Benchmark basico
    var startTime = performance.now()
    benchmark_basico()   //Medir tiempo entre startTime y endTime
    var endTime = performance.now()
    tiempo_basico.innerHTML = `Básico: ${endTime - startTime} milisegundos`;

    //Benchmark DDA
    var startTime = performance.now()
    benchmark_dda()   //Medir tiempo entre startTime y endTime
    var endTime = performance.now()
    tiempo_dda.innerHTML = `DDA: ${endTime - startTime} milisegundos`;

    //Benchmark Bresenham
    var startTime = performance.now()
    benchmark_bresenham()   //Medir tiempo entre startTime y endTime
    var endTime = performance.now()
    tiempo_bresenham.innerHTML = `Bresenham: ${endTime - startTime} milisegundos`;

}


function benchmark_basico(){

    //Método Básico
    
    //Horizontales
    for (let x = 0; x <= 1002; x++){
        //Entrar cada 3er pixel
        if (x % 3 == 0){
            //Vertical cada vez que sea múltiplo de 6
            if (x % 2 == 0){
                Basico(x, 0, x, 1002, 0);
            }else{
                Basico(x, 1002, x, 0, 0);
            }
        }
    }

    //Verticales
    for (let x = 0; x <= 1002; x++){
        //Entrar cada 3er pixel
        if (x % 3 == 0){
            //Vertical cada vez que sea múltiplo de 6
            if (x % 2 == 0){
                Basico(0, x, 1002, x, 1);
            }else{
                Basico(1002, x, 0, x, 1);
            }
        }
    }

    //Diagonales
    for (let x = 0; x <= 1000; x++){

        //Entrar cada 3er pixel
        if (x % 3 == 0){
            //Vertical cada vez que sea múltiplo de 6
            if (x % 2 == 0){
                //Diagonal 1, Noroeste
                Basico(0, x, x, 0, 2);

                //Diagonal 2, Noreste
                Basico(1002, x, 1002-x, 0, 2);

                //Diagonal 3, Sudoeste
                Basico(0, x, 1002-x, 1002, 2);

                //Diagonal 4, Sudeste
                Basico(1002, x, x, 1002, 2);
            }else{
                //Diagonal 1, Noroeste
                Basico(x, 0, 0, x, 2);

                //Diagonal 2, Noreste
                Basico(1002-x, 0, 1002, x, 2);

                //Diagonal 3, Sudoeste
                Basico(1002-x, 1002, 0, x, 2);

                //Diagonal 4, Sudeste
                Basico(x, 1002, 1002, x, 2);
            }
        }
    }

    //Actualizar Canvas
    ctx.putImageData(imgData, 0, 0);

}



function benchmark_dda(){

    //Método Básico
    
    //Horizontales
    for (let x = 0; x <= 1002; x++){
        //Entrar cada 3er pixel
        if (x % 3 == 0){
            //Vertical cada vez que sea múltiplo de 6
            if (x % 2 == 0){
                DDA(x, 0, x, 1002, 0);
            }else{
                DDA(x, 1002, x, 0, 0);
            }
        }
    }

    //Verticales
    for (let x = 0; x <= 1002; x++){
        //Entrar cada 3er pixel
        if (x % 3 == 0){
            //Vertical cada vez que sea múltiplo de 6
            if (x % 2 == 0){
                DDA(0, x, 1002, x, 1);
            }else{
                DDA(1002, x, 0, x, 1);
            }
        }
    }

    //Diagonales
    for (let x = 0; x <= 1000; x++){

        //Entrar cada 3er pixel
        if (x % 3 == 0){
            //Vertical cada vez que sea múltiplo de 6
            if (x % 2 == 0){
                //Diagonal 1, Noroeste
                DDA(0, x, x, 0, 2);

                //Diagonal 2, Noreste
                DDA(1002, x, 1002-x, 0, 2);

                //Diagonal 3, Sudoeste
                DDA(0, x, 1002-x, 1002, 2);

                //Diagonal 4, Sudeste
                DDA(1002, x, x, 1002, 2);
            }else{
                //Diagonal 1, Noroeste
                DDA(x, 0, 0, x, 2);

                //Diagonal 2, Noreste
                DDA(1002-x, 0, 1002, x, 2);

                //Diagonal 3, Sudoeste
                DDA(1002-x, 1002, 0, x, 2);

                //Diagonal 4, Sudeste
                DDA(x, 1002, 1002, x, 2);
            }
        }
    }

    //Actualizar Canvas
    ctx.putImageData(imgData, 0, 0);

}


function benchmark_bresenham(){

    //Método Básico
    
    //Horizontales
    for (let x = 0; x <= 1002; x++){
        //Entrar cada 3er pixel
        if (x % 3 == 0){
            //Vertical cada vez que sea múltiplo de 6
            if (x % 2 == 0){
                Bresenham(x, 0, x, 1002, 0);
            }else{
                Bresenham(x, 1002, x, 0, 0);
            }
        }
    }

    //Verticales
    for (let x = 0; x <= 1002; x++){
        //Entrar cada 3er pixel
        if (x % 3 == 0){
            //Vertical cada vez que sea múltiplo de 6
            if (x % 2 == 0){
                Bresenham(0, x, 1002, x, 1);
            }else{
                Bresenham(1002, x, 0, x, 1);
            }
        }
    }

    //Diagonales
    for (let x = 0; x <= 1000; x++){

        //Entrar cada 3er pixel
        if (x % 3 == 0){
            //Vertical cada vez que sea múltiplo de 6
            if (x % 2 == 0){
                //Diagonal 1, Noroeste
                Bresenham(0, x, x, 0, 2);

                //Diagonal 2, Noreste
                Bresenham(1002, x, 1002-x, 0, 2);

                //Diagonal 3, Sudoeste
                Bresenham(0, x, 1002-x, 1002, 2);

                //Diagonal 4, Sudeste
                Bresenham(1002, x, x, 1002, 2);
            }else{
                //Diagonal 1, Noroeste
                Bresenham(x, 0, 0, x, 2);

                //Diagonal 2, Noreste
                Bresenham(1002-x, 0, 1002, x, 2);

                //Diagonal 3, Sudoeste
                Bresenham(1002-x, 1002, 0, x, 2);

                //Diagonal 4, Sudeste
                Bresenham(x, 1002, 1002, x, 2);
            }
        }
    }

    //Actualizar Canvas
    ctx.putImageData(imgData, 0, 0);

}