
<?php
/* Template Name: Portfolio Page */
 ?>

<?php get_header(); ?>


<section class="contentWrapper">

  <!-- posts and pages -->
<div class="pageWrapper pageWrapper--portfolio">


    <div class="gallery">
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post();  ?>

        <?php if ( get_post_gallery() ) : $gallery = get_post_gallery( get_the_ID(), false ); ?>
              <!-- Loop through all the image and output them one by one -->
              <?php foreach( $gallery['src'] as $src ): ?>

                <div class="gallery__img">
                  <img data-src="<?php echo $src; ?>" alt="Gallery image" />
                </div>

              <?php endforeach; ?>
        <?php endif; ?>

    <?php endwhile; else : ?>
      <p><?php _e('sorry, no posts match your criteria'); ?></p>
    <?php endif; ?>


  </div>


</div>
</section>

<div class="lightbox">
  <h4><span class="lightbox__closeBtn">X <span class="closeText">...CLOSE...</span></span></h4>
  <img src="" alt="">
  </div>

<div class="progressBar">
  <div class="progressBar__progress"></div>
</div>

<?php get_footer(); ?>
