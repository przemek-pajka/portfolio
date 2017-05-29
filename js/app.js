$(document).ready(function () {
    // Select all links with hashes // SMOOTH SCROLLING SCRIPT
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



    $('#fullpage').fullpage({
        autoScrolling: false,
        fitToSection: false
    });


    // Parallax mouse move
    $('.parallax').mousemove(function (e) {
        var x = -(e.pageX + this.offsetLeft) / 20;
        var y = -(e.pageY + this.offsetTop) / 20;
        $(this).css('background-position', x + 'px ' + y + 'px');
    });

  //$("#demo01").animatedModal();
  
  $(document).on('scroll',function()
{
  var lic = $(document).scrollTop();

if(lic>450){
$(".about-me-box .wp-1").addClass("animated fadeInRight");
$(".about-me-box .wp-2").addClass("animated fadeInLeft");	};

if(lic>1100){
$(".technology-container .wp-3").addClass("animated fadeInTop");
$(".technology-container .wp-4").addClass("animated fadeInTop");
$(".technology-container .wp-5").addClass("animated fadeInTop"); };

if(lic>1650){
$(".feature-3 .wp-5").addClass("animated fadeInRight");
$(".feature-3 .wp-6").addClass("animated fadeInLeft");	};	

});

});
