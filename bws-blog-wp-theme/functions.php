<?php 
  function register_menus() {
    register_nav_menus(
      array(
        'primary' => __('Primary')
      )
    );
  }
  add_action('init', 'register_menus');
  
  function add_block_template_part_support() {

      add_theme_support( 'block-template-parts' );

  }
  add_action( 'after_setup_theme', 'add_block_template_part_support' );

?>