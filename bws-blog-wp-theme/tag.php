<?php get_header()?>
<main>
  <h1 class="page-title"><i class="fa-solid fa-tag"></i> <?php echo single_tag_title()?></h1>
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