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
// import LL from 'vanilla-lazyload';

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

  // const galleryImgs = $('.gallery__img img');
  var galleryImgs = $('img[data-src]');
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

    // expiremented with a lazy load library, wanted to check out loading images
    // as elements are scrolled into view...
    // $('img:not([src])').css({
    //   // 'visibility': 'hidden'
    // })
    //
    // const LazyLoad = new LL({
    //   data_src: 'src',
    //   // threshold: 600,
    //   callback_load: function(img){
    //
    //     // $(img).addClass('imgLoaded');
    //     $(img).css({
    //       'opacity': '1',
    //       // 'visibility': 'visible'
    //     });
    //
    //     loadedImgs++;
    //     loadProgress();
    //   }
    // });
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
    showHideMenu($(this));
  });

  function showHideMenu(menuBtn) {
    var toggleText = $(menuBtn).html() === 'X' ? 'MENU ☰' : 'X';
    $(menuBtn).html(toggleText);

    $('.menuHolder').toggleClass('showMenu');
    $('.menuToggle').toggleClass('hideMenuToggle');
  }

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

  // make sure menu has correct classes when window is resized
  window.addEventListener('resize', function () {
    if (window.matchMedia("(min-width: 640px)").matches) {
      if ($('.menuHolder').hasClass('showMenu')) {
        $('.menuHolder').removeClass('showMenu');
        var toggleText = $('.menuBtn').html() === 'X' ? 'MENU ☰' : 'X';
        $('.menuBtn').html(toggleText);
      }
    }
  });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9lbnRyeS5qcyIsImpzL2ltZ0dhbGxlcnkuanMiLCJqcy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLE9BQU8sUUFBUCxFQUFpQixLQUFqQixDQUF1QixVQUFTLENBQVQsRUFBVzs7QUFFaEMsNEJBQVcsQ0FBWDtBQUNBLHNCQUFLLENBQUw7QUFHRCxDQU5EOzs7Ozs7OztrQkNGd0IsVTtBQUZ4Qjs7QUFFZSxTQUFTLFVBQVQsQ0FBb0IsQ0FBcEIsRUFBc0I7QUFDbkMsTUFBSSxDQUFKLENBRG1DLENBQzVCOztBQUVQO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPRTtBQUNBLE1BQU0sY0FBYyxFQUFFLGVBQUYsQ0FBcEI7QUFDQSxNQUFNLGlCQUFpQixZQUFZLE1BQW5DO0FBQ0EsTUFBSSxhQUFhLENBQWpCOztBQUVBLFdBQVMsWUFBVCxHQUF1QjtBQUNyQixNQUFFLHdCQUFGLEVBQTRCLEdBQTVCLENBQWdDLE9BQWhDLEVBQTZDLGFBQWEsY0FBZCxHQUFnQyxHQUE1RTtBQUNBLFFBQUcsZUFBZSxjQUFsQixFQUFpQztBQUMvQixRQUFFLGNBQUYsRUFBa0IsUUFBbEIsQ0FBMkIsaUJBQTNCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7QUFRQSxXQUFTLFFBQVQsR0FBbUI7QUFDakIsZ0JBQVksSUFBWixDQUFpQixZQUFVO0FBQ3pCLFFBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxLQUFiLEVBQW9CLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxVQUFiLENBQXBCOztBQUVBLFFBQUUsSUFBRixFQUFRLEVBQVIsQ0FBVyxNQUFYLEVBQW1CLFlBQVU7QUFDM0IsVUFBRSxJQUFGLEVBQVEsVUFBUixDQUFtQixVQUFuQjtBQUNBLFVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsV0FBakI7QUFDQSxVQUFFLElBQUYsRUFBUSxHQUFSLENBQVksU0FBWixFQUF1QixHQUF2QjtBQUNBO0FBQ0E7QUFDRCxPQU5EO0FBUUQsS0FYRDs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRDs7QUFHRDtBQUNBLFdBQVMsUUFBVCxHQUFtQjtBQUNqQjtBQUNBLGdCQUFZLEtBQVosQ0FBa0IsWUFBVTtBQUMxQixjQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsVUFBTSxpQkFBaUIsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLEtBQWIsQ0FBdkI7QUFDQSxRQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsS0FBeEIsRUFBK0IsY0FBL0I7QUFDQSxRQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCLGNBQXhCO0FBQ0EsaUJBQVcsWUFBVTtBQUNuQixVQUFFLGVBQUYsRUFBbUIsUUFBbkIsQ0FBNEIsU0FBNUI7QUFDRCxPQUZELEVBRUUsRUFGRjtBQUdELEtBUkQ7O0FBVUEsTUFBRSxxQkFBRixFQUF5QixLQUF6QixDQUErQixZQUFVO0FBQ25DLFFBQUUsZUFBRixFQUFtQixXQUFuQixDQUErQixTQUEvQjtBQUNBLFFBQUUsZUFBRixFQUFtQixJQUFuQixDQUF3QixLQUF4QixFQUErQixFQUEvQjtBQUNBLFFBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsY0FBM0I7QUFDTCxLQUpEO0FBS0Q7O0FBRUQ7QUFDQTtBQUVIOzs7Ozs7OztrQkNqR3VCLEk7QUFBVCxTQUFTLElBQVQsQ0FBYyxDQUFkLEVBQWdCO0FBQzNCLE1BQUksQ0FBSjs7QUFFQTtBQUNBLElBQUUsVUFBRixFQUFjLEtBQWQsQ0FBb0IsWUFBVTtBQUFFLGlCQUFhLEVBQUUsSUFBRixDQUFiO0FBQXdCLEdBQXhEOztBQUVBLFdBQVMsWUFBVCxDQUFzQixPQUF0QixFQUE4QjtBQUM1QixRQUFJLGFBQWEsRUFBRSxPQUFGLEVBQVcsSUFBWCxPQUFzQixHQUF0QixHQUE0QixRQUE1QixHQUF1QyxHQUF4RDtBQUNBLE1BQUUsT0FBRixFQUFXLElBQVgsQ0FBZ0IsVUFBaEI7O0FBRUEsTUFBRSxhQUFGLEVBQWlCLFdBQWpCLENBQTZCLFVBQTdCO0FBQ0EsTUFBRSxhQUFGLEVBQWlCLFdBQWpCLENBQTZCLGdCQUE3QjtBQUNEOztBQUdEO0FBQ0EsSUFBRSx1QkFBRixFQUEyQixLQUEzQixDQUFpQyxVQUFTLENBQVQsRUFBVztBQUMxQyxNQUFFLFdBQUYsRUFBZSxXQUFmLENBQTJCLGVBQTNCO0FBQ0QsR0FGRDs7QUFJQTtBQUNBLElBQUUsTUFBRixFQUFVLEtBQVYsQ0FBZ0IsVUFBUyxDQUFULEVBQVc7O0FBRXpCO0FBQ0EsUUFBSSxjQUFlLEVBQUUsV0FBRixFQUFlLFFBQWYsQ0FBd0IsZUFBeEIsQ0FBRCxJQUErQyxFQUFFLE1BQUYsQ0FBUyxTQUFULElBQXNCLFdBQXZGOztBQUVBLFFBQUcsV0FBSCxFQUFlO0FBQ2IsUUFBRSxXQUFGLEVBQWUsV0FBZixDQUEyQixlQUEzQjtBQUNEO0FBRUYsR0FURDs7QUFXQTtBQUNBLFNBQU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVTtBQUMxQyxRQUFHLE9BQU8sVUFBUCxDQUFrQixvQkFBbEIsRUFBd0MsT0FBM0MsRUFBbUQ7QUFDakQsVUFBRyxFQUFFLGFBQUYsRUFBaUIsUUFBakIsQ0FBMEIsVUFBMUIsQ0FBSCxFQUF5QztBQUN2QyxVQUFFLGFBQUYsRUFBaUIsV0FBakIsQ0FBNkIsVUFBN0I7QUFDQSxZQUFJLGFBQWEsRUFBRSxVQUFGLEVBQWMsSUFBZCxPQUF5QixHQUF6QixHQUErQixRQUEvQixHQUEwQyxHQUEzRDtBQUNBLFVBQUUsVUFBRixFQUFjLElBQWQsQ0FBbUIsVUFBbkI7QUFDRDtBQUVGO0FBQ0YsR0FURDtBQVlIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBpbWdHYWxsZXJ5IGZyb20gJy4vaW1nR2FsbGVyeSc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuXG4vLyBwYXNzIGluICQgZm9yIHN0YW5kYXJkIHN5bnRheFxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKXtcblxuICBpbWdHYWxsZXJ5KCQpO1xuICBtZW51KCQpO1xuXG5cbn0pXG4iLCIvLyBpbXBvcnQgTEwgZnJvbSAndmFuaWxsYS1sYXp5bG9hZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltZ0dhbGxlcnkoJCl7XG4gICQgPSAkOyAvLyBzbyB5b3UgZG9uJ3QgaGF2ZSB0byB3cml0ZSAnalF1ZXJ5J1xuXG4gIC8vIGltYWdlIGdhbGxlcmllc1xuICAvLyBsaWdodGJveCBhbmQgcHJvZ3Jlc3MgYmFyXG5cbiAgLypcbiAgICBwcm9ncmVzcyBiYXJcbiAgICBzaG93cyB0aGUgcHJvZ3Jlc3Mgb2YgaW1hZ2VzIGxvYWRlZCxcbiAgICBzaG93cyB0aGUgcGVyY2VudGFnZSBvZiBpbWFnZXMgbG9hZGVkIGluIHRoZSBsZW5ndGggb2YgdGhlIHByb2dyZXNzIGJhclxuICAgIGRvZXMgc28gYnkgY2FsY3VsYXRpbmcgdGhlICUgb2YgaW1hZ2VzIGxvYWRlZCwgdGhlbiB1c2UgdGhlIHBlcmNlbnRhZ2UgYXMgd2lkdGggb2YgcGcgYmFyLCB0aGVuIGFkZHMgcGVyY2VudGFnZSBvZiBpbWFnZXMgbG9hZGVkIHRvIHBnIGJhciB3aWR0aFxuICAqL1xuXG4gICAgLy8gY29uc3QgZ2FsbGVyeUltZ3MgPSAkKCcuZ2FsbGVyeV9faW1nIGltZycpO1xuICAgIGNvbnN0IGdhbGxlcnlJbWdzID0gJCgnaW1nW2RhdGEtc3JjXScpO1xuICAgIGNvbnN0IG51bUdhbGxlcnlJbWdzID0gZ2FsbGVyeUltZ3MubGVuZ3RoO1xuICAgIGxldCBsb2FkZWRJbWdzID0gMDtcblxuICAgIGZ1bmN0aW9uIGxvYWRQcm9ncmVzcygpe1xuICAgICAgJCgnLnByb2dyZXNzQmFyX19wcm9ncmVzcycpLmNzcygnd2lkdGgnLCBgJHsobG9hZGVkSW1ncyAvIG51bUdhbGxlcnlJbWdzKSAqIDEwMH0lYCk7XG4gICAgICBpZihsb2FkZWRJbWdzID09PSBudW1HYWxsZXJ5SW1ncyl7XG4gICAgICAgICQoJy5wcm9ncmVzc0JhcicpLmFkZENsYXNzKCdoaWRlUHJvZ3Jlc3NCYXInKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgIGxhenkgbG9hZCBnYWxsZXJ5IGltYWdlcyBhbmQgcnVuIHByb2dyZXNzIGJhci4uLlxuICAgIGltYWdlIHRhZ3Mgc3RhcnQgb3V0IHdpdGggZGF0YS1zcmMgYXR0cmlidXRlcyB0aGF0IGRvbid0IGhhdmUgaW1hZ2VzIGFjdHVhbGx5IGxvYWRlZC5cbiAgICBhZnRlciB0aGUgcmVzdCBvZiB0aGUgZG9jdW1lbnQgaXMgbG9hZGVkLCB0aGUgdGFncyBnZXQgdGhlIHJlYWwgc3JjIGF0dHJpYnV0ZSBhZGRlZFxuICAgIGFuZCB0aGUgZGF0YS1zcmMgb25lcyByZW1vdmVkLiBUaGV5IHN0YXJ0IG91dCB3aXRoIDAgb3BhY2l0eSwgb25jZSB0aGV5IGFyZSBmdWxseSBsb2FkZWQsXG4gICAgZnVsbCBvcGFjaXR5IGlzIGFkZGVkIHdpdGggYSBjc3MgdHJhbnNpdGlvblxuICAgICovXG5cbiAgICBmdW5jdGlvbiBsYXp5TG9hZCgpe1xuICAgICAgZ2FsbGVyeUltZ3MuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsICQodGhpcykuYXR0cignZGF0YS1zcmMnKSk7XG5cbiAgICAgICAgJCh0aGlzKS5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXNyYycpO1xuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2ltZ0xvYWRlZCcpO1xuICAgICAgICAgICQodGhpcykuY3NzKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICBsb2FkZWRJbWdzKys7XG4gICAgICAgICAgbG9hZFByb2dyZXNzKCk7XG4gICAgICAgIH0pXG5cbiAgICAgIH0pXG5cbiAgICAgIC8vIGV4cGlyZW1lbnRlZCB3aXRoIGEgbGF6eSBsb2FkIGxpYnJhcnksIHdhbnRlZCB0byBjaGVjayBvdXQgbG9hZGluZyBpbWFnZXNcbiAgICAgIC8vIGFzIGVsZW1lbnRzIGFyZSBzY3JvbGxlZCBpbnRvIHZpZXcuLi5cbiAgICAgIC8vICQoJ2ltZzpub3QoW3NyY10pJykuY3NzKHtcbiAgICAgIC8vICAgLy8gJ3Zpc2liaWxpdHknOiAnaGlkZGVuJ1xuICAgICAgLy8gfSlcbiAgICAgIC8vXG4gICAgICAvLyBjb25zdCBMYXp5TG9hZCA9IG5ldyBMTCh7XG4gICAgICAvLyAgIGRhdGFfc3JjOiAnc3JjJyxcbiAgICAgIC8vICAgLy8gdGhyZXNob2xkOiA2MDAsXG4gICAgICAvLyAgIGNhbGxiYWNrX2xvYWQ6IGZ1bmN0aW9uKGltZyl7XG4gICAgICAvL1xuICAgICAgLy8gICAgIC8vICQoaW1nKS5hZGRDbGFzcygnaW1nTG9hZGVkJyk7XG4gICAgICAvLyAgICAgJChpbWcpLmNzcyh7XG4gICAgICAvLyAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgIC8vICAgICAgIC8vICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnXG4gICAgICAvLyAgICAgfSk7XG4gICAgICAvL1xuICAgICAgLy8gICAgIGxvYWRlZEltZ3MrKztcbiAgICAgIC8vICAgICBsb2FkUHJvZ3Jlc3MoKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSk7XG5cbiAgICB9XG5cblxuICAgIC8vIGxpZ2h0IGJveFxuICAgIGZ1bmN0aW9uIGxpZ2h0Qm94KCl7XG4gICAgICAvLyB0b2dnbGUgbGlnaHRib3ggaW4gZ2FsbGVyaWVzXG4gICAgICBnYWxsZXJ5SW1ncy5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgICAgICAgY29uc3QgbGlnaHRib3hJbWdVcmwgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuICAgICAgICAkKCcubGlnaHRib3ggaW1nJykuYXR0cignc3JjJywgbGlnaHRib3hJbWdVcmwpO1xuICAgICAgICAkKCcubGlnaHRib3gnKS5hZGRDbGFzcygnc2hvd0xpZ2h0Ym94Jyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKCcubGlnaHRib3ggaW1nJykuYWRkQ2xhc3MoJ3Nob3dJbWcnKTtcbiAgICAgICAgfSw1MClcbiAgICAgIH0pO1xuXG4gICAgICAkKCcubGlnaHRib3hfX2Nsb3NlQnRuJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJy5saWdodGJveCBpbWcnKS5yZW1vdmVDbGFzcygnc2hvd0ltZycpO1xuICAgICAgICAgICAgJCgnLmxpZ2h0Ym94IGltZycpLmF0dHIoJ3NyYycsICcnKTtcbiAgICAgICAgICAgICQoJy5saWdodGJveCcpLnJlbW92ZUNsYXNzKCdzaG93TGlnaHRib3gnKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbGF6eUxvYWQoKTtcbiAgICBsaWdodEJveCgpO1xuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCQpe1xuICAgICQgPSAkO1xuXG4gICAgLy8gc2hvdyAvIGhpZGUgbWVudSBvbiBzbWFsbGVyIHNjcmVlbnNcbiAgICAkKCcubWVudUJ0bicpLmNsaWNrKGZ1bmN0aW9uKCl7IHNob3dIaWRlTWVudSgkKHRoaXMpKTsgfSk7XG5cbiAgICBmdW5jdGlvbiBzaG93SGlkZU1lbnUobWVudUJ0bil7XG4gICAgICBsZXQgdG9nZ2xlVGV4dCA9ICQobWVudUJ0bikuaHRtbCgpID09PSAnWCcgPyAnTUVOVSDimLAnIDogJ1gnO1xuICAgICAgJChtZW51QnRuKS5odG1sKHRvZ2dsZVRleHQpO1xuXG4gICAgICAkKCcubWVudUhvbGRlcicpLnRvZ2dsZUNsYXNzKCdzaG93TWVudScpO1xuICAgICAgJCgnLm1lbnVUb2dnbGUnKS50b2dnbGVDbGFzcygnaGlkZU1lbnVUb2dnbGUnKTtcbiAgICB9XG5cblxuICAgIC8vIHRvZ2dsZSBwb3J0Zm9saW8gc3ViLW1lbnVcbiAgICAkKCcubWVudS1pdGVtLS1wb3J0Zm9saW8nKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICQoJy5zdWItbWVudScpLnRvZ2dsZUNsYXNzKCdzaG93LXN1Yi1tZW51Jyk7XG4gICAgfSlcblxuICAgIC8vIGhpZGUgcG9ydGZvbGlvIHN1Yi1tZW51IHdoZW4gcmVzdCBvZiBwYWdlIGlzIGNsaWNrZWRcbiAgICAkKCdib2R5JykuY2xpY2soZnVuY3Rpb24oZSl7XG5cbiAgICAgIC8vIGlmIG1lbnUgaXMgZGlzcGxheWVkLCBhbmQgZXZlbnQgdGFyZ2V0IGlzIG5vdCB0aGUgbWVudSwgaGlkZSB0aGUgbWVudVxuICAgICAgbGV0IHN1Yk1lbnVJc09uID0gKCQoJy5zdWItbWVudScpLmhhc0NsYXNzKCdzaG93LXN1Yi1tZW51JykpICYmIChlLnRhcmdldC5pbm5lckhUTUwgIT0gJ1BvcnRmb2xpbycpO1xuXG4gICAgICBpZihzdWJNZW51SXNPbil7XG4gICAgICAgICQoJy5zdWItbWVudScpLnJlbW92ZUNsYXNzKCdzaG93LXN1Yi1tZW51Jyk7XG4gICAgICB9XG5cbiAgICB9KVxuXG4gICAgLy8gbWFrZSBzdXJlIG1lbnUgaGFzIGNvcnJlY3QgY2xhc3NlcyB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XG4gICAgICBpZih3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDY0MHB4KVwiKS5tYXRjaGVzKXtcbiAgICAgICAgaWYoJCgnLm1lbnVIb2xkZXInKS5oYXNDbGFzcygnc2hvd01lbnUnKSl7XG4gICAgICAgICAgJCgnLm1lbnVIb2xkZXInKS5yZW1vdmVDbGFzcygnc2hvd01lbnUnKVxuICAgICAgICAgIGxldCB0b2dnbGVUZXh0ID0gJCgnLm1lbnVCdG4nKS5odG1sKCkgPT09ICdYJyA/ICdNRU5VIOKYsCcgOiAnWCc7XG4gICAgICAgICAgJCgnLm1lbnVCdG4nKS5odG1sKHRvZ2dsZVRleHQpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9KVxuXG5cbn1cbiJdfQ==
