<?php get_header(); ?>
<h1 id="tim"></h1>
<section class="contentWrapper">
<div class="pageWrapper blogPost">

  <!-- posts and pages -->
  <?php if(is_home()): if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

      <div class="blogPost__wrapper">
        <h1 class="blogPost__title"><?php the_title(); ?></h1>
        <?php the_post_thumbnail('full', ['class' => 'blogPost__featImg']); ?>
        <p class="blogPost__content"><?php echo get_the_content(); ?></p>
        <p class="blogPost__date">Posted on <?php the_time('F j, Y'); ?></p>
      </div>
    <?php endwhile; else : ?>
      <p><?php _e('sorry, no posts match your criteria'); ?></p>
    <?php endif; endif; wp_reset_postdata(); ?>


</div>


</section>
<?php get_footer(); ?>


</body>
</html>
