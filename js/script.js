function enviarWhatsApp(){var a=document.getElementById("firstName").value,b=document.getElementById("lastName").value,c=document.getElementById("email").value,d=document.getElementById("phoneNumber").value,e=document.getElementById("message").value,f="Ol\xE1, meu nome \xE9 "+a+" "+b+". Meu email \xE9 "+c+" e meu n\xFAmero de telefone \xE9 "+d+". "+e;f=f.replace(/ /g,"%20");var g="https://api.whatsapp.com/send?phone=5511957303961&text="+f;window.open(g,"_blank")}function inicializarMapa(){var a={lat:-23.589921951293945,lng:-46.82489776611328},b=new google.maps.Map(document.getElementById("mapaOpenMall"),{center:a,zoom:15,gestureHandling:"auto"}),c=new google.maps.Marker({position:a,map:b,title:"Open Mall The Square"})}document.addEventListener("DOMContentLoaded",function(){var a=document.querySelector(".header");window.addEventListener("scroll",function(){50<window.scrollY?a.classList.add("active"):a.classList.remove("active"),document.addEventListener("DOMContentLoaded",function(){new Swiper(".swiper-container1",{slidesPerView:1,spaceBetween:0,loop:!0,pagination:{el:".swiper-pagination1",clickable:!0}})})})}),document.addEventListener("DOMContentLoaded",function(){new Swiper(".swiper-container1",{slidesPerView:1,spaceBetween:1,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination1",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}),document.addEventListener("DOMContentLoaded",function(){var a=new Swiper(".swiper-container2",{loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination2",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:1,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:20}},on:{slideChange:function(){var a=document.querySelector(".swiper-button-next");a.classList.remove("fixed-next-button")},slideNextTransitionEnd:function(){var a=document.querySelector(".swiper-button-next");a.classList.remove("fixed-next-button")},slideNextTransitionStart:function(){var a=document.querySelector(".swiper-button-next");a.classList.add("fixed-next-button")}}});a.params.loopedSlides=a.slides.length,a.loopDestroy(),a.loopCreate(),a.update()}),$(document).ready(function(){$("#menu").click(function(){$(this).toggleClass("fa-times"),$(".navbar").toggleClass("active")}),$(window).on("scroll load",function(){$("#menu").removeClass("fa-times"),$(".navbar").removeClass("active"),60<$(window).scrollTop()?$(".header").addClass("active"):$(".header").removeClass("active"),$("section").each(function(){let a=$(window).scrollTop(),b=$(this).height(),c=$(this).offset().top-200,d=$(this).attr("id");a>=c&&a<c+b&&($(".navbar a").removeClass("active"),$(".navbar").find(`[href="#${d}"]`).addClass("active"))})})});