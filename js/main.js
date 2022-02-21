$(document).ready(function(){
  let toggle = document.getElementsByClassName('toggle')[0];
  let listul = document.getElementsByClassName('listul')[0];
  let scrollElement = document.querySelector('.btn-scroll');

  toggle.addEventListener("click" , () =>{
      listul.classList.toggle("active")
    });

  window.onscroll = function (){
    if(this.scrollY >= 500){
      scrollElement.classList.add('show');
    }else{
      scrollElement.classList.remove('show');
    }
  }
  scrollElement.onclick = function(){
    window.scrollTo({top:0, behavior:'smooth'});
  }

  $('.lds-roller').fadeOut(3000,function(){
    $('.load').fadeOut(2000);
  });
});