<?php get_header(); ?>

<section class="contentWrapper">

  <?php if( is_home() ) :  ?>
    <div class="siteTitle">
      <h1 class="siteTitle__title"><?php bloginfo('name'); ?></h1>
    </div>
  <?php else: ?>

<!-- posts and pages -->
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <h1><?php the_title(); ?></h1>
    <p><?php the_content(); ?></p>

  <?php endwhile; else : ?>
    <p><?php _e('sorry, no posts match your criteria'); ?>
  <?php endif; ?>

 <!-- end check for home -->
  <?php endif; ?>



</section>
<?php get_footer(); ?>


</body>
</html>
