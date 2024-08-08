// img list

// var prgraf = document.getElementById('text').textContent = 'sonammi';





var iW = 0; // var to cont the number 
var imges = []; // emtpy arry
var time = 8000;    // time of the img 
imges [0] = "1.png";
imges [1] = '2.png';    
imges [2] = '3.png';   
imges [3] = '4.png';   
imges [4] = '5.png';   
imges [5] = '6.png';   

//  funciton Images 
function chingeimge() {

        document.slider.src = imges[iW]; 
        if (iW < imges.length -1) {  // لو الاي اقل من عدد الصور داخل المصفوفة ناقص واحد 
            iW++;    // ذد قيمة الاي بواحد ولا قيمة الاي تساوي صفر 
        } else {
            iW=0;
        }
        setTimeout(chingeimge, time); // The function use to cont the time of the sider 

}

    window.onload =  chingeimge();









let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader, 3000);
// }

// window.onload = fadeOut;




