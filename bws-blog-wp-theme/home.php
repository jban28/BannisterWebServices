
<?php get_header() ?>

<main>
  <p class="text-center fs-1 mb-2"><?php echo get_bloginfo( 'description', 'display' ) ?></p>
  <?php block_template_part( 'about' ); ?>
  <h1 class="text-center mt-5">Posts</h1>
  <?php
  if ( have_posts() ) {
    while ( have_posts() ) {
      the_post(); 
      get_template_part('template-parts/post-summary');
    }
  }
  ?>
</main>
<?php get_footer() ?>
