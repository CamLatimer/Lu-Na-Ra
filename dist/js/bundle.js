(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _imgGallery = require('./imgGallery');

var _imgGallery2 = _interopRequireDefault(_imgGallery);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pass in $ for standard syntax
jQuery(document).ready(function ($) {

  (0, _imgGallery2.default)($);
  (0, _menu2.default)($);
});

},{"./imgGallery":2,"./menu":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imgGallery;
function imgGallery($) {
  $ = $; // so you don't have to write 'jQuery'


  // image galleries
  // lightbox and progress bar

  /*
    progress bar
    shows the progress of images loaded,
    shows the percentage of images loaded in the length of the progress bar
    does so by calculating the % of images loaded, then use the percentage as width of pg bar, then adds percentage of images loaded to pg bar width
  */

  var galleryImgs = $('.gallery__img img');
  var numGalleryImgs = galleryImgs.length;
  var loadedImgs = 0;

  function loadProgress() {
    $('.progressBar__progress').css('width', loadedImgs / numGalleryImgs * 100 + '%');
    if (loadedImgs === numGalleryImgs) {
      $('.progressBar').addClass('hideProgressBar');
    }
  }

  /*
  lazy load gallery images and run progress bar...
  image tags start out with data-src attributes that don't have images actually loaded.
  after the rest of the document is loaded, the tags get the real src attribute added
  and the data-src ones removed. They start out with 0 opacity, once they are fully loaded,
  full opacity is added with a css transition
  */

  function lazyLoad() {
    galleryImgs.each(function () {
      $(this).attr('src', $(this).attr('data-src'));

      $(this).on('load', function () {
        $(this).removeAttr('data-src');
        $(this).addClass('imgLoaded');
        $(this).css('opacity', '1');
        loadedImgs++;
        loadProgress();
      });
    });
  }

  // light box
  function lightBox() {
    // toggle lightbox in galleries
    galleryImgs.click(function () {
      console.log('hello');
      var lightboxImgUrl = $(this).attr('src');
      $('.lightbox img').attr('src', lightboxImgUrl);
      $('.lightbox').addClass('showLightbox');
      setTimeout(function () {
        $('.lightbox img').addClass('showImg');
      }, 50);
    });

    $('.lightbox__closeBtn').click(function () {
      $('.lightbox img').removeClass('showImg');
      $('.lightbox img').attr('src', '');
      $('.lightbox').removeClass('showLightbox');
    });
  }

  lazyLoad();
  lightBox();
}

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menu;
function menu($) {
  $ = $;

  // show / hide menu on smaller screens
  $('.menuBtn').click(function () {

    var toggleText = $(this).html() === 'X' ? 'MENU ☰' : 'X';
    $(this).html(toggleText);

    $('.menuHolder').toggleClass('showMenu');
    $('.menuToggle').toggleClass('hideMenuToggle');
  });

  // toggle portfolio sub-menu
  $('.menu-item--portfolio').click(function (e) {
    $('.sub-menu').toggleClass('show-sub-menu');
  });

  // hide portfolio sub-menu when rest of page is clicked
  $('body').click(function (e) {

    // if menu is displayed, and event target is not the menu, hide the menu
    var subMenuIsOn = $('.sub-menu').hasClass('show-sub-menu') && e.target.innerHTML != 'Portfolio';

    if (subMenuIsOn) {
      $('.sub-menu').removeClass('show-sub-menu');
    }
  });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9lbnRyeS5qcyIsImpzL2ltZ0dhbGxlcnkuanMiLCJqcy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLE9BQU8sUUFBUCxFQUFpQixLQUFqQixDQUF1QixVQUFTLENBQVQsRUFBVzs7QUFFaEMsNEJBQVcsQ0FBWDtBQUNBLHNCQUFLLENBQUw7QUFHRCxDQU5EOzs7Ozs7OztrQkNKd0IsVTtBQUFULFNBQVMsVUFBVCxDQUFvQixDQUFwQixFQUFzQjtBQUNuQyxNQUFJLENBQUosQ0FEbUMsQ0FDNUI7OztBQUdQO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPRSxNQUFNLGNBQWMsRUFBRSxtQkFBRixDQUFwQjtBQUNBLE1BQU0saUJBQWlCLFlBQVksTUFBbkM7QUFDQSxNQUFJLGFBQWEsQ0FBakI7O0FBRUEsV0FBUyxZQUFULEdBQXVCO0FBQ3JCLE1BQUUsd0JBQUYsRUFBNEIsR0FBNUIsQ0FBZ0MsT0FBaEMsRUFBNkMsYUFBYSxjQUFkLEdBQWdDLEdBQTVFO0FBQ0EsUUFBRyxlQUFlLGNBQWxCLEVBQWlDO0FBQy9CLFFBQUUsY0FBRixFQUFrQixRQUFsQixDQUEyQixpQkFBM0I7QUFDRDtBQUNGOztBQUVEOzs7Ozs7OztBQVFBLFdBQVMsUUFBVCxHQUFtQjtBQUNqQixnQkFBWSxJQUFaLENBQWlCLFlBQVU7QUFDekIsUUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLEtBQWIsRUFBb0IsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFVBQWIsQ0FBcEI7O0FBRUEsUUFBRSxJQUFGLEVBQVEsRUFBUixDQUFXLE1BQVgsRUFBbUIsWUFBVTtBQUMzQixVQUFFLElBQUYsRUFBUSxVQUFSLENBQW1CLFVBQW5CO0FBQ0EsVUFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixXQUFqQjtBQUNBLFVBQUUsSUFBRixFQUFRLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEdBQXZCO0FBQ0E7QUFDQTtBQUNELE9BTkQ7QUFRRCxLQVhEO0FBWUQ7O0FBR0Q7QUFDQSxXQUFTLFFBQVQsR0FBbUI7QUFDakI7QUFDQSxnQkFBWSxLQUFaLENBQWtCLFlBQVU7QUFDMUIsY0FBUSxHQUFSLENBQVksT0FBWjtBQUNBLFVBQU0saUJBQWlCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxLQUFiLENBQXZCO0FBQ0EsUUFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLEtBQXhCLEVBQStCLGNBQS9CO0FBQ0EsUUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QixjQUF4QjtBQUNBLGlCQUFXLFlBQVU7QUFDbkIsVUFBRSxlQUFGLEVBQW1CLFFBQW5CLENBQTRCLFNBQTVCO0FBQ0QsT0FGRCxFQUVFLEVBRkY7QUFHRCxLQVJEOztBQVVBLE1BQUUscUJBQUYsRUFBeUIsS0FBekIsQ0FBK0IsWUFBVTtBQUNuQyxRQUFFLGVBQUYsRUFBbUIsV0FBbkIsQ0FBK0IsU0FBL0I7QUFDQSxRQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsS0FBeEIsRUFBK0IsRUFBL0I7QUFDQSxRQUFFLFdBQUYsRUFBZSxXQUFmLENBQTJCLGNBQTNCO0FBQ0wsS0FKRDtBQUtEOztBQUVEO0FBQ0E7QUFFSDs7Ozs7Ozs7a0JDeEV1QixJO0FBQVQsU0FBUyxJQUFULENBQWMsQ0FBZCxFQUFnQjtBQUMzQixNQUFJLENBQUo7O0FBRUE7QUFDQSxJQUFFLFVBQUYsRUFBYyxLQUFkLENBQW9CLFlBQVU7O0FBRTVCLFFBQUksYUFBYSxFQUFFLElBQUYsRUFBUSxJQUFSLE9BQW1CLEdBQW5CLEdBQXlCLFFBQXpCLEdBQW9DLEdBQXJEO0FBQ0EsTUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFVBQWI7O0FBRUEsTUFBRSxhQUFGLEVBQWlCLFdBQWpCLENBQTZCLFVBQTdCO0FBQ0EsTUFBRSxhQUFGLEVBQWlCLFdBQWpCLENBQTZCLGdCQUE3QjtBQUVELEdBUkQ7O0FBVUE7QUFDQSxJQUFFLHVCQUFGLEVBQTJCLEtBQTNCLENBQWlDLFVBQVMsQ0FBVCxFQUFXO0FBQzFDLE1BQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsZUFBM0I7QUFDRCxHQUZEOztBQUlBO0FBQ0EsSUFBRSxNQUFGLEVBQVUsS0FBVixDQUFnQixVQUFTLENBQVQsRUFBVzs7QUFFekI7QUFDQSxRQUFJLGNBQWUsRUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QixlQUF4QixDQUFELElBQStDLEVBQUUsTUFBRixDQUFTLFNBQVQsSUFBc0IsV0FBdkY7O0FBRUEsUUFBRyxXQUFILEVBQWU7QUFDYixRQUFFLFdBQUYsRUFBZSxXQUFmLENBQTJCLGVBQTNCO0FBQ0Q7QUFFRixHQVREO0FBWUgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGltZ0dhbGxlcnkgZnJvbSAnLi9pbWdHYWxsZXJ5JztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5cbi8vIHBhc3MgaW4gJCBmb3Igc3RhbmRhcmQgc3ludGF4XG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpe1xuXG4gIGltZ0dhbGxlcnkoJCk7XG4gIG1lbnUoJCk7XG5cblxufSlcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltZ0dhbGxlcnkoJCl7XG4gICQgPSAkOyAvLyBzbyB5b3UgZG9uJ3QgaGF2ZSB0byB3cml0ZSAnalF1ZXJ5J1xuXG5cbiAgLy8gaW1hZ2UgZ2FsbGVyaWVzXG4gIC8vIGxpZ2h0Ym94IGFuZCBwcm9ncmVzcyBiYXJcblxuICAvKlxuICAgIHByb2dyZXNzIGJhclxuICAgIHNob3dzIHRoZSBwcm9ncmVzcyBvZiBpbWFnZXMgbG9hZGVkLFxuICAgIHNob3dzIHRoZSBwZXJjZW50YWdlIG9mIGltYWdlcyBsb2FkZWQgaW4gdGhlIGxlbmd0aCBvZiB0aGUgcHJvZ3Jlc3MgYmFyXG4gICAgZG9lcyBzbyBieSBjYWxjdWxhdGluZyB0aGUgJSBvZiBpbWFnZXMgbG9hZGVkLCB0aGVuIHVzZSB0aGUgcGVyY2VudGFnZSBhcyB3aWR0aCBvZiBwZyBiYXIsIHRoZW4gYWRkcyBwZXJjZW50YWdlIG9mIGltYWdlcyBsb2FkZWQgdG8gcGcgYmFyIHdpZHRoXG4gICovXG5cbiAgICBjb25zdCBnYWxsZXJ5SW1ncyA9ICQoJy5nYWxsZXJ5X19pbWcgaW1nJyk7XG4gICAgY29uc3QgbnVtR2FsbGVyeUltZ3MgPSBnYWxsZXJ5SW1ncy5sZW5ndGg7XG4gICAgbGV0IGxvYWRlZEltZ3MgPSAwO1xuXG4gICAgZnVuY3Rpb24gbG9hZFByb2dyZXNzKCl7XG4gICAgICAkKCcucHJvZ3Jlc3NCYXJfX3Byb2dyZXNzJykuY3NzKCd3aWR0aCcsIGAkeyhsb2FkZWRJbWdzIC8gbnVtR2FsbGVyeUltZ3MpICogMTAwfSVgKTtcbiAgICAgIGlmKGxvYWRlZEltZ3MgPT09IG51bUdhbGxlcnlJbWdzKXtcbiAgICAgICAgJCgnLnByb2dyZXNzQmFyJykuYWRkQ2xhc3MoJ2hpZGVQcm9ncmVzc0JhcicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgbGF6eSBsb2FkIGdhbGxlcnkgaW1hZ2VzIGFuZCBydW4gcHJvZ3Jlc3MgYmFyLi4uXG4gICAgaW1hZ2UgdGFncyBzdGFydCBvdXQgd2l0aCBkYXRhLXNyYyBhdHRyaWJ1dGVzIHRoYXQgZG9uJ3QgaGF2ZSBpbWFnZXMgYWN0dWFsbHkgbG9hZGVkLlxuICAgIGFmdGVyIHRoZSByZXN0IG9mIHRoZSBkb2N1bWVudCBpcyBsb2FkZWQsIHRoZSB0YWdzIGdldCB0aGUgcmVhbCBzcmMgYXR0cmlidXRlIGFkZGVkXG4gICAgYW5kIHRoZSBkYXRhLXNyYyBvbmVzIHJlbW92ZWQuIFRoZXkgc3RhcnQgb3V0IHdpdGggMCBvcGFjaXR5LCBvbmNlIHRoZXkgYXJlIGZ1bGx5IGxvYWRlZCxcbiAgICBmdWxsIG9wYWNpdHkgaXMgYWRkZWQgd2l0aCBhIGNzcyB0cmFuc2l0aW9uXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGxhenlMb2FkKCl7XG4gICAgICBnYWxsZXJ5SW1ncy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuYXR0cignc3JjJywgJCh0aGlzKS5hdHRyKCdkYXRhLXNyYycpKTtcblxuICAgICAgICAkKHRoaXMpLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ2RhdGEtc3JjJyk7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW1nTG9hZGVkJyk7XG4gICAgICAgICAgJCh0aGlzKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgIGxvYWRlZEltZ3MrKztcbiAgICAgICAgICBsb2FkUHJvZ3Jlc3MoKTtcbiAgICAgICAgfSlcblxuICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8vIGxpZ2h0IGJveFxuICAgIGZ1bmN0aW9uIGxpZ2h0Qm94KCl7XG4gICAgICAvLyB0b2dnbGUgbGlnaHRib3ggaW4gZ2FsbGVyaWVzXG4gICAgICBnYWxsZXJ5SW1ncy5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgICAgICAgY29uc3QgbGlnaHRib3hJbWdVcmwgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuICAgICAgICAkKCcubGlnaHRib3ggaW1nJykuYXR0cignc3JjJywgbGlnaHRib3hJbWdVcmwpO1xuICAgICAgICAkKCcubGlnaHRib3gnKS5hZGRDbGFzcygnc2hvd0xpZ2h0Ym94Jyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKCcubGlnaHRib3ggaW1nJykuYWRkQ2xhc3MoJ3Nob3dJbWcnKTtcbiAgICAgICAgfSw1MClcbiAgICAgIH0pO1xuXG4gICAgICAkKCcubGlnaHRib3hfX2Nsb3NlQnRuJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJy5saWdodGJveCBpbWcnKS5yZW1vdmVDbGFzcygnc2hvd0ltZycpO1xuICAgICAgICAgICAgJCgnLmxpZ2h0Ym94IGltZycpLmF0dHIoJ3NyYycsICcnKTtcbiAgICAgICAgICAgICQoJy5saWdodGJveCcpLnJlbW92ZUNsYXNzKCdzaG93TGlnaHRib3gnKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbGF6eUxvYWQoKTtcbiAgICBsaWdodEJveCgpO1xuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCQpe1xuICAgICQgPSAkO1xuXG4gICAgLy8gc2hvdyAvIGhpZGUgbWVudSBvbiBzbWFsbGVyIHNjcmVlbnNcbiAgICAkKCcubWVudUJ0bicpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cbiAgICAgIGxldCB0b2dnbGVUZXh0ID0gJCh0aGlzKS5odG1sKCkgPT09ICdYJyA/ICdNRU5VIOKYsCcgOiAnWCc7XG4gICAgICAkKHRoaXMpLmh0bWwodG9nZ2xlVGV4dCk7XG5cbiAgICAgICQoJy5tZW51SG9sZGVyJykudG9nZ2xlQ2xhc3MoJ3Nob3dNZW51Jyk7XG4gICAgICAkKCcubWVudVRvZ2dsZScpLnRvZ2dsZUNsYXNzKCdoaWRlTWVudVRvZ2dsZScpO1xuXG4gICAgfSk7XG5cbiAgICAvLyB0b2dnbGUgcG9ydGZvbGlvIHN1Yi1tZW51XG4gICAgJCgnLm1lbnUtaXRlbS0tcG9ydGZvbGlvJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAkKCcuc3ViLW1lbnUnKS50b2dnbGVDbGFzcygnc2hvdy1zdWItbWVudScpO1xuICAgIH0pXG5cbiAgICAvLyBoaWRlIHBvcnRmb2xpbyBzdWItbWVudSB3aGVuIHJlc3Qgb2YgcGFnZSBpcyBjbGlja2VkXG4gICAgJCgnYm9keScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXG4gICAgICAvLyBpZiBtZW51IGlzIGRpc3BsYXllZCwgYW5kIGV2ZW50IHRhcmdldCBpcyBub3QgdGhlIG1lbnUsIGhpZGUgdGhlIG1lbnVcbiAgICAgIGxldCBzdWJNZW51SXNPbiA9ICgkKCcuc3ViLW1lbnUnKS5oYXNDbGFzcygnc2hvdy1zdWItbWVudScpKSAmJiAoZS50YXJnZXQuaW5uZXJIVE1MICE9ICdQb3J0Zm9saW8nKTtcblxuICAgICAgaWYoc3ViTWVudUlzT24pe1xuICAgICAgICAkKCcuc3ViLW1lbnUnKS5yZW1vdmVDbGFzcygnc2hvdy1zdWItbWVudScpO1xuICAgICAgfVxuXG4gICAgfSlcblxuXG59XG4iXX0=
