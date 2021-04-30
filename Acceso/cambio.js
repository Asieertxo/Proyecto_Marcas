var btn1 = document.getElementById('btn1'),
    contador1=0;

    function cambiohombre(){
        if(contador1==0){
            btn1.classList.add('genero-cambio');
            contador1=1;
        }else{
            btn1.classList.remove('genero-cambio');
            contador1=0;
        }
    }

    btn1.addEventListener('click',cambiohombre, true)


var btn2 = document.getElementById('btn2'),
    contador2=0;

    function cambiomujer(){
        if(contador2==0){
            btn2.classList.add('genero-cambio');
            contador2=1;
        }else{
            btn2.classList.remove('genero-cambio');
            contador2=0;
        }
    }

    btn2.addEventListener('click',cambiomujer, true)

