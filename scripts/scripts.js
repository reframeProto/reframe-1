$(document).ready(function(){

  // Smooth Scrolling
  var scrollLink = $('.scroll');

  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - $('.header-container').outerHeight()
    }, 1500);
  });

  // Nav-Icon Animation
  $('#nav-icon').click(function(){
    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');
  });

  // Section Fade Outs
  $(document).on("scroll", function(){
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fade-section");

    for (var i = 0; i < tags.length; i++){
      var tag = tags[i];
      if ($(tag).position().top < pageBottom - 300){
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

  //Parallax 
  function parallax(){
    var wScroll = $(window).scrollTop();
    $('.showcase-outer').css('top',(wScroll * 0.04)+'em');
    $('.frame').css('top',(wScroll * 0.02)+'em');
    $('.hand').css('top',(wScroll * 0.033)+'em');
  }

  // Link Switching
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

  // Element Fade Outs
  function fadeOut(){
    
    $(".frame").css("opacity", 1 - $(window).scrollTop() / 400);
  }
  // Scroll Functions
  $(window).scroll(function(){
      parallax();
      linkSwitching();
      fadeOut();
  });

  // Modal Variables
  var modal1 = document.getElementById('kingsley-modal');
  var modal2 = document.getElementById('nicholas-modal');
  var btn1 = document.getElementById('kingsleyBio');
  var btn2 = document.getElementById('nicholasBio');
  var close1 = document.getElementsByClassName("close1")[0];
  var close2 = document.getElementsByClassName("close2")[0];

  // Modal Functions
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