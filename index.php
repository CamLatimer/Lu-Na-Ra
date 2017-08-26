<?php get_header(); ?>

<section class="contentWrapper">

<!-- posts and pages -->
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <h1><?php the_title(); ?></h1>
    <p><?php the_content(); ?></p>

  <?php endwhile; else : ?>
    <p><?php _e('sorry, no posts match your criteria'); ?>
  <?php endif; ?>

</section>
<?php get_footer(); ?>


</body>
</html>
