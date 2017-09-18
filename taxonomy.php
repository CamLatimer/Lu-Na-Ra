
  <?php get_header(); ?>
  <section class="contentWrapper">

<div class="gallery">



  <?php
  // WP_Query looks for the material specified in the arguments given

  $args =  array (
    'post_type' => 'portfolio_post',
    'portfolio_category' => get_query_var('portfolio_category')
  );
  $query = new WP_Query($args);
  if( $query->have_posts() ) : while( $query->have_posts() ) : $query->the_post(); ?>

    <?php $image = get_field('Image'); if($image) : ?>
    <div class="gallery__img">
      <img src="<?php the_field('Image'); ?>" alt="">
    </div>
    <? endif; ?>

  <?php endwhile; endif; wp_reset_postdata(); ?>


</div>
</section>


<div class="lightbox">
  <h4><span class="lightbox__closeBtn">X <span class="closeText">...CLOSE...</span></span></h4>
  <img src="" alt="">
  </div>


  <?php get_footer(); ?>

</body>
</html>
