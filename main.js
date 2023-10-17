function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla');



while(contador < 9){
    
    const instrumento = listaDeTeclas[contador].onclick = function (){tocaSomPom;
        
        const tecla = listaDeTeclas[contador]};
}
const idAudio = '#som_${instrumento}';

tecla.onclick = function (){
tocaSom(idAudio);
};