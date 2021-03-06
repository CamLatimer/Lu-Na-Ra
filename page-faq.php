<?php
/* Template Name: FAQ Template */
get_header();
?>
<section class="contentWrapper">

  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>


<div class="pageWrapper">
  <h1 class="pageTitle pageTitle--faq"><?php the_title(); ?></h1>
  <p class="pageContent">
    <?php the_content(); ?>
  </p>
</div>

<?php endwhile; else : ?>
  <!-- _e automatically translates message into a different language -->
  <p><?php _e('sorry, no pages found.'); ?>
<?php endif; ?>
</section>





<?php get_footer(); ?>
