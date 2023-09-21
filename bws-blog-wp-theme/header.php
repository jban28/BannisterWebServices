<!DOCTYPE html>
<html>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <link rel="stylesheet" href="<?php echo esc_url( get_stylesheet_uri() ); ?>" type="text/css" />
    <script src="https://kit.fontawesome.com/5148556b44.js" crossorigin="anonymous"></script>
    <?php wp_head(); ?>
  </head>
  <body>
    <?php wp_body_open(); ?>
    <nav class="justify-content-center navbar navbar-expand sticky-top">
      <ul class="navbar-nav  nav-underline">
        <li class="nav-item">
          <a class="nav-link" href="https://www.bannisterwebservices.co.uk/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.bannisterwebservices.co.uk/portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/">Blog</a>
        </li>
      </ul>
    </nav>

    <?php if (has_nav_menu('primary')) : ?>
    <nav class="blog-navbar">
      <?php
      wp_nav_menu(
        array(
          'theme_location'  => 'primary'
        )
      );  
      ?>
    </nav>
    <?php endif; ?>
