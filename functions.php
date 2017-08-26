<?php

  // add support for custom menus
  add_theme_support('menus');
  add_theme_support('post-thumbnails');

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
  function lunara_styles(){    wp_enqueue_style( 'google_fonts','https://fonts.googleapis.com/css?family=Indie+Flower|Roboto:400,500i' );
    wp_enqueue_style( 'main_css', get_template_directory_uri() . '/style.css' );
  }
  add_action('wp_enqueue_scripts', 'lunara_styles');

  function lunara_js(){
    wp_enqueue_script('bundle', get_template_directory_uri() . '/dist/js/bundle.js',array('jquery'), '', true);
  }
  add_action('wp_enqueue_scripts', 'lunara_js');

 ?>
