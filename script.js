var hesapla= document.querySelector('.hesapla');
var dizi= document.querySelector('.sayilar');
var sonuc= document.querySelector('.sonuc');

hesapla.addEventListener('click',function(){

   function ortalama(item) {
       var ayrac= item.split(" ")
        var total=0;
        ayrac.forEach(item => {
            cevir = Number(item)
              total+=cevir;
        });

        return total/ayrac.length;

    } 

    sonuc.style.display="block";
    sonuc.innerHTML=`
    Verilen dizinin ortalaması: ${ortalama(dizi.value)} 
    `
})
