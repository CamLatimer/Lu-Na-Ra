<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
  </head>

<!-- body class configs body element so that styling with the wp dashboard header isn't so annoyging -->

  <body <?php body_class(); ?>>
    <nav>
        <h2 class="menuBtn">
          <span class="">MENU &#9776;</span>
        </h2>
        <?php
            $topMenu = array(
              'container' => false,
              'theme_location' => 'site-menu',
              'menu_class' => 'navMenuWide' // assigns a class to the menu,
            );
            // adds menu to page: wp_nav_menu( default_options_array )
            wp_nav_menu($topMenu);
          ?>

    </nav>
    <div class="menuHolder">
    <?php
      $smallScreenMenu = array(
        'container' => false,
        'theme_location' => 'site-menu',
        'menu_class' => 'navMenu' // assigns a class to the menu,
      );
      // adds menu to page: wp_nav_menu( default_options_array )
      wp_nav_menu($smallScreenMenu);
     ?>
  </div>
