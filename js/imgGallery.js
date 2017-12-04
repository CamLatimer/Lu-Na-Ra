// import LL from 'vanilla-lazyload';

export default function imgGallery($){
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
    const galleryImgs = $('img[data-src]');
    const numGalleryImgs = galleryImgs.length;
    let loadedImgs = 0;

    function loadProgress(){
      $('.progressBar__progress').css('width', `${(loadedImgs / numGalleryImgs) * 100}%`);
      if(loadedImgs === numGalleryImgs){
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

    function lazyLoad(){
      galleryImgs.each(function(){
        $(this).attr('src', $(this).attr('data-src'));

        $(this).on('load', function(){
          $(this).removeAttr('data-src');
          $(this).addClass('imgLoaded');
          $(this).css('opacity', '1');
          loadedImgs++;
          loadProgress();
        })

      })

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
    function lightBox(){
      // toggle lightbox in galleries
      galleryImgs.click(function(){
        console.log('hello');
        const lightboxImgUrl = $(this).attr('src');
        $('.lightbox img').attr('src', lightboxImgUrl);
        $('.lightbox').addClass('showLightbox');
        setTimeout(function(){
          $('.lightbox img').addClass('showImg');
        },50)
      });

      $('.lightbox__closeBtn').click(function(){
            $('.lightbox img').removeClass('showImg');
            $('.lightbox img').attr('src', '');
            $('.lightbox').removeClass('showLightbox');
      })
    }

    lazyLoad();
    lightBox();

}
