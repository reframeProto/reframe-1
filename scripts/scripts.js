$(document).ready(function(){

  // Smooth Scrolling
  var scrollLink = $('.scroll');

  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - $('.header-container').outerHeight()
    }, 1700);
  });

  // Nav-Icon Animation
  $('#nav-icon').click(function(){
    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');
  });




  $(window).scroll(function(){
    parallax();
    linkSwitching();
  });
  
  //Parallax 
  function parallax(){
    var wScroll = $(window).scrollTop();
    $('.showcase-outer').css('top',(wScroll * 0.04)+'em');
    //$('.frame').css('top',(wScroll * 0.02)+'em');
    $('.hand').css('top',(wScroll * 0.033)+'em');
    
  }
  // Link switching
  function linkSwitching(){
    var scrollBarLocation = $(this).scrollTop();
    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top -140;
      if (sectionOffset <= scrollBarLocation){
        $(this).parent().addClass('activelink');
        $(this).parent().siblings().removeClass('activelink');
      }
    });
  }



  // Customer Logo Carousel
  $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 950,
        settings: {
          slidesToShow: 2
        }
    },{
      breakpoint: 750,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  // Modal variables
  var modal1 = document.getElementById('kingsley-modal');

  var modal2 = document.getElementById('nicholas-modal');

  var btn1 = document.getElementById('kingsleyBio');

  var btn2 = document.getElementById('nicholasBio');

  var close1 = document.getElementsByClassName("close1")[0];

  var close2 = document.getElementsByClassName("close2")[0];
  // Modal functions
  btn1.onclick = function(){
    modal1.style.display = "block";
  };
  btn2.onclick = function(){
    modal2.style.display = "block";
  };
  close1.onclick = function(){
    modal1.style.display = "none";
  };
  close2.onclick = function(){
    modal2.style.display = "none";
  };
  window.onclick =  function(event){
    if (event.target == modal1){
      modal1.style.display = "none";

    } else if (event.target == modal2){
      modal2.style.display = "none";
    }
  };
});