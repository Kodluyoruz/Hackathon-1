var dizi = [
  {
    name: "LAMBDA",
    resim: "../img/slide1.jpg",
    title: "Belkide Biz Güzel Baktığımız İçin Güzel İnsanlar"
  },

  {
    name: "LAMBDA",
    resim: "../img/slide2.jpg",
    title: "Gel Berberce"
  },

  {
    name: "LAMBDA",
    resim: "../img/slide3.jpg",
    title: "O senin Gözlerinin Güzelliği"
  }
];

//slayta true ve zamnını belirleyen 
var sure = {
  random: true,
  saniye: '10000'

}

//dizin uzunlugu
var slayatsayisi = dizi.length;

//sag ve sol oklarına ulastık
var btnsag = document.querySelector('#sag');
var btnsol = document.querySelector('#sol');

//slaytın baslangıc degerini sıfır belirledik
var index = 0;


//random sayı ürettik 
random(sure);
function random(a) {

  setInterval(function () {
    var prev;
    if (a.random) {
      do {
        index = Math.floor(Math.random() * slayatsayisi);
      } while (index == prev)
      prev = index;
    }
    //burda prev diye bir degişken tanımladık prev esitse indexse yani uretilen sayi o zmn tekrar uret buda aynı  foto yu gostermemsini onluyor

    //üretilen sayıyı show() funcisyonuna gonderdik
    show(index);
    console.log(index);

    //sag buton durdurma 
    btnsag.addEventListener('mouseenter', function () {
      show(sure.random = false);
    });

    btnsag.addEventListener('mouseleave', function () {
      show(sure.random = true);
    });


    //sol buton durdurma 
    btnsol.addEventListener('mouseenter', function () {
      show(sure.random = false);
    });

    btnsol.addEventListener('mouseleave', function () {
      show(sure.random = true);
    });

  }, sure.saniye);
}



//sol buton tıklandıgında bir azlat yani geriye git
btnsol.addEventListener('click', function () {
  index--;
  show(index);
  console.log(`eksi: ${index}`);
});

//sag buton tıklandıgında bir artır yani ileri git
btnsag.addEventListener('click', function () {
  index++;
  show(index);

  console.log(`artı: ${index}`);
});


//show() funcsiyonunu cahırdık sayfa yuklenince
show(index);

//show() funcsiyonu gel index no ya gore karsımıza bir resim cıkarıyor tabi süzgecten gecirdikten sonra
function show(e) {

  index = e;

  if (e < 0) {
    index = slayatsayisi - 1;
  }

  if (e >= slayatsayisi) {
    index = 0;
  }

  document.querySelector('.card-img-top').setAttribute('src', dizi[index].resim);
  document.querySelector('.card-title').textContent = dizi[index].name;
  document.querySelector('.card-text').textContent = dizi[index].title;
}
