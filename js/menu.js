export default function menu($){
    $ = $;

    // show / hide menu on smaller screens
    $('.menuBtn').click(function(){ showHideMenu($(this)); });

    function showHideMenu(menuBtn){
      let toggleText = $(menuBtn).html() === 'X' ? 'MENU ☰' : 'X';
      $(menuBtn).html(toggleText);

      $('.menuHolder').toggleClass('showMenu');
      $('.menuToggle').toggleClass('hideMenuToggle');
    }


    // toggle portfolio sub-menu
    $('.menu-item--portfolio').click(function(e){
      $('.sub-menu').toggleClass('show-sub-menu');
    })

    // hide portfolio sub-menu when rest of page is clicked
    $('body').click(function(e){

      // if menu is displayed, and event target is not the menu, hide the menu
      let subMenuIsOn = ($('.sub-menu').hasClass('show-sub-menu')) && (e.target.innerHTML != 'Portfolio');

      if(subMenuIsOn){
        $('.sub-menu').removeClass('show-sub-menu');
      }

    })

    // make sure menu has correct classes when window is resized
    window.addEventListener('resize', function(){
      if(window.matchMedia("(min-width: 640px)").matches){
        if($('.menuHolder').hasClass('showMenu')){
          $('.menuHolder').removeClass('showMenu')
          let toggleText = $('.menuBtn').html() === 'X' ? 'MENU ☰' : 'X';
          $('.menuBtn').html(toggleText);
        }

      }
    })


}
