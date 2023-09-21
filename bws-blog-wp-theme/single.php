<?php get_header() ?>
<main>
  <?php get_template_part('template-parts/post-full');
    // If comments are open or there is at least one comment, load up the comment template.
    if ( comments_open() || get_comments_number() ) {
      comments_template();
    }
  ?>

</main>
<?php get_footer() ?>
