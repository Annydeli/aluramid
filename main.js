function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while(contador < 9){
    
    const instrumento = listaDeTeclas[contador].onclick = function (){tocaSomPom;
        
        const tecla = listaDeTeclas[contador]};
}
    tecla.onclick = function (){
        tocaSom('#som_tecla_clap');
    }