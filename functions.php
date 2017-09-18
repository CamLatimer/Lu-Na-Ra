<?php

  // add support for custom menus
  add_theme_support('menus');
  add_theme_support('post-thumbnails');

add_filter( 'wp_calculate_image_srcset', '__return_false' );

  function register_theme_menus(){
    // creates new menus for a theme
    register_nav_menus(
      array(
        'site-menu' => ('Site Menu')
      )
    );
  }
  add_action('init', 'register_theme_menus');

// add js and stylesheets
  function lunara_styles(){
    wp_enqueue_style( 'google_fonts','https://fonts.googleapis.com/css?family=Roboto:300,300i,400,700,900,900i');
    wp_enqueue_style( 'main_css', get_template_directory_uri() . '/style.css' );
  }
  add_action('wp_enqueue_scripts', 'lunara_styles');

  function lunara_js(){
    wp_enqueue_script('bundle', get_template_directory_uri() . '/dist/js/bundle.js',array('jquery'), '', true);
  }
  add_action('wp_enqueue_scripts', 'lunara_js');

  function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_login_header');

 ?>
