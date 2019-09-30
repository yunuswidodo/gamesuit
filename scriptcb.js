function getPilihanComputer(){
const comp = Math.random();
if(comp < 0.34) return 'gajah'; 
if(comp >= 0.34 && comp < 0.67 ) return 'orang';
return 'semut';
}
//rule
function getHasil(comp, player){
if(player == comp)return 'seri';
if(player == 'gajah') return (comp=='orang')? 'MENANG': 'KALAH';
if(player == 'orang') return (comp == 'gajah')? 'KALAH' : 'MENANG';
if(player == 'semut') return (comp =='orang')? 'KALAH': 'MENANG';
} 

function putar(){
    const imgComputer = document.querySelector('.img-komputer');

    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0; //let 

    const waktuAwal = new Date().getTime();

        setInterval(function(){  //setInterval fungsi melakukan sesuatu berulang"
            if(new Date().getTime() - waktuAwal > 1000){
                clearInterval;
                return;
            }

            imgComputer.setAttribute('src', 'icon/' + gambar[i++] + '.jpg');
            if(i == gambar.length) i = 0;

        }, 100); //=0,1 detik
    }


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){ //forEach
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        // nunggu jalankan setelah waktuputar
        setTimeout(function()  {
            
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'icon/' + pilihanComputer + '.jpg'); //manipulation
            
            const info = document.querySelector('.info');
            info.innerHTML = hasil; //manipulation innerHTML ?
            
        }, 1000);

       
    });
    
});


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     //alert('ok')
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // console.log('comp :' + pilihanComputer);
//     // console.log('player : '+ pilihanPlayer);
//     // console.log('player : '+ hasil);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png'); //manipulation

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; //manipulation innerHTML ?
    

// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     //alert('ok')
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // console.log('comp :' + pilihanComputer);
//     // console.log('player : '+ pilihanPlayer);
//     // console.log('player : '+ hasil);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png'); //manipulation

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; //manipulation innerHTML ?
    

// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     //alert('ok')
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // console.log('comp :' + pilihanComputer);
//     // console.log('player : '+ pilihanPlayer);
//     // console.log('player : '+ hasil);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png'); //manipulation

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; //manipulation innerHTML ?
    

// });