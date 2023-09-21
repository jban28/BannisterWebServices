<?php get_header()?>
<main>
  <h1 class="page-title"><span class="category"><?php echo single_cat_title()?></span></h1>
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
