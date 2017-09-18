<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <?php if (has_post_thumbnail()) {
    $thumby = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
} ?>


<section class="contentWrapper contentWrapper--front" style="background:url('<?php echo $thumby[0] ?>');background-repeat:no-repeat;background-size:cover;">


<?php endwhile; else : ?>
  <p><?php _e('sorry, no posts match your criteria'); ?></p>
<?php endif; ?>


<!-- <section class="contentWrapper"> -->
  <div class="frontPage__wrapper">
    <div class="siteTitle">
      <h1 class="siteTitle__title"><?php bloginfo('name'); ?></h1>
    </div>
  </div>



</section>
<?php get_footer(); ?>
</body>
</html>
