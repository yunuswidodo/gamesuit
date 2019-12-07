function pilihanPilComputer(){
    const comp = Math.random();
    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player){
    if (player == comp) return 'SERI';
    if (player == 'gajah') return (comp == 'orang') ?'MENANG' : 'KALAH'; //jika plyr memilih gajah dan computer memilih orang makan MENANG 
    if (player == 'orang') return (comp == 'gajah') ?'KALAH' : 'MENANG';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG'; 

}

//penambahan

//function putar
function putar(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar  =['gajah','semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime(); //untuk mendapat waktu saat ini (click)

    setInterval(function(){ //setIntervar melakukan fungsi berulang: salama waktu tertentu
        if(new Date().getTime() - waktuMulai > 1000 ){
            clearInterval;
            return;
        } 
        imgComputer.setAttribute('src', 'icon/' + gambar[i++] + '.jpg');
        if( i == gambar.length) i = 0;
    },100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){ //pil mengambil setiap image
    pil.addEventListener('click', function(){
        
    const pilihanComputer = pilihanPilComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function(){
        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', 'icon/' + pilihanComputer + '.jpg');
    
        const info = document.querySelector('.info');
        info.innerHTML = hasil
        

    },1000);

 
    });

});








// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     //alert('ok');
//     const pilihanComputer = pilihanPilComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'icon/' + pilihanComputer + '.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;


// });